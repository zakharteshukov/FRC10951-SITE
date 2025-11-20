<section class="projects">
	<h3>Community Projects</h3>
	<div class="grid">
		<article class="card big">
			<h4>About Projects</h4>
			<p>
				Our community projects are initiatives that extend beyond competition. We work with local
				schools, organize workshops, and create educational resources to inspire the next
				generation of engineers and innovators.
			</p>
		</article>
		<article class="card">
			<h5>Project 1</h5>
			<p>Description of community project 1...</p>
		</article>
		<article class="card">
			<h5>Project 2</h5>
			<p>Description of community project 2...</p>
		</article>
		<article class="card">
			<h5>Project 3</h5>
			<p>Description of community project 3...</p>
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
		grid-template-columns: 2fr 1fr;
		grid-auto-rows: 180px;
		gap: 1.5rem;
		max-width: 1200px;
		margin: 0 auto 3rem;
	}

	.card {
		background: white;
		padding: 2rem;
		border-radius: 8px;
		box-shadow: 0 6px 18px rgba(0, 0, 0, 0.06);
		transition: transform 0.3s ease, box-shadow 0.3s ease;
	}

	.card:hover {
		transform: translateY(-4px);
		box-shadow: 0 12px 24px rgba(0, 0, 0, 0.12);
	}

	.card.big {
		grid-row: span 2;
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
		color: #333;
	}

	.card p {
		font-size: 1rem;
		color: #666;
		line-height: 1.6;
		margin: 0;
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
		.grid {
			grid-template-columns: 1fr;
			grid-auto-rows: auto;
		}

		.card.big {
			grid-row: span 1;
		}
	}
</style>

