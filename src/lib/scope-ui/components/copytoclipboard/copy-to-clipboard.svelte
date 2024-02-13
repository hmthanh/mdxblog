<script>
  import { onMount } from "svelte"
  import { CopyIcon, CheckIcon } from "scope-docs"

  export let getValue

  export let isCopied = false
  let timeout

  const copyToClipboard = async () => {
    isCopied = true

    if (!navigator.clipboard) {
      console.error("Access to clipboard rejected!")
      return
    }

    try {
      await navigator.clipboard.writeText(getValue())
    } catch {
      console.error("Failed to copy!")
    }
  }

  onMount(() => {
    if (isCopied) {
      timeout = setTimeout(() => {
        isCopied = false
      }, 2000)
    }

    return () => {
      clearTimeout(timeout)
    }
  })
</script>

<!-- use:forwardEvents -->
<button  on:click={copyToClipboard} title="Copy code" tabindex="0" {...$$restProps}>
  {#if isCopied}
    <CheckIcon class="pointer-events-none h-4 w-4" />
  {:else}
    <CopyIcon class="pointer-events-none h-4 w-4" />
  {/if}
</button>
