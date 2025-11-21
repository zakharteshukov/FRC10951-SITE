<script lang="ts">
	import '../app.css';
	import Footer from '$lib/components/Footer.svelte';
	interface Props {
		children?: import('svelte').Snippet;
	}

	let { children }: Props = $props();
</script>

{@render children?.()}
<Footer />
<style>
	:global(body) {
		margin: 0;
		padding: 0;
		background: white;
		color: #333;
	}
</style>

