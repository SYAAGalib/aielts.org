
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Check, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

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

const ProductsPage = () => {
  const products = [
    {
      title: "IELTS Complete Test Suite",
      description: "Full access to all four test modules - Reading, Writing, Listening, and Speaking.",
      features: [
        "Real IELTS exam format and timing",
        "Auto-graded sections with detailed explanations",
        "AI-powered feedback on writing tasks",
        "Speaking practice with AI avatars",
        "Full analytics and progress tracking"
      ],
      image: "https://images.unsplash.com/photo-1543269865-cbf427effbad?ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80",
      cta: "Try Full Test Suite"
    },
    {
      title: "AI Writing Assistant",
      description: "Advanced AI feedback on your writing tasks to help you improve your band score.",
      features: [
        "Detailed analysis of Task 1 and Task 2 responses",
        "Band score prediction",
        "Grammar and vocabulary recommendations",
        "Structure and coherence analysis",
        "Example high-scoring responses"
      ],
      image: "https://images.unsplash.com/photo-1517842645767-c639042777db?ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80",
      cta: "Try AI Writing Assistant"
    },
    {
      title: "Speaking Practice Module",
      description: "Practice your speaking skills with realistic AI avatars that give feedback.",
      features: [
        "Natural conversations with AI avatars",
        "Voice recording with instant feedback",
        "Pronunciation and fluency analysis",
        "Vocabulary and grammar evaluation",
        "Tips for improving your speaking score"
      ],
      image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80",
      cta: "Try Speaking Practice"
    },
    {
      title: "Mock Exam Simulator",
      description: "Full-length mock tests under exam conditions with detailed analytics.",
      features: [
        "Timed sections that mirror the real exam",
        "Simulated testing environment",
        "Comprehensive score reports",
        "Performance analytics and trends",
        "Comparison with previous attempts"
      ],
      image: "https://images.unsplash.com/photo-1588196749597-9ff075ee6b5b?ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80",
      cta: "Take Mock Exam"
    }
  ];

  return (
    <div className="py-16 md:py-24">
      <div className="container">
        <motion.div 
          className="text-center max-w-3xl mx-auto mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-block py-1 px-3 bg-ielts-blue/10 text-ielts-blue rounded-full text-sm font-medium mb-4">
            Our Products
          </span>
          <h1 className="text-3xl md:text-4xl font-bold mb-6">
            Advanced AI tools for IELTS mastery
          </h1>
          <p className="text-lg text-gray-600">
            Our suite of AI-powered IELTS preparation tools is designed to help you achieve your target score through personalized practice and feedback.
          </p>
        </motion.div>

        <motion.div 
          className="space-y-16"
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
        >
          {products.map((product, index) => (
            <motion.div 
              key={index} 
              className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${index % 2 !== 0 ? 'lg:flex-row-reverse' : ''}`}
              variants={fadeInUp}
            >
              <div className={`${index % 2 !== 0 ? 'lg:order-2' : ''}`}>
                <h2 className="text-2xl md:text-3xl font-bold mb-4">{product.title}</h2>
                <p className="text-lg text-gray-600 mb-6">{product.description}</p>
                
                <ul className="space-y-3 mb-8">
                  {product.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <Check className="h-5 w-5 text-ielts-green mt-1 flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <Link to="/signup">
                  <Button className="gap-2 bg-ielts-blue hover:bg-ielts-blue/90">
                    {product.cta} <ArrowRight size={16} />
                  </Button>
                </Link>
              </div>
              
              <div className={`rounded-2xl overflow-hidden shadow-lg ${index % 2 !== 0 ? 'lg:order-1' : ''}`}>
                <img 
                  src={product.image}
                  alt={product.title}
                  className="w-full h-auto object-cover aspect-video"
                />
              </div>
            </motion.div>
          ))}
        </motion.div>
        
        <motion.div 
          className="mt-20 text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
        >
          <h2 className="text-2xl font-bold mb-6">Ready to improve your IELTS score?</h2>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link to="/pricing">
              <Button variant="default" className="bg-ielts-blue hover:bg-ielts-blue/90">
                View Pricing
              </Button>
            </Link>
            <Link to="/signup">
              <Button variant="outline">
                Start Free Trial
              </Button>
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default ProductsPage;
