<script lang="ts">
  import cn from "clsx"
  // type InputProps = ComponentProps<'input'> & { suffix?: ReactNode }

  //     export const Input = forwardRef<HTMLInputElement, InputProps>(
  //   ({ class, suffix, ...props }, forwardedRef) => (

  //   )
  // )
  let _class
  export { _class as class }
</script>

<div
  class="relative flex items-center text-gray-900 contrast-more:text-gray-800 dark:text-gray-300 contrast-more:dark:text-gray-300"
>
  <input
    spellCheck={false}
    class={cn(
      _class,
      "block w-full appearance-none rounded-lg px-3 py-2 transition-colors",
      "text-base leading-tight md:text-sm",
      "bg-black/[.05] dark:bg-gray-50/10",
      "focus:bg-white dark:focus:bg-dark",
      "placeholder:text-gray-500 dark:placeholder:text-gray-400",
      "contrast-more:border contrast-more:border-current"
    )}
    {...$$restProps}
  />
  <!-- {suffix} -->
</div>
