# Bento Grid Research - Komponenten & Design

## Magic UI Bento Grid

**Installation:**
```bash
pnpm dlx shadcn@latest add @magicui/bento-grid
```

**Key Features:**
- Asymmetrisches Grid Layout mit unterschiedlichen Kartengrößen
- `col-span-3 lg:col-span-1` und `col-span-3 lg:col-span-2` für verschiedene Breiten
- Background-Komponenten in jeder Karte (Marquee, AnimatedList, AnimatedBeam, Calendar)
- Icon + Name + Description + CTA Button pro Karte
- Hover-Effekte: `group-hover:scale-90` und `group-hover:scale-105`
- Mask-Image für Fade-Effekte: `[mask-image:linear-gradient(to_top,transparent_40%,#000_100%)]`

**Beispiel-Layout:**
```
[1 col] [2 col wide]
[2 col wide] [1 col]
```

**Features Array Struktur:**
```ts
{
  Icon: FileTextIcon,
  name: "Save your files",
  description: "We automatically save your files as you type.",
  href: "#",
  cta: "Learn more",
  className: "col-span-3 lg:col-span-1", // Kartenbreite
  background: <Component /> // Hintergrund-Komponente
}
```

## Aceternity UI Bento Grid

**Features:**
- Skewed Grid Layout
- Title, Description, Header Component
- Verschiedene Kartengröße mit row-span und col-span

## Design-Prinzipien für unser Bento Grid

1. **Asymmetrisches Layout** - Nicht alle Karten gleich groß
2. **Interessante Backgrounds** - Marquee, AnimatedList, Sparkles, etc.
3. **Hover-Animationen** - Scale-Effekte auf Background-Komponenten
4. **NumberTicker** - Für Statistiken (40+, 8+, 100%)
5. **Hero Card** - Große 2x2 Karte für "Warum WebDesignPro?"
6. **Visual Elements** - Icons, Gradients, Mask-Images

## Unser Plan

**Grid-Layout (4 Spalten):**
```
Row 1: [Hero 2x2] [Stat 1x1] [Stat 1x1]
Row 2: [Hero 2x2] [Stat 1x1] [Stat 1x1]
Row 3: [Feature 2x1] [Feature 1x1]
```

**Karten:**
1. Hero Card (2x2) - "Warum WebDesignPro?" mit Aurora Background
2. Stat Card (1x1) - "40+ Projekte" mit NumberTicker
3. Stat Card (1x1) - "8+ Kunden" mit NumberTicker
4. Stat Card (1x1) - "100% Expertise" mit NumberTicker
5. Feature Card (2x1) - "Schnelle Umsetzung" mit Sparkles
6. Feature Card (1x1) - "Modernes Design" mit Icon Cloud
