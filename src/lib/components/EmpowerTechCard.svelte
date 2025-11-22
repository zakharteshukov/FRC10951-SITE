<script>
	import { onMount } from 'svelte';
	import { lazyLoadImage } from '$lib/utils/imageLoader';

	/** @type {HTMLElement | null} */
	let imageElement;

	onMount(() => {
		if (!imageElement) return;
		return lazyLoadImage('/empowertech.webp', imageElement);
	});
</script>

<section class="relative flex-col p-6 md:p-4 h-full min-h-[380px] md:min-h-[280px] overflow-hidden m-0 shadow-card">
	<div class="absolute inset-0 bg-cover bg-center bg-no-repeat brightness-[0.85] z-0 transition-transform hover:scale-[1.02]" bind:this={imageElement}></div>
	<div class="absolute inset-0 bg-black/50 z-1"></div>
	<div class="relative z-2 flex-col flex-grow">
		<h5 class="heading-4 text-white mb-2 md:text-heading-5">Empower Tech</h5>
		<p class="text-body text-white/90 mb-4 flex-grow md:text-small">
			Empowering communities through technology education and innovation.
		</p>
		<a href="/projects/empowertech" class="btn btn-outline text-white border-white hover:bg-white hover:text-text-dark self-start">
			Learn More
		</a>
	</div>
</section>
