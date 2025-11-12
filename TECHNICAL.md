# Technical Specifications - FRC Team 10951 Website

## Overview

This document outlines the technical stack, architecture, and implementation details for the FRC Team 10951 official website.

## Technology Stack

### Core Framework
- **Next.js 14** (App Router)
  - React Server Components
  - Static Site Generation (SSG) for optimal performance
  - API Routes for dynamic functionality
  - Image optimization built-in

### Language & Type Safety
- **TypeScript 5.x**
  - Type-safe development
  - Better IDE support and autocomplete
  - Reduced runtime errors

### Styling
- **Tailwind CSS 3.x**
  - Utility-first CSS framework
  - Dark mode support (default)
  - Responsive design utilities
  - Custom theme configuration

### Content Management
- **Markdown Files** (`.md`)
  - Blog posts and news articles
  - Team member profiles
  - Robot specifications
  - Season information
  - Easy to edit, version-controlled content

### Build & Development Tools
- **ESLint** - Code linting
- **Prettier** - Code formatting (optional)
- **Vite** - Fast build tool (via Next.js)

### Deployment & Infrastructure
- **Docker** - Containerization
  - Multi-stage builds for optimization
  - Alpine Linux base images for smaller size
- **NGINX** - Web server (production)
  - Serves static files
  - Reverse proxy configuration
  - SSL/TLS termination support

## Project Structure

```
FRC10951-SITE/
├── public/                 # Static assets
│   ├── images/            # Images, logos, photos
│   ├── robots.txt        # SEO robots file
│   └── favicon.ico       # Site favicon
├── src/
│   ├── app/              # Next.js App Router
│   │   ├── layout.tsx   # Root layout
│   │   ├── page.tsx     # Home page
│   │   ├── about/       # About page
│   │   ├── robot/       # Robot showcase
│   │   ├── sponsors/   # Sponsors page
│   │   ├── contact/     # Contact page
│   │   ├── blog/        # Blog/news section
│   │   └── api/         # API routes
│   ├── components/      # React components
│   │   ├── Nav.tsx      # Navigation component
│   │   ├── Footer.tsx   # Footer component
│   │   ├── Card.tsx     # Reusable card component
│   │   └── ...
│   ├── lib/             # Utility functions
│   │   ├── markdown.ts  # Markdown parsing
│   │   └── utils.ts     # Helper functions
│   └── content/         # Markdown content files
│       ├── blog/        # Blog posts
│       ├── team/        # Team member profiles
│       └── seasons/     # Season information
├── Dockerfile           # Docker build configuration
├── docker-compose.yml   # Docker Compose configuration
├── nginx.conf           # NGINX configuration
├── next.config.js       # Next.js configuration
├── tailwind.config.js   # Tailwind CSS configuration
├── tsconfig.json        # TypeScript configuration
├── package.json         # Dependencies and scripts
└── TECHNICAL.md         # This file
```

## Key Features

### 1. Static Site Generation (SSG)
- Pre-renders all pages at build time
- Optimal performance and SEO
- Fast page loads
- Can be served as static files

### 2. Dark Mode (Default)
- Dark theme by default
- Custom color palette optimized for dark mode
- Accessible contrast ratios

### 3. Responsive Design
- Mobile-first approach
- Breakpoints: sm (640px), md (768px), lg (1024px), xl (1280px)
- Touch-friendly navigation

### 4. Content Management
- Markdown files for easy content updates
- Frontmatter for metadata
- Automatic parsing and rendering
- Support for images, code blocks, and more

### 5. Performance Optimizations
- Image optimization via Next.js Image component
- Code splitting
- Lazy loading
- Gzip compression
- Static asset caching

## Development Workflow

### Local Development
```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Start production server
npm start

# Lint code
npm run lint
```

### Docker Development
```bash
# Build and start container
docker-compose up -d

# View logs
docker-compose logs -f

# Rebuild after changes
docker-compose up -d --build

# Stop container
docker-compose down
```

## Build Process

1. **Development Build**
   - Fast refresh enabled
   - Source maps for debugging
   - Hot module replacement

2. **Production Build**
   - Static HTML generation
   - CSS optimization
   - JavaScript minification
   - Image optimization
   - Asset bundling

3. **Docker Build**
   - Multi-stage build process
   - Dependencies installation
   - Next.js build
   - Static file extraction
   - NGINX configuration

## Configuration Files

### `next.config.js`
- Static export configuration
- Image domains
- Environment variables
- Build optimizations

### `tailwind.config.js`
- Custom color palette (dark mode)
- Typography settings
- Breakpoints
- Plugin configurations

### `tsconfig.json`
- TypeScript compiler options
- Path aliases
- Module resolution
- Strict type checking

### `nginx.conf`
- Server configuration
- SSL/TLS settings
- Compression
- Caching headers
- Security headers

## Environment Variables

```env
# Production
NODE_ENV=production
NEXT_PUBLIC_SITE_URL=https://10951.team

# Development
NODE_ENV=development
```

## Dependencies

### Production
- `next` - Next.js framework
- `react` - React library
- `react-dom` - React DOM
- `typescript` - TypeScript compiler
- `tailwindcss` - Tailwind CSS
- `remark` - Markdown parser
- `remark-html` - Markdown to HTML
- `gray-matter` - Frontmatter parser

### Development
- `@types/node` - Node.js types
- `@types/react` - React types
- `@types/react-dom` - React DOM types
- `eslint` - Linting
- `eslint-config-next` - Next.js ESLint config
- `autoprefixer` - CSS autoprefixer
- `postcss` - CSS processor

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Performance Targets

- **Lighthouse Score**: 90+ (all categories)
- **First Contentful Paint**: < 1.5s
- **Time to Interactive**: < 3.5s
- **Cumulative Layout Shift**: < 0.1

## Security

- Content Security Policy headers
- XSS protection
- HTTPS enforcement
- Secure headers via NGINX
- No sensitive data in client-side code

## Deployment

### Production Deployment
1. Build Docker image
2. Push to registry (optional)
3. Deploy container
4. Configure NGINX reverse proxy
5. SSL certificate setup (Let's Encrypt)

### Domain Configuration
- Primary: `10951.team`
- WWW: `www.10951.team`
- SSL/TLS: Managed via Certbot

## Maintenance

### Content Updates
- Edit Markdown files in `src/content/`
- Rebuild and redeploy
- Or use headless CMS integration (future)

### Code Updates
- Follow TypeScript best practices
- Use ESLint for code quality
- Write component-based code
- Keep components small and reusable

## Future Enhancements

- [ ] Headless CMS integration (Strapi/Sanity)
- [ ] Blog comment system
- [ ] Event calendar integration
- [ ] Team member authentication
- [ ] Admin dashboard for content management
- [ ] Analytics integration
- [ ] Newsletter subscription
- [ ] Social media integration

## Version Information

- **Next.js**: 14.x
- **React**: 18.x
- **TypeScript**: 5.x
- **Tailwind CSS**: 3.x
- **Node.js**: 18.x (Alpine)

## Support & Documentation

- Next.js Docs: https://nextjs.org/docs
- Tailwind CSS Docs: https://tailwindcss.com/docs
- TypeScript Docs: https://www.typescriptlang.org/docs

---

**Last Updated**: November 2024
**Maintained By**: FRC Team 10951 Development Team

