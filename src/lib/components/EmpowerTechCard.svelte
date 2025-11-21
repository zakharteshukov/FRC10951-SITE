<section class="empower">
	<h5>Empower Tech</h5>
	<p>Empowering communities through technology education and innovation.</p>
	<button>Learn More</button>
</section>
<style>
	.empower {
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

	.empower::before {
		content: '';
		position: absolute;
		inset: 0;
		background-image: url('/empowertech.jpg');
		background-size: cover;
		background-position: center;
		background-repeat: no-repeat;
		filter: brightness(0.85);
		z-index: 0;
	}

	.empower::after {
		content: '';
		position: absolute;
		inset: 0;
		background: rgba(0, 0, 0, 0.5);
		z-index: 1;
	}

	.empower:hover {
		transform: translateY(-4px);
		box-shadow: 0 12px 24px rgba(0, 0, 0, 0.12);
	}

	.empower h5 {
		position: relative;
		z-index: 2;
		font-size: 1.5rem;
		font-weight: 600;
		margin: 0 0 1rem 0;
		color: white;
	}

	.empower p {
		position: relative;
		z-index: 2;
		font-size: 1rem;
		color: rgba(255, 255, 255, 0.9);
		line-height: 1.6;
		margin: 0 0 1.5rem 0;
		flex-grow: 1;
	}

	.empower button {
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

	.empower button:hover {
		background: white;
		color: #333;
	}
</style>

