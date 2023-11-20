<script>
  export let data
  console.log(data.allArticles)
</script>

<h1>Welcome to SvelteKit</h1>

<p>Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation</p>

{JSON.stringify(data, null, 2)}