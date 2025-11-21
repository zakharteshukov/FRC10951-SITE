<section class="full-steam">
	<div class="content">
		<h3>Full STEAM Ahead</h3>
		<p>
			Our commitment to Science, Technology, Engineering, Arts, and Mathematics education drives
			everything we do. We're building a future where innovation and creativity go hand in hand.
		</p>
		<button>Learn More</button>
	</div>
</section>
<style>
	.full-steam {
		position: relative;
		padding: 6rem 2rem;
		min-height: 600px;
		display: flex;
		align-items: center;
		overflow: hidden;
		border: 2px solid rgba(255, 255, 255, 0.3);
	}

	.full-steam::before {
		content: '';
		position: absolute;
		inset: 0;
		background-image: url('/full-STEAM-ahead.jpg');
		background-size: cover;
		background-position: center;
		background-repeat: no-repeat;
		filter: brightness(0.85);
		z-index: 0;
	}

	.full-steam::after {
		content: '';
		position: absolute;
		inset: 0;
		background: rgba(0, 0, 0, 0.5);
		z-index: 1;
	}

	.content {
		position: relative;
		z-index: 2;
		max-width: 600px;
	}

	.content h3 {
		font-size: 3rem;
		font-weight: 300;
		margin: 0 0 1.5rem 0;
		color: white;
	}

	.content p {
		font-size: 1.1rem;
		line-height: 1.8;
		color: rgba(255, 255, 255, 0.9);
		margin: 0 0 2rem 0;
	}

	.content button {
		padding: 0.75rem 2rem;
		border: 2px solid white;
		background: transparent;
		color: white;
		font-size: 1rem;
		cursor: pointer;
		transition: all 0.3s ease;
		font-weight: 500;
	}

	.content button:hover {
		background: white;
		color: #333;
	}

	@media (max-width: 968px) {
		.full-steam {
			flex-direction: column;
			text-align: center;
			padding: 4rem 1.5rem;
			min-height: 500px;
		}

		.content {
			max-width: 100%;
		}

		.content h3 {
			font-size: 2rem;
		}

		.content p {
			font-size: 1rem;
		}

		.content button {
			font-size: 0.9rem;
			padding: 0.65rem 1.5rem;
		}
	}
</style>

