# Site Breakpoints Reference

This document outlines all the breakpoints used throughout the website. The breakpoints are defined in `tailwind.config.js` and are available as both Tailwind utilities and CSS variables.

## Breakpoint Summary

The site uses the following breakpoints (defined in `tailwind.config.js`):

| Breakpoint | Width | Tailwind Class | CSS Variable | Usage | Device Type |
|------------|-------|----------------|--------------|-------|-------------|
| **xs** | `480px` | `xs:` | `--breakpoint-xs` | Small mobile devices | Small Mobile |
| **sm** | `640px` | `sm:` | `--breakpoint-sm` | Large mobile devices | Large Mobile |
| **md** | `768px` | `md:` | `--breakpoint-md` | Tablets (primary mobile breakpoint) | Tablets |
| **tablet** | `968px` | `tablet:` | `--breakpoint-tablet` | Large tablets | Large Tablets |
| **lg** | `1024px` | `lg:` | `--breakpoint-lg` | Small laptops/desktops | Small Laptops |
| **xl** | `1280px` | `xl:` | `--breakpoint-xl` | Large desktops | Large Desktops |
| **2xl** | `1536px` | `2xl:` | `--breakpoint-2xl` | Extra large desktops | Extra Large Desktops |

**Note:** Some components may use custom breakpoints (like `1024px` or `600px`) for specific use cases, but the standard breakpoints above should be preferred for consistency.

## Standard Breakpoint Usage

### xs (480px) - Small Mobile
- **Tailwind:** `xs:text-sm`, `xs:px-2`
- **Purpose:** 
  - Extra small mobile devices
  - Further reduces font sizes
  - Minimizes spacing for very small screens
- **Common Usage:**
  - Typography scaling
  - Padding/margin reduction
  - Single-column layouts

### sm (640px) - Large Mobile
- **Tailwind:** `sm:text-base`, `sm:px-4`
- **Purpose:**
  - Large mobile devices
  - Transitional breakpoint between mobile and tablet
- **Common Usage:**
  - Slightly larger typography
  - Increased spacing
  - Two-column layouts where appropriate

### md (768px) - Tablets (Primary Mobile Breakpoint)
- **Tailwind:** `md:text-lg`, `md:grid-cols-2`
- **Purpose:** 
  - Primary mobile breakpoint
  - Adjusts typography sizes
  - Changes layout from grid to stacked
  - Reduces padding and margins
  - Adjusts component spacing
- **Common Usage:**
  - Grid to single column
  - Navigation menu changes
  - Typography scaling
  - Section padding adjustments

### tablet (968px) - Large Tablets
- **Tailwind:** `tablet:grid-cols-2`, `tablet:px-6`
- **Purpose:** 
  - Large tablets
  - Adjusts grid layouts from multi-column to single column
  - Resizes content for tablet viewing
  - Adjusts spacing and padding
- **Common Usage:**
  - Multi-column to single column transitions
  - Content width adjustments
  - Component layout changes

### lg (1024px) - Small Laptops/Desktops
- **Tailwind:** `lg:grid-cols-3`, `lg:text-xl`
- **Purpose:**
  - Small laptops and desktops
  - Desktop navigation
  - Full multi-column layouts
- **Common Usage:**
  - Navigation menu (desktop vs mobile)
  - Full grid layouts
  - Maximum content widths

### xl (1280px) - Large Desktops
- **Tailwind:** `xl:max-w-7xl`, `xl:px-8`
- **Purpose:**
  - Large desktop screens
  - Wider content areas
  - Enhanced spacing
- **Common Usage:**
  - Container max-width adjustments
  - Increased padding
  - Optimized layouts for large screens

### 2xl (1536px) - Extra Large Desktops
- **Tailwind:** `2xl:max-w-screen-2xl`
- **Purpose:**
  - Extra large desktop screens
  - Maximum content constraints
- **Common Usage:**
  - Container max-width limits
  - Preventing content from becoming too wide

## Breakpoint Strategy

The site follows a **mobile-first** approach:
1. Styles are written for mobile by default
2. Media queries use `min-width` (Tailwind) or `max-width` (custom CSS) to progressively enhance for larger screens
3. Breakpoints are applied at component level for granular control
4. Tailwind utilities use `min-width` media queries (mobile-first)
5. Custom CSS may use `max-width` for specific overrides

## Common Patterns

### Grid to Stack Pattern

**Using Tailwind (Recommended):**
```svelte
<!-- Mobile-first: starts as single column, becomes 3 columns on large screens -->
<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
  <!-- Grid items -->
</div>

<!-- Using global grid classes -->
<div class="grid-3">
  <!-- Responsive 3-column grid (becomes 2 on tablet, 1 on mobile) -->
</div>
```

**Using Custom CSS:**
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

**Using Tailwind:**
```svelte
<!-- Responsive text sizes -->
<h1 class="text-2xl md:text-3xl lg:text-4xl xl:text-5xl">
  Responsive Heading
</h1>

<!-- Using global heading classes (already responsive) -->
<h1 class="heading-1">Main Title</h1>
```

**Using Custom CSS:**
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

### Container Width Adjustments

**Using Tailwind:**
```svelte
<div class="w-full md:max-w-2xl lg:max-w-4xl xl:max-w-6xl mx-auto">
  Responsive container
</div>

<!-- Using global container classes -->
<div class="container">
  <!-- Max-width: 1200px, responsive padding -->
</div>
```

### Show/Hide Based on Breakpoint

**Using Tailwind:**
```svelte
<!-- Hide on mobile, show on desktop -->
<div class="hidden md:block">Desktop only</div>

<!-- Show on mobile, hide on desktop -->
<div class="block md:hidden">Mobile only</div>
```

### Spacing Adjustments

**Using Tailwind:**
```svelte
<div class="p-4 md:p-6 lg:p-8">
  Responsive padding
</div>

<div class="gap-2 md:gap-4 lg:gap-6">
  Responsive gap
</div>
```

## Using Tailwind Responsive Utilities

Tailwind's responsive utilities are the preferred method for responsive styling. They use a mobile-first approach with `min-width` media queries.

### Syntax
```svelte
<!-- Base style (mobile) applies first -->
<!-- Then add breakpoint: prefix for larger screens -->
<div class="text-sm md:text-base lg:text-lg xl:text-xl">
  Responsive text
</div>
```

### Common Responsive Patterns

**Responsive Grid:**
```svelte
<div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
  <!-- 1 col mobile, 2 col sm, 3 col md, 4 col lg -->
</div>
```

**Responsive Flex:**
```svelte
<div class="flex flex-col md:flex-row gap-4">
  <!-- Column on mobile, row on desktop -->
</div>
```

**Responsive Visibility:**
```svelte
<div class="hidden md:block">
  <!-- Hidden on mobile, visible on md and up -->
</div>
```

**Responsive Spacing:**
```svelte
<div class="p-4 md:p-6 lg:p-8">
  <!-- Increasing padding on larger screens -->
</div>
```

### When to Use Custom CSS vs Tailwind

**Use Tailwind utilities when:**
- Simple responsive adjustments (spacing, sizing, visibility)
- Consistent with design system
- Quick one-off changes

**Use Custom CSS when:**
- Complex responsive logic
- Component-specific breakpoints
- Fine-grained control needed
- Using global component classes (`.card`, `.section`, etc.)

## Best Practices

### 1. Use Standard Breakpoints
Prefer the standard breakpoints defined in `tailwind.config.js`:
- `xs` (480px), `sm` (640px), `md` (768px), `tablet` (968px), `lg` (1024px), `xl` (1280px), `2xl` (1536px)

### 2. Mobile-First Approach
- Write styles for mobile first
- Enhance for larger screens using `min-width` media queries (Tailwind) or `max-width` (custom CSS)

### 3. Test on Real Devices
- Test on actual devices when possible
- Use browser dev tools responsive mode
- Test at breakpoint boundaries (e.g., 767px, 768px, 769px)

### 4. Consistent Breakpoint Usage
- Use the same breakpoints across similar components
- Document any custom breakpoints in component comments

### 5. Progressive Enhancement
- Ensure content is accessible on all screen sizes
- Don't hide critical content on mobile
- Provide alternative layouts, not just smaller versions

## Testing Breakpoints

### Browser Dev Tools
1. Open Chrome/Firefox DevTools (F12)
2. Toggle device toolbar (Cmd+Shift+M / Ctrl+Shift+M)
3. Test at different breakpoints
4. Use custom device sizes to test edge cases

### Common Test Sizes
- **320px** - Smallest mobile
- **480px** - Small mobile (xs breakpoint)
- **768px** - Tablet (md breakpoint)
- **1024px** - Desktop (lg breakpoint)
- **1920px** - Large desktop

## Related Documentation

- **[STYLING.md](./STYLING.md)** - Complete styling system documentation
- **[design.md](./design.md)** - Design system principles
- **tailwind.config.js** - Breakpoint definitions

