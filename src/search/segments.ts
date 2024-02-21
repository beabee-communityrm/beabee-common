import type { Filters } from ".";

export const segmentFilters = {
  id: {
    type: "text",
  },
  name: {
    type: "text",
  },
  description: {
    type: "blob",
  },
} as const satisfies Filters;

export type SegmentFilterName = keyof typeof segmentFilters;
