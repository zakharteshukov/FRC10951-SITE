<section class="robokids">
	<h5>Robokids</h5>
	<p>Inspiring the next generation of robotics enthusiasts through hands-on learning.</p>
	<button>Learn More</button>
</section>

<style>
	.robokids {
		padding: 2rem;
		height: 100%;
		min-height: 400px;
		box-shadow: 0 6px 18px rgba(0, 0, 0, 0.06);
		display: flex;
		flex-direction: column;
		transition: transform 0.3s ease, box-shadow 0.3s ease;
		position: relative;
		border: 2px solid rgba(255, 255, 255, 0.3);
		overflow: hidden;
	}

	.robokids::before {
		content: '';
		position: absolute;
		inset: 0;
		background-image: url('/robokids.jpg');
		background-size: cover;
		background-position: center;
		background-repeat: no-repeat;
		filter: brightness(0.85);
		z-index: 0;
	}

	.robokids::after {
		content: '';
		position: absolute;
		inset: 0;
		background: rgba(0, 0, 0, 0.5);
		z-index: 1;
	}

	.robokids:hover {
		transform: translateY(-4px);
		box-shadow: 0 12px 24px rgba(0, 0, 0, 0.12);
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

	.robokids button {
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
	}

	.robokids button:hover {
		background: white;
		color: #333;
	}
</style>
