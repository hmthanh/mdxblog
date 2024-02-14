<li className={cn({ open, active })}>
    <ComponentToUse
      href={isLink ? item.route : undefined}
      className={cn(
        'nx-items-center nx-justify-between nx-gap-2',
        !isLink && 'nx-text-left nx-w-full',
        classes.link,
        active ? classes.active : classes.inactive
      )}
      onClick={e => {
        const clickedToggleIcon = ['svg', 'path'].includes(
          (e.target as HTMLElement).tagName.toLowerCase()
        )
        if (clickedToggleIcon) {
          e.preventDefault()
        }
        if (isLink) {
          // If it's focused, we toggle it. Otherwise, always open it.
          if (active || clickedToggleIcon) {
            TreeState[item.route] = !open
          } else {
            TreeState[item.route] = true
            setMenu(false)
          }
          rerender({})
          return
        }
        if (active) return
        TreeState[item.route] = !open
        rerender({})
      }}
    >
      {renderComponent(config.sidebar.titleComponent, {
        title: item.title,
        type: item.type,
        route: item.route
      })}
      <ArrowRightIcon
        className="nx-h-[18px] nx-min-w-[18px] nx-rounded-sm nx-p-0.5 hover:nx-bg-gray-800/5 dark:hover:nx-bg-gray-100/5"
        pathClassName={cn(
          'nx-origin-center nx-transition-transform rtl:-nx-rotate-180',
          open && 'ltr:nx-rotate-90 rtl:nx-rotate-[-270deg]'
        )}
      />
    </ComponentToUse>
    <Collapse className="ltr:nx-pr-0 rtl:nx-pl-0 nx-pt-1" isOpen={open}>
      {Array.isArray(item.children) ? (
        <Menu
          className={cn(classes.border, 'ltr:nx-ml-3 rtl:nx-mr-3')}
          directories={item.children}
          base={item.route}
          anchors={anchors}
        />
      ) : null}
    </Collapse>
  </li>