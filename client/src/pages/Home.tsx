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
      className="mx-4 w-[400px] flex-shrink-0"
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
      <CardContent className="p-6">
        {/* Rating Stars */}
        <div className="mb-4 flex gap-1">
          {Array.from({ length: rating }).map((_, i) => (
            <svg key={i} className="h-5 w-5 fill-primary text-primary" viewBox="0 0 20 20">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
          ))}
        </div>
        
        {/* Testimonial Text */}
        <p className="mb-6 text-sm leading-relaxed text-muted-foreground">
          "{text}"
        </p>
        
        {/* Author */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            {logo ? (
              <img src={logo} alt={company} loading="lazy" className="h-12 w-12 rounded-full object-contain bg-white p-1" />
            ) : (
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 font-bold text-primary">
                {name.charAt(0)}
              </div>
            )}
            <div>
              <div className="font-semibold">{name}</div>
              <div className="text-sm text-muted-foreground">{company}</div>
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
      <section className="relative h-screen flex items-center overflow-hidden pt-24 md:pt-0">
        {/* Background Pattern */}
        <div className="absolute inset-0 bg-grid-pattern opacity-5" />
        
        {/* Web-bezogene Dekorationen */}
        <HeroDecorations />
        
        <div className="container relative z-10">
          <div className="mx-auto max-w-5xl text-center">

            {/* Main Headline - Problem Focused */}
            <motion.h1 
              className="mb-6 text-4xl font-bold tracking-tight leading-[1.2] sm:text-5xl md:text-7xl lg:text-8xl"
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
              <motion.div variants={scaleIn}>
                <Button 
                  size="lg" 
                  className="h-16 px-12 text-lg font-bold shadow-2xl shadow-primary/50 transition-all hover:scale-105 hover:shadow-primary/70"
                  asChild
                >
                  <a href="/contact">
                    <Calendar className="mr-3 h-6 w-6" />
                    Kostenloses Erstgespräch
                    <ArrowRight className="ml-3 h-6 w-6" />
                  </a>
                </Button>
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

            {/* Projects Grid */}
            <motion.div 
              className="grid gap-8 md:grid-cols-2 lg:grid-cols-3"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={staggerContainer}
            >
              <ProjectCard
                title="Bella Cucina Restaurant"
                description="Moderne Restaurant-Website mit Online-Reservierungssystem und interaktiver Speisekarte. Optimiert für mobile Geräte und schnelle Ladezeiten."
                image="/project-bella-cucina.jpg"
                category="Gastronomie"
                technologies={["React", "TypeScript", "Tailwind CSS"]}
                results="+100% Online-Reservierungen"
              />
              
              <ProjectCard
                title="Boutique Luna Shop"
                description="E-Commerce-Plattform mit modernem Design, Warenkorb-Funktion und sicherer Zahlungsabwicklung. Vollständig responsive und SEO-optimiert."
                image="/project-boutique-luna.jpg"
                category="E-Commerce"
                technologies={["Next.js", "Stripe", "Tailwind CSS"]}
                results="+80% Umsatzsteigerung"
              />
              
              <ProjectCard
                title="FitStark Studio"
                description="Fitness-Studio-Website mit Online-Buchungssystem für Kurse, Mitgliederverwaltung und Blog. Moderne Animationen und intuitive Navigation."
                image="/project-fitstark.jpg"
                category="Fitness"
                technologies={["React", "WordPress", "CSS"]}
                results="+120 neue Mitglieder"
              />
            </motion.div>

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
              name="Warum WebDesignPro?"
              className="col-span-1 md:col-span-2 lg:col-span-2 lg:row-span-2 [&_.p-6]:pt-2 [&_h3]:text-base [&_p]:text-sm"
              background={<CodeEditorAnimation />}
              Icon={Code2}
              description="Wir kombinieren modernste Technologie mit kreativem Design, um Websites zu schaffen, die nicht nur gut aussehen, sondern auch Ergebnisse liefern."
              href="#contact"
              cta="Jetzt starten"
            />

            <BentoCard
              name="40+ Projekte"
              className="col-span-1"
              background={<ProjectsMarquee />}
              Icon={Briefcase}
              description="Erfolgreich abgeschlossene Projekte"
              href="#portfolio"
              cta="Projekte ansehen"
            />

            <BentoCard
              name="8+ Kunden"
              className="col-span-1"
              background={<CustomerAvatars />}
              Icon={Users}
              description="Zufriedene Kunden"
              href="#testimonials"
              cta="Referenzen ansehen"
            />

            <BentoCard
              name="Schnelle Umsetzung"
              className="col-span-1 md:col-span-2 lg:col-span-2"
              background={<TimelineAnimation />}
              Icon={Zap}
              description="Ihre Website ist in 2 Wochen fertig und online. Kein langes Warten, schnelle Ergebnisse."
              href="#services"
              cta="Mehr erfahren"
            />

            <BentoCard
              name="100% Qualität"
              className="col-span-1"
              background={<QualityBadge />}
              Icon={Award}
              description="Expertise & Qualität"
              href="#about"
              cta="Über mich"
            />

            <BentoCard
              name="Modernes Design"
              className="col-span-1"
              background={<ColorPalette />}
              Icon={Star}
              description="Zeitgemäße Designs mit neuesten Technologien"
              href="#services"
              cta="Services ansehen"
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
            <Marquee className="mb-8 [--duration:30s] [--gap:1rem]" pauseOnHover repeat={6}>
              {testimonials.slice(0, 3).map((testimonial, index) => (
                <TestimonialCard key={`row1-${index}`} {...testimonial} />
              ))}
            </Marquee>
            
            {/* Second Row - Right to Left */}
            <Marquee className="mb-8 [--duration:30s] [--gap:1rem]" reverse pauseOnHover repeat={6}>
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
        <div className="container">
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

            <Accordion type="single" collapsible defaultValue="item-1" className="w-full space-y-4">
              <AccordionItem value="item-1" className="rounded-lg border border-border bg-card px-6 shadow-sm transition-all hover:shadow-md">
                <AccordionTrigger className="text-left text-lg font-semibold hover:no-underline [&>svg]:h-5 [&>svg]:w-5">
                  Was kostet eine professionelle Website?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  Die Kosten variieren je nach Umfang und Anforderungen. Eine einfache Business-Website startet bei ca. €1.500, während umfangreichere Projekte mit E-Commerce oder individuellen Funktionen ab €3.000 beginnen. Im kostenlosen Erstgespräch erstelle ich Ihnen ein transparentes Angebot ohne versteckte Kosten.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-2" className="rounded-lg border border-border bg-card px-6 shadow-sm transition-all hover:shadow-md">
                <AccordionTrigger className="text-left text-lg font-semibold hover:no-underline [&>svg]:h-5 [&>svg]:w-5">
                  Wie lange dauert die Erstellung einer Website?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  Eine Standard-Website ist in der Regel innerhalb von 2-4 Wochen fertig. Der genaue Zeitrahmen hängt von der Komplexität des Projekts und der Geschwindigkeit Ihres Feedbacks ab. Ich halte Sie während des gesamten Prozesses auf dem Laufenden und arbeite nach einem klaren Zeitplan.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-3" className="rounded-lg border border-border bg-card px-6 shadow-sm transition-all hover:shadow-md">
                <AccordionTrigger className="text-left text-lg font-semibold hover:no-underline [&>svg]:h-5 [&>svg]:w-5">
                  Welche Technologien verwenden Sie?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  Ich arbeite mit modernen, zukunftssicheren Technologien wie React, TypeScript, Next.js und Tailwind CSS für maßgeschneiderte Lösungen. Für Content-Management-Systeme setze ich auf WordPress. Alle Websites sind responsive, schnell und SEO-optimiert – garantiert.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-4" className="rounded-lg border border-border bg-card px-6 shadow-sm transition-all hover:shadow-md">
                <AccordionTrigger className="text-left text-lg font-semibold hover:no-underline [&>svg]:h-5 [&>svg]:w-5">
                  Bieten Sie auch Wartung und Support an?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  Ja, ich biete verschiedene Wartungspakete an. Diese umfassen regelmäßige Updates, Sicherheits-Backups, technischen Support und kleinere Anpassungen. Sie können zwischen monatlichen oder jährlichen Paketen wählen – ganz nach Ihrem Bedarf.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-5" className="rounded-lg border border-border bg-card px-6 shadow-sm transition-all hover:shadow-md">
                <AccordionTrigger className="text-left text-lg font-semibold hover:no-underline [&>svg]:h-5 [&>svg]:w-5">
                  Kann ich meine Website selbst aktualisieren?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  Absolut! Bei WordPress-Projekten erhalten Sie ein benutzerfreundliches Content-Management-System, mit dem Sie Texte, Bilder und Inhalte selbst ändern können. Ich schule Sie gerne in der Bedienung und stelle Ihnen eine ausführliche Dokumentation zur Verfügung.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-6" className="rounded-lg border border-border bg-card px-6 shadow-sm transition-all hover:shadow-md">
                <AccordionTrigger className="text-left text-lg font-semibold hover:no-underline [&>svg]:h-5 [&>svg]:w-5">
                  Wie läuft die Zusammenarbeit ab?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  Nach dem kostenlosen Erstgespräch erstelle ich Ihnen ein Angebot. Bei Zusage beginnen wir mit der Konzeption und dem Design. Sie erhalten regelmäßige Updates und können jederzeit Feedback geben. Nach Ihrer finalen Freigabe geht die Website live. Keine Vorkasse erforderlich – Sie zahlen erst bei Zufriedenheit.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-7" className="rounded-lg border border-border bg-card px-6 shadow-sm transition-all hover:shadow-md">
                <AccordionTrigger className="text-left text-lg font-semibold hover:no-underline [&>svg]:h-5 [&>svg]:w-5">
                  Was passiert, wenn mir das Ergebnis nicht gefällt?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
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
