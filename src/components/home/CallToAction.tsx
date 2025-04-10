
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowRight, CheckCircle } from 'lucide-react';

const CallToAction = () => {
  const features = [
    "All IELTS test modules (Reading, Writing, Listening, Speaking)",
    "AI-powered feedback and assessment",
    "Personalized study plans",
    "Full mock tests with timing",
    "24/7 AI assistant"
  ];

  return (
    <section className="py-16 md:py-24">
      <div className="container">
        <div className="bg-gradient-to-r from-ielts-blue to-blue-400 rounded-2xl overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="p-8 md:p-12">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Ready to achieve your target IELTS score?
              </h2>
              <p className="text-white/90 text-lg mb-8">
                Join thousands of successful students who have improved their scores 
                with our AI-powered platform. Start your journey today.
              </p>
              
              <ul className="space-y-4 mb-8">
                {features.map((feature, index) => (
                  <li key={index} className="flex items-center gap-3">
                    <CheckCircle size={20} className="text-white" />
                    <span className="text-white">{feature}</span>
                  </li>
                ))}
              </ul>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/signup">
                  <Button size="lg" variant="secondary" className="gap-2">
                    Get Started Free <ArrowRight size={18} />
                  </Button>
                </Link>
                <Link to="/pricing">
                  <Button size="lg" variant="outline" className="bg-transparent border-white text-white hover:bg-white/10">
                    View Pricing
                  </Button>
                </Link>
              </div>
            </div>
            
            <div className="relative hidden lg:block">
              <div className="absolute inset-0 bg-white/10"></div>
              <div className="absolute left-0 top-1/2 -translate-y-1/2 transform">
                <div className="relative ml-[-20px] bg-white rounded-xl shadow-xl p-6 max-w-sm">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-ielts-blue rounded-full flex items-center justify-center text-white font-bold mr-3">
                      AI
                    </div>
                    <div>
                      <h3 className="font-medium">Study Plan Generated</h3>
                      <p className="text-xs text-gray-500">Customized for your needs</p>
                    </div>
                  </div>
                  
                  <div className="space-y-3 mb-4">
                    <div className="bg-gray-50 p-3 rounded-lg">
                      <div className="flex items-center justify-between mb-1">
                        <span className="text-sm font-medium">Reading Practice</span>
                        <span className="text-xs bg-ielts-blue/10 text-ielts-blue px-2 py-0.5 rounded">45 min</span>
                      </div>
                      <p className="text-xs text-gray-500">Focus on skimming and scanning techniques</p>
                    </div>
                    
                    <div className="bg-gray-50 p-3 rounded-lg">
                      <div className="flex items-center justify-between mb-1">
                        <span className="text-sm font-medium">Vocabulary Builder</span>
                        <span className="text-xs bg-ielts-green/10 text-ielts-green px-2 py-0.5 rounded">20 min</span>
                      </div>
                      <p className="text-xs text-gray-500">Academic word list - Environment topic</p>
                    </div>
                    
                    <div className="bg-gray-50 p-3 rounded-lg">
                      <div className="flex items-center justify-between mb-1">
                        <span className="text-sm font-medium">Speaking Practice</span>
                        <span className="text-xs bg-ielts-orange/10 text-ielts-orange px-2 py-0.5 rounded">30 min</span>
                      </div>
                      <p className="text-xs text-gray-500">Part 2 long-turn responses</p>
                    </div>
                  </div>
                  
                  <Button size="sm" className="w-full">Start Today's Plan</Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
