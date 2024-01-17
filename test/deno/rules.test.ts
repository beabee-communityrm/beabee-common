import { assertEquals } from "https://deno.land/std@0.212.0/assert/assert_equals.ts";
import { assert } from "https://deno.land/std@0.212.0/assert/assert.ts";
import { assertThrows } from "https://deno.land/std@0.212.0/assert/assert_throws.ts";
import { Filters, InvalidRule, validateRule } from "../../mod.ts";

const testFilters = {
  name: {
    type: "text",
  },
  count: {
    type: "number",
  },
  starts: {
    type: "date",
    nullable: true,
  },
  period: {
    type: "enum",
    options: ["monthly", "annually"],
  },
  tags: {
    type: "array",
  },
  hobbies: {
    type: "array",
    options: ["football", "knitting", "music"],
  },
} satisfies Filters;

Deno.test("validateRule should validate", () => {
  Deno.test("a basic rule", () => {
    assertEquals(
      validateRule(testFilters, {
        field: "name",
        operator: "equal",
        value: ["foo"],
      }),
      {
        type: "text",
        field: "name",
        nullable: false,
        operator: "equal",
        value: ["foo"],
        // TODO: Fix any
        // deno-lint-ignore no-explicit-any
      } as any,
    );
  });

  Deno.test("a null operator on a non-nullable text filter", () => {
    assert(
      validateRule(testFilters, {
        field: "name",
        operator: "is_empty",
        value: [],
      }),
    );
  });

  Deno.test("a null operator on a nullable filter", () => {
    assert(
      validateRule(testFilters, {
        field: "starts",
        operator: "is_empty",
        value: [],
      }),
    );
  });

  Deno.test("a date filter with a valid absolute date", () => {
    assert(
      validateRule(testFilters, {
        field: "starts",
        operator: "greater",
        value: ["2022-12-01"],
      }),
    );
  });

  Deno.test("a date filter with a valid relative and absolute date", () => {
    assert(
      validateRule(testFilters, {
        field: "starts",
        operator: "between",
        value: ["2022-12-01", "$now(d:-1,M:-1)"],
      }),
    );
  });

  Deno.test("a select filter with a valid option", () => {
    assert(
      validateRule(testFilters, {
        field: "period",
        operator: "equal",
        value: ["monthly"],
      }),
    );
  });

  Deno.test("an array filter without defined options", () => {
    assert(
      validateRule(testFilters, {
        field: "tags",
        operator: "contains",
        value: ["expert"],
      }),
    );
  });

  Deno.test("an array filter with defined options", () => {
    assert(
      validateRule(testFilters, {
        field: "hobbies",
        operator: "contains",
        value: ["football"],
      }),
    );
  });
});

Deno.test("validateRule should fail for", () => {
  Deno.test("an invalid field", () => {
    assertThrows(() =>
      validateRule(testFilters, {
        field: "unknown",
        operator: "equal",
        value: ["test"],
      })
    );
  });

  Deno.test("an invalid operator", () => {
    assertThrows(() =>
      validateRule(testFilters, {
        field: "name",
        operator: "greater",
        value: [0],
      })
    );
  });

  Deno.test("an invalid value type", () => {
    assertThrows(() =>
      validateRule(testFilters, {
        field: "name",
        operator: "equal",
        value: [0],
      })
    );
  });

  Deno.test("an invalid number of values", () => {
    assertThrows(() =>
      validateRule(testFilters, {
        field: "name",
        operator: "equal",
        value: [],
      })
    );
  });

  Deno.test("a null operator on non-nullable filter", () => {
    assertThrows(() => {
      validateRule(testFilters, {
        field: "count",
        operator: "is_empty",
        value: [],
      });
    });
  });

  Deno.test("a date filter with an invalid relative date", () => {
    assertThrows(() =>
      validateRule(testFilters, {
        field: "starts",
        operator: "between",
        value: ["2022-12-01", "$now(d-1,M:-1)"],
      })
    );
  });

  Deno.test("a select filter with an invalid option", () => {
    assertThrows(() =>
      validateRule(testFilters, {
        field: "period",
        operator: "equal",
        value: ["weekly"],
      })
    );
  });

  Deno.test("an array filter with an invalid option", () => {
    assertThrows(() =>
      validateRule(testFilters, {
        field: "hobbies",
        operator: "contains",
        value: ["hockey"],
      })
    );
  });
});
