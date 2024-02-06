<script lang="ts" context="module">
  // type SkipNavLinkProps = Omit<ComponentProps<"a">, "ref" | "href" | "children"> & {
  //   label?: string
  //   styled?: boolean
  // }
</script>

<script lang="ts">
  import cn from "clsx"

  const DEFAULT_ID = "reach-skip-nav"
  const DEFAULT_LABEL = "Skip to content"

  let _class
  export { _class as class }
  let id
  let label = DEFAULT_LABEL
  export let styled

  const className =
    _class === undefined // Give the option to the user to pass a falsy other than undefined to remove the default styles
      ? styled // Give the user a way to opt-in the default style provided with the theme. Probably remove this option in the next major version (v3.x) and just do a check to use the providedClassName or the default
        ? cn(
            "sr-only",
            "focus:not-sr-only focus:fixed focus:z-50 focus:m-3 focus:ml-4 focus:h-[calc(var(--nextra-navbar-height)-1.5rem)] focus:rounded-lg focus:border focus:px-3 focus:py-2 focus:align-middle focus:text-sm focus:font-bold",
            "focus:text-gray-900 focus:dark:text-gray-100",
            "focus:bg-white focus:dark:bg-neutral-900",
            "focus:border-neutral-400 focus:dark:border-neutral-800"
          )
        : ""
      : _class
</script>

<a {...$$restProps} href={`#${id || DEFAULT_ID}`} class={_class} data-reach-skip-link="">
  {label}
</a>
