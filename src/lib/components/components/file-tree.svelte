<script>
  import { createEventDispatcher } from "svelte"

  const dispatch = createEventDispatcher()

  export let name
  export let open = false
  export let defaultOpen = false

  let isOpen = defaultOpen

  const toggleOpen = () => {
    isOpen = !isOpen
    dispatch("toggle", isOpen)
  }
</script>

<div class="tree">
  <ul>
    <li class="folder">
      <div class="icon" on:click={toggleOpen} title={name}>
        {#if isOpen}
          <svg viewBox="0 0 24 24">
            <path
              d="M5 19a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2h4l2 2h4a2 2 0 0 1 2 2v1M5 19h14a2 2 0 0 0 2-2v-5a2 2 0 0 0-2-2H9a2 2 0 0 0-2 2v5a2 2 0 0 1-2 2Z"
            />
          </svg>
        {:else}
          <svg viewBox="0 0 24 24">
            <path d="M3 7v10a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-6l-2-2H5a2 2 0 0 0-2 2Z" />
          </svg>
        {/if}
        <span class="label">{name}</span>
      </div>

      {#if isOpen}
        <ul>
          <slot />
        </ul>
      {/if}
    </li>
  </ul>
</div>

<style>
  .tree {
    @apply mt-6 select-none text-sm text-gray-800 rounded-lg px-4 py-2 inline-block;
  }

  .folder {
    @apply flex list-none flex-col cursor-pointer;
  }

  .file {
    @apply flex list-none cursor-default;
  }

  .active {
    @apply text-primary-600 underline;
  }

  .icon {
    @apply inline-flex items-center py-1;
  }

  .icon svg {
    @apply h-4 w-4;
  }

  .label {
    @apply ml-1;
  }
</style>
