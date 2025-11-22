<script>
	import Header from '$lib/components/Header.svelte';
	import Hero from '$lib/components/Hero.svelte';
	import Motto from '$lib/components/Motto.svelte';
	import SponsorsCarousel from '$lib/components/SponsorsCarousel.svelte';
	import { onMount } from 'svelte';

	// Lazy load below-the-fold components
	/** @type {typeof import('$lib/components/About.svelte').default | null} */
	let About = null;
	/** @type {typeof import('$lib/components/FirstAge.svelte').default | null} */
	let FirstAge = null;
	/** @type {typeof import('$lib/components/VexFeature.svelte').default | null} */
	let VexFeature = null;
	/** @type {typeof import('$lib/components/EmpowerTechCard.svelte').default | null} */
	let EmpowerTechCard = null;
	/** @type {typeof import('$lib/components/RobokidsCard.svelte').default | null} */
	let RobokidsCard = null;
	/** @type {typeof import('$lib/components/Events.svelte').default | null} */
	let Events = null;
	/** @type {typeof import('$lib/components/CommunityProjects.svelte').default | null} */
	let CommunityProjects = null;
	/** @type {typeof import('$lib/components/CTA.svelte').default | null} */
	let CTA = null;
	let componentsLoaded = false;

	onMount(async () => {
		// Load components after initial render
		const [
			AboutModule,
			FirstAgeModule,
			VexFeatureModule,
			EmpowerTechCardModule,
			RobokidsCardModule,
			EventsModule,
			CommunityProjectsModule,
			CTAModule
		] = await Promise.all([
			import('$lib/components/About.svelte'),
			import('$lib/components/FirstAge.svelte'),
			import('$lib/components/VexFeature.svelte'),
			import('$lib/components/EmpowerTechCard.svelte'),
			import('$lib/components/RobokidsCard.svelte'),
			import('$lib/components/Events.svelte'),
			import('$lib/components/CommunityProjects.svelte'),
			import('$lib/components/CTA.svelte')
		]);

		About = AboutModule.default;
		FirstAge = FirstAgeModule.default;
		VexFeature = VexFeatureModule.default;
		EmpowerTechCard = EmpowerTechCardModule.default;
		RobokidsCard = RobokidsCardModule.default;
		Events = EventsModule.default;
		CommunityProjects = CommunityProjectsModule.default;
		CTA = CTAModule.default;
		componentsLoaded = true;
	});
</script>

<main>
	<Header />
	<Hero />
	<Motto />
	<SponsorsCarousel />
	{#if componentsLoaded}
		<svelte:component this={About} />
		<svelte:component this={FirstAge} />

		<!-- STEM Community Section: Card-based layout -->
		<section class="stem-community">
			<h2 class="stem-community-heading">STEM Community</h2>
			<div class="stem-community-content">
				<!-- Feature Cards Section: asymmetric grid -->
				<div class="features-grid">
					<div class="left">
						<svelte:component this={VexFeature} />
					</div>
					<div class="right">
						<div class="quarter-top">
							<svelte:component this={EmpowerTechCard} />
						</div>
						<div class="quarter-bottom">
							<svelte:component this={RobokidsCard} />
						</div>
					</div>
				</div>
			</div>
		</section>

		<svelte:component this={CommunityProjects} />
		<svelte:component this={Events} />
		<svelte:component this={CTA} />
	{/if}
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
		min-height: 500px;
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
			min-height: auto;
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
		background: white;
		border-radius: 12px;
		box-shadow: 0 6px 18px rgba(0, 0, 0, 0.06);
		margin: 4rem auto;
		padding: 3rem 2rem;
		max-width: 95%;
		width: 100%;
		transition: box-shadow 0.3s ease, transform 0.3s ease;
	}

	.stem-community:hover {
		box-shadow: 0 12px 32px rgba(0, 0, 0, 0.1);
		transform: translateY(-2px);
	}

	.stem-community-heading {
		font-size: 2.5rem;
		font-weight: 300;
		text-align: center;
		margin: 0 0 3rem 0;
		color: #333;
		padding: 0;
	}

	.stem-community-content {
		width: 100%;
	}

	@media (max-width: 768px) {
		.stem-community {
			margin: 3rem auto;
			padding: 2rem 1.5rem;
			border-radius: 8px;
		}

		.stem-community-heading {
			font-size: 2rem;
			margin-bottom: 2rem;
		}
	}
</style>
