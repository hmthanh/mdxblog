<script>
  import cn from "clsx"

  export let text
  export let id
  let _class
  export { _class as class }
</script>

<h2
  {id}
  class={cn(
    "text-slate-900 font-semibold tracking-tight  dark:text-slate-100 mt-10 border-b pb-1 text-3xl border-neutral-200/70 contrast-more:border-neutral-400 dark:border-primary-100/10 contrast-more:dark:border-neutral-400",
    _class
  )}
>
  <slot />
  <a
    href="#quick-start-from-template"
    id="quick-start-from-template"
    class="subheading-anchor"
    aria-label="Permalink for this section"
  ></a>
</h2>
