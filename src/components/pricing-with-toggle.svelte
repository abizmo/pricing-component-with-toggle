<script>
  import Switch from "./switch.svelte";

  let isAnnual = false;
</script>

<Switch bind:value={isAnnual} options={['Annually', 'Monthly']} />