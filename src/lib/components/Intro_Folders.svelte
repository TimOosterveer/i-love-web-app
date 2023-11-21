<script>
	import FolderLeft from './Folder_Left.svelte';
	import FolderRight from './Folder_Right.svelte';
</script>

<section>
  <FolderLeft />
  <FolderRight />
</section>

<style>
  section {
    display: flex;
    justify-content: space-between;
    margin: var(--margin);
  }
</style>
