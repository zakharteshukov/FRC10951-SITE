<script>
	import { fade } from 'svelte/transition';

	const navItems = ['SSIS', 'Team', 'Media', 'Outreach', 'Our Projects', 'Contact'];
	let mobileMenuOpen = false;

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
	<button class="mobile-menu-toggle" on:click={toggleMobileMenu} aria-label="Toggle menu">
		<span class="hamburger-line" class:open={mobileMenuOpen}></span>
		<span class="hamburger-line" class:open={mobileMenuOpen}></span>
		<span class="hamburger-line" class:open={mobileMenuOpen}></span>
	</button>
	<nav class="mobile-nav" class:open={mobileMenuOpen}>
		{#each navItems as item}
			<a href="#" class="nav-link" on:click={closeMobileMenu}>{item}</a>
		{/each}
	</nav>
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
		z-index: 101;
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
		padding: 0.5rem;
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

	.mobile-nav {
		display: none;
		flex-direction: column;
		position: fixed;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		background: rgba(0, 0, 0, 0.95);
		padding: 5rem 2rem 2rem;
		transform: translateX(100%);
		transition: transform 0.3s ease;
		z-index: 100;
	}

	.mobile-nav.open {
		transform: translateX(0);
	}

	.nav-link {
		color: white;
		text-decoration: none;
		font-size: 0.95rem;
		font-weight: 500;
		position: relative;
		transition: opacity 0.3s ease;
		white-space: nowrap;
	}

	.nav-link:hover {
		opacity: 0.8;
	}

	.desktop-nav .nav-link::after {
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

	.desktop-nav .nav-link:hover::after {
		transform: scaleX(1);
	}

	.mobile-nav .nav-link {
		padding: 1rem 0;
		font-size: 1.2rem;
		border-bottom: 1px solid rgba(255, 255, 255, 0.1);
	}

	@media (max-width: 968px) {
		.desktop-nav {
			display: none;
		}

		.mobile-menu-toggle {
			display: flex;
		}

		.mobile-nav {
			display: flex;
		}
	}

	@media (max-width: 768px) {
		.site-header {
			padding: 1rem 1.5rem;
		}

		.logo {
			font-size: 1.25rem;
		}
	}
</style>
