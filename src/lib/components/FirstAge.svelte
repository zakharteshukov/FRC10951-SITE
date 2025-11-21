<section class="first-age">
	<div class="content">
		<div class="meta">
			<div class="year">2025–26</div>
			<h3>FIRST Age</h3>
			<p class="description">
				Join us in our journey through the FIRST Robotics Competition season. Experience the
				innovation, teamwork, and excellence that defines Team 10951.
			</p>
			<div class="cta">
				<button>Read More</button>
				<button class="secondary">Past Seasons</button>
			</div>
		</div>
		<div class="decorative">
			<span class="age-text">AGE</span>
		</div>
	</div>
</section>

<style>
	.first-age {
		padding: 6rem 2rem;
		border-top: 1px solid #e5e5e5;
		border-bottom: 1px solid #e5e5e5;
		background: linear-gradient(135deg, #f8f9fa 0%, #ffffff 100%);
		position: relative;
		overflow: hidden;
	}

	.first-age::before {
		content: '';
		position: absolute;
		top: 0;
		right: 0;
		width: 40%;
		height: 100%;
		background: linear-gradient(135deg, rgba(0, 0, 0, 0.02) 0%, transparent 100%);
		pointer-events: none;
	}

	.content {
		max-width: 1200px;
		margin: 0 auto;
		display: grid;
		grid-template-columns: 1fr auto;
		gap: 4rem;
		align-items: center;
		position: relative;
		z-index: 1;
	}

	.year {
		font-size: 1.25rem;
		font-weight: 600;
		color: #666;
		margin-bottom: 0.75rem;
		text-transform: uppercase;
		letter-spacing: 0.15em;
	}

	.meta h3 {
		font-size: 3.5rem;
		font-weight: 300;
		margin: 0 0 1.5rem 0;
		color: #333;
		line-height: 1.2;
		letter-spacing: -0.02em;
	}

	.description {
		font-size: 1.1rem;
		line-height: 1.7;
		color: #666;
		margin: 0 0 2.5rem 0;
		max-width: 500px;
	}

	.cta {
		display: flex;
		gap: 1rem;
		flex-wrap: wrap;
	}

	.cta button {
		padding: 0.875rem 2.5rem;
		border: 2px solid #333;
		background: #333;
		color: white;
		font-size: 1rem;
		cursor: pointer;
		transition: all 0.3s ease;
		font-weight: 500;
		border-radius: 4px;
		box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
	}

	.cta button:hover {
		background: #000;
		border-color: #000;
		transform: translateY(-2px);
		box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
	}

	.cta button.secondary {
		background: transparent;
		color: #333;
		border-color: #333;
		box-shadow: none;
	}

	.cta button.secondary:hover {
		background: #333;
		color: white;
		transform: translateY(-2px);
		box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
	}

	.decorative {
		display: flex;
		align-items: center;
		justify-content: center;
		opacity: 0.4;
	}

	.age-text {
		font-size: 10rem;
		font-weight: 100;
		color: #e8e8e8;
		letter-spacing: 0.15em;
		line-height: 1;
		user-select: none;
		transition: opacity 0.3s ease;
	}

	.first-age:hover .age-text {
		opacity: 0.5;
	}

	@media (max-width: 968px) {
		.first-age {
			padding: 4rem 2rem;
		}

		.content {
			grid-template-columns: 1fr;
			gap: 2rem;
			text-align: center;
		}

		.meta h3 {
			font-size: 2.5rem;
		}

		.description {
			max-width: 100%;
		}

		.decorative {
			display: none;
		}

		.cta {
			justify-content: center;
		}
	}

	@media (max-width: 768px) {
		.first-age {
			padding: 3rem 1.5rem;
		}

		.meta h3 {
			font-size: 2rem;
		}

		.cta {
			flex-direction: column;
		}

		.cta button {
			width: 100%;
		}
	}
</style>
