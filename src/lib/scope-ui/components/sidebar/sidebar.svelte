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
  <div className="max-xl:nx-hidden nx-h-0 nx-w-64 nx-shrink-0" />
) : null}
<div
  className={cn(
    'motion-reduce:nx-transition-none [transition:background-color_1.5s_ease]',
    menu
      ? 'nx-fixed nx-inset-0 nx-z-10 nx-bg-black/80 dark:nx-bg-black/60'
      : 'nx-bg-transparent'
  )}
  onClick={() => setMenu(false)}
/>
<aside
  className={cn(
    'nextra-sidebar-container nx-flex nx-flex-col',
    'md:nx-top-16 md:nx-shrink-0 motion-reduce:nx-transform-none',
    'nx-transform-gpu nx-transition-all nx-ease-in-out',
    'print:nx-hidden',
    showSidebar ? 'md:nx-w-64' : 'md:nx-w-20',
    asPopover ? 'md:nx-hidden' : 'md:nx-sticky md:nx-self-start',
    menu
      ? 'max-md:[transform:translate3d(0,0,0)]'
      : 'max-md:[transform:translate3d(0,-100%,0)]'
  )}
  ref={containerRef}
>
  <div className="nx-px-4 nx-pt-4 md:nx-hidden">
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
          'nx-overflow-y-auto nx-overflow-x-hidden',
          'nx-p-4 nx-grow md:nx-h-[calc(100vh-var(--nextra-navbar-height)-var(--nextra-menu-height))]',
          showSidebar ? 'nextra-scrollbar' : 'no-scrollbar'
        )}
        ref={sidebarRef}
      >
        {/* without asPopover check <Collapse />'s inner.clientWidth on `layout: "raw"` will be 0 and element will not have width on initial loading */}
        {(!asPopover || !showSidebar) && (
          <Collapse isOpen={showSidebar} horizontal>
            <Menu
              className="nextra-menu-desktop max-md:nx-hidden"
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
            className="nextra-menu-mobile md:nx-hidden"
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
        'nx-sticky nx-bottom-0',
        'nx-bg-white dark:nx-bg-dark', // when banner is showed, sidebar links can be behind menu, set bg color as body bg color
        'nx-mx-4 nx-py-4 nx-shadow-[0_-12px_16px_#fff]',
        'nx-flex nx-items-center nx-gap-2',
        'dark:nx-border-neutral-800 dark:nx-shadow-[0_-12px_16px_#111]',
        'contrast-more:nx-border-neutral-400 contrast-more:nx-shadow-none contrast-more:dark:nx-shadow-none',
        showSidebar
          ? cn(hasI18n && 'nx-justify-end', 'nx-border-t')
          : 'nx-py-4 nx-flex-wrap nx-justify-center'
      )}
      data-toggle-animation={
        showToggleAnimation ? (showSidebar ? 'show' : 'hide') : 'off'
      }
    >
      <LocaleSwitch
        lite={!showSidebar}
        className={cn(showSidebar ? 'nx-grow' : 'max-md:nx-grow')}
      />
      {config.darkMode && (
        <div
          className={
            showSidebar && !hasI18n ? 'nx-grow nx-flex nx-flex-col' : ''
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
          className="max-md:nx-hidden nx-h-7 nx-rounded-md nx-transition-colors nx-text-gray-600 dark:nx-text-gray-400 nx-px-2 hover:nx-bg-gray-100 hover:nx-text-gray-900 dark:hover:nx-bg-primary-100/5 dark:hover:nx-text-gray-50"
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