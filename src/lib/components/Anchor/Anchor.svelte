<script>
  // stores
  import { config } from "./stores.js"

  export let href = ""
  export let newWindow = false
</script>

{#if newWindow}
  <a {...$$restProps} {href} target="_blank" rel="noreferrer">
    <slot />
    <span class="sr-only">(opens in a new tab)</span>
  </a>
{:else if !href}
  <a {href} {...$$restProps}>
    <slot />
  </a>
{:else if $config.newNextLinkBehavior}
  <a {...$$restProps} {href}>
    <slot />
  </a>
{:else}
  <a {href} {...$$restProps}>
    <slot />
  </a>
{/if}
