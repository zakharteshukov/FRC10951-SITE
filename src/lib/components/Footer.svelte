<footer class="footer">
	<div class="cols">
		<div class="brand">
			<h6>Saigon South Dragons</h6>
			<p>Address line<br />Saigon</p>
		</div>
		<div class="links">
			<h6>Robotics</h6>
			<ul>
				<li><a href="#">FRC</a></li>
				<li><a href="#">VEX</a></li>
				<li><a href="#">STEM Community</a></li>
			</ul>
		</div>
		<div class="links">
			<h6>10951 Teams</h6>
			<ul>
				<li><a href="#">Team</a></li>
				<li><a href="#">Media</a></li>
				<li><a href="#">Contact</a></li>
			</ul>
		</div>
		<div class="links">
			<h6>VEX Teams</h6>
			<ul>
				<li><a href="#">1599W</a></li>
			</ul>
		</div>
		<div class="links">
			<h6>Projects</h6>
			<ul>
				<li><a href="#">EmpowerTech</a></li>
				<li><a href="#">RoboKids</a></li>
			</ul>
		</div>
		<div class="social">
			<a href="#" aria-label="X (Twitter)">X</a>
			<span>·</span>
			<a href="#" aria-label="Instagram">Instagram</a>
			<span>·</span>
			<a href="#" aria-label="YouTube">YouTube</a>
		</div>
	</div>
</footer>

<style>
	.footer {
		padding: 3rem 2rem;
		border-top: 1px solid #e5e5e5;
		background: white;
	}

	.cols {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
		gap: 2rem;
		max-width: 1200px;
		margin: 0 auto;
	}

	.brand h6 {
		font-size: 1.1rem;
		font-weight: 600;
		margin: 0 0 0.75rem 0;
		color: #333;
	}

	.brand p {
		font-size: 0.9rem;
		color: #666;
		line-height: 1.6;
		margin: 0;
	}

	.links h6 {
		font-size: 0.95rem;
		font-weight: 600;
		margin: 0 0 0.75rem 0;
		color: #333;
		text-transform: uppercase;
		letter-spacing: 0.05em;
	}

	.links ul {
		list-style: none;
		padding: 0;
		margin: 0;
	}

	.links li {
		margin-bottom: 0.5rem;
	}

	.links a {
		font-size: 0.9rem;
		color: #666;
		text-decoration: none;
		transition: color 0.3s ease;
	}

	.links a:hover {
		color: #333;
	}

	.social {
		display: flex;
		align-items: center;
		gap: 0.5rem;
		font-size: 0.9rem;
	}

	.social a {
		color: #666;
		text-decoration: none;
		transition: color 0.3s ease;
	}

	.social a:hover {
		color: #333;
	}

	.social span {
		color: #ccc;
	}

	@media (max-width: 768px) {
		.cols {
			grid-template-columns: repeat(2, 1fr);
			gap: 1.5rem;
		}
	}
</style>
