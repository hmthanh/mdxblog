<script>
  import { link } from "svelte-routing"
</script>

<div class="card" class:image>
  <slot />

  {#if href}
    <a {href} use:link class="title" class:image>
      <slot name="icon" />
      <span class="flex gap-1">
        <slot name="title" />
        {#if arrow}
          <span class="arrow"></span>
        {/if}
      </span>
    </a>
  {:else}
    <span class="title">
      <slot name="icon" />
      <slot name="title" />
      {#if arrow}
        <span class="arrow"></span>
      {/if}
    </span>
  {/if}
</div>

<style>
  .card {
    @apply bg-transparent shadow-sm border border-gray-200 text-current no-underline rounded-lg p-4;
  }

  .card.image {
    @apply bg-gray-100 shadow border-gray-200;
  }

  .title {
    @apply font-semibold flex items-center gap-2;
  }

  .title.image {
    @apply text-gray-700;
  }

  .arrow {
    @apply transition-transform duration-75 group-hover:translate-x-[2px];
  }
</style>
