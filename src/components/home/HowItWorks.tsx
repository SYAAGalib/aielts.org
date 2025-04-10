
import { CheckCircle } from 'lucide-react';

const HowItWorks = () => {
  return (
    <section className="py-16 md:py-24">
      <div className="container">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block py-1 px-3 bg-ielts-blue/10 text-ielts-blue rounded-full text-sm font-medium mb-4">
            How It Works
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Your path to IELTS success</h2>
          <p className="text-lg text-gray-600">
            Our structured approach helps you prepare effectively and achieve your target band score in less time.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Step 1 */}
          <div className="bg-white rounded-xl overflow-hidden shadow-sm border hover:shadow-md transition-shadow">
            <div className="h-3 bg-ielts-blue"></div>
            <div className="p-6">
              <div className="bg-ielts-blue/10 text-ielts-blue w-10 h-10 rounded-full flex items-center justify-center font-bold mb-4">1</div>
              <h3 className="text-xl font-semibold mb-4">Take a Diagnostic Test</h3>
              <p className="text-gray-600 mb-6">
                Start with a comprehensive diagnostic test that evaluates your current abilities across all four IELTS modules.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start gap-2">
                  <CheckCircle size={18} className="text-ielts-blue mt-1 shrink-0" />
                  <span className="text-gray-600">Complete band score assessment</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle size={18} className="text-ielts-blue mt-1 shrink-0" />
                  <span className="text-gray-600">Identify your strengths and weaknesses</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle size={18} className="text-ielts-blue mt-1 shrink-0" />
                  <span className="text-gray-600">Understand your starting point</span>
                </li>
              </ul>
            </div>
          </div>
          
          {/* Step 2 */}
          <div className="bg-white rounded-xl overflow-hidden shadow-sm border hover:shadow-md transition-shadow">
            <div className="h-3 bg-ielts-orange"></div>
            <div className="p-6">
              <div className="bg-ielts-orange/10 text-ielts-orange w-10 h-10 rounded-full flex items-center justify-center font-bold mb-4">2</div>
              <h3 className="text-xl font-semibold mb-4">Follow Your Study Plan</h3>
              <p className="text-gray-600 mb-6">
                Our AI creates a personalized study plan tailored to your goals, available time, and areas needing improvement.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start gap-2">
                  <CheckCircle size={18} className="text-ielts-orange mt-1 shrink-0" />
                  <span className="text-gray-600">AI-generated learning path</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle size={18} className="text-ielts-orange mt-1 shrink-0" />
                  <span className="text-gray-600">Focused practice on weak areas</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle size={18} className="text-ielts-orange mt-1 shrink-0" />
                  <span className="text-gray-600">Daily tasks and reminders</span>
                </li>
              </ul>
            </div>
          </div>
          
          {/* Step 3 */}
          <div className="bg-white rounded-xl overflow-hidden shadow-sm border hover:shadow-md transition-shadow">
            <div className="h-3 bg-ielts-green"></div>
            <div className="p-6">
              <div className="bg-ielts-green/10 text-ielts-green w-10 h-10 rounded-full flex items-center justify-center font-bold mb-4">3</div>
              <h3 className="text-xl font-semibold mb-4">Practice and Improve</h3>
              <p className="text-gray-600 mb-6">
                Practice with our comprehensive modules and receive instant AI feedback to continuously improve your skills.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start gap-2">
                  <CheckCircle size={18} className="text-ielts-green mt-1 shrink-0" />
                  <span className="text-gray-600">Detailed feedback on each practice</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle size={18} className="text-ielts-green mt-1 shrink-0" />
                  <span className="text-gray-600">Speaking practice with AI avatars</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle size={18} className="text-ielts-green mt-1 shrink-0" />
                  <span className="text-gray-600">Track your progress over time</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
