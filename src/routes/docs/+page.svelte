<script lang="ts">
  import SvelteSEO from "scope-seo"
  import Card from "$lib/components/Card.svelte"
  import EmailIcon from "$lib/scope-core/icons/Email.svelte"
  import ExternalLink from "$lib/components/ExternalLink.svelte"
  import website from "$lib/config/website"
  const { contactEmail, facebookPageName, telegramUsername, twitterUserId, twitterUsername, wireUsername } = website
  import SEO from "$lib/components/SEO/index.svelte"
  import { fade } from "svelte/transition"

  import cn from "clsx"
  // import { Transition } from "scope-ui/components/transitions"
  import { Select, ThemeSwitch } from "scope-docs"
  import { Listbox, ListboxOption, ListboxOptions, ListboxButton, Transition } from "scope-ui"

  let title = "Contact"
  let metadescription = "Get in touch with Rodneylab, the developer of Climate SvelteKit Starter."
  const breadcrumbs = [
    {
      name: "Home",
      slug: "",
    },
    {
      name: "Contact Us",
      slug: "contact",
    },
  ]
  const seoProps = {
    breadcrumbs,
    title,
    metadescription,
    slug: "contact",
    datePublished: "2021-07-07T14:19:33.000+0100",
    lastUpdated: "2021-07-07T14:19:33.000+0100",
  }

  // prettier-ignore
  const people = [
    { id: 1, name: "Durward Reynolds" },
    { id: 2, name: "Kenton Towne" },
    { id: 3, name: "Therese Wunsch" },
    { id: 4, name: "Benedict Kessler" },
    { id: 5, name: "Katelyn Rohan" },
  ];

  let selectedPerson = people[0]
</script>

<!-- <SEO {...seoProps} /> -->
<!-- <Select options={people} selected={selectedPerson} /> -->
<!-- <ThemeSwitch /> -->

<!-- <SvelteSEO title="Simple page title" description="Simple description about a page" /> -->
<!-- <h1>Contact me</h1>
<p>I would love to hear from you. Please get in touch!</p> -->

<!-- <Listbox value={selected} onChange={onChange}>
  {({ open }) => (
    <Listbox.Button
      ref={trigger}
      title={title}
      className={cn(
        'h-7 rounded-md px-2 text-left text-xs font-medium text-gray-600 transition-colors dark:text-gray-400',
        open
          ? 'bg-gray-200 text-gray-900 dark:bg-primary-100/10 dark:text-gray-50'
          : 'hover:bg-gray-100 hover:text-gray-900 dark:hover:bg-primary-100/5 dark:hover:text-gray-50',
        className
      )}
    >
      {selected.name}
      <Portal>
        <Transition
          ref={container}
          show={open}
          as={Listbox.Options}
          className="z-20 max-h-64 overflow-auto rounded-md ring-1 ring-black/5 bg-white py-1 text-sm shadow-lg dark:ring-white/20 dark:bg-neutral-800"
          leave="transition-opacity"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          {options.map(option => (
            <Listbox.Option
              key={option.key}
              value={option}
              className={({ active }) =>
                cn(
                  active
                    ? 'bg-primary-50 text-primary-600 dark:bg-primary-500/10'
                    : 'text-gray-800 dark:text-gray-100',
                  'relative cursor-pointer whitespace-nowrap py-1.5',
                  'transition-colors ltr:pl-3 ltr:pr-9 rtl:pr-3 rtl:pl-9'
                )
              }
            >
              {option.name}
              {option.key === selected.key && (
                <span className="absolute inset-y-0 flex items-center ltr:right-3 rtl:left-3">
                  <CheckIcon />
                </span>
              )}
            </Listbox.Option>
          ))}
        </Transition>
      </Portal>
    </Listbox.Button>
  )}
</Listbox> -->
<!-- <div class="flex w-full flex-col items-center justify-center">
  <div class="fixed top-16 w-72">
    <div class="relative mt-1">
      <button
        use:listbox.button
        on:select={onSelect}
        class="relative w-full cursor-default rounded-lg bg-white py-2 pl-3 pr-10 text-left shadow-md focus:outline-none focus-visible:border-indigo-500 focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-orange-300 text-sm"
      >
        <span class="block truncate">{$listbox.selected.name}</span>
        <span class="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
          <Selector class="h-5 w-5 text-gray-400" />
        </span>
      </button>

      <Transition
        show={$listbox.expanded}
        leave="transition ease-in duration-100"
        leaveFrom="opacity-100"
        leaveTo="opacity-0"
      >
        <ul
          use:listbox.items
          class="absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-sm shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
        >
          {#each people as value, i}
            {@const active = $listbox.active === value}
            {@const selected = $listbox.selected === value}
            <li
              class="relative cursor-default select-none py-2 pl-10 pr-4 {active
                ? 'bg-amber-100 text-amber-900'
                : 'text-gray-900'}"
              use:listbox.item={{ value }}
            >
              <span class="block truncate {selected ? 'font-medium' : 'font-normal'}">{value.name}</span>
              {#if selected}
                <span class="absolute inset-y-0 left-0 flex items-center pl-3 text-amber-600">
                  <Check class="h-5 w-5" />
                </span>
              {/if}
            </li>
          {/each}
        </ul>
      </Transition>
    </div>
  </div>
</div> -->

<Listbox bind:value={selectedPerson} let:open>
  <ListboxButton>{selectedPerson.name}</ListboxButton>
  {#if open}
    <div transition:fade>
      <!-- When controlling the transition manually, make sure to use `static` -->
      <ListboxOptions static>
        {#each people as person (person.id)}
          <ListboxOption value={person}>
            {person.name}
          </ListboxOption>
        {/each}
      </ListboxOptions>
    </div>
  {/if}
</Listbox>
