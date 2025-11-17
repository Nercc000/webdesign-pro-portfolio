import { useState } from "react";
import { motion } from "framer-motion";
import { Send, Mail, Phone, MapPin, ArrowRight, Check } from "lucide-react";
import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { toast } from "sonner";
import FAQ from "@/components/FAQ";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    message: "",
  });

  const [detailedFormData, setDetailedFormData] = useState({
    category: "",
    budget: "",
    timeline: "",
    details: "",
    name: "",
    email: "",
    phone: "",
  });

  const [showDetailedForm, setShowDetailedForm] = useState(false);
  const [currentStep, setCurrentStep] = useState(1);
  const totalSteps = 5;

  const handleStandardSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Nachricht gesendet! Wir melden uns in Kürze bei Ihnen.");
    setFormData({ name: "", email: "", phone: "", company: "", message: "" });
  };

  const handleDetailedSubmit = () => {
    toast.success("Projektanfrage gesendet! Wir erstellen Ihr individuelles Angebot.");
    setShowDetailedForm(false);
    setCurrentStep(1);
    setDetailedFormData({
      category: "",
      budget: "",
      timeline: "",
      details: "",
      name: "",
      email: "",
      phone: "",
    });
  };

  const nextStep = () => {
    if (currentStep < totalSteps) setCurrentStep(currentStep + 1);
    else handleDetailedSubmit();
  };

  const prevStep = () => {
    if (currentStep > 1) setCurrentStep(currentStep - 1);
  };

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

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-b from-background via-background to-muted/20 py-20 md:py-32">
        <div className="container relative z-10">
          <motion.div
            initial="hidden"
            animate="visible"
            className="mx-auto max-w-3xl text-center"
          >
            <motion.h1
              custom={0}
              variants={fadeInUp}
              className="mb-6 text-4xl font-bold tracking-tight md:text-5xl lg:text-6xl"
            >
              Lassen Sie uns{" "}
              <span className="bg-gradient-to-r from-primary via-primary/80 to-primary/60 bg-clip-text text-transparent">
                sprechen
              </span>
            </motion.h1>
            <motion.p custom={1} variants={fadeInUp} className="text-lg text-muted-foreground md:text-xl">
              Erzählen Sie uns von Ihrem Projekt und wir erstellen ein maßgeschneidertes Angebot
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Main Contact Section */}
      <section className="py-20 md:py-32">
        <div className="container">
          <div className="mx-auto max-w-6xl">
            <div className="grid gap-12 lg:grid-cols-2">
              {/* Left: Contact Form */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
              >
                <div className="mb-8">
                  <h2 className="mb-3 text-3xl font-bold">Kontaktformular</h2>
                  <p className="text-muted-foreground">
                    Füllen Sie das Formular aus und wir melden uns innerhalb von 24 Stunden
                  </p>
                </div>

                <form onSubmit={handleStandardSubmit} className="space-y-6">
                  <div className="grid gap-6 sm:grid-cols-2">
                    <div className="space-y-2">
                      <Label htmlFor="name">Name *</Label>
                      <Input
                        id="name"
                        placeholder="Max Mustermann"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        required
                        className="h-12"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">E-Mail *</Label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="max@beispiel.de"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        required
                        className="h-12"
                      />
                    </div>
                  </div>

                  <div className="grid gap-6 sm:grid-cols-2">
                    <div className="space-y-2">
                      <Label htmlFor="phone">Telefon</Label>
                      <Input
                        id="phone"
                        type="tel"
                        placeholder="+49 123 456789"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="h-12"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="company">Unternehmen</Label>
                      <Input
                        id="company"
                        placeholder="Ihre Firma GmbH"
                        value={formData.company}
                        onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                        className="h-12"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">Nachricht *</Label>
                    <Textarea
                      id="message"
                      placeholder="Beschreiben Sie Ihr Projekt..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="min-h-[180px] resize-none"
                      required
                    />
                  </div>

                  <Button type="submit" size="lg" className="w-full sm:w-auto">
                    <Send className="mr-2 h-4 w-4" />
                    Nachricht senden
                  </Button>
                </form>

                {/* Detailed Form CTA */}
                <div className="mt-8 rounded-2xl border-2 border-primary/20 bg-primary/5 p-6">
                  <h3 className="mb-2 text-lg font-semibold">Detaillierte Projektanfrage</h3>
                  <p className="mb-4 text-sm text-muted-foreground">
                    Für konkrete Projekte empfehlen wir unseren strukturierten Fragebogen
                  </p>
                  <Button
                    onClick={() => setShowDetailedForm(true)}
                    variant="outline"
                    className="w-full border-primary/50 hover:bg-primary/10"
                  >
                    Projektanfrage starten
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </motion.div>

              {/* Right: Contact Info & Map */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="space-y-8"
              >
                <div>
                  <h2 className="mb-6 text-3xl font-bold">Kontaktinformationen</h2>
                  
                  <div className="space-y-6">
                    {[
                      {
                        icon: Mail,
                        label: "E-Mail",
                        value: "kontakt@webdesignpro.de",
                        href: "mailto:kontakt@webdesignpro.de",
                      },
                      {
                        icon: Phone,
                        label: "Telefon",
                        value: "+49 123 456789",
                        href: "tel:+49123456789",
                      },
                      {
                        icon: MapPin,
                        label: "Standort",
                        value: "Berlin, Deutschland",
                        href: "#",
                      },
                    ].map((item, i) => (
                      <a
                        key={i}
                        href={item.href}
                        className="group flex items-start gap-4 rounded-xl border border-border bg-card p-5 transition-all hover:border-primary/50 hover:bg-primary/5"
                      >
                        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-primary/10 transition-colors group-hover:bg-primary/20">
                          <item.icon className="h-5 w-5 text-primary" />
                        </div>
                        <div>
                          <div className="mb-1 text-sm font-medium text-muted-foreground">
                            {item.label}
                          </div>
                          <div className="font-medium transition-colors group-hover:text-primary">
                            {item.value}
                          </div>
                        </div>
                      </a>
                    ))}
                  </div>
                </div>

                {/* Opening Hours */}
                <div className="rounded-2xl border border-border bg-card p-6">
                  <h3 className="mb-4 text-lg font-semibold">Öffnungszeiten</h3>
                  <div className="space-y-3 text-sm">
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Montag - Freitag</span>
                      <span className="font-medium">9:00 - 18:00</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Samstag</span>
                      <span className="font-medium">10:00 - 14:00</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Sonntag</span>
                      <span className="font-medium">Geschlossen</span>
                    </div>
                  </div>
                </div>

                {/* Response Time */}
                <div className="rounded-2xl bg-gradient-to-br from-primary/10 via-primary/5 to-transparent p-6">
                  <div className="flex items-start gap-4">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-primary/20">
                      <Check className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="mb-2 font-semibold">Schnelle Rückmeldung garantiert</h3>
                      <p className="text-sm text-muted-foreground">
                        Wir antworten auf alle Anfragen innerhalb von 24 Stunden - auch am Wochenende
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Detailed Form Dialog */}
      <Dialog open={showDetailedForm} onOpenChange={setShowDetailedForm}>
        <DialogContent className="max-h-[90vh] max-w-2xl overflow-y-auto">
          <DialogHeader>
            <DialogTitle className="text-2xl">
              Projektanfrage - Schritt {currentStep} von {totalSteps}
            </DialogTitle>
            <DialogDescription>
              Beantworten Sie ein paar Fragen für ein maßgeschneidertes Angebot
            </DialogDescription>
          </DialogHeader>

          {/* Progress Bar */}
          <div className="mb-6">
            <div className="flex gap-2">
              {Array.from({ length: totalSteps }, (_, i) => (
                <div
                  key={i}
                  className={`h-2 flex-1 rounded-full transition-all ${
                    i < currentStep ? "bg-primary" : "bg-muted"
                  }`}
                />
              ))}
            </div>
          </div>

          {/* Step Content */}
          <div className="space-y-6">
            {currentStep === 1 && (
              <div className="space-y-4">
                <Label>Projektkategorie *</Label>
                <RadioGroup
                  value={detailedFormData.category}
                  onValueChange={(value) =>
                    setDetailedFormData({ ...detailedFormData, category: value })
                  }
                  className="grid gap-3 sm:grid-cols-2"
                >
                  {[
                    "Neue Website",
                    "Website Redesign",
                    "E-Commerce",
                    "Web-App",
                    "Landing Page",
                    "SEO-Optimierung",
                  ].map((cat) => (
                    <div key={cat} className="flex items-center space-x-2 rounded-lg border p-4">
                      <RadioGroupItem value={cat} id={cat} />
                      <Label htmlFor={cat} className="flex-1 cursor-pointer">
                        {cat}
                      </Label>
                    </div>
                  ))}
                </RadioGroup>
              </div>
            )}

            {currentStep === 2 && (
              <div className="space-y-4">
                <Label>Budget *</Label>
                <RadioGroup
                  value={detailedFormData.budget}
                  onValueChange={(value) =>
                    setDetailedFormData({ ...detailedFormData, budget: value })
                  }
                  className="grid gap-3"
                >
                  {[
                    "< 5.000 €",
                    "5.000 € - 10.000 €",
                    "10.000 € - 25.000 €",
                    "25.000 € - 50.000 €",
                    "> 50.000 €",
                  ].map((budget) => (
                    <div key={budget} className="flex items-center space-x-2 rounded-lg border p-4">
                      <RadioGroupItem value={budget} id={budget} />
                      <Label htmlFor={budget} className="flex-1 cursor-pointer">
                        {budget}
                      </Label>
                    </div>
                  ))}
                </RadioGroup>
              </div>
            )}

            {currentStep === 3 && (
              <div className="space-y-4">
                <Label>Zeitrahmen *</Label>
                <RadioGroup
                  value={detailedFormData.timeline}
                  onValueChange={(value) =>
                    setDetailedFormData({ ...detailedFormData, timeline: value })
                  }
                  className="grid gap-3"
                >
                  {[
                    "So schnell wie möglich",
                    "1-2 Monate",
                    "2-3 Monate",
                    "3-6 Monate",
                    "Flexibel",
                  ].map((timeline) => (
                    <div key={timeline} className="flex items-center space-x-2 rounded-lg border p-4">
                      <RadioGroupItem value={timeline} id={timeline} />
                      <Label htmlFor={timeline} className="flex-1 cursor-pointer">
                        {timeline}
                      </Label>
                    </div>
                  ))}
                </RadioGroup>
              </div>
            )}

            {currentStep === 4 && (
              <div className="space-y-4">
                <Label htmlFor="details">Projektdetails *</Label>
                <Textarea
                  id="details"
                  placeholder="Beschreiben Sie Ihr Projekt, Ihre Ziele und Anforderungen..."
                  value={detailedFormData.details}
                  onChange={(e) =>
                    setDetailedFormData({ ...detailedFormData, details: e.target.value })
                  }
                  className="min-h-[200px] resize-none"
                  required
                />
              </div>
            )}

            {currentStep === 5 && (
              <div className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="detail-name">Name *</Label>
                  <Input
                    id="detail-name"
                    placeholder="Ihr Name"
                    value={detailedFormData.name}
                    onChange={(e) =>
                      setDetailedFormData({ ...detailedFormData, name: e.target.value })
                    }
                    required
                    className="h-12"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="detail-email">E-Mail *</Label>
                  <Input
                    id="detail-email"
                    type="email"
                    placeholder="ihre@email.de"
                    value={detailedFormData.email}
                    onChange={(e) =>
                      setDetailedFormData({ ...detailedFormData, email: e.target.value })
                    }
                    required
                    className="h-12"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="detail-phone">Telefon</Label>
                  <Input
                    id="detail-phone"
                    type="tel"
                    placeholder="+49 123 456789"
                    value={detailedFormData.phone}
                    onChange={(e) =>
                      setDetailedFormData({ ...detailedFormData, phone: e.target.value })
                    }
                    className="h-12"
                  />
                </div>
              </div>
            )}
          </div>

          {/* Navigation Buttons */}
          <div className="flex gap-3">
            {currentStep > 1 && (
              <Button onClick={prevStep} variant="outline" className="flex-1">
                Zurück
              </Button>
            )}
            <Button onClick={nextStep} className="flex-1">
              {currentStep === totalSteps ? "Absenden" : "Weiter"}
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </DialogContent>
      </Dialog>

      <FAQ />
    </Layout>
  );
}
