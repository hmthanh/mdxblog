<script lang="ts">
	import { writable } from 'svelte/store';
    import { getContext, setContext } from "svelte";
  
    const MENU_CONTEXT_NAME = "menu-context";
  
    // export let use = [];
  
    let menuState = 'closed';
    let buttonStore = writable(null);
    let itemsStore = writable([]);
    let items = [];
    let searchQuery = '';
    let activeItemIndex = null;
  
    let api = writable({
      // State
      menuState,
      buttonStore,
      itemsStore,
      items,
      searchQuery,
      activeItemIndex,
  
      // State mutators
      closeMenu() {}, 
      openMenu() {},
      // ...other methods
    });
  
    setContext(MENU_CONTEXT_NAME, api);
  
    function handleWindowMousedown(event) {
      let target = event.target as HTMLElement;
    let active = document.activeElement;

    if (menuState !== MenuStates.Open) return;
    if ($buttonStore?.contains(target)) return;

    if (!$itemsStore?.contains(target)) $api.closeMenu();
    if (active !== document.body && active?.contains(target)) return; // Keep focus on newly clicked/focused element
    if (!event.defaultPrevented) $buttonStore?.focus({ preventScroll: true });
      
    }
  
    export function useMenuContext(componentName) {
      let context = getContext(MENU_CONTEXT_NAME);
  
      if (!context) {
        throw new Error(`<${componentName} /> is missing a parent <Menu /> component.`);
      }
      
      return context;
    }
  
  </script>
  <svelte:window on:mousedown={handleWindowMousedown}/>
  
  
  <slot {open}>
  </slot>
  <!-- menu content -->