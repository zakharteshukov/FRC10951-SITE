Here’s an expanded, styling-aware, Svelte-friendly structural outline of your site. Clean, hierarchical, and now incorporating all the UI/UX behavior and component details you requested.

---

# **Website Wire-Frame Structure (with Styling + Layout Details)**

---

## **1. Header (Non-Sticky, Transparent)**

- Component: `<Header />`
- Positioning:
  - **Non-sticky** (scrolls away naturally)
  - **Transparent background**
  - Svelte transition on load (fade)

- Left: **FRC10951** logo / text
- Right Navigation (inline):
  - SSIS
  - Team
  - Media
  - Outreach
  - Our Projects
  - Contact

- Hover styling: subtle underline animation
- Font: clean, geometric sans-serif

---

## **2. Hero Section (Darkened Background Image)**

- Component: `<Hero />`
- Full-width, full-height section
- Background:
  - High-resolution team skyline photo
  - **Brightness reduced ~50%** with CSS filter overlay
  - Optional subtle parallax

- Centered content:
  - Huge Team Number: **10951**
  - Subtext: **Saigon South Dragons**
  - Microtext: competition + school representation

- Typography:
  - Large bold numeric font for “10951”
  - Modern, slightly rounded sans for subtext

- Margin above = 0 (header floats over hero due to transparency)

---

## **3. Motto Section**

- Component: `<Motto />`
- Minimalist layout
- Title: “motto”
- Text: **Lorem ipsum lorem ipsum** (placeholder)
- Background: plain white
- Horizontal divider above + below

---

## **4. Sponsors Section (Rotating Carousel)**

- Component: `<SponsorsCarousel />`
- Layout:
  - Slideshow of placeholder sponsor images (SVG rectangles)
  - **Rotates automatically every 10 seconds**
  - Angle-bracket arrow buttons (left & right)
  - Smooth fade transition between images

- Optional:
  - Auto-play pauses on hover
  - Progress indicator dots

- Background: subtle gray tint

---

## **5. About the Team Section**

- Component: `<About />`
- Left: text block describing the team
- Right: large rectangular **team photo**
- Below-left:
  - Statistic: **67 Students**

- Typography: handwritten-style headlines (to match wire-frame theme)

---

## **6. FIRST Age Section**

- Component: `<FirstAge />`
- Title: **FIRST Age**
- Subheading: **2025–26**
- Decorative “AGE” heading on the right
- Buttons:
  - [ Read More ]
  - [ Past Seasons ]

- Layout: two-column split

---

## **7. Feature Cards Section (Custom Asymmetric Layout)**

### **Grid Structure:**

- Left half: **VEX** card
- Right half: split vertically into:
  - Top-right quarter: **EmpowerTech**
  - Bottom-right quarter: **RoboKids**

### **7.1 VEX Card (Full Left Half)**

- Component: `<VexFeature />`
- Large panel
- Contains:
  - “1599W”
  - Subtext: “cycles between all the teams”
  - VEX logo
  - Photo placeholder
  - Buttons:
    - Learn more
    - Past Reasons 2

- Background: light textured pattern

### **7.2 EmpowerTech Card (Top Right Quarter)**

- Component: `<EmpowerTechCard />`
- Photo placeholder
- Short description
- Button: Learn more

### **7.3 RoboKids Card (Bottom Right Quarter)**

- Component: `<RobokidsCard />`
- Photo placeholder
- Short description
- Button: Learn more

---

## **8. Full STEAM Ahead Section (Standalone Block)**

- Component: `<FullSteamAhead />`
- Full-width section
- Background:
  - **Placeholder background image** with soft blur

- Left-aligned text:
  - Title: “Full STEAM Ahead”
  - Description placeholder
  - Button: Learn more

- Right:
  - Large circular decorative image or logo

---

## **9. Community Projects Section**

- Component: `<CommunityProjects />`
- Title centered: **Community Projects**
- Card layout (Svelte grid):
  - About Projects (overview text)
  - Card: Project 1
  - Card: Project 2
  - Card: Project 3

- Each card:
  - White background
  - Soft shadow
  - Hover elevation animation

- Bottom: Button → “View all projects”

---

## **10. Footer (Efficient Svelte Design)**

- Component: `<Footer />`
- Minimalist, compact grid layout
- Sections:
  - Saigon South Dragons branding
  - Address block
  - Robotics subteam list (FRC, VEX, STEM Community, etc.)
  - 10951 Teams list (Team, Media, Contact)
  - VEX teams list
  - Projects list
  - Social icons (X / Instagram / YouTube), compact and aligned

- Styling:
  - Very clean Svelte component design
  - Small text, zero clutter
  - Soft separators, no heavy blocks
  - Works flawlessly in dark and light mode

---

## **Framework Notes**

- Entire site implemented in **Svelte** (recommended: SvelteKit)
- Optimized for:
  - Aesthetic responsiveness
  - Smooth transitions (fade, slide, scale)
  - Minimal bundle size
  - Reusable component-based architecture

---

If you'd like, I can also convert this into a **developer-ready component tree**, a **SvelteKit folder structure**, or generate **production-level Svelte components** for each section.

# Project: Saigon South Dragons — SvelteKit Starter

This document contains a developer-ready component tree, SvelteKit folder structure, and production-ready starter Svelte components for the wireframe you provided. The hero uses the uploaded image at: `/mnt/data/Screenshot 2025-11-20 at 19.09.14.png`.

---

## File tree (recommended)

```
project-root/
├─ package.json
├─ svelte.config.js
├─ static/
│  └─ assets/ (optional global images)
├─ src/
│  ├─ app.css
│  ├─ lib/
│  │  ├─ components/
│  │  │  ├─ Header.svelte
│  │  │  ├─ Hero.svelte
│  │  │  ├─ Motto.svelte
│  │  │  ├─ SponsorsCarousel.svelte
│  │  │  ├─ About.svelte
│  │  │  ├─ FirstAge.svelte
│  │  │  ├─ VexFeature.svelte
│  │  │  ├─ EmpowerTechCard.svelte
│  │  │  ├─ RobokidsCard.svelte
│  │  │  ├─ FullSteamAhead.svelte
│  │  │  ├─ CommunityProjects.svelte
│  │  │  └─ Footer.svelte
│  │  └─ stores/
│  │     └─ carousel.js
│  ├─ routes/
│  │  └─ +page.svelte
│  └─ styles/
│     └─ variables.css
└─ README.md
```

---

## package.json (snippet)

```json
{
	"name": "saigon-south-dragons",
	"version": "0.1.0",
	"private": true,
	"scripts": {
		"dev": "svelte-kit dev",
		"build": "svelte-kit build",
		"preview": "svelte-kit preview"
	},
	"dependencies": {
		"svelte": "^4.0.0",
		"@sveltejs/kit": "next",
		"svelte-carousel": "^1.0.0" /* optional */
	}
}
```

---

## src/routes/+page.svelte

```svelte
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
	import Footer from '$lib/components/Footer.svelte';
</script>

<Header />
<main>
	<Hero />
	<Motto />
	<SponsorsCarousel />
	<About />
	<section class="first-age-wrap"><FirstAge /></section>

	<!-- Feature Cards Section: asymmetric grid -->
	<section class="features-grid">
		<div class="left"><VexFeature /></div>
		<div class="right">
			<div class="quarter-top"><EmpowerTechCard /></div>
			<div class="quarter-bottom"><RobokidsCard /></div>
		</div>
	</section>

	<FullSteamAhead />
	<CommunityProjects />
</main>

<Footer />

<style src="$lib/../app.css"></style>
```

---

## src/lib/components/Header.svelte

```svelte
<script>
	export let nav = ['SSIS', 'Team', 'Media', 'Outreach', 'Our Projects', 'Contact'];
</script>

<header class="site-header">
	<div class="logo">FRC10951</div>
	<nav>
		{#each nav as item}
			<a href="#" class="nav-link">{item}</a>
		{/each}
	</nav>
</header>

<style>
	.site-header {
		display: flex;
		justify-content: space-between;
		align-items: center;
		padding: 1rem 2rem;
		background: transparent; /* requested: transparent */
		position: relative; /* non-sticky */
	}
	.nav-link {
		margin-left: 1.2rem;
		text-decoration: none;
		position: relative;
	}
	.nav-link:hover::after {
		content: '';
		position: absolute;
		height: 2px;
		background: currentColor;
		left: 0;
		right: 0;
		bottom: -4px;
	}
</style>
```

---

## src/lib/components/Hero.svelte

```svelte
<script>
	// local path to uploaded image
	const heroImage = '/mnt/data/Screenshot 2025-11-20 at 19.09.14.png';
</script>

<section class="hero">
	<div class="hero-bg" style="background-image: url('{heroImage}');"></div>
	<div class="hero-content">
		<h1 class="team-number">10951</h1>
		<h2 class="team-name">Saigon South Dragons</h2>
		<p class="micro">
			Competing in FIRST Robotics Competition, representing Saigon South International School
		</p>
	</div>
</section>

<style>
	.hero {
		position: relative;
		height: 78vh;
		display: flex;
		align-items: center;
		justify-content: center;
		color: white;
	}
	.hero-bg {
		position: absolute;
		inset: 0;
		background-size: cover;
		background-position: center;
		filter: brightness(40%);
		z-index: 0;
	}
	.hero-content {
		position: relative;
		z-index: 1;
		text-align: center;
	}
	.team-number {
		font-size: 9rem;
		margin: 0;
		font-weight: 800;
		letter-spacing: 5px;
	}
	.team-name {
		font-size: 2rem;
		margin: 0;
	}
	.micro {
		font-size: 0.9rem;
		opacity: 0.9;
	}
</style>
```

Notes: hero image path uses the uploaded image at `/mnt/data/Screenshot 2025-11-20 at 19.09.14.png`. Background brightness reduced to ~40%.

---

## src/lib/components/Motto.svelte

```svelte
<section class="motto">
	<h3>motto</h3>
	<p>Lorem ipsum lorem ipsum</p>
</section>

<style>
	.motto {
		padding: 2rem;
		text-align: center;
		border-top: 1px solid #eee;
		border-bottom: 1px solid #eee;
	}
</style>
```

---

## src/lib/stores/carousel.js

```js
import { writable } from 'svelte/store';

export const currentIndex = writable(0);
export const autoRotate = true;
export const rotateInterval = 10000; // 10s
```

---

## src/lib/components/SponsorsCarousel.svelte

```svelte
<script>
	import { onMount, onDestroy } from 'svelte';
	import { currentIndex, rotateInterval } from '$lib/stores/carousel';
	import { tick } from 'svelte';
	let i = 0;
	const slides = [
		'/mnt/data/Sponsor-placeholder-1.png',
		'/mnt/data/Sponsor-placeholder-2.png',
		'/mnt/data/Sponsor-placeholder-3.png',
	];
	let timer;

	function go(n) {
		i = (n + slides.length) % slides.length;
		currentIndex.set(i);
	}

	onMount(() => {
		timer = setInterval(() => {
			go(i + 1);
		}, rotateInterval);
	});
	onDestroy(() => clearInterval(timer));
</script>

<section class="sponsors">
	<div class="carousel">
		{#each slides as s, idx}
			<img src={s} alt="sponsor" class:active={idx === i} />
		{/each}
		<button class="nav left" on:click={() => go(i - 1)}>&lt;</button>
		<button class="nav right" on:click={() => go(i + 1)}>&gt;</button>
	</div>
</section>

<style>
	.sponsors {
		padding: 1.5rem;
		text-align: center;
	}
	.carousel {
		position: relative;
		display: inline-block;
		width: 70%;
		height: 120px;
		overflow: hidden;
	}
	.carousel img {
		position: absolute;
		inset: 0;
		margin: auto;
		width: auto;
		height: 100%;
		opacity: 0;
		transition: opacity 0.6s;
	}
	.carousel img.active {
		opacity: 1;
	}
	.nav {
		position: absolute;
		top: 50%;
		transform: translateY(-50%);
		background: transparent;
		border: none;
		font-size: 1.3rem;
		padding: 0.3rem;
	}
	.nav.left {
		left: 0;
	}
	.nav.right {
		right: 0;
	}
</style>
```

Notes: the carousel auto-rotates every 10 seconds and has arrow controls; placeholder sponsor image paths should be replaced with real assets or served from `static/`.

---

## src/lib/components/About.svelte

```svelte
<section class="about">
	<div class="text">
		<p>Team 10951 is ... (replace with real copy)</p>
		<div class="stat">67<br /><small>Students</small></div>
	</div>
	<div class="photo">
		<img src="/mnt/data/Screenshot 2025-11-20 at 19.09.14.png" alt="team photo" />
	</div>
</section>

<style>
	.about {
		display: grid;
		grid-template-columns: 1fr 420px;
		gap: 1rem;
		padding: 2rem;
	}
	.about img {
		width: 100%;
		height: auto;
		border-radius: 6px;
	}
	.stat {
		font-size: 3rem;
		font-weight: 700;
	}
</style>
```

---

## src/lib/components/FirstAge.svelte

```svelte
<section class="first-age">
	<div class="meta">
		<div class="year">2025–26</div>
		<h3>FIRST Age</h3>
		<div class="cta"><button>Read more</button><button>Past Seasons</button></div>
	</div>
</section>

<style>
	.first-age {
		padding: 1.5rem;
		border-top: 1px solid #eee;
		border-bottom: 1px solid #eee;
	}
</style>
```

---

## src/lib/components/VexFeature.svelte

```svelte
<section class="vex-feature">
	<div class="content">
		<h4>1599W</h4>
		<p>cycles between all the teams</p>
		<div class="logo">VEX V5</div>
		<div class="actions"><button>Learn more</button><button>Past Reasons 2</button></div>
	</div>
</section>

<style>
	.vex-feature {
		height: 420px;
		padding: 1rem;
		background: #fafafa;
		display: flex;
		align-items: center;
	}
</style>
```

---

## src/lib/components/EmpowerTechCard.svelte

```svelte
<section class="empower">
	<img src="/mnt/data/Empower-placeholder.png" alt="Empower Tech" />
	<h5>Empower Tech</h5>
	<p>Placeholder description...</p>
	<button>Learn more</button>
</section>

<style>
	.empower {
		/* compact card */
		padding: 1rem;
		height: 200px;
		box-shadow: 0 6px 18px rgba(0, 0, 0, 0.06);
	}
	.empower img {
		height: 80px;
		width: 100%;
		object-fit: cover;
	}
</style>
```

---

## src/lib/components/RobokidsCard.svelte

```svelte
<section class="robokids">
	<img src="/mnt/data/Robokids-placeholder.png" alt="Robokids" />
	<h5>Robokids</h5>
	<p>Placeholder description...</p>
	<button>Learn more</button>
</section>

<style>
	.robokids {
		padding: 1rem;
		height: 200px;
	}
</style>
```

---

## src/lib/components/FullSteamAhead.svelte

```svelte
<script>
	const bg = '/mnt/data/FullSTEAM-placeholder.png';
</script>

<section class="full-steam">
	<div class="bg" style="background-image:url('{bg}');"></div>
	<div class="content">
		<h3>Full STEAM Ahead</h3>
		<p>Placeholder blurb about the initiative...</p>
		<button>Learn more</button>
	</div>
</section>

<style>
	.full-steam {
		position: relative;
		padding: 2rem;
		height: 320px;
		display: flex;
		align-items: center;
	}
	.full-steam .bg {
		position: absolute;
		inset: 0;
		background-size: cover;
		background-position: center;
		filter: blur(2px) saturate(0.95);
		z-index: 0;
	}
	.full-steam .content {
		position: relative;
		z-index: 1;
	}
</style>
```

---

## src/lib/components/CommunityProjects.svelte

```svelte
<section class="projects">
	<h3>Community Projects</h3>
	<div class="grid">
		<article class="card big">About projects ...</article>
		<article class="card">Project 1</article>
		<article class="card">Project 2</article>
		<article class="card">Project 3</article>
	</div>
	<div class="cta"><button>View all projects</button></div>
</section>

<style>
	.projects {
		padding: 2rem;
	}
	.grid {
		display: grid;
		grid-template-columns: 2fr 1fr;
		grid-auto-rows: 160px;
		gap: 1rem;
	}
	.card {
		background: white;
		padding: 1rem;
		border-radius: 8px;
		box-shadow: 0 6px 18px rgba(0, 0, 0, 0.06);
	}
	.card.big {
		grid-row: span 2;
	}
</style>
```

---

## src/lib/components/Footer.svelte

```svelte
<footer class="footer">
	<div class="cols">
		<div class="brand">Saigon South Dragons<br />Address line<br />Saigon</div>
		<div class="links">
			<h6>Robotics</h6>
			<ul>
				<li>FRC</li>
				<li>VEX</li>
				<li>STEM Community</li>
			</ul>
		</div>
		<div class="links">
			<h6>Teams</h6>
			<ul>
				<li>Team</li>
				<li>Media</li>
				<li>Contact</li>
			</ul>
		</div>
		<div class="social">X · Instagram · YouTube</div>
	</div>
</footer>

<style>
	.footer {
		padding: 2rem;
		border-top: 1px solid #eee;
	}
	.cols {
		display: grid;
		grid-template-columns: 1fr 1fr 1fr auto;
		gap: 1rem;
	}
</style>
```

Notes: footer is intentionally compact and componentized for easy reuse in Svelte. Keep markup simple for optimized bundle size.

---

## Styling notes (src/app.css + variables)

- Use CSS variables for spacing and color in `src/styles/variables.css`.
- Use a limited type scale: --fs-xl, --fs-lg, --fs-md etc.
- Prefer CSS transitions for hover and small animations.
- Keep components unopinionated about global styles to remain reusable.

---

## Accessibility & Performance

- Provide `alt` attributes for images.
- Lazy-load large images with `loading="lazy"` where appropriate.
- Ensure color contrast for text over darkened hero image.
- Use `prefers-reduced-motion` media queries to disable animations for users who prefer reduced motion.

---

## How to use the local uploaded image

The hero component references the image using the absolute local path we received at upload time:

```
/mnt/data/Screenshot 2025-11-20 at 19.09.14.png
```

For production, move image files into `static/assets/` and update paths to `/assets/your-image.png`.

---

If you want, I can now: generate all files as a zip for download, convert each component into SvelteKit `+page.server.js` data loaders where necessary, or scaffold a working repo with runnable `npm run dev` instructions.
