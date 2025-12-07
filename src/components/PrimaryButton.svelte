<script lang="ts">
  import { createEventDispatcher } from 'svelte';

  const dispatch = createEventDispatcher();

  export let type: 'button' | 'submit' | 'reset' = 'button';
  export let disabled: boolean = false;
  export let ariaLabel: string | undefined;
  const handleClick = (e: MouseEvent) => {
    dispatch('handleClick', e);
  };
</script>

<button
  {type}
  {disabled}
  aria-label={ariaLabel}
  class="px-4 py-2 font-semibold text-white bg-blue-600 rounded-lg shadow-md hover:bg-blue-700 transition duration-150 ease-in-out focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
  on:click={handleClick}
>
  <slot />
</button>
