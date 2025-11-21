<script lang="ts">
	export interface Props {
		title: string;
		subtitle?: string;
		body: string;
	}

	const { title, subtitle, body }: Props = $props();
</script>

<div
	class="ssis-hero flex min-h-[90vh] w-screen flex-col items-center justify-center gap-2 bg-blue-100 p-10 text-center text-balance"
>
	<h1 class="ssis-hero-header font-extrabold">{title}</h1>

	{#if subtitle}
		<span class="font-mono text-2xl">{subtitle}</span>
	{/if}

	<p class="max-w-[40ch] text-2xl">
		{body}
	</p>
</div>

<style>
	.ssis-hero {
		--font-size: calc(10vw + 5rem);
		font-size: var(--font-size);
		line-height: calc(var(--font-size) * 1.2);
	}
</style>
