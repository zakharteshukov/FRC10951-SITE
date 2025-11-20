<section class="robokids">
	<div class="photo-placeholder">
		<div class="placeholder">Photo</div>
	</div>
	<h5>Robokids</h5>
	<p>Inspiring the next generation of robotics enthusiasts through hands-on learning.</p>
	<button>Learn More</button>
</section>

<style>
	.robokids {
		padding: 2rem;
		height: 100%;
		min-height: 300px;
		box-shadow: 0 6px 18px rgba(0, 0, 0, 0.06);
		background: white;
		display: flex;
		flex-direction: column;
		transition: transform 0.3s ease, box-shadow 0.3s ease;
	}

	.robokids:hover {
		transform: translateY(-4px);
		box-shadow: 0 12px 24px rgba(0, 0, 0, 0.12);
	}

	.photo-placeholder {
		width: 100%;
		height: 120px;
		background: #e0e0e0;
		border-radius: 6px;
		margin-bottom: 1.5rem;
		display: flex;
		align-items: center;
		justify-content: center;
	}

	.placeholder {
		color: #999;
		font-size: 0.9rem;
	}

	.robokids h5 {
		font-size: 1.5rem;
		font-weight: 600;
		margin: 0 0 1rem 0;
		color: #333;
	}

	.robokids p {
		font-size: 1rem;
		color: #666;
		line-height: 1.6;
		margin: 0 0 1.5rem 0;
		flex-grow: 1;
	}

	.robokids button {
		padding: 0.75rem 1.5rem;
		border: 2px solid #333;
		background: transparent;
		color: #333;
		font-size: 0.95rem;
		cursor: pointer;
		transition: all 0.3s ease;
		font-weight: 500;
		align-self: flex-start;
	}

	.robokids button:hover {
		background: #333;
		color: white;
	}
</style>

