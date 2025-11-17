import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  Mail, 
  Phone, 
  MapPin, 
  Send, 
  ArrowRight, 
  ArrowLeft,
  CheckCircle2,
  Sparkles,
  Clock,
  Euro,
  FolderKanban,
  MessageSquare,
  Zap
} from "lucide-react";
import { toast } from "sonner";
import Layout from "@/components/Layout";
import FAQ from "@/components/FAQ";

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.1,
      duration: 0.5,

    },
  }),
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.1,
    },
  },
};

export default function Contact() {
  const [showDetailedForm, setShowDetailedForm] = useState(false);
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
    category: "",
    budget: "",
    timeline: "",
    details: "",
    phone: "",
  });

  const totalSteps = 5;

  const handleStandardSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Nachricht gesendet! Wir melden uns bald bei Ihnen.");
    setFormData({ ...formData, name: "", email: "", message: "" });
  };

  const handleDetailedSubmit = () => {
    toast.success("Anfrage gesendet! Wir melden uns innerhalb von 24 Stunden.");
    setShowDetailedForm(false);
    setCurrentStep(1);
    setFormData({
      name: "",
      email: "",
      message: "",
      category: "",
      budget: "",
      timeline: "",
      details: "",
      phone: "",
    });
  };

  const nextStep = () => {
    if (currentStep < totalSteps) {
      setCurrentStep(currentStep + 1);
    } else {
      handleDetailedSubmit();
    }
  };

  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const canProceed = () => {
    switch (currentStep) {
      case 1:
        return formData.category !== "";
      case 2:
        return formData.budget !== "";
      case 3:
        return formData.timeline !== "";
      case 4:
        return formData.details.trim() !== "";
      case 5:
        return formData.name.trim() !== "" && formData.email.trim() !== "";
      default:
        return false;
    }
  };

  const renderStep = () => {
    switch (currentStep) {
      case 1:
        return (
          <div className="space-y-6">
            <div className="flex items-center gap-3 mb-6">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 ring-1 ring-primary/20">
                <FolderKanban className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h3 className="text-xl font-semibold">Projektkategorie</h3>
                <p className="text-sm text-muted-foreground">Was möchten Sie umsetzen?</p>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-3">
              {[
                { value: "website", label: "Neue Website", desc: "Von Grund auf" },
                { value: "redesign", label: "Redesign", desc: "Modernisieren" },
                { value: "webapp", label: "Web-App", desc: "Interaktiv" },
                { value: "ecommerce", label: "E-Commerce", desc: "Online-Shop" },
                { value: "landing", label: "Landing Page", desc: "Marketing" },
                { value: "other", label: "Sonstiges", desc: "Anderes" },
              ].map((option) => (
                <label
                  key={option.value}
                  className={`relative flex flex-col p-4 rounded-xl border-2 cursor-pointer transition-all hover:border-primary hover:shadow-lg hover:shadow-primary/10 ${
                    formData.category === option.value
                      ? "border-primary bg-primary/5 shadow-lg shadow-primary/10"
                      : "border-border bg-card"
                  }`}
                >
                  <input
                    type="radio"
                    name="category"
                    value={option.value}
                    checked={formData.category === option.value}
                    onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                    className="sr-only"
                  />
                  <div className="font-medium text-sm">{option.label}</div>
                  <div className="text-xs text-muted-foreground mt-1">{option.desc}</div>
                  {formData.category === option.value && (
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      className="absolute top-2 right-2"
                    >
                      <CheckCircle2 className="h-5 w-5 text-primary" />
                    </motion.div>
                  )}
                </label>
              ))}
            </div>
          </div>
        );

      case 2:
        return (
          <div className="space-y-6">
            <div className="flex items-center gap-3 mb-6">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 ring-1 ring-primary/20">
                <Euro className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h3 className="text-xl font-semibold">Budget</h3>
                <p className="text-sm text-muted-foreground">Welches Budget steht zur Verfügung?</p>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-3">
              {[
                { value: "small", label: "< 5.000 €", desc: "Kleine Projekte" },
                { value: "medium", label: "5-15k €", desc: "Mittelgroß" },
                { value: "large", label: "15-30k €", desc: "Umfangreich" },
                { value: "enterprise", label: "> 30.000 €", desc: "Enterprise" },
                { value: "flexible", label: "Flexibel", desc: "Noch offen" },
                { value: "discuss", label: "Besprechen", desc: "Beratung" },
              ].map((option) => (
                <label
                  key={option.value}
                  className={`relative flex flex-col p-4 rounded-xl border-2 cursor-pointer transition-all hover:border-primary hover:shadow-lg hover:shadow-primary/10 ${
                    formData.budget === option.value
                      ? "border-primary bg-primary/5 shadow-lg shadow-primary/10"
                      : "border-border bg-card"
                  }`}
                >
                  <input
                    type="radio"
                    name="budget"
                    value={option.value}
                    checked={formData.budget === option.value}
                    onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                    className="sr-only"
                  />
                  <div className="font-medium text-sm">{option.label}</div>
                  <div className="text-xs text-muted-foreground mt-1">{option.desc}</div>
                  {formData.budget === option.value && (
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      className="absolute top-2 right-2"
                    >
                      <CheckCircle2 className="h-5 w-5 text-primary" />
                    </motion.div>
                  )}
                </label>
              ))}
            </div>
          </div>
        );

      case 3:
        return (
          <div className="space-y-6">
            <div className="flex items-center gap-3 mb-6">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 ring-1 ring-primary/20">
                <Clock className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h3 className="text-xl font-semibold">Zeitrahmen</h3>
                <p className="text-sm text-muted-foreground">Wann soll es fertig sein?</p>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-3">
              {[
                { value: "urgent", label: "Dringend", desc: "< 2 Wochen" },
                { value: "fast", label: "Schnell", desc: "2-4 Wochen" },
                { value: "normal", label: "Normal", desc: "1-2 Monate" },
                { value: "flexible", label: "Flexibel", desc: "> 2 Monate" },
              ].map((option) => (
                <label
                  key={option.value}
                  className={`relative flex flex-col p-4 rounded-xl border-2 cursor-pointer transition-all hover:border-primary hover:shadow-lg hover:shadow-primary/10 ${
                    formData.timeline === option.value
                      ? "border-primary bg-primary/5 shadow-lg shadow-primary/10"
                      : "border-border bg-card"
                  }`}
                >
                  <input
                    type="radio"
                    name="timeline"
                    value={option.value}
                    checked={formData.timeline === option.value}
                    onChange={(e) => setFormData({ ...formData, timeline: e.target.value })}
                    className="sr-only"
                  />
                  <div className="font-medium text-sm">{option.label}</div>
                  <div className="text-xs text-muted-foreground mt-1">{option.desc}</div>
                  {formData.timeline === option.value && (
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      className="absolute top-2 right-2"
                    >
                      <CheckCircle2 className="h-5 w-5 text-primary" />
                    </motion.div>
                  )}
                </label>
              ))}
            </div>
          </div>
        );

      case 4:
        return (
          <div className="space-y-6">
            <div className="flex items-center gap-3 mb-6">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 ring-1 ring-primary/20">
                <MessageSquare className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h3 className="text-xl font-semibold">Projektdetails</h3>
                <p className="text-sm text-muted-foreground">Beschreiben Sie Ihr Projekt</p>
              </div>
            </div>
            <div className="space-y-2">
              <Label htmlFor="details" className="text-base">Projektbeschreibung *</Label>
              <Textarea
                id="details"
                placeholder="Erzählen Sie uns mehr über Ihr Projekt, Ihre Ziele und spezielle Anforderungen...&#10;&#10;• Was ist das Ziel?&#10;• Wer ist die Zielgruppe?&#10;• Welche Features sind wichtig?"
                value={formData.details}
                onChange={(e) => setFormData({ ...formData, details: e.target.value })}
                className="min-h-[200px] resize-none"
              />
              <p className="text-xs text-muted-foreground">
                Je detaillierter Ihre Beschreibung, desto präziser unser Angebot.
              </p>
            </div>
          </div>
        );

      case 5:
        return (
          <div className="space-y-6">
            <div className="flex items-center gap-3 mb-6">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 ring-1 ring-primary/20">
                <Mail className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h3 className="text-xl font-semibold">Kontaktdaten</h3>
                <p className="text-sm text-muted-foreground">Wie können wir Sie erreichen?</p>
              </div>
            </div>
            <div className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="detailed-name">Name *</Label>
                <Input
                  id="detailed-name"
                  placeholder="Ihr vollständiger Name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="h-11"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="detailed-email">E-Mail *</Label>
                <Input
                  id="detailed-email"
                  type="email"
                  placeholder="ihre@email.de"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="h-11"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="detailed-phone">Telefon (optional)</Label>
                <Input
                  id="detailed-phone"
                  type="tel"
                  placeholder="+49 123 456789"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="h-11"
                />
              </div>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <Layout>
      {/* Background Pattern */}
      <div className="fixed inset-0 -z-10">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]" />
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-primary/5" />
      </div>

      {/* Hero Section */}
      <section className="relative overflow-hidden border-b py-24 md:py-32">
        <div className="container">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="mx-auto max-w-3xl text-center"
          >
            <motion.div custom={0} variants={fadeInUp} className="mb-6">
              <span className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary backdrop-blur-sm">
                <Sparkles className="h-4 w-4" />
                Kostenlose Erstberatung
              </span>
            </motion.div>
            <motion.h1 custom={1} variants={fadeInUp} className="mb-6 text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
              Lassen Sie uns über Ihr{" "}
              <span className="bg-gradient-to-r from-primary via-primary/80 to-primary/60 bg-clip-text text-transparent">
                Projekt sprechen
              </span>
            </motion.h1>
            <motion.p custom={2} variants={fadeInUp} className="text-lg text-muted-foreground md:text-xl">
              Wählen Sie die passende Kontaktmöglichkeit für Ihre Anfrage
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Contact Options */}
      <section className="py-24 md:py-32">
        <div className="container">
          <div className="mx-auto max-w-6xl space-y-8">
          <div className="grid gap-8 lg:grid-cols-2">
            {/* Standard Contact Form */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.5 }}
            >
              <Card className="group relative h-full overflow-hidden border-2 transition-all hover:border-primary/50 hover:shadow-2xl hover:shadow-primary/10">
                {/* Animated Border Beam Effect */}
                <div className="absolute inset-0 opacity-0 transition-opacity group-hover:opacity-100">
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/20 to-transparent blur-xl" />
                </div>
                
                <CardHeader className="relative">
                  <CardTitle className="flex items-center gap-2 text-2xl">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                      <Send className="h-5 w-5 text-primary" />
                    </div>
                    Schnellanfrage
                  </CardTitle>
                  <CardDescription className="text-base">
                    Für allgemeine Fragen und erste Kontaktaufnahme
                  </CardDescription>
                </CardHeader>
                <CardContent className="relative">
                  <form onSubmit={handleStandardSubmit} className="space-y-5">
                    <div className="space-y-2">
                      <Label htmlFor="name" className="text-sm font-medium">Name</Label>
                      <Input
                        id="name"
                        placeholder="Ihr Name"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        required
                        className="h-11"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email" className="text-sm font-medium">E-Mail</Label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="ihre@email.de"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        required
                        className="h-11"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="message" className="text-sm font-medium">Nachricht</Label>
                      <Textarea
                        id="message"
                        placeholder="Ihre Nachricht..."
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        className="min-h-[150px] resize-none"
                        required
                      />
                    </div>
                    <Button type="submit" className="relative w-full overflow-hidden" size="lg">
                      <span className="relative z-10 flex items-center justify-center gap-2">
                        <Send className="h-4 w-4" />
                        Nachricht senden
                      </span>
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </motion.div>

            {/* Detailed Form CTA */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.5 }}
            >
              <Card className="group relative h-full overflow-hidden border-2 border-primary/50 bg-gradient-to-br from-primary/5 via-primary/[0.02] to-background transition-all hover:border-primary hover:shadow-2xl hover:shadow-primary/20">
                {/* Shimmer Effect */}
                <div className="absolute inset-0 -translate-x-full animate-[shimmer_3s_infinite] bg-gradient-to-r from-transparent via-white/10 to-transparent" />
                
                <CardHeader className="relative">
                  <CardTitle className="flex items-center gap-2 text-2xl">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/20 ring-2 ring-primary/30">
                      <Sparkles className="h-5 w-5 text-primary" />
                    </div>
                    Detaillierte Projektanfrage
                  </CardTitle>
                  <CardDescription className="text-base">
                    Für konkrete Projekte mit individueller Beratung
                  </CardDescription>
                </CardHeader>
                <CardContent className="relative space-y-6">
                  <div className="space-y-4">
                    {[
                      { icon: CheckCircle2, title: "Strukturierter Prozess", desc: "5 einfache Schritte zu Ihrem Angebot" },
                      { icon: Zap, title: "Präzises Angebot", desc: "Basierend auf Ihren Anforderungen" },
                      { icon: Clock, title: "Schnelle Rückmeldung", desc: "Antwort innerhalb von 24 Stunden" },
                    ].map((item, i) => (
                      <div key={i} className="flex items-start gap-3">
                        <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary/10">
                          <item.icon className="h-4 w-4 text-primary" />
                        </div>
                        <div>
                          <div className="font-medium">{item.title}</div>
                          <div className="text-sm text-muted-foreground">{item.desc}</div>
                        </div>
                      </div>
                    ))}
                  </div>
                  <Button
                    onClick={() => setShowDetailedForm(true)}
                    className="relative w-full overflow-hidden bg-primary text-primary-foreground shadow-lg shadow-primary/25 transition-all hover:shadow-xl hover:shadow-primary/30"
                    size="lg"
                  >
                    <span className="relative z-10 flex items-center justify-center gap-2">
                      Projektanfrage starten
                      <ArrowRight className="h-4 w-4" />
                    </span>
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          </div>

          {/* Contact Info - Between Forms */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.5 }}
          >
            <Card className="border-2">
              <CardHeader>
                <CardTitle className="text-2xl">Weitere Kontaktmöglichkeiten</CardTitle>
                <CardDescription className="text-base">
                  Sie können uns auch direkt erreichen
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid gap-6 sm:grid-cols-3">
                  {[
                    { icon: Mail, title: "E-Mail", value: "kontakt@webdesignpro.de", href: "mailto:kontakt@webdesignpro.de" },
                    { icon: Phone, title: "Telefon", value: "+49 123 456789", href: "tel:+49123456789" },
                    { icon: MapPin, title: "Standort", value: "Berlin, Deutschland", href: "#" },
                  ].map((item, i) => (
                    <a
                      key={i}
                      href={item.href}
                      className="group flex items-start gap-3 rounded-xl border-2 border-transparent p-4 transition-all hover:border-primary/50 hover:bg-primary/5"
                    >
                      <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 transition-colors group-hover:bg-primary/20">
                        <item.icon className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <div className="font-medium">{item.title}</div>
                        <div className="text-sm text-muted-foreground group-hover:text-primary transition-colors">
                          {item.value}
                        </div>
                      </div>
                    </a>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>
          </div>
        </div>
      </section>

      {/* Detailed Form Dialog */}
      <Dialog open={showDetailedForm} onOpenChange={setShowDetailedForm}>
        <DialogContent className="max-w-3xl max-h-[90vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle className="text-2xl">
              Projektanfrage - Schritt {currentStep} von {totalSteps}
            </DialogTitle>
            <DialogDescription className="text-base">
              Beantworten Sie ein paar Fragen, um ein maßgeschneidertes Angebot zu erhalten
            </DialogDescription>
          </DialogHeader>

          {/* Progress Bar */}
          <div className="mb-6">
            <div className="flex gap-2">
              {Array.from({ length: totalSteps }, (_, i) => (
                <motion.div
                  key={i}
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: i < currentStep ? 1 : 0 }}
                  transition={{ duration: 0.3 }}
                  className="h-2 flex-1 rounded-full bg-muted overflow-hidden"
                  style={{ transformOrigin: "left" }}
                >
                  {i < currentStep && (
                    <div className="h-full w-full bg-gradient-to-r from-primary to-primary/80" />
                  )}
                </motion.div>
              ))}
            </div>
          </div>

          {/* Step Content */}
          <AnimatePresence mode="wait">
            <motion.div
              key={currentStep}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3 }}
              className="py-4"
            >
              {renderStep()}
            </motion.div>
          </AnimatePresence>

          {/* Navigation Buttons */}
          <div className="flex justify-between gap-4 pt-6 border-t">
            <Button
              variant="outline"
              onClick={prevStep}
              disabled={currentStep === 1}
              className="flex-1"
              size="lg"
            >
              <ArrowLeft className="mr-2 h-4 w-4" />
              Zurück
            </Button>
            <Button
              onClick={nextStep}
              disabled={!canProceed()}
              className="flex-1"
              size="lg"
            >
              {currentStep === totalSteps ? (
                <>
                  <CheckCircle2 className="mr-2 h-4 w-4" />
                  Anfrage absenden
                </>
              ) : (
                <>
                  Weiter
                  <ArrowRight className="ml-2 h-4 w-4" />
                </>
              )}
            </Button>
          </div>
        </DialogContent>
      </Dialog>

      {/* FAQ Section */}
      <FAQ />

      <style>{`
        @keyframes shimmer {
          to {
            transform: translateX(200%);
          }
        }
      `}</style>
    </Layout>
  );
}
