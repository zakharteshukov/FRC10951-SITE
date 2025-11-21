<script>
	import { fade } from 'svelte/transition';
	import { onMount } from 'svelte';

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
		<p class="micro">Competing in FIRST Robotics Competition, representing Saigon South International School</p>
	</div>
</section>
<style>
	.hero {
		position: relative;
		height: 100vh;
		min-height: 600px;
		display: flex;
		align-items: center;
		justify-content: center;
		color: white;
		overflow: hidden;
		margin-top: 0;
		background-color: #1a1a1a;
	}

	.hero-bg {
		position: absolute;
		inset: 0;
		z-index: 0;
		width: 100%;
		height: 100%;
		overflow: hidden;
	}

	.hero-image {
		width: 100%;
		height: 100%;
		object-fit: cover;
		object-position: center;
		display: block;
		filter: brightness(0.8) contrast(1.1) saturate(1.1);
		transition: transform 0.3s ease, filter 0.3s ease;
		transform: scale(1);
	}

	.hero:hover .hero-image {
		transform: scale(1.05);
		filter: brightness(0.85) contrast(1.15) saturate(1.15);
	}

	.hero-overlay {
		position: absolute;
		inset: 0;
		background: rgba(0, 0, 0, 0.4);
		z-index: 1;
	}

	.hero-content {
		position: relative;
		z-index: 2;
		text-align: center;
		padding: 2rem;
	}

	.team-number {
		font-size: 9rem;
		font-weight: 800;
		letter-spacing: 0.1em;
		margin: 0;
		line-height: 1;
		font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
	}

	.team-name {
		font-size: 2.5rem;
		font-weight: 600;
		margin: 1rem 0 0.5rem 0;
		letter-spacing: 0.02em;
	}

	.micro {
		font-size: 1rem;
		opacity: 0.9;
		margin: 0.5rem 0 0 0;
		font-weight: 300;
		max-width: 600px;
		margin-left: auto;
		margin-right: auto;
	}

	@media (max-width: 768px) {
		.team-number {
			font-size: 5rem;
		}

		.team-name {
			font-size: 1.75rem;
		}

		.micro {
			font-size: 0.9rem;
		}
	}
</style>

