<script>
	export let data;
	import Header from '$lib/components/Header.svelte';
	import IntroFolder from '$lib/components/folders/Intro_Folders.svelte';
	import FilterOption from '../lib/components/filters/FilterOption.svelte';
	import MiniFolders from '$lib/components/folders/SmallFolders.svelte';

	import { onMount } from 'svelte';
	import Lenis from '@studio-freight/lenis';

	onMount(() => {
		const lenis = new Lenis();

		lenis.on('scroll', (e) => {
			console.log(e);
		});

		function raf(time) {
			lenis.raf(time);
			requestAnimationFrame(raf);
		}

		requestAnimationFrame(raf);
	});

</script>

<!-- import here only components -->
<Header />
<IntroFolder {data} />
<FilterOption {data}/>
<MiniFolders {data} />


<!-- <div>
	<h2>Stekjes Overzicht</h2>

	<h4>Scindapsus</h4>

	<p id="p1">
		De Epipremnum pinnatum, ook wel Scindapsus Epipremnum genoemd, is een populaire hang- en
		klimplant. Zorg er voor dat de grond altijd lichtvochtig is, zonder dat er water onder in de pot
		blijft staan. Zet de plant op een plek zonder direct zonlicht.
	</p>

</div>

<div>
	<h2>Stekjes Overzicht</h2>

	<h6>Scindapsus</h6>

	<p id="p2">
		De Epipremnum pinnatum, ook wel Scindapsus Epipremnum genoemd, is een populaire hang- en
		klimplant. Zorg er voor dat de grond altijd lichtvochtig is, zonder dat er water onder in de pot
		blijft staan. Zet de plant op een plek zonder direct zonlicht.
	</p>
</div>

<div>
	<h2>Stekjes Overzicht</h2>

	<h5>Scindapsus</h5>

	<p id="p3">
		De Epipremnum pinnatum, ook wel Scindapsus Epipremnum genoemd, is een populaire hang- en
		klimplant. Zorg er voor dat de grond altijd lichtvochtig is, zonder dat er water onder in de pot
		blijft staan. Zet de plant op een plek zonder direct zonlicht.
	</p>
</div> -->

<style>

  /* :root {
    --line-height: 1.5;
    --calc: 1.6;

    --font-size: 1em;

		--mono: "MONO" 0;

--casl: "CASL" 0;
--wght: "wght" 300;

--slnt: "slnt" -15;

--CRSV: "CRSV" 0.5;

  } */
	/* div {
		display: flex;
		flex-direction: column;
		background-color: aqua;
		border-radius: 10px;
		width: 30vw;
		height: 40vw;
		margin-bottom: 2rem;
    padding: 2rem;
    line-height: var(--line-height);
    font-size: calc();
	}

  h2 {
    font-size: calc(calc(var(--calc) * 2) * var(--font-size));
  }

  h4 {
    font-size: calc(calc(var(--calc) * 2) * var(--font-size)); 
  }

  h6 {
    font-size: calc(calc(var(--calc) * 1.5) * var(--font-size)); 
  }

  #p1 {
    font-size: var(--font-size);
    line-height: 1.5;
  }

  #p2 {
    line-height: 1.7;
  }

  #p3 {
    line-height: 2;
  } */
</style>
