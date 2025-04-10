
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Pen, FileText, BarChart, Clock, MessageCircle, CheckCircle } from "lucide-react";

const Writing = () => {
  // Animation variants
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

  // Sample writing tasks
  const writingTasks = [
    {
      title: "Task 1 (Academic): Graph Analysis",
      description: "Analyze and describe data presented in a graph, chart, or diagram",
      level: "Band 6-7",
      time: "20 min",
      words: "150+",
      image: "https://images.unsplash.com/photo-1526628953301-3e589a6a8b74?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
    },
    {
      title: "Task 1 (General): Letter Writing",
      description: "Write a letter requesting information or explaining a situation",
      level: "Band 5-6",
      time: "20 min",
      words: "150+",
      image: "https://images.unsplash.com/photo-1586954914955-657f4dea8395?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
    },
    {
      title: "Task 2 (Academic): Essay",
      description: "Write a formal essay addressing a point of view, argument, or problem",
      level: "Band 7-8",
      time: "40 min",
      words: "250+",
      image: "https://images.unsplash.com/photo-1455390582262-044cdead277a?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
    },
    {
      title: "Task 2 (General): Essay",
      description: "Write a formal essay on a given topic from general interest",
      level: "Band 6-7",
      time: "40 min",
      words: "250+",
      image: "https://images.unsplash.com/photo-1531482615713-2afd69097998?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
    }
  ];

  // Assessment criteria
  const assessmentCriteria = [
    {
      name: "Task Achievement",
      description: "How completely you've addressed all parts of the task with relevant ideas",
      icon: CheckCircle
    },
    {
      name: "Coherence & Cohesion",
      description: "How well your writing is organized and linked together logically",
      icon: FileText
    },
    {
      name: "Lexical Resource",
      description: "The range and accuracy of vocabulary used in your response",
      icon: MessageCircle
    },
    {
      name: "Grammatical Range & Accuracy",
      description: "The range and correct use of grammar in your writing",
      icon: Pen
    }
  ];

  // Writing tips
  const writingTips = [
    "Always analyze the task carefully to identify exactly what you need to cover",
    "Plan your response before you start writing to ensure good structure",
    "Use paragraphs effectively to organize your ideas",
    "Include specific examples to support your main points",
    "Leave 2-3 minutes to check your work for basic grammatical errors",
    "For Task 1, focus on key trends and significant features rather than every detail"
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
          <span className="inline-block py-1 px-3 bg-ielts-orange/10 text-ielts-orange rounded-full text-sm font-medium mb-4">
            IELTS Writing
          </span>
          <h1 className="text-3xl md:text-4xl font-bold mb-6">Develop Your IELTS Writing Skills</h1>
          <p className="text-lg text-gray-600">
            Practice with authentic IELTS writing tasks, receive AI-powered feedback, 
            and learn the techniques needed to achieve your target band score.
          </p>
        </motion.div>

        {/* Key Features */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16"
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
        >
          <motion.div 
            className="bg-white rounded-xl p-6 shadow-sm border border-gray-100"
            variants={fadeInUp}
          >
            <div className="h-12 w-12 rounded-full bg-ielts-orange/10 flex items-center justify-center mb-4">
              <Pen className="text-ielts-orange" />
            </div>
            <h3 className="text-xl font-bold mb-2">Real IELTS Tasks</h3>
            <p className="text-gray-600">
              Practice with tasks designed to match the format and difficulty of the actual IELTS exam.
            </p>
          </motion.div>
          <motion.div 
            className="bg-white rounded-xl p-6 shadow-sm border border-gray-100"
            variants={fadeInUp}
          >
            <div className="h-12 w-12 rounded-full bg-ielts-orange/10 flex items-center justify-center mb-4">
              <BarChart className="text-ielts-orange" />
            </div>
            <h3 className="text-xl font-bold mb-2">AI Scoring</h3>
            <p className="text-gray-600">
              Get detailed feedback and band score estimates for your writing using our advanced AI.
            </p>
          </motion.div>
          <motion.div 
            className="bg-white rounded-xl p-6 shadow-sm border border-gray-100"
            variants={fadeInUp}
          >
            <div className="h-12 w-12 rounded-full bg-ielts-orange/10 flex items-center justify-center mb-4">
              <FileText className="text-ielts-orange" />
            </div>
            <h3 className="text-xl font-bold mb-2">Sample Answers</h3>
            <p className="text-gray-600">
              Study high-scoring sample responses to understand what examiners are looking for.
            </p>
          </motion.div>
        </motion.div>

        {/* Writing Tasks */}
        <motion.div 
          className="mb-16"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          <h2 className="text-2xl font-bold mb-8 text-center">Practice Writing Tasks</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {writingTasks.map((task, index) => (
              <motion.div 
                key={index}
                className="bg-white rounded-xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-md transition-shadow"
                whileHover={{ y: -5, transition: { duration: 0.2 } }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
              >
                <div className="h-48 overflow-hidden">
                  <img 
                    src={task.image} 
                    alt={task.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-5">
                  <h3 className="font-bold text-lg mb-2">{task.title}</h3>
                  <p className="text-gray-600 text-sm mb-3">{task.description}</p>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xs bg-ielts-orange/10 text-ielts-orange px-2 py-1 rounded-full">
                      {task.level}
                    </span>
                    <div className="flex items-center gap-3 text-sm text-gray-500">
                      <span className="flex items-center">
                        <Clock size={14} className="mr-1" />
                        {task.time}
                      </span>
                      <span className="flex items-center">
                        <FileText size={14} className="mr-1" />
                        {task.words}
                      </span>
                    </div>
                  </div>
                  <Button className="w-full">Start Writing</Button>
                </div>
              </motion.div>
            ))}
          </div>
          <div className="text-center mt-6">
            <Button variant="outline" className="mt-4">View All Writing Tasks</Button>
          </div>
        </motion.div>

        {/* Assessment Criteria */}
        <motion.div 
          className="mb-16 bg-gray-50 p-8 rounded-xl"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
        >
          <h2 className="text-2xl font-bold mb-8 text-center">Assessment Criteria</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {assessmentCriteria.map((item, index) => (
              <motion.div 
                key={index}
                className="bg-white p-5 rounded-lg shadow-sm"
                whileHover={{ y: -5, transition: { duration: 0.2 } }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.7 + index * 0.1 }}
              >
                <div className="h-10 w-10 rounded-full bg-ielts-orange/10 flex items-center justify-center mb-3">
                  <item.icon className="text-ielts-orange" size={18} />
                </div>
                <h3 className="font-bold mb-2">{item.name}</h3>
                <p className="text-sm text-gray-600">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Tips Section */}
        <motion.div 
          className="mb-16"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
        >
          <h2 className="text-2xl font-bold mb-6 text-center">Top Writing Tips</h2>
          <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm">
            <ul className="space-y-4">
              {writingTips.map((tip, index) => (
                <motion.li 
                  key={index}
                  className="flex items-start gap-3"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: 0.9 + index * 0.1 }}
                >
                  <div className="bg-ielts-orange/10 p-2 rounded-full flex-shrink-0">
                    <span className="h-5 w-5 flex items-center justify-center text-ielts-orange font-bold text-sm">
                      {index + 1}
                    </span>
                  </div>
                  <span>{tip}</span>
                </motion.li>
              ))}
            </ul>
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          className="bg-gradient-to-r from-ielts-orange to-orange-500 rounded-2xl p-8 md:p-12 text-white text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.0 }}
        >
          <h2 className="text-2xl md:text-3xl font-bold mb-4">Ready to improve your writing skills?</h2>
          <p className="mb-8 max-w-2xl mx-auto">
            Start practicing with our IELTS writing tasks and receive detailed AI feedback to boost your band score.
          </p>
          <div className="flex justify-center gap-4 flex-wrap">
            <Link to="/signup">
              <Button size="lg" className="bg-white text-ielts-orange hover:bg-gray-100">
                Start Free Practice
              </Button>
            </Link>
            <Link to="/dashboard/writing">
              <Button size="lg" variant="outline" className="text-white border-white hover:bg-white/20">
                Go to Writing Dashboard
              </Button>
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Writing;
