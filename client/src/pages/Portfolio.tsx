import Layout from "@/components/Layout";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { motion } from "framer-motion";
import { 
  ArrowRight,
  ExternalLink,
  Sparkles,
  Zap,
  TrendingUp,
  Heart,
  Globe,
  Palette,
  Filter
} from "lucide-react";
import StackIcon from "tech-stack-icons";
import { useState } from "react";
import { Link } from "wouter";

// Portfolio-Projekte
const portfolioProjects = [
  {
    id: "cafe-bohne",
    title: "Café Bohne",
    category: "Gastronomie",
    description: "Moderne Website für lokales Café mit Online-Bestellsystem und Speisekarte. 65% mehr Online-Bestellungen seit dem Launch.",
    image: "/website-cafe-bohne.jpg",
    logo: "/logo-cafe-bohne.png",
    tags: [
      { name: "React", icon: "react" },
      { name: "Node.js", icon: "nodejs" },
      { name: "Tailwind", icon: "tailwindcss" }
    ],
    metrics: {
      orders: "+65%",
      revenue: "+€28k",
      customers: "850+"
    },
    icon: Heart,
    gradient: "from-amber-500/20 via-orange-500/20 to-brown-500/20",
    demoLink: "https://cafe-bohne-demo.example.com",
    testimonial: {
      name: "Maria Schneider",
      position: "Inhaberin",
      text: "Seit der neuen Website haben wir 65% mehr Online-Bestellungen. Die Kunden lieben das moderne Design!"
    }
  },
  {
    id: "boutique-luna",
    title: "Boutique Luna",
    category: "E-Commerce",
    description: "Eleganter Online-Shop für Modeboutique mit Produktfiltern und sicherem Checkout. 80% Umsatzsteigerung im ersten Quartal.",
    image: "/website-boutique-luna.jpg",
    logo: "/logo-boutique-luna.png",
    tags: [
      { name: "Next.js", icon: "nextjs2" },
      { name: "TypeScript", icon: "typescript" },
      { name: "Tailwind", icon: "tailwindcss" }
    ],
    metrics: {
      sales: "+80%",
      conversion: "+142%",
      revenue: "+€95k"
    },
    icon: Sparkles,
    gradient: "from-purple-500/20 via-pink-500/20 to-rose-500/20",
    demoLink: "https://boutique-luna-demo.example.com",
    testimonial: {
      name: "Sophie Wagner",
      position: "Geschäftsführerin",
      text: "Endlich ein Online-Shop, der unsere Marke perfekt repräsentiert. Die Verkäufe sind um 80% gestiegen!"
    }
  },
  {
    id: "fitstark-studio",
    title: "FitStark Studio",
    category: "Fitness",
    description: "Professionelle Website für Fitnessstudio mit Kursplan, Online-Buchung und Mitgliederverwaltung. 120 neue Mitglieder in 2 Monaten.",
    image: "/website-fitstark.jpg",
    logo: "/logo-fitness-stark.png",
    tags: [
      { name: "React", icon: "react" },
      { name: "Node.js", icon: "nodejs" },
      { name: "PostgreSQL", icon: "postgresql" }
    ],
    metrics: {
      members: "+120",
      bookings: "+245%",
      retention: "94%"
    },
    icon: Zap,
    gradient: "from-emerald-500/20 via-green-500/20 to-lime-500/20",
    demoLink: "https://fitstark-demo.example.com",
    testimonial: {
      name: "Markus Kraft",
      position: "Inhaber",
      text: "Die Website hat uns geholfen, 120 neue Mitglieder in nur 2 Monaten zu gewinnen. Absolut empfehlenswert!"
    }
  },
  {
    id: "bella-cucina",
    title: "Bella Cucina",
    category: "Gastronomie",
    description: "Ansprechende Restaurant-Website mit Online-Reservierung und digitaler Speisekarte. Reservierungen haben sich verdoppelt.",
    image: "/website-bella-cucina.jpg",
    logo: "/logo-restaurant-bella.png",
    tags: [
      { name: "React", icon: "react" },
      { name: "Tailwind", icon: "tailwindcss" },
      { name: "JavaScript", icon: "js" }
    ],
    metrics: {
      reservations: "+100%",
      calls: "-45%",
      reviews: "4.9/5"
    },
    icon: Heart,
    gradient: "from-red-500/20 via-rose-500/20 to-pink-500/20",
    demoLink: "https://bella-cucina-demo.example.com",
    testimonial: {
      name: "Giovanni Rossi",
      position: "Chefkoch & Inhaber",
      text: "Unsere Reservierungen haben sich verdoppelt. Die Website zeigt perfekt, was unser Restaurant besonders macht."
    }
  },
  {
    id: 1,
    title: "E-Commerce Revolution",
    category: "E-Commerce",
    description: "Moderner Online-Shop mit intelligenten Produktempfehlungen und einfachem Checkout. Umsatzsteigerung von über 450.000€ im ersten Jahr.",
    image: "/portfolio-ecommerce.jpg",
    tags: [
      { name: "React", icon: "react" },
      { name: "Node.js", icon: "nodejs" },
      { name: "JavaScript", icon: "js" }
    ],
    metrics: {
      conversion: "+127%",
      revenue: "+€450k",
      users: "15k+"
    },
    icon: Sparkles,
    gradient: "from-purple-500/20 via-pink-500/20 to-rose-500/20"
  },
  {
    id: 2,
    title: "Creative Studio Portfolio",
    category: "Portfolio",
    description: "Minimalistisches Portfolio für Kreativagenturen mit interaktiven Projektgalerien und flüssigen Animationen. Mehr Kundenanfragen durch bessere Präsentation.",
    image: "/portfolio-creative.jpg",
    tags: [
      { name: "Next.js", icon: "nextjs2" },
      { name: "Tailwind", icon: "tailwindcss" }
    ],
    metrics: {
      engagement: "+215%",
      leads: "+89%",
      bounce: "-42%"
    },
    icon: Palette,
    gradient: "from-blue-500/20 via-cyan-500/20 to-teal-500/20"
  },
  {
    id: 3,
    title: "SaaS Analytics Dashboard",
    category: "SaaS",
    description: "Übersichtliches Dashboard mit Echtzeit-Daten und automatischen Reports. Hilft Unternehmen, bessere Entscheidungen zu treffen.",
    image: "/portfolio-analytics.jpg",
    tags: [
      { name: "React", icon: "react" },
      { name: "PostgreSQL", icon: "postgresql" }
    ],
    metrics: {
      efficiency: "+180%",
      time: "-65%",
      accuracy: "99.2%"
    },
    icon: TrendingUp,
    gradient: "from-emerald-500/20 via-green-500/20 to-lime-500/20"
  },
  {
    id: 4,
    title: "Startup Landing Page",
    category: "Marketing",
    description: "Verkaufsstarke Landingpage mit schneller Ladezeit und optimierter Benutzerführung. Mehr Kunden durch besseres Design.",
    image: "/portfolio-landing.jpg",
    tags: [
      { name: "React", icon: "react" },
      { name: "Vite", icon: "vitejs" }
    ],
    metrics: {
      conversion: "+340%",
      speed: "0.8s",
      seo: "98/100"
    },
    icon: Zap,
    gradient: "from-orange-500/20 via-amber-500/20 to-yellow-500/20"
  },
  {
    id: 5,
    title: "Multi-Language Platform",
    category: "Enterprise",
    description: "Internationale Plattform mit 12 Sprachen für weltweite Reichweite. Automatische Übersetzung und lokale Anpassungen.",
    image: "/portfolio-multilang.jpg",
    tags: [
      { name: "Next.js", icon: "nextjs2" },
      { name: "TypeScript", icon: "typescript" }
    ],
    metrics: {
      markets: "12",
      users: "50k+",
      languages: "12"
    },
    icon: Globe,
    gradient: "from-indigo-500/20 via-purple-500/20 to-pink-500/20"
  },
  {
    id: 6,
    title: "Spenden-Platform",
    category: "Non-Profit",
    description: "Moderne Spenden-Website mit transparenter Darstellung der Wirkung. Automatische Spendenbescheinigungen und einfache Bezahlung.",
    image: "/portfolio-nonprofit.jpg",
    tags: [
      { name: "React", icon: "react" },
      { name: "Node.js", icon: "nodejs" }
    ],
    metrics: {
      donations: "+€280k",
      donors: "3.2k+",
      impact: "100%"
    },
    icon: Heart,
    gradient: "from-rose-500/20 via-red-500/20 to-pink-500/20"
  }
];

// Animation Variants
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
      staggerChildren: 0.2
    }
  }
};

const scaleIn = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: { 
    opacity: 1, 
    scale: 1,
    transition: { duration: 0.5 }
  }
};

const slideInLeft = {
  hidden: { opacity: 0, x: -60 },
  visible: { 
    opacity: 1, 
    x: 0,
    transition: { duration: 0.6 }
  }
};

const slideInRight = {
  hidden: { opacity: 0, x: 60 },
  visible: { 
    opacity: 1, 
    x: 0,
    transition: { duration: 0.6 }
  }
};

// Project Card mit alternierenden Animationen
const ProjectCard = ({ project, index }: { project: typeof portfolioProjects[0], index: number }) => {
  const Icon = project.icon;
  const direction = index % 2 === 0 ? slideInLeft : slideInRight;

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={direction}
      className="group"
    >
      <Card className="overflow-hidden border-primary/10 bg-card/50 backdrop-blur transition-all hover:border-primary/30 hover:shadow-xl">
        <div className="relative h-72 overflow-hidden">
          <img 
            src={project.image} 
            alt={project.title}
            loading="lazy"
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
          <div className={`absolute inset-0 bg-gradient-to-t ${project.gradient} opacity-60`} />
          
          <div className="absolute inset-0 flex items-center justify-center opacity-0 transition-opacity group-hover:opacity-100">
            <Link href={`/portfolio/${project.id}`}>
              <Button size="lg" className="gap-2">
                <ExternalLink className="h-5 w-5" />
                Mehr erfahren
              </Button>
            </Link>
          </div>

          {/* Category Badge */}
          <div className="absolute left-6 top-6">
            <Badge className="bg-background/80 backdrop-blur-sm">
              <Icon className="mr-2 h-3 w-3" />
              {project.category}
            </Badge>
          </div>
        </div>

        <div className="p-6">
          <h3 className="mb-3 text-2xl font-bold transition-colors group-hover:text-primary">
            {project.title}
          </h3>
          <p className="mb-4 text-muted-foreground leading-relaxed">
            {project.description}
          </p>

          {/* Tech Stack */}
          <div className="mb-4 flex flex-wrap gap-2">
            {project.tags.map((tag, idx) => (
              <div
                key={idx}
                className="flex items-center gap-1.5 rounded-md border border-primary/20 bg-primary/5 px-2 py-1 transition-colors hover:border-primary/40 hover:bg-primary/10"
              >
                <StackIcon name={tag.icon} className="h-3 w-3" />
                <span className="text-xs font-medium">{tag.name}</span>
              </div>
            ))}
          </div>

          {/* Metrics */}
          <div className="grid grid-cols-3 gap-3 rounded-lg border border-primary/10 bg-primary/5 p-3">
            {Object.entries(project.metrics).map(([key, value]) => (
              <div key={key} className="text-center">
                <div className="text-lg font-bold text-primary">{value}</div>
                <div className="text-xs text-muted-foreground capitalize">{key}</div>
              </div>
            ))}
          </div>
        </div>
      </Card>
    </motion.div>
  );
};

export default function Portfolio() {
  const [activeFilter, setActiveFilter] = useState("Alle");
  
  const categories = ["Alle", "E-Commerce", "SaaS", "Marketing", "Enterprise", "Portfolio", "Non-Profit"];
  
  const filteredProjects = activeFilter === "Alle" 
    ? portfolioProjects 
    : portfolioProjects.filter(p => p.category === activeFilter);

  return (
    <Layout>
      <div className="min-h-screen">
        {/* Hero Section */}
        <section className="relative overflow-hidden py-32 pt-40 md:pt-32">
          {/* Animated Background */}
          <div className="absolute inset-0 -z-10">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,rgba(59,130,246,0.1),rgba(0,0,0,0))]" />
            <div className="absolute h-full w-full bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]" />
          </div>

          <div className="container">
            <motion.div 
              className="mx-auto max-w-3xl text-center"
              initial="hidden"
              animate="visible"
              variants={staggerContainer}
            >
              <motion.div variants={scaleIn} className="mb-6 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-2">
                <Sparkles className="h-4 w-4 text-primary" />
                <span className="text-sm font-medium text-primary">Portfolio</span>
              </motion.div>

              <motion.h1 variants={fadeInUp} className="mb-6 text-5xl font-black md:text-6xl lg:text-7xl">
                Projekte, die{" "}
                <span className="bg-gradient-to-r from-primary via-blue-500 to-primary bg-clip-text text-transparent">
                  Ergebnisse liefern
                </span>
              </motion.h1>

              <motion.p variants={fadeInUp} className="text-xl text-muted-foreground">
                Von Online-Shops bis zu internationalen Plattformen – jedes Projekt mit messbarem Erfolg
              </motion.p>
            </motion.div>
          </div>
        </section>

        {/* Filter Section */}
        <section className="py-8 border-b border-primary/10">
          <div className="container">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              className="flex flex-wrap items-center justify-center gap-3"
            >
              <Filter className="h-5 w-5 text-muted-foreground" />
              {categories.map((category) => (
                <Button
                  key={category}
                  variant={activeFilter === category ? "default" : "outline"}
                  size="sm"
                  onClick={() => setActiveFilter(category)}
                  className="transition-all"
                >
                  {category}
                </Button>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Projects Grid */}
        <section className="py-20">
          <div className="container">
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {filteredProjects.map((project, index) => (
                <ProjectCard key={project.id} project={project} index={index} />
              ))}
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-20 bg-muted/30">
          <div className="container">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={staggerContainer}
              className="grid gap-8 md:grid-cols-4"
            >
              {[
                { value: "50+", label: "Erfolgreiche Projekte", icon: Sparkles },
                { value: "€2.5M+", label: "Generierter Umsatz", icon: TrendingUp },
                { value: "98%", label: "Zufriedene Kunden", icon: Heart },
                { value: "15+", label: "Länder weltweit", icon: Globe }
              ].map((stat, index) => {
                const Icon = stat.icon;
                return (
                  <motion.div
                    key={index}
                    variants={fadeInUp}
                    className="text-center"
                  >
                    <Card className="border-primary/10 bg-card/50 p-8 backdrop-blur transition-all hover:border-primary/30 hover:shadow-lg">
                      <Icon className="mx-auto mb-4 h-8 w-8 text-primary" />
                      <div className="mb-2 text-4xl font-black text-primary">{stat.value}</div>
                      <div className="text-sm text-muted-foreground">{stat.label}</div>
                    </Card>
                  </motion.div>
                );
              })}
            </motion.div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20">
          <div className="container">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={scaleIn}
            >
              <Card className="border-primary/20 bg-gradient-to-br from-primary/10 via-primary/5 to-transparent p-12 text-center backdrop-blur">
                <h2 className="mb-4 text-3xl font-bold md:text-4xl">
                  Bereit für Ihr eigenes Erfolgsprojekt?
                </h2>
                <p className="mx-auto mb-8 max-w-2xl text-lg text-muted-foreground">
                  Lassen Sie uns gemeinsam eine Website erstellen, die nicht nur gut aussieht, sondern auch Ergebnisse bringt.
                </p>
                <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
                  <Link href="/contact">
                    <Button size="lg" className="group">
                      <span>Kostenloses Erstgespräch</span>
                      <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                    </Button>
                  </Link>
                  <Button size="lg" variant="outline">
                    <ExternalLink className="mr-2 h-5 w-5" />
                    <span>Referenzen ansehen</span>
                  </Button>
                </div>
              </Card>
            </motion.div>
          </div>
        </section>
      </div>
    </Layout>
  );
}
