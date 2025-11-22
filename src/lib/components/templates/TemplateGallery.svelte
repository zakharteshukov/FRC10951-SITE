<!-- Template Gallery Section - Image grid -->
<section class="template-gallery">
	<div class="container">
		<div class="section-header">
			<h2>Gallery</h2>
			<p>Showcase your work, products, or portfolio</p>
		</div>
		<div class="gallery-grid">
			<div class="gallery-item">
				<div class="placeholder-image">Image 1</div>
				<div class="gallery-overlay">
					<h3>Project Title</h3>
					<p>Project description</p>
				</div>
			</div>
			<div class="gallery-item">
				<div class="placeholder-image">Image 2</div>
				<div class="gallery-overlay">
					<h3>Project Title</h3>
					<p>Project description</p>
				</div>
			</div>
			<div class="gallery-item">
				<div class="placeholder-image">Image 3</div>
				<div class="gallery-overlay">
					<h3>Project Title</h3>
					<p>Project description</p>
				</div>
			</div>
			<div class="gallery-item">
				<div class="placeholder-image">Image 4</div>
				<div class="gallery-overlay">
					<h3>Project Title</h3>
					<p>Project description</p>
				</div>
			</div>
			<div class="gallery-item">
				<div class="placeholder-image">Image 5</div>
				<div class="gallery-overlay">
					<h3>Project Title</h3>
					<p>Project description</p>
				</div>
			</div>
			<div class="gallery-item">
				<div class="placeholder-image">Image 6</div>
				<div class="gallery-overlay">
					<h3>Project Title</h3>
					<p>Project description</p>
				</div>
			</div>
		</div>
	</div>
</section>

<style>
	.template-gallery {
		padding: 4rem 2rem;
		background: #f8f8f8;
	}

	/* Section header uses global .section-header class */

	.gallery-grid {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
		gap: 1.5rem;
	}

	.gallery-item {
		position: relative;
		border-radius: 8px;
		overflow: hidden;
		aspect-ratio: 4 / 3;
		cursor: pointer;
		box-shadow: 0 6px 18px rgba(0, 0, 0, 0.06);
		transition: transform 0.3s ease, box-shadow 0.3s ease;
	}

	.gallery-item:hover {
		transform: translateY(-4px);
		box-shadow: 0 12px 24px rgba(0, 0, 0, 0.12);
	}

	.placeholder-image {
		width: 100%;
		height: 100%;
		background: linear-gradient(135deg, #1a1a1a 0%, #2d2d2d 100%);
		display: flex;
		align-items: center;
		justify-content: center;
		color: white;
		font-size: 1.5rem;
		font-weight: 600;
		transition: transform 0.3s ease;
	}

	.gallery-item:hover .placeholder-image {
		transform: scale(1.05);
	}

	.gallery-overlay {
		position: absolute;
		inset: 0;
		background: linear-gradient(to top, rgba(0, 0, 0, 0.8), transparent);
		display: flex;
		flex-direction: column;
		justify-content: flex-end;
		padding: 1.5rem;
		opacity: 0;
		transition: opacity 0.3s ease;
		color: white;
	}

	.gallery-item:hover .gallery-overlay {
		opacity: 1;
	}

	.gallery-overlay h3 {
		font-size: 1.3rem;
		font-weight: 300;
		margin: 0 0 0.5rem 0;
	}

	.gallery-overlay p {
		font-size: 0.95rem;
		margin: 0;
		opacity: 0.9;
		line-height: 1.6;
	}

	@media (max-width: 968px) {
		.template-gallery {
			padding: 3rem 1.5rem;
		}

		.section-header h2 {
			font-size: 2rem;
		}

		.section-header p {
			font-size: 1rem;
		}
	}

	@media (max-width: 768px) {
		.gallery-grid {
			grid-template-columns: 1fr;
		}
	}
</style>

