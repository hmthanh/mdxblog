<script lang="ts">
  //     import { useTheme } from 'next-themes'
  // import { useMounted } from 'nextra/hooks'
  // import { MoonIcon, SunIcon } from 'nextra/icons'
  // import type { ReactElement } from 'react'
  // import { z } from 'zod'
  // import { useConfig } from '../contexts'
  import Select from "./select.svelte"
  import { z } from "zod"
  import { browser } from "$app/environment"
  import { SunIcon, MoonIcon } from "../icons"
  let _class
  export { _class as class }

  type ThemeSwitchProps = {
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
  let theme = "light"

  //   const { setTheme, resolvedTheme, theme = '' } = useTheme()
  // const config = useConfig().themeSwitch

  function setTheme(newTheme: ThemeOptions["light" | "dark" | "system"]) {
    theme = newTheme
    // Update theme
  }

  $: icon = theme === "dark" ? MoonIcon : SunIcon

  //   const IconToUse = mounted && resolvedTheme === 'dark' ? MoonIcon : SunIcon
  // const options: ThemeOptions =
  //   typeof config.useOptions === 'function'
  //     ? config.useOptions()
  //     : config.useOptions
  const options = "light"
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

<Select
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
    name: "",
    // <div className="flex items-center gap-2 capitalize">
    //   <IconToUse />
    //   <span className={lite ? 'md:hidden' : ''}>
    //     {mounted ? options[theme as keyof typeof options] : options.light}
    //   </span>
    // </div>
  }}
/>
