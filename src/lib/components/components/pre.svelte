<!-- import cn from 'clsx'
import type { ComponentProps, ReactElement } from 'react'
import { useCallback, useRef } from 'react'
import { WordWrapIcon } from '../icons'
import { Button } from './button'
import { CopyToClipboard } from './copy-to-clipboard'

export const Pre = ({
  children,
  className,
  hasCopyCode,
  filename,
  ...props
}: ComponentProps<'pre'> & {
  filename?: string
  hasCopyCode?: boolean
}): ReactElement => {
  const preRef = useRef<HTMLPreElement | null>(null)

  const toggleWordWrap = useCallback(() => {
    const htmlDataset = document.documentElement.dataset
    const hasWordWrap = 'nextraWordWrap' in htmlDataset
    if (hasWordWrap) {
      delete htmlDataset.nextraWordWrap
    } else {
      htmlDataset.nextraWordWrap = ''
    }
  }, [])

  return (
    <div className="nextra-code-block nx-relative nx-mt-6 first:nx-mt-0">
      {filename && (
        <div className="nx-absolute nx-top-0 nx-z-[1] nx-w-full nx-truncate nx-rounded-t-xl nx-bg-primary-700/5 nx-py-2 nx-px-4 nx-text-xs nx-text-gray-700 dark:nx-bg-primary-300/10 dark:nx-text-gray-200">
          {filename}
        </div>
      )}
      <pre
        className={cn(
          'nx-bg-primary-700/5 nx-mb-4 nx-overflow-x-auto nx-rounded-xl nx-subpixel-antialiased dark:nx-bg-primary-300/10 nx-text-[.9em]',
          'contrast-more:nx-border contrast-more:nx-border-primary-900/20 contrast-more:nx-contrast-150 contrast-more:dark:nx-border-primary-100/40',
          filename ? 'nx-pt-12 nx-pb-4' : 'nx-py-4',
          className
        )}
        ref={preRef}
        {...props}
      >
        {children}
      </pre>
      <div
        className={cn(
          'nx-opacity-0 nx-transition [div:hover>&]:nx-opacity-100 focus-within:nx-opacity-100',
          'nx-flex nx-gap-1 nx-absolute nx-m-[11px] nx-right-0',
          filename ? 'nx-top-8' : 'nx-top-0'
        )}
      >
        <Button
          onClick={toggleWordWrap}
          className="md:nx-hidden"
          title="Toggle word wrap"
        >
          <WordWrapIcon className="nx-pointer-events-none nx-h-4 nx-w-4" />
        </Button>
        {hasCopyCode && (
          <CopyToClipboard
            getValue={() =>
              preRef.current?.querySelector('code')?.textContent || ''
            }
          />
        )}
      </div>
    </div>
  )
} -->
<script>
  import cn from "clsx"
  import { onMount } from "svelte"
  import { WordWrapIcon } from "../icons.svelte"
  import Button from "./Button.svelte"
  import CopyToClipboard from "./CopyToClipboard.svelte"

  export let children
  export let className
  export let hasCopyCode
  export let filename
  export let props = {}

  let preRef

  onMount(() => {
    preRef = preRef || {}
  })

  const toggleWordWrap = () => {
    const htmlDataset = document.documentElement.dataset
    const hasWordWrap = "nextraWordWrap" in htmlDataset
    if (hasWordWrap) {
      delete htmlDataset.nextraWordWrap
    } else {
      htmlDataset.nextraWordWrap = ""
    }
  }
</script>

<div class="nextra-code-block relative mt-6 first:mt-0">
  {#if filename}
    <div
      class="absolute top-0 z-10 w-full truncate rounded-t-xl bg-primary-700/5 py-2 px-4 text-xs text-gray-700 dark:bg-primary-300/10 dark:text-gray-200"
    >
      {filename}
    </div>
  {/if}
  <pre
    class={cn(
      "bg-primary-700/5 mb-4 overflow-x-auto rounded-xl subpixel-antialiased dark:bg-primary-300/10 text-[.9em]",
      "contrast-more:border contrast-more:border-primary-900/20 contrast-more:contrast-150 contrast-more:dark:border-primary-100/40",
      filename ? "pt-12 pb-4" : "py-4",
      className
    )}
    bind:this={preRef}
    {...props}>
    {@html children}
  </pre>
  <div
    class={cn(
      "opacity-0 transition hover:opacity-100 focus-within:opacity-100",
      "flex gap-1 absolute m-[11px] right-0",
      filename ? "top-8" : "top-0"
    )}
  >
    <Button on:click={toggleWordWrap} class="md:hidden" title="Toggle word wrap">
      <WordWrapIcon class="pointer-events-none h-4 w-4" />
    </Button>
    {#if hasCopyCode}
      <CopyToClipboard getValue={() => preRef?.querySelector("code")?.textContent || ""} />
    {/if}
  </div>
</div>
