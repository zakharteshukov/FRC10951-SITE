<script>
	import { onMount } from 'svelte';
	import { lazyLoadImage } from '$lib/utils/imageLoader';

	/** @type {HTMLElement | null} */
	let imageElement;

	onMount(() => {
		if (!imageElement) return;
		return lazyLoadImage('/vex.webp', imageElement);
	});
</script>

<section class="relative flex-center min-h-[570px] md:min-h-[380px] p-8 md:p-6 overflow-hidden m-0 h-full">
	<div class="absolute inset-0 bg-cover bg-center bg-no-repeat brightness-[0.85] z-0 transition-opacity" bind:this={imageElement}></div>
	<div class="absolute inset-0 bg-black/40 z-1"></div>
	<div class="relative z-2 w-full max-w-[500px]">
		<div class="mb-4">
			<h4 class="heading-1 font-bold mb-2 text-white md:text-heading-3">1599W</h4>
			<p class="text-lead text-white/90 mb-4 md:text-body">cycles between all the teams</p>
		</div>
		<div class="heading-3 font-semibold text-white mb-4 md:text-heading-4">VEX V5</div>
		<div class="flex flex-wrap gap-4 md:flex-col">
			<a href="/vex/1599w" class="btn btn-outline text-white border-white hover:bg-white hover:text-text-dark md:w-full">
				Learn More
			</a>
			<a href="/vex" class="btn btn-outline text-white border-white hover:bg-white hover:text-text-dark md:w-full">
				VEX Overview
			</a>
		</div>
	</div>
</section>
