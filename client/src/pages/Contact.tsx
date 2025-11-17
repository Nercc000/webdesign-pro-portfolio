import { useState } from "react";
import { motion } from "framer-motion";
import { Send, Mail, Phone, MapPin, Calendar, MessageCircle, Copy, Check } from "lucide-react";
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
    message: "",
  });

  const [emailCopied, setEmailCopied] = useState(false);
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

  const copyEmail = () => {
    navigator.clipboard.writeText("kontakt@webdesignpro.de");
    setEmailCopied(true);
    setTimeout(() => setEmailCopied(false), 2000);
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
      <section className="relative overflow-hidden bg-background pt-32 pb-12">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mx-auto max-w-5xl text-center"
          >
            {/* Eyebrow */}
            <div className="mb-8 flex items-center justify-center gap-4">
              <div className="h-px w-16 bg-border" />
              <span className="text-xs font-medium uppercase tracking-widest text-muted-foreground">
                Let's Talk
              </span>
              <div className="h-px w-16 bg-border" />
            </div>

            {/* Massive Headline */}
            <h1 className="mb-6 font-serif text-7xl font-bold tracking-tight sm:text-8xl md:text-9xl">
              KONTAKT
            </h1>

            {/* Subheadline with social proof */}
            <p className="text-lg text-muted-foreground sm:text-xl">
              Über 50+ zufriedene Kunden. Antwort innerhalb von 24 Stunden garantiert.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Feature Cards */}
      <section className="py-12">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mx-auto grid max-w-6xl gap-6 sm:grid-cols-2 lg:grid-cols-4"
          >
            {[
              {
                icon: <Send className="h-5 w-5" />,
                title: "Schnelle Lieferung",
                description: "4-6 Wochen",
              },
              {
                icon: <Check className="h-5 w-5" />,
                title: "100% Garantie",
                description: "Geld zurück",
              },
              {
                icon: <Phone className="h-5 w-5" />,
                title: "24/7 Support",
                description: "Immer erreichbar",
              },
              {
                icon: <MapPin className="h-5 w-5" />,
                title: "Performance",
                description: "Optimiert",
              },
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                className="rounded-lg border bg-card p-6 transition-colors hover:border-primary/50"
              >
                <div className="mb-3 text-primary">{feature.icon}</div>
                <h3 className="mb-1 font-semibold">{feature.title}</h3>
                <p className="text-sm text-muted-foreground font-mono">{feature.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Main Contact Section */}
      <section className="py-12">
        <div className="container">
          <div className="mx-auto max-w-3xl space-y-12">
            {/* Direct Email */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <div className="mb-4">
                <span className="text-xs font-medium uppercase tracking-widest text-muted-foreground">
                  Direkte E-Mail
                </span>
              </div>
              <button
                onClick={copyEmail}
                className="group relative w-full rounded-lg border-2 border-primary/20 bg-card p-6 text-left transition-all hover:border-primary/50 hover:bg-card/80"
              >
                <div className="flex items-center justify-between">
                  <span className="font-mono text-2xl font-semibold">
                    kontakt@webdesignpro.de
                  </span>
                  <div className="flex items-center gap-2">
                    {emailCopied ? (
                      <Check className="h-5 w-5 text-primary" />
                    ) : (
                      <Copy className="h-5 w-5 text-muted-foreground transition-colors group-hover:text-primary" />
                    )}
                  </div>
                </div>
                <div className="mt-2 text-xs font-medium uppercase tracking-widest text-muted-foreground">
                  {emailCopied ? "Kopiert!" : "Klicken zum Kopieren"}
                </div>
              </button>
            </motion.div>

            {/* Other Ways */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              <div className="mb-4">
                <span className="text-xs font-medium uppercase tracking-widest text-muted-foreground">
                  Weitere Möglichkeiten
                </span>
              </div>
              <div className="grid gap-4 sm:grid-cols-2">
                <a
                  href="#calendly"
                  className="group rounded-lg border-2 border-primary/20 bg-card p-6 transition-all hover:border-primary/50 hover:bg-card/80"
                >
                  <div className="mb-3 text-primary">
                    <Calendar className="h-6 w-6" />
                  </div>
                  <h3 className="mb-1 font-semibold">Calendly</h3>
                  <p className="text-sm font-mono text-muted-foreground">30 Min. buchen</p>
                </a>
                <a
                  href="https://wa.me/49123456789"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group rounded-lg border-2 border-primary/20 bg-card p-6 transition-all hover:border-primary/50 hover:bg-card/80"
                >
                  <div className="mb-3 text-primary">
                    <MessageCircle className="h-6 w-6" />
                  </div>
                  <h3 className="mb-1 font-semibold">WhatsApp</h3>
                  <p className="text-sm font-mono text-muted-foreground">Direkte Nachricht</p>
                </a>
              </div>
            </motion.div>

            {/* Quick Message Form */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <div className="mb-4">
                <span className="text-xs font-medium uppercase tracking-widest text-muted-foreground">
                  Oder senden Sie mir eine kurze Nachricht
                </span>
              </div>
              <form onSubmit={handleSubmit} className="rounded-lg border-2 border-border bg-card p-8 space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="name" className="text-xs font-medium uppercase tracking-widest text-primary">
                    Name *
                  </Label>
                  <Input
                    id="name"
                    placeholder="Ihr Name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="border-border bg-background font-mono"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email" className="text-xs font-medium uppercase tracking-widest text-primary">
                    E-Mail *
                  </Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="ihre@email.de"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="border-border bg-background font-mono"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message" className="text-xs font-medium uppercase tracking-widest text-primary">
                    Nachricht *
                  </Label>
                  <Textarea
                    id="message"
                    placeholder="Ihre Nachricht..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="min-h-[150px] resize-none border-border bg-background font-mono"
                    required
                  />
                </div>

                <div className="flex items-start gap-2">
                  <input type="checkbox" id="privacy" className="mt-1" required />
                  <label htmlFor="privacy" className="text-sm text-muted-foreground">
                    Ich habe die{" "}
                    <a href="/privacy" className="text-primary hover:underline">
                      Datenschutzerklärung
                    </a>{" "}
                    gelesen und akzeptiere sie *
                  </label>
                </div>

                <Button type="submit" size="lg" className="w-full">
                  <Send className="mr-2 h-4 w-4" />
                  Senden
                </Button>
              </form>
            </motion.div>

            {/* Detailed Form CTA */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.7 }}
              className="text-center"
            >
              <p className="mb-4 text-muted-foreground">
                Für detaillierte Projektanfragen nutzen Sie unseren strukturierten Fragebogen
              </p>
              <Button
                onClick={() => setShowDetailedForm(true)}
                variant="outline"
                size="lg"
              >
                Detaillierte Projektanfrage starten
              </Button>
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
