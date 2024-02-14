<script lang="ts">
  import cn from "clsx"
  //     import type { ReactElement, ReactNode } from 'react'
  // import { useEffect, useRef } from 'react'
  let _class = ''
  export { _class as class }

  export let isOpen
  export let horizontal = false

  // const containerRef = useRef<HTMLDivElement>(null)
  // const innerRef = useRef<HTMLDivElement>(null)
  // const animationRef = useRef(0)
  // const initialOpen = useRef(isOpen)
  // const initialRender = useRef(true)

  //     useEffect(() => {
  //     const container = containerRef.current
  //     const inner = innerRef.current
  //     const animation = animationRef.current
  //     if (animation) {
  //       clearTimeout(animation)
  //     }
  //     if (initialRender.current || !container || !inner) return

  //     container.classList.toggle('duration-500', !isOpen)
  //     container.classList.toggle('duration-300', isOpen)

  //     if (horizontal) {
  //       // save initial width to avoid word wrapping when container width will be changed
  //       inner.style.width = `${inner.clientWidth}px`
  //       container.style.width = `${inner.clientWidth}px`
  //     } else {
  //       container.style.height = `${inner.clientHeight}px`
  //     }

  //     if (isOpen) {
  //       animationRef.current = window.setTimeout(() => {
  //         // should be style property in kebab-case, not css class name
  //         container.style.removeProperty('height')
  //       }, 300)
  //     } else {
  //       setTimeout(() => {
  //         if (horizontal) {
  //           container.style.width = '0px'
  //         } else {
  //           container.style.height = '0px'
  //         }
  //       }, 0)
  //     }
  //   }, [horizontal, isOpen])

  //   useEffect(() => {
  //     initialRender.current = false
  //   }, [])
</script>

<!-- ref={containerRef} -->
<!-- ref={innerRef} -->
<!-- style={isOpen || horizontal ? undefined : { height: "0" }} -->
<div
  class={cn(
    "transform-gpu overflow-hidden transition-all ease-in-out motion-reduce:transition-none",
    isOpen || horizontal ? undefined : "h-0"
  )}
>
  <div
    class={cn(
      "transition-opacity duration-500 ease-in-out motion-reduce:transition-none",
      isOpen ? "opacity-100" : "opacity-0",
      _class
    )}
  >
    <slot />
  </div>
</div>
