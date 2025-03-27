
import { useState, useEffect, useRef } from "react";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";
import { cn } from "@/lib/utils";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from "@/components/ui/carousel";

const testimonials = [
  {
    id: 1,
    quote: "Timewise hat die Produktivität unseres Teams verändert. Die Zeiterfassung ist intuitiv und die Urlaubsverwaltungsfunktion hat all die Hin- und Her-E-Mails beseitigt. Für uns war es ein echter Wendepunkt.",
    author: "Sarah J.",
    role: "HR Direktorin",
    rating: 5
  },
  {
    id: 2,
    quote: "Wir brauchten eine Lösung, die die Urlaubsverfolgung vereinfacht und gleichzeitig sicherstellt, dass wir die Arbeitsgesetze einhalten. Timewise hat unsere Erwartungen übertroffen. Die Einrichtung war außerdem unglaublich schnell!",
    author: "Michael C.",
    role: "Betriebsleiter",
    rating: 5
  },
  {
    id: 3,
    quote: "Die Benutzeroberfläche ist so intuitiv, dass unser Team sie ohne jegliche Schulung zu nutzen begann. Besonders gefällt mir, wie die Berichte uns Einblicke geben, die wir vorher nie hatten.",
    author: "Emma R.",
    role: "Teamleiterin",
    rating: 5
  },
  {
    id: 4,
    quote: "Als Kleinunternehmer brauchte ich etwas Erschwingliches, das kein IT-Team zur Wartung benötigt. Timewise ist perfekt - leistungsstark und dennoch einfach. Die kostenlose Version war perfekt zum Starten.",
    author: "David T.",
    role: "Gründer",
    rating: 5
  },
  {
    id: 5,
    quote: "Dank Timewise haben wir unsere Personalplanung optimiert und Tausende an Betriebskosten gespart. Allein die Compliance-Funktionen sind jeden Cent wert.",
    author: "Olivia P.",
    role: "Finanzvorstand",
    rating: 5
  }
];

const Testimonials = () => {
  const [api, setApi] = useState<any>(null);
  const [current, setCurrent] = useState(0);
  
  // Update current slide when carousel changes
  useEffect(() => {
    if (!api) {
      return;
    }

    const onSelect = () => {
      setCurrent(api.selectedScrollSnap());
    };

    api.on("select", onSelect);
    
    // Initial slide
    onSelect();

    return () => {
      api.off("select", onSelect);
    };
  }, [api]);

  // Auto rotation
  useEffect(() => {
    const interval = setInterval(() => {
      if (api) {
        api.scrollNext();
      }
    }, 6000);
    
    return () => clearInterval(interval);
  }, [api]);

  return (
    <section id="testimonials" className="py-24 px-6 md:px-12 lg:px-24 bg-timewise-50 relative">
      <div className="absolute -top-20 right-0 w-[400px] h-[400px] bg-timewise-100 rounded-full blur-[100px] opacity-60 -z-10"></div>
      <div className="absolute -bottom-20 left-0 w-[400px] h-[400px] bg-timewise-100 rounded-full blur-[100px] opacity-60 -z-10"></div>
      
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-3 py-1.5 mb-6 border border-timewise-200 rounded-full bg-white shadow-sm">
            <span className="text-sm font-medium text-timewise-700">Kundenstimmen</span>
          </div>
          <h2 className="heading-lg text-timewise-950 mb-6">
            Vertraut von Unternehmen weltweit
          </h2>
          <p className="text-timewise-700 max-w-2xl mx-auto">
            Nehmen Sie nicht nur unser Wort dafür. Hier ist, was unsere Kunden über ihre Erfahrungen mit Timewise zu sagen haben.
          </p>
        </div>
        
        <div className="relative">
          <Carousel className="w-full" setApi={setApi}>
            <CarouselContent>
              {testimonials.map((testimonial) => (
                <CarouselItem key={testimonial.id}>
                  <div className="w-full px-4 py-2">
                    <div className="bg-white rounded-3xl shadow-lg border border-timewise-100 overflow-hidden max-w-4xl mx-auto p-8 md:p-12">
                      <div className="flex mb-6">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className={cn(
                              "h-5 w-5 mr-1",
                              i < testimonial.rating ? "text-yellow-400 fill-yellow-400" : "text-gray-300"
                            )}
                          />
                        ))}
                      </div>
                      <blockquote className="text-xl md:text-2xl font-medium text-timewise-950 mb-8 italic">
                        "{testimonial.quote}"
                      </blockquote>
                      <div className="flex items-center">
                        <div className="w-12 h-12 rounded-full bg-timewise-100 flex items-center justify-center mr-4">
                          <span className="font-semibold text-timewise-800">{testimonial.author.charAt(0)}</span>
                        </div>
                        <div>
                          <div className="font-semibold text-timewise-900">{testimonial.author}</div>
                          <div className="text-sm text-timewise-600">{testimonial.role}</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            
            <div className="hidden">
              <CarouselPrevious />
              <CarouselNext />
            </div>
          </Carousel>
          
          <div className="mt-8 flex justify-center items-center gap-6">
            <button
              onClick={() => api?.scrollPrev()}
              className="w-10 h-10 rounded-full border border-timewise-300 bg-white flex items-center justify-center text-timewise-600 hover:bg-timewise-50 hover:text-timewise-800 transition-all shadow-sm"
              aria-label="Vorheriges Testimonial"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            
            <div className="flex space-x-2">
              {testimonials.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => api?.scrollTo(idx)}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    current === idx
                      ? "w-8 bg-timewise-600"
                      : "bg-timewise-300 hover:bg-timewise-400"
                  }`}
                  aria-label={`Gehe zu Testimonial ${idx + 1}`}
                />
              ))}
            </div>
            
            <button
              onClick={() => api?.scrollNext()}
              className="w-10 h-10 rounded-full border border-timewise-300 bg-white flex items-center justify-center text-timewise-600 hover:bg-timewise-50 hover:text-timewise-800 transition-all shadow-sm"
              aria-label="Nächstes Testimonial"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </div>
        
        <div className="mt-24 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <div className="flex flex-col items-center">
            <div className="text-4xl font-bold text-timewise-900 mb-2">98%</div>
            <p className="text-timewise-600 text-center text-sm">Kundenzufriedenheit</p>
          </div>
          
          <div className="flex flex-col items-center">
            <div className="text-4xl font-bold text-timewise-900 mb-2">30m</div>
            <p className="text-timewise-600 text-center text-sm">Durchschnittliche Einrichtungszeit</p>
          </div>
          
          <div className="flex flex-col items-center">
            <div className="text-4xl font-bold text-timewise-900 mb-2">24/7</div>
            <p className="text-timewise-600 text-center text-sm">Kundensupport</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
