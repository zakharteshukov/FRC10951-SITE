<section class="first-age">
	<div class="content">
		<div class="meta">
			<div class="year">2025–26</div>
			<h3>FIRST Age</h3>
			<div class="cta">
				<button>Read More</button>
				<button>Past Seasons</button>
			</div>
		</div>
		<div class="decorative">
			<span class="age-text">AGE</span>
		</div>
	</div>
</section>
<style>
	.first-age {
		padding: 4rem 2rem;
		border-top: 1px solid #e5e5e5;
		border-bottom: 1px solid #e5e5e5;
		background: white;
	}

	.content {
		max-width: 1200px;
		margin: 0 auto;
		display: grid;
		grid-template-columns: 1fr auto;
		gap: 3rem;
		align-items: center;
	}

	.year {
		font-size: 1.5rem;
		font-weight: 600;
		color: #666;
		margin-bottom: 0.5rem;
	}

	.meta h3 {
		font-size: 3rem;
		font-weight: 300;
		margin: 0 0 2rem 0;
		color: #333;
	}

	.cta {
		display: flex;
		gap: 1rem;
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

	.decorative {
		display: flex;
		align-items: center;
		justify-content: center;
	}

	.age-text {
		font-size: 8rem;
		font-weight: 100;
		color: #f0f0f0;
		letter-spacing: 0.1em;
		line-height: 1;
	}

	@media (max-width: 768px) {
		.first-age {
			padding: 3rem 1.5rem;
		}

		.content {
			grid-template-columns: 1fr;
			text-align: center;
			gap: 2rem;
		}

		.decorative {
			display: none;
		}

		.meta h3 {
			font-size: 2rem;
		}

		.year {
			font-size: 1.25rem;
		}

		.cta {
			justify-content: center;
			flex-wrap: wrap;
		}

		.cta button {
			font-size: 0.9rem;
			padding: 0.65rem 1.5rem;
		}
	}
</style>


