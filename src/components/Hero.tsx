
import { ArrowRight, Clock, Calendar, Shield } from "lucide-react";

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
              <span className="text-sm font-medium text-timewise-700">Compliant Time Management</span>
            </div>
            
            <h1 className="heading-xl mb-6 text-timewise-950 animate-slide-down">
              Effortless time tracking & vacation management
            </h1>
            
            <p className="text-lg text-timewise-700 mb-8 max-w-xl mx-auto lg:mx-0 animate-slide-down animate-delay-100">
              Simple, compliant, and affordable solution to manage your team's time and vacations. Quick to set up, easy to use.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 mb-12 animate-slide-down animate-delay-200">
              <a href="#contact" className="button-primary w-full sm:w-auto">
                Start Free Trial
              </a>
              <a href="#demo" className="button-secondary w-full sm:w-auto flex items-center justify-center gap-2 group">
                Watch Demo <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
            
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-6 animate-slide-down animate-delay-300">
              <div className="flex items-center gap-2">
                <Clock className="h-5 w-5 text-timewise-600" />
                <span className="text-sm text-timewise-700">Quick setup</span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar className="h-5 w-5 text-timewise-600" />
                <span className="text-sm text-timewise-700">Simplified planning</span>
              </div>
              <div className="flex items-center gap-2">
                <Shield className="h-5 w-5 text-timewise-600" />
                <span className="text-sm text-timewise-700">Legally compliant</span>
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
                  <h3 className="text-xl font-semibold text-timewise-900 mb-4">Intuitive dashboard for all your needs</h3>
                  <p className="text-timewise-700 mb-5">Track time, manage vacations, generate reports, all in one place.</p>
                  <div className="flex justify-end">
                    <button className="text-sm font-medium text-timewise-600 hover:text-timewise-800 transition-colors flex items-center gap-1">
                      Explore features <ArrowRight className="h-4 w-4" />
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
