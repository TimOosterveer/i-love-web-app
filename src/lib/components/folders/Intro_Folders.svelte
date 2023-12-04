<script>
  export let data
	import FolderLeft from './Folder_Left.svelte';
	import FolderRight from './Folder_Right.svelte';
</script>

<section>
  <FolderLeft />
  <FolderRight {data} />
</section>

<style>
  section {
    display: flex;
    justify-content: space-between;
    gap: var(--margin);
    margin: var(--margin);
  }
</style>
