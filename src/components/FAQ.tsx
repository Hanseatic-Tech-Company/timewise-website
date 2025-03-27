
import { useState } from "react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { HelpCircle } from "lucide-react";

const faqs = [
  {
    question: "Wie schnell können wir mit Timewise starten?",
    answer: "Die meisten Kunden sind innerhalb von 30 Minuten einsatzbereit. Unser intuitiver Einrichtungsassistent führt dich durch den Prozess, und unser Support-Team steht dir bei Bedarf zur Verfügung."
  },
  {
    question: "Ist Timewise konform mit Arbeitsgesetzen?",
    answer: "Ja, Timewise ist so konzipiert, dass es den Arbeitsgesetzen in verschiedenen Rechtsordnungen entspricht. Wir aktualisieren unser System regelmäßig, um Änderungen in den Vorschriften zu berücksichtigen und sicherzustellen, dass dein Unternehmen stets konform bleibt."
  },
  {
    question: "Können Mitarbeiter die Zeit auf mobilen Geräten erfassen?",
    answer: "Absolut! Timewise funktioniert auf jedem Gerät mit einem Webbrowser. Wir bieten auch dedizierte mobile Apps für iOS und Android, die eine nahtlose Erfahrung für Mitarbeiter unterwegs bieten."
  },
  {
    question: "Wie funktioniert der Urlaubsgenehmigungsprozess?",
    answer: "Mitarbeiter reichen Urlaubsanträge über unsere Plattform ein, die automatisch auf Konflikte und Compliance-Probleme prüft. Manager erhalten Benachrichtigungen und können Anfragen mit einem einzigen Klick genehmigen oder ablehnen. Das System aktualisiert dann automatisch Kalender und Salden."
  },
  {
    question: "Kann Timewise mit unserer bestehenden HR-Software integriert werden?",
    answer: "Ja, Timewise bietet Integrationen mit beliebten HR-Plattformen, Lohnabrechnungssystemen und Kalenderanwendungen. Wir bieten auch eine API für benutzerdefinierte Integrationen mit den spezifischen Tools deiner Organisation."
  },
  {
    question: "Welche Art von Support bietet ihr an?",
    answer: "Alle Pläne umfassen E-Mail-Support mit Antwortzeiten basierend auf deinem Plan. Professional- und Enterprise-Pläne beinhalten Prioritätssupport, während Enterprise-Kunden auch einen persönlichen Account Manager für individuelle Unterstützung erhalten."
  },
  {
    question: "Sind unsere Daten bei Timewise sicher?",
    answer: "Sicherheit hat für uns oberste Priorität. Wir verwenden branchenübliche Verschlüsselung, regelmäßige Sicherheitsaudits und folgen Best Practices für den Datenschutz. Timewise ist DSGVO-konform und wir teilen deine Daten niemals ohne deine ausdrückliche Erlaubnis mit Dritten."
  },
  {
    question: "Können wir Daten aus Timewise exportieren?",
    answer: "Ja, du kannst Daten in verschiedenen Formaten exportieren, darunter CSV, Excel und PDF. Dies erleichtert die Nutzung deiner Zeiterfassungs- und Urlaubsdaten in anderen Systemen oder für spezielle Berichtsanforderungen."
  }
];

const FAQ = () => {
  const [openItems, setOpenItems] = useState<string[]>([]);

  const handleAccordionChange = (value: string) => {
    setOpenItems(prev => 
      prev.includes(value) 
        ? prev.filter(item => item !== value)
        : [...prev, value]
    );
  };

  return (
    <section id="faq" className="py-24 px-6 md:px-12 lg:px-24 bg-timewise-50 relative">
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-timewise-200 to-transparent"></div>
      <div className="absolute bottom-0 right-0 w-[300px] h-[300px] bg-timewise-100 rounded-full blur-[100px] opacity-50 -z-10"></div>
      
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-3 py-1.5 mb-6 border border-timewise-200 rounded-full bg-white shadow-sm">
            <HelpCircle className="w-4 h-4 mr-2 text-timewise-700" />
            <span className="text-sm font-medium text-timewise-700">Häufige Fragen</span>
          </div>
          <h2 className="heading-lg text-timewise-950 mb-6">
            Häufig gestellte Fragen
          </h2>
          <p className="text-timewise-700 max-w-2xl mx-auto">
            Finde Antworten auf häufige Fragen zu Timewise. Wenn du weitere Infos brauchst, ist unser Support-Team nur einen Klick entfernt.
          </p>
        </div>
        
        <div className="space-y-4">
          <Accordion 
            type="multiple" 
            value={openItems}
            onValueChange={setOpenItems}
            className="w-full"
          >
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="border rounded-xl overflow-hidden bg-white/80 hover:border-timewise-200 data-[state=open]:border-timewise-300 data-[state=open]:shadow-md data-[state=open]:bg-white mb-4"
              >
                <AccordionTrigger 
                  onClick={() => handleAccordionChange(`item-${index}`)}
                  className="px-6 py-4 font-semibold text-timewise-900 hover:no-underline"
                >
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent 
                  className="px-6 pb-4 text-timewise-700 transition-all ease-in-out duration-300"
                >
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
        
        <div className="mt-16 text-center">
          <p className="text-timewise-700 mb-6">Noch Fragen?</p>
          <Button 
            variant="default" 
            size="lg" 
            className="bg-timewise-600 hover:bg-timewise-700 text-white"
            asChild
          >
            <a href="#contact">Support kontaktieren</a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
