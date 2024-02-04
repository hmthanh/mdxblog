<script lang="ts">
  import cn from "clsx"
  import type { SvelteComponent } from "svelte"
  import { Listbox, ListboxButton, ListboxLabel, ListboxOption, ListboxOptions, Transition } from "scope-ui"
  // import { CheckIcon } from "scope-docs"

  interface MenuOption {
    key: string
    name: SvelteComponent | string
  }

  interface MenuProps {
    selected: MenuOption
    onChange: (option: MenuOption) => void
    options: MenuOption[]
    title?: string
    className?: string
  }

  export let options: MenuOption[] | undefined
  export let selected: MenuOption | undefined
  export let onChange: (option: MenuOption) => void
  export let title: string | undefined
  let _class
  export { _class as class }

  const people = [
    { id: 1, name: "Durward Reynolds", unavailable: false },
    { id: 2, name: "Kenton Towne", unavailable: false },
    { id: 3, name: "Therese Wunsch", unavailable: false },
    { id: 4, name: "Benedict Kessler", unavailable: true },
    { id: 5, name: "Katelyn Rohan", unavailable: false },
  ]

  let selectedPerson = people[0]
</script>

<Listbox
  bind:value={selectedPerson}
  class={cn(
    "nx-h-7 nx-rounded-md nx-px-2 nx-text-left nx-text-xs nx-font-medium nx-text-gray-600 nx-transition-colors dark:nx-text-gray-400",
    // open
    //   ? "nx-bg-gray-200 nx-text-gray-900 dark:nx-bg-primary-100/10 dark:nx-text-gray-50"
    //   : "hover:nx-bg-gray-100 hover:nx-text-gray-900 dark:hover:nx-bg-primary-100/5 dark:hover:nx-text-gray-50",
    _class
  )}
>
  <ListboxButton>{selectedPerson.name}</ListboxButton>
  <Transition
    enter="transition duration-100 ease-out"
    enterFrom="transform scale-95 opacity-0"
    enterTo="transform scale-100 opacity-100"
    leave="transition duration-75 ease-out"
    leaveFrom="transform scale-100 opacity-100"
    leaveTo="transform scale-95 opacity-0"
  >
    <ListboxOptions>
      {#each people as person (person.id)}
        <ListboxOption
          value={person}
          disabled={person.unavailable}
          class={({ active }) => (active ? "active" : "")}
          let:selected
        >
          {#if selected}
            <!-- <CheckIcon /> -->
          {/if}
          {person.name}
        </ListboxOption>
      {/each}
    </ListboxOptions>
  </Transition>
</Listbox>

<div>Hello</div>
