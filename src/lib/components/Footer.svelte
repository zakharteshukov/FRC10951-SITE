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
			<h6>Follow Us</h6>
			<div class="social-icons">
				<a
					href="#"
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
					href="#"
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
		flex-direction: column;
		gap: 0.75rem;
	}

	.social h6 {
		font-size: 0.95rem;
		font-weight: 600;
		margin: 0;
		color: #333;
		text-transform: uppercase;
		letter-spacing: 0.05em;
	}

	.social-icons {
		display: flex;
		gap: 0.5rem;
		align-items: center;
	}

	.btn-icon {
		display: inline-flex;
		align-items: center;
		justify-content: center;
		width: 40px;
		height: 40px;
		border-radius: 8px;
		color: hsl(0, 0%, 45%);
		background-color: transparent;
		border: 1px solid hsl(0, 0%, 89%);
		text-decoration: none;
		transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
		cursor: pointer;
		position: relative;
	}

	.btn-icon:hover {
		color: hsl(0, 0%, 9%);
		background-color: hsl(0, 0%, 96%);
		border-color: hsl(0, 0%, 89%);
	}

	.btn-icon:active {
		transform: scale(0.95);
	}

	.btn-icon:focus-visible {
		outline: 2px solid hsl(0, 0%, 9%);
		outline-offset: 2px;
	}

	.btn-icon .icon {
		width: 20px;
		height: 20px;
		flex-shrink: 0;
	}

	@media (max-width: 768px) {
		.cols {
			grid-template-columns: repeat(2, 1fr);
			gap: 1.5rem;
		}
	}
</style>