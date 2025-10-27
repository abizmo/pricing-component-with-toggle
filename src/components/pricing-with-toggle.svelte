<script lang="ts">
  import Switch from "@components/switch.svelte";
  import { pricingPlans } from '@data/pricing-plans.ts';
  import type { BillingPeriod } from '@types/pricing.ts';

  let billingPeriod: BillingPeriod = 'annual';

  $: currentPlans = pricingPlans.map(plan => ({
    ...plan,
    currentPrice: billingPeriod === 'monthly' ? plan.priceMonthly : plan.priceAnnual
  }));
</script>

<Switch bind:value={billingPeriod} />
<div class="pricing-grid">
  {#each currentPlans as plan}
    <article class="plan" class:highlighted={plan.highlighted}>
      <h3 class="plan-title">{plan.name}</h3>
      <div class="plan-price">
        <span class="currency">$</span>
        <span class="amount">{plan.currentPrice.toFixed(2)}</span>
      </div>
      <ul class="plan-features">
        {#each plan.features as feature}
          <li class="plan-feature">{feature}</li>
        {/each}
      </ul>
      <a href="#" class="cta-button">Learn More</a>
    </article>
  {/each}
</div>

<style>
  .pricing-grid {
    display: grid;
    gap: var(--space-lg);
    max-width: 1110px;
    margin: 0 auto;
  }

  @media (min-width: 768px) {
    .pricing-grid {
      grid-template-columns: repeat(3, 1fr);
      gap: 0;
    }
  }

  .plan {
    background: var(--clr-white);
    padding: var(--space-xl) var(--space-lg);
    border-radius: var(--radius-md);
    box-shadow: 0 20px 40px rgba(212, 210, 244, 0.5);
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
  }

  @media (min-width: 768px) {
    .plan {
      padding: var(--space-lg) var(--space-md);
    }

    .plan.highlighted {
      background: linear-gradient(135deg, var(--clr-gradient-start), var(--clr-gradient-end));
      color: var(--clr-white);
      padding: var(--space-xl) var(--space-lg);
      transform: scale(1.05);
    }

    .plan:first-child {
      border-radius: var(--radius-md) 0 0 var(--radius-md);
    }

    .plan:last-child {
      border-radius: 0 var(--radius-md) var(--radius-md) 0;
    }
  }

  .plan-title {
    font-size: var(--fs-lg);
    color: var(--clr-gray-650);
    margin-bottom: var(--space-md);
  }

  .plan.highlighted .plan-title {
    color: var(--clr-white);
  }

  .plan-price {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: var(--space-lg);
  }

  .currency {
    font-size: var(--fs-2xl);
    margin-right: 0.25rem;
  }

  .amount {
    font-size: var(--fs-3xl);
    letter-spacing: var(--ls-tight);
  }

  .plan-features {
    width: 100%;
    margin-bottom: var(--space-lg);
  }

  .plan-feature {
    border-top: 1px solid var(--clr-blue-50);
    padding: var(--space-sm) 0;
    font-size: var(--fs-sm);
    color: var(--clr-gray-650);
  }

  .plan.highlighted .plan-feature {
    border-color: rgba(255, 255, 255, 0.25);
    color: var(--clr-white);
  }

  .plan-feature:last-child {
    border-bottom: 1px solid var(--clr-blue-50);
  }

  .plan.highlighted .plan-feature:last-child {
    border-color: rgba(255, 255, 255, 0.25);
  }

  .cta-button {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 2.75rem;
    background: linear-gradient(135deg, var(--clr-gradient-start), var(--clr-gradient-end));
    color: var(--clr-white);
    border: none;
    border-radius: var(--radius-sm);
    font-size: var(--fs-sm);
    letter-spacing: var(--ls-wide);
    text-transform: uppercase;
    text-decoration: none;
    font-weight: var(--fw-regular);
    cursor: pointer;
    transition: all 0.2s ease;
  }

  .cta-button:hover {
    opacity: 0.8;
    transform: translateY(-2px);
  }

  .cta-button:focus {
    outline: 2px solid var(--clr-gradient-start);
    outline-offset: 2px;
  }

  .plan.highlighted .cta-button {
    background: var(--clr-white);
    color: var(--clr-gradient-end);
  }

  .plan.highlighted .cta-button:focus {
    outline-color: var(--clr-white);
  }
</style>
