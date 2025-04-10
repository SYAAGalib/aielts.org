
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowRight, Brain, Clock, Award } from 'lucide-react';

const Hero = () => {
  return (
    <section className="py-16 md:py-24 overflow-hidden">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="text-center lg:text-left">
            <span className="inline-block py-1 px-3 bg-ielts-blue/10 text-ielts-blue rounded-full text-sm font-medium mb-4">
              AI-Powered IELTS Preparation
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Train smarter.<br />
              <span className="text-gradient">Speak confidently.</span><br />
              Score higher.
            </h1>
            <p className="text-lg text-gray-600 mb-8 max-w-xl mx-auto lg:mx-0">
              The most advanced AI-powered IELTS preparation platform with personalized feedback, speaking practice, and comprehensive test modules.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Link to="/signup">
                <Button size="lg" className="gap-2">
                  Get Started Free <ArrowRight size={18} />
                </Button>
              </Link>
              <Link to="/features">
                <Button variant="outline" size="lg">
                  Learn More
                </Button>
              </Link>
            </div>
            
            <div className="mt-12 grid grid-cols-3 gap-4">
              <div className="flex flex-col items-center lg:items-start">
                <div className="bg-ielts-blue/10 p-2 rounded-full mb-3">
                  <Brain size={20} className="text-ielts-blue" />
                </div>
                <h3 className="text-sm font-medium">AI Feedback</h3>
              </div>
              <div className="flex flex-col items-center lg:items-start">
                <div className="bg-ielts-orange/10 p-2 rounded-full mb-3">
                  <Clock size={20} className="text-ielts-orange" />
                </div>
                <h3 className="text-sm font-medium">Timed Practice</h3>
              </div>
              <div className="flex flex-col items-center lg:items-start">
                <div className="bg-ielts-green/10 p-2 rounded-full mb-3">
                  <Award size={20} className="text-ielts-green" />
                </div>
                <h3 className="text-sm font-medium">Score Higher</h3>
              </div>
            </div>
          </div>
          
          <div className="relative">
            {/* Main speaking coach card - positioned as the main element */}
            <div className="relative z-20 bg-white rounded-xl shadow-xl border p-4 animate-float mb-16">
              <div className="bg-ielts-blue/10 rounded-lg p-4">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-ielts-blue rounded-full flex items-center justify-center text-white font-bold mr-3">
                    AI
                  </div>
                  <div>
                    <h3 className="font-medium">IELTS Speaking Coach</h3>
                    <p className="text-xs text-gray-500">Personalized feedback</p>
                  </div>
                </div>
                <p className="bg-white p-3 rounded-lg text-sm mb-3">
                  "Your answer demonstrates good fluency, but try to use more complex vocabulary. 
                  Let me suggest some alternatives..."
                </p>
                <div className="flex gap-2">
                  <span className="bg-ielts-green/20 text-ielts-green text-xs px-2 py-1 rounded">Fluency: Good</span>
                  <span className="bg-ielts-orange/20 text-ielts-orange text-xs px-2 py-1 rounded">Vocabulary: Improve</span>
                </div>
              </div>
            </div>
            
            {/* Floating cards positioned absolutely on top of the main card */}
            <div className="absolute top-2 right-4 bg-white rounded-xl shadow-lg border p-3 w-48 animate-float z-30" style={{ animationDelay: '1s' }}>
              <h4 className="font-medium text-sm flex items-center gap-2">
                <Award size={16} className="text-ielts-orange" /> 
                Band Score
              </h4>
              <div className="flex items-center justify-between mt-2">
                <span className="text-xs text-gray-500">Current</span>
                <span className="font-bold text-ielts-blue text-xl">6.5</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-xs text-gray-500">Target</span>
                <span className="font-bold text-ielts-green text-xl">7.5</span>
              </div>
            </div>
            
            <div className="absolute top-24 -left-4 bg-white rounded-xl shadow-lg border p-3 w-48 animate-float z-30" style={{ animationDelay: '2s' }}>
              <h4 className="font-medium text-sm flex items-center gap-2">
                <Clock size={16} className="text-ielts-blue" /> 
                Study Progress
              </h4>
              <div className="w-full bg-gray-200 rounded-full h-2 mt-2">
                <div className="bg-ielts-green h-2 rounded-full" style={{ width: '68%' }}></div>
              </div>
              <div className="flex justify-between mt-1">
                <span className="text-xs text-gray-500">68% complete</span>
              </div>
            </div>
            
            {/* Decorative elements */}
            <div className="absolute -z-10 top-1/3 right-1/3 w-72 h-72 bg-ielts-blue/10 rounded-full blur-3xl"></div>
            <div className="absolute -z-10 bottom-1/3 left-1/4 w-64 h-64 bg-ielts-orange/10 rounded-full blur-3xl"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
