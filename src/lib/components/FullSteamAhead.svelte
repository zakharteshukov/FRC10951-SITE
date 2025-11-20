<script>
	const bg = '/hero.jpg';
</script>

<section class="full-steam">
	<div class="bg" style="background-image: url('{bg}');"></div>
	<div class="content">
		<h3>Full STEAM Ahead</h3>
		<p>
			Our commitment to Science, Technology, Engineering, Arts, and Mathematics education drives
			everything we do. We're building a future where innovation and creativity go hand in hand.
		</p>
		<button>Learn More</button>
	</div>
	<div class="decorative">
		<div class="circle"></div>
	</div>
</section>

<style>
	.full-steam {
		position: relative;
		padding: 4rem 2rem;
		min-height: 400px;
		display: flex;
		align-items: center;
		overflow: hidden;
	}

	.bg {
		position: absolute;
		inset: 0;
		background-size: cover;
		background-position: center;
		filter: blur(3px) saturate(0.95);
		z-index: 0;
		opacity: 0.3;
	}

	.content {
		position: relative;
		z-index: 1;
		max-width: 600px;
		color: #333;
	}

	.content h3 {
		font-size: 3rem;
		font-weight: 300;
		margin: 0 0 1.5rem 0;
		color: #333;
	}

	.content p {
		font-size: 1.1rem;
		line-height: 1.8;
		color: #555;
		margin: 0 0 2rem 0;
	}

	.content button {
		padding: 0.75rem 2rem;
		border: 2px solid #333;
		background: transparent;
		color: #333;
		font-size: 1rem;
		cursor: pointer;
		transition: all 0.3s ease;
		font-weight: 500;
	}

	.content button:hover {
		background: #333;
		color: white;
	}

	.decorative {
		position: absolute;
		right: 5%;
		top: 50%;
		transform: translateY(-50%);
		z-index: 1;
	}

	.circle {
		width: 200px;
		height: 200px;
		border-radius: 50%;
		background: rgba(255, 255, 255, 0.9);
		border: 3px solid #333;
	}

	@media (max-width: 968px) {
		.full-steam {
			flex-direction: column;
			text-align: center;
		}

		.decorative {
			display: none;
		}

		.content {
			max-width: 100%;
		}
	}
</style>

