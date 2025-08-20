<script>
  import Switch from "@components/switch.svelte";

  let isMonthly = false;
  const plans = [
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
    },
    {
      name: "Master",
      priceMonthly: 39.99,
      priceAnnual: 399.99,
      features: ["2 TB Storage", "10 Users Allowed", "Send up to 20 GB"],
    },
  ];
</script>

<Switch bind:value={isMonthly} options={["Annually", "Monthly"]} />
<ul>
  {#each plans as plan}
    <li>
      <div class="plan">
        <h3 class="plan-title">{plan.name}</h3>
        <p class="plan-price">
          <span>$</span>{isMonthly ? plan.priceMonthly : plan.priceAnnual}
        </p>
        <ul class="plan-features">
          {#each plan.features as feature}
            <li class="plan-feature">{feature}</li>
          {/each}
        </ul>
        <a href="#" class="button">Learn more</a>
      </div>
    </li>
  {/each}
</ul>

<style>
  .plan {
    background-color: var(--clr-debug);
    padding: 1.875rem;
  }

  .plan-title {
    font-size: var(--fs-lg);
  }

  .plan-price {
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: var(--fs-3xl);
    letter-spacing: var(--ls-tight);

    & > span {
      font-size: var(--fs-2xl);
    }
  }

  .plan-features {
  }

  .plan-feature {
  }

  .button {
    font-size: var(--fs-sm);
    letter-spacing: var(--ls-wide);
    text-transform: uppercase;
    text-decoration: none;
  }
</style>
