
import { useState, useEffect, useRef } from "react";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";
import { cn } from "@/lib/utils";

const testimonials = [
  {
    id: 1,
    quote: "Timewise transformed how we manage our team's time. The compliance features alone are worth every penny. Setup took less than an hour!",
    author: "Sarah Johnson",
    role: "HR Director, TechFlow Inc.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=256&h=256"
  },
  {
    id: 2,
    quote: "We needed a solution that would simplify vacation tracking while ensuring we stay compliant with labor laws. Timewise delivered beyond our expectations.",
    author: "Michael Chen",
    role: "Operations Manager, Stellar Solutions",
    rating: 5,
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=256&h=256"
  },
  {
    id: 3,
    quote: "The interface is so intuitive that our team started using it without any training. The vacation approval workflows have eliminated all the back-and-forth emails.",
    author: "Emma Rodriguez",
    role: "Team Lead, Innovate Design",
    rating: 5,
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=256&h=256"
  },
  {
    id: 4,
    quote: "As a small business owner, I needed something affordable that wouldn't require an IT team to maintain. Timewise is perfect - powerful yet simple.",
    author: "David Thompson",
    role: "Founder, Bright Ideas Co.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&q=80&w=256&h=256"
  },
  {
    id: 5,
    quote: "The reporting features have given us insights we never had before. We've optimized our workforce scheduling and saved thousands in operational costs.",
    author: "Olivia Parker",
    role: "CFO, Summit Enterprises",
    rating: 5,
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=256&h=256"
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
                  <div className="bg-white rounded-3xl shadow-lg border border-timewise-100 overflow-hidden max-w-4xl mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-5">
                      <div className="md:col-span-3 p-8 md:p-12 flex flex-col justify-center">
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
                          <div className="w-12 h-12 rounded-full overflow-hidden mr-4">
                            <img 
                              src={testimonial.image} 
                              alt={testimonial.author} 
                              className="w-full h-full object-cover"
                            />
                          </div>
                          <div>
                            <div className="font-semibold text-timewise-900">{testimonial.author}</div>
                            <div className="text-sm text-timewise-600">{testimonial.role}</div>
                          </div>
                        </div>
                      </div>
                      <div className="hidden md:block md:col-span-2 bg-timewise-100">
                        <div className="h-full relative">
                          <div className="absolute inset-0 bg-gradient-to-br from-timewise-200/40 to-timewise-400/20"></div>
                          <div className="absolute inset-0 flex items-center justify-center">
                            <div className="w-32 h-32 bg-white/90 rounded-full flex items-center justify-center shadow-lg">
                              <div className="text-center">
                                <div className="font-display font-bold text-4xl text-timewise-600">T</div>
                                <div className="text-xs font-medium text-timewise-800 mt-1">Timewise</div>
                              </div>
                            </div>
                          </div>
                        </div>
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
