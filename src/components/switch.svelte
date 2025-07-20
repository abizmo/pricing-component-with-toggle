<script lang="ts">
  export let value = false;
  export let options: string[] = []

  function toggle(event: Event){
    const target = event.target as HTMLInputElement;

    const state = target.getAttribute('aria-checked');

    value = state === 'true' ? false : true;
  }
</script>

<label>
  <span>{options[0]}{value ? ' (off)' : ' (on)'}</span>
  <button
    role="switch"
    aria-checked={value}
    on:click={toggle}>toggle</button>
  <span>{options[1]}{value ? ' (on)' : ' (off)'}</span>
</label>
