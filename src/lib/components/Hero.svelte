<script lang="ts">
	import { fade } from 'svelte/transition';
	import { onMount } from 'svelte';

	export interface Props {
		title: string;
		subtitle?: string;
		body: string;
		bgImage: string;
	} 

	const { title, subtitle, body, bgImage }: Props = $props();

	let imageLoaded = false;
	const heroImage = '/hero.jpg'; 

	onMount(() => {
		const img = new Image();
		img.src = heroImage;
		img.onload = () => {
			imageLoaded = true;
		};
		img.onerror = () => {
			console.error('Failed to load hero image:', heroImage);
		};
	});
</script>

<section class="hero">
	<div class="hero-bg">
		<img src={heroImage} alt="Team 10951 Hero" class="hero-image" />
	</div>
	<div class="hero-overlay"></div>
	<div class="hero-content" transition:fade={{ duration: 800, delay: 200 }}>
		<h1 class="team-number">10951</h1>
		<h2 class="team-name">Saigon South Dragons</h2>
		<p class="micro">
			Competing in FIRST Robotics Competition, representing Saigon South International School
		</p>
	</div>
</section>
