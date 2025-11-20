<script>
	import { onMount, onDestroy } from 'svelte';
	import { currentIndex, rotateInterval } from '$lib/stores/carousel';

	let i = 0;
	let timer;
	let isHovered = false;

	// Placeholder sponsor images - replace with actual sponsor images
	const slides = [
		{ src: 'https://via.placeholder.com/200x100?text=Sponsor+1', alt: 'Sponsor 1' },
		{ src: 'https://via.placeholder.com/200x100?text=Sponsor+2', alt: 'Sponsor 2' },
		{ src: 'https://via.placeholder.com/200x100?text=Sponsor+3', alt: 'Sponsor 3' }
	];

	function go(n) {
		i = (n + slides.length) % slides.length;
		currentIndex.set(i);
	}

	function startTimer() {
		if (!isHovered) {
			timer = setInterval(() => {
				go(i + 1);
			}, rotateInterval);
		}
	}

	function stopTimer() {
		if (timer) {
			clearInterval(timer);
			timer = null;
		}
	}

	onMount(() => {
		startTimer();
	});

	onDestroy(() => {
		stopTimer();
	});
</script>

<section class="sponsors">
	<div
		class="carousel"
		on:mouseenter={() => {
			isHovered = true;
			stopTimer();
		}}
		on:mouseleave={() => {
			isHovered = false;
			startTimer();
		}}
	>
		{#each slides as slide, idx}
			<img src={slide.src} alt={slide.alt} class:active={idx === i} />
		{/each}
		<button class="nav left" on:click={() => go(i - 1)} aria-label="Previous sponsor">
			&lt;
		</button>
		<button class="nav right" on:click={() => go(i + 1)} aria-label="Next sponsor">&gt;</button>
		<div class="dots">
			{#each slides as _, idx}
				<button
					class="dot"
					class:active={idx === i}
					on:click={() => go(idx)}
					aria-label="Go to sponsor {idx + 1}"
				></button>
			{/each}
		</div>
	</div>
</section>

<style>
	.sponsors {
		padding: 3rem 2rem;
		text-align: center;
		background: #f8f8f8;
	}

	.carousel {
		position: relative;
		display: inline-block;
		width: 100%;
		max-width: 900px;
		height: 150px;
		overflow: hidden;
	}

	.carousel img {
		position: absolute;
		inset: 0;
		margin: auto;
		width: auto;
		height: 100%;
		max-width: 200px;
		object-fit: contain;
		opacity: 0;
		transition: opacity 0.6s ease;
	}

	.carousel img.active {
		opacity: 1;
	}

	.nav {
		position: absolute;
		top: 50%;
		transform: translateY(-50%);
		background: rgba(255, 255, 255, 0.9);
		border: 1px solid #ddd;
		font-size: 1.5rem;
		padding: 0.5rem 0.75rem;
		cursor: pointer;
		z-index: 10;
		transition: all 0.3s ease;
		border-radius: 4px;
	}

	.nav:hover {
		background: white;
		box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
	}

	.nav.left {
		left: 1rem;
	}

	.nav.right {
		right: 1rem;
	}

	.dots {
		position: absolute;
		bottom: 1rem;
		left: 50%;
		transform: translateX(-50%);
		display: flex;
		gap: 0.5rem;
		z-index: 10;
	}

	.dot {
		width: 8px;
		height: 8px;
		border-radius: 50%;
		border: none;
		background: rgba(255, 255, 255, 0.5);
		cursor: pointer;
		transition: all 0.3s ease;
	}

	.dot.active {
		background: white;
		width: 24px;
		border-radius: 4px;
	}

	@media (max-width: 768px) {
		.carousel {
			height: 120px;
		}

		.nav {
			font-size: 1.2rem;
			padding: 0.4rem 0.6rem;
		}
	}
</style>

