<!-- Template Image + Text Section - Alternating layout -->
<section class="template-image-text">
	<div class="container">
		<div class="content-block reverse">
			<div class="image-side">
				<div class="placeholder-image">Image Placeholder</div>
			</div>
			<div class="text-side">
				<h2>Section Title</h2>
				<p>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor
					incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
					nostrud exercitation.
				</p>
				<ul class="feature-list">
					<li>Feature point one</li>
					<li>Feature point two</li>
					<li>Feature point three</li>
				</ul>
				<button class="btn-primary">Learn More</button>
			</div>
		</div>
		<div class="content-block">
			<div class="text-side">
				<h2>Another Section</h2>
				<p>
					Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
					aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit.
				</p>
				<p>
					Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium
					doloremque laudantium.
				</p>
				<button class="btn-primary">Get Started</button>
			</div>
			<div class="image-side">
				<div class="placeholder-image">Image Placeholder</div>
			</div>
		</div>
	</div>
</section>

<style>
	.template-image-text {
		padding: 4rem 2rem;
		background: white;
	}

	.content-block {
		display: grid;
		grid-template-columns: 1fr 1fr;
		gap: 3rem;
		align-items: center;
		margin-bottom: 4rem;
	}

	.content-block:last-child {
		margin-bottom: 0;
	}

	.content-block.reverse {
		direction: rtl;
	}

	.content-block.reverse > * {
		direction: ltr;
	}

	.image-side {
		width: 100%;
	}

	.placeholder-image {
		width: 100%;
		aspect-ratio: 4 / 3;
		background: linear-gradient(135deg, #1a1a1a 0%, #2d2d2d 100%);
		border-radius: 8px;
		display: flex;
		align-items: center;
		justify-content: center;
		color: white;
		font-size: 1.2rem;
		font-weight: 600;
		box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
	}

	.text-side h2 {
		font-size: 2.5rem;
		font-weight: 300;
		margin: 0 0 1.5rem 0;
		color: #333;
	}

	.text-side p {
		font-size: 1.1rem;
		line-height: 1.8;
		color: #555;
		margin: 0 0 1.5rem 0;
	}

	.feature-list {
		list-style: none;
		padding: 0;
		margin: 0 0 2rem 0;
	}

	.feature-list li {
		padding: 0.5rem 0;
		padding-left: 1.5rem;
		position: relative;
		color: #555;
		font-size: 1.1rem;
		line-height: 1.8;
	}

	.feature-list li::before {
		content: '✓';
		position: absolute;
		left: 0;
		color: #333;
		font-weight: 600;
	}

	/* Button styles use global .btn classes */
	.btn-primary {
		background: transparent;
		color: #333;
		border-color: #333;
	}

	.btn-primary:hover {
		background: #333;
		color: white;
	}

	@media (max-width: 968px) {
		.template-image-text {
			padding: 3rem 1.5rem;
		}

		.content-block,
		.content-block.reverse {
			grid-template-columns: 1fr;
			gap: 2rem;
			direction: ltr;
			margin-bottom: 3rem;
		}

		.content-block.reverse > * {
			direction: ltr;
		}

		.image-side {
			order: -1;
		}

		.text-side h2 {
			font-size: 2rem;
		}

		.text-side p {
			font-size: 1rem;
		}
	}
</style>

