<script>
  import { cn } from "clsx"

  let _class
  export { _class as class }

  const classes = {
    cards: cn(
      "nextra-cards mt-4 gap-4 grid",
      "not-prose" // for nextra-theme-docs
    ),
    card: cn(
      "nextra-card group flex flex-col justify-start overflow-hidden rounded-lg border border-gray-200",
      "text-current no-underline dark:shadow-none",
      "hover:shadow-gray-100 dark:hover:shadow-none shadow-gray-100",
      "active:shadow-sm active:shadow-gray-200",
      "transition-all duration-200 hover:border-gray-300"
    ),
    title: cn("flex font-semibold items-start gap-2 p-4 text-gray-700 hover:text-gray-900"),
  }

  export let title
  export let icon
  export let image
  export let arrow
  export let href
</script>

{#if image}
  <a
    {href}
    class={cn(
      classes.card,
      "bg-gray-100 shadow dark:border-neutral-700 dark:bg-neutral-800 dark:text-gray-50 hover:shadow-lg dark:hover:border-neutral-500 dark:hover:bg-neutral-700",
      _class
    )}
    {...$$restProps}
    ><slot />
    <span class={cn(classes.title, "dark:text-gray-300 dark:hover:text-gray-100")}>
      {icon}
      <span class="flex gap-1">
        {title}
        {#if arrow}
          <span class="transition-transform duration-75 group-hover:translate-x-[2px]"> → </span>
        {/if}
      </span>
    </span>
  </a>
{:else}
  <a
    {href}
    class={cn(
      classes.card,
      "bg-transparent shadow-sm dark:border-neutral-800 hover:bg-slate-50 hover:shadow-md dark:hover:border-neutral-700 dark:hover:bg-neutral-900"
    )}
    {...$$restProps}
  >
    <span class={cn(classes.title, "dark:text-neutral-200 dark:hover:text-neutral-50 flex items-center")}>
      {icon}
      {title}
      {#if arrow}
        <span class="transition-transform duration-75 group-hover:translate-x-[2px]"> → </span>
      {/if}
    </span>
  </a>
{/if}
