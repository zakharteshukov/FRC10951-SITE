<!-- Template Testimonials Section - Customer reviews -->
<section class="template-testimonials">
	<div class="container">
		<div class="section-header">
			<h2>What People Say</h2>
			<p>Real feedback from our community</p>
		</div>
		<div class="testimonials-grid">
			<div class="testimonial-card">
				<div class="testimonial-content">
					<p class="quote">"This is an amazing product that has transformed how we work. Highly recommended!"</p>
				</div>
				<div class="testimonial-author">
					<div class="author-avatar">JD</div>
					<div class="author-info">
						<div class="author-name">John Doe</div>
						<div class="author-role">CEO, Company Name</div>
					</div>
				</div>
			</div>
			<div class="testimonial-card">
				<div class="testimonial-content">
					<p class="quote">"Outstanding service and support. The team goes above and beyond every time."</p>
				</div>
				<div class="testimonial-author">
					<div class="author-avatar">JS</div>
					<div class="author-info">
						<div class="author-name">Jane Smith</div>
						<div class="author-role">Director, Another Company</div>
					</div>
				</div>
			</div>
			<div class="testimonial-card">
				<div class="testimonial-content">
					<p class="quote">"The best investment we've made this year. Results speak for themselves."</p>
				</div>
				<div class="testimonial-author">
					<div class="author-avatar">MJ</div>
					<div class="author-info">
						<div class="author-name">Mike Johnson</div>
						<div class="author-role">Founder, Startup Inc</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</section>

<style>
	.template-testimonials {
		padding: 4rem 2rem;
		background: white;
	}

	.section-header {
		text-align: center;
		margin-bottom: 3rem;
	}

	.section-header h2 {
		font-size: 2.5rem;
		font-weight: 300;
		margin: 0 0 1rem 0;
		color: #333;
	}

	.section-header p {
		font-size: 1.1rem;
		line-height: 1.8;
		color: #666;
		margin: 0;
	}

	.testimonials-grid {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
		gap: 1.5rem;
	}

	.testimonial-card {
		background: #f8f8f8;
		padding: 2.5rem;
		border-radius: 8px;
		box-shadow: 0 6px 18px rgba(0, 0, 0, 0.06);
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		min-height: 250px;
		transition: transform 0.3s ease, box-shadow 0.3s ease;
	}

	.testimonial-card:hover {
		transform: translateY(-4px);
		box-shadow: 0 12px 24px rgba(0, 0, 0, 0.12);
	}

	.testimonial-content {
		margin-bottom: 1.5rem;
	}

	.quote {
		font-size: 1.1rem;
		line-height: 1.8;
		color: #555;
		margin: 0;
		font-style: italic;
	}

	.testimonial-author {
		display: flex;
		align-items: center;
		gap: 1rem;
	}

	.author-avatar {
		width: 50px;
		height: 50px;
		border-radius: 50%;
		background: linear-gradient(135deg, #1a1a1a 0%, #2d2d2d 100%);
		display: flex;
		align-items: center;
		justify-content: center;
		color: white;
		font-weight: 600;
		font-size: 1.2rem;
		flex-shrink: 0;
	}

	.author-name {
		font-weight: 600;
		color: #333;
		margin-bottom: 0.25rem;
	}

	.author-role {
		font-size: 0.9rem;
		color: #666;
	}

	@media (max-width: 968px) {
		.template-testimonials {
			padding: 3rem 1.5rem;
		}

	}

	@media (max-width: 768px) {
		.testimonials-grid {
			grid-template-columns: 1fr;
		}
	}
</style>

