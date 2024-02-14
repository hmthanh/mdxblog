<script>
  export let href = ""
  export let newWindow
</script>

<!-- export const Anchor = forwardRef(function (
  { href = '', children, newWindow, ...props },
  // ref is used in <NavbarMenu />
  forwardedRef
): ReactElement {
  const config = useConfig()

  if (newWindow) {
    return (
      <a
        ref={forwardedRef}
        href={href}
        target="_blank"
        rel="noreferrer"
        {...props}
      >
        {children}
        <span className="sr-only select-none"> (opens in a new tab)</span>
      </a>
    )
  }

  if (!href) {
    return (
      <a ref={forwardedRef} {...props}>
        {children}
      </a>
    )
  }

  if (nextVersion > 12 || config.newNextLinkBehavior) {
    return (
      <NextLink ref={forwardedRef} href={href} {...props}>
        {children}
      </NextLink>
    )
  }

  return (
    <NextLink href={href} passHref>
      
    </NextLink>
  )
}) -->

{#if newWindow}
  <a {href} target="_blank" rel="noreferrer" {...$$restProps}>
    <slot />
    <span class="sr-only select-none"> (opens in a new tab)</span>
  </a>
{:else}
  <a {href} {...$$restProps}>
    <slot />
  </a>
{/if}
