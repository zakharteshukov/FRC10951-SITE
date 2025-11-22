# Global Styling System

This document describes the global styling system that allows you to make site-wide style changes from just two files:

1. **`tailwind.config.js`** - Design tokens (colors, spacing, typography, breakpoints, etc.)
2. **`src/app.css`** - Global component classes and CSS variables

## Quick Start

### Making Global Style Changes

**To change colors site-wide:**
- Edit `tailwind.config.js` → `theme.extend.colors`
- Or edit `src/app.css` → `:root` CSS variables

**To change button styles site-wide:**
- Edit `src/app.css` → `@layer components` → `.btn-primary`, `.btn-secondary`, etc.

**To change container widths:**
- Edit `src/app.css` → `@layer components` → `.container`, `.container-narrow`, `.container-wide`

## Design Tokens

### Colors

All colors are defined in both `tailwind.config.js` and as CSS variables in `app.css`:

**Primary Colors:**
- `primary` - Main brand color (#4a9eff)
- `primary-dark` - Darker variant (#0066cc)
- `primary-light` - Lighter variant (#6bb0ff)

**Semantic Colors:**
- `success` - Success states (#51cf66)
- `warning` - Warning states (#ffd43b)
- `error` - Error states (#ff6b6b)
- `accent` - Accent color (#ff6b6b)

**Usage:**
```svelte
<!-- Using Tailwind classes -->
<div class="bg-primary text-white">Content</div>

<!-- Using CSS variables -->
<div style="background-color: var(--color-primary)">Content</div>
```

### Typography

**Heading Sizes:**
- `heading-1` through `heading-6` - Predefined heading sizes
- Responsive by default

**Usage:**
```svelte
<h1 class="heading-1">Main Title</h1>
<h2 class="heading-2">Section Title</h2>
<p class="text-lead">Lead paragraph</p>
<p class="text-muted">Muted text</p>
```

**Font Sizes (CSS Variables):**
- `--font-size-heading-1` through `--font-size-heading-6`
- `--font-size-lead`, `--font-size-body`, `--font-size-small`

### Spacing

**Section Spacing:**
- `--spacing-section` - Standard section padding (4rem)
- `--spacing-section-sm` - Small section padding (2rem)
- `--spacing-section-lg` - Large section padding (6rem)

**Container Padding:**
- `--spacing-container-padding` - Standard container padding (2rem)
- `--spacing-container-padding-sm` - Small container padding (1rem)

### Breakpoints

Standardized breakpoints (defined in both Tailwind config and CSS variables):

- `xs`: 480px
- `sm`: 640px
- `md`: 768px
- `tablet`: 968px
- `lg`: 1024px
- `xl`: 1280px
- `2xl`: 1536px

## Global Component Classes

### Form & Input Classes

**`.input`**
- Standardized input field styling
- Includes focus states with primary color
- Responsive padding and border radius

**`.textarea`**
- Standardized textarea styling
- Same styling as input with vertical resize
- Minimum height for better UX

**`.label`**
- Standardized label styling
- Proper spacing and typography

**Usage:**
```svelte
<label for="email" class="label">Email</label>
<input type="email" id="email" class="input" placeholder="your@email.com" />
<textarea id="message" class="textarea" rows="5"></textarea>
```

### Link Classes

**`.link`**
- Primary link styling with hover effects
- Underline on hover

**`.link-muted`**
- Muted link styling for secondary links

**Usage:**
```svelte
<a href="/about" class="link">Learn More</a>
<a href="/contact" class="link-muted">Contact Us</a>
```

### Grid Utility Classes

**`.grid-auto-fit`**
- Auto-fit grid with minimum 280px columns
- Responsive: collapses to 1 column on mobile

**`.grid-auto-fill`**
- Auto-fill grid with minimum 280px columns
- Responsive: collapses to 1 column on mobile

**`.grid-2`, `.grid-3`, `.grid-4`**
- Fixed column grids (2, 3, or 4 columns)
- Responsive: 2 columns on tablet, 1 column on mobile

**Usage:**
```svelte
<div class="grid-auto-fit">
  <!-- Auto-fit grid items -->
</div>

<div class="grid-3">
  <!-- 3-column grid -->
</div>
```

### Image Classes

**`.img-responsive`**
- Responsive image (100% width, auto height)

**`.img-rounded`**
- Rounded corners using card radius

**`.img-shadow`**
- Card shadow for images

**`.img-shadow-lg`**
- Large shadow for images

**Usage:**
```svelte
<img src="/image.jpg" alt="Image" class="img-responsive img-rounded img-shadow" />
```

### Flex Utility Classes

**`.flex-center`**
- Flex container with centered content

**`.flex-between`**
- Flex container with space-between

**`.flex-start`**, **`.flex-end`**
- Flex containers with start/end alignment

**`.flex-col`**
- Flex column direction

**`.flex-wrap`**
- Flex wrap enabled

**`.flex-gap`**, **`.flex-gap-sm`**, **`.flex-gap-lg`**
- Flex gap utilities (1rem, 0.5rem, 2rem)

**Usage:**
```svelte
<div class="flex-center gap-4">
  <!-- Centered flex items -->
</div>

<div class="flex-between flex-wrap">
  <!-- Space-between with wrap -->
</div>
```

### Text Utility Classes

**`.text-center`**, **`.text-left`**, **`.text-right`**
- Text alignment utilities

**`.text-uppercase`**
- Uppercase text with letter spacing

**`.text-capitalize`**
- Capitalize text

**Usage:**
```svelte
<p class="text-center text-uppercase">Centered Uppercase Text</p>
```

### Spacing Utility Classes

**Margin Bottom:**
- `.mb-0`, `.mb-1`, `.mb-2`, `.mb-3`, `.mb-4` (0, 0.5rem, 1rem, 1.5rem, 2rem)

**Margin Top:**
- `.mt-0`, `.mt-1`, `.mt-2`, `.mt-3`, `.mt-4` (0, 0.5rem, 1rem, 1.5rem, 2rem)

**Usage:**
```svelte
<div class="mb-4">Content with bottom margin</div>
```

### Border Utility Classes

**`.border-top`**, **`.border-bottom`**, **`.border-y`**
- Border utilities using light border color

**Usage:**
```svelte
<section class="section border-y">Section with top and bottom borders</section>
```

### Background Utility Classes

**`.bg-white`**
- White background

**`.bg-light`**
- Light gray background

**`.bg-dark`**
- Dark background with light text

**Usage:**
```svelte
<div class="bg-light">Light background</div>
```

### Position & Z-index Utilities

**Position:**
- `.relative`, `.absolute`, `.fixed`

**Z-index:**
- `.z-0`, `.z-1`, `.z-2`, `.z-10`, `.z-50`, `.z-100`

**Usage:**
```svelte
<div class="relative z-2">Positioned element</div>
```

### Container Classes

**`.container`**
- Max-width: 1200px
- Centered with auto margins
- Responsive padding

**`.container-narrow`**
- Max-width: 800px
- For narrower content areas

**`.container-wide`**
- Max-width: 1400px
- For wider content areas

**Usage:**
```svelte
<div class="container">
  <!-- Content -->
</div>
```

### Button Classes

**Base Button (`.btn`)**
- Base styles for all buttons
- Includes padding, border-radius, transitions

**Button Variants:**
- `.btn-primary` - Primary action button
- `.btn-secondary` - Secondary action button
- `.btn-outline` - Outline style button
- `.btn-ghost` - Transparent/ghost button

**Usage:**
```svelte
<button class="btn btn-primary">Primary Button</button>
<button class="btn btn-secondary">Secondary Button</button>
<button class="btn btn-outline">Outline Button</button>
<a href="#" class="btn btn-primary">Link as Button</a>
```

**To change all button styles globally:**
Edit `src/app.css` → `@layer components` → `.btn-primary`, `.btn-secondary`, etc.

### Card Classes

**`.card`**
- Base card styles with padding, border-radius, shadow
- White background

**`.card-hover`**
- Adds hover effects (lift and shadow increase)

**Usage:**
```svelte
<div class="card">
  <!-- Card content -->
</div>

<div class="card card-hover">
  <!-- Interactive card -->
</div>
```

**To change all card styles globally:**
Edit `src/app.css` → `@layer components` → `.card`

### Section Classes

**`.section`**
- Standard section spacing (4rem top/bottom padding)

**`.section-sm`**
- Small section spacing (2rem)

**`.section-lg`**
- Large section spacing (6rem)

**`.section-header`**
- Centered section header with title and description
- Includes responsive typography

**`.section-title`**
- Standardized section title
- Centered, responsive

**Usage:**
```svelte
<section class="section">
  <div class="section-header">
    <h2>Section Title</h2>
    <p>Section description</p>
  </div>
  <!-- Content -->
</section>

<!-- Or use section-title for simpler headers -->
<section class="section">
  <h2 class="section-title">Section Title</h2>
  <!-- Content -->
</section>
```

### Typography Classes

**Heading Classes:**
- `.heading-1` through `.heading-6`
- Responsive by default
- Proper line heights and font weights

**Text Utility Classes:**
- `.text-lead` - Lead paragraph text (larger)
- `.text-muted` - Muted/secondary text color

**Usage:**
```svelte
<h1 class="heading-1">Main Heading</h1>
<h2 class="heading-2">Subheading</h2>
<p class="text-lead">Important lead text</p>
<p class="text-muted">Less important text</p>
```

## CSS Variables

All design tokens are available as CSS variables for runtime theming:

### Color Variables
```css
var(--color-primary)
var(--color-primary-dark)
var(--color-primary-light)
var(--color-secondary)
var(--color-success)
var(--color-warning)
var(--color-error)
var(--color-background)
var(--color-text)
var(--color-text-muted)
var(--color-border)
```

### Spacing Variables
```css
var(--spacing-section)
var(--spacing-section-sm)
var(--spacing-section-lg)
var(--spacing-container-padding)
```

### Typography Variables
```css
var(--font-size-heading-1)
var(--font-size-heading-2)
/* ... etc */
var(--line-height-heading)
var(--line-height-body)
var(--font-weight-normal)
var(--font-weight-medium)
var(--font-weight-semibold)
var(--font-weight-bold)
```

### Other Variables
```css
var(--radius-card)
var(--radius-button)
var(--shadow-card)
var(--shadow-card-hover)
var(--transition-base)
var(--transition-fast)
var(--transition-slow)
```

## Making Global Changes

### Example: Change Primary Color Site-Wide

**Option 1: Edit Tailwind Config**
```js
// tailwind.config.js
colors: {
  primary: {
    DEFAULT: '#your-new-color',
    dark: '#darker-variant',
    // ...
  }
}
```

**Option 2: Edit CSS Variables**
```css
/* src/app.css */
:root {
  --color-primary: #your-new-color;
  --color-primary-dark: #darker-variant;
}
```

### Example: Change Button Styles Site-Wide

Edit `src/app.css`:
```css
@layer components {
  .btn-primary {
    background-color: var(--color-primary);
    /* Change any button property here */
    padding: 1rem 3rem; /* Larger buttons */
    border-radius: 8px; /* More rounded */
  }
}
```

### Example: Change Container Max-Width

Edit `src/app.css`:
```css
@layer components {
  .container {
    max-width: 1400px; /* Wider containers */
  }
}
```

## Migration Guide

### For New Components

1. **Use global classes first:**
   ```svelte
   <div class="container">
     <section class="section">
       <div class="section-header">
         <h2 class="heading-2">Title</h2>
       </div>
       <div class="card">
         <!-- Content -->
       </div>
       <button class="btn btn-primary">Action</button>
     </section>
   </div>
   ```

2. **Add component-specific styles only when needed:**
   ```svelte
   <style>
     /* Only add styles that are unique to this component */
     .my-component-specific {
       /* Custom styles */
     }
   </style>
   ```

3. **Use Tailwind utilities for one-off styles:**
   ```svelte
   <div class="flex items-center gap-4 p-6">
     <!-- Use Tailwind for layout and spacing -->
   </div>
   ```

### For Existing Components

Components have been migrated to use global classes. If you need to override:

1. **Use component-scoped styles:**
   ```svelte
   <style>
     /* This will override global .btn-primary for this component only */
     :global(.btn-primary) {
       background: custom-color;
     }
   </style>
   ```

2. **Or use Tailwind utilities:**
   ```svelte
   <button class="btn btn-primary bg-custom-color">
     Custom Button
   </button>
   ```

## Best Practices

1. **Always use global classes when available** - Don't recreate `.container`, `.btn-primary`, etc.

2. **Use CSS variables for dynamic theming** - Allows runtime theme changes

3. **Keep component styles minimal** - Only add styles unique to the component

4. **Use Tailwind utilities for one-off styles** - Don't create new classes for single-use cases

5. **Test responsive behavior** - Global classes are responsive, but verify on different screen sizes

## File Locations

- **Design Tokens**: `tailwind.config.js`
- **Global Classes & Variables**: `src/app.css`
- **Component Styles**: Individual component `<style>` blocks
- **This Documentation**: `docs/STYLING.md`

## Quick Reference

| What to Change | Where to Edit |
|----------------|---------------|
| Colors | `tailwind.config.js` or `app.css` `:root` |
| Button Styles | `app.css` `@layer components` `.btn-*` |
| Container Widths | `app.css` `@layer components` `.container` |
| Typography | `tailwind.config.js` or `app.css` `:root` |
| Spacing | `tailwind.config.js` or `app.css` `:root` |
| Shadows | `tailwind.config.js` or `app.css` `:root` |
| Breakpoints | `tailwind.config.js` |
| Card Styles | `app.css` `@layer components` `.card` |
| Section Styles | `app.css` `@layer components` `.section-*` |

## Examples

### Complete Section Example
```svelte
<section class="section">
  <div class="container">
    <div class="section-header">
      <h2 class="heading-2">Our Services</h2>
      <p class="text-muted">We offer a wide range of services</p>
    </div>
    
    <div class="grid grid-cols-3 gap-6">
      <div class="card card-hover">
        <h3 class="heading-4">Service 1</h3>
        <p>Description</p>
        <button class="btn btn-primary">Learn More</button>
      </div>
      <!-- More cards -->
    </div>
  </div>
</section>
```

### Custom Theming Example
```svelte
<style>
  :root {
    --color-primary: #custom-color;
  }
  
  /* All buttons will now use the custom color */
</style>
```

---

**Remember**: Changes to `tailwind.config.js` and `app.css` affect the entire site. Test thoroughly before deploying!

