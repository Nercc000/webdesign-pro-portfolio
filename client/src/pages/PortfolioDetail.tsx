import Layout from "@/components/Layout";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { motion } from "framer-motion";
import { 
  ArrowLeft,
  ArrowRight,
  ExternalLink,
  Calendar,
  Users,
  Target,
  CheckCircle2,
  TrendingUp,
  Lightbulb,
  Rocket
} from "lucide-react";
import { Link, useParams } from "wouter";
import StackIcon from "tech-stack-icons";
import { useEffect } from "react";

// Mock data - in real app würde dies von einer API kommen
const projectDetails: Record<string, any> = {
  "cafe-bohne": {
    id: "cafe-bohne",
    title: "Café Bohne",
    category: "Gastronomie",
    client: "Café Bohne",
    logo: "/logo-cafe-bohne.png",
    duration: "3 Monate",
    team: "2 Entwickler, 1 Designer",
    year: "2024",
    description: "Moderne Website für lokales Café mit Online-Bestellsystem und digitaler Speisekarte.",
    image: "/website-cafe-bohne.jpg",
    demoLink: "https://cafe-bohne-demo.example.com",
    tags: [
      { name: "React", icon: "react" },
      { name: "Node.js", icon: "nodejs" },
      { name: "Tailwind", icon: "tailwindcss" }
    ],
    challenge: "Das Café hatte keine Möglichkeit für Online-Bestellungen und verlor Kunden an die Konkurrenz. Viele Anrufe für einfache Bestellungen blockierten die Telefone.",
    solution: "Wir haben eine benutzerfreundliche Website mit Online-Bestellsystem entwickelt. Kunden können jetzt einfach ihre Lieblingsgetränke und Snacks bestellen und abholen.",
    results: [
      { metric: "Online-Bestellungen", value: "+65%", description: "Seit dem Launch" },
      { metric: "Umsatz", value: "+€28k", description: "Im ersten Quartal" },
      { metric: "Neue Kunden", value: "850+", description: "Durch Online-Präsenz" },
      { metric: "Telefonanrufe", value: "-40%", description: "Weniger Anrufe, mehr Zeit für Kunden" }
    ],
    features: [
      "Online-Bestellsystem",
      "Digitale Speisekarte",
      "Abholzeit-Auswahl",
      "Kundenkonto mit Bestellhistorie",
      "Mobile-optimiert",
      "Google Maps Integration"
    ],
    testimonial: {
      text: "Seit der neuen Website haben wir 65% mehr Online-Bestellungen. Die Kunden lieben das moderne Design!",
      author: "Maria Schneider",
      role: "Inhaberin, Café Bohne"
    }
  },
  "boutique-luna": {
    id: "boutique-luna",
    title: "Boutique Luna",
    category: "E-Commerce",
    client: "Boutique Luna",
    logo: "/logo-boutique-luna.png",
    duration: "4 Monate",
    team: "3 Entwickler, 1 Designer",
    year: "2024",
    description: "Eleganter Online-Shop für Modeboutique mit Produktfiltern und sicherem Checkout.",
    image: "/website-boutique-luna.jpg",
    demoLink: "https://boutique-luna-demo.example.com",
    tags: [
      { name: "Next.js", icon: "nextjs2" },
      { name: "TypeScript", icon: "typescript" },
      { name: "Tailwind", icon: "tailwindcss" }
    ],
    challenge: "Die Boutique verkaufte nur im Laden und erreichte keine neuen Kunden. Ohne Online-Shop gingen viele potenzielle Verkäufe verloren.",
    solution: "Wir haben einen eleganten Online-Shop entwickelt, der die Marke perfekt repräsentiert. Mit Produktfiltern, hochauflösenden Bildern und sicherem Checkout.",
    results: [
      { metric: "Verkäufe", value: "+80%", description: "Umsatzsteigerung" },
      { metric: "Conversion Rate", value: "+142%", description: "Mehr Käufer" },
      { metric: "Umsatz", value: "+€95k", description: "Im ersten Quartal" },
      { metric: "Reichweite", value: "+320%", description: "Neue Kundengruppen erreicht" }
    ],
    features: [
      "Produktfilter nach Größe, Farbe, Stil",
      "Hochauflösende Produktbilder",
      "Sicherer Checkout-Prozess",
      "Kundenkonto mit Wunschliste",
      "Newsletter-Integration",
      "Responsive Design"
    ],
    testimonial: {
      text: "Endlich ein Online-Shop, der unsere Marke perfekt repräsentiert. Die Verkäufe sind um 80% gestiegen!",
      author: "Sophie Wagner",
      role: "Geschäftsführerin, Boutique Luna"
    }
  },
  "fitstark-studio": {
    id: "fitstark-studio",
    title: "FitStark Studio",
    category: "Fitness",
    client: "FitStark Studio",
    logo: "/logo-fitness-stark.png",
    duration: "5 Monate",
    team: "3 Entwickler, 1 Designer, 1 PM",
    year: "2024",
    description: "Professionelle Website für Fitnessstudio mit Kursplan, Online-Buchung und Mitgliederverwaltung.",
    image: "/website-fitstark.jpg",
    demoLink: "https://fitstark-demo.example.com",
    tags: [
      { name: "React", icon: "react" },
      { name: "Node.js", icon: "nodejs" },
      { name: "PostgreSQL", icon: "postgresql" }
    ],
    challenge: "Das Fitnessstudio verwaltete alles manuell - Kursbuchungen, Mitgliedschaften und Zahlungen. Das kostete viel Zeit und führte zu Fehlern.",
    solution: "Wir haben eine komplette Plattform entwickelt mit Online-Buchungssystem, Mitgliederverwaltung und automatischen Zahlungen. Alles an einem Ort.",
    results: [
      { metric: "Neue Mitglieder", value: "+120", description: "In 2 Monaten" },
      { metric: "Kursbuchungen", value: "+245%", description: "Durch einfaches Online-System" },
      { metric: "Mitgliederbindung", value: "94%", description: "Hohe Zufriedenheit" },
      { metric: "Verwaltungszeit", value: "-60%", description: "Durch Automatisierung" }
    ],
    features: [
      "Online-Kursbuchung",
      "Mitgliederverwaltung",
      "Automatische Zahlungsabwicklung",
      "Digitaler Kursplan",
      "Mitglieder-App",
      "Trainer-Dashboard"
    ],
    testimonial: {
      text: "Die Website hat uns geholfen, 120 neue Mitglieder in nur 2 Monaten zu gewinnen. Absolut empfehlenswert!",
      author: "Markus Kraft",
      role: "Inhaber, FitStark Studio"
    }
  },
  "bella-cucina": {
    id: "bella-cucina",
    title: "Bella Cucina",
    category: "Gastronomie",
    client: "Bella Cucina",
    logo: "/logo-restaurant-bella.png",
    duration: "3 Monate",
    team: "2 Entwickler, 1 Designer",
    year: "2024",
    description: "Ansprechende Restaurant-Website mit Online-Reservierung und digitaler Speisekarte.",
    image: "/website-bella-cucina.jpg",
    demoLink: "https://bella-cucina-demo.example.com",
    tags: [
      { name: "React", icon: "react" },
      { name: "Tailwind", icon: "tailwindcss" },
      { name: "JavaScript", icon: "js" }
    ],
    challenge: "Das Restaurant nahm Reservierungen nur telefonisch entgegen. Viele Anrufe gingen verloren und die Tischplanung war chaotisch.",
    solution: "Wir haben eine elegante Website mit Online-Reservierungssystem entwickelt. Gäste können jetzt einfach online einen Tisch buchen und die Speisekarte ansehen.",
    results: [
      { metric: "Reservierungen", value: "+100%", description: "Verdoppelt" },
      { metric: "Telefonanrufe", value: "-45%", description: "Mehr Zeit für Gäste" },
      { metric: "Bewertungen", value: "4.9/5", description: "Auf Google" },
      { metric: "No-Shows", value: "-35%", description: "Durch Erinnerungen" }
    ],
    features: [
      "Online-Reservierungssystem",
      "Digitale Speisekarte",
      "Tischverwaltung",
      "Automatische Erinnerungen",
      "Google Maps Integration",
      "Mehrsprachig (DE/IT/EN)"
    ],
    testimonial: {
      text: "Unsere Reservierungen haben sich verdoppelt. Die Website zeigt perfekt, was unser Restaurant besonders macht.",
      author: "Giovanni Rossi",
      role: "Chefkoch & Inhaber, Bella Cucina"
    }
  },
  "1": {
    id: 1,
    title: "E-Commerce Revolution",
    category: "E-Commerce",
    client: "Fashion Retailer GmbH",
    duration: "6 Monate",
    team: "4 Entwickler, 1 Designer, 1 PM",
    year: "2024",
    description: "Moderner Online-Shop mit intelligenten Produktempfehlungen und einfachem Checkout.",
    image: "/portfolio-ecommerce.jpg",
    tags: [
      { name: "React", icon: "react" },
      { name: "Node.js", icon: "nodejs" },
      { name: "JavaScript", icon: "js" }
    ],
    challenge: "Der Kunde hatte eine alte Website mit hoher Absprungrate (78%) und wenigen Käufen (0.8%). Der Bestellprozess war kompliziert und funktionierte auf Handys nicht gut.",
    solution: "Wir haben eine moderne, schnelle Website entwickelt mit intelligenten Produktvorschlägen und einfachem Checkout. Die Seite funktioniert perfekt auf allen Geräten und lädt sehr schnell.",
    results: [
      { metric: "Conversion Rate", value: "+127%", description: "Von 0.8% auf 1.8%" },
      { metric: "Umsatz", value: "+€450k", description: "Im ersten Jahr" },
      { metric: "Mobile Traffic", value: "+215%", description: "Durch PWA-Features" },
      { metric: "Page Load Time", value: "-65%", description: "Von 4.2s auf 1.5s" }
    ],
    features: [
      "Intelligente Produktvorschläge",
      "Einfacher Checkout-Prozess",
      "Personalisierte Inhalte für jeden Kunden",
      "Funktioniert wie eine App",
      "Lagerbestand in Echtzeit",
      "Mehrere Währungen unterstützt"
    ],
    testimonial: {
      text: "Die neue Website hat unsere Erwartungen übertroffen. Wir haben deutlich mehr Käufe und unsere Kunden sind begeistert von der einfachen Bedienung.",
      author: "Maria Schmidt",
      role: "CEO, Fashion Retailer GmbH"
    }
  },
  "2": {
    id: 2,
    title: "Creative Studio Portfolio",
    category: "Portfolio",
    client: "Design Studio Berlin",
    duration: "3 Monate",
    team: "2 Entwickler, 1 Designer",
    year: "2024",
    description: "Minimalistisches Portfolio mit interaktiven Projektgalerien und flüssigen Animationen.",
    image: "/portfolio-creative.jpg",
    tags: [
      { name: "Next.js", icon: "nextjs2" },
      { name: "Tailwind", icon: "tailwindcss" }
    ],
    challenge: "Das Design Studio brauchte eine Portfolio-Website, die ihre Arbeit gut zeigt und neue Kunden gewinnt. Die alte Website war langweilig und nicht ansprechend.",
    solution: "Wir haben ein modernes Portfolio mit interaktiven Galerien und schönen Animationen erstellt. Jedes Projekt wird mit großen Bildern und ausführlichen Beschreibungen präsentiert.",
    results: [
      { metric: "Engagement Rate", value: "+215%", description: "Mehr Zeit auf der Website" },
      { metric: "Lead Generation", value: "+89%", description: "Mehr Kundenanfragen" },
      { metric: "Bounce Rate", value: "-42%", description: "Bessere User Experience" },
      { metric: "Page Views", value: "+156%", description: "Pro Session" }
    ],
    features: [
      "Interaktive Projektgalerien",
      "Schöne Scroll-Effekte",
      "Flüssige Seitenübergänge",
      "Schnelles Laden der Bilder",
      "Optimiert für Google",
      "Kontaktformular integriert"
    ],
    testimonial: {
      text: "Unser neues Portfolio ist genau das, was wir brauchten. Das Design zeigt perfekt unsere kreative Arbeit und wir bekommen viel mehr Anfragen.",
      author: "Thomas Weber",
      role: "Creative Director, Design Studio Berlin"
    }
  }
};

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.6 }
  }
};

const staggerContainer = {
  hidden: { opacity: 1 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15
    }
  }
};

export default function PortfolioDetail() {
  const params = useParams();
  const projectId = params.id;
  const project = projectDetails[projectId || "1"];

  // Automatisch nach oben scrollen beim Öffnen der Seite
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [projectId]);

  if (!project) {
    return (
      <Layout>
        <div className="container py-20 text-center">
          <h1 className="mb-4 text-4xl font-bold">Projekt nicht gefunden</h1>
          <Link href="/portfolio">
            <Button>
              <ArrowLeft className="mr-2 h-4 w-4" />
              Zurück zum Portfolio
            </Button>
          </Link>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <div className="min-h-screen">
        {/* Hero Section */}
        <section className="relative overflow-hidden py-20 pt-32 md:pt-20">
          <div className="absolute inset-0 -z-10">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,rgba(59,130,246,0.1),rgba(0,0,0,0))]" />
          </div>

          <div className="container">
            <Link href="/portfolio">
              <Button variant="ghost" className="mb-8">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Zurück zum Portfolio
              </Button>
            </Link>

            <motion.div
              initial="hidden"
              animate="visible"
              variants={staggerContainer}
              className="grid gap-12 lg:grid-cols-2 lg:gap-16"
            >
              <motion.div variants={fadeInUp}>
                {project.logo && (
                  <div className="mb-6 flex items-center gap-4">
                    <img src={project.logo} alt={project.client} loading="lazy" className="h-16 w-16 rounded-lg object-contain bg-white p-2 border border-primary/20" />
                    <div>
                      <Badge className="mb-1">{project.category}</Badge>
                      <div className="text-sm text-muted-foreground">{project.client}</div>
                    </div>
                  </div>
                )}
                {!project.logo && <Badge className="mb-4">{project.category}</Badge>}
                <h1 className="mb-6 text-4xl font-black md:text-5xl lg:text-6xl">
                  {project.title}
                </h1>
                <p className="mb-8 text-xl text-muted-foreground">
                  {project.description}
                </p>

                <div className="mb-8 grid grid-cols-2 gap-4">
                  <div className="flex items-start gap-3">
                    <Users className="mt-1 h-5 w-5 text-primary" />
                    <div>
                      <div className="text-sm text-muted-foreground">Client</div>
                      <div className="font-semibold">{project.client}</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Calendar className="mt-1 h-5 w-5 text-primary" />
                    <div>
                      <div className="text-sm text-muted-foreground">Duration</div>
                      <div className="font-semibold">{project.duration}</div>
                    </div>
                  </div>
                </div>

                <div className="flex flex-wrap gap-2 mb-8">
                  {project.tags.map((tag: any, idx: number) => (
                    <div
                      key={idx}
                      className="flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-2"
                    >
                      <StackIcon name={tag.icon} className="h-4 w-4" />
                      <span className="text-sm font-medium">{tag.name}</span>
                    </div>
                  ))}
                </div>
                
                {project.demoLink && (
                  <a 
                    href={project.demoLink} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-lg bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-all hover:bg-primary/90"
                  >
                    <ExternalLink className="h-4 w-4" />
                    Demo-Website ansehen
                  </a>
                )}
              </motion.div>

              <motion.div variants={fadeInUp}>
                <div className="overflow-hidden rounded-lg border border-primary/20">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    loading="lazy"
                    className="h-full w-full object-cover"
                  />
                </div>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Challenge Section */}
        <section className="py-20 bg-muted/30">
          <div className="container">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={staggerContainer}
              className="grid gap-12 lg:grid-cols-2"
            >
              <motion.div variants={fadeInUp}>
                <div className="mb-4 flex items-center gap-3">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                    <Target className="h-6 w-6 text-primary" />
                  </div>
                  <h2 className="text-3xl font-bold">Das Problem</h2>
                </div>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  {project.challenge}
                </p>
              </motion.div>

              <motion.div variants={fadeInUp}>
                <div className="mb-4 flex items-center gap-3">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                    <Lightbulb className="h-6 w-6 text-primary" />
                  </div>
                  <h2 className="text-3xl font-bold">Unsere Lösung</h2>
                </div>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  {project.solution}
                </p>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Results Section */}
        <section className="py-20">
          <div className="container">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={fadeInUp}
              className="mb-12 text-center"
            >
              <div className="mb-4 inline-flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                <TrendingUp className="h-8 w-8 text-primary" />
              </div>
              <h2 className="mb-4 text-3xl font-bold md:text-4xl">Die Ergebnisse</h2>
              <p className="text-muted-foreground">Zahlen, die für sich sprechen</p>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={staggerContainer}
              className="grid gap-6 md:grid-cols-2 lg:grid-cols-4"
            >
              {project.results.map((result: any, index: number) => (
                <motion.div key={index} variants={fadeInUp}>
                  <Card className="border-primary/10 bg-card/50 p-6 text-center backdrop-blur transition-all hover:border-primary/30 hover:shadow-lg">
                    <div className="mb-2 text-4xl font-black text-primary">{result.value}</div>
                    <div className="mb-2 font-semibold">{result.metric}</div>
                    <div className="text-sm text-muted-foreground">{result.description}</div>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 bg-muted/30">
          <div className="container">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={fadeInUp}
              className="mb-12 text-center"
            >
              <div className="mb-4 inline-flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                <Rocket className="h-8 w-8 text-primary" />
              </div>
              <h2 className="mb-4 text-3xl font-bold md:text-4xl">Funktionen</h2>
              <p className="text-muted-foreground">Was wir umgesetzt haben</p>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={staggerContainer}
              className="grid gap-4 md:grid-cols-2 lg:grid-cols-3"
            >
              {project.features.map((feature: string, index: number) => (
                <motion.div key={index} variants={fadeInUp}>
                  <Card className="flex items-start gap-3 border-primary/10 bg-card/50 p-4 backdrop-blur transition-all hover:border-primary/30">
                    <CheckCircle2 className="mt-0.5 h-5 w-5 flex-shrink-0 text-primary" />
                    <span className="font-medium">{feature}</span>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Testimonial Section */}
        <section className="py-20">
          <div className="container">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={fadeInUp}
            >
              <Card className="border-primary/20 bg-gradient-to-br from-primary/10 via-primary/5 to-transparent p-12 backdrop-blur">
                <div className="mx-auto max-w-3xl text-center">
                  <div className="mb-6 text-6xl text-primary">"</div>
                  <p className="mb-8 text-2xl font-medium leading-relaxed">
                    {project.testimonial.text}
                  </p>
                  <div>
                    <div className="font-bold">{project.testimonial.author}</div>
                    <div className="text-sm text-muted-foreground">{project.testimonial.role}</div>
                  </div>
                </div>
              </Card>
            </motion.div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-muted/30">
          <div className="container">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={fadeInUp}
              className="text-center"
            >
              <h2 className="mb-4 text-3xl font-bold md:text-4xl">
                Möchten Sie auch so ein Projekt?
              </h2>
              <p className="mx-auto mb-8 max-w-2xl text-lg text-muted-foreground">
                Lassen Sie uns gemeinsam Ihre Website erstellen.
              </p>
              <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
                <Button size="lg" className="group">
                  <span>Kostenloses Erstgespräch</span>
                  <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                </Button>
                <Link href="/portfolio">
                  <Button size="lg" variant="outline">
                    <ArrowLeft className="mr-2 h-5 w-5" />
                    <span>Zurück zum Portfolio</span>
                  </Button>
                </Link>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </Layout>
  );
}
