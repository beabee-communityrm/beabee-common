export enum ContributionPeriod {
  Monthly = "monthly",
  Annually = "annually",
}

export enum ContributionType {
  Automatic = "Automatic",
  Manual = "Manual",
  Gift = "Gift",
  None = "None",
}

export enum MembershipStatus {
  Active = "active",
  Expiring = "expiring",
  Expired = "expired",
  None = "none",
}

export enum NewsletterStatus {
  Subscribed = "subscribed",
  Unsubscribed = "unsubscribed",
  Cleaned = "cleaned",
  None = "none",
}

export enum PaymentMethod {
  StripeCard = "s_card",
  StripeSEPA = "s_sepa",
  StripeBACS = "s_bacs",
  GoCardlessDirectDebit = "gc_direct-debit",
}
