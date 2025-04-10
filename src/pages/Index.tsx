
import { motion } from "framer-motion";
import Hero from '@/components/home/Hero';
import Features from '@/components/home/Features';
import HowItWorks from '@/components/home/HowItWorks';
import Testimonials from '@/components/home/Testimonials';
import Pricing from '@/components/home/Pricing'; 
import CallToAction from '@/components/home/CallToAction';
import { Button } from "@/components/ui/button";
import { Check, Building } from "lucide-react";
import { useEffect, useState } from "react";

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

const Index = () => {
  const [animateOnScroll, setAnimateOnScroll] = useState<NodeListOf<Element> | null>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-fade-in');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1 });
    
    const sections = document.querySelectorAll('section');
    setAnimateOnScroll(sections);
    
    sections.forEach(section => {
      observer.observe(section);
    });
    
    return () => {
      sections.forEach(section => {
        observer.unobserve(section);
      });
    };
  }, []);

  return (
    <>
      <Hero />
      <Features />
      <HowItWorks />
      
      <motion.section 
        id="showcase" 
        className="py-20 bg-white"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        variants={staggerContainer}
      >
        <div className="container mx-auto px-6">
          <motion.h2 
            className="text-3xl md:text-4xl font-bold text-center mb-16"
            variants={fadeInUp}
          >
            Our Powerful AI Tools
          </motion.h2>
          
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-20 items-center"
            variants={staggerContainer}
          >
            <motion.div className="order-2 md:order-1" variants={fadeInUp}>
              <h3 className="text-2xl font-semibold text-ielts-blue mb-4">AI Grader</h3>
              <p className="text-xl font-bold mb-3">Accurate Skill Assessment in Under 1 Minute</p>
              <p className="text-gray-600 mb-6">
                AiELTS leverages an advanced AI Scoring Engine to redefine IELTS preparation, 
                ensuring precise evaluation of both content and context.
              </p>
              <Button variant="default" className="bg-ielts-blue hover:bg-ielts-blue/90">
                Try AI Grader
              </Button>
            </motion.div>
            <motion.div 
              className="order-1 md:order-2 shadow-xl rounded-lg overflow-hidden"
              variants={fadeInUp}
            >
              <img 
                src="/lovable-uploads/e83e0bf1-ecda-4e1d-99e2-23c96ae4a9d7.png" 
                alt="AI Grader" 
                className="w-full h-auto"
              />
            </motion.div>
          </motion.div>
          
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-20 items-center"
            variants={staggerContainer}
          >
            <motion.div 
              className="shadow-xl rounded-lg overflow-hidden"
              variants={fadeInUp}
            >
              <img 
                src="/lovable-uploads/4db1f2b5-00d1-4712-ac1f-be8e636084ba.png" 
                alt="AI Correction" 
                className="w-full h-auto"
              />
            </motion.div>
            <motion.div variants={fadeInUp}>
              <h3 className="text-2xl font-semibold text-ielts-blue mb-4">AI Correction</h3>
              <p className="text-xl font-bold mb-3">AI-Powered Essay Corrections</p>
              <p className="text-gray-600 mb-6">
                Are you still paying high fees for Writing corrections? AiELTS analyzes your 
                submissions and offers exemplary answers to help you achieve top scores, 
                all at a fraction of the usual cost.
              </p>
              <Button variant="default" className="bg-ielts-blue hover:bg-ielts-blue/90">
                Try AI Correction
              </Button>
            </motion.div>
          </motion.div>
          
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center"
            variants={staggerContainer}
          >
            <motion.div className="order-2 md:order-1" variants={fadeInUp}>
              <h3 className="text-2xl font-semibold text-ielts-blue mb-4">AI Study Guide</h3>
              <p className="text-xl font-bold mb-3">Personalized AI-driven Learning Recommendations</p>
              <p className="text-gray-600 mb-6">
                AI analyzes your practice question results and recommends next steps for targeted learning.
              </p>
              <Button variant="default" className="bg-ielts-blue hover:bg-ielts-blue/90">
                Try AI Study Guide
              </Button>
            </motion.div>
            <motion.div 
              className="order-1 md:order-2 shadow-xl rounded-lg overflow-hidden"
              variants={fadeInUp}
            >
              <img 
                src="/lovable-uploads/ccc668e6-ac7f-49e9-9746-e8a367512cb5.png" 
                alt="AI Study Guide" 
                className="w-full h-auto"
              />
            </motion.div>
          </motion.div>
        </div>
      </motion.section>
      
      <Testimonials />
      <Pricing />
      <CallToAction />
    </>
  );
};

export default Index;
