# Development Guide

## Getting Started

This is a Next.js 14 application for the FRC10951 team website, containerized with Docker for easy local development.

## Prerequisites

- Docker and Docker Compose installed
- Git (for cloning the repository)

## Quick Start

### Option 1: Using Docker (Recommended)

```bash
# Clone the repository
git clone https://github.com/zakharteshukov/FRC10951-SITE.git
cd FRC10951-SITE

# Build and start the container
docker-compose up -d

# View logs
docker-compose logs -f

# Stop the container
docker-compose down
```

The website will be available at http://localhost:3000

### Option 2: Local Development (Without Docker)

```bash
# Clone the repository
git clone https://github.com/zakharteshukov/FRC10951-SITE.git
cd FRC10951-SITE

# Install dependencies
npm install

# Start development server
npm run dev
```

The website will be available at http://localhost:3000

## Project Structure

```
FRC10951-SITE/
├── src/
│   ├── app/              # Next.js app directory
│   │   ├── layout.tsx    # Root layout
│   │   ├── page.tsx      # Home page
│   │   ├── globals.css   # Global styles
│   │   └── page.module.css
│   └── components/       # Reusable components
├── public/               # Static assets
├── docker-compose.yml    # Docker configuration
├── Dockerfile            # Container definition
└── package.json          # Dependencies

```

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## Development Tips

1. The Docker setup includes hot-reloading, so changes will be reflected immediately
2. Volumes are mounted so your local files sync with the container
3. The `node_modules` volume prevents overwriting the container's dependencies

## Troubleshooting

### Port already in use

If port 3000 is already in use, modify the port mapping in `docker-compose.yml`:

```yaml
ports:
  - "3001:3000"  # Use port 3001 instead
```

### Container won't start

Check the logs:
```bash
docker-compose logs web
```

### Rebuild the container

```bash
docker-compose up -d --build
```

## Contributing

1. Create a feature branch
2. Make your changes
3. Commit and push to your fork
4. Create a pull request

## Production Deployment

For production deployment, you can use:
- Vercel (recommended for Next.js)
- Docker on any cloud provider
- Traditional hosting with Node.js

Build the production image:
```bash
docker build -t frc10951-site .
```

Run the production container:
```bash
docker run -p 3000:3000 frc10951-site
```





