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

<!-- <aside
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
</aside> -->
{includePlaceholder && asPopover ? (
  <div className="max-xl:hidden h-0 w-64 shrink-0" />
) : null}
<div
  className={cn(
    'motion-reduce:transition-none [transition:background-color_1.5s_ease]',
    menu
      ? 'fixed inset-0 z-10 bg-black/80 dark:bg-black/60'
      : 'bg-transparent'
  )}
  onClick={() => setMenu(false)}
/>
<aside
  className={cn(
    'nextra-sidebar-container flex flex-col',
    'md:top-16 md:shrink-0 motion-reduce:transform-none',
    'transform-gpu transition-all ease-in-out',
    'print:hidden',
    showSidebar ? 'md:w-64' : 'md:w-20',
    asPopover ? 'md:hidden' : 'md:sticky md:self-start',
    menu
      ? 'max-md:[transform:translate3d(0,0,0)]'
      : 'max-md:[transform:translate3d(0,-100%,0)]'
  )}
  ref={containerRef}
>
  <div className="px-4 pt-4 md:hidden">
    {renderComponent(config.search.component, {
      directories: flatDirectories
    })}
  </div>
  <FocusedItemContext.Provider value={focused}>
    <OnFocusItemContext.Provider
      value={item => {
        setFocused(item)
      }}
    >
      <div
        className={cn(
          'overflow-y-auto overflow-x-hidden',
          'p-4 grow md:h-[calc(100vh-var(--nextra-navbar-height)-var(--nextra-menu-height))]',
          showSidebar ? 'nextra-scrollbar' : 'no-scrollbar'
        )}
        ref={sidebarRef}
      >
        {/* without asPopover check <Collapse />'s inner.clientWidth on `layout: "raw"` will be 0 and element will not have width on initial loading */}
        {(!asPopover || !showSidebar) && (
          <Collapse isOpen={showSidebar} horizontal>
            <Menu
              className="nextra-menu-desktop max-md:hidden"
              // The sidebar menu, shows only the docs directories.
              directories={docsDirectories}
              // When the viewport size is larger than `md`, hide the anchors in
              // the sidebar when `floatTOC` is enabled.
              anchors={config.toc.float ? [] : anchors}
              onlyCurrentDocs
            />
          </Collapse>
        )}
        {mounted && window.innerWidth < 768 && (
          <Menu
            className="nextra-menu-mobile md:hidden"
            // The mobile dropdown menu, shows all the directories.
            directories={fullDirectories}
            // Always show the anchor links on mobile (`md`).
            anchors={anchors}
          />
        )}
      </div>
    </OnFocusItemContext.Provider>
  </FocusedItemContext.Provider>

  {hasMenu && (
    <div
      className={cn(
        'sticky bottom-0',
        'bg-white dark:bg-dark', // when banner is showed, sidebar links can be behind menu, set bg color as body bg color
        'mx-4 py-4 shadow-[0_-12px_16px_#fff]',
        'flex items-center gap-2',
        'dark:border-neutral-800 dark:shadow-[0_-12px_16px_#111]',
        'contrast-more:border-neutral-400 contrast-more:shadow-none contrast-more:dark:shadow-none',
        showSidebar
          ? cn(hasI18n && 'justify-end', 'border-t')
          : 'py-4 flex-wrap justify-center'
      )}
      data-toggle-animation={
        showToggleAnimation ? (showSidebar ? 'show' : 'hide') : 'off'
      }
    >
      <LocaleSwitch
        lite={!showSidebar}
        className={cn(showSidebar ? 'grow' : 'max-md:grow')}
      />
      {config.darkMode && (
        <div
          className={
            showSidebar && !hasI18n ? 'grow flex flex-col' : ''
          }
        >
          {renderComponent(config.themeSwitch.component, {
            lite: !showSidebar || hasI18n
          })}
        </div>
      )}
      {config.sidebar.toggleButton && (
        <button
          title={showSidebar ? 'Hide sidebar' : 'Show sidebar'}
          className="max-md:hidden h-7 rounded-md transition-colors text-gray-600 dark:text-gray-400 px-2 hover:bg-gray-100 hover:text-gray-900 dark:hover:bg-primary-100/5 dark:hover:text-gray-50"
          onClick={() => {
            setSidebar(!showSidebar)
            setToggleAnimation(true)
          }}
        >
          <ExpandIcon isOpen={showSidebar} />
        </button>
      )}
    </div>
  )}
</aside>