<!-- Template Feature Grid - 3 column grid with icons -->
<section class="template-features">
	<div class="container">
		<div class="section-header">
			<h2>Features</h2>
			<p>Showcase your key features or benefits in a clean grid layout</p>
		</div>
		<div class="features-grid">
			<div class="feature-card">
				<div class="feature-icon">🎯</div>
				<h3>Feature One</h3>
				<p>Description of the first feature and its benefits to users.</p>
			</div>
			<div class="feature-card">
				<div class="feature-icon">⚡</div>
				<h3>Feature Two</h3>
				<p>Description of the second feature and its benefits to users.</p>
			</div>
			<div class="feature-card">
				<div class="feature-icon">🚀</div>
				<h3>Feature Three</h3>
				<p>Description of the third feature and its benefits to users.</p>
			</div>
		</div>
	</div>
</section>

<style>
	.template-features {
		padding: 4rem 2rem;
		background: #f8f8f8;
	}

	/* Section header uses global .section-header class */

	.features-grid {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
		gap: 1.5rem;
	}

	.feature-card {
		background: white;
		padding: 2.5rem;
		border-radius: 8px;
		box-shadow: 0 6px 18px rgba(0, 0, 0, 0.06);
		transition: transform 0.3s ease, box-shadow 0.3s ease;
		text-align: center;
	}

	.feature-card:hover {
		transform: translateY(-4px);
		box-shadow: 0 12px 24px rgba(0, 0, 0, 0.12);
	}

	.feature-icon {
		font-size: 3rem;
		margin-bottom: 1.5rem;
	}

	.feature-card h3 {
		font-size: 1.5rem;
		font-weight: 300;
		margin: 0 0 1rem 0;
		color: #333;
	}

	.feature-card p {
		font-size: 1.1rem;
		line-height: 1.8;
		color: #555;
		margin: 0;
	}

	@media (max-width: 968px) {
		.template-features {
			padding: 3rem 1.5rem;
		}

		.section-header h2 {
			font-size: 2rem;
		}

		.section-header p {
			font-size: 1rem;
		}
	}

	@media (max-width: 768px) {
		.features-grid {
			grid-template-columns: 1fr;
		}
	}
</style>

