<script>
  import { cn } from "clsx"
  // state
  let showSidebar = true
  let showToggleAnimation = false

  // helpers
  import { onMount } from "svelte"
  import { fade } from "svelte/transition"

  // components
  import Menu from "./Menu.svelte"
  import LocaleSwitch from "./LocaleSwitch.svelte"
  import ThemeSwitch from "./ThemeSwitch.svelte"

  // stores
  import { menu } from "../stores/menu.js"
  import { config } from "../stores/config.js"

  const hasI18n = config.i18n.length > 0

  // logic
  onMount(() => {
    menu.subscribe((value) => {
      if (value) {
        document.body.classList.add("overflow-hidden", "md:overflow-auto")
      } else {
        document.body.classList.remove("overflow-hidden", "md:overflow-auto")
      }
    })
  })

  function toggleSidebar() {
    showSidebar = !showSidebar
    showToggleAnimation = true
  }
</script>

<div class="fixed inset-0 z-10 bg-black/80 dark:bg-black/60" on:click={() => ($menu = false)} transition:fade />

<aside
  class="flex flex-col md:top-16 md:shrink-0 md:w-64 md:sticky md:self-start"
  class:md--hidden={!$showSidebar}
  in:fade={{ duration: 150 }}
  out:fade={{ duration: 150 }}
>
  {#if $showSidebar}
    <Menu desktop />
  {/if}

  {#if !$showSidebar}
    <Menu mobile />
  {/if}

  {#if $config.darkMode || $config.i18n || $config.sidebar.toggleButton}
    <div
      class={cn(
        "nx-sticky nx-bottom-0",
        "nx-bg-white dark:nx-bg-dark", // when banner is showed, sidebar links can be behind menu, set bg color as body bg color
        "nx-mx-4 nx-py-4 nx-shadow-[0_-12px_16px_#fff]",
        "nx-flex nx-items-center nx-gap-2",
        "dark:nx-border-neutral-800 dark:nx-shadow-[0_-12px_16px_#111]",
        "contrast-more:nx-border-neutral-400 contrast-more:nx-shadow-none contrast-more:dark:nx-shadow-none",
        showSidebar ? cn(hasI18n && "nx-justify-end", "nx-border-t") : "nx-py-4 nx-flex-wrap nx-justify-center"
      )}
      in:fade={{ duration: 150 }}
      out:fade={{ duration: 150 }}
    >
      <LocaleSwitch lite={!$showSidebar} />

      {#if $config.darkMode}
        <ThemeSwitch lite={!$showSidebar || $config.i18n} />
      {/if}

      {#if $config.sidebar.toggleButton}
        <button
          class="max-md:hidden h-7 rounded-md transition-colors text-gray-600 dark:text-gray-400 px-2 hover:bg-gray-100 hover:text-gray-900 dark:hover:bg-primary-100/5 dark:hover:text-gray-50"
          on:click={toggleSidebar}
        >
          {#if $showSidebar}
            Hide sidebar
          {:else}
            Show sidebar
          {/if}
        </button>
      {/if}
    </div>
  {/if}
</aside>

<style>
  /* styles */
</style>
