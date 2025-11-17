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
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import FAQ from "@/components/FAQ";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [showDetailedForm, setShowDetailedForm] = useState(false);
  const [detailedStep, setDetailedStep] = useState(1);
  const [detailedFormData, setDetailedFormData] = useState({
    category: "",
    budget: "",
    timeline: "",
    details: "",
    name: "",
    email: "",
    phone: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    alert("Nachricht gesendet! Wir melden uns in Kürze.");
  };

  const handleDetailedSubmit = () => {
    console.log("Detailed form submitted:", detailedFormData);
    alert("Projektanfrage gesendet! Wir erstellen Ihr individuelles Angebot.");
    setShowDetailedForm(false);
    setDetailedStep(1);
  };

  const nextStep = () => {
    if (detailedStep < 5) setDetailedStep(detailedStep + 1);
  };

  const prevStep = () => {
    if (detailedStep > 1) setDetailedStep(detailedStep - 1);
  };

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-background pt-32 pb-20">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mx-auto max-w-3xl text-center"
          >
            <h1 className="mb-6 text-5xl font-bold tracking-tight sm:text-6xl md:text-7xl">
              Lassen Sie uns{" "}
              <span className="bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
                sprechen
              </span>
            </h1>
            <p className="text-xl text-muted-foreground">
              Bereit für Ihr nächstes Projekt? Kontaktieren Sie uns für ein kostenloses Erstgespräch.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Contact Section */}
      <section className="py-20">
        <div className="container">
          <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-2 lg:gap-16">
            {/* Left: Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="mb-8">
                <div className="mb-4 flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary text-lg font-bold text-primary-foreground">
                    1
                  </div>
                  <h2 className="text-2xl font-bold">Ihre Nachricht</h2>
                </div>
                <p className="text-muted-foreground">
                  Füllen Sie das Formular aus und wir melden uns innerhalb von 24 Stunden bei Ihnen.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="name" className="text-sm font-medium">
                    Name *
                  </Label>
                  <Input
                    id="name"
                    placeholder="Ihr Name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="border-b-2 border-l-0 border-r-0 border-t-0 border-border bg-transparent px-0 focus-visible:ring-0 focus-visible:ring-offset-0"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email" className="text-sm font-medium">
                    E-Mail *
                  </Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="ihre@email.de"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="border-b-2 border-l-0 border-r-0 border-t-0 border-border bg-transparent px-0 focus-visible:ring-0 focus-visible:ring-offset-0"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="phone" className="text-sm font-medium">
                    Telefon
                  </Label>
                  <Input
                    id="phone"
                    type="tel"
                    placeholder="+49 123 456789"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="border-b-2 border-l-0 border-r-0 border-t-0 border-border bg-transparent px-0 focus-visible:ring-0 focus-visible:ring-offset-0"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message" className="text-sm font-medium">
                    Nachricht *
                  </Label>
                  <Textarea
                    id="message"
                    placeholder="Beschreiben Sie Ihr Projekt..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="min-h-[150px] resize-none border-b-2 border-l-0 border-r-0 border-t-0 border-border bg-transparent px-0 focus-visible:ring-0 focus-visible:ring-offset-0"
                    required
                  />
                </div>

                <Button type="submit" size="lg" className="w-full sm:w-auto">
                  <Send className="mr-2 h-4 w-4" />
                  Nachricht senden
                </Button>
              </form>

              {/* Detailed Form CTA */}
              <div className="mt-12 border-t pt-8">
                <div className="mb-4 flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary text-lg font-bold text-primary-foreground">
                    2
                  </div>
                  <h3 className="text-xl font-bold">Detaillierte Projektanfrage</h3>
                </div>
                <p className="mb-4 text-muted-foreground">
                  Für konkrete Projekte empfehlen wir unseren strukturierten Fragebogen mit 5 Schritten.
                </p>
                <Button
                  onClick={() => setShowDetailedForm(true)}
                  variant="outline"
                  className="group"
                >
                  Projektanfrage starten
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
              </div>
            </motion.div>

            {/* Right: Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="space-y-8"
            >
              <div>
                <h3 className="mb-6 text-2xl font-bold">Kontaktinformationen</h3>
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                      <Mail className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <div className="font-semibold">E-Mail</div>
                      <a
                        href="mailto:kontakt@webdesignpro.de"
                        className="text-muted-foreground hover:text-primary"
                      >
                        kontakt@webdesignpro.de
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                      <Phone className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <div className="font-semibold">Telefon</div>
                      <a
                        href="tel:+49123456789"
                        className="text-muted-foreground hover:text-primary"
                      >
                        +49 123 456789
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                      <MapPin className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <div className="font-semibold">Standort</div>
                      <div className="text-muted-foreground">
                        Berlin, Deutschland
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="rounded-lg border bg-card p-6">
                <h4 className="mb-4 font-semibold">Öffnungszeiten</h4>
                <div className="space-y-2 text-sm">
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

              <div className="rounded-lg border bg-card p-6">
                <h4 className="mb-2 font-semibold">Schnelle Rückmeldung</h4>
                <p className="text-sm text-muted-foreground">
                  Wir antworten auf alle Anfragen innerhalb von 24 Stunden. Bei dringenden Anliegen rufen Sie uns bitte direkt an.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Detailed Form Dialog */}
      <Dialog open={showDetailedForm} onOpenChange={setShowDetailedForm}>
        <DialogContent className="max-h-[90vh] max-w-4xl overflow-y-auto">
          <DialogHeader>
            <DialogTitle className="text-2xl">Detaillierte Projektanfrage</DialogTitle>
          </DialogHeader>

          {/* Progress Bar */}
          <div className="mb-6">
            <div className="mb-2 flex justify-between text-sm font-medium">
              <span>Schritt {detailedStep} von 5</span>
              <span>{(detailedStep / 5) * 100}%</span>
            </div>
            <div className="h-2 overflow-hidden rounded-full bg-secondary">
              <div
                className="h-full bg-primary transition-all duration-300"
                style={{ width: `${(detailedStep / 5) * 100}%` }}
              />
            </div>
          </div>

          {/* Step Content */}
          <div className="min-h-[300px]">
            {detailedStep === 1 && (
              <div className="space-y-4">
                <h3 className="text-lg font-semibold">Projektkategorie</h3>
                <p className="text-sm text-muted-foreground">
                  Wählen Sie die Kategorie, die am besten zu Ihrem Projekt passt.
                </p>
                <RadioGroup
                  value={detailedFormData.category}
                  onValueChange={(value) =>
                    setDetailedFormData({ ...detailedFormData, category: value })
                  }
                  className="grid gap-4 sm:grid-cols-2"
                >
                  {[
                    "Neue Website",
                    "Website Redesign",
                    "E-Commerce Shop",
                    "Landing Page",
                    "Web-App",
                    "Sonstiges",
                  ].map((cat) => (
                    <div
                      key={cat}
                      className="flex items-center space-x-2 rounded-lg border p-4 hover:border-primary"
                    >
                      <RadioGroupItem value={cat} id={cat} />
                      <Label htmlFor={cat} className="flex-1 cursor-pointer">
                        {cat}
                      </Label>
                    </div>
                  ))}
                </RadioGroup>
              </div>
            )}

            {detailedStep === 2 && (
              <div className="space-y-4">
                <h3 className="text-lg font-semibold">Budget</h3>
                <p className="text-sm text-muted-foreground">
                  Wählen Sie Ihren ungefähren Budgetrahmen.
                </p>
                <RadioGroup
                  value={detailedFormData.budget}
                  onValueChange={(value) =>
                    setDetailedFormData({ ...detailedFormData, budget: value })
                  }
                  className="grid gap-4 sm:grid-cols-2"
                >
                  {[
                    "< 5.000 €",
                    "5.000 € - 10.000 €",
                    "10.000 € - 25.000 €",
                    "25.000 € - 50.000 €",
                    "> 50.000 €",
                    "Noch unklar",
                  ].map((budget) => (
                    <div
                      key={budget}
                      className="flex items-center space-x-2 rounded-lg border p-4 hover:border-primary"
                    >
                      <RadioGroupItem value={budget} id={budget} />
                      <Label htmlFor={budget} className="flex-1 cursor-pointer">
                        {budget}
                      </Label>
                    </div>
                  ))}
                </RadioGroup>
              </div>
            )}

            {detailedStep === 3 && (
              <div className="space-y-4">
                <h3 className="text-lg font-semibold">Zeitrahmen</h3>
                <p className="text-sm text-muted-foreground">
                  Wann soll Ihr Projekt fertiggestellt sein?
                </p>
                <RadioGroup
                  value={detailedFormData.timeline}
                  onValueChange={(value) =>
                    setDetailedFormData({ ...detailedFormData, timeline: value })
                  }
                  className="grid gap-4 sm:grid-cols-2"
                >
                  {[
                    "So schnell wie möglich",
                    "1-2 Monate",
                    "3-6 Monate",
                    "6+ Monate",
                    "Noch unklar",
                  ].map((timeline) => (
                    <div
                      key={timeline}
                      className="flex items-center space-x-2 rounded-lg border p-4 hover:border-primary"
                    >
                      <RadioGroupItem value={timeline} id={timeline} />
                      <Label htmlFor={timeline} className="flex-1 cursor-pointer">
                        {timeline}
                      </Label>
                    </div>
                  ))}
                </RadioGroup>
              </div>
            )}

            {detailedStep === 4 && (
              <div className="space-y-4">
                <h3 className="text-lg font-semibold">Projektdetails</h3>
                <p className="text-sm text-muted-foreground">
                  Beschreiben Sie Ihr Projekt so detailliert wie möglich.
                </p>
                <Textarea
                  placeholder="Erzählen Sie uns mehr über Ihr Projekt, Ihre Ziele und Ihre Zielgruppe..."
                  value={detailedFormData.details}
                  onChange={(e) =>
                    setDetailedFormData({ ...detailedFormData, details: e.target.value })
                  }
                  className="min-h-[200px]"
                />
              </div>
            )}

            {detailedStep === 5 && (
              <div className="space-y-4">
                <h3 className="text-lg font-semibold">Kontaktdaten</h3>
                <p className="text-sm text-muted-foreground">
                  Wie können wir Sie erreichen?
                </p>
                <div className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="detailed-name">Name *</Label>
                    <Input
                      id="detailed-name"
                      placeholder="Ihr Name"
                      value={detailedFormData.name}
                      onChange={(e) =>
                        setDetailedFormData({ ...detailedFormData, name: e.target.value })
                      }
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="detailed-email">E-Mail *</Label>
                    <Input
                      id="detailed-email"
                      type="email"
                      placeholder="ihre@email.de"
                      value={detailedFormData.email}
                      onChange={(e) =>
                        setDetailedFormData({ ...detailedFormData, email: e.target.value })
                      }
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="detailed-phone">Telefon</Label>
                    <Input
                      id="detailed-phone"
                      type="tel"
                      placeholder="+49 123 456789"
                      value={detailedFormData.phone}
                      onChange={(e) =>
                        setDetailedFormData({ ...detailedFormData, phone: e.target.value })
                      }
                    />
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Navigation Buttons */}
          <div className="flex justify-between gap-4 border-t pt-4">
            <Button
              variant="outline"
              onClick={prevStep}
              disabled={detailedStep === 1}
            >
              Zurück
            </Button>
            {detailedStep < 5 ? (
              <Button onClick={nextStep}>Weiter</Button>
            ) : (
              <Button onClick={handleDetailedSubmit}>
                <Check className="mr-2 h-4 w-4" />
                Anfrage absenden
              </Button>
            )}
          </div>
        </DialogContent>
      </Dialog>

      {/* FAQ Section */}
      <FAQ />
    </Layout>
  );
}
