<script>
	export let data;
	console.log(data.allArticles);
</script>

<div class="container-folders">
	{#each data.allArticles as article}
		<a href={article.slug}>
			<div class="folder">
				<div class="radius-left-top"></div>
				<div class="radius-right-top"></div>
				<span>{article.title}</span>
        <img src={article.svg.url} alt="">
			</div>
		</a>
	{/each}
</div>

<style>
	.container-folders {
		display: flex;
		flex-wrap: wrap;
		justify-content: space-between;
		margin: var(--margin) var(--margin) 0 var(--margin);
	}

	/* Inverted border-radius */
	.folder {
		position: relative;
		background-color: var(--secundair-color);
		color: var(--text-color);
		border-radius: 25px;
		width: 30rem;
		height: 25rem;
		padding: 6rem 0 0 2rem;
		margin-bottom: var(--margin);
	}

	.folder::before {
		content: '';
		position: absolute;
		background-color: var(--bg-color);
		top: 0;
		right: 0;
		width: 40%;
		height: 60px;
		border-bottom-left-radius: 25px;
		border-top-right-radius: 25px;
		box-shadow: 10px 0 0 0 var(--bg-color);
	}

	.radius-left-top {
		position: absolute;
		top: 0;
		right: 40%;
		width: 30px;
		height: 30px;
		border-top-right-radius: 25px;
		box-shadow: 10px -7px 0 6px var(--bg-color);
	}

	.radius-right-top {
		position: absolute;
		top: 60px;
		right: 0;
		width: 30px;
		height: 30px;
		border-top-right-radius: 25px;
		box-shadow: 10px -7px 0 6px var(--bg-color);
	}

	/* styling folders*/

	span {
		position: absolute;
		top: 2rem;
		left: 2rem;
    width: 13rem;
	}

  img {
    position: absolute;
    width: 50%;
    inset: 25%;
    transition: .4s;
  }

  img:hover {
    scale: 1.2;
  }
</style>
