<section class="projects">
	<h3>Community Projects</h3>
	<div class="grid">
		<article class="card project-1">
			<div class="content">
				<h5>Project 1</h5>
				<p>Description of community project 1...</p>
			</div>
		</article>
		<article class="card project-2">
			<div class="content">
				<h5>Project 2</h5>
				<p>Description of community project 2...</p>
			</div>
		</article>
		<article class="card project-3">
			<div class="content">
				<h5>Project 3</h5>
				<p>Description of community project 3...</p>
			</div>
		</article>
		<article class="card about">
			<h4>About Projects</h4>
			<p>
				Our community projects are initiatives that extend beyond competition. We work with local
				schools, organize workshops, and create educational resources to inspire the next generation
				of engineers and innovators.
			</p>
		</article>
	</div>
	<div class="cta">
		<button>View All Projects</button>
	</div>
</section>

<style>
	.projects {
		padding: 4rem 2rem;
		background: #f8f8f8;
		width: 100%;
	}

	.projects > h3 {
		font-size: 2.5rem;
		font-weight: 300;
		text-align: center;
		margin: 0 0 3rem 0;
		color: #333;
	}

	.grid {
		display: grid;
		grid-template-columns: 1fr 1fr 1fr;
		grid-template-rows: 1fr 1fr 1fr;
		gap: 1.5rem;
		max-width: 95%;
		width: 100%;
		margin: 0 auto 3rem;
		height: 700px;
	}

	.card {
		border-radius: 8px;
		box-shadow: 0 6px 18px rgba(0, 0, 0, 0.06);
		transition:
			transform 0.3s ease,
			box-shadow 0.3s ease;
		position: relative;
		overflow: hidden;
		display: flex;
		flex-direction: column;
	}

	.card:hover {
		transform: translateY(-4px);
		box-shadow: 0 12px 24px rgba(0, 0, 0, 0.12);
	}

	.card.about {
		background: white;
		padding: 2.5rem;
		grid-column: 1 / 3;
		grid-row: 1;
		display: flex;
		flex-direction: column;
		justify-content: flex-start;
	}

	.card.about h4 {
		margin-top: 0;
		margin-bottom: 1.5rem;
	}

	.card.about p {
		margin: 0;
		line-height: 1.8;
	}

	.card.project-1 {
		background-image: url('/project-1.webp');
		background-size: cover;
		background-position: center;
		grid-column: 1 / 3;
		grid-row: 2 / 4;
	}

	.card.project-2 {
		background-image: url('/project-2.webp');
		background-size: cover;
		background-position: center;
		grid-column: 3;
		grid-row: 3;
	}

	.card.project-3 {
		background-image: url('/project-3.webp');
		background-size: cover;
		background-position: center;
		grid-column: 3;
		grid-row: 1 / 3;
	}

	.card .content {
		background: linear-gradient(to bottom, rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.7));
		padding: 2rem;
		color: white;
		height: 100%;
		display: flex;
		flex-direction: column;
		justify-content: flex-end;
	}

	.card h4 {
		font-size: 1.75rem;
		font-weight: 600;
		margin: 0 0 1rem 0;
		color: #333;
	}

	.card h5 {
		font-size: 1.5rem;
		font-weight: 600;
		margin: 0 0 0.75rem 0;
		color: white;
	}

	.card p {
		font-size: 1rem;
		color: #666;
		line-height: 1.6;
		margin: 0;
	}

	.card .content p {
		color: rgba(255, 255, 255, 0.95);
	}

	.cta {
		text-align: center;
	}

	.cta button {
		padding: 0.75rem 2rem;
		border: 2px solid #333;
		background: transparent;
		color: #333;
		font-size: 1rem;
		cursor: pointer;
		transition: all 0.3s ease;
		font-weight: 500;
	}

	.cta button:hover {
		background: #333;
		color: white;
	}

	@media (max-width: 768px) {
		.projects {
			padding: 3rem 1.5rem;
		}

		.projects > h3 {
			font-size: 2rem;
			margin-bottom: 2rem;
		}

		.grid {
			grid-template-columns: 1fr;
			grid-template-rows: auto;
			height: auto;
			max-width: 100%;
			gap: 1rem;
			margin-bottom: 2rem;
		}

		.card {
			min-height: 250px;
		}

		.card.about {
			grid-column: 1;
			grid-row: auto;
			justify-content: flex-start;
		}

		.card.project-1 {
			grid-column: 1;
			grid-row: auto;
		}

		.card.project-2 {
			grid-column: 1;
			grid-row: auto;
		}

		.card.project-3 {
			grid-column: 1;
			grid-row: auto;
		}

		.card h4 {
			font-size: 1.5rem;
		}

		.card h5 {
			font-size: 1.25rem;
		}

		.card p {
			font-size: 0.9rem;
		}

		.cta button {
			font-size: 0.9rem;
			padding: 0.65rem 1.5rem;
		}
	}
</style>
