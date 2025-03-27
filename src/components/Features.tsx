
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
import { getStoredImage } from "./MockupImages";

const features = [
  {
    id: "time-tracking",
    icon: <Clock className="h-6 w-6" />,
    title: "Effortless Time Tracking",
    description: "Track working hours with minimal effort. Our intuitive interface makes it easy for employees to log time accurately.",
    benefits: [
      "One-click time tracking",
      "Automatic breaks calculation",
      "Overtime monitoring",
      "Mobile-friendly interface"
    ],
    color: "from-timewise-500/20 to-timewise-500/5",
    image: "/time-tracking-mockup.png"
  },
  {
    id: "vacation-management",
    icon: <Calendar className="h-6 w-6" />,
    title: "Simplified Vacation Management",
    description: "Manage time off requests effortlessly. Employees can request vacations, and managers can approve with just a click.",
    benefits: [
      "Automated vacation balance",
      "Approval workflows",
      "Calendar integration",
      "Leave history tracking"
    ],
    color: "from-timewise-600/20 to-timewise-600/5",
    image: "/vacation-calendar-mockup.png"
  },
  {
    id: "compliance",
    icon: <Shield className="h-6 w-6" />,
    title: "Legal Compliance Guaranteed",
    description: "Stay compliant with labor laws and regulations. Our system ensures you're always on the right side of the law.",
    benefits: [
      "Up-to-date legal requirements",
      "Automatic compliance checks",
      "Audit-ready reports",
      "Data protection built-in"
    ],
    color: "from-timewise-700/20 to-timewise-700/5",
    image: "/compliance-report-mockup.png"
  },
  {
    id: "reporting",
    icon: <BarChart4 className="h-6 w-6" />,
    title: "Comprehensive Reporting",
    description: "Generate detailed reports on time spent, vacation usage, and productivity metrics to optimize your workforce.",
    benefits: [
      "Customizable report templates",
      "Export to various formats",
      "Visual data representation",
      "Scheduled report delivery"
    ],
    color: "from-timewise-800/20 to-timewise-800/5",
    image: "/analytics-dashboard-mockup.png"
  }
];

const Features = () => {
  const [activeFeature, setActiveFeature] = useState(features[0].id);
  const [imageLoaded, setImageLoaded] = useState(false);
  const featureRefs = useRef<(HTMLDivElement | null)[]>([]);
  const [imageKey, setImageKey] = useState(0); // Add a key to force re-render of image
  
  // Use an effect to create canvas images once when component mounts
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
  
  // Force a re-render when switching features
  const forceImageReload = () => {
    setImageLoaded(false);
    setImageKey(prevKey => prevKey + 1); // Change the key to force a re-render
    setTimeout(() => setImageLoaded(true), 50);
  };

  // Function to get stored image from sessionStorage
  const getFeatureImage = (path: string) => {
    return getStoredImage(path);
  };

  return (
    <section id="features" className="py-24 px-6 md:px-12 lg:px-24 bg-white relative">
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-timewise-200 to-transparent"></div>
      <div className="absolute -top-10 left-1/2 -translate-x-1/2 h-20 w-20 bg-timewise-100 rounded-full blur-3xl opacity-70 -z-10"></div>
      
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-3 py-1.5 mb-6 border border-timewise-200 rounded-full bg-white shadow-sm">
            <span className="text-sm font-medium text-timewise-700">Why choose Timewise</span>
          </div>
          <h2 className="heading-lg text-timewise-950 mb-6">
            All you need for efficient time management
          </h2>
          <p className="text-timewise-700 max-w-2xl mx-auto">
            Timewise combines powerful features with an intuitive interface, making time tracking and vacation management a breeze.
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
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 md:gap-6">
            <div className="text-center">
              <div className="w-14 h-14 bg-timewise-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                <Zap className="h-6 w-6 text-timewise-600" />
              </div>
              <h3 className="text-lg font-semibold text-timewise-900 mb-2">Quick Setup</h3>
              <p className="text-timewise-700 text-sm">Be up and running in minutes, not days</p>
            </div>
            
            <div className="text-center">
              <div className="w-14 h-14 bg-timewise-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                <Shield className="h-6 w-6 text-timewise-600" />
              </div>
              <h3 className="text-lg font-semibold text-timewise-900 mb-2">100% Compliant</h3>
              <p className="text-timewise-700 text-sm">Always in line with labor laws</p>
            </div>
            
            <div className="text-center">
              <div className="w-14 h-14 bg-timewise-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                <FileText className="h-6 w-6 text-timewise-600" />
              </div>
              <h3 className="text-lg font-semibold text-timewise-900 mb-2">Detailed Reports</h3>
              <p className="text-timewise-700 text-sm">Get insights with comprehensive reports</p>
            </div>
            
            <div className="text-center">
              <div className="w-14 h-14 bg-timewise-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                <Calendar className="h-6 w-6 text-timewise-600" />
              </div>
              <h3 className="text-lg font-semibold text-timewise-900 mb-2">Vacation Planning</h3>
              <p className="text-timewise-700 text-sm">Simplify leave management for everyone</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
