<script lang="ts">
  import cn from "clsx"
  let _class
  export { _class as class }

  export let title
</script>

<li
  class={cn(
    "[word-break:break-word]",
    _class,
    title ? "mt-5 mb-2 px-2 py-1.5 text-sm font-semibold text-gray-900 first:mt-0 dark:text-gray-100" : "my-4"
  )}
>
  <hr class="mx-2 border-t border-gray-200 dark:border-primary-100/10" />
</li>

<!-- {#if title}
    config.sidebar.titleComponent, {
        title,
        type: 'separator',
        route: ''
      })
    {:else}
    
    {/if} -->
