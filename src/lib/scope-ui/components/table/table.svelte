<!-- import cn from 'clsx'
import type { ComponentProps } from 'react'

export const Table = ({
  class = '',
  ...props
}: ComponentProps<'table'>) => (
  <table
    class={cn('block overflow-x-scroll', class)}
    {...props}
  />
) -->

<script>
  import clsx from "clsx"

  let _class = ""
  export { _class as class }
</script>

<table class={clsx("block overflow-x-scroll", _class)} {...$$restProps}><slot /></table>
