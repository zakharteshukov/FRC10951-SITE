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
	import FullSteamAhead from '$lib/components/FullSteamAhead.svelte';
	import CommunityProjects from '$lib/components/CommunityProjects.svelte';
</script>

<main>
	<Header />
	<Hero />
	<Motto />
	<SponsorsCarousel />
	<About />
	<FirstAge />

	<!-- Feature Cards Section: asymmetric grid -->
	<section class="features-grid">
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
	</section>

	<FullSteamAhead />
	<CommunityProjects />
</main>

<style>
	main {
		overflow-x: hidden;
		position: relative;
		background: white;
	}

	.features-grid {
		display: grid;
		grid-template-columns: 1fr 1fr;
		min-height: 500px;
		background: white;
	}

	.left {
		grid-column: 1;
	}

	.right {
		grid-column: 2;
		display: grid;
		grid-template-rows: 1fr 1fr;
	}

	.quarter-top {
		grid-row: 1;
	}

	.quarter-bottom {
		grid-row: 2;
	}

	@media (max-width: 968px) {
		.features-grid {
			grid-template-columns: 1fr;
		}

		.right {
			grid-column: 1;
		}
	}
</style>
