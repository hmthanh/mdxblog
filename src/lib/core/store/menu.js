import { writable } from "svelte/store"

export const menu = writable({
  menuOpen: false,
})

// Setter
export const setMenu = () => {
  menu.update((val) => {
    return {
      menuOpen: !val.menuOpen,
    }
  })
}
