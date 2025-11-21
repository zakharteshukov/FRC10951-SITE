<!-- Template Hero Section - Full width with background image -->
<section class="template-hero">
	<div class="hero-background">
		<div class="placeholder-image">Hero Image</div>
	</div>
	<div class="hero-overlay"></div>
	<div class="hero-content">
		<h1 class="hero-title">Main Headline</h1>
		<p class="hero-subtitle">Supporting subtitle text that provides context</p>
		<div class="hero-actions">
			<button class="btn-primary">Primary Action</button>
			<button class="btn-secondary">Secondary Action</button>
		</div>
	</div>
</section>

<style>
	.template-hero {
		position: relative;
		height: 100vh;
		min-height: 600px;
		display: flex;
		align-items: center;
		justify-content: center;
		overflow: hidden;
	}

	.hero-background {
		position: absolute;
		inset: 0;
		z-index: 0;
	}

	.placeholder-image {
		width: 100%;
		height: 100%;
		background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
		display: flex;
		align-items: center;
		justify-content: center;
		color: white;
		font-size: 2rem;
		font-weight: 600;
		opacity: 0.8;
	}

	.hero-overlay {
		position: absolute;
		inset: 0;
		background: rgba(0, 0, 0, 0.4);
		z-index: 1;
	}

	.hero-content {
		position: relative;
		z-index: 2;
		text-align: center;
		color: white;
		padding: 2rem;
		max-width: 800px;
	}

	.hero-title {
		font-size: 3rem;
		font-weight: 300;
		margin: 0 0 1.5rem 0;
		line-height: 1.2;
	}

	.hero-subtitle {
		font-size: 1.1rem;
		line-height: 1.8;
		margin: 0 0 2rem 0;
		color: rgba(255, 255, 255, 0.9);
	}

	.hero-actions {
		display: flex;
		gap: 1.5rem;
		justify-content: center;
		flex-wrap: wrap;
	}

	.btn-primary,
	.btn-secondary {
		padding: 0.75rem 2rem;
		font-size: 1rem;
		border: 2px solid white;
		cursor: pointer;
		transition: all 0.3s ease;
		font-weight: 500;
		border-radius: 4px;
	}

	.btn-primary {
		background: white;
		color: #1a1a1a;
	}

	.btn-primary:hover {
		background: transparent;
		color: white;
		transform: translateY(-2px);
		box-shadow: 0 4px 12px rgba(255, 255, 255, 0.2);
	}

	.btn-secondary {
		background: transparent;
		color: white;
	}

	.btn-secondary:hover {
		background: white;
		color: #1a1a1a;
		transform: translateY(-2px);
		box-shadow: 0 4px 12px rgba(255, 255, 255, 0.2);
	}

	@media (max-width: 768px) {
		.hero-title {
			font-size: 2.5rem;
		}

		.hero-subtitle {
			font-size: 1.2rem;
		}

		.hero-actions {
			flex-direction: column;
		}

		.btn-primary,
		.btn-secondary {
			width: 100%;
		}
	}
</style>

