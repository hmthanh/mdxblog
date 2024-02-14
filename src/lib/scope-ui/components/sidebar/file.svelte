<li className={cn(classes.list, { active })}>
    <Anchor
      href={(item as PageItem).href || item.route}
      newWindow={(item as PageItem).newWindow}
      className={cn(classes.link, active ? classes.active : classes.inactive)}
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
        className={cn(
          classes.list,
          classes.border,
          'ltr:nx-ml-3 rtl:nx-mr-3'
        )}
      >
        {anchors.map(({ id, value }) => (
          <li key={id}>
            <a
              href={`#${id}`}
              className={cn(
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