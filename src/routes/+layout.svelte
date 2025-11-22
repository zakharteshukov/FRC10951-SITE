<!--
	ROOT LAYOUT
	This layout wraps all pages in the application.
	It includes:
	- Global CSS imports
	- Footer component (shown on all pages)
	- Page content is injected via <slot />
-->
<script>
	import '../app.css';
	import Footer from '$lib/components/Footer.svelte';
</script>

<slot />
<Footer />

<style>
	:global(body) {
		margin: 0;
		padding: 0;
		background: white;
		color: #333;
	}
</style>
