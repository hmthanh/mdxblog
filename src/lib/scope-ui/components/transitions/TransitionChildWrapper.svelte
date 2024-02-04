<script lang="ts">
  import { hasOpenClosed } from "scope-ui/internal/open-closed"
  import TransitionChild from "./TransitionChild.svelte"
  import TransitionRoot, { type TTransitionRootProps } from "./TransitionRoot.svelte"
  import type { SupportedAs } from "scope-ui/internal/elements"
  import type { HTMLActionArray } from "scope-ui/hooks/use-actions"
  import { hasTransitionContext } from "./common.svelte"

  /***** Props *****/

  type $$Props = TTransitionRootProps

  export let as: SupportedAs = "div"
  export let use: HTMLActionArray = []

  /***** Events *****/

  /***** Component *****/
  let hasTransition = hasTransitionContext()
  let hasOpen = hasOpenClosed()
</script>

{#if !hasTransition && hasOpen}
  <TransitionRoot {...$$props} {as} use={[...use]} on:introstart on:introend on:outrostart on:outroend>
    <slot />
  </TransitionRoot>
{:else}
  <TransitionChild {...$$props} {as} use={[...use]} on:introstart on:introend on:outrostart on:outroend>
    <slot />
  </TransitionChild>
{/if}
