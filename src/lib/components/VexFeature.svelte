<section class="vex-feature">
	<div class="content">
		<div class="header">
			<h4>1599W</h4>
			<p>cycles between all the teams</p>
		</div>
		<div class="logo">VEX V5</div>
		<div class="photo-placeholder">
			<div class="placeholder">Photo</div>
		</div>
		<div class="actions">
			<button>Learn More</button>
			<button>Past Reasons 2</button>
		</div>
	</div>
</section>

<style>
	.vex-feature {
		height: 100%;
		min-height: 500px;
		padding: 3rem;
		background: #fafafa;
		display: flex;
		align-items: center;
		justify-content: center;
		background-image: repeating-linear-gradient(
			45deg,
			#fafafa,
			#fafafa 10px,
			#f5f5f5 10px,
			#f5f5f5 20px
		);
	}

	.content {
		width: 100%;
		max-width: 500px;
	}

	.header h4 {
		font-size: 3rem;
		font-weight: 700;
		margin: 0 0 0.5rem 0;
		color: #333;
	}

	.header p {
		font-size: 1.1rem;
		color: #666;
		margin: 0 0 2rem 0;
	}

	.logo {
		font-size: 2rem;
		font-weight: 600;
		color: #333;
		margin-bottom: 2rem;
	}

	.photo-placeholder {
		width: 100%;
		height: 200px;
		background: #e0e0e0;
		border-radius: 8px;
		margin-bottom: 2rem;
		display: flex;
		align-items: center;
		justify-content: center;
	}

	.placeholder {
		color: #999;
		font-size: 1.2rem;
	}

	.actions {
		display: flex;
		gap: 1rem;
		flex-wrap: wrap;
	}

	.actions button {
		padding: 0.75rem 2rem;
		border: 2px solid #333;
		background: transparent;
		color: #333;
		font-size: 1rem;
		cursor: pointer;
		transition: all 0.3s ease;
		font-weight: 500;
	}

	.actions button:hover {
		background: #333;
		color: white;
	}
</style>

