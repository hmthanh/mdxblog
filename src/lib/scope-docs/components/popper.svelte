<script lang="ts">
  import { onDestroy } from "svelte"
  import { createPopper, type Options } from "@popperjs/core"

  export let options: Partial<Options> = {
    strategy: "fixed",
    placement: "top-start",
    modifiers: [
      { name: "offset", options: { offset: [0, 10] } },
      {
        name: "sameWidth",
        enabled: true,
        fn({ state }) {
          state.styles.popper.minWidth = `${state.rects.reference.width}px`
        },
        phase: "beforeWrite",
        requires: ["computeStyles"],
      },
    ],
  }

  export let triggerElement: HTMLElement
  export let popperElement: HTMLElement

  let popperInstance: ReturnType<typeof createPopper>

  $: if (triggerElement && popperElement) {
    if (popperInstance) {
      popperInstance.destroy()
    }

    popperInstance = createPopper(triggerElement, popperElement, options)

    onDestroy(() => {
      popperInstance.destroy()
    })
  }
</script>

<div bind:this={triggerElement}>
  <!-- reference element -->
</div>
<div bind:this={popperElement}>
  <!-- popper element -->
</div>
