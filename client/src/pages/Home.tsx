import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { ArrowRight, Code, Smartphone, Search, Headphones, CheckCircle2, Phone, Calendar, Sparkles, Zap, Target, Star, TrendingUp, Briefcase, Users, Award, Code2 } from "lucide-react";

import { NumberTicker } from '@/components/ui/number-ticker';
import { BentoCard, BentoGrid } from "@/components/ui/bento-grid";
import { CodeEditorAnimation } from "@/components/CodeEditorAnimation";
import { ProjectsMarquee } from "@/components/ProjectsMarquee";
import { CustomerAvatars } from "@/components/CustomerAvatars";
import { TimelineAnimation } from "@/components/TimelineAnimation";
import { QualityBadge } from "@/components/QualityBadge";
import { ColorPalette } from "@/components/ColorPalette";
import Layout from "@/components/Layout";
import { Marquee } from "@/components/ui/marquee-magic";
import { AuroraText } from "@/components/ui/aurora-text";
import { HeroDecorations } from "@/components/HeroDecorations";
import { CodeSnippetIllustration, AnalyticsChartIllustration } from "@/components/ServicesIllustrations";
import ScrollIndicator from "@/components/ScrollIndicator";
import { motion } from "framer-motion";
import { PortfolioProject } from "@/components/PortfolioProject";


import { Link } from "wouter";
import { useSectionReveal } from "@/hooks/useSectionReveal";


// Animation Variants - Optimized with Custom Easing
const customEase = [0.43, 0.13, 0.23, 0.96] as const; // easeOutExpo for snappy feel

const fadeIn = {
  hidden: { opacity: 0 },
  visible: { 
    opacity: 1,
    transition: { duration: 0.5, ease: customEase }
  }
};

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { 
      duration: 0.5, 
      ease: customEase
    }
  }
};

const fadeInDown = {
  hidden: { opacity: 0, y: -40 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { 
      duration: 0.5, 
      ease: customEase
    }
  }
};

const slideInLeft = {
  hidden: { opacity: 0, x: -60 },
  visible: { 
    opacity: 1, 
    x: 0,
    transition: { duration: 0.6, ease: customEase }
  }
};

const slideInRight = {
  hidden: { opacity: 0, x: 60 },
  visible: { 
    opacity: 1, 
    x: 0,
    transition: { duration: 0.6, ease: customEase }
  }
};

const scaleIn = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: { 
    opacity: 1, 
    scale: 1,
    transition: { 
      duration: 0.4, 
      ease: customEase
    }
  }
};

const staggerContainer = {
  hidden: { opacity: 1 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12 // Reduced from 0.15s for faster sequence
    }
  }
};

// Project Card Component
const ProjectCard = ({ title, description, image, technologies, results, category }: { title: string; description: string; image: string; technologies: string[]; results: string; category: string }) => {
  const [isHovered, setIsHovered] = React.useState(false);
  
  return (
    <motion.div
      className="group relative overflow-hidden rounded-2xl bg-card border border-border shadow-lg transition-all duration-300 hover:shadow-2xl"
      variants={fadeInUp}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      whileHover={{ y: -8, scale: 1.02 }}
    >
      {/* Project Image with Zoom Effect */}
      <div className="relative aspect-[4/3] overflow-hidden bg-muted">
        <motion.div
          className="h-full w-full"
          animate={{ scale: isHovered ? 1.1 : 1 }}
          transition={{ duration: 0.4 }}
        >
          <div className="h-full w-full bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center">
            <span className="text-6xl font-bold text-primary/30">{title.charAt(0)}</span>
          </div>
        </motion.div>
        
        {/* Overlay on Hover */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-t from-background/95 via-background/60 to-transparent flex flex-col justify-end p-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: isHovered ? 1 : 0 }}
          transition={{ duration: 0.3 }}
        >
          <Badge className="mb-2 w-fit">{category}</Badge>
          <p className="text-sm text-muted-foreground line-clamp-2">{description}</p>
        </motion.div>
      </div>

      {/* Project Info */}
      <div className="p-6">
        <h3 className="mb-3 text-xl font-bold">{title}</h3>
        
        {/* Technologies */}
        <div className="mb-4 flex flex-wrap gap-2">
          {technologies.map((tech, index) => (
            <Badge key={index} variant="outline" className="text-xs">
              {tech}
            </Badge>
          ))}
        </div>

        {/* Results */}
        <div className="flex items-center gap-2 text-sm">
          <CheckCircle2 className="h-4 w-4 text-primary" />
          <span className="font-semibold text-primary">{results}</span>
        </div>
      </div>
    </motion.div>
  );
};

// Testimonial Card Component
const TestimonialCard = ({ name, company, text, rating, logo, demoLink }: { name: string; company: string; text: string; rating: number; logo?: string; demoLink?: string }) => {
  const [isHovered, setIsHovered] = React.useState(false);
  
  return (
    <motion.div 
      className="mx-2 md:mx-4 w-[280px] md:w-[400px] flex-shrink-0"
      style={{ perspective: 1000, transformStyle: 'preserve-3d' }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      animate={{
        y: isHovered ? -8 : 0,
        rotateY: isHovered ? 5 : 0,
        rotateX: isHovered ? 2 : 0,
        scale: isHovered ? 1.02 : 1,
      }}
      transition={{ duration: 0.3, ease: 'easeOut' }}
    >
      <Card className="h-full border-primary/10 bg-card/50 backdrop-blur shadow-lg transition-all duration-300 hover:border-primary/30 hover:shadow-2xl">
      <CardContent className="p-4 md:p-6">
        {/* Rating Stars */}
        <div className="mb-3 flex gap-1">
          {Array.from({ length: rating }).map((_, i) => (
            <svg key={i} className="h-4 w-4 md:h-5 md:w-5 fill-primary text-primary" viewBox="0 0 20 20">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
          ))}
        </div>
        
        {/* Testimonial Text */}
        <p className="mb-4 text-xs md:text-sm leading-relaxed text-muted-foreground line-clamp-4">
          "{text}"
        </p>
        
        {/* Author */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2 md:gap-3">
            {logo ? (
              <img src={logo} alt={company} loading="lazy" className="h-10 w-10 md:h-12 md:w-12 rounded-full object-contain bg-white p-1" />
            ) : (
              <div className="flex h-10 w-10 md:h-12 md:w-12 items-center justify-center rounded-full bg-primary/10 font-bold text-primary text-sm md:text-base">
                {name.charAt(0)}
              </div>
            )}
            <div>
              <div className="font-semibold text-sm md:text-base">{name}</div>
              <div className="text-xs md:text-sm text-muted-foreground">{company}</div>
            </div>
          </div>

        </div>
      </CardContent>
    </Card>
    </motion.div>
  );
};

export default function Home() {
  // Section reveal hooks
  const projectsReveal = useSectionReveal();
  const servicesReveal = useSectionReveal();
  const whyMeReveal = useSectionReveal();
  const testimonialsReveal = useSectionReveal();
  const faqReveal = useSectionReveal();
  const ctaReveal = useSectionReveal();

  const features = [
    "Persönliche Betreuung während des gesamten Projekts",
    "Transparente Preisgestaltung ohne versteckte Kosten",
    "Schnelle Umsetzung und pünktliche Lieferung",
    "Moderne Technologien für zukunftssichere Lösungen",
  ];

  const testimonials = [
    {
      name: "Maria Schneider",
      company: "Café Bohne",
      logo: "/logo-cafe-bohne.png",
      text: "Seit der neuen Website haben wir 65% mehr Online-Bestellungen. Die Kunden lieben das moderne Design!",
      rating: 5,
      demoLink: "https://cafe-bohne-demo.example.com",
      projectImage: "/website-cafe-bohne.jpg"
    },
    {
      name: "Sophie Wagner",
      company: "Boutique Luna",
      logo: "/logo-boutique-luna.png",
      text: "Endlich ein Online-Shop, der unsere Marke perfekt repräsentiert. Die Verkäufe sind um 80% gestiegen!",
      rating: 5,
      demoLink: "https://boutique-luna-demo.example.com",
      projectImage: "/website-boutique-luna.jpg"
    },
    {
      name: "Markus Kraft",
      company: "FitStark Studio",
      logo: "/logo-fitness-stark.png",
      text: "Die Website hat uns geholfen, 120 neue Mitglieder in nur 2 Monaten zu gewinnen. Absolut empfehlenswert!",
      rating: 5,
      demoLink: "https://fitstark-demo.example.com",
      projectImage: "/website-fitstark.jpg"
    },
    {
      name: "Giovanni Rossi",
      company: "Bella Cucina",
      logo: "/logo-restaurant-bella.png",
      text: "Unsere Reservierungen haben sich verdoppelt. Die Website zeigt perfekt, was unser Restaurant besonders macht.",
      rating: 5,
      demoLink: "https://bella-cucina-demo.example.com",
      projectImage: "/website-bella-cucina.jpg"
    },
    {
      name: "Thomas Müller",
      company: "Müller's Gasthaus",
      text: "Seit der neuen Website haben wir 40% mehr Online-Reservierungen. Die Investition hat sich in 3 Monaten amortisiert!",
      rating: 5,
    },
    {
      name: "Julia Hoffmann",
      company: "Hoffmann Physiotherapie",
      text: "Unsere Patienten können jetzt online Termine buchen. Das spart uns so viel Zeit am Telefon!",
      rating: 5,
    },
  ];

  return (
    <Layout className="bg-gradient-to-b from-background via-primary/3 via-30% via-primary/5 via-50% via-primary/3 via-70% to-background">
      {/* Hero Section - First Impression */}
      <section className="relative min-h-screen flex flex-col justify-center overflow-hidden py-32 md:py-24">
        {/* Background Pattern */}
        <div className="absolute inset-0 bg-grid-pattern opacity-5" />
        
        {/* Web-bezogene Dekorationen */}
        <HeroDecorations />
        
        <div className="container relative z-10">
          <div className="mx-auto max-w-5xl text-center">

            {/* Main Headline - Problem Focused */}
            <motion.h1 
              className="mb-6 text-5xl font-bold tracking-tight leading-[1.2] sm:text-6xl md:text-7xl lg:text-8xl"
              initial="hidden"
              animate="visible"
              variants={staggerContainer}
              style={{ willChange: 'opacity, transform' }}
            >
              <motion.span className="block text-foreground" variants={fadeInDown}>Ihre Konkurrenz</motion.span>
              <motion.span className="block" variants={fadeIn}>
                <AuroraText colors={["#1e3a8a", "#3b82f6", "#60a5fa", "#93c5fd", "#1e3a8a"]} speed={0.8}>
                  gewinnt online
                </AuroraText>
              </motion.span>
              <motion.span className="block text-foreground" variants={fadeInUp}>Sie nicht?</motion.span>
            </motion.h1>

            {/* Value Proposition - Minimal Text */}
            <motion.p 
              className="mx-auto mb-8 max-w-2xl text-xl font-normal leading-relaxed text-muted-foreground md:text-2xl"
              initial="hidden"
              animate="visible"
              variants={fadeInUp}
              transition={{ delay: 0.2 }}
              style={{ willChange: 'opacity, transform' }}
            >
              Wir erstellen Websites, die Ihnen mehr Kunden bringen.
              <br />
              <span className="text-foreground">Garantiert. Oder Geld zurück.</span>
            </motion.p>
            {/* CTA Buttons - Big & Bold */}
            <motion.div 
              className="flex flex-col gap-4 sm:flex-row sm:justify-center"
              initial="hidden"
              animate="visible"
              variants={staggerContainer}
              transition={{ delay: 0.4 }}
              style={{ willChange: 'opacity, transform' }}
            >
              <motion.div variants={scaleIn} className="flex flex-col items-center gap-2">
                <Button 
                  size="lg" 
                  className="relative h-16 px-12 text-lg font-bold shadow-2xl shadow-primary/50 transition-all hover:scale-105 hover:shadow-primary/70 animate-pulse-glow"
                  asChild
                >
                  <a href="/contact">
                    <Calendar className="mr-3 h-6 w-6" />
                    Kostenloses Erstgespräch
                    <ArrowRight className="ml-3 h-6 w-6" />
                  </a>
                </Button>
                <span className="text-sm font-medium text-primary/80 animate-fade-in">
                  🔥 Nur noch 3 Plätze frei diese Woche
                </span>
              </motion.div>
              <motion.div variants={scaleIn}>
                <Button 
                  size="lg" 
                  variant="outline"
                  className="h-16 border-2 px-12 text-lg font-bold transition-all duration-300 hover:bg-primary hover:text-primary-foreground hover:border-primary hover:scale-105 hover:shadow-lg hover:shadow-primary/20"
                  asChild
                >
                  <a href="tel:+49123456789">
                    <Phone className="mr-3 h-6 w-6" />
                    Jetzt anrufen
                  </a>
                </Button>
              </motion.div>
            </motion.div>

            {/* Trust Indicator */}
            <motion.div 
              className="mt-16 flex flex-wrap items-center justify-center gap-8 text-sm text-muted-foreground"
              initial="hidden"
              animate="visible"
              variants={staggerContainer}
              transition={{ delay: 0.6 }}
              style={{ willChange: 'opacity, transform' }}
            >
              <motion.div className="flex items-center gap-2" variants={fadeInUp}>
                <CheckCircle2 className="h-5 w-5 text-primary" />
                <span>Keine Vorkasse</span>
              </motion.div>
              <motion.div className="flex items-center gap-2" variants={fadeInUp}>
                <CheckCircle2 className="h-5 w-5 text-primary" />
                <span>Fertig in 2 Wochen</span>
              </motion.div>
              <motion.div className="flex items-center gap-2" variants={fadeInUp}>
                <CheckCircle2 className="h-5 w-5 text-primary" />
                <span>Zufriedenheitsgarantie</span>
              </motion.div>
            </motion.div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <ScrollIndicator />

        {/* Decorative Elements */}
        <div className="absolute -right-20 -top-20 h-96 w-96 rounded-full bg-primary/10 blur-3xl" />
        <div className="absolute -bottom-20 -left-20 h-96 w-96 rounded-full bg-accent/10 blur-3xl" />
        
        {/* Gradient Fade to Next Section */}
        <div className="absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-b from-transparent to-background" />
      </section>

      {/* Featured Projects Section */}
      <div className="relative">
        {/* Top Gradient Overlay */}
        <div className="absolute top-0 left-0 right-0 h-48 bg-gradient-to-b from-background to-transparent pointer-events-none z-20" />
        
        <section 
          ref={projectsReveal.ref as React.RefObject<HTMLElement>}
          className={`relative py-24 md:py-32 overflow-hidden section-reveal ${projectsReveal.isVisible ? 'is-visible' : ''}`}
        >
          <div className="container">
          <div className="mx-auto max-w-6xl">
            {/* Section Header */}
            <motion.div 
              className="mb-16 text-center"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={fadeInUp}
            >
              <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-2">
                <Target className="h-4 w-4 text-primary" />
                <span className="text-sm font-medium text-primary">Portfolio</span>
              </div>
              <h2 className="mb-6 text-3xl font-bold leading-[1.3] md:text-4xl lg:text-5xl">
                Ausgewählte{" "}
                <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                  Projekte
                </span>
              </h2>
              <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
                Echte Ergebnisse für echte Unternehmen – sehen Sie selbst
              </p>
            </motion.div>

            {/* Portfolio Projects - Hybrid Layout (3D Desktop + Split Mobile) */}
            <div className="space-y-32 py-16">
              <PortfolioProject
                number="01"
                category="Travel & Booking"
                title="Premium Travel Experience"
                description="Luxus-Reisebuchung mit interaktiver Karte, Hotel-Suche, Destinationen und KI-gestützten Empfehlungen."
                image="/portfolio-travel.jpg"
                techStack={[
                  {
                    name: "React 19",
                    icon: <svg viewBox="0 0 24 24" fill="currentColor"><path d="M14.23 12.004a2.236 2.236 0 0 1-2.235 2.236 2.236 2.236 0 0 1-2.236-2.236 2.236 2.236 0 0 1 2.235-2.236 2.236 2.236 0 0 1 2.236 2.236zm2.648-10.69c-1.346 0-3.107.96-4.888 2.622-1.78-1.653-3.542-2.602-4.887-2.602-.41 0-.783.093-1.106.278-1.375.793-1.683 3.264-.973 6.365C1.98 8.917 0 10.42 0 12.004c0 1.59 1.99 3.097 5.043 4.03-.704 3.113-.39 5.588.988 6.38.32.187.69.275 1.102.275 1.345 0 3.107-.96 4.888-2.624 1.78 1.654 3.542 2.603 4.887 2.603.41 0 .783-.09 1.106-.275 1.374-.792 1.683-3.263.973-6.365C22.02 15.096 24 13.59 24 12.004c0-1.59-1.99-3.097-5.043-4.032.704-3.11.39-5.587-.988-6.38-.318-.184-.688-.277-1.092-.278zm-.005 1.09v.006c.225 0 .406.044.558.127.666.382.955 1.835.73 3.704-.054.46-.142.945-.25 1.44-.96-.236-2.006-.417-3.107-.534-.66-.905-1.345-1.727-2.035-2.447 1.592-1.48 3.087-2.292 4.105-2.295zm-9.77.02c1.012 0 2.514.808 4.11 2.28-.686.72-1.37 1.537-2.02 2.442-1.107.117-2.154.298-3.113.538-.112-.49-.195-.964-.254-1.42-.23-1.868.054-3.32.714-3.707.19-.09.4-.127.563-.132zm4.882 3.05c.455.468.91.992 1.36 1.564-.44-.02-.89-.034-1.345-.034-.46 0-.915.01-1.36.034.44-.572.895-1.096 1.345-1.565zM12 8.1c.74 0 1.477.034 2.202.093.406.582.802 1.203 1.183 1.86.372.64.71 1.29 1.018 1.946-.308.655-.646 1.31-1.013 1.95-.38.66-.773 1.288-1.18 1.87-.728.063-1.466.098-2.21.098-.74 0-1.477-.035-2.202-.093-.406-.582-.802-1.204-1.183-1.86-.372-.64-.71-1.29-1.018-1.946.303-.657.646-1.313 1.013-1.954.38-.66.773-1.286 1.18-1.868.728-.064 1.466-.098 2.21-.098zm-3.635.254c-.24.377-.48.763-.704 1.16-.225.39-.435.782-.635 1.174-.265-.656-.49-1.31-.676-1.947.64-.15 1.315-.283 2.015-.386zm7.26 0c.695.103 1.365.23 2.006.387-.18.632-.405 1.282-.66 1.933-.2-.39-.41-.783-.64-1.174-.225-.392-.465-.774-.705-1.146zm3.063.675c.484.15.944.317 1.375.498 1.732.74 2.852 1.708 2.852 2.476-.005.768-1.125 1.74-2.857 2.475-.42.18-.88.342-1.355.493-.28-.958-.646-1.956-1.1-2.98.45-1.017.81-2.01 1.085-2.964zm-13.395.004c.278.96.645 1.957 1.1 2.98-.45 1.017-.812 2.01-1.086 2.964-.484-.15-.944-.318-1.37-.5-1.732-.737-2.852-1.706-2.852-2.474 0-.768 1.12-1.742 2.852-2.476.42-.18.88-.342 1.356-.494zm11.678 4.28c.265.657.49 1.312.676 1.948-.64.157-1.316.29-2.016.39.24-.375.48-.762.705-1.158.225-.39.435-.788.636-1.18zm-9.945.02c.2.392.41.783.64 1.175.23.39.465.772.705 1.143-.695-.102-1.365-.23-2.006-.386.18-.63.406-1.282.66-1.933zM17.92 16.32c.112.493.2.968.254 1.423.23 1.868-.054 3.32-.714 3.708-.147.09-.338.128-.563.128-1.012 0-2.514-.807-4.11-2.28.686-.72 1.37-1.536 2.02-2.44 1.107-.118 2.154-.3 3.113-.54zm-11.83.01c.96.234 2.006.415 3.107.532.66.905 1.345 1.727 2.035 2.446-1.595 1.483-3.092 2.295-4.11 2.295-.22-.005-.406-.05-.553-.132-.666-.38-.955-1.834-.73-3.703.054-.46.142-.944.25-1.438zm4.56.64c.44.02.89.034 1.345.034.46 0 .915-.01 1.36-.034-.44.572-.895 1.095-1.345 1.565-.455-.47-.91-.993-1.36-1.565z"/></svg>
                  },
                  {
                    name: "TypeScript",
                    icon: <svg viewBox="0 0 24 24" fill="currentColor"><path d="M1.125 0C.502 0 0 .502 0 1.125v21.75C0 23.498.502 24 1.125 24h21.75c.623 0 1.125-.502 1.125-1.125V1.125C24 .502 23.498 0 22.875 0zm17.363 9.75c.612 0 1.154.037 1.627.111a6.38 6.38 0 0 1 1.306.34v2.458a3.95 3.95 0 0 0-.643-.361 5.093 5.093 0 0 0-.717-.26 5.453 5.453 0 0 0-1.426-.2c-.3 0-.573.028-.819.086a2.1 2.1 0 0 0-.623.242c-.17.104-.3.229-.393.374a.888.888 0 0 0-.14.49c0 .196.053.373.156.529.104.156.252.304.443.444s.423.276.696.41c.273.135.582.274.926.416.47.197.892.407 1.266.628.374.222.695.473.963.753.268.279.472.598.614.957.142.359.214.776.214 1.253 0 .657-.125 1.21-.373 1.656a3.033 3.033 0 0 1-1.012 1.085 4.38 4.38 0 0 1-1.487.596c-.566.12-1.163.18-1.79.18a9.916 9.916 0 0 1-1.84-.164 5.544 5.544 0 0 1-1.512-.493v-2.63a5.033 5.033 0 0 0 3.237 1.2c.333 0 .624-.03.872-.09.249-.06.456-.144.623-.25.166-.108.29-.234.373-.38a1.023 1.023 0 0 0-.074-1.089 2.12 2.12 0 0 0-.537-.5 5.597 5.597 0 0 0-.807-.444 27.72 27.72 0 0 0-1.007-.436c-.918-.383-1.602-.852-2.053-1.405-.45-.553-.676-1.222-.676-2.005 0-.614.123-1.141.369-1.582.246-.441.58-.804 1.004-1.089a4.494 4.494 0 0 1 1.47-.629 7.536 7.536 0 0 1 1.77-.201zm-15.113.188h9.563v2.166H9.506v9.646H6.789v-9.646H3.375z"/></svg>
                  },
                  {
                    name: "Maps API",
                    icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
                  },
                ]}
                metric={{ value: "+180%", label: "Bookings" }}
                delay={0}
              />

              <PortfolioProject
                number="02"
                category="E-Commerce"
                title="Furniture Design Museum"
                description="Elegante E-Commerce-Plattform für Designer-Möbel mit interaktiver Galerie, Virtual View und modernem Dark-Theme."
                image="/portfolio-furniture.jpg"
                techStack={[
                  {
                    name: "Next.js 14",
                    icon: <svg viewBox="0 0 24 24" fill="currentColor"><path d="M11.5725 0c-.1763 0-.3098.0013-.3584.0067-.0516.0053-.2159.021-.3636.0328-3.4088.3073-6.6017 2.1463-8.624 4.9728C1.1004 6.584.3802 8.3666.1082 10.255c-.0962.659-.108.8537-.108 1.7474s.012 1.0884.108 1.7476c.652 4.506 3.8591 8.2919 8.2087 9.6945.7789.2511 1.6.4223 2.5337.5255.3636.04 1.9354.04 2.299 0 1.6117-.1783 2.9772-.577 4.3237-1.2643.2065-.1056.2464-.1337.2183-.1573-.0188-.0139-.8987-1.1938-1.9543-2.62l-1.919-2.592-2.4047-3.5583c-1.3231-1.9564-2.4117-3.556-2.4211-3.556-.0094-.0026-.0187 1.5787-.0235 3.509-.0067 3.3802-.0093 3.5162-.0516 3.596-.061.115-.108.1618-.2064.2134-.075.0374-.1408.0445-.495.0445h-.406l-.1078-.068a.4383.4383 0 0 1-.1572-.1712l-.0493-.1056.0053-4.703.0067-4.7054.0726-.0915c.0376-.0493.1174-.1125.1736-.143.0962-.047.1338-.0517.5396-.0517.4787 0 .5584.0187.6827.1547.0353.0377 1.3373 1.9987 2.895 4.3608a10760.433 10760.433 0 0 0 4.7344 7.1706l1.9002 2.8782.0968-.0634c.9955-.6439 2.0522-1.5479 2.8247-2.4193 1.5512-1.7486 2.4876-3.7164 2.8656-6.0174.1007-.6118.1091-.8026.1091-1.7513 0-.9487-.0084-1.1395-.1091-1.7513-.6523-4.506-3.8592-8.2919-8.2087-9.6945-.7672-.2487-1.5763-.42-2.4954-.5255-.3636-.04-1.9355-.04-2.299 0l-.0001.0001zm5.7604 7.1537c.0983.0494.1786.1461.2051.2479.0134.0537.0188 1.0789.0134 3.3802l-.0067 3.2984-1.1476-1.7513-1.1457-1.7506v-1.5446c0-.8503.0067-1.5733.0134-1.6225.0146-.1056.0427-.1573.1086-.2112.1.0956.1736-.0956.5396-.0956.3589 0 .4374.0067.5396.0517z"/></svg>
                  },
                  {
                    name: "3D Models",
                    icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 2L2 7l10 5 10-5-10-5z"/><path d="M2 17l10 5 10-5M2 12l10 5 10-5"/></svg>
                  },
                  {
                    name: "Shopify",
                    icon: <svg viewBox="0 0 24 24" fill="currentColor"><path d="M15.337 2.187c-.065-.037-.13-.037-.195 0-.065.037-1.105.39-1.105.39s-.715-.715-1.04-.975c-.325-.26-.845-.195-1.04-.13 0 0-.195.065-.52.195-.065-.195-.195-.455-.39-.715-.52-.65-1.235-.975-2.08-.975h-.13c-.195-.26-.455-.39-.715-.39C7.512 0 6.732.78 6.472 2.122c-.52 1.56-.91 2.795-1.04 3.185-.91.26-1.56.455-1.625.455-.52.13-.52.195-.585.65 0 .325-1.56 11.96-1.56 11.96L13.907 24l7.8-1.69S15.402 2.252 15.337 2.187zm-3.64.585c-.195.065-.455.13-.715.195v-.195c0-.52-.065-1.04-.195-1.495.52.065.91.78.91 1.495zm-1.69-.325c0 .065 0 .13-.065.195-.39.13-.78.26-1.235.39.26-.91.715-1.365 1.04-1.56.13.26.26.585.26.975zm-.78-1.56c.065 0 .13.065.195.065-.39.26-1.04.91-1.365 2.21-.325.13-.65.195-.975.325.325-1.04.975-2.6 2.145-2.6z"/></svg>
                  },
                ]}
                metric={{ value: "+120%", label: "Conversion" }}
                delay={0.2}
              />

              <PortfolioProject
                number="03"
                category="Sports & Analytics"
                title="Football Club Platform"
                description="Interaktive Fußball-Plattform mit Live-Statistiken, Team-Management, Spieler-Profilen und Neon-Green Design für maximale Energie."
                image="/portfolio-football.jpg"
                techStack={[
                  {
                    name: "React 19",
                    icon: <svg viewBox="0 0 24 24" fill="currentColor"><path d="M14.23 12.004a2.236 2.236 0 0 1-2.235 2.236 2.236 2.236 0 0 1-2.236-2.236 2.236 2.236 0 0 1 2.235-2.236 2.236 2.236 0 0 1 2.236 2.236zm2.648-10.69c-1.346 0-3.107.96-4.888 2.622-1.78-1.653-3.542-2.602-4.887-2.602-.41 0-.783.093-1.106.278-1.375.793-1.683 3.264-.973 6.365C1.98 8.917 0 10.42 0 12.004c0 1.59 1.99 3.097 5.043 4.03-.704 3.113-.39 5.588.988 6.38.32.187.69.275 1.102.275 1.345 0 3.107-.96 4.888-2.624 1.78 1.654 3.542 2.603 4.887 2.603.41 0 .783-.09 1.106-.275 1.374-.792 1.683-3.263.973-6.365C22.02 15.096 24 13.59 24 12.004c0-1.59-1.99-3.097-5.043-4.032.704-3.11.39-5.587-.988-6.38-.318-.184-.688-.277-1.092-.278zm-.005 1.09v.006c.225 0 .406.044.558.127.666.382.955 1.835.73 3.704-.054.46-.142.945-.25 1.44-.96-.236-2.006-.417-3.107-.534-.66-.905-1.345-1.727-2.035-2.447 1.592-1.48 3.087-2.292 4.105-2.295zm-9.77.02c1.012 0 2.514.808 4.11 2.28-.686.72-1.37 1.537-2.02 2.442-1.107.117-2.154.298-3.113.538-.112-.49-.195-.964-.254-1.42-.23-1.868.054-3.32.714-3.707.19-.09.4-.127.563-.132zm4.882 3.05c.455.468.91.992 1.36 1.564-.44-.02-.89-.034-1.345-.034-.46 0-.915.01-1.36.034.44-.572.895-1.096 1.345-1.565zM12 8.1c.74 0 1.477.034 2.202.093.406.582.802 1.203 1.183 1.86.372.64.71 1.29 1.018 1.946-.308.655-.646 1.31-1.013 1.95-.38.66-.773 1.288-1.18 1.87-.728.063-1.466.098-2.21.098-.74 0-1.477-.035-2.202-.093-.406-.582-.802-1.204-1.183-1.86-.372-.64-.71-1.29-1.018-1.946.303-.657.646-1.313 1.013-1.954.38-.66.773-1.286 1.18-1.868.728-.064 1.466-.098 2.21-.098zm-3.635.254c-.24.377-.48.763-.704 1.16-.225.39-.435.782-.635 1.174-.265-.656-.49-1.31-.676-1.947.64-.15 1.315-.283 2.015-.386zm7.26 0c.695.103 1.365.23 2.006.387-.18.632-.405 1.282-.66 1.933-.2-.39-.41-.783-.64-1.174-.225-.392-.465-.774-.705-1.146zm3.063.675c.484.15.944.317 1.375.498 1.732.74 2.852 1.708 2.852 2.476-.005.768-1.125 1.74-2.857 2.475-.42.18-.88.342-1.355.493-.28-.958-.646-1.956-1.1-2.98.45-1.017.81-2.01 1.085-2.964zm-13.395.004c.278.96.645 1.957 1.1 2.98-.45 1.017-.812 2.01-1.086 2.964-.484-.15-.944-.318-1.37-.5-1.732-.737-2.852-1.706-2.852-2.474 0-.768 1.12-1.742 2.852-2.476.42-.18.88-.342 1.356-.494zm11.678 4.28c.265.657.49 1.312.676 1.948-.64.157-1.316.29-2.016.39.24-.375.48-.762.705-1.158.225-.39.435-.788.636-1.18zm-9.945.02c.2.392.41.783.64 1.175.23.39.465.772.705 1.143-.695-.102-1.365-.23-2.006-.386.18-.63.406-1.282.66-1.933zM17.92 16.32c.112.493.2.968.254 1.423.23 1.868-.054 3.32-.714 3.708-.147.09-.338.128-.563.128-1.012 0-2.514-.807-4.11-2.28.686-.72 1.37-1.536 2.02-2.44 1.107-.118 2.154-.3 3.113-.54zm-11.83.01c.96.234 2.006.415 3.107.532.66.905 1.345 1.727 2.035 2.446-1.595 1.483-3.092 2.295-4.11 2.295-.22-.005-.406-.05-.553-.132-.666-.38-.955-1.834-.73-3.703.054-.46.142-.944.25-1.438zm4.56.64c.44.02.89.034 1.345.034.46 0 .915-.01 1.36-.034-.44.572-.895 1.095-1.345 1.565-.455-.47-.91-.993-1.36-1.565z"/></svg>
                  },
                  {
                    name: "Live Data",
                    icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/></svg>
                  },
                  {
                    name: "Analytics",
                    icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="12" y1="20" x2="12" y2="10"/><line x1="18" y1="20" x2="18" y2="4"/><line x1="6" y1="20" x2="6" y2="16"/></svg>
                  },
                ]}
                metric={{ value: "+95%", label: "Engagement" }}
                delay={0.4}
              />
            </div>

            {/* CTA Button */}
            <motion.div 
              className="mt-16 text-center"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
            >
              <Button size="lg" variant="outline" className="group" disabled>
                <span className="text-muted-foreground">Alle Projekte ansehen (Bald verfügbar)</span>
                <ArrowRight className="ml-2 h-5 w-5 text-muted-foreground transition-transform group-hover:translate-x-1" />
              </Button>
            </motion.div>
          </div>
        </div>
        </section>
        
        {/* Bottom Gradient Overlay */}
        <div className="absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-t from-background to-transparent pointer-events-none z-20" />
      </div>

      {/* Transition Gradient: Portfolio → Leistungen */}
      <div className="relative h-48 bg-gradient-to-b from-background to-transparent" />

      {/* Services Section - Minimalist Design */}
      <div className="relative">
        {/* Top Gradient Overlay */}
        <div className="absolute top-0 left-0 right-0 h-48 bg-gradient-to-b from-background to-transparent pointer-events-none z-20" />
        
        <section 
          id="services"
          ref={servicesReveal.ref as React.RefObject<HTMLElement>}
          className={`relative py-32 -mt-16 z-10 overflow-hidden section-reveal ${servicesReveal.isVisible ? 'is-visible' : ''}`}
        >
        {/* Dot Pattern Background - Contained */}
        <div className="absolute inset-0 bg-dot-pattern opacity-75" />
        {/* Subtle Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-primary/5" />
        
        <div className="container relative">
          <motion.div 
            className="mb-20 text-center"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
          >
            <motion.div 
              className="mb-4 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-2"
              variants={scaleIn}
            >
              <Sparkles className="h-4 w-4 text-primary" />
              <span className="text-sm font-medium text-primary">Leistungen</span>
            </motion.div>
            <h2 className="mb-6 text-3xl font-bold leading-[1.3] md:text-4xl lg:text-5xl">
              Alles für Ihren{" "}
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                Online-Erfolg
              </span>
            </h2>
            <p className="mx-auto max-w-2xl text-lg text-muted-foreground md:text-xl">
              Von der ersten Idee bis zur fertigen Website – ich begleite Sie auf jedem Schritt
            </p>
          </motion.div>

          {/* Zigzag Layout with Animations */}
          <div className="mx-auto max-w-6xl space-y-32 relative">

            {/* Service 01 - Left */}
            <motion.div 
              className="group relative grid gap-8 md:grid-cols-12 md:gap-16 items-center transition-all duration-500 hover:translate-x-2 overflow-hidden"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={fadeInUp}
              style={{ willChange: 'transform, opacity' }}
            >
              <div className="md:col-span-3">
                <div className="flex items-center gap-6">
                  <span className="text-8xl font-black text-primary/20 transition-all duration-500 group-hover:text-primary/50 group-hover:scale-110">01</span>
                  <Code className="h-12 w-12 text-primary transition-transform group-hover:scale-110" />
                </div>
              </div>
              <div className="md:col-span-9 relative">
                <h3 className="mb-4 text-3xl font-bold md:text-4xl transition-colors group-hover:text-primary">Webdesign & Entwicklung</h3>
                <p className="max-w-xl text-lg text-muted-foreground leading-relaxed">
                  Maßgeschneiderte Websites mit modernem Design und sauberer Code-Struktur. Ich erstelle Ihre professionelle digitale Visitenkarte, die nicht nur gut aussieht, sondern Besucher in Kunden verwandelt.
                </p>
                <div className="mt-6 h-px w-full bg-gradient-to-r from-primary/50 via-primary/20 to-transparent transition-all group-hover:from-primary group-hover:via-primary/50" />
                
                <CodeSnippetIllustration />
              </div>
            </motion.div>

            {/* Service 02 - Right */}
            <motion.div 
              className="group relative grid gap-8 md:grid-cols-12 md:gap-16 items-center transition-all duration-500 hover:-translate-x-2 overflow-hidden"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={fadeInUp}
              style={{ willChange: 'transform, opacity' }}
            >
              <div className="md:col-span-9 md:order-1 md:flex md:flex-col md:items-end relative">
                <h3 className="mb-4 text-3xl font-bold md:text-4xl md:text-right transition-colors group-hover:text-primary">Responsive Design</h3>
                <p className="max-w-xl text-lg text-muted-foreground md:text-right leading-relaxed">
                  Perfekte Darstellung auf allen Geräten – vom Smartphone bis zum Desktop-PC. Mit Mobile-First Ansatz sorge ich für optimale Benutzererfahrung und schnelle Ladezeiten auf jedem Bildschirm.
                </p>
                <div className="mt-6 h-px w-full bg-gradient-to-l from-primary/50 via-primary/20 to-transparent transition-all group-hover:from-primary group-hover:via-primary/50" />
                

              </div>
              <div className="md:col-span-3 md:order-2">
                <div className="flex items-center gap-6 md:justify-end">
                  <Smartphone className="h-12 w-12 text-primary transition-transform group-hover:scale-110" />
                  <span className="text-8xl font-black text-primary/20 transition-all duration-500 group-hover:text-primary/50 group-hover:scale-110">02</span>
                </div>
              </div>
            </motion.div>

            {/* Service 03 - Left */}
            <motion.div 
              className="group relative grid gap-8 md:grid-cols-12 md:gap-16 items-center transition-all duration-500 hover:translate-x-2 overflow-hidden"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={fadeInUp}
              style={{ willChange: 'transform, opacity' }}
            >
              <div className="md:col-span-3">
                <div className="flex items-center gap-6">
                  <span className="text-8xl font-black text-primary/20 transition-all duration-500 group-hover:text-primary/50 group-hover:scale-110">03</span>
                  <Search className="h-12 w-12 text-primary transition-transform group-hover:scale-110" />
                </div>
              </div>
              <div className="md:col-span-9 relative">
                <h3 className="mb-4 text-3xl font-bold md:text-4xl transition-colors group-hover:text-primary">SEO-Optimierung</h3>
                <p className="max-w-xl text-lg text-muted-foreground leading-relaxed">
                  Bessere Sichtbarkeit in Google & Co. für mehr lokale Kunden. Durch professionelle On-Page SEO und technische Optimierung erreichen Sie Top-Rankings und werden von Ihrer Zielgruppe gefunden.
                </p>
                <div className="mt-6 h-px w-full bg-gradient-to-r from-primary/50 via-primary/20 to-transparent transition-all group-hover:from-primary group-hover:via-primary/50" />
                
                <AnalyticsChartIllustration />
              </div>
            </motion.div>

            {/* Service 04 - Right */}
            <motion.div 
              className="group relative grid gap-8 md:grid-cols-12 md:gap-16 items-center transition-all duration-500 hover:-translate-x-2 overflow-hidden"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={fadeInUp}
              style={{ willChange: 'transform, opacity' }}
            >
              <div className="md:col-span-9 md:order-1 md:flex md:flex-col md:items-end relative">
                <h3 className="mb-4 text-3xl font-bold md:text-4xl md:text-right transition-colors group-hover:text-primary">Wartung & Support</h3>
                <p className="max-w-xl text-lg text-muted-foreground md:text-right leading-relaxed">
                  Zuverlässige Betreuung auch nach dem Launch. Regelmäßige Updates, sichere Backups und schneller technischer Support – ich bin immer für Sie da, wenn Sie mich brauchen.
                </p>
                <div className="mt-6 h-px w-full bg-gradient-to-l from-primary/50 via-primary/20 to-transparent transition-all group-hover:from-primary group-hover:via-primary/50" />
                

              </div>
              <div className="md:col-span-3 md:order-2">
                <div className="flex items-center gap-6 md:justify-end">
                  <Headphones className="h-12 w-12 text-primary transition-transform group-hover:scale-110" />
                  <span className="text-8xl font-black text-primary/20 transition-all duration-500 group-hover:text-primary/50 group-hover:scale-110">04</span>
                </div>
              </div>
            </motion.div>
          </div>


        </div>
        </section>
        
        {/* Bottom Gradient Overlay */}
        <div className="absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-t from-background to-transparent pointer-events-none z-20" />
      </div>

      {/* Why Me Section - Redesigned */}
      <div className="relative">
        {/* Top Gradient Overlay */}
        <div className="absolute top-0 left-0 right-0 h-48 bg-gradient-to-b from-background to-transparent pointer-events-none z-20" />
        
        <section 
          ref={whyMeReveal.ref as React.RefObject<HTMLElement>}
          className={`relative py-24 md:py-32 overflow-hidden section-reveal ${whyMeReveal.isVisible ? 'is-visible' : ''}`}
        >
        
        <div className="container relative">
          {/* Header */}
          <div className="mb-20 text-center">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-2">
              <Target className="h-4 w-4 text-primary" />
              <span className="text-sm font-medium text-primary">Warum ich?</span>
            </div>
            <h2 className="mb-6 text-3xl font-bold leading-[1.3] md:text-4xl lg:text-5xl">
              Ihr Partner für{" "}
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                digitalen Erfolg
              </span>
            </h2>
            <p className="mx-auto max-w-2xl text-lg text-muted-foreground md:text-xl">
              Kein Agentur-Overhead. Keine versteckten Kosten. Nur ehrliche Arbeit und messbare Ergebnisse.
            </p>
          </div>

          {/* Bento Grid Layout - Magic UI BentoCard */}
          <BentoGrid className="mx-auto max-w-7xl grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            <BentoCard
              name="Technologie trifft Design"
              className="col-span-1 md:col-span-2 lg:col-span-2 lg:row-span-2 [&_.p-6]:pt-2 [&_h3]:text-base [&_p]:text-sm"
              background={<CodeEditorAnimation />}
              Icon={Code2}
              href="#contact"
              cta="Jetzt starten"
            />

            <BentoCard
              name="Bewährte Erfahrung"
              className="col-span-1"
              background={<ProjectsMarquee />}
              Icon={Briefcase}
              href="#portfolio"
              cta="Projekte ansehen"
            />

            <BentoCard
              name="Vertrauen & Partnerschaft"
              className="col-span-1"
              background={<CustomerAvatars />}
              Icon={Users}
              href="#testimonials"
              cta="Referenzen ansehen"
            />

            <BentoCard
              name="Fertig in 2 Wochen"
              className="col-span-1 md:col-span-2 lg:col-span-2"
              background={<TimelineAnimation />}
              Icon={Zap}
              href="#services"
              cta="Mehr erfahren"
            />

            <BentoCard
              name="Premium-Qualität garantiert"
              className="col-span-1"
              background={<QualityBadge />}
              Icon={Award}
              href="#about"
              cta="Über mich"
            />
          </BentoGrid>
        </div>
        </section>
        
        {/* Bottom Gradient Overlay */}
        <div className="absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-t from-background to-transparent pointer-events-none z-20" />
      </div>

      {/* Testimonials Section */}
      <div className="relative">
        {/* Top Gradient Overlay */}
        <div className="absolute top-0 left-0 right-0 h-48 bg-gradient-to-b from-background to-transparent pointer-events-none z-20" />
        
        <section 
          ref={testimonialsReveal.ref as React.RefObject<HTMLElement>}
          className={`relative py-20 md:py-32 overflow-hidden section-reveal ${testimonialsReveal.isVisible ? 'is-visible' : ''}`}
        >        
        <div className="container relative">
          {/* Header */}
          <div className="mb-16 text-center">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-2">
              <Sparkles className="h-4 w-4 text-primary" />
              <span className="text-sm font-medium text-primary">Kundenstimmen</span>
            </div>
            <h2 className="mb-6 text-3xl font-bold leading-[1.3] md:text-4xl lg:text-5xl">
              Was meine{" "}
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                Kunden sagen
              </span>
            </h2>
            <p className="mx-auto max-w-2xl text-lg text-muted-foreground md:text-xl">
              Echte Ergebnisse von echten lokalen Unternehmen
            </p>
          </div>

          {/* Testimonials Marquee */}
          <div className="relative" style={{ 
            maskImage: 'linear-gradient(to right, transparent 0%, black 8%, black 92%, transparent 100%)',
            WebkitMaskImage: 'linear-gradient(to right, transparent 0%, black 8%, black 92%, transparent 100%)'
          }}>
            
            {/* First Row - Left to Right */}
            <Marquee className="mb-8 [--duration:20s] [--gap:0.75rem]" pauseOnHover repeat={6}>
              {testimonials.slice(0, 3).map((testimonial, index) => (
                <TestimonialCard key={`row1-${index}`} {...testimonial} />
              ))}
            </Marquee>
            
            {/* Second Row - Right to Left */}
            <Marquee className="mb-8 [--duration:20s] [--gap:0.75rem]" reverse pauseOnHover repeat={6}>
              {testimonials.slice(3, 6).map((testimonial, index) => (
                <TestimonialCard key={`row2-${index}`} {...testimonial} />
              ))}
            </Marquee>
          </div>
        </div>
        </section>
        
        {/* Bottom Gradient Overlay */}
        <div className="absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-t from-background to-transparent pointer-events-none z-20" />
      </div>

      {/* FAQ Section */}
      <div className="relative">
        {/* Top Gradient Overlay */}
        <div className="absolute top-0 left-0 right-0 h-48 bg-gradient-to-b from-background to-transparent pointer-events-none z-20" />
        
        <section 
          ref={faqReveal.ref as React.RefObject<HTMLElement>}
          className={`relative py-24 md:py-32 overflow-hidden section-reveal ${faqReveal.isVisible ? 'is-visible' : ''}`}
        >
        {/* Wave Pattern Background */}
        <div className="absolute inset-0 bg-wave-pattern" />
        {/* Subtle Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-primary/8 via-transparent to-accent/8" />
        <div className="container relative z-10">
          <div className="mx-auto max-w-3xl">
            <div className="mb-16 text-center">
              <Badge className="mb-4">FAQ</Badge>
              <h2 className="mb-4 text-3xl font-bold md:text-4xl lg:text-5xl">
                Häufig gestellte <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Fragen</span>
              </h2>
              <p className="text-lg text-muted-foreground">
                Alles, was Sie über meine Dienstleistungen wissen müssen
              </p>
            </div>

            <Accordion type="single" collapsible className="w-full space-y-1">
              <AccordionItem value="item-1" className="border-b border-border/50">
                <AccordionTrigger className="text-left font-medium hover:no-underline py-6">
                  Was kostet eine professionelle Website?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-6">
                  Die Kosten variieren je nach Umfang und Anforderungen. Eine einfache Business-Website startet bei ca. €1.500, während umfangreichere Projekte mit E-Commerce oder individuellen Funktionen ab €3.000 beginnen. Im kostenlosen Erstgespräch erstelle ich Ihnen ein transparentes Angebot ohne versteckte Kosten.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-2" className="border-b border-border/50">
                <AccordionTrigger className="text-left font-medium hover:no-underline py-6">
                  Wie lange dauert die Erstellung einer Website?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-6">
                  Eine Standard-Website ist in der Regel innerhalb von 2-4 Wochen fertig. Der genaue Zeitrahmen hängt von der Komplexität des Projekts und der Geschwindigkeit Ihres Feedbacks ab. Ich halte Sie während des gesamten Prozesses auf dem Laufenden und arbeite nach einem klaren Zeitplan.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-3" className="border-b border-border/50">
                <AccordionTrigger className="text-left font-medium hover:no-underline py-6">
                  Welche Technologien verwenden Sie?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-6">
                  Ich arbeite mit modernen, zukunftssicheren Technologien wie React, TypeScript, Next.js und Tailwind CSS für maßgeschneiderte Lösungen. Für Content-Management-Systeme setze ich auf WordPress. Alle Websites sind responsive, schnell und SEO-optimiert – garantiert.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-4" className="border-b border-border/50">
                <AccordionTrigger className="text-left font-medium hover:no-underline py-6">
                  Bieten Sie auch Wartung und Support an?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-6">
                  Ja, ich biete verschiedene Wartungspakete an. Diese umfassen regelmäßige Updates, Sicherheits-Backups, technischen Support und kleinere Anpassungen. Sie können zwischen monatlichen oder jährlichen Paketen wählen – ganz nach Ihrem Bedarf.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-5" className="border-b border-border/50">
                <AccordionTrigger className="text-left font-medium hover:no-underline py-6">
                  Kann ich meine Website selbst aktualisieren?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-6">
                  Absolut! Bei WordPress-Projekten erhalten Sie ein benutzerfreundliches Content-Management-System, mit dem Sie Texte, Bilder und Inhalte selbst ändern können. Ich schule Sie gerne in der Bedienung und stelle Ihnen eine ausführliche Dokumentation zur Verfügung.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-6" className="border-b border-border/50">
                <AccordionTrigger className="text-left font-medium hover:no-underline py-6">
                  Wie läuft die Zusammenarbeit ab?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-6">
                  Nach dem kostenlosen Erstgespräch erstelle ich Ihnen ein Angebot. Bei Zusage beginnen wir mit der Konzeption und dem Design. Sie erhalten regelmäßige Updates und können jederzeit Feedback geben. Nach Ihrer finalen Freigabe geht die Website live. Keine Vorkasse erforderlich – Sie zahlen erst bei Zufriedenheit.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-7" className="border-b border-border/50">
                <AccordionTrigger className="text-left font-medium hover:no-underline py-6">
                  Was passiert, wenn mir das Ergebnis nicht gefällt?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-6">
                  Ihre Zufriedenheit ist meine Priorität. Während des Projekts haben Sie mehrere Feedback-Runden, um sicherzustellen, dass alles Ihren Vorstellungen entspricht. Sollten Sie am Ende dennoch nicht zufrieden sein, biete ich eine Geld-zurück-Garantie. Ihr Risiko ist minimal.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
        </section>
        
        {/* Bottom Gradient Overlay */}
        <div className="absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-t from-background to-transparent pointer-events-none z-20" />
      </div>

      {/* Final CTA Section */}
      <div className="relative">
        {/* Top Gradient Overlay */}
        <div className="absolute top-0 left-0 right-0 h-48 bg-gradient-to-b from-background to-transparent pointer-events-none z-20" />
        
        <section 
          ref={ctaReveal.ref as React.RefObject<HTMLElement>}
          className={`relative py-20 md:py-32 overflow-hidden section-reveal ${ctaReveal.isVisible ? 'is-visible' : ''}`}
        >       
        <div className="container relative">
          <div className="mx-auto max-w-4xl">
            {/* Glassmorphism Card */}
            <motion.div 
              className="relative"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              {/* Card Content with Glassmorphism */}
              <div className="relative overflow-hidden rounded-3xl border border-primary/20 bg-background/80 backdrop-blur-xl p-12 shadow-2xl md:p-16">
                {/* Subtle gradient accent */}
                <div className="absolute -right-32 -top-32 h-64 w-64 rounded-full bg-gradient-to-br from-primary/10 to-accent/10 blur-3xl" />
                <div className="absolute -left-32 -bottom-32 h-64 w-64 rounded-full bg-gradient-to-tr from-accent/10 to-primary/10 blur-3xl" />
                
                <div className="relative">
                  <div className="mb-10 text-center">
                    <h2 className="mb-4 text-3xl font-bold md:text-4xl lg:text-5xl">
                      Bereit, mehr Kunden zu gewinnen?
                    </h2>
                    <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
                      Buchen Sie jetzt Ihr kostenloses Erstgespräch und erfahren Sie, wie ich Ihr Unternehmen online erfolgreich mache.
                    </p>
                  </div>

                  {/* CTA Buttons - Elegant & Subtle */}
                  <div className="mb-10 flex flex-col gap-4 sm:flex-row sm:justify-center">
                    <Button 
                      size="lg" 
                      className="group h-14 px-10 text-base font-semibold shadow-lg transition-all hover:shadow-xl hover:scale-105"
                      asChild
                    >
                      <a href="/contact">
                        <Calendar className="mr-2 h-5 w-5 transition-transform group-hover:scale-110" />
                        Kostenloses Erstgespräch
                        <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                      </a>
                    </Button>
                    <Button 
                      size="lg" 
                      variant="outline"
                      className="group h-14 px-10 text-base font-semibold border-primary/30 transition-all hover:border-primary/50 hover:bg-primary/5 hover:scale-105"
                      asChild
                    >
                      <a href="/portfolio">
                        Portfolio ansehen
                        <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                      </a>
                    </Button>
                  </div>

                  {/* Trust Indicators - Animated with Icons */}
                  <div className="flex flex-wrap items-center justify-center gap-6 border-t border-border pt-8 text-sm text-muted-foreground">
                    <motion.div 
                      className="flex items-center gap-2"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.2 }}
                    >
                      <motion.div
                        animate={{ scale: [1, 1.2, 1] }}
                        transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
                      >
                        <CheckCircle2 className="h-5 w-5 text-primary" />
                      </motion.div>
                      <span>Antwort in 24h</span>
                    </motion.div>
                    <motion.div 
                      className="flex items-center gap-2"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.4 }}
                    >
                      <motion.div
                        animate={{ scale: [1, 1.2, 1] }}
                        transition={{ duration: 2, repeat: Infinity, repeatDelay: 3, delay: 0.5 }}
                      >
                        <CheckCircle2 className="h-5 w-5 text-primary" />
                      </motion.div>
                      <span>Unverbindlich & kostenlos</span>
                    </motion.div>
                    <motion.div 
                      className="flex items-center gap-2"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.6 }}
                    >
                      <motion.div
                        animate={{ scale: [1, 1.2, 1] }}
                        transition={{ duration: 2, repeat: Infinity, repeatDelay: 3, delay: 1 }}
                      >
                        <CheckCircle2 className="h-5 w-5 text-primary" />
                      </motion.div>
                      <span>Individuelle Beratung</span>
                    </motion.div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
        </section>
        
        {/* Bottom Gradient Overlay */}
        <div className="absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-t from-background to-transparent pointer-events-none z-20" />
      </div>
    </Layout>
  );
}
