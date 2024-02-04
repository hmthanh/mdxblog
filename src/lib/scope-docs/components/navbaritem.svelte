<script>
  import cn from "clsx"
  import Menu from "scope-docs/components/menu/menu.svelte"
  import MenuButton from "scope-docs/components/menu/menubutton.svelte"

  // export let menu
  let _class
  export { _class as class }

  // const { items } = menu
  // const routes = Object.fromEntries((menu.children || []).map((route) => [route.name, route]))

  const classes = {
    link: cn("text-sm contrast-more:text-gray-700 contrast-more:dark:text-gray-100"),
    active: cn("font-medium subpixel-antialiased"),
    inactive: cn("text-gray-600 hover:text-gray-800 dark:text-gray-400 dark:hover:text-gray-200"),
  }
</script>

<div class="relative inline-block">
  <div class="relative inline-block">
    navbaritem
    <Menu class={cn(
      _class,
      '-ml-2 hidden items-center whitespace-nowrap rounded p-2 md:inline-flex',
      classes.inactive
    )}/>
    <!-- <Menu>
      <Menu.Button
        class={cn(
          class,
          '-ml-2 hidden items-center whitespace-nowrap rounded p-2 md:inline-flex',
          classes.inactive
        )}
      >
        {children}
      </Menu.Button>
      <Transition
        leave="transition-opacity"
        leaveFrom="opacity-100"
        leaveTo="opacity-0"
      >
        <Menu.Items class="absolute right-0 z-20 mt-1 max-h-64 min-w-full overflow-auto rounded-md ring-1 ring-black/5 bg-white py-1 text-sm shadow-lg dark:ring-white/20 dark:bg-neutral-800">
          {Object.entries(items || {}).map(([key, item]) => (
            <Menu.Item key={key}>
              <Anchor
                href={
                  item.href || routes[key]?.route || menu.route + '/' + key
                }
                class={cn(
                  'relative hidden w-full select-none whitespace-nowrap text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-100 md:inline-block',
                  'py-1.5 transition-colors ltr:pl-3 ltr:pr-9 rtl:pr-3 rtl:pl-9'
                )}
                newWindow={item.newWindow}
              >
                {item.title || key}
              </Anchor>
            </Menu.Item>
          ))}
        </Menu.Items>
      </Transition>
    </Menu> -->
  </div>
</div>
