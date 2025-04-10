
import { motion } from "framer-motion";
import { 
  BookOpen, 
  MessageCircle, 
  FileText, 
  Headphones, 
  BarChart, 
  Settings, 
  Users, 
  Clock, 
  Award, 
  PenTool,
  Brain,
  Activity
} from "lucide-react";

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const FeatureCard = ({ 
  title, 
  description, 
  icon: Icon 
}: { 
  title: string; 
  description: string; 
  icon: React.ElementType;
}) => (
  <motion.div 
    className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow"
    variants={fadeInUp}
  >
    <div className="bg-ielts-blue/10 p-3 rounded-full w-12 h-12 flex items-center justify-center mb-4">
      <Icon className="text-ielts-blue" size={20} />
    </div>
    <h3 className="text-xl font-bold mb-2">{title}</h3>
    <p className="text-gray-600">{description}</p>
  </motion.div>
);

const FeaturePage = () => {
  const coreFeaturesData = [
    {
      icon: BookOpen,
      title: "Complete Test Modules",
      description: "Full access to all four IELTS test components: Reading, Writing, Listening and Speaking."
    },
    {
      icon: PenTool,
      title: "AI Writing Feedback",
      description: "Receive detailed feedback on your writing tasks with specific suggestions for improvement."
    },
    {
      icon: MessageCircle,
      title: "AI Speaking Practice",
      description: "Practice speaking with AI avatars that simulate real IELTS interviews and provide feedback."
    },
    {
      icon: FileText,
      title: "Mock Tests",
      description: "Take full-length mock tests under timed conditions to simulate the real exam experience."
    },
    {
      icon: Headphones,
      title: "Listening Practice",
      description: "Train with authentic listening exercises featuring various accents and question types."
    },
    {
      icon: BarChart,
      title: "Progress Tracking",
      description: "Monitor your improvement over time with detailed analytics and performance insights."
    }
  ];

  const advancedFeaturesData = [
    {
      icon: Brain,
      title: "AI Study Planner",
      description: "Get a personalized study plan based on your strengths, weaknesses, and target test date."
    },
    {
      icon: Settings,
      title: "Personalization",
      description: "Adaptive platform that focuses on your weak areas and adjusts to your learning pace."
    },
    {
      icon: Users,
      title: "Community Support",
      description: "Connect with fellow test-takers to share tips, experiences and motivation."
    },
    {
      icon: Clock,
      title: "Timed Practice",
      description: "Build time management skills with exercises that help you work efficiently under pressure."
    },
    {
      icon: Award,
      title: "Band Score Prediction",
      description: "Get accurate predictions of your potential IELTS band score based on your practice results."
    },
    {
      icon: Activity,
      title: "Performance Analytics",
      description: "Detailed insights into your progress with recommendations for targeted improvement."
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
            Platform Features
          </span>
          <h1 className="text-3xl md:text-4xl font-bold mb-6">Everything you need to succeed in IELTS</h1>
          <p className="text-lg text-gray-600">
            Our comprehensive platform combines AI technology with proven IELTS preparation methods 
            to deliver a personalized learning experience.
          </p>
        </motion.div>

        <div className="mb-20">
          <motion.h2 
            className="text-2xl font-bold mb-8 text-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            Core Features
          </motion.h2>
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
          >
            {coreFeaturesData.map((feature, index) => (
              <FeatureCard 
                key={index}
                icon={feature.icon}
                title={feature.title}
                description={feature.description}
              />
            ))}
          </motion.div>
        </div>

        <div className="mb-20">
          <motion.h2 
            className="text-2xl font-bold mb-8 text-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
          >
            Advanced Features
          </motion.h2>
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
          >
            {advancedFeaturesData.map((feature, index) => (
              <FeatureCard 
                key={index}
                icon={feature.icon}
                title={feature.title}
                description={feature.description}
              />
            ))}
          </motion.div>
        </div>

        <motion.div 
          className="bg-gradient-to-r from-ielts-blue to-blue-600 rounded-2xl p-8 md:p-12 text-white"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9, duration: 0.6 }}
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-center">
            <div>
              <h3 className="text-2xl font-bold mb-4">Continuous Innovation</h3>
              <p className="mb-6">
                Our platform is constantly evolving with new features, content updates and AI improvements. 
                We incorporate the latest IELTS exam trends and user feedback to provide the most effective 
                preparation experience.
              </p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
              <h4 className="font-medium mb-4">Recent Updates:</h4>
              <ul className="space-y-3">
                <li className="flex items-center gap-2">
                  <div className="h-2 w-2 rounded-full bg-white"></div>
                  <span>Enhanced AI feedback algorithm</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="h-2 w-2 rounded-full bg-white"></div>
                  <span>New speaking topics based on recent exams</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="h-2 w-2 rounded-full bg-white"></div>
                  <span>Improved scoring accuracy for writing tasks</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="h-2 w-2 rounded-full bg-white"></div>
                  <span>Mobile app for on-the-go practice</span>
                </li>
              </ul>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default FeaturePage;
