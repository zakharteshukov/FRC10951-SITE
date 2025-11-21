<section class="cta-section">
	<div class="content">
		<h2>Ready to Get Involved?</h2>
		<p>Join us in our mission to inspire the next generation of innovators and engineers.</p>
		<div class="buttons">
			<button class="primary">Learn More</button>
			<button class="secondary">Sponsor Us</button>
			<button class="tertiary">Contact</button>
		</div>
	</div>
</section>

<style>
	.cta-section {
		padding: 5rem 2rem;
		background: linear-gradient(135deg, #1a1a1a 0%, #2d2d2d 100%);
		color: white;
		text-align: center;
		position: relative;
		overflow: hidden;
	}

	.cta-section::before {
		content: '';
		position: absolute;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		background: radial-gradient(circle at 50% 50%, rgba(255, 255, 255, 0.05) 0%, transparent 70%);
		pointer-events: none;
	}

	.content {
		max-width: 800px;
		margin: 0 auto;
		position: relative;
		z-index: 1;
	}

	.cta-section h2 {
		font-size: 3rem;
		font-weight: 300;
		margin: 0 0 1rem 0;
		color: white;
		letter-spacing: -0.02em;
	}

	.cta-section p {
		font-size: 1.2rem;
		color: rgba(255, 255, 255, 0.8);
		margin: 0 0 3rem 0;
		line-height: 1.6;
	}

	.buttons {
		display: flex;
		gap: 1.5rem;
		justify-content: center;
		flex-wrap: wrap;
	}

	.buttons button {
		padding: 1rem 2.5rem;
		font-size: 1rem;
		font-weight: 500;
		cursor: pointer;
		transition: all 0.3s ease;
		border-radius: 4px;
		border: 2px solid transparent;
		min-width: 150px;
	}

	.buttons button.primary {
		background: white;
		color: #1a1a1a;
		border-color: white;
	}

	.buttons button.primary:hover {
		background: #f0f0f0;
		transform: translateY(-2px);
		box-shadow: 0 4px 12px rgba(255, 255, 255, 0.2);
	}

	.buttons button.secondary {
		background: transparent;
		color: white;
		border-color: white;
	}

	.buttons button.secondary:hover {
		background: white;
		color: #1a1a1a;
		transform: translateY(-2px);
		box-shadow: 0 4px 12px rgba(255, 255, 255, 0.2);
	}

	.buttons button.tertiary {
		background: transparent;
		color: white;
		border-color: rgba(255, 255, 255, 0.5);
	}

	.buttons button.tertiary:hover {
		background: rgba(255, 255, 255, 0.1);
		border-color: white;
		transform: translateY(-2px);
	}

	@media (max-width: 768px) {
		.cta-section {
			padding: 4rem 1.5rem;
		}

		.cta-section h2 {
			font-size: 2rem;
		}

		.cta-section p {
			font-size: 1rem;
		}

		.buttons {
			flex-direction: column;
			align-items: stretch;
		}

		.buttons button {
			width: 100%;
		}
	}

	@media (max-width: 480px) {
		.cta-section {
			padding: 3rem 1rem;
		}

		.cta-section h2 {
			font-size: 1.75rem;
		}

		.cta-section p {
			font-size: 0.95rem;
		}
	}
</style>

