# SvelteKit Website Template

A modern, production-ready website template built with SvelteKit, TypeScript, and Tailwind CSS.

## 🚀 Features

- **SvelteKit** - Full-stack Svelte framework with file-based routing
- **TypeScript** - Type-safe development
- **Tailwind CSS** - Utility-first CSS framework with dark mode
- **Responsive Design** - Mobile-first, fully responsive layout
- **Modern UI** - Clean, professional design with smooth animations
- **SEO Ready** - Optimized for search engines
- **Fast Performance** - Static generation and code splitting
- **Docker Support** - Containerized deployment ready

## 📦 Tech Stack

- [SvelteKit](https://kit.svelte.dev) - Web framework
- [TypeScript](https://www.typescriptlang.org) - Type safety
- [Tailwind CSS](https://tailwindcss.com) - Styling
- [Vite](https://vitejs.dev) - Build tool

## 🏃 Quick Start

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

### Installation

```bash
# Clone or download this template
# Navigate to the project directory
cd your-project-name

# Install dependencies
npm install

# Start development server
npm run dev
```

The website will be available at `http://localhost:5173`

## 📁 Project Structure

```
.
├── src/                      # Source code
│   ├── routes/              # Pages (file-based routing)
│   │   ├── +page.svelte     # 🏠 Homepage (/)
│   │   ├── README.md        # Routes documentation
│   │   ├── STRUCTURE.md     # Visual routes structure
│   │   ├── about/           # About page (/about)
│   │   ├── contact/         # Contact page (/contact)
│   │   ├── frc/             # FRC page (/frc)
│   │   ├── vex/             # VEX pages (/vex, /vex/1599v, etc.)
│   │   ├── projects/        # Project pages (/projects/*)
│   │   └── ...              # See src/routes/README.md for full structure
│   ├── lib/
│   │   └── components/      # Reusable components
│   │       ├── Nav.svelte   # Navigation component
│   │       └── Footer.svelte # Footer component
│   ├── app.css              # Global styles
│   └── app.html             # HTML template
├── static/                   # Static assets (images, etc.)
├── public/                   # Public assets
├── docs/                     # Documentation
│   ├── DEVELOPMENT.md       # Development guide
│   ├── TECHNICAL.md         # Technical specifications
│   └── structure.md         # Project structure details
├── deployment/                # Deployment configuration
│   ├── Dockerfile           # Docker build configuration
│   ├── docker-compose.yml   # Docker Compose config
│   └── nginx.conf           # Nginx configuration
├── scripts/                   # Utility scripts
│   └── deploy.sh            # Deployment script
├── package.json
└── tailwind.config.js       # Tailwind configuration
```

## 🛠️ Available Scripts

- `npm run dev` - Start development server with hot-reloading
- `npm run build` - Build for production
- `npm run preview` - Preview production build locally
- `npm run check` - Run Svelte type checking
- `npm run lint` - Run ESLint
- `npm run format` - Format code with Prettier

## 🎨 Customization

### Changing Colors

Edit `tailwind.config.js` to customize the color scheme:

```js
colors: {
  primary: {
    DEFAULT: '#4a9eff',  // Your primary color
    dark: '#0066cc',
  },
  // ... other colors
}
```

### Adding Pages

Create new files in `src/routes/`:

- `src/routes/services/+page.svelte` → `/services`
- `src/routes/blog/+page.svelte` → `/blog`

**📖 For detailed routes documentation, see:**
- `src/routes/README.md` - Complete routes reference
- `src/routes/STRUCTURE.md` - Visual directory structure

### Modifying Navigation

Edit `src/lib/components/Nav.svelte` to add/remove menu items:

```svelte
const navItems = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  // Add your pages here
];
```

### Updating Content

- **🏠 Homepage**: Edit `src/routes/+page.svelte` (root routes directory)
- **About Page**: Edit `src/routes/about/+page.svelte`
- **Contact Page**: Edit `src/routes/contact/+page.svelte`
- **Other Pages**: See `src/routes/README.md` for all available pages
- **Footer**: Edit `src/lib/components/Footer.svelte`

## 🐳 Docker Deployment

### Build and Run

```bash
# Build the image (from project root)
docker build -f deployment/Dockerfile -t my-website .

# Run the container
docker run -p 3000:3000 my-website
```

### Using Docker Compose

```bash
# Start the container
docker-compose -f deployment/docker-compose.yml up -d

# View logs
docker-compose -f deployment/docker-compose.yml logs -f

# Stop the container
docker-compose -f deployment/docker-compose.yml down
```

## 📝 Content Management

This template includes support for Markdown content. Add markdown files to `src/content/` and use the markdown utilities in `src/lib/markdown.ts` to process them.

## 🚢 Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Import your repository on [Vercel](https://vercel.com)
3. Vercel will automatically detect SvelteKit and deploy

### Other Platforms

- **Netlify** - Supports SvelteKit out of the box
- **Cloudflare Pages** - Great for static sites
- **Docker** - Use the included Dockerfile for containerized deployment
- **Traditional Hosting** - Build with `npm run build` and serve the output

## 📚 Learn More

- [SvelteKit Documentation](https://kit.svelte.dev/docs)
- [Svelte Tutorial](https://svelte.dev/tutorial)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [TypeScript Documentation](https://www.typescriptlang.org/docs)

## 📄 License

This template is free to use for personal and commercial projects.

## 🤝 Contributing

Feel free to customize this template for your needs. If you make improvements that could benefit others, consider sharing them!

---

**Happy Building! 🎉**
