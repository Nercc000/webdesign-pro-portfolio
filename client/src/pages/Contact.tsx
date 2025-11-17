import { useState } from "react";
import { motion } from "framer-motion";
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
  MessageSquare
} from "lucide-react";
import { toast } from "sonner";

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

export default function Contact() {
  const [showDetailedForm, setShowDetailedForm] = useState(false);
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    // Standard form
    name: "",
    email: "",
    message: "",
    // Detailed form
    category: "",
    budget: "",
    timeline: "",
    details: "",
    phone: "",
  });

  const totalSteps = 5;

  const handleStandardSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Integrate with backend API
    toast.success("Nachricht gesendet! Wir melden uns bald bei Ihnen.");
    setFormData({ ...formData, name: "", email: "", message: "" });
  };

  const handleDetailedSubmit = () => {
    // TODO: Integrate with backend API
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
          <div className="space-y-4">
            <div className="flex items-center gap-3 mb-6">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                <FolderKanban className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h3 className="text-lg font-semibold">Projektkategorie</h3>
                <p className="text-sm text-muted-foreground">Was möchten Sie umsetzen?</p>
              </div>
            </div>
            <RadioGroup
              value={formData.category}
              onValueChange={(value) => setFormData({ ...formData, category: value })}
              className="space-y-3"
            >
              {[
                { value: "website", label: "Neue Website", desc: "Komplette Website von Grund auf" },
                { value: "redesign", label: "Website Redesign", desc: "Bestehende Website modernisieren" },
                { value: "webapp", label: "Web-Anwendung", desc: "Interaktive Web-App oder Tool" },
                { value: "ecommerce", label: "E-Commerce", desc: "Online-Shop oder Verkaufsplattform" },
                { value: "other", label: "Sonstiges", desc: "Anderes Projekt" },
              ].map((option) => (
                <Label
                  key={option.value}
                  htmlFor={option.value}
                  className="flex items-center space-x-3 rounded-lg border-2 border-muted p-4 cursor-pointer hover:border-primary transition-colors has-[:checked]:border-primary has-[:checked]:bg-primary/5"
                >
                  <RadioGroupItem value={option.value} id={option.value} />
                  <div className="flex-1">
                    <div className="font-medium">{option.label}</div>
                    <div className="text-sm text-muted-foreground">{option.desc}</div>
                  </div>
                </Label>
              ))}
            </RadioGroup>
          </div>
        );

      case 2:
        return (
          <div className="space-y-4">
            <div className="flex items-center gap-3 mb-6">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                <Euro className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h3 className="text-lg font-semibold">Budget</h3>
                <p className="text-sm text-muted-foreground">Welches Budget steht zur Verfügung?</p>
              </div>
            </div>
            <RadioGroup
              value={formData.budget}
              onValueChange={(value) => setFormData({ ...formData, budget: value })}
              className="space-y-3"
            >
              {[
                { value: "small", label: "< 5.000 €", desc: "Kleine Projekte & Landing Pages" },
                { value: "medium", label: "5.000 € - 15.000 €", desc: "Mittelgroße Websites" },
                { value: "large", label: "15.000 € - 30.000 €", desc: "Umfangreiche Projekte" },
                { value: "enterprise", label: "> 30.000 €", desc: "Enterprise-Lösungen" },
                { value: "flexible", label: "Flexibel", desc: "Noch nicht festgelegt" },
              ].map((option) => (
                <Label
                  key={option.value}
                  htmlFor={`budget-${option.value}`}
                  className="flex items-center space-x-3 rounded-lg border-2 border-muted p-4 cursor-pointer hover:border-primary transition-colors has-[:checked]:border-primary has-[:checked]:bg-primary/5"
                >
                  <RadioGroupItem value={option.value} id={`budget-${option.value}`} />
                  <div className="flex-1">
                    <div className="font-medium">{option.label}</div>
                    <div className="text-sm text-muted-foreground">{option.desc}</div>
                  </div>
                </Label>
              ))}
            </RadioGroup>
          </div>
        );

      case 3:
        return (
          <div className="space-y-4">
            <div className="flex items-center gap-3 mb-6">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                <Clock className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h3 className="text-lg font-semibold">Zeitrahmen</h3>
                <p className="text-sm text-muted-foreground">Wann soll das Projekt fertig sein?</p>
              </div>
            </div>
            <RadioGroup
              value={formData.timeline}
              onValueChange={(value) => setFormData({ ...formData, timeline: value })}
              className="space-y-3"
            >
              {[
                { value: "urgent", label: "Dringend (< 2 Wochen)", desc: "Schnellstmöglich" },
                { value: "fast", label: "Schnell (2-4 Wochen)", desc: "Zeitnah umsetzen" },
                { value: "normal", label: "Normal (1-2 Monate)", desc: "Standardzeitrahmen" },
                { value: "flexible", label: "Flexibel (> 2 Monate)", desc: "Kein Zeitdruck" },
              ].map((option) => (
                <Label
                  key={option.value}
                  htmlFor={`timeline-${option.value}`}
                  className="flex items-center space-x-3 rounded-lg border-2 border-muted p-4 cursor-pointer hover:border-primary transition-colors has-[:checked]:border-primary has-[:checked]:bg-primary/5"
                >
                  <RadioGroupItem value={option.value} id={`timeline-${option.value}`} />
                  <div className="flex-1">
                    <div className="font-medium">{option.label}</div>
                    <div className="text-sm text-muted-foreground">{option.desc}</div>
                  </div>
                </Label>
              ))}
            </RadioGroup>
          </div>
        );

      case 4:
        return (
          <div className="space-y-4">
            <div className="flex items-center gap-3 mb-6">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                <MessageSquare className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h3 className="text-lg font-semibold">Projektdetails</h3>
                <p className="text-sm text-muted-foreground">Beschreiben Sie Ihr Projekt</p>
              </div>
            </div>
            <div className="space-y-2">
              <Label htmlFor="details">Projektbeschreibung</Label>
              <Textarea
                id="details"
                placeholder="Erzählen Sie uns mehr über Ihr Projekt, Ihre Ziele und spezielle Anforderungen..."
                value={formData.details}
                onChange={(e) => setFormData({ ...formData, details: e.target.value })}
                className="min-h-[200px] resize-none"
              />
              <p className="text-xs text-muted-foreground">
                Je detaillierter Ihre Beschreibung, desto besser können wir Ihnen helfen.
              </p>
            </div>
          </div>
        );

      case 5:
        return (
          <div className="space-y-4">
            <div className="flex items-center gap-3 mb-6">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                <Mail className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h3 className="text-lg font-semibold">Kontaktdaten</h3>
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
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative overflow-hidden border-b bg-gradient-to-b from-background to-muted/20 py-24">
        <div className="container">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="mx-auto max-w-3xl text-center"
          >
            <motion.div variants={fadeInUp} className="mb-4">
              <span className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary">
                <Sparkles className="h-4 w-4" />
                Kostenlose Erstberatung
              </span>
            </motion.div>
            <motion.h1 variants={fadeInUp} className="mb-6 text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
              Lassen Sie uns über Ihr{" "}
              <span className="bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
                Projekt sprechen
              </span>
            </motion.h1>
            <motion.p variants={fadeInUp} className="text-lg text-muted-foreground">
              Wählen Sie die passende Kontaktmöglichkeit für Ihre Anfrage
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Contact Options */}
      <section className="py-24">
        <div className="container">
          <div className="mx-auto grid max-w-6xl gap-8 lg:grid-cols-2">
            {/* Standard Contact Form */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              <Card className="h-full">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Send className="h-5 w-5 text-primary" />
                    Schnellanfrage
                  </CardTitle>
                  <CardDescription>
                    Für allgemeine Fragen und erste Kontaktaufnahme
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleStandardSubmit} className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="name">Name</Label>
                      <Input
                        id="name"
                        placeholder="Ihr Name"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">E-Mail</Label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="ihre@email.de"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="message">Nachricht</Label>
                      <Textarea
                        id="message"
                        placeholder="Ihre Nachricht..."
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        className="min-h-[150px] resize-none"
                        required
                      />
                    </div>
                    <Button type="submit" className="w-full" size="lg">
                      <Send className="mr-2 h-4 w-4" />
                      Nachricht senden
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </motion.div>

            {/* Detailed Form CTA */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              <Card className="h-full border-primary/50 bg-gradient-to-br from-primary/5 to-primary/10">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Sparkles className="h-5 w-5 text-primary" />
                    Detaillierte Projektanfrage
                  </CardTitle>
                  <CardDescription>
                    Für konkrete Projekte mit individueller Beratung
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <CheckCircle2 className="h-5 w-5 text-primary mt-0.5" />
                      <div>
                        <div className="font-medium">Strukturierter Prozess</div>
                        <div className="text-sm text-muted-foreground">
                          5 einfache Schritte zu Ihrem Angebot
                        </div>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle2 className="h-5 w-5 text-primary mt-0.5" />
                      <div>
                        <div className="font-medium">Präzises Angebot</div>
                        <div className="text-sm text-muted-foreground">
                          Basierend auf Ihren spezifischen Anforderungen
                        </div>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle2 className="h-5 w-5 text-primary mt-0.5" />
                      <div>
                        <div className="font-medium">Schnelle Rückmeldung</div>
                        <div className="text-sm text-muted-foreground">
                          Antwort innerhalb von 24 Stunden
                        </div>
                      </div>
                    </div>
                  </div>
                  <Button
                    onClick={() => setShowDetailedForm(true)}
                    className="w-full"
                    size="lg"
                    variant="default"
                  >
                    Projektanfrage starten
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          </div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="mx-auto mt-16 max-w-4xl"
          >
            <Card>
              <CardHeader>
                <CardTitle>Weitere Kontaktmöglichkeiten</CardTitle>
                <CardDescription>
                  Sie können uns auch direkt erreichen
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid gap-6 sm:grid-cols-3">
                  <div className="flex items-start gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
                      <Mail className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <div className="font-medium">E-Mail</div>
                      <a
                        href="mailto:kontakt@webdesignpro.de"
                        className="text-sm text-muted-foreground hover:text-primary transition-colors"
                      >
                        kontakt@webdesignpro.de
                      </a>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
                      <Phone className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <div className="font-medium">Telefon</div>
                      <a
                        href="tel:+49123456789"
                        className="text-sm text-muted-foreground hover:text-primary transition-colors"
                      >
                        +49 123 456789
                      </a>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
                      <MapPin className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <div className="font-medium">Standort</div>
                      <div className="text-sm text-muted-foreground">
                        Berlin, Deutschland
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* Detailed Form Dialog */}
      <Dialog open={showDetailedForm} onOpenChange={setShowDetailedForm}>
        <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle>Projektanfrage - Schritt {currentStep} von {totalSteps}</DialogTitle>
            <DialogDescription>
              Beantworten Sie ein paar Fragen, um ein maßgeschneidertes Angebot zu erhalten
            </DialogDescription>
          </DialogHeader>

          {/* Progress Bar */}
          <div className="mb-6">
            <div className="flex justify-between mb-2">
              {Array.from({ length: totalSteps }, (_, i) => (
                <div
                  key={i}
                  className={`h-2 flex-1 rounded-full mx-1 transition-colors ${
                    i < currentStep ? "bg-primary" : "bg-muted"
                  }`}
                />
              ))}
            </div>
          </div>

          {/* Step Content */}
          <div className="py-4">{renderStep()}</div>

          {/* Navigation Buttons */}
          <div className="flex justify-between gap-4 pt-4 border-t">
            <Button
              variant="outline"
              onClick={prevStep}
              disabled={currentStep === 1}
              className="flex-1"
            >
              <ArrowLeft className="mr-2 h-4 w-4" />
              Zurück
            </Button>
            <Button
              onClick={nextStep}
              disabled={!canProceed()}
              className="flex-1"
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
    </div>
  );
}
