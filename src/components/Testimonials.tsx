
import { useState, useEffect, useRef } from "react";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";
import { cn } from "@/lib/utils";

const testimonials = [
  {
    id: 1,
    quote: "Timewise transformed our team's productivity. The time tracking is intuitive and the vacation management feature eliminated all the back-and-forth emails. It's been a game-changer for us.",
    author: "Sarah J.",
    role: "HR Director",
    rating: 5
  },
  {
    id: 2,
    quote: "We needed a solution that would simplify vacation tracking while ensuring we stay compliant with labor laws. Timewise delivered beyond our expectations. Setup was incredibly fast too!",
    author: "Michael C.",
    role: "Operations Manager",
    rating: 5
  },
  {
    id: 3,
    quote: "The interface is so intuitive that our team started using it without any training. I especially love how the reports give us insights we never had before.",
    author: "Emma R.",
    role: "Team Lead",
    rating: 5
  },
  {
    id: 4,
    quote: "As a small business owner, I needed something affordable that wouldn't require an IT team to maintain. Timewise is perfect - powerful yet simple. The free tier was perfect to start with.",
    author: "David T.",
    role: "Founder",
    rating: 5
  },
  {
    id: 5,
    quote: "We've optimized our workforce scheduling and saved thousands in operational costs thanks to Timewise. The compliance features alone are worth every penny.",
    author: "Olivia P.",
    role: "CFO",
    rating: 5
  }
];

const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const sliderRef = useRef<HTMLDivElement>(null);

  const next = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setActiveIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
    setTimeout(() => setIsAnimating(false), 500);
  };

  const prev = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setActiveIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
    setTimeout(() => setIsAnimating(false), 500);
  };
  
  useEffect(() => {
    const interval = setInterval(() => {
      next();
    }, 6000);
    
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="testimonials" className="py-24 px-6 md:px-12 lg:px-24 bg-timewise-50 relative">
      <div className="absolute -top-20 right-0 w-[400px] h-[400px] bg-timewise-100 rounded-full blur-[100px] opacity-60 -z-10"></div>
      <div className="absolute -bottom-20 left-0 w-[400px] h-[400px] bg-timewise-100 rounded-full blur-[100px] opacity-60 -z-10"></div>
      
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-3 py-1.5 mb-6 border border-timewise-200 rounded-full bg-white shadow-sm">
            <span className="text-sm font-medium text-timewise-700">Customer Stories</span>
          </div>
          <h2 className="heading-lg text-timewise-950 mb-6">
            Trusted by companies worldwide
          </h2>
          <p className="text-timewise-700 max-w-2xl mx-auto">
            Don't just take our word for it. Here's what our customers have to say about their experience with Timewise.
          </p>
        </div>
        
        <div className="relative">
          <div 
            ref={sliderRef}
            className="overflow-hidden relative"
          >
            <div 
              className="flex transition-transform duration-500 ease-out"
              style={{ transform: `translateX(-${activeIndex * 100}%)` }}
            >
              {testimonials.map((testimonial) => (
                <div 
                  key={testimonial.id}
                  className="w-full flex-shrink-0 px-4"
                >
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
              ))}
            </div>
          </div>
          
          <div className="mt-12 flex justify-center items-center gap-6">
            <button
              onClick={prev}
              className="w-10 h-10 rounded-full border border-timewise-300 bg-white flex items-center justify-center text-timewise-600 hover:bg-timewise-50 hover:text-timewise-800 transition-all shadow-sm"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            
            <div className="flex space-x-2">
              {testimonials.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => {
                    if (isAnimating) return;
                    setIsAnimating(true);
                    setActiveIndex(idx);
                    setTimeout(() => setIsAnimating(false), 500);
                  }}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    activeIndex === idx
                      ? "w-8 bg-timewise-600"
                      : "bg-timewise-300 hover:bg-timewise-400"
                  }`}
                  aria-label={`Go to testimonial ${idx + 1}`}
                />
              ))}
            </div>
            
            <button
              onClick={next}
              className="w-10 h-10 rounded-full border border-timewise-300 bg-white flex items-center justify-center text-timewise-600 hover:bg-timewise-50 hover:text-timewise-800 transition-all shadow-sm"
              aria-label="Next testimonial"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </div>
        
        <div className="mt-24 grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
          <div className="flex flex-col items-center">
            <div className="text-4xl font-bold text-timewise-900 mb-2">98%</div>
            <p className="text-timewise-600 text-center text-sm">Customer satisfaction</p>
          </div>
          
          <div className="flex flex-col items-center">
            <div className="text-4xl font-bold text-timewise-900 mb-2">30m</div>
            <p className="text-timewise-600 text-center text-sm">Average setup time</p>
          </div>
          
          <div className="flex flex-col items-center">
            <div className="text-4xl font-bold text-timewise-900 mb-2">5k+</div>
            <p className="text-timewise-600 text-center text-sm">Active customers</p>
          </div>
          
          <div className="flex flex-col items-center">
            <div className="text-4xl font-bold text-timewise-900 mb-2">24/7</div>
            <p className="text-timewise-600 text-center text-sm">Customer support</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
