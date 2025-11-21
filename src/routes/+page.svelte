<script>
	import Header from '$lib/components/Header.svelte';
	import Hero from '$lib/components/Hero.svelte';
	import Motto from '$lib/components/Motto.svelte';
	import SponsorsCarousel from '$lib/components/SponsorsCarousel.svelte';
	import About from '$lib/components/About.svelte';
	import FirstAge from '$lib/components/FirstAge.svelte';
	import VexFeature from '$lib/components/VexFeature.svelte';
	import EmpowerTechCard from '$lib/components/EmpowerTechCard.svelte';
	import RobokidsCard from '$lib/components/RobokidsCard.svelte';
	import Events from '$lib/components/Events.svelte';
	import CommunityProjects from '$lib/components/CommunityProjects.svelte';
	import CTA from '$lib/components/CTA.svelte';
</script>

<main>
	<Header />
	<Hero 
		title="10951"
		subtitle="SSIS Dragons"
		body="Pioneering FIRST Robotics in Vietnam, Team 10951 presents Saigon South International School's state-of-the-art technology and talent"
		bgImage="hero.webp"
		bgAlt=""
	/>
	<Motto />
	<SponsorsCarousel />
	<About />
	<FirstAge />

	<!-- STEM Community Section: Card-based layout -->
	<section class="stem-community">
		<h2 class="stem-community-heading">STEM Community</h2>
		<div class="stem-community-content">
			<!-- Feature Cards Section: asymmetric grid -->
			<div class="features-grid">
				<div class="left">
					<VexFeature />
				</div>
				<div class="right">
					<div class="quarter-top">
						<EmpowerTechCard />
					</div>
					<div class="quarter-bottom">
						<RobokidsCard />
					</div>
				</div>
			</div>
		</div>
	</section>

	<CommunityProjects />
	<Events />
	<CTA />
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
		gap: 0;
		margin: 0;
		padding: 0;
		width: 100%;
		border: none;
		border-radius: 8px;
		overflow: hidden;
	}

	.features-grid :global(section) {
		margin: 0 !important;
	}

	.left {
		grid-column: 1;
		margin: 0;
		padding: 0;
		border-radius: 8px 0 0 8px;
		overflow: hidden;
	}

	.right {
		grid-column: 2;
		display: grid;
		grid-template-rows: 1fr 1fr;
		margin: 0;
		padding: 0;
		gap: 0;
		border-radius: 0 8px 8px 0;
		overflow: hidden;
	}

	.quarter-top {
		grid-row: 1;
		margin: 0;
		padding: 0;
		border-radius: 0 8px 0 0;
		overflow: hidden;
	}

	.quarter-bottom {
		grid-row: 2;
		margin: 0;
		padding: 0;
		border-radius: 0 0 8px 0;
		overflow: hidden;
	}

	@media (max-width: 968px) {
		.features-grid {
			grid-template-columns: 1fr;
			min-height: auto;
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
			gap: 0;
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
