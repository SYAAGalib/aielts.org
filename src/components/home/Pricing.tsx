
import { motion } from "framer-motion";
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Check, Building } from 'lucide-react';

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

const PricingTier = ({ 
  title, 
  price, 
  period, 
  description, 
  features, 
  buttonText, 
  buttonIcon = null,
  buttonVariant = "default",
  highlighted = false 
}: {
  title: string;
  price: string;
  period: string;
  description: string;
  features: string[];
  buttonText: string;
  buttonIcon?: React.ReactNode;
  buttonVariant?: "default" | "outline" | "secondary";
  highlighted?: boolean;
}) => {
  return (
    <motion.div 
      variants={fadeInUp}
      className={`flex flex-col h-full rounded-xl p-6 ${highlighted ? 'bg-gradient-to-b from-ielts-blue to-blue-600 text-white shadow-lg border-0' : 'bg-white shadow-sm border border-gray-200 hover:border-ielts-blue/30 transition-all hover:shadow-lg'}`}
    >
      {highlighted && (
        <div className="absolute top-0 right-0 bg-ielts-orange text-white px-3 py-1 text-sm font-medium rounded-bl-lg rounded-tr-lg">
          Best Value
        </div>
      )}
      
      <div className="mb-4">
        <h3 className={`text-xl font-bold ${highlighted ? 'text-white' : 'text-gray-900'}`}>{title}</h3>
        <p className={`mt-2 text-sm ${highlighted ? 'text-white/80' : 'text-gray-500'}`}>{description}</p>
      </div>
      
      <div className="mt-4 mb-6">
        <span className={`text-3xl font-bold ${highlighted ? 'text-white' : ''}`}>{price}</span>
        <span className={`ml-1 ${highlighted ? 'text-white/90' : 'text-gray-600'}`}>{period}</span>
      </div>
      
      <ul className="space-y-3 mb-8 flex-grow">
        {features.map((feature, index) => (
          <li key={index} className="flex items-start gap-2">
            <Check size={18} className={`mt-1 shrink-0 ${highlighted ? 'text-white' : 'text-ielts-green'}`} />
            <span className={`text-sm ${highlighted ? 'text-white/90' : 'text-gray-600'}`}>{feature}</span>
          </li>
        ))}
      </ul>
      
      <div className="mt-auto pt-4">
        <Link to="/signup" className="block w-full">
          <Button 
            variant={buttonVariant}
            className={`w-full ${highlighted && buttonVariant === "default" ? "bg-white text-ielts-blue hover:bg-gray-100" : ""}`}
          >
            {buttonIcon}
            {buttonText}
          </Button>
        </Link>
      </div>
    </motion.div>
  );
};

const Pricing = () => {
  const pricingPlans = [
    {
      title: "Free",
      price: "$0",
      period: "",
      description: "Perfect for beginners",
      features: [
        "Limited practice tests",
        "Basic AI feedback",
        "Community forum access",
        "1 mock test"
      ],
      buttonText: "Get Started",
      buttonVariant: "outline" as const
    },
    {
      title: "3-Month Access",
      price: "$20",
      period: "",
      description: "Most popular choice",
      features: [
        "Unlimited practice tests",
        "Detailed AI feedback",
        "Speaking practice with AI",
        "5 mock tests",
        "Progress tracking"
      ],
      buttonText: "Subscribe Now",
      buttonVariant: "default" as const
    },
    {
      title: "1 Year",
      price: "$65",
      period: "",
      description: "Save over 45%",
      features: [
        "Everything in 3 Months plan",
        "Priority support",
        "Essay writing feedback",
        "10 mock tests",
        "Score prediction",
        "Personalized study plan"
      ],
      buttonText: "Start Free Trial",
      highlighted: true
    },
    {
      title: "Custom",
      price: "Contact Us",
      period: "",
      description: "For IELTS coaching centers",
      features: [
        "Bulk licenses",
        "White-labeling options",
        "Student management",
        "Custom analytics",
        "API integration",
        "Dedicated support"
      ],
      buttonText: "Contact Sales",
      buttonIcon: <Building className="w-4 h-4 mr-2" />,
      buttonVariant: "secondary" as const
    }
  ];

  return (
    <motion.section 
      className="py-16 md:py-24 bg-gray-50" 
      id="pricing"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
      variants={staggerContainer}
    >
      <div className="container">
        <motion.div 
          className="text-center max-w-3xl mx-auto mb-16"
          variants={fadeInUp}
        >
          <span className="inline-block py-1 px-3 bg-ielts-blue/10 text-ielts-blue rounded-full text-sm font-medium mb-4">
            Pricing Plans
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Choose the perfect plan for your IELTS journey</h2>
          <p className="text-lg text-gray-600">
            Select the option that best fits your preparation timeline and goals.
            All plans include access to our core AI-powered features.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {pricingPlans.map((plan, index) => (
            <PricingTier
              key={index}
              title={plan.title}
              price={plan.price}
              period={plan.period}
              description={plan.description}
              features={plan.features}
              buttonText={plan.buttonText}
              buttonIcon={plan.buttonIcon}
              buttonVariant={plan.buttonVariant}
              highlighted={plan.highlighted}
            />
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default Pricing;
