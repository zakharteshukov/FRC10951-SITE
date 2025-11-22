<script>
	import { onMount } from 'svelte';

	let imageLoaded = false;
	/** @type {HTMLElement | null} */
	let imageElement;

	onMount(() => {
		// Lazy load background image using Intersection Observer
		const observer = new IntersectionObserver(
			(entries) => {
				entries.forEach((entry) => {
					if (entry.isIntersecting && !imageLoaded) {
						const img = new Image();
						img.src = '/vex.webp';
						img.onload = () => {
							imageLoaded = true;
							if (imageElement) {
								imageElement.style.backgroundImage = "url('/vex.webp')";
							}
						};
						observer.disconnect();
					}
				});
			},
			{ rootMargin: '50px' }
		);

		if (imageElement) {
			observer.observe(imageElement);
		}

		return () => observer.disconnect();
	});
</script>

<section class="vex-feature">
	<div class="background-image" bind:this={imageElement}></div>
	<div class="content">
		<div class="header">
			<h4>1599W</h4>
			<p>cycles between all the teams</p>
		</div>
		<div class="logo">VEX V5</div>
		<div class="actions">
			<a href="/vex/1599w" class="action-btn">Learn More</a>
			<a href="/vex" class="action-btn">VEX Overview</a>
		</div>
	</div>
</section>

<style>
	.vex-feature {
		height: 100%;
		min-height: 570px;
		padding: 3rem;
		display: flex;
		align-items: center;
		justify-content: center;
		position: relative;
		overflow: hidden;
		margin: 0;
	}

	.background-image {
		position: absolute;
		inset: 0;
		background-size: cover;
		background-position: center;
		background-repeat: no-repeat;
		filter: brightness(0.85);
		z-index: 0;
		transition: opacity 0.3s ease;
	}

	.vex-feature::after {
		content: '';
		position: absolute;
		inset: 0;
		background: rgba(0, 0, 0, 0.4);
		z-index: 1;
	}


	.content {
		position: relative;
		z-index: 2;
		width: 100%;
		max-width: 500px;
	}

	.header h4 {
		font-size: 3rem;
		font-weight: 700;
		margin: 0 0 0.5rem 0;
		color: white;
	}

	.header p {
		font-size: 1.1rem;
		color: rgba(255, 255, 255, 0.9);
		margin: 0 0 2rem 0;
	}

	.logo {
		font-size: 2rem;
		font-weight: 600;
		color: white;
		margin-bottom: 2rem;
	}

	.actions {
		display: flex;
		gap: 1rem;
		flex-wrap: wrap;
	}

	.action-btn {
		padding: 0.75rem 2rem;
		border: 2px solid white;
		background: transparent;
		color: white;
		font-size: 1rem;
		cursor: pointer;
		transition: all 0.3s ease;
		font-weight: 500;
		text-decoration: none;
		display: inline-block;
	}

	.action-btn:hover {
		background: white;
		color: #333;
	}

	@media (max-width: 768px) {
		.vex-feature {
			min-height: 380px;
			padding: 2rem 1.5rem;
		}

		.header h4 {
			font-size: 2rem;
		}

		.header p {
			font-size: 1rem;
		}

		.logo {
			font-size: 1.5rem;
		}

		.actions {
			flex-direction: column;
		}

		.action-btn {
			width: 100%;
		}
	}
</style>
