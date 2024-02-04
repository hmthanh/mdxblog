import { writable } from "svelte/store"

export const details = writable(false)

// Setter
export const setDetails = () => {
  details.update((value) => !value)
}
