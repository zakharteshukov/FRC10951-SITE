<script>
	// Sponsor logos from static folder
	const slides = [
		{ src: '/coca-cola-logo.png', alt: 'Coca-Cola' },
		{ src: '/frc-logo.png', alt: 'FIRST Robotics Competition' },
		{ src: '/ssis-logo.png', alt: 'Saigon South International School' },
		{ src: '/WIPLib-logo.webp', alt: 'WIPLib' },
		{ src: '/lockheed-martin-logo.png', alt: 'Lockheed Martin' },
		{ src: '/palantir-logo.png', alt: 'Palantir' },
		{ src: '/boeing-logo.png', alt: 'Boeing' }
	];

	// Duplicate slides for seamless loop
	const duplicatedSlides = [...slides, ...slides];
</script>

<section class="sponsors">
	<div class="carousel-wrapper">
		<div class="carousel-track">
			{#each duplicatedSlides as slide}
				<div class="logo-item">
					<img src={slide.src} alt={slide.alt} />
				</div>
			{/each}
			<!-- Duplicate for seamless loop -->
			{#each duplicatedSlides as slide}
				<div class="logo-item">
					<img src={slide.src} alt={slide.alt} />
				</div>
			{/each}
		</div>
	</div>
</section>

<style>
	.sponsors {
		padding: 3rem 2rem;
		background: #f8f8f8;
		overflow: hidden;
	}

	.carousel-wrapper {
		width: 100%;
		max-width: 1200px;
		margin: 0 auto;
		overflow: hidden;
		position: relative;
	}

	.carousel-track {
		display: flex;
		align-items: center;
		gap: 4rem;
		animation: scroll 40s linear infinite;
		will-change: transform;
	}

	.carousel-wrapper:hover .carousel-track {
		animation-play-state: paused;
	}

	.logo-item {
		flex-shrink: 0;
		display: flex;
		align-items: center;
		justify-content: center;
		height: 120px;
		width: 200px;
	}

	.logo-item img {
		max-width: 100%;
		max-height: 100%;
		object-fit: contain;
		filter: grayscale(0.3);
		transition: filter 0.3s ease;
	}

	.logo-item:hover img {
		filter: grayscale(0);
	}

	@keyframes scroll {
		0% {
			transform: translateX(0);
		}
		100% {
			transform: translateX(-50%);
		}
	}

	@media (max-width: 768px) {
		.sponsors {
			padding: 2rem 1rem;
		}

		.logo-item {
			height: 80px;
			width: 150px;
		}

		.carousel-track {
			gap: 2rem;
		}
	}

	@media (max-width: 480px) {
		.sponsors {
			padding: 1.5rem 0.5rem;
		}

		.logo-item {
			height: 60px;
			width: 120px;
		}

		.carousel-track {
			gap: 1.5rem;
		}
	}
</style>
