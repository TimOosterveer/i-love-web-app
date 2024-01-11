<script>
	import { onMount } from 'svelte';
	export let data;
	// console.log(data);

	// const development = document.getElementById('development');

	// development.addEventListener('click', filterVerandas);

	// function filterVerandas() {
	// 	const development = data.filter((item) => {
	// 		return item.allArticles.some((subItem) => {
	// 			return subItem.build === 'development';
	// 		});
	// 	});
	// 	return development;
	// }

	// console.log(filterVerandas());
</script>

<div class="filter-wrapper">
	<button id="development">DEVELOPMENT</button>
	<button>DESIGN</button>
	<button>ALL POSTS</button>
</div>

<style>
	.filter-wrapper {
		display: flex;
		justify-content: space-between;
		width: 40rem;
		margin: var(--margin) auto;
	}

	button {
		width: 10rem;
		height: 2.5rem;
		background-color: var(--text-color-light);
		border-radius: 50px;
		border: none;
		transition: 0.3s;
	}

	button:hover {
		cursor: pointer;
		background-color: var(--secundair-color);
		color: var(--text-color-light);
	}
</style>
