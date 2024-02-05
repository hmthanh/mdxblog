<script lang="ts" context="module">
  export type NavBarProps = {
    flatDirectories: any[] // Item[]
    items: any[] // (PageItem | MenuItem)[]
  }
</script>

<script lang="ts">
  import cn from "clsx"
  // import NavbarItem from "scope-docs/components/navbaritem.svelte"
  // import {ActionArray} "scope-docs/utils/use-actions.ts"

  export let flatDirectories
  export let items

  // const config = useConfig()
  // const activeRoute = useFSRoute()
  // const { menu, setMenu } = useMenu()

  // import { Menu, Transition } from '@headlessui/react'
  // import { useFSRoute } from 'nextra/hooks'
  // import { ArrowRightIcon, MenuIcon } from 'nextra/icons'
  // import type { Item, MenuItem, PageItem } from 'nextra/normalize-pages'
  // import type { ReactElement, ReactNode } from 'react'
  // import { useConfig, useMenu } from '../contexts'
  // import { renderComponent } from '../utils'
  // import { Anchor } from './anchor'

  const classes = {
    link: cn("text-sm contrast-more:text-gray-700 contrast-more:dark:text-gray-100"),
    active: cn("font-medium subpixel-antialiased"),
    inactive: cn("text-gray-600 hover:text-gray-800 dark:text-gray-400 dark:hover:text-gray-200"),
  }
</script>

<div class="nextra-nav-container sticky top-0 z-20 w-full bg-transparent print:hidden">
  <div
    class={cn(
      "nextra-nav-container-blur",
      "pointer-events-none absolute z-[-1] h-full w-full bg-white dark:bg-dark",
      "shadow-[0_2px_4px_rgba(0,0,0,.02),0_1px_0_rgba(0,0,0,.06)] dark:shadow-[0_-1px_0_rgba(255,255,255,.1)_inset]",
      "contrast-more:shadow-[0_0_0_1px_#000] contrast-more:dark:shadow-[0_0_0_1px_#fff]"
    )}
  />
  <!-- <nav class="mx-auto flex h-[var(--nextra-navbar-height)] max-w-[90rem] items-center justify-end gap-2 pl-[max(env(safe-area-inset-left),1.5rem)] pr-[max(env(safe-area-inset-right),1.5rem)]">
    {config.logoLink ? (
      <Anchor
        href={typeof config.logoLink === 'string' ? config.logoLink : '/'}
        class="flex items-center hover:opacity-75 ltr:mr-auto rtl:ml-auto"
      >
        {renderComponent(config.logo)}
      </Anchor>
    ) : (
      <div class="flex items-center ltr:mr-auto rtl:ml-auto">
        {renderComponent(config.logo)}
      </div>
    )}
    {items.map(pageOrMenu => {
      if (pageOrMenu.display === 'hidden') return null

      if (pageOrMenu.type === 'menu') {
        const menu = pageOrMenu as MenuItem
        return (
          <NavbarMenu
            key={menu.title}
            class={cn(
              classes.link,
              'flex gap-1',
              classes.inactive
            )}
            menu={menu}
          >
            {menu.title}
            <ArrowRightIcon
              class="h-[18px] min-w-[18px] rounded-sm p-0.5"
              pathclass="origin-center transition-transform rotate-90"
            />
          </NavbarMenu>
        )
      }
      const page = pageOrMenu as PageItem
      let href = page.href || page.route || '#'

      // If it's a directory
      if (page.children) {
        href =
          (page.withIndexPage ? page.route : page.firstChildRoute) || href
      }

      const isActive =
        page.route === activeRoute ||
        activeRoute.startsWith(page.route + '/')

      return (
        <Anchor
          href={href}
          key={href}
          class={cn(
            classes.link,
            'relative -ml-2 hidden whitespace-nowrap p-2 md:inline-block',
            !          isActive || page.newWindow ? classes.inactive : classes.active
          )}
          newWindow={page.newWindow}
          aria-current={!page.newWindow && isActive}
        >
          <span class="absolute inset-x-0 text-center">
            {page.title}
          </span>
          <span class="invisible font-medium">{page.title}</span>
        </Anchor>
      )
    })}

    {renderComponent(config.search.component, {
      directories: flatDirectories,
      class: 'hidden md:inline-block mx-min-w-[200px]'
    })}

    {config.project.link ? (
      <Anchor
        class="p-2 text-current"
        href={config.project.link}
        newWindow
      >
        {renderComponent(config.project.icon)}
      </Anchor>
    ) : null}

    {config.chat.link ? (
      <Anchor
        class="p-2 text-current"
        href={config.chat.link}
        newWindow
      >
        {renderComponent(config.chat.icon)}
      </Anchor>
    ) : null}

    {renderComponent(config.navbar.extraContent)}

    <button
      type="button"
      aria-label="Menu"
      class="nextra-hamburger -mr-2 rounded p-2 active:bg-gray-400/20 md:hidden"
      onClick={() => setMenu(!menu)}
    >
      <MenuIcon class={cn({ open: menu })} />
    </button>
  </nav> -->
</div>
