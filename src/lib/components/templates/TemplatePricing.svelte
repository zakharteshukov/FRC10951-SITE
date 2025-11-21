<!-- Template Pricing Section - Pricing cards -->
<section class="template-pricing">
	<div class="container">
		<div class="section-header">
			<h2>Choose Your Plan</h2>
			<p>Select the perfect plan for your needs</p>
		</div>
		<div class="pricing-grid">
			<div class="pricing-card">
				<div class="plan-header">
					<h3>Basic</h3>
					<div class="plan-price">
						<span class="currency">$</span>
						<span class="amount">29</span>
						<span class="period">/month</span>
					</div>
				</div>
				<ul class="plan-features">
					<li>Feature one included</li>
					<li>Feature two included</li>
					<li>Feature three included</li>
					<li>Basic support</li>
				</ul>
				<button class="btn-outline">Get Started</button>
			</div>
			<div class="pricing-card featured">
				<div class="popular-badge">Most Popular</div>
				<div class="plan-header">
					<h3>Pro</h3>
					<div class="plan-price">
						<span class="currency">$</span>
						<span class="amount">79</span>
						<span class="period">/month</span>
					</div>
				</div>
				<ul class="plan-features">
					<li>All Basic features</li>
					<li>Advanced feature one</li>
					<li>Advanced feature two</li>
					<li>Priority support</li>
					<li>24/7 assistance</li>
				</ul>
				<button class="btn-primary">Get Started</button>
			</div>
			<div class="pricing-card">
				<div class="plan-header">
					<h3>Enterprise</h3>
					<div class="plan-price">
						<span class="currency">$</span>
						<span class="amount">199</span>
						<span class="period">/month</span>
					</div>
				</div>
				<ul class="plan-features">
					<li>All Pro features</li>
					<li>Enterprise feature one</li>
					<li>Enterprise feature two</li>
					<li>Dedicated support</li>
					<li>Custom integrations</li>
				</ul>
				<button class="btn-outline">Contact Sales</button>
			</div>
		</div>
	</div>
</section>

<style>
	.template-pricing {
		padding: 4rem 2rem;
		background: #f8f8f8;
	}

	.container {
		max-width: 1200px;
		margin: 0 auto;
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

	.pricing-grid {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
		gap: 1.5rem;
		max-width: 1000px;
		margin: 0 auto;
	}

	.pricing-card {
		background: white;
		border-radius: 8px;
		padding: 2.5rem;
		box-shadow: 0 6px 18px rgba(0, 0, 0, 0.06);
		transition: transform 0.3s ease, box-shadow 0.3s ease;
		position: relative;
		display: flex;
		flex-direction: column;
	}

	.pricing-card:hover {
		transform: translateY(-4px);
		box-shadow: 0 12px 24px rgba(0, 0, 0, 0.12);
	}

	.pricing-card.featured {
		border: 2px solid #333;
	}

	.popular-badge {
		position: absolute;
		top: -12px;
		left: 50%;
		transform: translateX(-50%);
		background: #333;
		color: white;
		padding: 0.5rem 1.5rem;
		border-radius: 20px;
		font-size: 0.85rem;
		font-weight: 500;
	}

	.plan-header {
		text-align: center;
		margin-bottom: 2rem;
		padding-bottom: 2rem;
		border-bottom: 1px solid #e5e5e5;
	}

	.plan-header h3 {
		font-size: 1.5rem;
		font-weight: 300;
		margin: 0 0 1rem 0;
		color: #333;
	}

	.plan-price {
		display: flex;
		align-items: baseline;
		justify-content: center;
		gap: 0.25rem;
	}

	.currency {
		font-size: 1.5rem;
		font-weight: 600;
		color: #666;
	}

	.amount {
		font-size: 3rem;
		font-weight: 700;
		color: #333;
		line-height: 1;
	}

	.period {
		font-size: 1rem;
		color: #666;
	}

	.plan-features {
		list-style: none;
		padding: 0;
		margin: 0 0 2rem 0;
		flex-grow: 1;
	}

	.plan-features li {
		padding: 0.75rem 0;
		padding-left: 1.5rem;
		position: relative;
		color: #555;
		font-size: 1.1rem;
		line-height: 1.8;
	}

	.plan-features li::before {
		content: '✓';
		position: absolute;
		left: 0;
		color: #333;
		font-weight: 600;
	}

	.btn-primary,
	.btn-outline {
		width: 100%;
		padding: 0.75rem 2rem;
		border-radius: 4px;
		font-size: 1rem;
		font-weight: 500;
		cursor: pointer;
		transition: all 0.3s ease;
		border: 2px solid #333;
	}

	.btn-primary {
		background: #333;
		color: white;
	}

	.btn-primary:hover {
		background: transparent;
		color: #333;
	}

	.btn-outline {
		background: transparent;
		color: #333;
	}

	.btn-outline:hover {
		background: #333;
		color: white;
	}

	@media (max-width: 968px) {
		.template-pricing {
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
		.pricing-grid {
			grid-template-columns: 1fr;
		}
	}
</style>

