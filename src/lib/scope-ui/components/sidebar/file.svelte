<script lang="ts">
	import  cn  from 'clsx';
  import Separator from './separator.svelte'
    export let item
  export let anchors

  let _class
  export { _class as class }

  const classes = {
  link: cn(
    'nx-flex nx-rounded nx-px-2 nx-py-1.5 nx-text-sm nx-transition-colors [word-break:break-word]',
    'nx-cursor-pointer [-webkit-tap-highlight-color:transparent] [-webkit-touch-callout:none] contrast-more:nx-border'
  ),
  inactive: cn(
    'nx-text-gray-500 hover:nx-bg-gray-100 hover:nx-text-gray-900',
    'dark:nx-text-neutral-400 dark:hover:nx-bg-primary-100/5 dark:hover:nx-text-gray-50',
    'contrast-more:nx-text-gray-900 contrast-more:dark:nx-text-gray-50',
    'contrast-more:nx-border-transparent contrast-more:hover:nx-border-gray-900 contrast-more:dark:hover:nx-border-gray-50'
  ),
  active: cn(
    'nx-bg-primary-100 nx-font-semibold nx-text-primary-800 dark:nx-bg-primary-400/10 dark:nx-text-primary-600',
    'contrast-more:nx-border-primary-500 contrast-more:dark:nx-border-primary-500'
  ),
  list: cn('nx-flex nx-flex-col nx-gap-1'),
  border: cn(
    'nx-relative before:nx-absolute before:nx-inset-y-1',
    'before:nx-w-px before:nx-bg-gray-200 before:nx-content-[""] dark:before:nx-bg-neutral-800',
    'ltr:nx-pl-3 ltr:before:nx-left-0 rtl:nx-pr-3 rtl:before:nx-right-0'
  )
}

// It is possible that the item doesn't have any route - for example an external link.
const active = item.route && [route, route + '/'].includes(item.route + '/');
  const activeAnchor = useActiveAnchor();
  const { setMenu } = useMenu();
  const config = useConfig();
</script>

{#if item.type === 'separator'}
  <Separator title={item.title} />
{:else}
<li class={cn(classes.list, { active })}>
    <Anchor
      href={item.href || item.route}
      newWindow={item.newWindow}
      class={cn(classes.link, active ? classes.active : classes.inactive)}
      onClick={() => {
        setMenu(false)
      }}
      onFocus={() => {
        onFocus?.(item.route)
      }}
      onBlur={() => {
        onFocus?.(null)
      }}
    >
      {renderComponent(config.sidebar.titleComponent, {
        title: item.title,
        type: item.type,
        route: item.route
      })}
    </Anchor>
    {active && anchors.length > 0 && (
      <ul
        class={cn(
          classes.list,
          classes.border,
          'ltr:nx-ml-3 rtl:nx-mr-3'
        )}
      >
        {anchors.map(({ id, value }) => (
          <li key={id}>
            <a
              href={`#${id}`}
              class={cn(
                classes.link,
                'nx-flex nx-gap-2 before:nx-opacity-25 before:nx-content-["#"]',
                activeAnchor[id]?.isActive ? classes.active : classes.inactive
              )}
              onClick={() => {
                setMenu(false)
              }}
            >
              {value}
            </a>
          </li>
        ))}
      </ul>
    )}
  </li>
  {/if}