<script>
	import { fade, fly } from 'svelte/transition';
	import { onMount } from 'svelte';

	const heroImage = '/hero.jpg';
	let heroElement;
	let isVisible = false;

	onMount(() => {
		const img = new Image();
		img.src = heroImage;
		img.onerror = () => {
			console.error('Failed to load hero image:', heroImage);
		};

		// Parallax scroll effect
		const handleScroll = () => {
			if (!heroElement) return;
			const rect = heroElement.getBoundingClientRect();
			const windowHeight = window.innerHeight;
			
			// Only apply parallax when hero is in view
			if (rect.bottom >= 0 && rect.top <= windowHeight) {
				const scrollY = window.scrollY;
				// Limit parallax effect to prevent over-scrolling
				const parallaxOffset = Math.min(scrollY * 0.5, windowHeight * 0.3);
				heroElement.style.setProperty('--scroll-offset', `${parallaxOffset}px`);
			}
		};

		// Intersection Observer for fade-in animation
		const observer = new IntersectionObserver(
			(entries) => {
				entries.forEach((entry) => {
					if (entry.isIntersecting) {
						isVisible = true;
					}
				});
			},
			{ threshold: 0.1 }
		);

		if (heroElement) {
			observer.observe(heroElement);
		}

		window.addEventListener('scroll', handleScroll, { passive: true });
		handleScroll(); // Initial call

		return () => {
			window.removeEventListener('scroll', handleScroll);
			observer.disconnect();
		};
	});
</script>

<section class="hero" bind:this={heroElement}>
	<div class="hero-bg">
		<div class="hero-image-wrapper">
			<img src={heroImage} alt="Team 10951 Hero" class="hero-image" />
		</div>
		<div class="hero-gradient"></div>
	</div>
	<div class="hero-overlay"></div>
	<div class="hero-content">
		{#if isVisible}
			<h1 class="team-number" transition:fly={{ y: 50, duration: 1000, delay: 200 }}>
				10951
			</h1>
			<h2 class="team-name" transition:fly={{ y: 30, duration: 1000, delay: 400 }}>
				Saigon South Dragons
			</h2>
			<p class="micro" transition:fly={{ y: 20, duration: 1000, delay: 600 }}>
				Competing in FIRST Robotics Competition, representing Saigon South International School
			</p>
		{/if}
	</div>
	<div class="scroll-indicator" transition:fade={{ duration: 500, delay: 1200 }}>
		<div class="scroll-arrow"></div>
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
		--scroll-offset: 0px;
	}

	.hero-bg {
		position: absolute;
		inset: 0;
		z-index: 0;
		width: 100%;
		height: 120%;
		overflow: hidden;
		transform: translateY(calc(var(--scroll-offset) * 0.3));
		transition: transform 0.1s ease-out;
	}

	.hero-image-wrapper {
		position: absolute;
		inset: 0;
		width: 100%;
		height: 100%;
		transform: translateY(calc(var(--scroll-offset) * 0.2));
		transition: transform 0.1s ease-out;
	}

	.hero-image {
		width: 100%;
		height: 100%;
		object-fit: cover;
		object-position: center;
		display: block;
		filter: brightness(0.8) contrast(1.1) saturate(1.1);
		transform: scale(1.1);
		transition: filter 0.3s ease;
		animation: heroImageZoom 20s ease-in-out infinite alternate;
	}

	@keyframes heroImageZoom {
		0% {
			transform: scale(1.1);
		}
		100% {
			transform: scale(1.15);
		}
	}

	.hero-gradient {
		position: absolute;
		inset: 0;
		background: linear-gradient(
			135deg,
			rgba(0, 0, 0, 0.3) 0%,
			rgba(0, 0, 0, 0.1) 50%,
			rgba(0, 0, 0, 0.4) 100%
		);
		animation: gradientShift 8s ease-in-out infinite alternate;
		z-index: 1;
	}

	@keyframes gradientShift {
		0% {
			opacity: 0.6;
		}
		100% {
			opacity: 0.8;
		}
	}

	.hero:hover .hero-image {
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
		width: 100%;
	}

	.team-number {
		font-size: 9rem;
		font-weight: 800;
		letter-spacing: 0.1em;
		margin: 0;
		line-height: 1;
		font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
		text-shadow: 0 4px 20px rgba(0, 0, 0, 0.5);
		animation: numberGlow 3s ease-in-out infinite alternate;
		background: linear-gradient(135deg, #ffffff 0%, #e0e0e0 100%);
		-webkit-background-clip: text;
		-webkit-text-fill-color: transparent;
		background-clip: text;
	}

	@keyframes numberGlow {
		0% {
			filter: drop-shadow(0 4px 20px rgba(255, 255, 255, 0.1));
		}
		100% {
			filter: drop-shadow(0 4px 30px rgba(255, 255, 255, 0.2));
		}
	}

	.team-name {
		font-size: 2.5rem;
		font-weight: 600;
		margin: 1rem 0 0.5rem 0;
		letter-spacing: 0.02em;
		text-shadow: 0 2px 10px rgba(0, 0, 0, 0.5);
		opacity: 0.95;
	}

	.micro {
		font-size: 1rem;
		opacity: 0.9;
		margin: 0.5rem 0 0 0;
		font-weight: 300;
		max-width: 600px;
		margin-left: auto;
		margin-right: auto;
		text-shadow: 0 1px 5px rgba(0, 0, 0, 0.5);
	}

	.scroll-indicator {
		position: absolute;
		bottom: 2rem;
		left: 50%;
		transform: translateX(-50%);
		z-index: 3;
		opacity: 0.8;
	}

	.scroll-arrow {
		width: 30px;
		height: 30px;
		border-right: 2px solid white;
		border-bottom: 2px solid white;
		transform: rotate(45deg);
		animation: scrollBounce 2s ease-in-out infinite;
	}

	@keyframes scrollBounce {
		0%,
		100% {
			transform: rotate(45deg) translateY(0);
			opacity: 0.8;
		}
		50% {
			transform: rotate(45deg) translateY(-10px);
			opacity: 1;
		}
	}

	@media (max-width: 768px) {
		.hero {
			min-height: 500px;
			height: 100vh;
			max-height: 100vh;
		}

		.hero-content {
			padding: 1.5rem;
		}

		.team-number {
			font-size: 4rem;
		}

		.team-name {
			font-size: 1.5rem;
		}

		.micro {
			font-size: 0.85rem;
		}

		.scroll-indicator {
			bottom: 1rem;
		}

		.scroll-arrow {
			width: 24px;
			height: 24px;
		}
	}

	@media (max-width: 480px) {
		.hero {
			min-height: 400px;
		}

		.team-number {
			font-size: 3rem;
		}

		.team-name {
			font-size: 1.25rem;
		}

		.micro {
			font-size: 0.8rem;
		}
	}

	/* Reduce motion for users who prefer it */
	@media (prefers-reduced-motion: reduce) {
		.hero-image,
		.hero-gradient,
		.team-number,
		.scroll-arrow {
			animation: none;
		}

		.hero-bg,
		.hero-image-wrapper {
			transform: none;
		}

		.hero-image {
			transform: scale(1.05);
		}
	}
</style>
