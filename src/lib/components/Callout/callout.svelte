<script>
  import { InformationCircleIcon } from "../icons.svelte"

  const typeToEmoji = {
    default: "💡",
    error: "🚫",
    info: InformationCircleIcon,
    warning: "⚠️",
  }

  export let type = "default"
  export let emoji = typeToEmoji[type]
</script>

<div class="callout {type}">
  {#if typeof emoji === "string"}
    <div class="emoji">{emoji}</div>
  {:else if emoji}
    <svelte:component this={emoji} class="emoji" />
  {/if}

  <div class="w-full min-w-0 leading-7">
    <slot />
  </div>
</div>

<style lang="css">
  .callout {
    @apply mt-6 flex rounded-lg py-2 overflow-x-auto;
  }

  .callout.default {
    @apply border-orange-100 bg-orange-50 text-orange-800;
  }

  .callout.error {
    @apply border-red-200 bg-red-100 text-red-900;
  }

  .callout.info {
    @apply border-blue-200 bg-blue-100 text-blue-900;
  }

  .callout.warning {
    @apply border-yellow-100 bg-yellow-50 text-yellow-900;
  }

  /* .emoji {
    @apply select-none text-xl pl-3 pr-2 font-apple-color-emoji;
  } */
</style>
