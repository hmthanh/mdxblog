<script lang="ts">
export let directories
export let anchors
export let className
export let onlyCurrentDocs

</script>


<ul className={cn(classes.list, className)}>
    {directories.map(item =>
      !onlyCurrentDocs || item.isUnderCurrentDocsTree ? (
        item.type === 'menu' ||
        (item.children && (item.children.length || !item.withIndexPage)) ? (
          <Folder key={item.name} item={item} anchors={anchors} />
        ) : (
          <File key={item.name} item={item} anchors={anchors} />
        )
      ) : null
    )}
  </ul>