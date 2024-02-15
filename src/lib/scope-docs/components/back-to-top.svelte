<script lang="ts">
  import cn from "clsx"
  import { ArrowRightIcon } from "scope-core/icons"
  // import { ArrowRightIcon } from 'nextra/icons'

  function scrollToTop() {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  let _class = ""
  export { _class as class }
  // export function BackToTop({ class }: { class?: string }): ReactElement {
  //   const ref = useRef<HTMLButtonElement>(null)
  //   useEffect(() => {
  //     function toggleVisible() {
  //       const { scrollTop } = document.documentElement
  //       ref.current?.classList.toggle('opacity-0', scrollTop < 300)
  //     }

  //     window.addEventListener('scroll', toggleVisible)
  //     return () => {
  //       window.removeEventListener('scroll', toggleVisible)
  //     }
  //   }, [])
</script>

<!-- {ref} -->
<button aria-hidden="true" on:click={scrollToTop} class={cn("flex items-center gap-1.5 transition opacity-0", _class)}>
  Scroll to top
  <ArrowRightIcon class="-rotate-90 w-3.5 h-3.5 border rounded-full border-current" />
</button>
