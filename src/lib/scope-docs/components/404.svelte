<script lang="ts">
  //   import { useConfig } from "../contexts"
  //   import { getGitIssueUrl, renderComponent } from "../utils"
  //   import { Anchor } from "./anchor"

  //   const config = useConfig()
  //   const mounted = useMounted()
  //   const { asPath } = useRouter()
  //   const { content, labels } = config.notFound
  //   if (!content) {
  //     return null
  //   }
  let content
</script>

{#if content}
  <p class="text-center">
    <!-- <Anchor
    href={getGitIssueUrl({
      repository: config.docsRepositoryBase,
      title: `Found broken \`${mounted ? asPath : ""}\` link. Please fix!`,
      labels,
    })}
    newWindow
    class="text-primary-600 underline decoration-from-font [text-underline-position:from-font]"
  >
    {renderComponent(content)}
  </Anchor> -->
  </p>
{:else}
  <div></div>
{/if}
