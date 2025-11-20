<script lang="ts">
	export interface Props {
		title: string;
		subtitle?: string;
		body: string;
	}

	const { title, subtitle, body }: Props = $props();
</script>

<div
	class="10951-hero flex min-h-screen w-screen flex-col items-center justify-center bg-blue-100 p-10"
>
	<h1 class="text-8xl">{title}</h1>

	{#if subtitle}
		<span class="text-3xl">{subtitle}</span>
	{/if}

	<p>
		{body}
	</p>
</div>
