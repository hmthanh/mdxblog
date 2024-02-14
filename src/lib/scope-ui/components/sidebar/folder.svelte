<script>
	import { ArrowRightIcon } from 'scope-docs/icons';
	import Collapse from 'scope-docs/components'
    import { getContext, setContext } from 'svelte'
    import { useLocation } from 'svelte-routing'
    import { onMount, createEventDispatcher, getContext } from 'svelte'
  
    export let item;
    export let anchors;
    let focusedRoute = getContext('focusedRoute');
    let onFocusItem = getContext('onFocusItem');
    let folderLevel = getContext('folderLevel');
    let dispatch = createEventDispatcher();
  
    let routeOriginal = useLocation().pathname;
    let [route, _] = routeOriginal.split('#');
    let active = [route, route + '/'].includes(item.route + '/');
    let activeRouteInside = active || route.startsWith(item.route + '/');
  
    let open;
    if (!('TreeState' in window)) {
      window.TreeState = {};
    }
    if (window.TreeState[item.route] === undefined) {
      open = active || activeRouteInside || focusedRoute.startsWith(item.route + '/') || ('theme' in item && 'collapsed' in item.theme ? !item.theme.collapsed : folderLevel < config.sidebar.defaultMenuCollapseLevel);
    } else {
      open = window.TreeState[item.route] || focusedRoute.startsWith(item.route + '/');
    }
  
    let rerender = () => { };
  
    onMount(() => {
      rerender = () => dispatch('rerender');
      const updateTreeState = () => {
        if (activeRouteInside || focusedRoute.startsWith(item.route + '/')) {
          window.TreeState[item.route] = true;
        }
      }
      const updateAndPruneTreeState = () => {
        if (activeRouteInside && focusedRoute.startsWith(item.route + '/')) {
          window.TreeState[item.route] = true;
        } else {
          delete window.TreeState[item.route];
        }
      }
      config.sidebar.autoCollapse ? updateAndPruneTreeState() : updateTreeState();
    });
  
    const isLink = 'withIndexPage' in item && item.withIndexPage;
    const ComponentToUse = isLink ? 'a' : 'button';
  
    let toggleMenu = (e) => {
      const clickedToggleIcon = ['svg', 'path'].includes(e.target.tagName.toLowerCase());
      if (clickedToggleIcon) {
        e.preventDefault();
      }
      if (isLink) {
        if (active || clickedToggleIcon) {
          window.TreeState[item.route] = !open;
        } else {
          window.TreeState[item.route] = true;
          setMenu(false);
        }
        rerender();
        return;
      }
      if (active) return;
      window.TreeState[item.route] = !open;
      rerender();
    };
  </script>
  
  <li class:open={open} class:active={active}>
    <ComponentToUse
      href:bind={isLink ? item.route : undefined}
      class="nx-items-center nx-justify-between nx-gap-2 {isLink ? 'nx-text-left nx-w-full' : ''}"
      class="nx-items-center nx-justify-between nx-gap-2 {isLink ? 'nx-text-left nx-w-full' : ''}"
      class="nx-items-center nx-justify-between nx-gap-2 {isLink ? 'nx-text-left nx-w-full' : ''}"
      class:link={true}
      class:inactive={!active}
      class:active={active}
      on:click={toggleMenu}
    >
      <slot name="title"></slot>
      <slot name="icon"></slot>
      {#if isLink}
        <ArrowRightIcon
          class="nx-h-[18px] nx-min-w-[18px] nx-rounded-sm nx-p-0.5 hover:nx-bg-gray-800/5 dark:hover:nx-bg-gray-100/5"
          class:open={open}
          class:ltr={true}
          class:rtl={true}
        />
      {/if}
    </ComponentToUse>
    <slot name="content"></slot>
  </li>
  
  <Collapse
    class="ltr:nx-pr-0 rtl:nx-pl-0 nx-pt-1"
    isOpen={open}
  >
    {#if Array.isArray(item.children)}
      <Menu
        class="ltr:nx-ml-3 rtl:nx-mr-3"
        directories={item.children}
        base={item.route}
        anchors={anchors}
      />
    {/if}
  </Collapse>
  