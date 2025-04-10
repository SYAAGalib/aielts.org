
import { Sparkles, Mic, BookOpen, Brain, Clock, BarChart3, Users, HelpCircle } from 'lucide-react';

const Features = () => {
  const features = [
    {
      icon: Sparkles,
      title: "AI-Powered Feedback",
      description: "Get instant, detailed feedback on your writing and speaking practice to improve faster.",
      color: "text-ielts-blue",
      bgColor: "bg-ielts-blue/10"
    },
    {
      icon: Mic,
      title: "Speaking Practice",
      description: "Practice with AI avatars that use natural voices through ElevenLabs TTS integration.",
      color: "text-ielts-orange",
      bgColor: "bg-ielts-orange/10"
    },
    {
      icon: BookOpen,
      title: "Complete Test Modules",
      description: "Practice all IELTS sections: Reading, Writing, Listening, and Speaking with realistic simulation.",
      color: "text-ielts-green",
      bgColor: "bg-ielts-green/10"
    },
    {
      icon: Brain,
      title: "Personalized Study Plans",
      description: "AI creates customized study plans based on your weaknesses and target score.",
      color: "text-purple-500",
      bgColor: "bg-purple-500/10"
    },
    {
      icon: Clock,
      title: "Timed Practice Tests",
      description: "Take full mock exams under timed conditions to build exam stamina and confidence.",
      color: "text-amber-500",
      bgColor: "bg-amber-500/10"
    },
    {
      icon: BarChart3,
      title: "Progress Tracking",
      description: "Monitor your improvement with detailed analytics and performance insights.",
      color: "text-sky-500",
      bgColor: "bg-sky-500/10"
    },
    {
      icon: Users,
      title: "Live Tutoring",
      description: "Connect with expert IELTS tutors for personalized guidance and feedback.",
      color: "text-rose-500",
      bgColor: "bg-rose-500/10"
    },
    {
      icon: HelpCircle,
      title: "IELTS Buddy Assistant",
      description: "24/7 AI assistant to answer questions and provide exam tips whenever you need help.",
      color: "text-emerald-500",
      bgColor: "bg-emerald-500/10"
    }
  ];

  return (
    <section className="py-16 md:py-24 bg-gray-50">
      <div className="container">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block py-1 px-3 bg-ielts-blue/10 text-ielts-blue rounded-full text-sm font-medium mb-4">
            Key Features
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Everything you need to ace the IELTS</h2>
          <p className="text-lg text-gray-600">
            Our comprehensive platform covers all aspects of IELTS preparation with advanced AI tools to 
            help you practice more effectively and achieve your target score.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-white p-6 rounded-xl shadow-sm border hover:shadow-md transition-shadow">
              <div className={`${feature.bgColor} w-12 h-12 rounded-lg flex items-center justify-center mb-4`}>
                <feature.icon className={`${feature.color}`} size={24} />
              </div>
              <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
