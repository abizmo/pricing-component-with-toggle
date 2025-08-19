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
      <div>
        <h3>{plan.name}</h3>
        <p>
          Price: {isMonthly ? plan.priceMonthly : plan.priceAnnual}
          {isMonthly ? "/ month" : "/ year"}
        </p>
        <ul>
          {#each plan.features as feature}
            <li>{feature}</li>
          {/each}
        </ul>
        <button>Learn more</button>
      </div>
    </li>
  {/each}
</ul>
