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
      {/* Hero Section with Extended Grid */}
      <section className="relative overflow-visible pt-32 pb-12">
        {/* Animated Grid Background - Larger cells, subtle opacity */}
        <div className="absolute inset-0 -bottom-[150vh] bg-[linear-gradient(to_right,rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.04)_1px,transparent_1px)] bg-[size:100px_100px]" />
        
        {/* Floating Particles */}
        <div className="absolute inset-0 -bottom-[150vh] overflow-hidden pointer-events-none">
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-primary/30 rounded-full"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [0, -30, 0],
                x: [0, Math.random() * 20 - 10, 0],
                opacity: [0.3, 0.8, 0.3],
              }}
              transition={{
                duration: 3 + Math.random() * 4,
                repeat: Infinity,
                delay: Math.random() * 2,
                ease: "easeInOut",
              }}
            />
          ))}
        </div>
        <div className="container relative z-10">
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
            <h1 className="mb-8 font-serif text-8xl font-bold tracking-tight sm:text-9xl md:text-[10rem] lg:text-[12rem]">
              KONTAKT
            </h1>

            {/* Subheadline with social proof */}
            <p className="text-xl text-muted-foreground sm:text-2xl md:text-3xl max-w-4xl mx-auto">
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
                className="rounded-xl border-2 bg-card/80 backdrop-blur p-8 transition-all hover:border-foreground/30 hover:shadow-xl hover:-translate-y-1"
              >
                <div className="mb-6 flex justify-center text-foreground scale-150">{feature.icon}</div>
                <h3 className="mb-3 text-center text-xl font-bold">{feature.title}</h3>
                <p className="text-center text-base text-muted-foreground font-mono">{feature.description}</p>
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
                className="group relative w-full rounded-xl border-2 border-border bg-card/80 backdrop-blur p-8 text-center transition-all hover:border-foreground/30 hover:shadow-xl hover:-translate-y-1"
              >
                <div className="mb-6 flex justify-center">
                  {emailCopied ? (
                    <Check className="h-12 w-12 text-primary" />
                  ) : (
                    <Mail className="h-12 w-12 text-foreground transition-colors" />
                  )}
                </div>
                <span className="block font-mono text-2xl font-bold mb-3">
                  kontakt@webdesignpro.de
                </span>
                <div className="text-sm font-medium uppercase tracking-widest text-muted-foreground">
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
              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                <a
                  href="#calendly"
                  className="group rounded-xl border-2 border-border bg-card/80 backdrop-blur p-8 transition-all hover:border-foreground/30 hover:shadow-xl hover:-translate-y-1"
                >
                  <div className="mb-6 flex justify-center text-foreground">
                    <Calendar className="h-12 w-12" />
                  </div>
                  <h3 className="mb-3 text-center text-xl font-bold">Calendly</h3>
                  <p className="text-center text-base font-mono text-muted-foreground">30 Min. buchen</p>
                </a>
                <a
                  href="https://wa.me/49123456789"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group rounded-xl border-2 border-border bg-card/80 backdrop-blur p-8 transition-all hover:border-foreground/30 hover:shadow-xl hover:-translate-y-1"
                >
                  <div className="mb-6 flex justify-center text-foreground">
                    <MessageCircle className="h-12 w-12" />
                  </div>
                  <h3 className="mb-3 text-center text-xl font-bold">WhatsApp</h3>
                  <p className="text-center text-base font-mono text-muted-foreground">Direkte Nachricht</p>
                </a>
                <button
                  onClick={() => setShowDetailedForm(true)}
                  className="group rounded-xl border-2 border-border bg-card/80 backdrop-blur p-8 text-center transition-all hover:border-foreground/30 hover:shadow-xl hover:-translate-y-1"
                >
                  <div className="mb-6 flex justify-center text-foreground">
                    <Send className="h-12 w-12" />
                  </div>
                  <h3 className="mb-3 text-xl font-bold">Detaillierte Anfrage</h3>
                  <p className="text-base font-mono text-muted-foreground">5-Schritte Formular</p>
                </button>
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
              <form onSubmit={handleSubmit} className="relative rounded-xl border-2 border-border bg-card/80 backdrop-blur p-10 space-y-10 shadow-xl">
                
                <div className="space-y-4 relative">
                  <div className="flex items-center gap-3">
                    <div className="h-1.5 w-1.5 rounded-full bg-foreground/40" />
                    <Label htmlFor="name" className="text-lg font-semibold text-foreground tracking-tight">
                      Ihr Name
                    </Label>
                  </div>
                  <Input
                    id="name"
                    placeholder="Max Mustermann"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="border-2 border-border bg-background/50 px-6 py-5 text-lg rounded-xl focus-visible:border-foreground focus-visible:bg-background/80 transition-all focus-visible:ring-0 font-medium"
                    required
                  />
                </div>

                <div className="space-y-4 relative">
                  <div className="flex items-center gap-3">
                    <div className="h-1.5 w-1.5 rounded-full bg-foreground/40" />
                    <Label htmlFor="email" className="text-lg font-semibold text-foreground tracking-tight">
                      E-Mail Adresse
                    </Label>
                  </div>
                  <Input
                    id="email"
                    type="email"
                    placeholder="max@beispiel.de"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="border-2 border-border bg-background/50 px-6 py-5 text-lg rounded-xl focus-visible:border-foreground focus-visible:bg-background/80 transition-all focus-visible:ring-0 font-medium"
                    required
                  />
                </div>

                <div className="space-y-4 relative">
                  <div className="flex items-center gap-3">
                    <div className="h-1.5 w-1.5 rounded-full bg-foreground/40" />
                    <Label htmlFor="message" className="text-lg font-semibold text-foreground tracking-tight">
                      Ihre Nachricht
                    </Label>
                  </div>
                  <Textarea
                    id="message"
                    placeholder="Erzählen Sie uns von Ihrem Projekt..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="min-h-[180px] resize-none border-2 border-border bg-background/50 px-6 py-5 text-lg rounded-xl focus-visible:border-foreground focus-visible:bg-background/80 transition-all focus-visible:ring-0 font-medium"
                    required
                  />
                </div>

                <div className="flex items-start gap-3 p-4 rounded-lg bg-muted/30">
                  <input type="checkbox" id="privacy" className="mt-1 accent-primary" required />
                  <label htmlFor="privacy" className="text-sm text-muted-foreground leading-relaxed">
                    Ich habe die{" "}
                    <a href="/privacy" className="text-primary hover:underline font-medium">
                      Datenschutzerklärung
                    </a>{" "}
                    gelesen und stimme der Verarbeitung meiner Daten zu.
                  </label>
                </div>

                <Button type="submit" size="lg" className="w-full bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg hover:shadow-xl transition-all">
                  <Send className="mr-2 h-4 w-4" />
                  Nachricht absenden
                </Button>
              </form>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Detailed Form Dialog */}
      <Dialog open={showDetailedForm} onOpenChange={setShowDetailedForm}>
        <DialogContent className="max-h-[90vh] max-w-4xl overflow-y-auto">
          <div>
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
              <div>
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
              </div>
            )}

            {detailedStep === 3 && (
              <div>
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
          </div>
        </DialogContent>
      </Dialog>


    </Layout>
  );
}
