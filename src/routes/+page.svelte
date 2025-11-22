<!--
	HOMEPAGE - Main Landing Page
	Route: / (root)
	This is the homepage of the website, featuring:
	- Hero section with team branding
	- Sponsors carousel
	- About section
	- STEM community showcase
	- Events calendar
	- Community projects
	- Call-to-action section
-->
<script lang="ts">
	import Hero from '$lib/components/Hero.svelte';
	import Motto from '$lib/components/Motto.svelte';
	import SponsorsCarousel from '$lib/components/SponsorsCarousel.svelte';
	import { onMount } from 'svelte';
	import { createLazyComponentLoader } from '$lib/utils/componentLoader';
	import type { ComponentType } from 'svelte';

	// Lazy load below-the-fold components with Intersection Observer
	let About: ComponentType | null = null;
	let FirstAge: ComponentType | null = null;
	let VexFeature: ComponentType | null = null;
	let EmpowerTechCard: ComponentType | null = null;
	let RobokidsCard: ComponentType | null = null;
	let Events: ComponentType | null = null;
	let CommunityProjects: ComponentType | null = null;
	let CTA: ComponentType | null = null;

	let aboutElement: HTMLElement | null = null;
	let firstAgeElement: HTMLElement | null = null;
	let vexFeatureElement: HTMLElement | null = null;
	let empowerTechElement: HTMLElement | null = null;
	let robokidsElement: HTMLElement | null = null;
	let eventsElement: HTMLElement | null = null;
	let communityProjectsElement: HTMLElement | null = null;
	let ctaElement: HTMLElement | null = null;

	onMount(() => {
		const cleanup: (() => void)[] = [];

		// Load components when they're about to be visible
		cleanup.push(
			createLazyComponentLoader(() => import('$lib/components/About.svelte')).load(
				aboutElement,
				(component) => {
					About = component;
				}
			)
		);

		cleanup.push(
			createLazyComponentLoader(() => import('$lib/components/FirstAge.svelte')).load(
				firstAgeElement,
				(component) => {
					FirstAge = component;
				}
			)
		);

		cleanup.push(
			createLazyComponentLoader(() => import('$lib/components/VexFeature.svelte')).load(
				vexFeatureElement,
				(component) => {
					VexFeature = component;
				}
			)
		);

		cleanup.push(
			createLazyComponentLoader(() => import('$lib/components/EmpowerTechCard.svelte')).load(
				empowerTechElement,
				(component) => {
					EmpowerTechCard = component;
				}
			)
		);

		cleanup.push(
			createLazyComponentLoader(() => import('$lib/components/RobokidsCard.svelte')).load(
				robokidsElement,
				(component) => {
					RobokidsCard = component;
				}
			)
		);

		cleanup.push(
			createLazyComponentLoader(() => import('$lib/components/Events.svelte')).load(
				eventsElement,
				(component) => {
					Events = component;
				}
			)
		);

		cleanup.push(
			createLazyComponentLoader(() => import('$lib/components/CommunityProjects.svelte')).load(
				communityProjectsElement,
				(component) => {
					CommunityProjects = component;
				}
			)
		);

		cleanup.push(
			createLazyComponentLoader(() => import('$lib/components/CTA.svelte')).load(
				ctaElement,
				(component) => {
					CTA = component;
				}
			)
		);

		return () => {
			cleanup.forEach((fn) => fn());
		};
	});
</script>

<main>
	<Hero />
	<Motto />
	<SponsorsCarousel />
	
	<div bind:this={aboutElement}>
		{#if About}
			<svelte:component this={About} />
		{/if}
	</div>
	
	<div bind:this={firstAgeElement}>
		{#if FirstAge}
			<svelte:component this={FirstAge} />
		{/if}
	</div>

	<!-- STEM Community Section: Card-based layout -->
	<section class="stem-community" bind:this={vexFeatureElement}>
		<h2 class="stem-community-heading">STEM Community</h2>
		<div class="stem-community-content">
			<!-- Feature Cards Section: asymmetric grid -->
			<div class="features-grid">
				<div class="left">
					{#if VexFeature}
						<svelte:component this={VexFeature} />
					{/if}
				</div>
				<div class="right">
					<div class="quarter-top" bind:this={empowerTechElement}>
						{#if EmpowerTechCard}
							<svelte:component this={EmpowerTechCard} />
						{/if}
					</div>
					<div class="quarter-bottom" bind:this={robokidsElement}>
						{#if RobokidsCard}
							<svelte:component this={RobokidsCard} />
						{/if}
					</div>
				</div>
			</div>
		</div>
	</section>

	<div bind:this={communityProjectsElement}>
		{#if CommunityProjects}
			<svelte:component this={CommunityProjects} />
		{/if}
	</div>
	
	<div bind:this={eventsElement}>
		{#if Events}
			<svelte:component this={Events} />
		{/if}
	</div>
	
	<div bind:this={ctaElement}>
		{#if CTA}
			<svelte:component this={CTA} />
		{/if}
	</div>
</main>

<style>
	main {
		overflow-x: hidden;
		position: relative;
		background: white;
		margin: 0;
		padding: 0;
		width: 100%;
	}

	.features-grid {
		display: grid;
		grid-template-columns: 1fr 1fr;
		min-height: 650px; /* Reduced by 5% from 680px (680 * 0.95 = 646, rounded to 650) */
		height: calc(100vh - 120px); /* 100vh minus heading height and margins */
		background: transparent;
		gap: 1.5rem;
		margin: 0;
		padding: 0;
		width: 100%;
		border: none;
		border-radius: 8px;
		overflow: visible;
	}

	.features-grid :global(section) {
		margin: 0 !important;
	}

	.left {
		grid-column: 1;
		margin: 0;
		padding: 0;
		border-radius: 8px;
		overflow: hidden;
	}

	.right {
		grid-column: 2;
		display: grid;
		grid-template-rows: 1fr 1fr;
		margin: 0;
		padding: 0;
		gap: 1.5rem;
		border-radius: 8px;
		overflow: visible;
	}

	.quarter-top {
		grid-row: 1;
		margin: 0;
		padding: 0;
		border-radius: 8px;
		overflow: hidden;
	}

	.quarter-bottom {
		grid-row: 2;
		margin: 0;
		padding: 0;
		border-radius: 8px;
		overflow: hidden;
	}

	@media (max-width: 968px) {
		.features-grid {
			grid-template-columns: 1fr;
			min-height: 650px; /* Reduced by 5% from 680px */
			height: calc(100vh - 100px); /* Adjust for smaller heading on mobile */
			gap: 1.5rem;
		}

		.left {
			grid-column: 1;
		}

		.right {
			grid-column: 1;
		}
	}

	@media (max-width: 480px) {
		.features-grid {
			gap: 1rem;
		}

		.right {
			gap: 1rem;
		}
	}

	.stem-community {
		margin: 0 auto;
		max-width: 95%;
		width: 100%;
		height: 100vh;
		display: flex;
		flex-direction: column;
		justify-content: center;
		padding: 2rem 0;
	}

	.stem-community-heading {
		font-size: 2.5rem;
		font-weight: 300;
		text-align: center;
		margin: 0 0 2rem 0;
		color: #333;
		padding: 0;
		flex-shrink: 0;
	}

	.stem-community-content {
		width: 100%;
		flex: 1;
		display: flex;
		align-items: stretch;
	}

	@media (max-width: 768px) {
		.stem-community {
			margin: 0 auto;
			padding: 1.5rem 0;
		}

		.stem-community-heading {
			font-size: 2rem;
			margin-bottom: 1.5rem;
		}

		.features-grid {
			height: calc(100vh - 90px); /* Adjust for mobile heading */
		}
	}
</style>
