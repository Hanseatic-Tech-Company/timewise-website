
import { ArrowRight, Clock, Calendar, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section className="pt-32 pb-24 px-6 md:px-12 lg:px-24 overflow-hidden relative">
      <div className="absolute inset-0 bg-gradient-to-b from-timewise-50/50 to-white/0 -z-10"></div>
      <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-timewise-100 rounded-full blur-[120px] opacity-60 -z-10"></div>
      
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <div className="flex-1 text-center lg:text-left">
            <div className="inline-flex items-center px-3 py-1.5 mb-8 border border-timewise-200 rounded-full bg-white shadow-sm animate-fade-in">
              <div className="w-2 h-2 rounded-full bg-timewise-500 mr-2"></div>
              <span className="text-sm font-medium text-timewise-700">Gesetzeskonforme Zeiterfassung</span>
            </div>
            
            <h1 className="heading-xl mb-6 text-timewise-950 animate-slide-down">
              <span className="text-timewise-600 block mb-2">Zeit smart managen.</span>
              <span className="relative">
                Produktivität <span className="relative">steigern
                  <svg className="absolute -bottom-2 left-0 w-full" viewBox="0 0 200 8" preserveAspectRatio="none">
                    <path d="M0,5 C50,0 150,0 200,5" stroke="#3c9158" strokeWidth="2" fill="none" />
                  </svg>
                </span>
              </span>
            </h1>
            
            <p className="text-lg text-timewise-700 mb-8 max-w-xl mx-auto lg:mx-0 animate-slide-down animate-delay-100">
              Die smarte, gesetzeskonforme und preiswerte Lösung für dein Team. Schnell eingerichtet, simpel zu bedienen – und das zu einem fairen Preis.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 mb-12 animate-slide-down animate-delay-200">
              <Button 
                size="lg" 
                variant="default" 
                className="w-full sm:w-auto bg-timewise-600 hover:bg-timewise-700 text-white"
                asChild
              >
                <a href="https://app.mytimewise.de/register">Kostenlos testen</a>
              </Button>
              
              <Button 
                size="lg" 
                variant="outline" 
                className="w-full sm:w-auto border-timewise-200 text-timewise-900 hover:bg-gray-50 group"
                asChild
              >
                <a href="#demo" className="flex items-center gap-2">
                  Demo ansehen <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
                </a>
              </Button>
            </div>
            
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-6 animate-slide-down animate-delay-300">
              <div className="flex items-center gap-2">
                <Clock className="h-5 w-5 text-timewise-600" />
                <span className="text-sm text-timewise-700">Blitzschnell eingerichtet</span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar className="h-5 w-5 text-timewise-600" />
                <span className="text-sm text-timewise-700">Smarte Planung</span>
              </div>
              <div className="flex items-center gap-2">
                <Shield className="h-5 w-5 text-timewise-600" />
                <span className="text-sm text-timewise-700">100% gesetzeskonform</span>
              </div>
            </div>
          </div>
          
          <div className="flex-1 w-full max-w-xl lg:max-w-none animate-fade-in animate-delay-200">
            <div className="relative">
              <div className="absolute -inset-1 bg-gradient-to-tr from-timewise-300/30 to-timewise-500/30 rounded-3xl blur-xl opacity-70 -z-10"></div>
              <div className="glass-card rounded-3xl overflow-hidden border border-timewise-200/50 shadow-xl">
                <div className="relative">
                  <img 
                    src="/dashboard-mockup.png" 
                    alt="Timewise dashboard"
                    className="w-full h-auto rounded-tl-3xl rounded-tr-3xl"
                  />
                  <div className="absolute inset-0 bg-gradient-to-tr from-timewise-950/5 to-transparent rounded-tl-3xl rounded-tr-3xl"></div>
                </div>
                <div className="p-8 bg-white/90 backdrop-blur-sm">
                  <h3 className="text-xl font-semibold text-timewise-900 mb-4">Intuitives Dashboard für alle Bedürfnisse</h3>
                  <p className="text-timewise-700 mb-5">Zeiterfassung, Urlaubsmanagement und Reporting – alles an einem Ort.</p>
                  <div className="flex justify-end">
                    <button className="text-sm font-medium text-timewise-600 hover:text-timewise-800 transition-colors flex items-center gap-1">
                      Features entdecken <ArrowRight className="h-4 w-4" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
