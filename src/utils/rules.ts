import { InvalidRule } from "../error";
import {
  Filters,
  nullableOperators,
  operatorsByTypeMap,
  Rule,
  RuleGroup,
  ValidatedRule,
  ValidatedRuleGroup,
} from "../search";
import { isValidDate } from "./date";

export function isRuleGroup(
  ruleOrGroup: Rule | RuleGroup
): ruleOrGroup is RuleGroup {
  return "condition" in ruleOrGroup;
}

export function validateRule<Field extends string>(
  filters: Filters<Field>,
  rule: Rule
): ValidatedRule<Field> {
  const [fieldName, fieldParam] = rule.field.split(".", 2) as [
    Field,
    string | undefined
  ];
  const filter = filters[fieldName];
  if (!filter) {
    throw new InvalidRule(rule, `Invalid field: ${rule.field}`);
  }

  let expectedArgs = 0;
  if (rule.operator in nullableOperators) {
    // Field cannot be empty (except text which can always be empty)
    if (!filter.nullable && filter.type !== "text") {
      throw new InvalidRule(
        rule,
        `Invalid nullable operator: field is not nullable`
      );
    }
  } else {
    const operator = operatorsByTypeMap[filter.type][rule.operator];
    if (!operator) {
      throw new InvalidRule(
        rule,
        `Invalid operator for type: ${filter.type} type doesn't define ${rule.operator}`
      );
    }
    expectedArgs = operator.args;
  }

  if (expectedArgs !== rule.value.length) {
    throw new InvalidRule(
      rule,
      `Invalid operator argument count: ${rule.operator} needs ${expectedArgs}, ${rule.value.length} given`
    );
  }

  const expectedType =
    filter.type === "custom"
      ? typeof rule.value[0]
      : filter.type === "boolean" || filter.type === "number"
      ? filter.type
      : "string";

  if (rule.value.some((v) => typeof v !== expectedType)) {
    throw new InvalidRule(
      rule,
      `Invalid operator argument type: ${
        rule.operator
      } needs ${expectedType}, ${rule.value.map((v) => typeof v)} given`
    );
  }
  if (
    filter.type === "date" &&
    rule.value.some((v) => !isValidDate(v as string))
  ) {
    throw new InvalidRule(
      rule,
      `Invalid operator argument: date type needs valid absolute or relative date, ${rule.value} given`
    );
  }

  return {
    field: fieldName,
    param: fieldParam,
    type: filter.type,
    operator: rule.operator,
    value: rule.value,
  } as ValidatedRule<Field>;
}

export function validateRuleGroup<Field extends string>(
  filters: Filters<Field>,
  ruleGroup: RuleGroup
): ValidatedRuleGroup<Field> {
  const validatedRuleGroup: ValidatedRuleGroup<Field> = {
    condition: ruleGroup.condition,
    rules: [],
  };

  for (const rule of ruleGroup.rules) {
    const valid = isRuleGroup(rule)
      ? validateRuleGroup(filters, rule)
      : validateRule(filters, rule);
    validatedRuleGroup.rules.push(valid);
  }
  return validatedRuleGroup;
}
