export const operators = [
  "equal",
  "not_equal",
  "less",
  "less_or_equal",
  "greater",
  "greater_or_equal",
  "between",
  "not_between",
  "begins_with",
  "not_begins_with",
  "contains",
  "not_contains",
  "ends_with",
  "not_ends_with",
  "is_empty",
  "is_not_empty",
] as const;

export type GetPaginatedQueryRuleOperator = typeof operators[number];

export type GetPaginatedQueryRuleValue = string | number | boolean;

export interface GetPaginatedQueryRule<T> {
  field: T;
  operator: GetPaginatedQueryRuleOperator;
  value: GetPaginatedQueryRuleValue[];
}

export interface GetPaginatedQueryRuleGroup<T> {
  condition: "AND" | "OR";
  rules: (GetPaginatedQueryRuleGroup<T> | GetPaginatedQueryRule<T>)[];
}

export interface GetPaginatedQuery<T> {
  limit?: number;
  offset?: number;
  sort?: string;
  order?: "ASC" | "DESC";
  rules?: GetPaginatedQueryRuleGroup<T>;
}

// TODO: Combine these with above

export type FilterType =
  | "text"
  | "date"
  | "number"
  | "boolean"
  | "array"
  | "enum"
  | "contact";

export type FilterValue = GetPaginatedQueryRuleValue;
export type FilterOperator = GetPaginatedQueryRuleOperator;

export interface FilterOperatorParams {
  args: number;
}

const equal = { args: 1 };

const equalityOperators = { equal, not_equal: { args: 1 } };
const numericOperators = {
  ...equalityOperators,
  between: { args: 2 },
  not_between: { args: 2 },
  less: { args: 1 },
  greater: { args: 1 },
  less_or_equal: { args: 1 },
  greater_or_equal: { args: 1 },
};
const arrayOperators = {
  contains: { args: 1 },
  not_contains: { args: 1 },
};

export const nullableOperators = {
  is_empty: { args: 0 },
  is_not_empty: { args: 0 },
};

export const operatorsByType: Record<
  FilterType,
  Partial<Record<FilterOperator, FilterOperatorParams>>
> = {
  text: {
    ...equalityOperators,
    ...arrayOperators,
    begins_with: { args: 1 },
    ends_with: { args: 1 },
    not_begins_with: { args: 1 },
    not_ends_with: { args: 1 },
  },
  date: numericOperators,
  number: numericOperators,
  boolean: { equal },
  array: arrayOperators,
  enum: equalityOperators,
  contact: equalityOperators,
};

interface BaseFilterArgs {
  type: FilterType;
  nullable?: boolean;
}

export interface EnumFilterArgs<T extends readonly string[] = readonly string[]>
  extends BaseFilterArgs {
  type: "enum";
  options: T;
}

export interface OtherFilterArgs extends BaseFilterArgs {
  type: Exclude<FilterType, "enum">;
}

export type FilterArgs = EnumFilterArgs | OtherFilterArgs;

export type Filters<T extends string = string> = Record<T, FilterArgs>;

export interface Filter {
  id: string;
  operator: FilterOperator;
  values: FilterValue[];
}

export function isRuleGroup<T>(
  ruleOrGroup: GetPaginatedQueryRule<T> | GetPaginatedQueryRuleGroup<T>
): ruleOrGroup is GetPaginatedQueryRuleGroup<T> {
  return "condition" in ruleOrGroup;
}

export function validateRule<Field extends string>(
  filters: Filters<Field>,
  rule: GetPaginatedQueryRule<string>
): rule is GetPaginatedQueryRule<Field> {
  const filter = filters[rule.field as Field];
  if (!filter) {
    return false; // Invalid field
  }

  const operator = operatorsByType[filter.type][rule.operator];
  if (!operator) {
    return false; // Invalid operator
  }

  if (operator.args !== rule.value.length) {
    return false; // Invalid number of args
  }

  return true;
}

export function validateRuleGroup<Field extends string>(
  filters: Filters<Field>,
  ruleGroup: GetPaginatedQueryRuleGroup<string>
): ruleGroup is GetPaginatedQueryRuleGroup<Field> {
  for (const rule of ruleGroup.rules) {
    const valid = isRuleGroup(rule)
      ? validateRuleGroup(filters, rule)
      : validateRule(filters, rule);
    if (!valid) {
      return false;
    }
  }
  return true;
}

export function convertRulesToFilters(
  rules: GetPaginatedQuery<string>["rules"]
): Filter[] | null {
  if (!rules) {
    return null;
  }

  // TODO: how to handle groups?
  const rulesWithoutGroups = rules.rules.filter(
    (rule) => "operator" in rule
  ) as GetPaginatedQueryRule<string>[];

  return rulesWithoutGroups.map((rule) => ({
    id: rule.field,
    operator: rule.operator,
    values: [...rule.value],
  }));
}

export function convertFiltersToRules(
  matchType: "all" | "any",
  filters: Filter[]
): GetPaginatedQuery<string>["rules"] {
  return {
    condition: matchType === "all" ? "AND" : "OR",
    rules: filters.map((filter) => ({
      field: filter.id,
      operator: filter.operator,
      value: filter.values,
    })),
  };
}

export * from "./callouts";
export * from "./contacts";
export * from "./notices";
export * from "./payments";
