<script>
	export let data;
	import Header from '$lib/components/Header.svelte';
  import IntroFolder from '$lib/components/Intro_Folders.svelte'
	import FilterOption from '../lib/components/FilterOption.svelte';
	import MiniFolders from '$lib/components/SmallFolders.svelte'

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
  })
</script>

<!-- import here only components -->
<Header />
<IntroFolder />
<FilterOption />
<MiniFolders data={data} />