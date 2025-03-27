
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-timewise-950 text-white">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div className="md:col-span-1">
            <div className="flex items-center space-x-2 mb-6">
              <div className="h-8 w-8 rounded-md bg-white flex items-center justify-center">
                <div className="relative w-5 h-5">
                  <div className="absolute top-0 left-0 w-3 h-3 bg-black rounded-full"></div>
                  <div className="absolute bottom-0 right-0 w-3 h-3 bg-black rounded-full"></div>
                </div>
              </div>
              <span className="font-display font-bold text-xl text-white">Timewise</span>
            </div>
            
            <p className="text-timewise-300 mb-6 max-w-md">
              Timewise bietet elegante Lösungen für Zeiterfassung und Urlaubsverwaltung, entwickelt mit Fokus auf Einfachheit und Compliance.
            </p>
          </div>
          
          <div>
            <h3 className="font-semibold text-white mb-4 text-lg">Produkt</h3>
            <ul className="space-y-3">
              <li><a href="#features" className="text-timewise-300 hover:text-white transition-colors">Funktionen</a></li>
              <li><a href="#pricing" className="text-timewise-300 hover:text-white transition-colors">Preise</a></li>
              <li><a href="#testimonials" className="text-timewise-300 hover:text-white transition-colors">Referenzen</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold text-white mb-4 text-lg">Unternehmen</h3>
            <ul className="space-y-3">
              <li><a href="#contact" className="text-timewise-300 hover:text-white transition-colors">Kontakt</a></li>
              <li><Link to="/rechtliches#datenschutz" className="text-timewise-300 hover:text-white transition-colors">Datenschutzrichtlinie</Link></li>
              <li><Link to="/rechtliches#nutzungsbedingungen" className="text-timewise-300 hover:text-white transition-colors">Nutzungsbedingungen</Link></li>
              <li><Link to="/rechtliches#impressum" className="text-timewise-300 hover:text-white transition-colors">Impressum</Link></li>
            </ul>
          </div>
        </div>
        
        <div className="mt-16 pt-8 border-t border-timewise-800 flex flex-col md:flex-row justify-between items-center">
          <div className="text-timewise-400 text-sm mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} Timewise. Alle Rechte vorbehalten.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
