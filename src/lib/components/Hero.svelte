<script lang="ts">
	import { fade } from 'svelte/transition';
	import { onMount, type Snippet } from 'svelte';

	export interface Props {
		title: string;
		subtitle?: string;
		body: string;
		bgImage: string;
		bgAlt: string;
		children: Snippet
	} 

	const { title, subtitle, body, bgImage, children }: Props = $props();

	let imageLoaded = false;
	
	onMount(() => {
		const img = new Image();
		img.src = bgImage;
		img.onload = () => {
			imageLoaded = true;
		};
		img.onerror = () => {
			console.error('Failed to load hero image:', bgImage);
		};
	});
</script>

<section class="relative flex flex-col items-center justify-center ssis-hero h-screen text-center text-white text-2xl p-1 gap-1" style={`--hero-background-image: url("${bgImage}")`} >
	<h1 class="ssis-hero-title font-extrabold">{title}</h1>
	{#if subtitle}
		<p class="font-mono">{subtitle}</p>
	{/if}
	<p class="">{body}</p>
	{@render children?.()}
</section>

<style>
	.ssis-hero-title {
		--font-size: calc(10vw + 5rem);
		font-size: var(--font-size);
		line-height: 0;
		margin-bottom: calc(var(--font-size) / 2 + var(--spacing) * 6);
	}

	.ssis-hero h1, .ssis-hero p {
		z-index: 1;
		max-width: 40ch;
	}

	.ssis-hero::after {
		content: "";
		display: block;

		height: 100%;
		width: 100%;
		position: absolute;

		background-image: var(--hero-background-image);
		background-size: cover;
		background-position: center;
		background-attachment: fixed;

		filter: brightness(33.33%) contrast(110%);
	}
</style>
