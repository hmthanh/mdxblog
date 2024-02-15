<script>
  import { slide } from "svelte/transition"
  // import { ArrowRightIcon, MenuIcon } from "svelte-icons"
  import { ArrowRightIcon, MenuIcon } from "scope-core/icons"

  export let items
  export let config
  // export let directories

  let menuOpen = false

  function toggleMenu() {
    menuOpen = !menuOpen
  }
</script>

<nav>
  {#if config.logoLink}
    <a href="/" class="mr-auto">
      <!-- <Logo /> -->
    </a>
  {/if}

  {#each items as item}
    {#if item.type === "menu"}
      <div class="relative inline-block">
        <button class="flex items-center whitespace-nowrap p-2 text-gray-600" on:click={() => (menuOpen = item)}>
          {item.title}
          <ArrowRightIcon class="ml-1 h-4 w-4 rounded-sm p-0.5 transition-transform rotate-90" />
        </button>

        <!-- {#if menuOpen === item}
          <div
            transition:slide
            class="absolute right-0 z-10 mt-1 w-full overflow-auto rounded-md bg-white py-1 text-sm shadow-lg"
            on:click|self={() => (menuOpen = false)}
          >
            {#each item.items as subItem}
              <a
                href={subItem.href || routes[subItem.key].route}
                class="block whitespace-nowrap py-1.5 px-3 text-gray-600 hover:text-gray-900"
                >{subItem.title || subItem.key}</a
              >
            {/each}
          </div> 
        {/if}-->
      </div>
    {:else}
      <a
        href={item.href || item.route}
        class="ml-2 whitespace-nowrap p-2 {item.isActive ? 'font-medium' : 'text-gray-600 hover:text-gray-800'}"
      >
        {item.title}
      </a>
    {/if}
  {/each}

  <!-- <SearchBox bind:directories /> -->

  {#if config.projectLink}
    <a href={config.projectLink} target="_blank" rel="noreferrer noopener" class="p-2 text-current">
      <!-- <ProjectIcon /> -->
    </a>
  {/if}

  {#if config.chatLink}
    <a href={config.chatLink} target="_blank" rel="noreferrer noopener" class="p-2 text-current">
      <!-- <ChatIcon /> -->
    </a>
  {/if}

  <button class="hambuerger p-2 md:hidden" on:click={toggleMenu}>
    <!-- <MenuIcon class:open={menuOpen} /> -->
  </button>
</nav>

<style>
  /* styles */
</style>
