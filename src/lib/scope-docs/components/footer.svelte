<script lang="ts">
  import cn from "clsx"
  // import { useConfig } from '../contexts'
  // import { renderComponent } from '../utils'
  // import { LocaleSwitch } from './locale-switch'

  // export function Footer({ menu }: { menu?: boolean }): ReactElement {
  export const menu: boolean = false
  // const config = useConfig()
</script>

<!-- <footer class="bg-gray-100 pb-[env(safe-area-inset-bottom)] dark:bg-neutral-900 print:bg-transparent">
  <div
    class={cn(
      "mx-auto flex max-w-[90rem] gap-2 py-2 px-4",
      ""
      // menu && (config.i18n.length > 0 || config.darkMode)
      //   ? 'flex'
      //   : 'hidden'
    )}
  > -->
<!-- <LocaleSwitch /> -->
<!-- {config.darkMode && renderComponent(config.themeSwitch.component)} -->
<!-- </div>
  <hr class="dark:border-neutral-800" />
  <div
    class={cn(
      "mx-auto flex max-w-[90rem] justify-center py-12 text-gray-600 dark:text-gray-400 md:justify-start",
      "pl-[max(env(safe-area-inset-left),1.5rem)] pr-[max(env(safe-area-inset-right),1.5rem)]"
    )}
  > -->
<!-- {renderComponent(config.footer.text)} -->
<!-- </div>
</footer> -->

<footer class="bg-gray-100 pb-[env(safe-area-inset-bottom)] dark:bg-neutral-900 print:bg-transparent">
  <div class={cn("mx-auto max-w-[90rem] gap-2 py-2 px-4 ", menu ? "flex" : "hidden")}>
    <button
      title="Change theme"
      class="h-7 rounded-md px-2 text-left text-xs font-medium text-gray-600 transition-colors dark:text-gray-400 hover:bg-gray-100 hover:text-gray-900 dark:hover:bg-primary-100/5 dark:hover:text-gray-50"
      id="headlessui-listbox-button-:Rkt6:"
      type="button"
      aria-haspopup="listbox"
      aria-expanded="false"
      data-headlessui-state=""
    >
      <div class="flex items-center gap-2 capitalize">
        <svg fill="none" viewBox="3 3 18 18" width="12" height="12" stroke="currentColor">
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            fill="currentColor"
            d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
          >
          </path>
        </svg>
        <span class="">System</span>
      </div>
    </button>
  </div>
  <hr class="dark:border-neutral-800" />
  <div
    class="mx-auto flex max-w-[90rem] justify-center py-12 text-gray-600 dark:text-gray-400 md:justify-start pl-[max(env(safe-area-inset-left),1.5rem)] pr-[max(env(safe-area-inset-right),1.5rem)]"
  >
    <div class="flex w-full flex-col items-center sm:items-start">
      <div>
        <a
          class="flex items-center gap-1 text-current"
          target="_blank"
          rel="noopener noreferrer"
          title="vercel.com homepage"
          href="https://vercel.com?utm_source=nextra.site"
        >
          <span>Powered by</span>
          <svg height="20" viewBox="0 0 283 64" fill="none">
            <title>Vercel</title>
            <path
              fill="currentColor"
              d="M141.04 16c-11.04 0-19 7.2-19 18s8.96 18 20 18c6.67 0 12.55-2.64 16.19-7.09l-7.65-4.42c-2.02 2.21-5.09 3.5-8.54 3.5-4.79 0-8.86-2.5-10.37-6.5h28.02c.22-1.12.35-2.28.35-3.5 0-10.79-7.96-17.99-19-17.99zm-9.46 14.5c1.25-3.99 4.67-6.5 9.45-6.5 4.79 0 8.21 2.51 9.45 6.5h-18.9zM248.72 16c-11.04 0-19 7.2-19 18s8.96 18 20 18c6.67 0 12.55-2.64 16.19-7.09l-7.65-4.42c-2.02 2.21-5.09 3.5-8.54 3.5-4.79 0-8.86-2.5-10.37-6.5h28.02c.22-1.12.35-2.28.35-3.5 0-10.79-7.96-17.99-19-17.99zm-9.45 14.5c1.25-3.99 4.67-6.5 9.45-6.5 4.79 0 8.21 2.51 9.45 6.5h-18.9zM200.24 34c0 6 3.92 10 10 10 4.12 0 7.21-1.87 8.8-4.92l7.68 4.43c-3.18 5.3-9.14 8.49-16.48 8.49-11.05 0-19-7.2-19-18s7.96-18 19-18c7.34 0 13.29 3.19 16.48 8.49l-7.68 4.43c-1.59-3.05-4.68-4.92-8.8-4.92-6.07 0-10 4-10 10zm82.48-29v46h-9V5h9zM36.95 0L73.9 64H0L36.95 0zm92.38 5l-27.71 48L73.91 5H84.3l17.32 30 17.32-30h10.39zm58.91 12v9.69c-1-.29-2.06-.49-3.2-.49-5.81 0-10 4-10 10V51h-9V17h9v9.2c0-5.08 5.91-9.2 13.2-9.2z"
            >
            </path>
          </svg>
        </a>
      </div>
      <p class="mt-6 text-xs">
        © <!-- -->2024<!-- --> The Nextra Project.
      </p>
    </div>
  </div>
</footer>
