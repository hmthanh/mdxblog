<script>
  import cn from "clsx"
  let _class
  export { _class as class }
</script>

<h1 class={cn("mt-2 text-4xl font-bold tracking-tight text-slate-900 dark:text-slate-100", _class)}><slot /></h1>
