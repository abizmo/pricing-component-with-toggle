export interface PricingPlan {
  name: string;
  priceMonthly: number;
  priceAnnual: number;
  features: string[];
  highlighted?: boolean;
}

export type BillingPeriod = 'monthly' | 'annual';

export interface SwitchOption {
  label: string;
  value: BillingPeriod;
}