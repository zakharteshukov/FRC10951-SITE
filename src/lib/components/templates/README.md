# Template Components

A collection of reusable section templates for building modern websites. All components are fully responsive and include placeholder content that you can easily customize.

## Available Templates

### 1. TemplateHero
Full-width hero section with background image, overlay, and call-to-action buttons.

**Location:** `TemplateHero.svelte`

**Usage:**
```svelte
<script>
  import TemplateHero from '$lib/components/templates/TemplateHero.svelte';
</script>

<TemplateHero />
```

### 2. TemplateFeatureGrid
3-column grid layout showcasing key features with icons and descriptions.

**Location:** `TemplateFeatureGrid.svelte`

**Usage:**
```svelte
<script>
  import TemplateFeatureGrid from '$lib/components/templates/TemplateFeatureGrid.svelte';
</script>

<TemplateFeatureGrid />
```

### 3. TemplateStats
Statistics/metrics section with large numbers and labels. Great for showcasing achievements.

**Location:** `TemplateStats.svelte`

**Usage:**
```svelte
<script>
  import TemplateStats from '$lib/components/templates/TemplateStats.svelte';
</script>

<TemplateStats />
```

### 4. TemplateTestimonials
Customer testimonials section with avatar placeholders and quotes.

**Location:** `TemplateTestimonials.svelte`

**Usage:**
```svelte
<script>
  import TemplateTestimonials from '$lib/components/templates/TemplateTestimonials.svelte';
</script>

<TemplateTestimonials />
```

### 5. TemplateImageText
Alternating image and text sections. Perfect for storytelling or feature explanations.

**Location:** `TemplateImageText.svelte`

**Usage:**
```svelte
<script>
  import TemplateImageText from '$lib/components/templates/TemplateImageText.svelte';
</script>

<TemplateImageText />
```

### 6. TemplatePricing
Pricing cards section with three tiers and feature lists.

**Location:** `TemplatePricing.svelte`

**Usage:**
```svelte
<script>
  import TemplatePricing from '$lib/components/templates/TemplatePricing.svelte';
</script>

<TemplatePricing />
```

### 7. TemplateGallery
Image gallery grid with hover effects and overlay information.

**Location:** `TemplateGallery.svelte`

**Usage:**
```svelte
<script>
  import TemplateGallery from '$lib/components/templates/TemplateGallery.svelte';
</script>

<TemplateGallery />
```

### 8. TemplateCTA
Call-to-action section with gradient background and action buttons.

**Location:** `TemplateCTA.svelte`

**Usage:**
```svelte
<script>
  import TemplateCTA from '$lib/components/templates/TemplateCTA.svelte';
</script>

<TemplateCTA />
```

## Viewing Templates

Visit `/templates` in your browser to see all templates in action with live examples.

## Customization

1. **Replace Placeholder Images:**
   - Find `<div class="placeholder-image">` elements
   - Replace with `<img>` tags pointing to your images
   - Or use CSS background-image properties

2. **Update Content:**
   - Replace placeholder text with your actual content
   - Update headings, paragraphs, and button text

3. **Styling:**
   - All components use scoped styles
   - Modify colors, spacing, and fonts in the `<style>` section
   - Colors use CSS variables in some components for easy theming

4. **Make Components Reusable:**
   - Add props to components for dynamic content
   - Example: `export let title = 'Default Title';`

## Best Practices

- Keep placeholder images consistent in aspect ratio
- Test responsive behavior on mobile devices
- Maintain consistent spacing and typography
- Use semantic HTML elements
- Ensure accessibility (alt text, ARIA labels)

## File Structure

```
src/lib/components/templates/
├── README.md
├── TemplateHero.svelte
├── TemplateFeatureGrid.svelte
├── TemplateStats.svelte
├── TemplateTestimonials.svelte
├── TemplateImageText.svelte
├── TemplatePricing.svelte
├── TemplateGallery.svelte
└── TemplateCTA.svelte
```

## Notes

- All templates are mobile-responsive
- Placeholder images use gradient backgrounds for visual reference
- Components are self-contained with their own styles
- No external dependencies required beyond SvelteKit

