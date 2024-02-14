<script>
  import cn from "clsx"

  let _class = ''
  export { _class as class }
</script>

<ul class={cn("mt-6 list-disc first:mt-0 ltr:ml-6 rtl:mr-6", _class)} {...$$restProps}>
  <slot />
</ul>
<summary
      class={cn(
        'flex items-center cursor-pointer list-none p-1 transition-colors hover:bg-gray-100 dark:hover:bg-neutral-800',
        "before:mr-1 before:inline-block before:transition-transform before:content-[''] dark:before:invert before:shrink-0",
        'rtl:before:rotate-180 [[data-expanded]>&]:before:rotate-90'
      )}
      {...$$restProps}
      onClick={e => {
        e.preventDefault()
        setOpen(v => !v)
      }}
    >
  <slot/></summary>