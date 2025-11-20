# Development Guide

## Getting Started

This is a SvelteKit website template. Follow this guide to set up your development environment and start building.

## Prerequisites

- **Node.js 18+** - [Download here](https://nodejs.org/)
- **npm** or **yarn** - Comes with Node.js
- **Git** (optional) - For version control

## Setup

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Start development server:**
   ```bash
   npm run dev
   ```

3. **Open your browser:**
   Navigate to `http://localhost:5173`

## Development Workflow

### File-Based Routing

SvelteKit uses file-based routing. Create files in `src/routes/` to create pages:

- `src/routes/+page.svelte` → `/` (homepage)
- `src/routes/about/+page.svelte` → `/about`
- `src/routes/contact/+page.svelte` → `/contact`

### Components

Reusable components go in `src/lib/components/`:

```svelte
<!-- src/lib/components/MyComponent.svelte -->
<script>
  export let title;
</script>

<div class="card">
  <h2>{title}</h2>
</div>
```

Import and use them:

```svelte
<script>
  import MyComponent from '$lib/components/MyComponent.svelte';
</script>

<MyComponent title="Hello" />
```

### Styling

- **Global styles**: Edit `src/app.css`
- **Tailwind utilities**: Use directly in components
- **Custom classes**: Define in `app.css` using `@layer components`

### TypeScript

All files support TypeScript. Add type annotations:

```typescript
<script lang="ts">
  let count: number = 0;
  
  function increment(): void {
    count++;
  }
</script>
```

## Project Structure

```
src/
├── routes/              # Pages and routes
│   ├── +layout.svelte   # Root layout (wraps all pages)
│   ├── +page.svelte     # Homepage
│   ├── about/
│   │   └── +page.svelte # About page
│   └── contact/
│       └── +page.svelte # Contact page
├── lib/                 # Reusable code
│   └── components/      # Svelte components
├── content/             # Markdown content (optional)
├── app.css              # Global styles
└── app.html             # HTML template
```

## Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server |
| `npm run build` | Build for production |
| `npm run preview` | Preview production build |
| `npm run check` | Type check with svelte-check |
| `npm run lint` | Run ESLint |
| `npm run format` | Format code with Prettier |

## Hot Reloading

The development server includes hot module replacement (HMR). Changes to your files will automatically refresh in the browser.

## Type Checking

Run type checking:

```bash
npm run check
```

Or watch mode:

```bash
npm run check:watch
```

## Linting and Formatting

- **Lint**: `npm run lint`
- **Format**: `npm run format`

## Adding New Pages

1. Create a new directory in `src/routes/`:
   ```bash
   mkdir src/routes/services
   ```

2. Create `+page.svelte`:
   ```svelte
   <!-- src/routes/services/+page.svelte -->
   <section class="section">
     <div class="container">
       <h1>Services</h1>
       <!-- Your content here -->
     </div>
   </section>
   ```

3. Add to navigation in `src/lib/components/Nav.svelte`:
   ```svelte
   const navItems = [
     { href: '/', label: 'Home' },
     { href: '/services', label: 'Services' }, // Add this
   ];
   ```

## API Routes

Create API endpoints in `src/routes/api/`:

```typescript
// src/routes/api/hello/+server.ts
import { json } from '@sveltejs/kit';
import type { RequestHandler } from './$types';

export const GET: RequestHandler = async () => {
  return json({ message: 'Hello from API!' });
};
```

Access at `/api/hello`

## Environment Variables

Create a `.env` file for environment variables:

```env
PUBLIC_API_URL=https://api.example.com
```

Access in code:

```typescript
import { env } from '$env/dynamic/public';
const apiUrl = env.PUBLIC_API_URL;
```

## Troubleshooting

### Port Already in Use

If port 5173 is in use, Vite will try the next available port. Or specify a port:

```bash
npm run dev -- --port 3000
```

### Type Errors

Run type checking:

```bash
npm run check
```

### Build Errors

Clear the build cache:

```bash
rm -rf .svelte-kit build
npm run build
```

### Module Not Found

Reinstall dependencies:

```bash
rm -rf node_modules package-lock.json
npm install
```

## Production Build

1. **Build the project:**
   ```bash
   npm run build
   ```

2. **Preview the build:**
   ```bash
   npm run preview
   ```

3. **Deploy:**
   - The `build/` directory contains the production build
   - Deploy according to your hosting platform's requirements

## Best Practices

1. **Component Organization**: Keep components small and focused
2. **Type Safety**: Use TypeScript for better code quality
3. **Performance**: Use SvelteKit's built-in optimizations
4. **Accessibility**: Follow WCAG guidelines
5. **SEO**: Use proper meta tags and semantic HTML

## Resources

- [SvelteKit Docs](https://kit.svelte.dev/docs)
- [Svelte Tutorial](https://svelte.dev/tutorial)
- [Tailwind CSS Docs](https://tailwindcss.com/docs)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/handbook/intro.html)

---

Happy coding! 🚀
