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
						img.src = '/full-STEAM-ahead.webp';
						img.onload = () => {
							imageLoaded = true;
							if (imageElement) {
								imageElement.style.backgroundImage = "url('/full-STEAM-ahead.webp')";
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

<section class="events">
	<div class="container">
		<h2 class="section-title">Upcoming Events</h2>
		<div class="events-grid">
			<div class="event-card full-steam">
				<div class="event-background" bind:this={imageElement}></div>
				<div class="event-overlay"></div>
				<div class="event-content">
					<div class="event-date">
						<span class="month">November</span>
						<span class="day">30</span>
					</div>
					<h3>Full STEAM Ahead</h3>
					<p>
						Our commitment to Science, Technology, Engineering, Arts, and Mathematics education drives
						everything we do. We're building a future where innovation and creativity go hand in hand.
					</p>
					<button>Learn More</button>
				</div>
			</div>

			<div class="event-card stemsters">
				<div class="event-background"></div>
				<div class="event-overlay"></div>
				<div class="event-content">
					<div class="event-date">
						<span class="month">December</span>
						<span class="day">8</span>
					</div>
					<h3>STEM-sters United</h3>
					<p>
						Join us for an exciting event bringing together STEM enthusiasts from across the region.
						Connect, learn, and collaborate with fellow innovators.
					</p>
					<button>Learn More</button>
				</div>
			</div>

			<div class="event-card open-doors">
				<div class="event-background"></div>
				<div class="event-overlay"></div>
				<div class="event-content">
					<div class="event-date">
						<span class="month">December</span>
						<span class="day">28</span>
					</div>
					<h3>FRC Open-Doors</h3>
					<p>
						Experience FIRST Robotics Competition up close. Tour our facilities, meet the team, and
						discover the world of competitive robotics.
					</p>
					<button>Learn More</button>
				</div>
			</div>
		</div>
		<div class="view-all">
			<button class="view-all-button">View All Events</button>
		</div>
	</div>
</section>

<style>
	.events {
		padding: 5rem 2rem;
		background: white;
		width: 100%;
	}

	.container {
		max-width: 1200px;
		margin: 0 auto;
	}

	.section-title {
		font-size: 2.5rem;
		font-weight: 300;
		text-align: center;
		margin: 0 0 3rem 0;
		color: #333;
	}

	.events-grid {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
		gap: 2rem;
	}

	.event-card {
		position: relative;
		min-height: 500px;
		border-radius: 8px;
		overflow: hidden;
		border: 2px solid black;
		display: flex;
		align-items: flex-end;
	}

	.event-background {
		position: absolute;
		inset: 0;
		background-size: cover;
		background-position: center;
		background-repeat: no-repeat;
		filter: brightness(0.85);
		z-index: 0;
		transition: transform 0.3s ease;
	}

	.event-card.full-steam .event-background {
		/* Background image loaded via Intersection Observer */
		transition: opacity 0.3s ease;
	}

	.event-card.stemsters .event-background {
		background: linear-gradient(135deg, #1a1a1a 0%, #2d2d2d 100%);
	}

	.event-card.open-doors .event-background {
		background: linear-gradient(135deg, #1a1a1a 0%, #2d2d2d 100%);
	}

	.event-overlay {
		position: absolute;
		inset: 0;
		background: rgba(0, 0, 0, 0.5);
		z-index: 1;
	}

	.event-content {
		position: relative;
		z-index: 2;
		padding: 2.5rem;
		width: 100%;
		color: white;
		display: grid;
		grid-template-rows: auto auto 1fr auto;
		gap: 1rem;
		height: 100%;
		min-height: 100%;
		align-content: flex-end;
	}

	.event-date {
		display: flex;
		flex-direction: column;
		margin-bottom: 0;
		line-height: 1;
		min-height: 4.5rem;
	}

	.event-date .month {
		font-size: 0.9rem;
		text-transform: uppercase;
		letter-spacing: 0.1em;
		opacity: 0.9;
		margin-bottom: 0.5rem;
	}

	.event-date .day {
		font-size: 3rem;
		font-weight: 700;
		line-height: 1;
	}

	.event-content h3 {
		font-size: 2rem;
		font-weight: 300;
		margin: 0;
		color: white;
	}

	.event-content p {
		font-size: 1.1rem;
		line-height: 1.8;
		color: rgba(255, 255, 255, 0.9);
		margin: 0;
	}

	.event-content button {
		padding: 0.75rem 2rem;
		border: 2px solid white;
		background: transparent;
		color: white;
		font-size: 1rem;
		cursor: pointer;
		transition: all 0.3s ease;
		font-weight: 500;
		border-radius: 4px;
		margin-top: 0;
		align-self: flex-start;
	}

	.event-content button:hover {
		background: white;
		color: #333;
	}

	.event-card:hover .event-background {
		transform: scale(1.02);
	}

	.view-all {
		text-align: center;
		margin-top: 3rem;
	}

	.view-all-button {
		padding: 0.75rem 2rem;
		border: 2px solid #333;
		background: transparent;
		color: #333;
		font-size: 1rem;
		cursor: pointer;
		transition: all 0.3s ease;
		font-weight: 500;
		border-radius: 4px;
	}

	.view-all-button:hover {
		background: #333;
		color: white;
		transform: translateY(-2px);
		box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
	}

	@media (max-width: 968px) {
		.events {
			padding: 4rem 1.5rem;
		}

		.section-title {
			font-size: 2rem;
			margin-bottom: 2rem;
		}

		.events-grid {
			grid-template-columns: 1fr;
			gap: 1.5rem;
		}

		.event-card {
			min-height: 450px;
		}
	}

	@media (max-width: 768px) {
		.event-content {
			padding: 2rem;
		}

		.event-content h3 {
			font-size: 1.75rem;
		}

		.event-content p {
			font-size: 1rem;
		}

		.event-date .day {
			font-size: 2.5rem;
		}

		.view-all {
			margin-top: 2rem;
		}
	}
</style>

