<script>
	import { fade } from 'svelte/transition';

	const navItems = ['SSIS', 'Team', 'Media', 'Outreach', 'Our Projects', 'Contact'];
	let mobileMenuOpen = $state(false);

	function toggleMobileMenu() {
		mobileMenuOpen = !mobileMenuOpen;
	}

	function closeMobileMenu() {
		mobileMenuOpen = false;
	}
</script>

<header class="site-header" transition:fade={{ duration: 500 }}>
	<div class="logo">FRC10951</div>
	<nav class="desktop-nav">
		{#each navItems as item}
			<a href="#" class="nav-link">{item}</a>
		{/each}
	</nav>
	<button class="mobile-menu-toggle" onclick={toggleMobileMenu} aria-label="Toggle menu">
		<span class="hamburger-line" class:open={mobileMenuOpen}></span>
		<span class="hamburger-line" class:open={mobileMenuOpen}></span>
		<span class="hamburger-line" class:open={mobileMenuOpen}></span>
	</button>
	<!-- Full screen overlay backdrop -->
	{#if mobileMenuOpen}
		<div class="mobile-overlay" onclick={closeMobileMenu}></div>
		<!-- Full screen slide-in menu from right -->
		<nav class="mobile-nav">
			<button class="close-button" onclick={closeMobileMenu} aria-label="Close menu">×</button>
			<div class="mobile-nav-content">
				{#each navItems as item}
					<a href="#" class="mobile-nav-link" onclick={closeMobileMenu}>{item}</a>
				{/each}
			</div>
		</nav>
	{/if}
</header>
<style>
	.site-header {
		display: flex;
		justify-content: space-between;
		align-items: center;
		padding: 1.5rem 2rem;
		background: transparent;
		position: absolute;
		top: 0;
		left: 0;
		right: 0;
		z-index: 100;
	}

	.logo {
		font-size: 1.5rem;
		font-weight: 700;
		color: white;
		letter-spacing: 0.05em;
	}

	.desktop-nav {
		display: flex;
		gap: 2rem;
		align-items: center;
	}

	.mobile-menu-toggle {
		display: none;
		flex-direction: column;
		gap: 5px;
		background: transparent;
		border: none;
		cursor: pointer;
		padding: 5px;
		z-index: 101;
	}

	.hamburger-line {
		width: 25px;
		height: 2px;
		background: white;
		transition: all 0.3s ease;
		transform-origin: center;
	}

	.hamburger-line.open:nth-child(1) {
		transform: rotate(45deg) translateY(8px);
	}

	.hamburger-line.open:nth-child(2) {
		opacity: 0;
	}

	.hamburger-line.open:nth-child(3) {
		transform: rotate(-45deg) translateY(-8px);
	}

	.mobile-overlay {
		position: fixed;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		background: rgba(0, 0, 0, 0.5);
		z-index: 998;
		animation: fadeIn 0.3s ease;
	}

	.mobile-nav {
		position: fixed;
		top: 0;
		right: 0;
		width: 100%;
		max-width: 400px;
		height: 100vh;
		background: rgba(0, 0, 0, 0.98);
		z-index: 999;
		display: flex;
		flex-direction: column;
		padding: 0;
		box-shadow: -2px 0 10px rgba(0, 0, 0, 0.3);
		animation: slideInRight 0.3s ease;
	}

	@keyframes slideInRight {
		from {
			transform: translateX(100%);
		}
		to {
			transform: translateX(0);
		}
	}

	.close-button {
		position: absolute;
		top: 1.5rem;
		right: 1.5rem;
		background: transparent;
		border: none;
		color: white;
		font-size: 2.5rem;
		line-height: 1;
		cursor: pointer;
		padding: 0;
		width: 40px;
		height: 40px;
		display: flex;
		align-items: center;
		justify-content: center;
		z-index: 1000;
		transition: opacity 0.3s ease;
	}

	.close-button:hover {
		opacity: 0.7;
	}

	.mobile-nav-content {
		display: flex;
		flex-direction: column;
		padding: 5rem 2rem 2rem;
		gap: 0;
		height: 100%;
		overflow-y: auto;
	}

	.mobile-nav-link {
		color: white;
		text-decoration: none;
		font-size: 1.5rem;
		font-weight: 500;
		padding: 1.5rem 0;
		border-bottom: 1px solid rgba(255, 255, 255, 0.1);
		transition: opacity 0.3s ease, padding-left 0.3s ease;
		display: block;
	}

	.mobile-nav-link:hover {
		opacity: 0.7;
		padding-left: 1rem;
	}

	.mobile-nav-link:last-child {
		border-bottom: none;
	}

	@keyframes fadeIn {
		from {
			opacity: 0;
		}
		to {
			opacity: 1;
		}
	}

	.nav-link {
		color: white;
		text-decoration: none;
		font-size: 0.95rem;
		font-weight: 500;
		position: relative;
		transition: opacity 0.3s ease;
	}

	.nav-link:hover {
		opacity: 0.8;
	}

	.nav-link::after {
		content: '';
		position: absolute;
		height: 2px;
		background: currentColor;
		left: 0;
		right: 0;
		bottom: -4px;
		transform: scaleX(0);
		transition: transform 0.3s ease;
	}

	.nav-link:hover::after {
		transform: scaleX(1);
	}

	@media (max-width: 768px) {
		.site-header {
			padding: 1rem;
		}

		.desktop-nav {
			display: none;
		}

		.mobile-menu-toggle {
			display: flex;
			position: relative;
			z-index: 1001;
		}
	}
</style>


