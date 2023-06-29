import type { Filters } from ".";
import { PaymentStatus } from "../data";

export const paymentFilters = {
  contact: {
    type: "contact",
  },
  chargeDate: {
    type: "date",
  },
  amount: {
    type: "number",
  },
  status: {
    type: "enum",
    options: [
      PaymentStatus.Successful,
      PaymentStatus.Pending,
      PaymentStatus.Failed,
      PaymentStatus.Cancelled,
    ],
  },
} as const satisfies Filters;

export type PaymentFilterName = keyof typeof paymentFilters;
