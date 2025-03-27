
import { useState, useEffect, useRef } from "react";
import { 
  Clock, 
  Calendar, 
  FileText, 
  BarChart4, 
  Shield, 
  Zap,
  CheckCircle2
} from "lucide-react";
import { cn } from "@/lib/utils";
import MockupImages, { getStoredImage } from "./MockupImages";

const features = [
  {
    id: "time-tracking",
    icon: <Clock className="h-6 w-6" />,
    title: "Einfache Zeiterfassung",
    description: "Tracke Arbeitszeiten mit minimalem Aufwand. Unsere intuitive Oberfläche macht es für Mitarbeiter leicht, ihre Zeit genau zu erfassen.",
    benefits: [
      "One-Click Zeiterfassung",
      "Automatische Pausenberechnung",
      "Überstunden-Tracking",
      "Mobile-friendly Interface"
    ],
    color: "from-timewise-500/20 to-timewise-500/5",
    image: "/time-tracking-mockup.png"
  },
  {
    id: "vacation-management",
    icon: <Calendar className="h-6 w-6" />,
    title: "Smarte Urlaubsverwaltung",
    description: "Verwalte Urlaubsanträge mühelos. Mitarbeiter können Urlaub beantragen und Manager mit nur einem Klick genehmigen.",
    benefits: [
      "Automatische Urlaubsberechnung",
      "Smarte Genehmigungsprozesse",
      "Kalender-Integration",
      "Übersichtliche Verlaufsansicht"
    ],
    color: "from-timewise-600/20 to-timewise-600/5",
    image: "/vacation-calendar-mockup.png"
  },
  {
    id: "compliance",
    icon: <Shield className="h-6 w-6" />,
    title: "Rechtssicherheit garantiert",
    description: "Bleib immer konform mit Arbeitsgesetzen und Vorschriften. Unser System stellt sicher, dass du immer auf der sicheren Seite bist.",
    benefits: [
      "Aktuelle gesetzliche Anforderungen",
      "Automatische Compliance-Checks",
      "Audit-ready Reports",
      "Integrierter Datenschutz"
    ],
    color: "from-timewise-700/20 to-timewise-700/5",
    image: "/compliance-report-mockup.png"
  },
  {
    id: "reporting",
    icon: <BarChart4 className="h-6 w-6" />,
    title: "Umfassendes Reporting",
    description: "Erstelle detaillierte Berichte zu Arbeitszeiten, Urlaubsnutzung und Produktivitätsmetriken, um dein Team zu optimieren.",
    benefits: [
      "Anpassbare Report-Templates",
      "Export in verschiedene Formate",
      "Visuelle Datenaufbereitung",
      "Automatisierte Berichtslieferung"
    ],
    color: "from-timewise-800/20 to-timewise-800/5",
    image: "/analytics-dashboard-mockup.png"
  }
];

const Features = () => {
  const [activeFeature, setActiveFeature] = useState(features[0].id);
  const [imageLoaded, setImageLoaded] = useState(false);
  const featureRefs = useRef<(HTMLDivElement | null)[]>([]);
  const [imageKey, setImageKey] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      setImageLoaded(true);
    }, 500);
    
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight / 2;
      
      featureRefs.current.forEach((ref, index) => {
        if (!ref) return;
        
        const refTop = ref.offsetTop;
        const refBottom = refTop + ref.offsetHeight;
        
        if (scrollPosition >= refTop && scrollPosition <= refBottom) {
          setActiveFeature(features[index].id);
        }
      });
    };
    
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const currentFeature = features.find(f => f.id === activeFeature) || features[0];

  const forceImageReload = () => {
    setImageLoaded(false);
    setImageKey(prevKey => prevKey + 1);
    setTimeout(() => setImageLoaded(true), 50);
  };

  const getFeatureImage = (path: string) => {
    return getStoredImage(path);
  };

  return (
    <section id="features" className="py-24 px-6 md:px-12 lg:px-24 bg-white relative">
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-timewise-200 to-transparent"></div>
      <div className="absolute -top-10 left-1/2 -translate-x-1/2 h-20 w-20 bg-timewise-100 rounded-full blur-3xl opacity-70 -z-10"></div>
      
      <div className="max-w-7xl mx-auto">
        <div id="why-choose" className="text-center mb-16">
          <div className="inline-flex items-center px-3 py-1.5 mb-6 border border-timewise-200 rounded-full bg-white shadow-sm">
            <span className="text-sm font-medium text-timewise-700">Warum Timewise?</span>
          </div>
          <h2 className="heading-lg text-timewise-950 mb-6">
            Alles, was du für effizientes Zeitmanagement brauchst
          </h2>
          <p className="text-timewise-700 max-w-2xl mx-auto">
            Timewise kombiniert leistungsstarke Funktionen mit einer intuitiven Oberfläche und macht Zeiterfassung und Urlaubsmanagement zum Kinderspiel.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <div className="space-y-6">
              {features.map((feature, idx) => (
                <div
                  key={feature.id}
                  ref={el => featureRefs.current[idx] = el}
                  className={cn(
                    "p-6 rounded-2xl border transition-all duration-300 cursor-pointer",
                    activeFeature === feature.id
                      ? "border-timewise-500 bg-gradient-to-br from-timewise-50 to-white shadow-sm"
                      : "border-gray-200 hover:border-timewise-300 hover:bg-timewise-50/50"
                  )}
                  onClick={() => {
                    setActiveFeature(feature.id);
                    forceImageReload();
                  }}
                >
                  <div className="flex items-start">
                    <div className={cn(
                      "flex-shrink-0 w-12 h-12 flex items-center justify-center rounded-lg text-timewise-600",
                      activeFeature === feature.id
                        ? "bg-timewise-100"
                        : "bg-gray-100"
                    )}>
                      {feature.icon}
                    </div>
                    <div className="ml-4">
                      <h3 className="text-lg font-semibold text-timewise-900 mb-1">{feature.title}</h3>
                      <p className="text-timewise-700 text-sm">{feature.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="relative">
            <div className={cn(
              "absolute -inset-1 rounded-3xl blur-xl opacity-70 -z-10 bg-gradient-to-tr",
              currentFeature.color
            )}></div>
            <div className="glass-card rounded-3xl overflow-hidden border border-timewise-200/50 shadow-xl">
              <div className="relative h-64 md:h-72 lg:h-80 overflow-hidden">
                {imageLoaded && (
                  <img 
                    key={`${currentFeature.id}-${imageKey}`}
                    src={getFeatureImage(currentFeature.image)}
                    alt={currentFeature.title}
                    className="w-full h-full object-cover object-center"
                    onError={(e) => {
                      console.error(`Failed to load image: ${currentFeature.image}`);
                      const target = e.target as HTMLImageElement;
                      target.src = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100' height='100' viewBox='0 0 100 100'%3E%3Crect width='100' height='100' fill='%23f1f5f9'/%3E%3Ctext x='50%25' y='50%25' dominant-baseline='middle' text-anchor='middle' font-family='sans-serif' font-size='14' fill='%2364748b'%3EImage%3C/text%3E%3C/svg%3E";
                    }}
                  />
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-white/90 via-white/30 to-transparent"></div>
              </div>
              
              <div className="p-8 bg-white/90 backdrop-blur-sm">
                <h3 className="text-xl font-semibold text-timewise-900 mb-4">{currentFeature.title}</h3>
                <div className="space-y-3">
                  {currentFeature.benefits.map((benefit, idx) => (
                    <div key={idx} className="flex items-center gap-3">
                      <CheckCircle2 className="h-5 w-5 text-timewise-500 flex-shrink-0" />
                      <span className="text-timewise-800">{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="mt-24 border border-timewise-200 rounded-2xl p-8 md:p-12 bg-gradient-to-br from-white to-timewise-50/50">
          <h2 className="text-2xl font-bold text-timewise-950 text-center mb-8">Warum sich Teams für Timewise entscheiden</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 md:gap-6">
            <div className="text-center">
              <div className="w-14 h-14 bg-timewise-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                <Zap className="h-6 w-6 text-timewise-600" />
              </div>
              <h3 className="text-lg font-semibold text-timewise-900 mb-2">Blitzschnelles Setup</h3>
              <p className="text-timewise-700 text-sm">In Minuten startklar, nicht in Tagen</p>
            </div>
            
            <div className="text-center">
              <div className="w-14 h-14 bg-timewise-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                <Shield className="h-6 w-6 text-timewise-600" />
              </div>
              <h3 className="text-lg font-semibold text-timewise-900 mb-2">100% Rechtssicher</h3>
              <p className="text-timewise-700 text-sm">Immer konform mit Arbeitsrecht</p>
            </div>
            
            <div className="text-center">
              <div className="w-14 h-14 bg-timewise-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                <FileText className="h-6 w-6 text-timewise-600" />
              </div>
              <h3 className="text-lg font-semibold text-timewise-900 mb-2">Smart Reporting</h3>
              <p className="text-timewise-700 text-sm">Gewinne Insights durch umfassende Reports</p>
            </div>
            
            <div className="text-center">
              <div className="w-14 h-14 bg-timewise-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                <Calendar className="h-6 w-6 text-timewise-600" />
              </div>
              <h3 className="text-lg font-semibold text-timewise-900 mb-2">Urlaubsplanung</h3>
              <p className="text-timewise-700 text-sm">Vereinfachtes Abwesenheitsmanagement</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
