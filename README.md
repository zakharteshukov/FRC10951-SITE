# FRC Team 10951 Website

A modern, high-performance website for FRC Team 10951 built with Next.js 14, TypeScript, and Tailwind CSS, containerized with Docker.

## Technology Stack

- **Next.js 14** - React framework with App Router
- **TypeScript** - Type-safe development
- **Tailwind CSS** - Utility-first CSS framework
- **Markdown** - Content management via markdown files
- **Docker** - Containerization for easy deployment

## Features

- 🎨 Dark mode by default
- 📱 Fully responsive design
- ⚡ Optimized performance with static generation
- 📝 Markdown-based content system
- 🐳 Docker containerization
- 🔒 Type-safe with TypeScript

## Domain

The website is configured to serve at **10951.team** and **www.10951.team**.

## Quick Start

### Prerequisites

- Node.js 18+ (for local development)
- Docker and Docker Compose (for containerized deployment)

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

# Run linting
npm run lint
```

The development server will be available at `http://localhost:3000`

### Docker Deployment

```bash
# Build and run container
docker-compose up -d

# View logs
docker-compose logs -f

# Rebuild after changes
docker-compose up -d --build

# Stop container
docker-compose down
```

### Environment Variables

- `NAME`: Container name (default: `frc10951-website`)
- `HOST_PORT`: Host port to map to container port 3000 (default: `3001`)

Example:
```bash
HOST_PORT=3001 docker-compose up -d
```

## Project Structure

```
FRC10951-SITE/
├── src/
│   ├── app/              # Next.js App Router pages
│   ├── components/       # React components
│   ├── lib/             # Utility functions
│   └── content/         # Markdown content files
├── public/              # Static assets
├── Dockerfile           # Docker build configuration
├── docker-compose.yml   # Docker Compose configuration
└── package.json         # Dependencies
```

## Content Management

Content is managed through Markdown files in the `src/content/` directory:

- `blog/` - Blog posts and news articles
- `team/` - Team member profiles
- `seasons/` - Season information

Each markdown file can include frontmatter for metadata:

```markdown
---
title: "Post Title"
date: "2024-11-10"
excerpt: "Brief description"
---

# Content here
```

## Health Check

The container includes a health check endpoint at `/api/health` that returns a JSON response when the service is running correctly.

## Performance

- Static Site Generation (SSG) for optimal performance
- Image optimization
- Code splitting
- Gzip compression
- Static asset caching

## Documentation

For detailed technical specifications, see [TECHNICAL.md](./TECHNICAL.md).

## Contributing

1. Make changes to the codebase
2. Test locally with `npm run dev`
3. Build and test with Docker: `docker-compose up -d --build`
4. Submit changes for review

## License

[Add your license here]

---

**Last Updated**: November 2024
