<!--
	ROOT LAYOUT
	This layout wraps all pages in the application.
	It includes:
	- Global CSS imports
	- Header component (shown on all pages)
	- Footer component (shown on all pages)
	- Page content is injected via <slot />
-->
<script>
	import '../app.css';
	import Header from '$lib/components/layout/Header.svelte';
	import Footer from '$lib/components/layout/Footer.svelte';
</script>

<Header />
<slot />
<Footer />
