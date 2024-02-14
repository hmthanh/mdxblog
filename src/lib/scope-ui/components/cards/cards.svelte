<script>
  import { cn } from "clsx"

  const classes = {
    cards: cn(),
    card: cn(
      
    ),
    title: cn("flex font-semibold items-start gap-2 p-4 text-gray-700 hover:text-gray-900"),
  }

  export let num = 3
  let _class
  export { _class as class }
  export let style
</script>

<div
  class={cn("nextra-cards mt-4 gap-4 grid", "not-prose", _class)}
  {...$$restProps}
  style={{
    ...style,
    "--rows": num,
  }}
>
  <slot />
</div>
