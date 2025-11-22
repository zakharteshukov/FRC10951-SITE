<section class="section border-y bg-white">
	<div class="container">
		<div class="first-age-grid">
			<div class="meta">
				<div class="year">2025–26</div>
				<h3>FIRST Age</h3>
				<div class="cta">
					<button class="btn btn-outline">Read More</button>
					<button class="btn btn-outline">Past Seasons</button>
				</div>
			</div>
			<div class="decorative">
				<img
					src="/FIRST-AGE.webp"
					alt="FIRST Age"
					class="age-image"
				/>
			</div>
		</div>
	</div>
</section>

<style>
	.first-age-grid {
		display: grid;
		grid-template-columns: 1fr auto;
		gap: 3rem;
		align-items: center;
	}

	.year {
		font-size: 1.5rem;
		font-weight: 600;
		color: var(--color-text-muted);
		margin-bottom: 0.5rem;
	}

	.meta h3 {
		font-size: 3rem;
		font-weight: 300;
		margin: 0 0 2rem 0;
		color: var(--color-text-dark);
	}

	.cta {
		display: flex;
		gap: 1rem;
		flex-wrap: wrap;
	}

	.decorative {
		display: flex;
		align-items: center;
		justify-content: center;
		width: 100%;
		max-width: 500px;
	}

	.age-image {
		width: 100%;
		height: auto;
		object-fit: contain;
		object-position: center;
		display: block;
		filter: brightness(1) contrast(1);
		transition: transform 0.3s ease, opacity 0.3s ease;
	}

	.age-image:hover {
		transform: scale(1.02);
		opacity: 0.95;
	}

	@media (max-width: 768px) {
		.first-age-grid {
			grid-template-columns: 1fr;
			text-align: center;
			gap: 2rem;
		}

		.decorative {
			max-width: 100%;
			order: -1;
		}

		.age-image {
			max-width: 300px;
			margin: 0 auto;
		}

		.meta h3 {
			font-size: 2rem;
		}

		.year {
			font-size: 1.25rem;
		}

		.cta {
			justify-content: center;
		}
	}
</style>
