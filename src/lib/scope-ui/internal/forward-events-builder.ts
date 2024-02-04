import { onMount } from "svelte"
interface EventOptions {
  capture?: boolean
  once?: boolean
  passive?: boolean
}

type EventHandler<T extends Event> = (event: T) => void

type BoundEventHandler<T extends Event> = {
  type: string
  handler: EventHandler<T>
  options?: EventOptions
}

export function forwardEventsBuilder<T extends EventTarget>(
  target: T
): {
  bindEvent: (type: string, handler: EventHandler<Event>, options?: EventOptions) => () => void
} {
  const events = new Map<string, BoundEventHandler<Event>[]>()

  function forward(event: Event) {
    target.dispatchEvent(event)
  }

  function bindEvent(type: string, handler: EventHandler<Event>, options?: EventOptions): () => void {
    const boundHandler = {
      type,
      handler,
      options,
    }

    const handlers = events.get(type) || []
    handlers.push(boundHandler)
    events.set(type, handlers)

    target.addEventListener(type, handler, options)

    return () => {
      const handlers = events.get(type)
      if (handlers) {
        const index = handlers.indexOf(boundHandler)
        if (index !== -1) handlers.splice(index, 1)
      }
      target.removeEventListener(type, handler, options)
    }
  }

  return { bindEvent }
}

// Usage

const div = document.querySelector("div")!

const { bindEvent } = forwardEventsBuilder(div)

const offClick = bindEvent("click", (e) => {
  // handle click
})

offClick() // remove click handler

// // Forward events util
// function forwardEventsBuilder(node: HTMLElement) {
//   // Event listeners mapped by type
//   const events: Record<string, ((e: Event) => void)[]> = {}

//   // Forward event from node
//   const forward = (e: Event) => node.dispatchEvent(e)

//   onMount(() => {
//     // Remove listeners on unmount
//     return () => {
//       for (let handlers of Object.values(events)) {
//         for (let handler of handlers) {
//           node.removeEventListener(handler.type, handler)
//         }
//       }
//     }
//   })

//   // Handle event binding
//   function handleEvent(fullType, handler) {
//     // Parse event type and modifiers
//     const [type, ...modifiers] = fullType.split("$")
//     const options = parseModifiers(modifiers)

//     // Create listener with options
//     const listener = (e) => {
//       handler(e)
//       forward(e)
//     }

//     // Add listener
//     ;(events[type] || (events[type] = [])).push(listener)
//     node.addEventListener(type, listener, options)

//     // Return remover
//     return () => {
//       const handlers = events[type]
//       if (handlers) {
//         const index = handlers.indexOf(listener)
//         if (index !== -1) handlers.splice(index, 1)
//       }
//       node.removeEventListener(type, listener, options)
//     }
//   }

//   return {
//     // Expose handling
//     handleEvent,
//   }
// }

// function parseModifiers(modifiersLany) {
//   return modifiers.reduce((options, mod) => {
//     if (mod === "preventDefault") options.preventDefault = true
//     if (mod === "stopPropagation") options.stopPropagation = true
//     // ...
//     return options
//   }, {})
// }
