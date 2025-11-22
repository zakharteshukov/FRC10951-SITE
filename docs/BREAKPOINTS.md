# Site Breakpoints Reference

This document outlines all the breakpoints used throughout the website.

## Breakpoint Summary

The site uses the following breakpoints (in descending order):

| Breakpoint | Width | Usage | Device Type |
|------------|-------|-------|-------------|
| **1024px** | `max-width: 1024px` | Tablet & Mobile Menu | Tablets, Small Laptops |
| **968px** | `max-width: 968px` | Tablet Layout | Tablets |
| **768px** | `max-width: 768px` | Mobile Layout | Mobile Devices |
| **600px** | `max-width: 600px` | Small Tablet | Small Tablets |
| **480px** | `max-width: 480px` | Small Mobile | Small Mobile Devices |

## Detailed Breakpoint Usage

### 1024px (Tablet & Mobile Menu)
- **Used in:** `Header.svelte`
- **Purpose:** 
  - Hides desktop navigation
  - Shows mobile menu toggle
  - Ensures full-screen mobile menu on tablets

### 968px (Tablet Layout)
- **Used in:** 
  - `+page.svelte` (homepage)
  - `Events.svelte`
  - `About.svelte`
  - `templates/+page.svelte`
  - Multiple template components
  - `FullSteamAhead.svelte`
- **Purpose:** 
  - Adjusts grid layouts from multi-column to single column
  - Resizes content for tablet viewing
  - Adjusts spacing and padding

### 768px (Mobile Layout)
- **Used in:** Most components across the site
- **Purpose:** 
  - Primary mobile breakpoint
  - Adjusts typography sizes
  - Changes layout from grid to stacked
  - Reduces padding and margins
  - Adjusts component spacing

### 600px (Small Tablet)
- **Used in:** `About.svelte`
- **Purpose:** 
  - Additional refinement for smaller tablets
  - Fine-tunes specific component layouts

### 480px (Small Mobile)
- **Used in:** 
  - `+page.svelte` (homepage)
  - `Hero.svelte`
  - `Footer.svelte`
- **Purpose:** 
  - Extra small mobile devices
  - Further reduces font sizes
  - Minimizes spacing for very small screens

## Breakpoint Strategy

The site follows a **mobile-first** approach:
1. Styles are written for mobile by default
2. Media queries use `max-width` to progressively enhance for larger screens
3. Breakpoints are applied at component level for granular control

## Common Patterns

### Grid to Stack Pattern
```css
/* Desktop: Multi-column grid */
.features-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
}

/* Tablet/Mobile: Single column */
@media (max-width: 968px) {
  .features-grid {
    grid-template-columns: 1fr;
  }
}
```

### Typography Scaling
```css
/* Desktop */
.title {
  font-size: 2.5rem;
}

/* Mobile */
@media (max-width: 768px) {
  .title {
    font-size: 2rem;
  }
}

/* Small Mobile */
@media (max-width: 480px) {
  .title {
    font-size: 1.75rem;
  }
}
```

## Tailwind CSS Breakpoints

While the site uses custom CSS breakpoints, Tailwind CSS is also available with its default breakpoints:

- `sm`: 640px
- `md`: 768px
- `lg`: 1024px
- `xl`: 1280px
- `2xl`: 1536px

However, most components use custom `@media` queries rather than Tailwind's responsive utilities.

## Recommendations

For consistency, consider standardizing on:
- **1024px** - Tablet breakpoint
- **768px** - Mobile breakpoint  
- **480px** - Small mobile breakpoint

This would reduce the number of unique breakpoints and make maintenance easier.

