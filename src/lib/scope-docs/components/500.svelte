<script lang="ts">
  // import { useConfig } from '../contexts'
  // import { getGitIssueUrl, renderComponent } from '../utils'
  // import { Anchor } from './anchor'
  // const config = useConfig()
  // const mounted = useMounted()
  // const { asPath } = useRouter()
  // const { content, labels } = config.serverSideError
  // if (!content) {
  //   return null
  // }

  let config
</script>

<p class="text-center ">
  <!-- <Anchor
    href={getGitIssueUrl({
      repository: config.docsRepositoryBase,
      title: `Got server-side error in \`${mounted ? asPath : ""}\` url. Please fix!`,
      labels,
    })}
    newWindow
    class="text-primary-600 underline decoration-from-font [text-underline-position:from-font]"
  >
    {renderComponent(content)}
  </Anchor> -->
</p>
