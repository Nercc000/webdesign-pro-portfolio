# Render.com Deployment Guide für WebDesignPro

**Autor:** Manus AI  
**Datum:** 13. November 2025  
**Projekt:** WebDesignPro Portfolio Website

---

## Übersicht

Dieser Guide erklärt Schritt für Schritt, wie du dein WebDesignPro-Projekt auf **Render.com** deployen kannst. Render ist eine moderne Cloud-Plattform, die Full-Stack-Anwendungen mit Datenbank-Support unterstützt und eine kostenlose Tier für kleinere Projekte bietet.

### Warum Render.com?

Render bietet im Vergleich zu anderen Plattformen mehrere Vorteile für dieses Projekt. Die Plattform unterstützt **native Node.js-Anwendungen** mit Express-Servern, bietet **integrierte PostgreSQL-Datenbanken** (kostenlos im Free Tier), ermöglicht **automatische Deployments** direkt von GitHub und hat **keine Serverless-Limitierungen** wie Vercel. Zudem ist das Setup deutlich einfacher als bei AWS oder Google Cloud.

### Was du brauchst

Bevor du startest, stelle sicher, dass du folgende Voraussetzungen erfüllst:

- **GitHub Account** mit dem WebDesignPro Repository (bereits vorhanden: `Nercc000/webdesign-pro-portfolio`)
- **Render.com Account** (kostenlos registrieren auf [render.com](https://render.com))
- **Externe Datenbank** (da Render nur PostgreSQL bietet, nicht MySQL/TiDB)
- **S3-kompatiblen Storage** (optional, falls du File-Uploads brauchst)

---

## Schritt 1: Render.com Account erstellen

Navigiere zu [render.com](https://render.com) und klicke auf **"Get Started"**. Du kannst dich direkt mit deinem **GitHub Account** anmelden, was die spätere Integration vereinfacht. Nach der Registrierung wirst du zum Render Dashboard weitergeleitet.

---

## Schritt 2: Projekt-Anpassungen vornehmen

Bevor du das Projekt auf Render deployen kannst, sind einige Anpassungen notwendig, da Render eine leicht andere Umgebung als die Manus-Entwicklungsumgebung bietet.

### 2.1 Build-Script anpassen

Das aktuelle Build-Script in der `package.json` muss für Render optimiert werden. Öffne die Datei und passe das `build`-Script an:

```json
{
  "scripts": {
    "build": "vite build && esbuild server/_core/index.ts --platform=node --packages=external --bundle --format=esm --outdir=dist",
    "start": "NODE_ENV=production node dist/index.js"
  }
}
```

Render führt automatisch `npm run build` aus und startet dann die Anwendung mit `npm start`.

### 2.2 Port-Konfiguration

Render weist deiner Anwendung automatisch einen Port über die Umgebungsvariable `PORT` zu. Stelle sicher, dass dein Server diesen Port verwendet. In der Datei `server/_core/index.ts` sollte der Port dynamisch gesetzt werden:

```typescript
const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
```

### 2.3 Datenbank-Migration

Das Projekt verwendet aktuell **MySQL/TiDB** (Manus-intern). Render bietet jedoch nur **PostgreSQL** im Free Tier an. Du hast zwei Optionen:

**Option A: PostgreSQL verwenden (empfohlen für Render)**

Du müsstest das Drizzle-Schema von MySQL auf PostgreSQL migrieren. Das bedeutet:

- Drizzle-Imports ändern: `drizzle-orm/mysql-core` → `drizzle-orm/pg-core`
- Datentypen anpassen: `mysqlTable` → `pgTable`, `int` → `integer`, etc.
- Connection-String anpassen in `server/db.ts`

**Option B: Externe MySQL-Datenbank (einfacher, aber kostenpflichtig)**

Nutze einen externen MySQL-Provider wie:

- **PlanetScale** (Free Tier: 5GB Storage, 1 Milliarde Row Reads/Monat)
- **Railway** ($5/Monat für MySQL)
- **AWS RDS** (Free Tier: 12 Monate kostenlos)

Für Option B musst du nur die `DATABASE_URL` Environment Variable in Render setzen.

---

## Schritt 3: Web Service auf Render erstellen

Jetzt geht es ans eigentliche Deployment. Folge diesen Schritten im Render Dashboard:

### 3.1 Neuen Web Service erstellen

Klicke im Dashboard auf **"New +"** und wähle **"Web Service"** aus. Render fragt dich nach dem Repository, das du deployen möchtest.

### 3.2 Repository verbinden

Wähle **"Connect a repository"** und autorisiere Render, auf deine GitHub Repositories zuzugreifen. Suche nach `Nercc000/webdesign-pro-portfolio` und klicke auf **"Connect"**.

### 3.3 Service-Konfiguration

Render zeigt dir nun ein Formular zur Konfiguration deines Services. Fülle die Felder wie folgt aus:

| Feld | Wert | Beschreibung |
|------|------|--------------|
| **Name** | `webdesignpro` | Name deines Services (wird Teil der URL) |
| **Region** | `Frankfurt (EU Central)` | Wähle die Region nächst zu deinen Nutzern |
| **Branch** | `master` | Der Git-Branch, der deployed werden soll |
| **Root Directory** | (leer lassen) | Projekt liegt im Root-Verzeichnis |
| **Environment** | `Node` | Runtime-Umgebung |
| **Build Command** | `pnpm install && pnpm run build` | Build-Befehl |
| **Start Command** | `pnpm start` | Start-Befehl für Production |
| **Plan** | `Free` | Kostenloser Plan (ausreichend für Start) |

### 3.4 Advanced Settings

Klicke auf **"Advanced"**, um weitere Einstellungen vorzunehmen:

- **Auto-Deploy**: Aktiviert (Render deployed automatisch bei jedem Git-Push)
- **Health Check Path**: `/` (Render prüft, ob deine App läuft)

---

## Schritt 4: Environment Variables setzen

Deine Anwendung benötigt verschiedene Umgebungsvariablen, um korrekt zu funktionieren. Scrolle im Konfigurationsformular zu **"Environment Variables"** und füge folgende Variablen hinzu:

### Erforderliche Environment Variables

| Variable | Beispielwert | Beschreibung |
|----------|--------------|--------------|
| `NODE_ENV` | `production` | Produktionsmodus aktivieren |
| `DATABASE_URL` | `mysql://user:pass@host:3306/db` | Datenbank-Connection-String |
| `JWT_SECRET` | `dein-sicheres-secret-hier` | Secret für JWT-Token (min. 32 Zeichen) |
| `PORT` | (automatisch gesetzt) | Wird von Render automatisch zugewiesen |

### Optionale Variables (für erweiterte Features)

Falls du die Manus-spezifischen Features weiter nutzen möchtest, benötigst du:

| Variable | Beschreibung | Notwendig? |
|----------|--------------|------------|
| `VITE_APP_TITLE` | Website-Titel | Ja |
| `VITE_APP_LOGO` | Logo-URL | Ja |
| `OAUTH_SERVER_URL` | OAuth-Server (falls du Auth behältst) | Nein* |
| `VITE_OAUTH_PORTAL_URL` | OAuth-Portal-URL | Nein* |
| `BUILT_IN_FORGE_API_URL` | Manus API URL | Nein* |
| `BUILT_IN_FORGE_API_KEY` | Manus API Key | Nein* |

**Hinweis:** Die mit * markierten Variables funktionieren nur in der Manus-Umgebung. Für Render musst du entweder die Features entfernen oder durch Alternativen ersetzen (z.B. Auth0, Clerk für Authentication).

### Secrets sicher speichern

Für sensible Daten wie `JWT_SECRET` solltest du einen **starken, zufälligen String** generieren. Du kannst dies in der Konsole tun:

```bash
node -e "console.log(require('crypto').randomBytes(32).toString('hex'))"
```

Kopiere den Output und füge ihn als `JWT_SECRET` in Render ein.

---

## Schritt 5: Datenbank einrichten (PostgreSQL)

Falls du dich für PostgreSQL entschieden hast, kannst du direkt in Render eine Datenbank erstellen:

### 5.1 PostgreSQL-Datenbank erstellen

Gehe zurück zum Render Dashboard und klicke auf **"New +"** → **"PostgreSQL"**. Wähle folgende Einstellungen:

- **Name**: `webdesignpro-db`
- **Database**: `webdesignpro`
- **User**: (automatisch generiert)
- **Region**: Gleiche wie dein Web Service
- **Plan**: `Free` (100 MB Storage, ausreichend für Start)

### 5.2 Datenbank mit Web Service verbinden

Nach der Erstellung zeigt Render dir die **Connection Details**. Kopiere die **Internal Database URL** (beginnt mit `postgresql://`).

Gehe zurück zu deinem Web Service → **"Environment"** → Füge neue Variable hinzu:

- **Key**: `DATABASE_URL`
- **Value**: (die kopierte Internal Database URL)

Die Internal URL ist schneller und kostenlos, da der Traffic innerhalb von Render bleibt.

### 5.3 Datenbank-Schema migrieren

Nach dem ersten Deployment musst du das Datenbank-Schema initialisieren. Render bietet eine **Shell** für jeden Service. Gehe zu deinem Web Service → **"Shell"** und führe aus:

```bash
pnpm run db:push
```

Dies führt die Drizzle-Migrationen aus und erstellt alle Tabellen.

---

## Schritt 6: Deployment starten

Nachdem alle Einstellungen vorgenommen wurden, klicke auf **"Create Web Service"**. Render startet nun den Build- und Deployment-Prozess.

### Was passiert jetzt?

Render führt folgende Schritte automatisch aus:

1. **Repository klonen**: Render lädt den neuesten Code von GitHub herunter
2. **Dependencies installieren**: `pnpm install` wird ausgeführt
3. **Build ausführen**: `pnpm run build` kompiliert Frontend und Backend
4. **Service starten**: `pnpm start` startet den Express-Server
5. **Health Check**: Render prüft, ob die App auf dem zugewiesenen Port antwortet

Du kannst den Fortschritt in Echtzeit im **"Logs"**-Tab verfolgen.

### Deployment-Dauer

Der erste Build dauert typischerweise **3-5 Minuten**, da alle Dependencies heruntergeladen und installiert werden müssen. Spätere Deployments sind schneller (1-2 Minuten), da Render Caching nutzt.

---

## Schritt 7: Live-URL aufrufen

Sobald das Deployment erfolgreich ist, zeigt Render dir die **Live-URL** deiner Anwendung. Sie hat das Format:

```
https://webdesignpro.onrender.com
```

Klicke auf die URL, um deine Website live zu sehen! 🎉

### Erste Tests durchführen

Überprüfe folgende Funktionen:

- **Homepage lädt korrekt**: Alle Sections (Hero, Portfolio, Services, etc.) werden angezeigt
- **Animationen funktionieren**: Scroll-Animationen, Hover-Effekte, etc.
- **Responsive Design**: Teste auf Mobile (Chrome DevTools → Device Toolbar)
- **Datenbank-Verbindung**: Falls du User-Features hast, teste Login/Registrierung

---

## Schritt 8: Custom Domain verbinden (optional)

Die Standard-URL `*.onrender.com` ist funktional, aber für ein professionelles Portfolio möchtest du vielleicht eine eigene Domain wie `webdesignpro.de`.

### 8.1 Domain kaufen

Falls du noch keine Domain hast, kannst du eine bei folgenden Anbietern kaufen:

- **Namecheap** (günstig, ca. €10/Jahr für .de)
- **Google Domains** (einfach, ca. €12/Jahr)
- **Cloudflare** (günstig, ca. €9/Jahr)

### 8.2 Domain in Render hinzufügen

Gehe zu deinem Web Service → **"Settings"** → **"Custom Domain"** → **"Add Custom Domain"**.

Gib deine Domain ein (z.B. `webdesignpro.de`) und klicke auf **"Add"**.

### 8.3 DNS-Einträge konfigurieren

Render zeigt dir nun die DNS-Einträge, die du bei deinem Domain-Provider setzen musst:

| Type | Name | Value |
|------|------|-------|
| **CNAME** | `www` | `webdesignpro.onrender.com` |
| **A** | `@` | (Render IP-Adresse) |

Logge dich bei deinem Domain-Provider ein, gehe zu den DNS-Einstellungen und füge diese Einträge hinzu.

### 8.4 SSL-Zertifikat

Render erstellt automatisch ein **kostenloses SSL-Zertifikat** (Let's Encrypt) für deine Domain. Dies dauert ca. 5-10 Minuten nach der DNS-Konfiguration. Danach ist deine Website über `https://webdesignpro.de` erreichbar.

---

## Schritt 9: Automatische Deployments

Ein großer Vorteil von Render ist die **automatische Deployment-Pipeline**. Jedes Mal, wenn du Code zu GitHub pushst, deployed Render automatisch die neue Version.

### Workflow

Der typische Workflow sieht so aus:

1. **Lokal entwickeln**: Mache Änderungen in deinem Code
2. **Committen**: `git add .` → `git commit -m "Neue Features"`
3. **Pushen**: `git push github master`
4. **Automatisches Deployment**: Render erkennt den Push und startet Build
5. **Live in 2-3 Minuten**: Neue Version ist automatisch online

Du musst nichts manuell deployen – alles passiert automatisch!

### Deployment-Benachrichtigungen

Render kann dich per **E-Mail** oder **Slack** benachrichtigen, wenn ein Deployment erfolgreich war oder fehlgeschlagen ist. Aktiviere dies unter **"Settings"** → **"Notifications"**.

---

## Schritt 10: Monitoring & Logs

Render bietet eingebaute Tools, um deine Anwendung zu überwachen und Fehler zu debuggen.

### Logs anzeigen

Gehe zu deinem Web Service → **"Logs"**. Hier siehst du alle Console-Outputs deiner Anwendung in Echtzeit. Das ist besonders nützlich für Debugging.

### Metrics

Unter **"Metrics"** siehst du wichtige Performance-Daten:

- **CPU Usage**: Wie viel Rechenleistung deine App nutzt
- **Memory Usage**: RAM-Verbrauch
- **Response Time**: Durchschnittliche Antwortzeit
- **Request Count**: Anzahl der Requests pro Minute

Im **Free Tier** sind die Metrics auf 7 Tage begrenzt. Für längere Historie benötigst du einen kostenpflichtigen Plan.

---

## Troubleshooting

Falls beim Deployment Probleme auftreten, findest du hier Lösungen für häufige Fehler.

### Build schlägt fehl

**Problem**: Der Build-Prozess bricht mit einem Fehler ab.

**Lösung**: Überprüfe die Logs im "Logs"-Tab. Häufige Ursachen sind:

- **Fehlende Dependencies**: Stelle sicher, dass alle Packages in `package.json` aufgelistet sind
- **TypeScript-Fehler**: Führe lokal `pnpm run check` aus, um Fehler zu finden
- **Node-Version**: Render nutzt standardmäßig Node 20. Falls du eine andere Version brauchst, setze `NODE_VERSION` Environment Variable

### App startet nicht

**Problem**: Build erfolgreich, aber die App antwortet nicht auf Requests.

**Lösung**: Häufige Ursachen:

- **Port nicht korrekt**: Stelle sicher, dass deine App `process.env.PORT` verwendet
- **Datenbank-Verbindung fehlgeschlagen**: Überprüfe `DATABASE_URL` in den Environment Variables
- **Fehlende Environment Variables**: Vergleiche mit der Liste in Schritt 4

### Langsame Performance

**Problem**: Die Website lädt sehr langsam.

**Lösung**: Der Free Tier von Render hat Limitierungen:

- **Cold Starts**: Nach 15 Minuten Inaktivität schläft der Service ein. Der erste Request danach dauert 30-60 Sekunden
- **Shared Resources**: Free Tier teilt sich CPU/RAM mit anderen Apps
- **Upgrade auf Starter Plan** ($7/Monat): Kein Cold Start, dedizierte Ressourcen

### Datenbank-Fehler

**Problem**: Fehler beim Verbinden zur Datenbank.

**Lösung**:

- **Internal URL verwenden**: Nutze die "Internal Database URL" statt der externen
- **SSL-Modus**: Manche Datenbanken erfordern `?sslmode=require` am Ende der URL
- **Firewall**: Falls du externe DB nutzt, stelle sicher, dass Render IPs erlaubt sind

---

## Kosten-Übersicht

Render bietet verschiedene Pricing-Tiers. Hier ist eine Übersicht, was du für dein Projekt brauchst:

### Free Tier (Kostenlos)

**Inkludiert:**
- 750 Stunden Web Service pro Monat (ausreichend für 1 Service 24/7)
- 100 GB Bandwidth
- PostgreSQL Datenbank (100 MB Storage)
- Automatische SSL-Zertifikate
- Automatische Deployments von GitHub

**Limitierungen:**
- Cold Starts nach 15 Minuten Inaktivität
- Shared CPU/RAM
- Services schlafen nach Inaktivität ein

**Geeignet für:** Entwicklung, Testing, kleine Portfolio-Sites mit wenig Traffic

### Starter Plan ($7/Monat)

**Zusätzlich zu Free:**
- Kein Cold Start (Service läuft 24/7)
- Dedizierte Ressourcen (512 MB RAM)
- Schnellere Performance
- Priority Support

**Geeignet für:** Produktive Portfolio-Sites, kleine Business-Websites

### Standard Plan ($25/Monat)

**Zusätzlich zu Starter:**
- 2 GB RAM
- Mehr CPU
- Erweiterte Metrics (90 Tage)
- Team-Collaboration

**Geeignet für:** Größere Anwendungen, mehr Traffic

### Empfehlung

Für dein Portfolio-Projekt empfehle ich zu starten mit:

- **Free Tier** für die ersten Wochen (Testing, Feedback sammeln)
- **Upgrade auf Starter** ($7/Monat) sobald du die Website aktiv nutzt und Cold Starts vermeiden willst

---

## Alternativen zu Render

Falls Render nicht deinen Anforderungen entspricht, gibt es weitere Optionen:

### Railway.app

**Vorteile:**
- Sehr einfaches Setup
- MySQL-Support (statt nur PostgreSQL)
- Großzügiger Free Tier ($5 Guthaben/Monat)
- Schnelle Deployments

**Nachteile:**
- Nach Free Tier relativ teuer ($5-20/Monat)
- Weniger Features als Render

**Geeignet für:** Wenn du MySQL behalten willst

### Fly.io

**Vorteile:**
- Sehr schnell (Edge-Deployment weltweit)
- Kostenloser Free Tier (3 VMs)
- Volle Docker-Kontrolle

**Nachteile:**
- Komplexeres Setup (Docker-Kenntnisse nötig)
- Keine integrierte Datenbank

**Geeignet für:** Fortgeschrittene Nutzer mit Docker-Erfahrung

### Manus Publish (Empfohlen!)

**Vorteile:**
- Ein-Klick-Deployment
- Alle Features funktionieren out-of-the-box
- Datenbank, Storage, Auth bereits integriert
- Kostenlos für dein Projekt

**Nachteile:**
- Nur für Manus-Projekte
- Keine Custom Domain (nur *.manus.space)

**Geeignet für:** Schnelles Deployment ohne Konfiguration

---

## Zusammenfassung

Du hast nun einen vollständigen Guide, um dein WebDesignPro-Projekt auf Render.com zu deployen. Die wichtigsten Schritte nochmal im Überblick:

**Vorbereitung:**
- Render Account erstellen
- Projekt-Anpassungen vornehmen (Port, Datenbank)
- Environment Variables vorbereiten

**Deployment:**
- Web Service auf Render erstellen
- GitHub Repository verbinden
- Build & Start Commands konfigurieren
- Environment Variables setzen
- Datenbank einrichten (PostgreSQL oder extern)

**Nach dem Deployment:**
- Live-URL testen
- Custom Domain verbinden (optional)
- Automatische Deployments nutzen
- Monitoring & Logs überwachen

**Wichtig:** Für dieses spezifische Projekt musst du entweder die Manus-spezifischen Features (OAuth, S3, etc.) durch Alternativen ersetzen oder auf **Manus Publish** setzen, wo alles bereits funktioniert.

Falls du Fragen hast oder beim Deployment auf Probleme stößt, schau in die Logs oder kontaktiere den Render Support. Viel Erfolg mit deinem Deployment! 🚀

---

## Weiterführende Ressourcen

- [Render Dokumentation](https://render.com/docs)
- [Render Community Forum](https://community.render.com)
- [Drizzle ORM Dokumentation](https://orm.drizzle.team)
- [Express.js Best Practices](https://expressjs.com/en/advanced/best-practice-performance.html)
