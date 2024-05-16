import { ContributionPeriod, PaymentMethod } from "../data/index.ts";

import type { Feeable, StripeFeeCountry } from "../types/index.ts";

const stripeFees = {
  gb: {
    [PaymentMethod.StripeCard]: (amount: number) => 0.2 + 0.015 * amount,
    [PaymentMethod.StripeSEPA]: () => 0.3,
    [PaymentMethod.StripeBACS]: (amount: number) =>
      Math.min(2, Math.max(0.2, 0.01 * amount)),
    [PaymentMethod.StripePayPal]: (amount: number) => 0.1 + 0.020 * amount,
  },
  eu: {
    [PaymentMethod.StripeCard]: (amount: number) => 0.25 + 0.015 * amount,
    [PaymentMethod.StripeSEPA]: () => 0.35,
    [PaymentMethod.StripeBACS]: () => 0, // Not available
    [PaymentMethod.StripePayPal]: (amount: number) => 0.1 + 0.020 * amount,
  },
  ca: {
    [PaymentMethod.StripeCard]: (amount: number) => 0.3 + 0.029 * amount,
    [PaymentMethod.StripeSEPA]: () => 0, // Not available
    [PaymentMethod.StripeBACS]: () => 0, // Not available
    [PaymentMethod.StripePayPal]: () => 0, // Not available
  },
} as const;

const gcFee = (amount: number) => 0.2 + amount * 0.01;

export function calcPaymentFee(
  feeable: Feeable,
  country: StripeFeeCountry,
): number {
  if (feeable.period === ContributionPeriod.Annually) {
    return 0;
  }

  switch (feeable.paymentMethod) {
    case PaymentMethod.None:
    case PaymentMethod.Manual:
      return 0;
    case PaymentMethod.GoCardlessDirectDebit:
      return gcFee(feeable.amount);
    default:
      return stripeFees[country][feeable.paymentMethod](feeable.amount);
  }
}
