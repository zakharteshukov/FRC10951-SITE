<script>
	import { fade } from 'svelte/transition';

	const navItems = ['SSIS', 'Team', 'Media', 'Outreach', 'Our Projects', 'Contact'];
</script>

<header class="site-header" transition:fade={{ duration: 500 }}>
	<div class="logo">FRC10951</div>
	<nav>
		{#each navItems as item}
			<a href="#" class="nav-link">{item}</a>
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
	}

	nav {
		display: flex;
		gap: 2rem;
		align-items: center;
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

		nav {
			gap: 1rem;
		}

		.nav-link {
			font-size: 0.85rem;
		}
	}
</style>

