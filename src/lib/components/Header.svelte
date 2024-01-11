<script>
  import Button from "./buttons/Button.svelte";
</script>

<header>
    <ul>
      <li><a href="/#folder">ALL POSTS</a></li>
      <li><a target="_blank" href="https://github.com/TimOosterveer">GITHUB</a></li>
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
		z-index: 2;
		/* background-color: var(--bg-color); */
	}

	ul {
		display: flex;
		gap: var(--margin);
		list-style: none;
	}

	a {
		text-decoration: none;
		color: var(--text-color-light);
	}
</style>
