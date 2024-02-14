<script>
  import cn from "clsx"

  let _class = ""
  export { _class as class }
</script>

<div class={cn("not-prose", _class)}>
  <Pre {...$$restProps}><slot /></Pre>
</div>
