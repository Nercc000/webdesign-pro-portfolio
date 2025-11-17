import { Badge } from "@/components/ui/badge";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { useSectionReveal } from "@/hooks/useSectionReveal";

export default function FAQ() {
  const faqReveal = useSectionReveal();

  return (
    <div className="relative">
      {/* Top Gradient Overlay */}
      <div className="absolute top-0 left-0 right-0 h-48 bg-gradient-to-b from-background to-transparent pointer-events-none z-20" />
      
      <section 
        ref={faqReveal.ref as React.RefObject<HTMLElement>}
        className={`relative py-24 md:py-32 overflow-hidden section-reveal ${faqReveal.isVisible ? 'is-visible' : ''}`}
      >
        {/* Wave Pattern Background */}
        <div className="absolute inset-0 bg-wave-pattern" />
        
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5" />
        
        <div className="container relative z-10">
          <div className="mx-auto max-w-3xl">
            <div className="mb-16 text-center">
              <Badge className="mb-4">FAQ</Badge>
              <h2 className="mb-4 text-3xl font-bold md:text-4xl lg:text-5xl">
                Häufig gestellte <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Fragen</span>
              </h2>
              <p className="text-lg text-muted-foreground">
                Antworten auf die wichtigsten Fragen rund um Ihre neue Website
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
    </div>
  );
}
