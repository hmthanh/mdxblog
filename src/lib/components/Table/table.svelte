<!-- import cn from 'clsx'
import type { ComponentProps } from 'react'

export const Table = ({
  className = '',
  ...props
}: ComponentProps<'table'>) => (
  <table
    className={cn('nx-block nx-overflow-x-scroll', className)}
    {...props}
  />
) -->

<script>
  import clsx from "clsx"

  export let className = ""
  export let props = {}
</script>

<table class={clsx("block overflow-x-scroll", className)} {...props} />
