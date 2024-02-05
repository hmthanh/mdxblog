<!-- import cn from 'clsx'
import type { ComponentProps, ReactElement } from 'react'

export function Steps({
  children,
  className,
  ...props
}: ComponentProps<'div'>): ReactElement {
  return (
    <div
      className={cn(
        'nextra-steps ml-4 mb-12 border-l border-gray-200 pl-6',
        'dark:border-neutral-800 [counter-reset:step]',
        className
      )}
      {...props}
    >
      {children}
    </div>
  )
} -->

<script>
  import clsx from "clsx"
  export let className = ""
  export let props = {}
</script>

<div
  class={clsx(
    "nextra-steps ml-4 mb-12 border-l border-gray-200 pl-6",
    "dark:border-neutral-800 [counter-reset:step]",
    className
  )}
  {...props}
>
  <slot />
</div>
