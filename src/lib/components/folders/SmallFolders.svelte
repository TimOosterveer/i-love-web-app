<script>
	export let data;
	console.log(data.allArticles);

	import { onMount } from 'svelte';

	// onMount(() => {

	// });
		

</script>

<div class="container-folders">
	{#each data.allArticles as article}
	<div id="folder" class="folder">
			<a href={article.slug} />
			<div class="radius-left-top"></div>
			<div class="radius-right-top"></div>
				<span>{article.title}</span>
				<img src={article.svg.url} alt="" />
			</div>
	{/each}
</div>

<style>
	.container-folders {
		position: relative;
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(35rem, 1fr));
		margin: var(--margin) var(--margin) 0 var(--margin);
		gap: 4rem;
	}

	/* Inverted border-radius */
	.folder {
		position: relative;
		background-color: var(--secundair-color);
		color: var(--text-color-light);
		border-radius: 25px;
		width: 100%;
		height: 30rem;
		padding: 6rem 0 0 2rem;
		margin-bottom: var(--margin);
		box-shadow:
			inset 6px -6px 12px #161050,
			inset -6px 6px 12px #583eff;
		overflow: hidden;
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

	a {
		position: absolute;
		width: 100%;
		height: 100%;
	}
	span {
		position: absolute;
		top: 2rem;
		left: 2rem;
		width: 13rem;
	}

	img {
		position: absolute;
		top: 25%;
		left: 30%;
		width: 40%;
		transition: 0.4s;
	}

	.folder:hover img {
		scale: 1.1;
	}

	/* @media screen and (max-width: 1400px) {

		.container-folders {
			display: flex;
			flex-direction: column;
			flex-wrap: nowrap;
			width: 100%;

		}
	} */
</style>
