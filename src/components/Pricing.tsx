
import { CheckCircle2, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { useState } from "react";

const pricingPlans = [
  {
    id: "free",
    name: "Kostenlos",
    description: "Perfekt für kleine Teams, die gerade erst anfangen",
    price: 0,
    features: [
      "Bis zu 3 Benutzer",
      "Zeiterfassung",
      "Grundlegende Urlaubsverwaltung",
      "Standardberichte",
      "E-Mail-Support"
    ],
    notIncluded: [
      "Erweiterte Compliance-Funktionen",
      "Benutzerdefinierte Genehmigungsabläufe",
      "API-Zugriff",
      "Benutzerdefinierte Berichte",
      "Dedizierter Support"
    ],
    mostPopular: false,
    buttonVariant: "secondary" as const
  },
  {
    id: "unlimited",
    name: "Unbegrenzt",
    description: "Alles, was Ihr wachsendes Team braucht",
    price: 14.99,
    features: [
      "Unbegrenzte Benutzer",
      "Erweiterte Zeiterfassung",
      "Vollständige Urlaubsverwaltung",
      "Compliance-Funktionen",
      "Benutzerdefinierte Genehmigungsabläufe", 
      "Benutzerdefinierte Berichte",
      "API-Zugriff",
      "Prioritäts-E-Mail-Support",
      "Dedizierter Support"
    ],
    notIncluded: [],
    mostPopular: true,
    buttonVariant: "primary" as const
  }
];

const Pricing = () => {
  return (
    <section id="pricing" className="py-24 px-6 md:px-12 lg:px-24 bg-white relative">
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-timewise-200 to-transparent"></div>
      
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-3 py-1.5 mb-6 border border-timewise-200 rounded-full bg-white shadow-sm">
            <span className="text-sm font-medium text-timewise-700">Einfache Preisgestaltung</span>
          </div>
          <h2 className="heading-lg text-timewise-950 mb-6">
            Transparente Preise für alle
          </h2>
          <p className="text-timewise-700 max-w-2xl mx-auto">
            Kostenlos für kleine Teams, erschwinglicher Festpreis für alle anderen. Keine versteckten Gebühren.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {pricingPlans.map((plan) => (
            <div 
              key={plan.id}
              className={cn(
                "rounded-3xl border transition-all duration-300 relative overflow-hidden",
                plan.mostPopular 
                  ? "border-timewise-500 shadow-xl" 
                  : "border-gray-200 shadow-md hover:border-timewise-300 hover:shadow-lg"
              )}
            >
              {plan.mostPopular && (
                <div className="absolute top-0 right-0 bg-timewise-500 text-white text-xs font-bold py-1.5 px-4 rounded-bl-lg">
                  Am beliebtesten
                </div>
              )}
              
              <div className="p-8">
                <h3 className="text-xl font-semibold text-timewise-900 mb-2">{plan.name}</h3>
                <p className="text-timewise-600 text-sm mb-6">{plan.description}</p>
                
                <div className="mb-8">
                  <div className="flex items-baseline">
                    <span className="text-4xl font-bold text-timewise-900">
                      {plan.price > 0 ? `${plan.price}€` : "0€"}
                    </span>
                    <span className="text-timewise-600 ml-2">
                      {plan.price > 0 ? "pro Monat" : "für immer"}
                    </span>
                  </div>
                </div>
                
                <a 
                  href="#contact" 
                  className={cn(
                    "w-full text-center block py-3 px-6 rounded-lg font-medium transition-all duration-300 mb-8",
                    plan.buttonVariant === "primary" 
                      ? "button-primary" 
                      : "button-secondary"
                  )}
                >
                  {plan.price === 0 ? "Kostenlos Starten" : "Kostenlos Testen"}
                </a>
                
                <div className="space-y-4">
                  <p className="text-sm font-medium text-timewise-900">Enthält:</p>
                  
                  <div className="space-y-3">
                    {plan.features.map((feature, idx) => (
                      <div key={idx} className="flex items-start">
                        <CheckCircle2 className="h-5 w-5 text-timewise-500 mr-3 flex-shrink-0 mt-0.5" />
                        <span className="text-sm text-timewise-700">{feature}</span>
                      </div>
                    ))}
                  </div>
                  
                  {plan.notIncluded.length > 0 && (
                    <>
                      <p className="text-sm font-medium text-timewise-900 pt-4">Nicht enthalten:</p>
                      <div className="space-y-3">
                        {plan.notIncluded.map((feature, idx) => (
                          <div key={idx} className="flex items-start">
                            <X className="h-5 w-5 text-timewise-300 mr-3 flex-shrink-0 mt-0.5" />
                            <span className="text-sm text-timewise-500">{feature}</span>
                          </div>
                        ))}
                      </div>
                    </>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <p className="text-timewise-600 mb-4">Haben Sie Fragen zu unseren Preisen?</p>
          <a href="#contact" className="text-timewise-700 font-medium hover:text-timewise-900 underline">
            Kontaktieren Sie unser Team für weitere Informationen
          </a>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
