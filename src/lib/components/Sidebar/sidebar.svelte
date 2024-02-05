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
        "sticky bottom-0",
        "bg-white dark:bg-dark", // when banner is showed, sidebar links can be behind menu, set bg color as body bg color
        "mx-4 py-4 shadow-[0_-12px_16px_#fff]",
        "flex items-center gap-2",
        "dark:border-neutral-800 dark:shadow-[0_-12px_16px_#111]",
        "contrast-more:border-neutral-400 contrast-more:shadow-none contrast-more:dark:shadow-none",
        showSidebar ? cn(hasI18n && "justify-end", "border-t") : "py-4 flex-wrap justify-center"
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
