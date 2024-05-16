import { assertEquals } from "https://deno.land/std@0.212.0/assert/assert_equals.ts";
import {
  calcPaymentFee,
  ContributionPeriod,
  PaymentMethod,
} from "../../mod.ts";

Deno.test("calcPaymentFee returns correct fee", async (t) => {
  await t.step(
    "calcPaymentFee returns 0 for any annual contributions",
    function () {
      const country = "gb";

      for (const method of Object.values(PaymentMethod)) {
        assertEquals(
          calcPaymentFee({
            period: ContributionPeriod.Annually,
            paymentMethod: method,
            amount: 100,
          }, country),
          0,
        );
      }
    },
  );

  await t.step(
    "calcPaymentFee returns correct fee for other contributions",
    function () {
      const country = "gb";

      const expectedFees = {
        [PaymentMethod.None]: 0,
        [PaymentMethod.Manual]: 0,
        [PaymentMethod.StripeCard]: 0.2 + 0.015 * 100,
        [PaymentMethod.StripeSEPA]: 0.3,
        [PaymentMethod.StripeBACS]: 0.2,
        [PaymentMethod.StripePayPal]: 0.1 + 0.020 * 100,
        [PaymentMethod.GoCardlessDirectDebit]: 0.2 + 100 * 0.01,
      };

      for (const method of Object.values(PaymentMethod)) {
        assertEquals(
          calcPaymentFee({
            period: ContributionPeriod.Monthly,
            paymentMethod: method,
            amount: 100,
          }, country),
          expectedFees[method],
        );
      }
    },
  );
});
