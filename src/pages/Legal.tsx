
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

const Legal = () => {
  return (
    <div className="bg-white min-h-screen">
      <div className="max-w-4xl mx-auto px-6 py-20">
        <div className="mb-12">
          <Link 
            to="/" 
            className="inline-flex items-center text-timewise-600 hover:text-timewise-800 transition-colors mb-6"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Zurück zur Startseite
          </Link>
          <h1 className="text-3xl md:text-4xl font-bold text-timewise-900 mb-2">Rechtliche Informationen</h1>
          <div className="h-1 w-20 bg-timewise-500 rounded-full mb-8"></div>
        </div>

        <div className="space-y-16">
          <section id="datenschutz">
            <h2 className="text-2xl font-semibold text-timewise-900 mb-6">Datenschutzrichtlinie</h2>
            <div className="prose prose-green max-w-none text-timewise-700">
              <h3 className="text-xl text-timewise-800 mt-8 mb-4">1. Allgemeine Informationen</h3>
              <p>
                Wir nehmen den Schutz Ihrer persönlichen Daten sehr ernst. Diese Datenschutzrichtlinie informiert Sie darüber, wie wir mit Ihren Daten umgehen und welche Rechte Sie haben.
              </p>
              
              <h3 className="text-xl text-timewise-800 mt-8 mb-4">2. Datenerhebung und -verwendung</h3>
              <p>
                Bei der Nutzung unserer Zeiterfassungs- und Urlaubsverwaltungssoftware werden verschiedene personenbezogene Daten erhoben. Hierzu gehören insbesondere:
              </p>
              <ul className="list-disc pl-6 mt-4 mb-4">
                <li>Name und Kontaktinformationen</li>
                <li>Arbeitszeitdaten</li>
                <li>Urlaubsinformationen</li>
                <li>Nutzungsdaten unserer Software</li>
              </ul>
              
              <h3 className="text-xl text-timewise-800 mt-8 mb-4">3. Datenspeicherung und -sicherheit</h3>
              <p>
                Alle erhobenen Daten werden auf sicheren Servern innerhalb der Europäischen Union gespeichert. Wir setzen moderne Verschlüsselungstechnologien ein, um Ihre Daten zu schützen.
              </p>
              
              <h3 className="text-xl text-timewise-800 mt-8 mb-4">4. Ihre Rechte</h3>
              <p>
                Sie haben jederzeit das Recht auf Auskunft, Berichtigung, Löschung und Einschränkung der Verarbeitung Ihrer Daten sowie das Recht auf Datenübertragbarkeit.
              </p>
            </div>
          </section>
          
          <section id="nutzungsbedingungen">
            <h2 className="text-2xl font-semibold text-timewise-900 mb-6">Nutzungsbedingungen</h2>
            <div className="prose prose-green max-w-none text-timewise-700">
              <h3 className="text-xl text-timewise-800 mt-8 mb-4">1. Geltungsbereich</h3>
              <p>
                Diese Nutzungsbedingungen regeln die Nutzung der Timewise-Software zur Zeiterfassung und Urlaubsverwaltung.
              </p>
              
              <h3 className="text-xl text-timewise-800 mt-8 mb-4">2. Lizenzgewährung</h3>
              <p>
                Mit Abschluss eines Abonnements erhält der Kunde ein zeitlich begrenztes, nicht ausschließliches Recht zur Nutzung der Software im vereinbarten Umfang.
              </p>
              
              <h3 className="text-xl text-timewise-800 mt-8 mb-4">3. Pflichten des Nutzers</h3>
              <p>
                Der Nutzer ist verpflichtet, seine Zugangsdaten geheim zu halten und die Software nur im Rahmen der vereinbarten Zwecke zu nutzen.
              </p>
              
              <h3 className="text-xl text-timewise-800 mt-8 mb-4">4. Haftung</h3>
              <p>
                Unsere Haftung ist auf Vorsatz und grobe Fahrlässigkeit beschränkt, soweit gesetzlich zulässig.
              </p>
            </div>
          </section>
          
          <section id="impressum">
            <h2 className="text-2xl font-semibold text-timewise-900 mb-6">Impressum</h2>
            <div className="prose prose-green max-w-none text-timewise-700">
              <p className="font-medium text-timewise-800">Timewise GmbH</p>
              <p>Musterstraße 123<br />10115 Berlin<br />Deutschland</p>
              
              <p className="mt-4">
                <strong>Vertreten durch:</strong><br />
                Max Mustermann, Geschäftsführer
              </p>
              
              <p className="mt-4">
                <strong>Kontakt:</strong><br />
                Telefon: +49 30 123456789<br />
                E-Mail: info@timewise.de
              </p>
              
              <p className="mt-4">
                <strong>Registereintrag:</strong><br />
                Eingetragen im Handelsregister des Amtsgerichts Berlin<br />
                Registernummer: HRB 123456
              </p>
              
              <p className="mt-4">
                <strong>Umsatzsteuer-ID:</strong><br />
                DE123456789
              </p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Legal;
