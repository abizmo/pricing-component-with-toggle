import type { PricingPlan } from '@types/pricing.ts';

export const pricingPlans: PricingPlan[] = [
  {
    name: "Basic",
    priceMonthly: 19.99,
    priceAnnual: 199.99,
    features: ["500 GB Storage", "2 Users Allowed", "Send up to 3 GB"],
  },
  {
    name: "Professional",
    priceMonthly: 24.99,
    priceAnnual: 249.99,
    features: ["1 TB Storage", "5 Users Allowed", "Send up to 10 GB"],
    highlighted: true,
  },
  {
    name: "Master",
    priceMonthly: 39.99,
    priceAnnual: 399.99,
    features: ["2 TB Storage", "10 Users Allowed", "Send up to 20 GB"],
  },
];