<script>
	export let data;
	console.log(data.article);
	import Header from '$lib/components/Header.svelte';
</script>

<section class="header">
	<Header />
	<div class="intro-text">
		<h1>{data.article.name}</h1>
		<h2>{data.article.introtext}</h2>
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

<article class="text-about">
	<div class="social-person-wrapper">
		<h3>Socials <span>{data.article.name}</span></h3>
		<ul>
			<li>
				<a href={data.article.website}
					><svg
						width="50px"
						height="50px"
						viewBox="0 0 32 32"
						xmlns="http://www.w3.org/2000/svg"
						fill="none"
						><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g
							id="SVGRepo_tracerCarrier"
							stroke-linecap="round"
							stroke-linejoin="round"
						></g><g id="SVGRepo_iconCarrier">
							<path
								stroke="#535358"
								stroke-linecap="round"
								stroke-linejoin="round"
								stroke-width="2"
								d="M14.9 19.142l-.708-.707c-2.121-2.121-2.121-4.95 0-7.071l2.829-2.828s0 0 0 0c2.121-2.122 4.95-2.122 7.07 0 2.122 2.12 2.122 4.95 0 7.07"
							></path>
							<path
								stroke="#535358"
								stroke-linecap="round"
								stroke-linejoin="round"
								stroke-width="2"
								d="M17.728 13.485l.707.707c2.121 2.122 2.121 4.95 0 7.072l-2.828 2.828s0 0 0 0c-2.122 2.121-4.95 2.121-7.071 0-2.122-2.121-2.122-4.95 0-7.071"
							></path>
						</g></svg
					></a
				>
			</li>
			<li>
				<a href={data.article.linkedin}>
					<svg
						version="1.1"
						id="Layer_1"
						xmlns="http://www.w3.org/2000/svg"
						xmlns:xlink="http://www.w3.org/1999/xlink"
						width="50px"
						height="50px"
						viewBox="0 0 32 32"
						enable-background="new 0 0 32 32"
						xml:space="preserve"
						fill="#000000"
						><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g
							id="SVGRepo_tracerCarrier"
							stroke-linecap="round"
							stroke-linejoin="round"
						></g><g id="SVGRepo_iconCarrier">
							<g>
								<path
									fill="#616161"
									d="M12.5,12h-3C9.224,12,9,12.224,9,12.5v11C9,23.776,9.224,24,9.5,24h3c0.276,0,0.5-0.224,0.5-0.5v-11 C13,12.224,12.776,12,12.5,12z M12,23h-2V13h2V23z"
								></path>
								<path
									fill="#616161"
									d="M11,7C9.897,7,9,7.897,9,9s0.897,2,2,2s2-0.897,2-2S12.103,7,11,7z M11,10c-0.552,0-1-0.449-1-1 s0.448-1,1-1s1,0.449,1,1S11.552,10,11,10z"
								></path>
								<path
									fill="#616161"
									d="M19.515,11.986c-0.534,0-1.097,0.119-1.554,0.32C17.886,12.126,17.707,12,17.5,12h-3 c-0.276,0-0.5,0.224-0.5,0.5v11c0,0.276,0.224,0.5,0.5,0.5h3c0.276,0,0.5-0.224,0.5-0.5l-0.002-6.661 c0-0.003-0.012-0.336,0.2-0.565C18.365,16.092,18.65,16,19.044,16C19.696,16,20,16.279,20,16.879V23.5c0,0.276,0.224,0.5,0.5,0.5h3 c0.276,0,0.5-0.224,0.5-0.5v-6.842C24,13.21,21.584,11.986,19.515,11.986z M23,23h-2v-6.121C21,15.72,20.251,15,19.044,15 c-0.684,0-1.216,0.2-1.581,0.595c-0.507,0.549-0.468,1.246-0.463,1.284V23h-2V13h2v0.355c0,0.276,0.224,0.5,0.5,0.5 c0.245,0,0.448-0.176,0.491-0.408c0.134-0.146,0.722-0.46,1.523-0.46c0.817,0,3.485,0.265,3.485,3.671V23z"
								></path>
								<path
									fill="#616161"
									d="M16-0.035C7.158-0.035-0.034,7.159-0.034,16S7.158,32.035,16,32.035S32.034,24.841,32.034,16 S24.842-0.035,16-0.035z M16,30.965C7.748,30.965,1.034,24.252,1.034,16S7.748,1.035,16,1.035S30.966,7.748,30.966,16 S24.252,30.965,16,30.965z"
								></path>
							</g>
						</g></svg
					>
				</a>
			</li>
			<li>
				<a href={data.article.linkedin}></a>
			</li>
		</ul>
	</div>

	<div class="story">
		<h2>Story</h2>
		<p>{data.article.story}</p>
		<p class="padding-top">{data.article.storytwo}</p>
		<p class="padding-top">{data.article.storythree}</p>
	</div>
</article>

<link rel="stylesheet" href="style.slug.css" />

<style>
	.header {
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		width: 100%;
		height: 70vh;
		color: var(--text-color-light);
		background-color: var(--secundair-color);
		border-radius: 0 0 var(--bradius) var(--bradius);
	}

	.intro-text {
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		padding: var(--margin);

		& h1 {
			font-size: 4vw;
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

	.text-about {
		display: flex;
		flex-direction: row-reverse;
		justify-content: space-between;
		padding: var(--margin);
		width: 100%;
		height: 100%;

		& .social-person-wrapper {
			position: sticky;
			top: var(--margin);
			background: #ffffff;
			box-shadow:
				inset 5px 5px 21px #c9c9c9,
				inset -5px -5px 21px #ffffff;
			border-radius: var(--bradius);
			width: 25%;
			height: 30vw;
			padding: 1rem;

			& span {
				font-weight: 500;
			}

			& h3 {
				font-weight: 300;
			}

			& ul {
				display: flex;
				gap: 1rem;
				margin-top: 1rem;
			}

			& li {
				list-style: none;

				& a {
					text-decoration: none;
					color: var(--secundair-color);
					font-weight: 400;
				}
			}
		}

		& .story {
			width: 70%;
		}

		& h2 {
			font-size: 2.5vw;
			font-weight: 500;
			margin-bottom: 2rem;
		}
		& p {
			color: var(--text-color-dark);
			font-size: 1.5vw;
			font-weight: 400;
			line-height: 1.5;
		}

		& .padding-top {
			padding-top: 2rem;
		}
	}
</style>
