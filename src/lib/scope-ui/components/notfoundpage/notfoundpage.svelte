<script>
  // Import hooks from Svelte
  import { onMount } from "svelte"

    // Component state
    let config
    let asPath

    // Get config on mount
    onMount(async () => {
      config = getConfig()
    })

    // Handle routing
    const router = useRouter()
    $: asPath = router.asPath

    // Utils
  function getConfig() {
    // return config
  }

  function getIssueUrl() {
    // return issue url
  }

  function useRouter() {
    // return router
  }
  
  const { content, labels } = config.notFound


</script>

<p class="text-center">
  <Anchor
    href={getIssueUrl({
      repository: config.docsRepositoryBase,
      title: `Found broken \${asPath} link. Please fix!`,
      labels,
    })}
    newWindow
  >
    {content}
  </Anchor>
</p>
