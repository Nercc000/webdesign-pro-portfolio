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

## Contact Page Quality Improvements

- [x] Change modal layout to 2-column grid to avoid scrolling
- [x] Research shadcn component collections (Magic UI, Coconut UI, Smooth UI, Re UI, etc.)
- [x] Create markdown documentation of best component collections
- [x] Upgrade contact page design to match homepage quality
- [x] Add better animations and transitions
- [x] Improve visual hierarchy and spacing
- [x] Add premium UI components from collections (shimmer effect, border beam, animated grid)

## Header, Footer & FAQ Components

- [x] Add header/navigation to Contact page
- [x] Create reusable Footer component (already in Layout)
- [x] Add Footer to all pages (included in Layout component)
- [x] Create FAQ panel component
- [x] Add FAQ to Contact page

- [x] Add FAQ to Services page
- [x] Add FAQ to About page
- [x] Add FAQ to Home page (already has FAQ)

## Contact Page Layout Adjustment

- [x] Move contact info (email, phone, location) vertically between standard and detailed form (corrected: below both forms)

- [x] Fix contact info layout - keep forms side-by-side, put contact info below both forms

- [x] Create 3-column layout: Schnellanfrage (left) | Contact Info (middle vertical) | Detaillierte Anfrage (right)

## Complete Contact Page Redesign

- [x] Research modern contact page designs from top agencies
- [x] Create new layout with better visual hierarchy - 2-column layout with form on left, contact info on right
- [x] Design better card styles - clean minimal cards with subtle borders and hover effects
- [x] Improve spacing and whitespace - generous padding and clear sections
- [x] Make it match the quality of homepage - professional gradient hero, smooth animations

## Improve Detailed Form CTA

- [x] Make detailed project inquiry section more spectacular and eye-catching
- [x] Add gradient backgrounds and visual effects - gradient card with floating particles
- [x] Improve benefits presentation with icons and animations - 3-column grid with animated check icons
- [x] Create stronger, more prominent call-to-action button - gradient button with shimmer effect and hover scale

## Professional Contact Page Redesign (Inspired by Top Agencies)

- [x] Research successful agency contact pages (Vercel, Linear, etc.)
- [x] Analyze the example provided (dark theme, yellow accent, numbered steps)
- [x] Create unique card design that matches our brand style - clean minimal cards with icon + title + description
- [x] Implement clean 2-column layout (Form left with numbered steps, Contact info right)
- [x] Use numbered steps with badge indicators - circular badges with numbers 1 and 2
- [x] Minimal form design with underline inputs (no heavy borders) - only bottom border
- [x] Bold, clear CTA button with strong contrast
- [x] Remove all unnecessary animations and effects - only subtle fade-ins
- [x] Focus on typography hierarchy and whitespace - generous spacing throughout
- [x] Make it truly professional and unique - inspired by Linear and top agencies


## Contact Page Redesign - Ludovic Argenty Style (with our brand colors)

- [x] Create massive serif headline "KONTAKT" as hero (similar to Ludovic but with our style)
- [x] Add small eyebrow text "LET'S TALK" with lines
- [x] Add 4-column feature/trust cards grid with subtle borders
- [x] Create copyable email section with monospace font
- [x] Add "Other Ways" section with Calendly/WhatsApp cards
- [x] Single-column centered layout with generous whitespace
- [x] Use our brand colors (primary blue) for accents instead of pure black/white
- [x] Monospace font for technical elements (email, labels)
- [x] Subtle borders, not glowing - professional and clean
- [x] Keep our existing theme (not pure black background)

## Contact Page Updates

- [x] Change "Other Ways" section from 2 cards to 3 cards (Calendly, WhatsApp, Detaillierte Projektanfrage)
- [x] Remove the separate "Detailed Form CTA" section below since it's now in the cards

## Contact Page Visual Improvements

- [x] Make background more interesting (add subtle patterns, gradients, or grid effects) - added animated grid pattern
- [x] Redesign simple form to be more unique and not a copy - underline inputs, dot indicators, decorative corner accent
- [x] Improve color scheme - find better, more fitting colors for contact page - using primary color accents, transparent backgrounds
- [x] Make the design more distinctive and memorable - unique form styling with backdrop blur and shadows

## Contact Page Refinements

- [x] Make grid background more visible (stronger lines, larger cells)
- [x] Extend grid background further down the page
- [x] Improve form typography (larger labels, better font sizes)
- [x] Make input boxes larger and better styled to match overall design
- [x] Enhance overall typography hierarchy in the form

## Grid Background Visibility Issue

- [x] Make grid pattern actually visible - using 2px thick lines with rgba(0,0,0,0.06)
- [x] Use simpler CSS approach with higher contrast colors
- [x] Test with different opacity values to ensure visibility

## Grid Cell Size Adjustment

- [x] Increase grid cell size from 24px to 100px for better visual balance
- [x] Test different cell sizes to find optimal spacing - 100px with reduced opacity provides good balance

## Grid Visual Improvements

- [x] Make grid darker for better visibility - adjusted to optimal opacity
- [x] Fix gap/discontinuity in grid pattern between sections - removed gradient overlay

## Dark Mode Redesign

- [x] Update color palette in index.css to dark mode (pure black background, white text)
- [x] Set blue brand color for primary accents and CTAs (oklch(0.62 0.20 260))
- [x] Update Contact page with new dark mode styling (white grid lines)
- [x] Update Home page with new dark mode styling - icons use text-foreground
- [x] Update Services page with new dark mode styling - icons use text-foreground
- [x] Update Portfolio page with new dark mode styling - icons use text-foreground
- [x] Update About page with new dark mode styling - icons use text-foreground
- [x] Ensure icons and important text are white (foreground: oklch(1 0 0))
- [x] Ensure CTAs use blue brand color

## Icon Color Fix

- [x] Change all icons to use foreground color (black in light mode, white in dark mode)
- [x] Keep blue brand color only for CTAs, buttons, and important links
- [x] Review Contact page icons and update colors - changed feature cards and other ways icons to text-foreground
- [x] Review all other pages and update icon colors - updated Home, Services, Portfolio, About pages

## Card Redesign & Blue Color Removal

- [x] Change card borders from border-primary to border (neutral gray)
- [x] Redesign cards: icon centered at top, stronger background (rounded-xl, bg-card/80, backdrop-blur)
- [x] Remove blue from form dot indicators (changed to bg-foreground/40)
- [x] Remove blue from form input focus borders (focus-visible:border-foreground)
- [x] Make card backgrounds more prominent/kraftvoll (added backdrop-blur, shadow-xl, hover:-translate-y-1)

## Visual Edit Improvements

- [x] Remove FAQ component from Contact page completely
- [x] Delete decorative corner accent (blue gradient) from form
- [x] Improve input boxes: better typography, padding, and styling (rounded-xl, px-6 py-5, bg-background/50)
- [x] Reduce grid opacity for more subtle appearance (0.08 → 0.04)
- [x] Remove background from theme toggle button (bg-transparent hover:bg-transparent)
- [x] Add rotation animation to theme toggle on hover (hover:rotate-180 duration-500)

## Scale Up for Large Monitors & Particle Animation

- [x] Implement new darker blue color palette (oklch(0.45 0.15 260) - professional deep blue)
- [x] Increase base font sizes for large monitors (text-8xl to text-[12rem] for hero, text-xl to text-3xl for body)
- [x] Increase container max-widths for better use of screen space (1400px @ 1024px, 1600px @ 1536px)
- [x] Make card icons much larger (h-12 w-12, feature icons scale-150)
- [x] Add floating particle background animation (20 particles with Framer Motion)
- [x] Fix submit button color with new blue palette (automatically uses new primary color)

## Size Adjustments & Hover Fix

- [x] Reduce hero text size (text-6xl to text-9xl, was text-[12rem])
- [x] Reduce body text sizes slightly (text-lg to text-2xl, was text-3xl)
- [x] Make particles smaller and more subtle (w-0.5 h-0.5, 30 particles, bg-foreground/20)
- [x] Fix theme toggle hover to be fully transparent (bg-transparent hover:bg-transparent)
