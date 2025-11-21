<section class="cta-section">
	<div class="content">
		<h3>Get Involved</h3>
		<p>Join us in building the future of STEAM education and innovation.</p>
		<div class="buttons">
			<a href="/contact" class="btn-primary"> Sponsor Us </a>
			<a href="/about" class="btn-secondary"> Learn More </a>
		</div>
	</div>
</section>

<style>
	.cta-section {
		padding: 5rem 0;
		background: linear-gradient(135deg, #1a1a1a 0%, #2d2d2d 100%);
		text-align: center;
		color: white;
		margin: 0;
		width: 100%;
	}

	.content {
		max-width: 800px;
		margin: 0 auto;
		padding: 0 2rem;
	}

	.content h3 {
		font-size: 2.5rem;
		font-weight: 300;
		margin: 0 0 1rem 0;
		color: white;
	}

	.content p {
		font-size: 1.2rem;
		line-height: 1.8;
		color: rgba(255, 255, 255, 0.9);
		margin: 0 0 2.5rem 0;
	}

	.buttons {
		display: flex;
		gap: 1.5rem;
		justify-content: center;
		flex-wrap: wrap;
	}

	.btn-primary,
	.btn-secondary {
		padding: 1rem 2.5rem;
		font-size: 1.1rem;
		font-weight: 500;
		cursor: pointer;
		transition: all 0.3s ease;
		border: 2px solid white;
		border-radius: 4px;
		text-decoration: none;
		display: inline-block;
	}

	.btn-primary {
		background: white;
		color: #1a1a1a;
		border-color: white;
	}

	.btn-primary:hover {
		background: transparent;
		color: white;
		transform: translateY(-2px);
		box-shadow: 0 4px 12px rgba(255, 255, 255, 0.2);
	}

	.btn-secondary {
		background: transparent;
		color: white;
		border-color: white;
	}

	.btn-secondary:hover {
		background: white;
		color: #1a1a1a;
		transform: translateY(-2px);
		box-shadow: 0 4px 12px rgba(255, 255, 255, 0.2);
	}

	@media (max-width: 768px) {
		.cta-section {
			padding: 4rem 0;
		}

		.content {
			padding: 0 1.5rem;
		}

		.content h3 {
			font-size: 2rem;
		}

		.content p {
			font-size: 1rem;
		}

		.buttons {
			flex-direction: column;
			align-items: center;
		}

		.btn-primary,
		.btn-secondary {
			width: 100%;
			max-width: 300px;
		}
	}
</style>
