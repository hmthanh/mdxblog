<script>
  let _class = "";
  export {_class as class}

</script>

<button class="button {_class}" on:click on:keydown {...$$restProps}>
  <slot />
</button>

<style>
  .button {
    @apply transition-all active:opacity-50 rounded-md p-1.5;

    @apply bg-primary-700/5 border border-black/5 text-gray-600 hover:text-gray-900;

    @media (prefers-color-scheme: dark) {
      @apply bg-primary-300/10 border-white/10 text-gray-400 hover:text-gray-50;
    }
  }
</style>
