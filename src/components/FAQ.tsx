
import { useState } from "react";
import { Plus, Minus } from "lucide-react";
import { cn } from "@/lib/utils";

const faqs = [
  {
    question: "Wie schnell können wir mit Timewise starten?",
    answer: "Die meisten Kunden sind innerhalb von 30 Minuten einsatzbereit. Unser intuitiver Einrichtungsassistent führt Sie durch den Prozess, und unser Support-Team steht Ihnen bei Bedarf zur Verfügung."
  },
  {
    question: "Ist Timewise konform mit Arbeitsgesetzen?",
    answer: "Ja, Timewise ist so konzipiert, dass es den Arbeitsgesetzen in verschiedenen Rechtsordnungen entspricht. Wir aktualisieren unser System regelmäßig, um Änderungen in den Vorschriften zu berücksichtigen und sicherzustellen, dass Ihr Unternehmen stets konform bleibt."
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
    answer: "Ja, Timewise bietet Integrationen mit beliebten HR-Plattformen, Lohnabrechnungssystemen und Kalenderanwendungen. Wir bieten auch eine API für benutzerdefinierte Integrationen mit den spezifischen Tools Ihrer Organisation."
  },
  {
    question: "Welche Art von Support bieten Sie an?",
    answer: "Alle Pläne umfassen E-Mail-Support mit Antwortzeiten basierend auf Ihrer Planstufe. Professional- und Enterprise-Pläne umfassen Prioritätssupport, während Enterprise-Kunden auch einen dedizierten Account Manager für persönliche Unterstützung erhalten."
  },
  {
    question: "Sind unsere Daten bei Timewise sicher?",
    answer: "Sicherheit hat für uns oberste Priorität. Wir verwenden branchenübliche Verschlüsselung, regelmäßige Sicherheitsaudits und folgen Best Practices für den Datenschutz. Timewise ist DSGVO-konform und wir teilen Ihre Daten niemals ohne Ihre ausdrückliche Erlaubnis mit Dritten."
  },
  {
    question: "Können wir Daten aus Timewise exportieren?",
    answer: "Ja, Sie können Daten in verschiedenen Formaten exportieren, darunter CSV, Excel und PDF. Dies erleichtert die Nutzung Ihrer Zeiterfassungs- und Urlaubsdaten in anderen Systemen oder für benutzerdefinierte Berichtsanforderungen."
  }
];

const FAQ = () => {
  const [openItems, setOpenItems] = useState<number[]>([0]);
  
  const toggleItem = (index: number) => {
    setOpenItems((current) =>
      current.includes(index)
        ? current.filter((i) => i !== index)
        : [...current, index]
    );
  };
  
  return (
    <section id="faq" className="py-24 px-6 md:px-12 lg:px-24 bg-timewise-50 relative">
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-timewise-200 to-transparent"></div>
      <div className="absolute bottom-0 right-0 w-[300px] h-[300px] bg-timewise-100 rounded-full blur-[100px] opacity-50 -z-10"></div>
      
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-3 py-1.5 mb-6 border border-timewise-200 rounded-full bg-white shadow-sm">
            <span className="text-sm font-medium text-timewise-700">Häufige Fragen</span>
          </div>
          <h2 className="heading-lg text-timewise-950 mb-6">
            Häufig gestellte Fragen
          </h2>
          <p className="text-timewise-700 max-w-2xl mx-auto">
            Finden Sie Antworten auf häufige Fragen zu Timewise. Wenn Sie weitere Informationen benötigen, ist unser Support-Team nur einen Klick entfernt.
          </p>
        </div>
        
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className={cn(
                "border rounded-xl overflow-hidden transition-all duration-300",
                openItems.includes(index)
                  ? "border-timewise-300 shadow-md bg-white"
                  : "border-gray-200 hover:border-timewise-200 bg-white/80"
              )}
            >
              <button
                className="w-full text-left px-6 py-4 focus:outline-none flex justify-between items-center"
                onClick={() => toggleItem(index)}
                aria-expanded={openItems.includes(index)}
              >
                <span className="font-semibold text-timewise-900">
                  {faq.question}
                </span>
                <span className="flex-shrink-0 ml-4">
                  {openItems.includes(index) ? (
                    <Minus className="h-5 w-5 text-timewise-600" />
                  ) : (
                    <Plus className="h-5 w-5 text-timewise-600" />
                  )}
                </span>
              </button>
              
              <div
                className={cn(
                  "overflow-hidden transition-all duration-300",
                  openItems.includes(index) ? "max-h-80" : "max-h-0"
                )}
              >
                <div className="px-6 pb-4 text-timewise-700">
                  {faq.answer}
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <p className="text-timewise-700 mb-6">Noch Fragen?</p>
          <a 
            href="#contact" 
            className="button-primary inline-block"
          >
            Support Kontaktieren
          </a>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
