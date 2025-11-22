<!-- Template CTA Section - Call to action -->
<section class="template-cta">
	<div class="container">
		<div class="cta-content">
			<h2>Ready to Get Started?</h2>
			<p>Join thousands of satisfied customers and start your journey today.</p>
			<div class="cta-actions">
				<button class="btn-primary">Start Free Trial</button>
				<button class="btn-secondary">Contact Sales</button>
			</div>
		</div>
	</div>
</section>

<style>
	.template-cta {
		padding: 5rem 0;
		background: linear-gradient(135deg, #1a1a1a 0%, #2d2d2d 100%);
		color: white;
		text-align: center;
		margin: 0;
		width: 100%;
	}

	.cta-content {
		text-align: center;
	}

	.cta-content h2 {
		font-size: 2.5rem;
		font-weight: 300;
		margin: 0 0 1rem 0;
		color: white;
	}

	.cta-content p {
		font-size: 1.2rem;
		line-height: 1.8;
		color: rgba(255, 255, 255, 0.9);
		margin: 0 0 2.5rem 0;
	}

	.cta-actions {
		display: flex;
		gap: 1.5rem;
		justify-content: center;
		flex-wrap: wrap;
	}

	/* Button styles use global .btn classes */
	.btn-primary {
		background: white;
		color: #1a1a1a;
		border-color: white;
	}

	.btn-primary:hover {
		background: transparent;
		color: white;
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
		box-shadow: 0 4px 12px rgba(255, 255, 255, 0.2);
	}

	@media (max-width: 968px) {
		.template-cta {
			padding: 4rem 0;
		}

		.cta-content h2 {
			font-size: 2rem;
		}

		.cta-content p {
			font-size: 1rem;
		}
	}

	@media (max-width: 768px) {
		.cta-actions {
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

