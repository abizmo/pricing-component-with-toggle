<script lang="ts">
  import type { BillingPeriod } from '@types/pricing.ts';

  export let value: BillingPeriod = 'annual';
  export let options: { label: string; value: BillingPeriod }[] = [
    { label: 'Annually', value: 'annual' },
    { label: 'Monthly', value: 'monthly' }
  ];

  function toggle() {
    value = value === 'monthly' ? 'annual' : 'monthly';
  }

  $: isMonthly = value === 'monthly';
</script>

<div class="switch-container">
  <span class="switch-label" class:active={!isMonthly}>{options[0].label}</span>
  <button
    class="switch"
    role="switch"
    aria-checked={isMonthly}
    aria-label="Toggle between monthly and annual billing"
    on:click={toggle}
  >
    <span class="switch-thumb" class:active={isMonthly}></span>
  </button>
  <span class="switch-label" class:active={isMonthly}>{options[1].label}</span>
</div>

<style>
  .switch-container {
    display: flex;
    align-items: center;
    gap: var(--space-md);
    margin-bottom: var(--space-xl);
  }

  .switch-label {
    font-size: var(--fs-base);
    color: var(--clr-gray-650);
    transition: color 0.2s ease;
  }

  .switch-label.active {
    color: var(--clr-gray-700);
  }

  .switch {
    position: relative;
    width: 3.5rem;
    height: 2rem;
    background: linear-gradient(135deg, var(--clr-gradient-start), var(--clr-gradient-end));
    border: none;
    border-radius: 1rem;
    cursor: pointer;
    transition: all 0.2s ease;
  }

  .switch:hover {
    opacity: 0.8;
  }

  .switch:focus {
    outline: 2px solid var(--clr-gradient-start);
    outline-offset: 2px;
  }

  .switch-thumb {
    position: absolute;
    top: 0.25rem;
    left: 0.25rem;
    width: 1.5rem;
    height: 1.5rem;
    background: var(--clr-white);
    border-radius: 50%;
    transition: transform 0.2s ease;
  }

  .switch-thumb.active {
    transform: translateX(1.5rem);
  }
</style>
