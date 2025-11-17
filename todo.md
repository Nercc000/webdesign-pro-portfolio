# WebDesignPro Portfolio - Migration TODO

## Migration Tasks

### Phase 1: Project Setup
- [x] Initialize Manus web project with database and auth
- [x] Switch GitHub repo to main branch
- [x] Analyze project structure and dependencies

### Phase 2: Frontend Migration
- [x] Copy all client-side pages (Home, About, Services, Portfolio, Contact, etc.)
- [x] Copy all UI components (creative, motion-primitives, ui)
- [x] Copy contexts (ThemeContext)
- [x] Copy hooks (custom hooks)
- [x] Copy data files (portfolio.ts)
- [x] Copy public assets (images, logos)
- [x] Update App.tsx with all routes
- [x] Update index.css with theme styles
- [x] Update const.ts with app constants

### Phase 3: Backend Migration
- [x] Copy database schema from drizzle/schema.ts
- [x] Copy server routers and API endpoints
- [x] Copy storage helpers
- [ ] Update environment configuration
- [ ] Run database migrations

### Phase 4: Dependencies & Configuration
- [x] Copy package.json dependencies
- [x] Install all required packages
- [x] Copy configuration files (tsconfig, vite.config, etc.)
- [x] Update components.json for shadcn/ui

### Phase 5: Testing & Deployment
- [ ] Test all pages load correctly
- [ ] Test theme switching (light/dark mode)
- [ ] Test responsive design
- [ ] Test database connectivity
- [ ] Create checkpoint for deployment
- [ ] Publish to permanent URL

## Known Issues
- None yet

## Features to Preserve
- Modern bento grid layouts
- Glass morphism effects
- Theme system (light/dark mode with OKLCH colors)
- Portfolio showcase with detail pages
- Contact form with AI chatbox
- Responsive design
- Framer Motion animations
- All creative components (BentoCard, GlassCard, StatCard, etc.)

## User Requested Changes

- [x] Remove "Nur noch 3 Plätze frei diese Woche" text (line 352-354) - too crowded
- [x] Remove trust indicators section (lines 372-390+) - delete entire div

- [x] Remove scroll indicator from homepage

- [x] Remove glow effect from featured portfolio images
- [x] Remove rounded corners from featured portfolio images

- [x] Delete old GitHub project directory to clean up workspace

- [x] Check GitHub branches for improved contact page version - both main and master have identical Contact.tsx (250 lines)
- [x] Current Manus project already has the latest version from main branch

## New Contact Page Design

- [x] Create standard contact form (Name, Email, Message)
- [x] Create multi-step detailed form dialog with 5 steps
- [x] Step 1: Project category selection
- [x] Step 2: Budget range selection
- [x] Step 3: Timeline/deadline
- [x] Step 4: Project details
- [x] Step 5: Contact information
- [x] Add form validation
- [x] Add success/error states
- [ ] Integrate with backend API (TODO for later)
