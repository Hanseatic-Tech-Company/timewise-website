
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
              Ready to simplify time tracking and vacation management?
            </h2>
            <p className="text-timewise-700 mb-8">
              Join thousands of satisfied companies that trust Timewise for their time tracking and vacation management needs. Start your 14-day free trial today.
            </p>
            
            <div className="space-y-6 mb-12">
              <div className="flex items-start">
                <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-timewise-100 flex items-center justify-center mr-4 mt-1">
                  <Clock className="h-5 w-5 text-timewise-600" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-timewise-900 mb-1">Quick setup, instant value</h3>
                  <p className="text-timewise-700 text-sm">Be up and running in minutes, not days or weeks</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-timewise-100 flex items-center justify-center mr-4 mt-1">
                  <Calendar className="h-5 w-5 text-timewise-600" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-timewise-900 mb-1">Hassle-free vacation planning</h3>
                  <p className="text-timewise-700 text-sm">Streamline time off requests and approvals</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-timewise-100 flex items-center justify-center mr-4 mt-1">
                  <Shield className="h-5 w-5 text-timewise-600" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-timewise-900 mb-1">Always compliant</h3>
                  <p className="text-timewise-700 text-sm">Stay on the right side of labor laws and regulations</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-timewise-100 flex items-center justify-center mr-4 mt-1">
                  <Users className="h-5 w-5 text-timewise-600" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-timewise-900 mb-1">Loved by teams</h3>
                  <p className="text-timewise-700 text-sm">Intuitive interface that employees actually enjoy using</p>
                </div>
              </div>
            </div>
            
            <a 
              href="#" 
              className="button-primary inline-flex items-center"
            >
              Start Free Trial <ArrowRight className="ml-2 h-4 w-4" />
            </a>
            <p className="text-sm text-timewise-600 mt-4">
              No credit card required. 14-day free trial.
            </p>
          </div>
          
          <div className="bg-white rounded-3xl shadow-xl border border-timewise-100 overflow-hidden">
            <div className="p-8">
              <h3 className="text-2xl font-semibold text-timewise-900 mb-6">Get in touch</h3>
              
              <form className="space-y-6">
                <div className="space-y-1">
                  <label htmlFor="name" className="text-sm font-medium text-timewise-900">
                    Full Name
                  </label>
                  <input 
                    type="text" 
                    id="name" 
                    placeholder="Enter your name"
                    className="w-full px-4 py-3 rounded-lg border border-timewise-200 focus:border-timewise-500 focus:ring-2 focus:ring-timewise-500/20 transition-colors"
                  />
                </div>
                
                <div className="space-y-1">
                  <label htmlFor="email" className="text-sm font-medium text-timewise-900">
                    Work Email
                  </label>
                  <input 
                    type="email" 
                    id="email" 
                    placeholder="name@company.com"
                    className="w-full px-4 py-3 rounded-lg border border-timewise-200 focus:border-timewise-500 focus:ring-2 focus:ring-timewise-500/20 transition-colors"
                  />
                </div>
                
                <div className="space-y-1">
                  <label htmlFor="company" className="text-sm font-medium text-timewise-900">
                    Company Name
                  </label>
                  <input 
                    type="text" 
                    id="company" 
                    placeholder="Your company"
                    className="w-full px-4 py-3 rounded-lg border border-timewise-200 focus:border-timewise-500 focus:ring-2 focus:ring-timewise-500/20 transition-colors"
                  />
                </div>
                
                <div className="space-y-1">
                  <label htmlFor="employees" className="text-sm font-medium text-timewise-900">
                    Number of Employees
                  </label>
                  <select 
                    id="employees"
                    className="w-full px-4 py-3 rounded-lg border border-timewise-200 focus:border-timewise-500 focus:ring-2 focus:ring-timewise-500/20 transition-colors"
                  >
                    <option value="">Select team size</option>
                    <option value="1-10">1-10</option>
                    <option value="11-50">11-50</option>
                    <option value="51-200">51-200</option>
                    <option value="201-500">201-500</option>
                    <option value="501+">501+</option>
                  </select>
                </div>
                
                <div className="space-y-1">
                  <label htmlFor="message" className="text-sm font-medium text-timewise-900">
                    Message (Optional)
                  </label>
                  <textarea 
                    id="message" 
                    rows={3}
                    placeholder="How can we help you?"
                    className="w-full px-4 py-3 rounded-lg border border-timewise-200 focus:border-timewise-500 focus:ring-2 focus:ring-timewise-500/20 transition-colors"
                  ></textarea>
                </div>
                
                <button 
                  type="submit"
                  className="w-full button-primary"
                >
                  Get Started
                </button>
              </form>
              
              <p className="text-xs text-timewise-600 mt-6 text-center">
                By submitting this form, you agree to our <a href="#" className="underline hover:text-timewise-900">Terms of Service</a> and <a href="#" className="underline hover:text-timewise-900">Privacy Policy</a>.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
