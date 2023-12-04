<script>
  import Button from "./buttons/Button.svelte";
</script>

<header>
    <ul>
      <li><a href="/">ALL POSTS</a></li>
      <li><a href="/">ALL POSTS</a></li>
      <li><a href="/">ALL POSTS</a></li>
    </ul>

  <Button/>
</header>

<style>
	header {
    position: relative;
		display: flex;
    justify-content: center;
		align-items: center;
		height: 5rem;
		border-top: 1px solid white;
		border-bottom: 1px solid white;
		margin: var(--margin);
	}

	ul {
		display: flex;
		gap: var(--margin);
	}

	a {
		text-decoration: none;
		color: var(--text-color);
	}
</style>
