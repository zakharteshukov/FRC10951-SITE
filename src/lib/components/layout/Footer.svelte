<footer class="footer">
	<div class="footer-content">
		<div class="brand">
			<h6>SSIS Dragons</h6>
			<p>Team 10951<br />Saigon South International School<br />Saigon, Vietnam</p>
		</div>
		<div class="links">
			<h6>Robotics</h6>
			<ul>
				<li><a href="/frc" aria-label="FRC">FRC</a></li>
				<li><a href="/vex" aria-label="VEX">VEX</a></li>
				<li><a href="/stem-community" aria-label="STEM Community">STEM Community</a></li>
			</ul>
		</div>
		<div class="links">
			<h6>Team 10951</h6>
			<ul>
				<li><a href="/about" aria-label="About">About</a></li>
				<li><a href="/media" aria-label="Media">Media</a></li>
				<li><a href="/contact" aria-label="Contact">Contact</a></li>
			</ul>
		</div>
		<div class="links">
			<h6>VEX Teams</h6>
			<ul>
				<li><a href="/vex/1599v" aria-label="1599V">1599V</a></li>
				<li><a href="/vex/1599w" aria-label="1599W">1599W</a></li>
				<li><a href="/vex/1599x" aria-label="1599X">1599X</a></li>
				<li><a href="/vex/1599y" aria-label="1599Y">1599Y</a></li>
				<li><a href="/vex/1599z" aria-label="1599Z">1599Z</a></li>
			</ul>
		</div>
		<div class="links">
			<h6>Projects</h6>
			<ul>
				<li><a href="/projects/empowertech" aria-label="EmpowerTech">EmpowerTech</a></li>
				<li><a href="/projects/robokids" aria-label="RoboKids">RoboKids</a></li>
			</ul>
		</div>
		<div class="social">
			<h6>Follow Us</h6>
			<div class="social-icons">
				<a
					href="https://instagram.com"
					class="btn-icon"
					aria-label="Instagram"
					target="_blank"
					rel="noopener noreferrer"
				>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						width="20"
						height="20"
						viewBox="0 0 24 24"
						fill="none"
						stroke="currentColor"
						stroke-width="2"
						stroke-linecap="round"
						stroke-linejoin="round"
						class="icon"
					>
						<rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
						<path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
						<line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
					</svg>
				</a>
				<a
					href="https://youtube.com"
					class="btn-icon"
					aria-label="YouTube"
					target="_blank"
					rel="noopener noreferrer"
				>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						width="20"
						height="20"
						viewBox="0 0 24 24"
						fill="none"
						stroke="currentColor"
						stroke-width="2"
						stroke-linecap="round"
						stroke-linejoin="round"
						class="icon"
					>
						<path
							d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z"
						/>
						<polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02" />
					</svg>
				</a>
			</div>
		</div>
	</div>
	<div class="footer-bottom">
		<p>&copy; {new Date().getFullYear()} Team 10951 - Saigon South Dragons. All rights reserved.</p>
	</div>
</footer>

<style>
	.footer {
		padding: 4rem 2rem 2rem;
		border-top: none;
		background: linear-gradient(to bottom, #fafafa, #ffffff);
		margin: 0;
	}

	.footer-content {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(160px, 1fr));
		gap: 2.5rem;
		max-width: 1200px;
		margin: 0 auto 2rem;
	}

	.brand h6 {
		font-size: 1.2rem;
		font-weight: 700;
		margin: 0 0 1rem 0;
		color: #1a1a1a;
		letter-spacing: -0.02em;
	}

	.brand p {
		font-size: 0.9rem;
		color: #666;
		line-height: 1.7;
		margin: 0;
	}

	.links h6 {
		font-size: 0.9rem;
		font-weight: 600;
		margin: 0 0 1rem 0;
		color: #1a1a1a;
		text-transform: uppercase;
		letter-spacing: 0.08em;
		font-size: 0.85rem;
	}

	.links ul {
		list-style: none;
		padding: 0;
		margin: 0;
	}

	.links li {
		margin-bottom: 0.65rem;
	}

	.links a {
		font-size: 0.9rem;
		color: #666;
		text-decoration: none;
		transition: all 0.2s ease;
		display: inline-block;
		position: relative;
	}

	.links a:hover {
		color: #1a1a1a;
		transform: translateX(4px);
	}

	.links a::after {
		content: '';
		position: absolute;
		bottom: -2px;
		left: 0;
		width: 0;
		height: 1px;
		background-color: #1a1a1a;
		transition: width 0.2s ease;
	}

	.links a:hover::after {
		width: 100%;
	}

	.social {
		display: flex;
		flex-direction: column;
		gap: 1rem;
	}

	.social h6 {
		font-size: 0.85rem;
		font-weight: 600;
		margin: 0;
		color: #1a1a1a;
		text-transform: uppercase;
		letter-spacing: 0.08em;
	}

	.social-icons {
		display: flex;
		gap: 0.75rem;
		align-items: center;
	}

	.btn-icon {
		display: inline-flex;
		align-items: center;
		justify-content: center;
		width: 42px;
		height: 42px;
		border-radius: 10px;
		color: #666;
		background-color: #ffffff;
		border: 1.5px solid #e5e5e5;
		text-decoration: none;
		transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
		cursor: pointer;
		position: relative;
		box-shadow: 0 1px 3px rgba(0, 0, 0, 0.05);
	}

	.btn-icon:hover {
		color: #1a1a1a;
		background-color: #f5f5f5;
		border-color: #d0d0d0;
		transform: translateY(-2px);
		box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
	}

	.btn-icon:active {
		transform: translateY(0);
	}

	.btn-icon:focus-visible {
		outline: 2px solid #1a1a1a;
		outline-offset: 2px;
	}

	.btn-icon .icon {
		width: 20px;
		height: 20px;
		flex-shrink: 0;
	}

	.footer-bottom {
		max-width: 1200px;
		margin: 0 auto;
		padding-top: 2rem;
		border-top: 1px solid #e5e5e5;
		text-align: center;
	}

	.footer-bottom p {
		font-size: 0.85rem;
		color: #999;
		margin: 0;
	}

	@media (max-width: 768px) {
		.footer {
			padding: 3rem 1.5rem 1.5rem;
		}

		.footer-content {
			grid-template-columns: repeat(2, 1fr);
			gap: 2rem;
		}

		.brand {
			grid-column: 1 / -1;
		}

		.social {
			grid-column: 1 / -1;
		}
	}

	@media (max-width: 480px) {
		.footer-content {
			grid-template-columns: 1fr;
			gap: 1.5rem;
		}

		.brand,
		.social {
			grid-column: 1;
		}
	}
</style>

