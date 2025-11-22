# Routes Structure

This directory contains all the pages and routes for the website. SvelteKit uses file-based routing, where each `+page.svelte` file represents a route.

## Homepage

**Location:** `+page.svelte` (root of routes directory)  
**URL:** `/`  
**Description:** The main landing page of the website with hero section, sponsors, events, and community information.

## Main Pages

### About
- **Location:** `about/+page.svelte`
- **URL:** `/about`
- **Description:** Information about the team

### Contact
- **Location:** `contact/+page.svelte`
- **URL:** `/contact`
- **Description:** Contact form page

### FRC (FIRST Robotics Competition)
- **Location:** `frc/+page.svelte`
- **URL:** `/frc`
- **Description:** FRC team information

### VEX Robotics
- **Location:** `vex/+page.svelte`
- **URL:** `/vex`
- **Description:** VEX Robotics overview

### Media
- **Location:** `media/+page.svelte`
- **URL:** `/media`
- **Description:** Media gallery and resources

### STEM Community
- **Location:** `stem-community/+page.svelte`
- **URL:** `/stem-community`
- **Description:** STEM community information

### Templates
- **Location:** `templates/+page.svelte`
- **URL:** `/templates`
- **Description:** Template components showcase

## Project Pages

### Projects
- **Location:** `projects/`
- **URL:** `/projects/*`

#### EmpowerTech
- **Location:** `projects/empowertech/+page.svelte`
- **URL:** `/projects/empowertech`

#### Robokids
- **Location:** `projects/robokids/+page.svelte`
- **URL:** `/projects/robokids`

## VEX Season Pages

### VEX Seasons (1599v, 1599w, 1599x, 1599y, 1599z)
- **Location:** `vex/[season]/+page.svelte`
- **URL:** `/vex/[season]`
- **Examples:**
  - `/vex/1599v`
  - `/vex/1599w`
  - `/vex/1599x`
  - `/vex/1599y`
  - `/vex/1599z`

## API Routes

### Health Check
- **Location:** `api/health/+server.ts`
- **URL:** `/api/health`
- **Description:** Health check endpoint

## Layout

- **Location:** `+layout.svelte`
- **Description:** Root layout that wraps all pages. Includes global styles and footer.

## File Naming Convention

- `+page.svelte` - A page/route
- `+layout.svelte` - A layout wrapper
- `+server.ts` - A server endpoint
- Folders create URL segments (e.g., `about/` → `/about`)

## Adding New Pages

1. Create a new folder in `src/routes/` for the route name
2. Add a `+page.svelte` file inside that folder
3. The route will be available at `/[folder-name]`

Example: To create a `/news` page:
```
src/routes/news/+page.svelte
```

