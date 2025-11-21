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
		grid-template-columns: 2fr 1fr 1fr;
		grid-template-rows: 400px 400px;
		gap: 0;
		max-width: 1400px;
		margin: 0 auto 3rem;
		background: white;
		border: 1px solid #e5e5e5;
		overflow: hidden;
	}

	.card {
		position: relative;
		padding: 2.5rem;
		box-shadow: none;
		transition: transform 0.3s ease;
		border-right: 1px solid rgba(255, 255, 255, 0.2);
		border-bottom: 1px solid rgba(255, 255, 255, 0.2);
		display: flex;
		flex-direction: column;
		overflow: hidden;
	}

	.card::before {
		content: '';
		position: absolute;
		inset: 0;
		background-image: url('/team.jpg');
		background-size: cover;
		background-position: center;
		background-repeat: no-repeat;
		filter: brightness(0.85);
		z-index: 0;
	}

	.card::after {
		content: '';
		position: absolute;
		inset: 0;
		background: rgba(0, 0, 0, 0.5);
		z-index: 1;
	}

	.card:hover {
		transform: scale(1.02);
	}

	.card:last-child {
		border-right: none;
	}

	.card:nth-child(3n) {
		border-right: none;
	}

	.grid > .card:nth-child(-n + 3) {
		border-top: none;
	}

	.grid > .card:nth-child(n + 4) {
		border-bottom: none;
	}

	.card.big {
		grid-row: span 2;
		border-right: 1px solid rgba(255, 255, 255, 0.2);
	}

	.card h4,
	.card h5 {
		position: relative;
		z-index: 2;
		color: white;
		margin: 0 0 1.5rem 0;
		line-height: 1.3;
	}

	.card h4 {
		font-size: 1.75rem;
		font-weight: 600;
	}

	.card h5 {
		font-size: 1.5rem;
		font-weight: 600;
		margin-bottom: 1rem;
	}

	.card p {
		position: relative;
		z-index: 2;
		font-size: 1rem;
		color: rgba(255, 255, 255, 0.9);
		line-height: 1.7;
		margin: 0;
		flex-grow: 1;
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

	@media (max-width: 968px) {
		.grid {
			grid-template-columns: 1fr 1fr;
			grid-template-rows: 350px 350px 350px;
		}

		.card.big {
			grid-row: span 1;
		}

		.card:nth-child(2n) {
			border-right: none;
		}

		.card:nth-child(n + 3) {
			border-bottom: 1px solid rgba(255, 255, 255, 0.2);
		}

		.card:last-child {
			border-bottom: none;
		}
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
			grid-template-rows: repeat(4, 300px);
			border: none;
		}

		.card {
			border-right: none;
			border-left: none;
			border-top: 1px solid rgba(255, 255, 255, 0.2);
			padding: 2rem 1.5rem;
		}

		.card:first-child {
			border-top: none;
		}

		.card:last-child {
			border-bottom: 1px solid rgba(255, 255, 255, 0.2);
		}

		.card h4 {
			font-size: 1.5rem;
		}

		.card h5 {
			font-size: 1.25rem;
		}

		.card p {
			font-size: 0.95rem;
		}
	}

	@media (max-width: 480px) {
		.projects {
			padding: 2rem 1rem;
		}

		.projects > h3 {
			font-size: 1.75rem;
		}

		.grid {
			grid-template-rows: repeat(4, 250px);
		}

		.card {
			padding: 1.5rem 1rem;
		}
	}
</style>
