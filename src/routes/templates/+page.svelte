<!--
	TEMPLATES SHOWCASE PAGE
	Route: /templates
	Description: Showcase of reusable template components for building pages
-->
<script lang="ts">
	import TemplateHero from '$lib/components/templates/TemplateHero.svelte';
	import TemplateFeatureGrid from '$lib/components/templates/TemplateFeatureGrid.svelte';
	import TemplateStats from '$lib/components/templates/TemplateStats.svelte';
	import TemplateTestimonials from '$lib/components/templates/TemplateTestimonials.svelte';
	import TemplateImageText from '$lib/components/templates/TemplateImageText.svelte';
	import TemplatePricing from '$lib/components/templates/TemplatePricing.svelte';
	import TemplateCTA from '$lib/components/templates/TemplateCTA.svelte';
	import TemplateGallery from '$lib/components/templates/TemplateGallery.svelte';
	import type { ComponentType } from 'svelte';

	let activeSection: string = 'all';
	const sections: Array<{ id: string; name: string; component: ComponentType }> = [
		{ id: 'hero', name: 'Hero', component: TemplateHero },
		{ id: 'features', name: 'Features', component: TemplateFeatureGrid },
		{ id: 'stats', name: 'Stats', component: TemplateStats },
		{ id: 'testimonials', name: 'Testimonials', component: TemplateTestimonials },
		{ id: 'image-text', name: 'Image + Text', component: TemplateImageText },
		{ id: 'pricing', name: 'Pricing', component: TemplatePricing },
		{ id: 'gallery', name: 'Gallery', component: TemplateGallery },
		{ id: 'cta', name: 'CTA', component: TemplateCTA }
	];

	function filterSections(id: string): void {
		activeSection = id;
		if (id !== 'all') {
			const element = document.getElementById(id);
			if (element) {
				element.scrollIntoView({ behavior: 'smooth', block: 'start' });
			}
		}
	}
</script>

<main class="templates-page">
	<div class="page-header">
		<div class="container">
			<h1>Template Components</h1>
			<p>Browse and copy reusable section templates for your website</p>
		</div>
	</div>

	<div class="navigation-bar">
		<div class="container">
			<button
				class="nav-button"
				class:active={activeSection === 'all'}
				on:click={() => (activeSection = 'all')}
			>
				All Sections
			</button>
			{#each sections as section}
				<button
					class="nav-button"
					class:active={activeSection === section.id}
					on:click={() => filterSections(section.id)}
				>
					{section.name}
				</button>
			{/each}
		</div>
	</div>

	<div class="templates-container">
		{#if activeSection === 'all'}
			{#each sections as section}
				<div class="template-section" id={section.id}>
					<div class="section-label">
						<h2>{section.name} Section</h2>
						<p>Component: {section.component.name}</p>
					</div>
					<svelte:component this={section.component} />
				</div>
			{/each}
		{:else}
			{#each sections.filter((s) => s.id === activeSection) as section}
				<div class="template-section" id={section.id}>
					<div class="section-label">
						<h2>{section.name} Section</h2>
						<p>Component: {section.component.name}</p>
					</div>
					<svelte:component this={section.component} />
				</div>
			{/each}
		{/if}
	</div>

	<div class="info-section">
		<div class="container">
			<h2>How to Use</h2>
			<div class="info-grid">
				<div class="info-card">
					<h3>1. Browse Templates</h3>
					<p>Scroll through the sections above to see all available template components.</p>
				</div>
				<div class="info-card">
					<h3>2. Copy Component</h3>
					<p>
						Navigate to <code>src/lib/components/templates/</code> and copy the component
						file you need.
					</p>
				</div>
				<div class="info-card">
					<h3>3. Customize</h3>
					<p>Replace placeholder content and images with your actual content.</p>
				</div>
				<div class="info-card">
					<h3>4. Import & Use</h3>
					<p>Import the component in your page and add it to your layout.</p>
				</div>
			</div>
		</div>
	</div>
</main>

<style>
	.templates-page {
		background: #f8f8f8;
		min-height: 100vh;
	}

	.page-header {
		background: linear-gradient(135deg, #1a1a1a 0%, #2d2d2d 100%);
		color: white;
		padding: 4rem 2rem;
		text-align: center;
	}

	.page-header h1 {
		font-size: 2.5rem;
		font-weight: 300;
		margin: 0 0 1rem 0;
	}

	.page-header p {
		font-size: 1.2rem;
		line-height: 1.8;
		color: rgba(255, 255, 255, 0.9);
		margin: 0;
	}

	.navigation-bar {
		background: white;
		padding: 1.5rem 2rem;
		box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
		position: sticky;
		top: 0;
		z-index: 100;
	}

	.navigation-bar .container {
		display: flex;
		gap: 0.5rem;
		flex-wrap: wrap;
		justify-content: center;
	}

	.nav-button {
		padding: 0.75rem 1.5rem;
		background: #f8f8f8;
		border: 2px solid transparent;
		border-radius: 4px;
		cursor: pointer;
		font-size: 0.95rem;
		font-weight: 500;
		color: #666;
		transition: all 0.3s ease;
	}

	.nav-button:hover {
		background: #e5e5e5;
		color: #333;
	}

	.nav-button.active {
		background: #333;
		color: white;
		border-color: #333;
	}

	.templates-container {
		padding: 2rem 0;
	}

	.template-section {
		margin-bottom: 4rem;
		background: white;
		border-radius: 8px;
		overflow: hidden;
		box-shadow: 0 6px 18px rgba(0, 0, 0, 0.06);
		margin-left: 2rem;
		margin-right: 2rem;
	}

	.section-label {
		background: #f8f8f8;
		padding: 1.5rem 2rem;
		border-bottom: 1px solid #e5e5e5;
	}

	.section-label h2 {
		font-size: 1.5rem;
		font-weight: 300;
		margin: 0 0 0.5rem 0;
		color: #333;
	}

	.section-label p {
		font-size: 0.9rem;
		color: #666;
		margin: 0;
		font-family: 'Courier New', monospace;
	}

	.info-section {
		background: white;
		padding: 4rem 2rem;
		margin-top: 4rem;
	}

	.info-section h2 {
		font-size: 2.5rem;
		font-weight: 300;
		text-align: center;
		margin: 0 0 3rem 0;
		color: #333;
	}

	.info-grid {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
		gap: 1.5rem;
	}

	.info-card {
		background: #f8f8f8;
		padding: 2rem;
		border-radius: 8px;
		box-shadow: 0 6px 18px rgba(0, 0, 0, 0.06);
	}

	.info-card h3 {
		font-size: 1.3rem;
		font-weight: 300;
		margin: 0 0 1rem 0;
		color: #333;
	}

	.info-card p {
		font-size: 1.1rem;
		line-height: 1.8;
		color: #555;
		margin: 0;
	}

	.info-card code {
		background: #e5e5e5;
		padding: 0.2rem 0.5rem;
		border-radius: 4px;
		font-size: 0.9rem;
		font-family: 'Courier New', monospace;
		color: #333;
	}

	@media (max-width: 968px) {
		.page-header {
			padding: 3rem 1.5rem;
		}

		.page-header h1 {
			font-size: 2rem;
		}

		.page-header p {
			font-size: 1rem;
		}

		.info-section h2 {
			font-size: 2rem;
		}
	}

	@media (max-width: 768px) {
		.navigation-bar {
			padding: 1rem;
		}

		.nav-button {
			padding: 0.5rem 1rem;
			font-size: 0.85rem;
		}

		.template-section {
			margin-left: 1rem;
			margin-right: 1rem;
		}

		.info-section {
			padding: 3rem 1.5rem;
		}
	}
</style>

