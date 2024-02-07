<script lang="ts">
  import cn from "clsx"
  export let tag // Tag
  export let context
  export let id
  let _class
  export { _class as class }

  // const setActiveAnchor = useSetActiveAnchor()
  // const slugs = useSlugs()
  // const observer = useIntersectionObserver()
  // const obRef = useRef<HTMLAnchorElement>(null)

  // useEffect(() => {
  //   if (!id) return
  //   const heading = obRef.current
  //   if (!heading) return
  //   slugs.set(heading, [id, (context.index += 1)])
  //   observer?.observe(heading)

  //   return () => {
  //     observer?.disconnect()
  //     slugs.delete(heading)
  //     setActiveAnchor(f => {
  //       const ret = { ...f }
  //       delete ret[id]
  //       return ret
  //     })
  //   }
  // }, [id, context, slugs, observer, setActiveAnchor])
  export let headdingTag = "h2"
  let headingDic = {
    h2: "mt-10 border-b pb-1 text-3xl border-neutral-200/70 contrast-more:border-neutral-400 dark:border-primary-100/10 contrast-more:dark:border-neutral-400",
    h3: "mt-8 text-2xl",
    h4: "mt-8 text-xl",
    h5: "mt-8 text-lg",
    h6: "mt-8 text-base",
  }
</script>

<h2
  class={
  _class === "sr-only"
    ? "sr-only"
    : cn("font-semibold tracking-tight text-slate-900 dark:text-slate-100", headingDic[headdingTag])}
  {...$$props}
>
  <slot />
  {#if id}
    <a href={`#${id}`} {id} class="subheading-anchor" aria-label="Permalink for this section" />
  {/if}
</h2>
