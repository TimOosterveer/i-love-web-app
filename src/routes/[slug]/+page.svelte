<script>
	export let data;
	import Header from '$lib/components/Header.svelte';
</script>

<!-- <h1>
	{data.article.title}
</h1> -->

<section class="header">
	<Header />
	<div class="info">
		<h1>{data.article.introtext}</h1>
		<div class="small-info">
			<p>
				<svg
					data-name="Layer 1"
					width="30"
					height="30"
					fill="#fff"
					xmlns="http://www.w3.org/2000/svg"
					viewBox="0 0 128 128"
					><path
						d="M39.077 43.635h41a1.75 1.75 0 0 0 1.75-1.75V24.192a1.75 1.75 0 0 0-1.75-1.75h-41a1.75 1.75 0 0 0-1.75 1.75v17.693a1.75 1.75 0 0 0 1.75 1.75zm1.75-17.692h37.5v14.192h-37.5z"
					/><path
						d="M121.5 31.942a1.75 1.75 0 0 0 1.75-1.75v-12a1.75 1.75 0 0 0-1.75-1.75h-7.1V6.5a1.75 1.75 0 0 0-1.75-1.75H6.5A1.75 1.75 0 0 0 4.75 6.5v115a1.75 1.75 0 0 0 1.75 1.75h106.154a1.75 1.75 0 0 0 1.75-1.75V67.942h7.1a1.75 1.75 0 0 0 1.75-1.75v-12a1.75 1.75 0 0 0-1.75-1.75h-7.1v-2.5h7.1a1.75 1.75 0 0 0 1.75-1.75v-12a1.75 1.75 0 0 0-1.75-1.75h-7.1v-2.5zm-1.75-12v8.5h-5.35v-8.5zm-8.85 99.808H8.25V8.25H110.9v111.5zm8.846-63.808v8.5H114.4v-8.5zm0-18v8.5H114.4v-8.5z"
					/><path
						d="M88.327 81.583h-57.5a1.75 1.75 0 0 0 0 3.5h57.5a1.75 1.75 0 0 0 0-3.5zM88.327 92.25h-57.5a1.75 1.75 0 0 0 0 3.5h57.5a1.75 1.75 0 0 0 0-3.5zM88.327 102.917h-57.5a1.75 1.75 0 1 0 0 3.5h57.5a1.75 1.75 0 0 0 0-3.5zM12.5 10.75a1.75 1.75 0 0 0-1.75 1.75v20.539a1.75 1.75 0 0 0 3.5 0V12.5a1.75 1.75 0 0 0-1.75-1.75z"
					/></svg
				>{data.article.date}
			</p>

			<p>
				<svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 25 25"
					><path
						style="fill:#fff"
						d="M12.5 18 2 7.707 2.707 7l9.793 9.586L22.293 7l.707.707L12.5 18z"
					/></svg
				>
				SCROLL
			</p>
		</div>
	</div>
</section>

<link rel="stylesheet" href="style.slug.css" />

<style>
	.header {
		position: absolute;
		top: 0;
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		width: 100%;
		height: 70vh;
		color: var(--text-color-light);
		background-color: var(--secundair-color);
		border-radius: 0 0 var(--bradius) var(--bradius);
	}

	.info {
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		padding: var(--margin);

		& h1 {
			font-size: 3vw;
			font-weight: 500;
			width: 60vw;
		}

		& .small-info {
			border-top: 1px solid var(--text-color-light);
			margin-top: 4rem;
			padding-top: 4rem;
			font-size: 1vw;
			display: flex;
			justify-content: space-between;

			& p {
				display: flex;
				align-items: center;
			}

			& svg {
				margin-right: 1rem;
			}
		}
	}
</style>
