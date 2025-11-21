<section class="robokids">
	<h5>Robokids</h5>
	<p>Inspiring the next generation of robotics enthusiasts through hands-on learning.</p>
	<a href="/projects/robokids" class="learn-more-btn">Learn More</a>
</section>

<style>
	.robokids {
		padding: 2rem;
		height: 100%;
		min-height: 400px;
		box-shadow: 0 6px 18px rgba(0, 0, 0, 0.06);
		display: flex;
		flex-direction: column;
		position: relative;
		border: 2px solid black;
		overflow: hidden;
		margin: 0;
	}

	.robokids::before {
		content: '';
		position: absolute;
		inset: 0;
		background-image: url('/robokids.webp');
		background-size: cover;
		background-position: center;
		background-repeat: no-repeat;
		filter: brightness(0.85);
		z-index: 0;
		transition: transform 0.3s ease;
	}

	.robokids::after {
		content: '';
		position: absolute;
		inset: 0;
		background: rgba(0, 0, 0, 0.5);
		z-index: 1;
	}

	.robokids:hover::before {
		transform: scale(1.02);
	}

	.robokids h5 {
		position: relative;
		z-index: 2;
		font-size: 1.5rem;
		font-weight: 600;
		margin: 0 0 1rem 0;
		color: white;
	}

	.robokids p {
		position: relative;
		z-index: 2;
		font-size: 1rem;
		color: rgba(255, 255, 255, 0.9);
		line-height: 1.6;
		margin: 0 0 1.5rem 0;
		flex-grow: 1;
	}

	.learn-more-btn {
		position: relative;
		z-index: 2;
		padding: 0.75rem 1.5rem;
		border: 2px solid white;
		background: transparent;
		color: white;
		font-size: 0.95rem;
		cursor: pointer;
		transition: all 0.3s ease;
		font-weight: 500;
		align-self: flex-start;
		text-decoration: none;
		display: inline-block;
	}

	.learn-more-btn:hover {
		background: white;
		color: #333;
	}

	@media (max-width: 768px) {
		.robokids {
			min-height: 300px;
			padding: 1.5rem;
		}

		.robokids h5 {
			font-size: 1.25rem;
		}

		.robokids p {
			font-size: 0.9rem;
		}

		.learn-more-btn {
			font-size: 0.85rem;
			padding: 0.65rem 1.25rem;
		}
	}
</style>
