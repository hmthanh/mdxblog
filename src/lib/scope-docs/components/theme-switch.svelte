<script lang="ts" context="module">
  // import { SunIcon, MoonIcon } from 'nextra/icons';
  import { fly } from "svelte/transition"
  // import {MoonIcon, SunIcon} from "scope-core/icons"
  //     import { useTheme } from 'next-themes'
  // import { useMounted } from 'nextra/hooks'
  // import type { ReactElement } from 'react'
  // import { z } from 'zod'
  // import { useConfig } from '../contexts'
  // import Select from "./select.svelte"
  import { z } from "zod"
  import { browser } from "$app/environment"
  import { SunIcon, MoonIcon } from "scope-core/icons"
  import { toggleTheme } from "scope-core/store"
  let _class = ""
  export { _class as class }

  export type ThemeSwitchProps = {
    lite?: boolean
    className?: string
  }

  export const themeOptionsSchema = z.strictObject({
    light: z.string(),
    dark: z.string(),
    system: z.string(),
  })

  type ThemeOptions = z.infer<typeof themeOptionsSchema>

  // const options = getThemeOptions() // Fetch options
  export let theme = "light"

  //   const { setTheme, resolvedTheme, theme = '' } = useTheme()
  // const config = useConfig().themeSwitch

  function setTheme(newTheme: ThemeOptions["light" | "dark" | "system"]) {
    theme = newTheme
    // Update theme
  }

  //   const IconToUse = mounted && resolvedTheme === 'dark' ? MoonIcon : SunIcon
  // const options: ThemeOptions =
  //   typeof config.useOptions === 'function'
  //     ? config.useOptions()
  //     : config.useOptions
  const people = [
    { key: "Durward", name: "Durward Reynolds" },
    { key: "Kenton", name: "Kenton Towne" },
    { key: "Therese", name: "Therese Wunsch" },
    { key: "Benedict", name: "Benedict Kessler" },
    { key: "Katelyn", name: "Katelyn Rohan" },
  ]

  let selectedPerson = people[0]

  const options = "light"
</script>

<script lang="ts">
  // $: icon = theme === "dark" ? MoonIcon : SunIcon
</script>

<!-- {#if browser}
  <Select
    {_class}
    title="Change theme"
    on:change={(e) => setTheme(e.detail)}
    selected={theme}
    let:icon
    options={{ light: options.light, dark: options.dark }}
  />
{/if} -->
<!-- options={[
  { key: "light", name: options.light },
  { key: "dark", name: options.dark },
  { key: "system", name: options.system },
]} -->

<!-- <Select
  class={_class}
  title="Change theme"
  options={[
    { key: "light", name: "light" },
    { key: "dark", name: "dark" },
    { key: "system", name: "system" },
  ]}
  onChange={(option) => {
    setTheme(option.key)
  }}
  selected={{
    key: theme,
    name: "html",
    // <div className="flex items-center gap-2 capitalize">
    //   <IconToUse />
    //   <span className={lite ? 'md:hidden' : ''}>
    //     {mounted ? options[theme as keyof typeof options] : options.light}
    //   </span>
    // </div>
  }}
/> -->

<button on:click={toggleTheme}>
  {#if theme === "dark"}
    <div in:fly={{ y: 10 }}>
      <SunIcon></SunIcon>
      <span>Light</span>
    </div>
  {:else}
    <div in:fly={{ y: 10 }}>
      <MoonIcon></MoonIcon>
      <span>Dark</span>
    </div>
  {/if}
</button>
