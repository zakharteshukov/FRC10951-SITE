<section class="about">
	<div class="text">
		<h3 class="title">About the Team</h3>
		<p>
			Team 10951, the Saigon South Dragons, is a competitive robotics team representing Saigon South
			International School. We compete in FIRST Robotics Competition, bringing together students
			passionate about STEM, engineering, and innovation.
		</p>
		<div class="stats">
			<div class="stat">
				<span class="number">68</span>
				<small>Students</small>
			</div>
			<div class="stat">
				<span class="number">5</span>
				<small>Coaches</small>
			</div>
			<div class="stat">
				<span class="number">3</span>
				<small>Administrators</small>
			</div>
		</div>
	</div>
	<div class="photo">
		<img src="/team.jpg" alt="Team 10951" loading="lazy" />
	</div>
</section>

<style>
	.about {
		display: grid;
		grid-template-columns: 1fr 420px;
		gap: 3rem;
		padding: 4rem 2rem;
		max-width: 1200px;
		margin: 0 auto;
		background: white;
	}

	.title {
		font-size: 2.5rem;
		font-weight: 300;
		margin: 0 0 1.5rem 0;
		font-family: 'Georgia', serif;
		font-style: italic;
		color: #333;
	}

	.text p {
		font-size: 1.1rem;
		line-height: 1.8;
		color: #555;
		margin: 0 0 2rem 0;
	}

	.stats {
		margin-top: 2rem;
		display: flex;
		gap: 3rem;
		flex-wrap: wrap;
	}

	.stat {
		flex: 1;
		min-width: 120px;
	}

	.stat .number {
		font-size: 4rem;
		font-weight: 700;
		display: block;
		color: #333;
		line-height: 1;
	}

	.stat small {
		font-size: 1rem;
		color: #666;
		text-transform: uppercase;
		letter-spacing: 0.1em;
	}

	.photo {
		width: 100%;
	}

	.photo img {
		width: 100%;
		height: auto;
		border-radius: 8px;
		box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
	}

	@media (max-width: 968px) {
		.about {
			grid-template-columns: 1fr;
			gap: 2rem;
			padding: 3rem 1.5rem;
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

		.stats {
			gap: 2rem;
		}

		.stat .number {
			font-size: 3rem;
		}
	}

	@media (max-width: 480px) {
		.about {
			padding: 2rem 1rem;
		}

		.title {
			font-size: 1.75rem;
		}

		.stats {
			flex-direction: column;
			gap: 1.5rem;
			align-items: center;
			text-align: center;
		}

		.stat {
			min-width: auto;
		}

		.stat .number {
			font-size: 2.5rem;
		}
	}
</style>

