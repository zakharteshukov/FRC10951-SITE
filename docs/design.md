# Design System

This document outlines the design system principles, visual guidelines, and design tokens used throughout the website.

## Design Philosophy

The design system is built on principles of:
- **Consistency** - Unified visual language across all components
- **Accessibility** - WCAG 2.1 AA compliant color contrasts and typography
- **Responsiveness** - Mobile-first design that works on all devices
- **Performance** - Optimized assets and efficient CSS
- **Maintainability** - Centralized design tokens for easy updates

## Color System

### Primary Colors

The primary color palette defines the brand identity:

- **Primary Blue** (`#4a9eff`)
  - Main brand color
  - Used for primary actions, links, and accents
  - Variants: `dark` (#0066cc), `light` (#6bb0ff), `lighter` (#8dc1ff)

- **Secondary Gray** (`#6c757d`)
  - Supporting color for secondary actions
  - Variants: `dark` (#5a6268), `light` (#868e96)

### Semantic Colors

Colors that convey meaning:

- **Success** (`#51cf66`) - Success states, confirmations
- **Warning** (`#ffd43b`) - Warnings, cautions
- **Error** (`#ff6b6b`) - Errors, destructive actions
- **Accent** (`#ff6b6b`) - Accent highlights

### Neutral Colors

Background and text colors:

- **Background**
  - Light: `#ffffff` (white)
  - Light Alt: `#f8f8f8` (off-white)
  - Dark: `#121212` (dark mode)
  - Dark Alt: `#1a1a1a` (dark mode alt)

- **Text**
  - Dark: `#333333` (primary text on light backgrounds)
  - Default: `#e0e0e0` (primary text on dark backgrounds)
  - Light: `#b0b0b0` (secondary text)
  - Muted: `#6c757d` (muted text)

- **Borders**
  - Light: `#e0e0e0` (borders on light backgrounds)
  - Default: `#333333` (borders on dark backgrounds)
  - Dark: `#1a1a1a` (dark borders)

### Color Usage Guidelines

1. **Primary Actions**: Use `primary` color for buttons, links, and call-to-action elements
2. **Secondary Actions**: Use `secondary` color for less important actions
3. **Text Contrast**: Ensure minimum 4.5:1 contrast ratio for body text, 3:1 for large text
4. **Semantic Meaning**: Use semantic colors appropriately (success for success, error for errors)
5. **Consistency**: Use the same color for the same purpose throughout the site

## Typography

### Font Families

**Body Text:**
- System font stack: `-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, sans-serif`
- Optimized for readability and performance
- Native to each platform for familiarity

**Monospace:**
- `IBM Plex Mono` - For code, technical content, and monospace needs
- Available weights: 100-700 (Thin to Bold)
- Available styles: Normal and Italic

**Display:**
- `Playfair Display` - For elegant headings and display text
- Variable font with weight range 400-900
- Available styles: Normal and Italic

### Type Scale

The typography system uses a consistent scale:

| Element | Size | Line Height | Weight | Usage |
|---------|------|-------------|--------|-------|
| Heading 1 | 3rem (48px) | 1.2 | 700 | Main page titles |
| Heading 2 | 2.5rem (40px) | 1.3 | 600 | Section titles |
| Heading 3 | 2rem (32px) | 1.4 | 600 | Subsection titles |
| Heading 4 | 1.5rem (24px) | 1.4 | 600 | Card titles |
| Heading 5 | 1.25rem (20px) | 1.5 | 600 | Small headings |
| Heading 6 | 1rem (16px) | 1.5 | 600 | Smallest headings |
| Lead | 1.25rem (20px) | 1.75 | 400 | Lead paragraphs |
| Body | 1rem (16px) | 1.75 | 400 | Body text |
| Small | 0.875rem (14px) | 1.5 | 400 | Small text, captions |

### Typography Guidelines

1. **Hierarchy**: Use heading sizes to establish clear visual hierarchy
2. **Line Length**: Keep body text between 45-75 characters per line for readability
3. **Line Height**: Use appropriate line heights (1.75 for body, 1.3-1.5 for headings)
4. **Responsive**: Typography scales down on mobile devices
5. **Contrast**: Ensure sufficient contrast between text and background

## Spacing System

### Spacing Scale

The spacing system uses a consistent scale based on rem units:

- **Section Spacing**
  - Small: `2rem` (32px)
  - Default: `4rem` (64px)
  - Large: `6rem` (96px)

- **Container Padding**
  - Small: `1rem` (16px) - Mobile
  - Default: `2rem` (32px) - Desktop

- **Component Spacing**
  - Uses Tailwind's spacing scale (0.25rem increments)
  - Common values: 0.5rem, 1rem, 1.5rem, 2rem, 3rem, 4rem

### Spacing Guidelines

1. **Consistency**: Use the spacing scale consistently across components
2. **Visual Rhythm**: Maintain consistent spacing between related elements
3. **Responsive**: Reduce spacing on mobile devices
4. **Whitespace**: Don't be afraid of whitespace - it improves readability

## Layout System

### Containers

Three container widths for different content types:

- **Container** (`1200px`) - Standard content width
- **Container Narrow** (`800px`) - For focused content (articles, forms)
- **Container Wide** (`1400px`) - For wide layouts (dashboards, galleries)

### Grid System

The site uses CSS Grid with utility classes:

- **Auto-fit Grid** - Automatically fits items with minimum 280px width
- **Auto-fill Grid** - Fills available space with minimum 280px width
- **Fixed Grids** - 2, 3, or 4 column grids that become responsive on mobile

### Layout Guidelines

1. **Mobile-First**: Design for mobile, then enhance for larger screens
2. **Grid Usage**: Use grid for card layouts, flex for alignment
3. **Container Widths**: Choose appropriate container width for content type
4. **Responsive**: All layouts should work on mobile devices

## Component Design

### Buttons

**Button Variants:**
- **Primary** - Main actions (blue background)
- **Secondary** - Secondary actions (gray background)
- **Outline** - Tertiary actions (transparent with border)
- **Ghost** - Subtle actions (transparent, no border)

**Button States:**
- Default
- Hover (lifts slightly, shadow increases)
- Active (returns to default position)
- Disabled (reduced opacity, no interaction)

### Cards

**Card Features:**
- White background
- Rounded corners (8px)
- Subtle shadow
- Padding (2rem)
- Optional hover effect (lift and shadow increase)

**Card Usage:**
- Feature highlights
- Content grouping
- Interactive elements

### Forms

**Form Elements:**
- Inputs with rounded corners (8px)
- Focus states with primary color border
- Labels with proper spacing
- Consistent padding and sizing

**Form Guidelines:**
- Clear labels
- Helpful placeholder text
- Error states (use error color)
- Success states (use success color)

## Shadows & Elevation

### Shadow Levels

- **Small** (`--shadow-sm`) - Subtle elevation
- **Default** (`--shadow-md`) - Standard elevation
- **Large** (`--shadow-lg`) - Prominent elevation
- **Extra Large** (`--shadow-xl`) - Maximum elevation
- **Card** (`--shadow-card`) - Card default shadow
- **Card Hover** (`--shadow-card-hover`) - Card hover state

### Elevation Guidelines

1. **Hierarchy**: Use shadows to establish visual hierarchy
2. **Hover States**: Increase shadow on hover for interactive elements
3. **Consistency**: Use the same shadow level for similar elements
4. **Subtlety**: Keep shadows subtle for modern appearance

## Border Radius

### Radius Values

- **Card**: `8px` - Cards, images, containers
- **Button**: `4px` - Buttons, inputs
- **Input**: `8px` - Form inputs, textareas

### Border Radius Guidelines

1. **Consistency**: Use consistent border radius for similar elements
2. **Modern**: Slightly rounded corners for modern appearance
3. **Accessibility**: Don't make corners too rounded (affects readability)

## Transitions & Animations

### Transition Durations

- **Fast**: `150ms` - Quick interactions
- **Base**: `300ms` - Standard transitions
- **Slow**: `500ms` - Deliberate animations

### Transition Easing

- **Default**: `cubic-bezier(0.4, 0, 0.2, 1)` - Smooth, natural motion

### Animation Guidelines

1. **Purpose**: Use animations to provide feedback, not decoration
2. **Performance**: Keep animations smooth (60fps)
3. **Accessibility**: Respect `prefers-reduced-motion` media query
4. **Consistency**: Use consistent timing and easing

## Responsive Design

### Breakpoints

See [BREAKPOINTS.md](./BREAKPOINTS.md) for detailed breakpoint information.

**Key Breakpoints:**
- `480px` (xs) - Small mobile
- `768px` (md) - Tablets (primary mobile breakpoint)
- `1024px` (lg) - Desktops

### Responsive Guidelines

1. **Mobile-First**: Design for mobile, enhance for desktop
2. **Touch Targets**: Minimum 44x44px for touch targets
3. **Readability**: Ensure text is readable on all screen sizes
4. **Navigation**: Provide mobile-friendly navigation
5. **Images**: Use responsive images with appropriate sizes

## Accessibility

### Color Contrast

- **Body Text**: Minimum 4.5:1 contrast ratio
- **Large Text**: Minimum 3:1 contrast ratio
- **Interactive Elements**: Minimum 3:1 contrast ratio

### Typography

- **Font Size**: Minimum 16px for body text
- **Line Height**: Minimum 1.5 for body text
- **Line Length**: 45-75 characters for optimal readability

### Interactive Elements

- **Focus States**: Visible focus indicators
- **Touch Targets**: Minimum 44x44px
- **Keyboard Navigation**: All interactive elements keyboard accessible

### Semantic HTML

- Use proper heading hierarchy (h1 → h2 → h3)
- Use semantic HTML elements (`<nav>`, `<main>`, `<article>`, etc.)
- Provide alt text for images
- Use ARIA labels when needed

## Design Tokens Reference

All design tokens are defined in:
- **Tailwind Config**: `tailwind.config.js`
- **CSS Variables**: `src/app.css` (`:root`)

For complete token reference, see [STYLING.md](./STYLING.md).

## Component Library

Common components and their usage:

- **Buttons** - `.btn`, `.btn-primary`, `.btn-secondary`, `.btn-outline`, `.btn-ghost`
- **Cards** - `.card`, `.card-hover`
- **Forms** - `.input`, `.textarea`, `.label`
- **Containers** - `.container`, `.container-narrow`, `.container-wide`
- **Sections** - `.section`, `.section-sm`, `.section-lg`
- **Typography** - `.heading-1` through `.heading-6`, `.text-lead`, `.text-muted`

For complete component documentation, see [STYLING.md](./STYLING.md).

## Design Resources

### Tools

- **Figma/Sketch**: For design mockups
- **Browser DevTools**: For responsive testing
- **Color Contrast Checkers**: For accessibility validation

### References

- [WCAG 2.1 Guidelines](https://www.w3.org/WAI/WCAG21/quickref/)
- [Material Design Guidelines](https://material.io/design)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)

## Related Documentation

- **[STYLING.md](./STYLING.md)** - Complete styling system and implementation
- **[BREAKPOINTS.md](./BREAKPOINTS.md)** - Responsive breakpoints and patterns
- **[TECHNICAL.md](./TECHNICAL.md)** - Technical implementation details

---

**Remember**: Consistency is key. Use the design system tokens and components to maintain a cohesive visual experience across the entire site.

