<script>
	import { onDestroy } from 'svelte';
	import { browser } from '$app/environment';

	const navItems = [
		{ label: 'SSIS', href: '/' },
		{ label: 'Team', href: '/about' },
		{ label: 'Media', href: '/' },
		{ label: 'Outreach', href: '/' },
		{ label: 'Our Projects', href: '/' },
		{ label: 'Contact', href: '/contact' },
	];
	let mobileMenuOpen = false;

	// Manage body scroll state reactively
	$: if (browser) {
		document.body.style.overflow = mobileMenuOpen ? 'hidden' : '';
	}

	function toggleMobileMenu() {
		mobileMenuOpen = !mobileMenuOpen;
	}

	function closeMobileMenu() {
		mobileMenuOpen = false;
	}

	// Cleanup: restore body scroll on component destroy
	onDestroy(() => {
		if (browser) {
			document.body.style.overflow = '';
		}
	});
</script>

<header class="site-header" class:menu-open={mobileMenuOpen}>
	<div class="logo" class:menu-open={mobileMenuOpen}>FRC10951</div>
	<nav class="desktop-nav">
		{#each navItems as item}
			<a href={item.href} class="nav-link">{item.label}</a>
		{/each}
	</nav>
	<button
		class="mobile-menu-toggle"
		class:open={mobileMenuOpen}
		on:click={toggleMobileMenu}
		aria-label={mobileMenuOpen ? 'Close menu' : 'Toggle menu'}
		aria-expanded={mobileMenuOpen}
	>
		<span class="hamburger-icon">
			<span class="hamburger-line"></span>
			<span class="hamburger-line"></span>
			<span class="hamburger-line"></span>
		</span>
		<span class="close-icon">
			<svg
				xmlns="http://www.w3.org/2000/svg"
				width="25"
				height="25"
				viewBox="0 0 24 24"
				fill="none"
				stroke="currentColor"
				stroke-width="2"
				stroke-linecap="round"
				stroke-linejoin="round"
				aria-hidden="true"
			>
				<line x1="18" y1="6" x2="6" y2="18" />
				<line x1="6" y1="6" x2="18" y2="18" />
			</svg>
		</span>
	</button>
	{#if mobileMenuOpen}
		<nav class="mobile-nav" role="dialog" aria-modal="true" aria-label="Navigation menu">
			<div class="mobile-nav-content">
				{#each navItems as item}
					<a href={item.href} class="mobile-nav-link" on:click={closeMobileMenu}>{item.label}</a>
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
		inset: 0 0 auto;
		z-index: 100;
	}

	.site-header.menu-open {
		position: fixed;
		z-index: 1000;
	}

	.logo {
		font-size: 1.5rem;
		font-weight: 700;
		color: white;
		letter-spacing: 0.05em;
		position: relative;
		z-index: 1001;
		flex-shrink: 0;
	}

	.logo.menu-open {
		position: fixed;
		left: 2rem;
		top: 1.5rem;
	}

	.desktop-nav {
		display: flex;
		gap: 2rem;
		align-items: center;
	}

	.mobile-menu-toggle {
		display: none;
		align-items: center;
		justify-content: center;
		background: transparent;
		border: none;
		cursor: pointer;
		padding: 5px;
		width: 35px;
		height: 35px;
		z-index: 1001;
		position: relative;
	}

	.site-header.menu-open .mobile-menu-toggle {
		position: fixed;
		right: 2rem;
		top: 1.5rem;
	}

	.hamburger-icon,
	.close-icon {
		position: absolute;
		inset: 50% auto auto 50%;
		transform: translate(-50%, -50%);
		width: 25px;
		height: 18px;
		display: flex;
		align-items: center;
		justify-content: center;
		transition: opacity 0s, visibility 0s;
	}

	.hamburger-icon {
		flex-direction: column;
		gap: 5px;
		opacity: 1;
		visibility: visible;
	}

	.close-icon {
		opacity: 0;
		visibility: hidden;
		color: white;
	}

	.close-icon svg {
		width: 25px;
		height: 25px;
	}

	.mobile-menu-toggle.open .hamburger-icon {
		opacity: 0;
		visibility: hidden;
	}

	.mobile-menu-toggle.open .close-icon {
		opacity: 1;
		visibility: visible;
	}

	.hamburger-line {
		width: 25px;
		height: 2px;
		background: white;
	}

	.mobile-nav {
		position: fixed;
		inset: 0;
		width: 100vw;
		min-width: 100vw;
		height: 100dvh;
		background: rgba(0, 0, 0, 0.98);
		z-index: 998;
		display: flex;
		flex-direction: column;
		padding: 0;
		margin: 0;
		overflow: hidden;
		box-sizing: border-box;
		animation: fadeIn 0.3s ease;
	}

	@keyframes fadeIn {
		from {
			opacity: 0;
		}
		to {
			opacity: 1;
		}
	}

	.mobile-nav-content {
		display: flex;
		flex-direction: column;
		padding: 5rem 2rem 2rem;
		gap: 0;
		height: 100%;
		overflow-y: auto;
		margin-top: 1rem;
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
		inset: auto 0 -4px;
		height: 2px;
		background: currentColor;
		transform: scaleX(0);
		transition: transform 0.3s ease;
	}

	.nav-link:hover::after {
		transform: scaleX(1);
	}

	@media (max-width: 1024px) {
		.desktop-nav {
			display: none;
		}

		.mobile-menu-toggle {
			display: flex;
		}

		.site-header.menu-open {
			position: fixed;
		}

		.logo.menu-open {
			position: fixed;
			left: 2rem;
			top: 1.5rem;
		}

		.site-header.menu-open .mobile-menu-toggle {
			position: fixed;
			right: 2rem;
			top: 1.5rem;
		}
	}

	@media (max-width: 768px) {
		.site-header {
			padding: 1rem;
		}

		.site-header.menu-open {
			padding: 1rem;
		}

		.logo.menu-open {
			left: 1rem;
			top: 1rem;
		}

		.site-header.menu-open .mobile-menu-toggle {
			right: 1rem;
			top: 1rem;
		}
	}
</style>

