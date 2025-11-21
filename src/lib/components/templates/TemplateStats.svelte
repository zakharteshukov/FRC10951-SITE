<!-- Template Stats Section - Numbers and metrics -->
<section class="template-stats">
	<div class="container">
		<div class="stats-grid">
			<div class="stat-item">
				<div class="stat-number">1,234</div>
				<div class="stat-label">Total Users</div>
			</div>
			<div class="stat-item">
				<div class="stat-number">567</div>
				<div class="stat-label">Projects Completed</div>
			</div>
			<div class="stat-item">
				<div class="stat-number">89%</div>
				<div class="stat-label">Satisfaction Rate</div>
			</div>
			<div class="stat-item">
				<div class="stat-number">24/7</div>
				<div class="stat-label">Support Available</div>
			</div>
		</div>
	</div>
</section>

<style>
	.template-stats {
		padding: 4rem 2rem;
		background: linear-gradient(135deg, #1a1a1a 0%, #2d2d2d 100%);
		color: white;
	}

	.container {
		max-width: 1200px;
		margin: 0 auto;
	}

	.stats-grid {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
		gap: 3rem;
		text-align: center;
	}

	.stat-item {
		padding: 1rem;
	}

	.stat-number {
		font-size: 4rem;
		font-weight: 700;
		margin: 0 0 0.5rem 0;
		line-height: 1;
		color: white;
	}

	.stat-label {
		font-size: 1rem;
		color: rgba(255, 255, 255, 0.9);
		text-transform: uppercase;
		letter-spacing: 0.1em;
	}

	@media (max-width: 968px) {
		.template-stats {
			padding: 3rem 1.5rem;
		}
	}

	@media (max-width: 768px) {
		.stats-grid {
			grid-template-columns: repeat(2, 1fr);
			gap: 2rem;
		}

		.stat-number {
			font-size: 3rem;
		}
	}
</style>

