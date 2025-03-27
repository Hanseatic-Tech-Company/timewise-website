
import { useState } from "react";
import { Plus, Minus } from "lucide-react";
import { cn } from "@/lib/utils";

const faqs = [
  {
    question: "How quickly can we get started with Timewise?",
    answer: "Most customers are up and running within 30 minutes. Our intuitive setup wizard will guide you through the process, and our support team is available to help if needed."
  },
  {
    question: "Is Timewise compliant with labor laws?",
    answer: "Yes, Timewise is designed to be compliant with labor laws across multiple jurisdictions. We regularly update our system to reflect changes in regulations, ensuring your business always remains compliant."
  },
  {
    question: "Can employees track time on mobile devices?",
    answer: "Absolutely! Timewise works on any device with a web browser. We also offer dedicated mobile apps for iOS and Android that provide a seamless experience for employees on the go."
  },
  {
    question: "How does the vacation approval process work?",
    answer: "Employees submit vacation requests through our platform, which automatically checks for conflicts and compliance issues. Managers receive notifications and can approve or reject requests with a single click. The system then updates calendars and balances automatically."
  },
  {
    question: "Can Timewise integrate with our existing HR software?",
    answer: "Yes, Timewise offers integrations with popular HR platforms, payroll systems, and calendar applications. We also provide an API for custom integrations with your organization's specific tools."
  },
  {
    question: "What kind of support do you offer?",
    answer: "All plans include email support with response times based on your plan level. Professional and Enterprise plans include priority support, while Enterprise customers also receive a dedicated account manager for personalized assistance."
  },
  {
    question: "Is our data secure with Timewise?",
    answer: "Security is our top priority. We use industry-standard encryption, regular security audits, and follow best practices for data protection. Timewise is GDPR compliant and we never share your data with third parties without your explicit permission."
  },
  {
    question: "Can we export data from Timewise?",
    answer: "Yes, you can export data in various formats including CSV, Excel, and PDF. This makes it easy to use your time tracking and vacation data in other systems or for custom reporting needs."
  }
];

const FAQ = () => {
  const [openItems, setOpenItems] = useState<number[]>([0]);
  
  const toggleItem = (index: number) => {
    setOpenItems((current) =>
      current.includes(index)
        ? current.filter((i) => i !== index)
        : [...current, index]
    );
  };
  
  return (
    <section id="faq" className="py-24 px-6 md:px-12 lg:px-24 bg-timewise-50 relative">
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-timewise-200 to-transparent"></div>
      <div className="absolute bottom-0 right-0 w-[300px] h-[300px] bg-timewise-100 rounded-full blur-[100px] opacity-50 -z-10"></div>
      
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-3 py-1.5 mb-6 border border-timewise-200 rounded-full bg-white shadow-sm">
            <span className="text-sm font-medium text-timewise-700">Common Questions</span>
          </div>
          <h2 className="heading-lg text-timewise-950 mb-6">
            Frequently asked questions
          </h2>
          <p className="text-timewise-700 max-w-2xl mx-auto">
            Find answers to common questions about Timewise. If you need more information, our support team is just a click away.
          </p>
        </div>
        
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className={cn(
                "border rounded-xl overflow-hidden transition-all duration-300",
                openItems.includes(index)
                  ? "border-timewise-300 shadow-md bg-white"
                  : "border-gray-200 hover:border-timewise-200 bg-white/80"
              )}
            >
              <button
                className="w-full text-left px-6 py-4 focus:outline-none flex justify-between items-center"
                onClick={() => toggleItem(index)}
                aria-expanded={openItems.includes(index)}
              >
                <span className="font-semibold text-timewise-900">
                  {faq.question}
                </span>
                <span className="flex-shrink-0 ml-4">
                  {openItems.includes(index) ? (
                    <Minus className="h-5 w-5 text-timewise-600" />
                  ) : (
                    <Plus className="h-5 w-5 text-timewise-600" />
                  )}
                </span>
              </button>
              
              <div
                className={cn(
                  "overflow-hidden transition-all duration-300",
                  openItems.includes(index) ? "max-h-80" : "max-h-0"
                )}
              >
                <div className="px-6 pb-4 text-timewise-700">
                  {faq.answer}
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <p className="text-timewise-700 mb-6">Still have questions?</p>
          <a 
            href="#contact" 
            className="button-primary inline-block"
          >
            Contact Support
          </a>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
