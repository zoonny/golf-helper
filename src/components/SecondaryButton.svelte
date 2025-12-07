<script lang="ts">
  export let type: 'button' | 'submit' | 'reset' = 'button';
  export let disabled: boolean = false;
  export let ariaLabel: string | undefined;
</script>

<button
  {type}
  {disabled}
  aria-label={ariaLabel}
  class="px-4 py-2 font-semibold text-gray-700 bg-gray-200 rounded-lg shadow-md hover:bg-gray-300 transition duration-150 ease-in-out focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2"
>
  <slot />
</button>
