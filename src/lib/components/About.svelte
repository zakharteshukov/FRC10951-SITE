<section class="section bg-white">
	<div class="container">
		<div class="about-grid">
			<div class="text">
				<h3 class="title">About the Team</h3>
				<p class="text-lead mb-4">
					Team 10951, the Saigon South Dragons, is a competitive robotics team representing Saigon South
					International School. We compete in FIRST Robotics Competition, bringing together students
					passionate about STEM, engineering, and innovation.
				</p>
				<div class="stats-grid">
					<div class="stat">
						<span class="number">67</span>
						<small>Engineers</small>
					</div>
					<div class="stat">
						<span class="number">5</span>
						<small>Coaches</small>
					</div>
					<div class="stat stat-last">
						<span class="number">3</span>
						<small>Sponsors</small>
					</div>
				</div>
			</div>
			<div class="photo">
				<img
					src="/team.webp"
					alt="Team 10951"
					loading="lazy"
					decoding="async"
					width="420"
					height="280"
					class="img-responsive img-rounded img-shadow-lg"
				/>
			</div>
		</div>
	</div>
</section>

<style>
	.about-grid {
		display: grid;
		grid-template-columns: 1fr 420px;
		gap: 3rem;
		align-items: stretch;
	}

	.title {
		font-size: 2.5rem;
		font-weight: 300;
		margin: 0 0 1.5rem 0;
		font-family: 'Georgia', serif;
		font-style: italic;
		color: var(--color-text-dark);
	}

	.text p {
		font-size: 1.1rem;
		line-height: 1.8;
		color: #555;
		margin: 0 0 2rem 0;
	}

	.stats-grid {
		display: grid;
		grid-template-columns: repeat(3, 1fr);
		gap: 2rem;
		margin-top: 2rem;
	}

	.stat {
		display: flex;
		flex-direction: column;
		align-items: center;
		text-align: center;
	}

	.stat .number {
		font-size: 4rem;
		font-weight: 700;
		display: block;
		color: var(--color-text-dark);
		line-height: 1;
	}

	.stat small {
		font-size: 1rem;
		color: var(--color-text-muted);
		text-transform: uppercase;
		letter-spacing: 0.1em;
		margin-top: 0.5rem;
	}

	.photo {
		width: 100%;
		height: 100%;
		display: flex;
		align-items: center;
	}

	.photo img {
		width: 100%;
		height: 100%;
		object-fit: cover;
		object-position: center;
	}

	@media (max-width: 968px) {
		.about-grid {
			grid-template-columns: 1fr;
			gap: 2rem;
		}

		.photo {
			order: -1;
		}

		.title {
			font-size: 2rem;
		}

		.text p {
			font-size: 1rem;
		}

		.stats-grid {
			grid-template-columns: repeat(2, 1fr);
			gap: 1.5rem;
		}

		.stat-last {
			grid-column: 1 / -1;
		}

		.stat .number {
			font-size: 3rem;
		}
	}

	@media (max-width: 600px) {
		.stats-grid {
			grid-template-columns: 1fr;
			gap: 1.5rem;
		}

		.stat-last {
			grid-column: 1;
		}
	}
</style>
