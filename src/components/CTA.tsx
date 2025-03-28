
import { ArrowRight, Clock, Calendar, Shield, Users } from "lucide-react";

const CTA = () => {
  return (
    <section id="contact" className="py-24 px-6 md:px-12 lg:px-24 bg-white relative">
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-timewise-200 to-transparent"></div>
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-timewise-50 rounded-full blur-[150px] opacity-70 -z-10"></div>
      
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="heading-lg text-timewise-950 mb-6">
              Bereit, die Zeiterfassung und Urlaubsverwaltung zu vereinfachen?
            </h2>
            <p className="text-timewise-700 mb-8">
              Schließen Sie sich Tausenden zufriedener Unternehmen an, die Timewise für ihre Zeiterfassungs- und Urlaubsverwaltungsbedürfnisse vertrauen. Starten Sie Ihre 14-tägige kostenlose Testphase noch heute.
            </p>
            
            <div className="space-y-6 mb-12">
              <div className="flex items-start">
                <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-timewise-100 flex items-center justify-center mr-4 mt-1">
                  <Clock className="h-5 w-5 text-timewise-600" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-timewise-900 mb-1">Schnelle Einrichtung, sofortiger Nutzen</h3>
                  <p className="text-timewise-700 text-sm">In Minuten einsatzbereit, nicht Tagen oder Wochen</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-timewise-100 flex items-center justify-center mr-4 mt-1">
                  <Calendar className="h-5 w-5 text-timewise-600" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-timewise-900 mb-1">Problemlose Urlaubsplanung</h3>
                  <p className="text-timewise-700 text-sm">Optimieren Sie Urlaubsanträge und Genehmigungen</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-timewise-100 flex items-center justify-center mr-4 mt-1">
                  <Shield className="h-5 w-5 text-timewise-600" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-timewise-900 mb-1">Immer konform</h3>
                  <p className="text-timewise-700 text-sm">Bleiben Sie auf der richtigen Seite der Arbeitsgesetze und Vorschriften</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-timewise-100 flex items-center justify-center mr-4 mt-1">
                  <Users className="h-5 w-5 text-timewise-600" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-timewise-900 mb-1">Geliebt von Teams</h3>
                  <p className="text-timewise-700 text-sm">Intuitive Oberfläche, die Mitarbeiter tatsächlich gerne nutzen</p>
                </div>
              </div>
            </div>
            
            <a 
              href="https://app.mytimewise.de/register" 
              className="button-primary inline-flex items-center"
            >
              Kostenlos Testen <ArrowRight className="ml-2 h-4 w-4" />
            </a>
            <p className="text-sm text-timewise-600 mt-4">
              Keine Kreditkarte erforderlich. 14-tägige kostenlose Testphase.
            </p>
          </div>
          
          <div className="bg-white rounded-3xl shadow-xl border border-timewise-100 overflow-hidden">
            <div className="p-8">
              <h3 className="text-2xl font-semibold text-timewise-900 mb-6">Kontaktieren Sie uns</h3>
              
              <form className="space-y-6">
                <div className="space-y-1">
                  <label htmlFor="name" className="text-sm font-medium text-timewise-900">
                    Vollständiger Name
                  </label>
                  <input 
                    type="text" 
                    id="name" 
                    placeholder="Geben Sie Ihren Namen ein"
                    className="w-full px-4 py-3 rounded-lg border border-timewise-200 focus:border-timewise-500 focus:ring-2 focus:ring-timewise-500/20 transition-colors"
                  />
                </div>
                
                <div className="space-y-1">
                  <label htmlFor="email" className="text-sm font-medium text-timewise-900">
                    Arbeits-E-Mail
                  </label>
                  <input 
                    type="email" 
                    id="email" 
                    placeholder="name@unternehmen.de"
                    className="w-full px-4 py-3 rounded-lg border border-timewise-200 focus:border-timewise-500 focus:ring-2 focus:ring-timewise-500/20 transition-colors"
                  />
                </div>
                
                <div className="space-y-1">
                  <label htmlFor="company" className="text-sm font-medium text-timewise-900">
                    Unternehmensname
                  </label>
                  <input 
                    type="text" 
                    id="company" 
                    placeholder="Ihr Unternehmen"
                    className="w-full px-4 py-3 rounded-lg border border-timewise-200 focus:border-timewise-500 focus:ring-2 focus:ring-timewise-500/20 transition-colors"
                  />
                </div>
                
                <div className="space-y-1">
                  <label htmlFor="employees" className="text-sm font-medium text-timewise-900">
                    Anzahl der Mitarbeiter
                  </label>
                  <select 
                    id="employees"
                    className="w-full px-4 py-3 rounded-lg border border-timewise-200 focus:border-timewise-500 focus:ring-2 focus:ring-timewise-500/20 transition-colors"
                  >
                    <option value="">Teamgröße auswählen</option>
                    <option value="1-10">1-10</option>
                    <option value="11-50">11-50</option>
                    <option value="51-200">51-200</option>
                    <option value="201-500">201-500</option>
                    <option value="501+">501+</option>
                  </select>
                </div>
                
                <div className="space-y-1">
                  <label htmlFor="message" className="text-sm font-medium text-timewise-900">
                    Nachricht (Optional)
                  </label>
                  <textarea 
                    id="message" 
                    rows={3}
                    placeholder="Wie können wir Ihnen helfen?"
                    className="w-full px-4 py-3 rounded-lg border border-timewise-200 focus:border-timewise-500 focus:ring-2 focus:ring-timewise-500/20 transition-colors"
                  ></textarea>
                </div>
                
                <button 
                  type="submit"
                  className="w-full button-primary"
                >
                  Jetzt Starten
                </button>
              </form>
              
              <p className="text-xs text-timewise-600 mt-6 text-center">
                Durch Absenden dieses Formulars stimmen Sie unseren <a href="/rechtliches#nutzungsbedingungen" className="underline hover:text-timewise-900">Nutzungsbedingungen</a> und <a href="/rechtliches#datenschutz" className="underline hover:text-timewise-900">Datenschutzrichtlinien</a> zu.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
