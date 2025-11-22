# Routes Directory Structure

Visual representation of the routes directory structure:

```
src/routes/
│
├── +layout.svelte          # Root layout (wraps all pages)
├── +page.svelte            # 🏠 HOMEPAGE - Route: /
├── README.md               # Routes documentation
├── STRUCTURE.md            # This file
│
├── about/
│   └── +page.svelte        # Route: /about
│
├── contact/
│   └── +page.svelte        # Route: /contact
│
├── frc/
│   └── +page.svelte        # Route: /frc
│
├── vex/
│   ├── +page.svelte        # Route: /vex
│   ├── 1599v/
│   │   └── +page.svelte    # Route: /vex/1599v
│   ├── 1599w/
│   │   └── +page.svelte    # Route: /vex/1599w
│   ├── 1599x/
│   │   └── +page.svelte    # Route: /vex/1599x
│   ├── 1599y/
│   │   └── +page.svelte    # Route: /vex/1599y
│   └── 1599z/
│       └── +page.svelte    # Route: /vex/1599z
│
├── projects/
│   ├── empowertech/
│   │   └── +page.svelte    # Route: /projects/empowertech
│   └── robokids/
│       └── +page.svelte    # Route: /projects/robokids
│
├── stem-community/
│   └── +page.svelte        # Route: /stem-community
│
├── media/
│   └── +page.svelte        # Route: /media
│
├── templates/
│   └── +page.svelte        # Route: /templates
│
└── api/
    └── health/
        └── +server.ts      # Route: /api/health (API endpoint)
```

## Quick Reference

### 🏠 Homepage
- **File:** `+page.svelte` (root)
- **URL:** `/`

### Main Navigation Pages
- **About:** `about/+page.svelte` → `/about`
- **Contact:** `contact/+page.svelte` → `/contact`
- **FRC:** `frc/+page.svelte` → `/frc`
- **VEX:** `vex/+page.svelte` → `/vex`
- **Media:** `media/+page.svelte` → `/media`
- **STEM Community:** `stem-community/+page.svelte` → `/stem-community`

### Project Pages
- **EmpowerTech:** `projects/empowertech/+page.svelte` → `/projects/empowertech`
- **RoboKids:** `projects/robokids/+page.svelte` → `/projects/robokids`

### VEX Season Pages
- **1599V:** `vex/1599v/+page.svelte` → `/vex/1599v`
- **1599W:** `vex/1599w/+page.svelte` → `/vex/1599w`
- **1599X:** `vex/1599x/+page.svelte` → `/vex/1599x`
- **1599Y:** `vex/1599y/+page.svelte` → `/vex/1599y`
- **1599Z:** `vex/1599z/+page.svelte` → `/vex/1599z`

### Utility Pages
- **Templates:** `templates/+page.svelte` → `/templates` (component showcase)

### API Endpoints
- **Health Check:** `api/health/+server.ts` → `/api/health`

## Finding Pages

- **Homepage:** Look for `+page.svelte` in the root of `src/routes/`
- **Other Pages:** Each folder in `src/routes/` represents a URL segment
- **Nested Routes:** Folders can be nested to create deeper URLs (e.g., `projects/empowertech/` → `/projects/empowertech`)

