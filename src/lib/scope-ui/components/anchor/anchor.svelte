<script>
  import cn from "clsx"
  let _class
  export { _class as class }

  export let href = ""
  export let newWindow = false
</script>

{#if newWindow}
  <a {...$$restProps} {href} target="_blank" rel="noreferrer" class={cn(_class)}>
    <slot />
    <span class="sr-only">(opens in a new tab)</span>
  </a>
{:else if !href}
  <a {href} {...$$restProps}>
    <slot />
  </a>
{:else}
  <a {href} {...$$restProps}>
    <slot />
  </a>
{/if}
