<script lang="ts" context="module">
  export type TOCProps = {
    headings: any[] //Heading[]
    filePath: string
  }
</script>

<script lang="ts">
  let headings
  let filePath
</script>

<nav class="nextra-toc order-last hidden w-64 shrink-0 xl:block print:hidden px-4" aria-label="table of contents">
  <div
    class="nextra-scrollbar sticky top-16 overflow-y-auto pr-4 pt-6 text-sm [hyphens:auto] max-h-[calc(100vh-var(--nextra-navbar-height)-env(safe-area-inset-bottom))] ltr:-mr-4 rtl:-ml-4"
  >
    <p class="mb-4 font-semibold tracking-tight">On This Page</p>
    <ul>
      <li class="my-2 scroll-my-6 scroll-py-6">
        <a
          href="#quick-start-from-template"
          class="font-semibold inline-block text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-300 contrast-more:text-gray-900 contrast-more:underline contrast-more:dark:text-gray-50 w-full break-words"
          >Quick Start from Template</a
        >
      </li>
      <li class="my-2 scroll-my-6 scroll-py-6">
        <a
          href="#deploy-to-vercel"
          class="ltr:pl-4 rtl:pr-4 inline-block text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-300 contrast-more:text-gray-900 contrast-more:underline contrast-more:dark:text-gray-50 w-full break-words"
          >Deploy to Vercel</a
        >
      </li>
      <li class="my-2 scroll-my-6 scroll-py-6">
        <a
          href="#fork-the-template"
          class="ltr:pl-4 rtl:pr-4 inline-block text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-300 contrast-more:text-gray-900 contrast-more:underline contrast-more:dark:text-gray-50 w-full break-words"
          >Fork the Template</a
        >
      </li>
      <li class="my-2 scroll-my-6 scroll-py-6">
        <a
          href="#start-as-new-project"
          class="font-semibold inline-block text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-300 contrast-more:text-gray-900 contrast-more:underline contrast-more:dark:text-gray-50 w-full break-words"
          >Start as New Project</a
        >
      </li>
      <li class="my-2 scroll-my-6 scroll-py-6">
        <a
          href="#install"
          class="ltr:pl-4 rtl:pr-4 inline-block text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-300 contrast-more:text-gray-900 contrast-more:underline contrast-more:dark:text-gray-50 w-full break-words"
          >Install</a
        >
      </li>
      <li class="my-2 scroll-my-6 scroll-py-6">
        <a
          href="#add-nextjs-config"
          class="ltr:pl-4 rtl:pr-4 inline-block text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-300 contrast-more:text-gray-900 contrast-more:underline contrast-more:dark:text-gray-50 w-full break-words"
          >Add Next.js Config</a
        >
      </li>
      <li class="my-2 scroll-my-6 scroll-py-6">
        <a
          href="#create-docs-theme-config"
          class="ltr:pl-4 rtl:pr-4 inline-block text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-300 contrast-more:text-gray-900 contrast-more:underline contrast-more:dark:text-gray-50 w-full break-words"
          >Create Docs Theme Config</a
        >
      </li>
      <li class="my-2 scroll-my-6 scroll-py-6">
        <a
          href="#ready-to-go"
          class="ltr:pl-4 rtl:pr-4 inline-block text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-300 contrast-more:text-gray-900 contrast-more:underline contrast-more:dark:text-gray-50 w-full break-words"
          >Ready to Go!</a
        >
      </li>
    </ul>
    <div
      class="mt-8 border-t bg-white pt-8 shadow-[0_-12px_16px_white] dark:bg-dark dark:shadow-[0_-12px_16px_#111] sticky bottom-0 flex flex-col items-start gap-2 pb-8 dark:border-neutral-800 contrast-more:border-t contrast-more:border-neutral-400 contrast-more:shadow-none contrast-more:dark:border-neutral-400"
    >
      <a
        href="https://github.com/shuding/nextra/issues/new?title=Feedback%20for%20%E2%80%9CDocs%20Theme%E2%80%9D&amp;labels=feedback"
        target="_blank"
        rel="noreferrer"
        class="text-xs font-medium text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-100 contrast-more:text-gray-800 contrast-more:dark:text-gray-50"
        >Question? Give us feedback →<span class="sr-only select-none"> (opens in a new tab)</span>
      </a>
      <a
        class="text-xs font-medium text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-100 contrast-more:text-gray-800 contrast-more:dark:text-gray-50"
        href="https://github.com/shuding/nextra/tree/main/docs/pages/docs/docs-theme/start.mdx"
        >Edit this page on GitHub →</a
      >
      <button
        aria-hidden="true"
        class="flex items-center gap-1.5 transition text-xs font-medium text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-100 contrast-more:text-gray-800 contrast-more:dark:text-gray-50 opacity-0"
      >
        Scroll to top
        <svg
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          class="-rotate-90 w-3.5 h-3.5 border rounded-full border-current"
        >
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
        </svg>
      </button>
    </div>
  </div>
</nav>

<!-- import cn from 'clsx'
import type { Heading } from 'nextra'
import type { ReactElement } from 'react'
import { useEffect, useMemo, useRef } from 'react'
import scrollIntoView from 'scroll-into-view-if-needed'
import { useActiveAnchor, useConfig } from '../contexts'
import { renderComponent } from '../utils'
import { Anchor } from './anchor'
import { BackToTop } from './back-to-top'



const linkClassName = cn(
  'text-xs font-medium text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-100',
  'contrast-more:text-gray-800 contrast-more:dark:text-gray-50'
)

export function TOC({ headings, filePath }: TOCProps): ReactElement {
  const activeAnchor = useActiveAnchor()
  const config = useConfig()
  const tocRef = useRef<HTMLDivElement>(null)

  const items = useMemo(
    () => headings.filter(heading => heading.depth > 1),
    [headings]
  )

  const hasHeadings = items.length > 0
  const hasMetaInfo = Boolean(
    config.feedback.content ||
      config.editLink.component ||
      config.toc.extraContent
  )

  const activeSlug = Object.entries(activeAnchor).find(
    ([, { isActive }]) => isActive
  )?.[0]

  useEffect(() => {
    if (!activeSlug) return
    const anchor = tocRef.current?.querySelector(
      `li > a[href="#${activeSlug}"]`
    )

    if (anchor) {
      scrollIntoView(anchor, {
        behavior: 'smooth',
        block: 'center',
        inline: 'center',
        scrollMode: 'always',
        boundary: tocRef.current
      })
    }
  }, [activeSlug])

  return (
    <div
      ref={tocRef}
      className={cn(
        'nextra-scrollbar sticky top-16 overflow-y-auto pr-4 pt-6 text-sm [hyphens:auto]',
        'max-h-[calc(100vh-var(--nextra-navbar-height)-env(safe-area-inset-bottom))] ltr:-mr-4 rtl:-ml-4'
      )}
    >
      {hasHeadings && (
        <>
          <p className="mb-4 font-semibold tracking-tight">
            {renderComponent(config.toc.title)}
          </p>
          <ul>
            {items.map(({ id, value, depth }) => (
              <li className="my-2 scroll-my-6 scroll-py-6" key={id}>
                <a
                  href={`#${id}`}
                  className={cn(
                    {
                      2: 'font-semibold',
                      3: 'ltr:pl-4 rtl:pr-4',
                      4: 'ltr:pl-8 rtl:pr-8',
                      5: 'ltr:pl-12 rtl:pr-12',
                      6: 'ltr:pl-16 rtl:pr-16'
                    }[depth as Exclude<typeof depth, 1>],
                    'inline-block',
                    activeAnchor[id]?.isActive
                      ? 'text-primary-600 subpixel-antialiased contrast-more:!text-primary-600'
                      : 'text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-300',
                    'contrast-more:text-gray-900 contrast-more:underline contrast-more:dark:text-gray-50 w-full break-words'
                  )}
                >
                  {config.toc.headingComponent?.({
                    id,
                    children: value
                  }) ?? value}
                </a>
              </li>
            ))}
          </ul>
        </>
      )}

      {hasMetaInfo && (
        <div
          className={cn(
            hasHeadings &&
              'mt-8 border-t bg-white pt-8 shadow-[0_-12px_16px_white] dark:bg-dark dark:shadow-[0_-12px_16px_#111]',
            'sticky bottom-0 flex flex-col items-start gap-2 pb-8 dark:border-neutral-800',
            'contrast-more:border-t contrast-more:border-neutral-400 contrast-more:shadow-none contrast-more:dark:border-neutral-400'
          )}
        >
          {config.feedback.content ? (
            <Anchor
              className={linkClassName}
              href={config.feedback.useLink()}
              newWindow
            >
              {renderComponent(config.feedback.content)}
            </Anchor>
          ) : null}

          {renderComponent(config.editLink.component, {
            filePath,
            className: linkClassName,
            children: renderComponent(config.editLink.text)
          })}

          {renderComponent(config.toc.extraContent)}

          {config.toc.backToTop && <BackToTop className={linkClassName} />}
        </div>
      )}
    </div>
  )
} -->
