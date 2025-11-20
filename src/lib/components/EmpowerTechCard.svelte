<section class="empower">
	<div class="photo-placeholder">
		<div class="placeholder">Photo</div>
	</div>
	<h5>Empower Tech</h5>
	<p>Empowering communities through technology education and innovation.</p>
	<button>Learn More</button>
</section>

<style>
	.empower {
		padding: 2rem;
		height: 100%;
		min-height: 300px;
		box-shadow: 0 6px 18px rgba(0, 0, 0, 0.06);
		background: white;
		display: flex;
		flex-direction: column;
		transition: transform 0.3s ease, box-shadow 0.3s ease;
	}

	.empower:hover {
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

	.empower h5 {
		font-size: 1.5rem;
		font-weight: 600;
		margin: 0 0 1rem 0;
		color: #333;
	}

	.empower p {
		font-size: 1rem;
		color: #666;
		line-height: 1.6;
		margin: 0 0 1.5rem 0;
		flex-grow: 1;
	}

	.empower button {
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

	.empower button:hover {
		background: #333;
		color: white;
	}
</style>

