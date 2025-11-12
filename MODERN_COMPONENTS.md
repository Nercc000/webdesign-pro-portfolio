# Moderne Komponenten für Bento Grid

## Magic UI Bento Grid

### Installation
```bash
pnpm dlx shadcn@latest add @magicui/bento-grid
```

### Wichtige Erkenntnisse

1. **Theme-Aware Design**
   - Verwendet `border-gray-950/[.1]` für Light Mode
   - Verwendet `dark:border-gray-50/[.1]` für Dark Mode
   - Nutzt `bg-gray-950/[.01]` und `dark:bg-gray-50/[.10]`

2. **Komponenten-Struktur**
   - `BentoGrid`: Container mit Grid-Layout
   - `BentoCard`: Einzelne Karte mit Icon, Name, Description, Background
   - Background kann beliebige React-Komponente sein (Marquee, AnimatedList, etc.)

3. **Beispiel-Features**
   ```tsx
   {
     Icon: FileTextIcon,
     name: "Save your files",
     description: "We automatically save your files as you type.",
     href: "#",
     cta: "Learn more",
     className: "col-span-3 lg:col-span-1",
     background: <Marquee>...</Marquee>
   }
   ```

## Verfügbare Magic UI Komponenten im Projekt

✅ Bereits vorhanden:
- marquee-magic.tsx
- aurora-text.tsx
- hero-video-dialog.tsx
- seasonal-hover-cards.tsx
- shimmering-text.tsx

🆕 Können hinzugefügt werden:
- Animated List
- Animated Beam
- Globe
- Orbiting Circles
- Avatar Circles
- Icon Cloud
- Dotted Map

## Implementierungsstrategie

### 1. Bestehende BentoGrid Komponente nutzen
- Bereits in `/components/ui/bento-grid.tsx` vorhanden
- Hat bereits Theme-Support eingebaut
- Verwendet `bg-background`, `dark:bg-background` etc.

### 2. GlassCard für spezielle Effekte
- Für Glassmorphism-Effekte
- Theme-aware mit `border-white/10`, `bg-white/5`

### 3. Card-Typen für Bento Grid

#### Statistik-Karten
```tsx
<div className="bg-card text-card-foreground border-border">
  <div className="text-6xl font-bold text-primary">40+</div>
  <div className="text-sm text-muted-foreground">Projekte</div>
</div>
```

#### Branding-Karte
```tsx
<div className="bg-card text-card-foreground border-border">
  <h3 className="text-primary">Marktführer Branding</h3>
  <p className="text-muted-foreground">...</p>
</div>
```

#### Ranking-Liste
```tsx
<div className="bg-card border-border">
  {items.map(item => (
    <div className="bg-muted/50 border-border hover:bg-accent">
      <span className="text-primary">#1</span>
      <span className="text-foreground">...</span>
    </div>
  ))}
</div>
```

## Wichtig: Theme-Variablen verwenden

❌ NICHT verwenden:
- `bg-black` → ✅ `bg-card` oder `bg-background`
- `text-white` → ✅ `text-card-foreground` oder `text-foreground`
- `border-white/10` → ✅ `border-border`
- Feste Farben → ✅ Theme-Variablen

✅ Richtige Theme-Variablen:
- `bg-background` - Haupthintergrund
- `bg-card` - Karten-Hintergrund
- `text-foreground` - Haupttext
- `text-card-foreground` - Karten-Text
- `text-muted-foreground` - Sekundärtext
- `text-primary` - Akzentfarbe (Blau)
- `border-border` - Rahmen
- `bg-muted` - Gedämpfter Hintergrund
- `bg-accent` - Akzent-Hintergrund
