import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Mic, MessageCircle, Video, Volume, BarChart, Brain, PlayCircle, Clock } from "lucide-react";
import { Link } from "react-router-dom";

const fadeIn = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.6 } }
};

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

const SpeakingPractice = () => {
  const avatars = [
    {
      name: "Emma",
      role: "IELTS Examiner",
      image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      accent: "British"
    },
    {
      name: "Michael",
      role: "IELTS Trainer",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      accent: "American"
    },
    {
      name: "Priya",
      role: "IELTS Specialist",
      image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      accent: "Indian"
    },
    {
      name: "James",
      role: "Language Coach",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      accent: "Australian"
    }
  ];

  const practiceModules = [
    {
      title: "Part 1: Introduction & Interview",
      description: "Practice answering personal questions about yourself, your home, work, studies, and interests.",
      duration: "4-5 minutes",
      icon: MessageCircle
    },
    {
      title: "Part 2: Long Turn",
      description: "Speak on a given topic using provided cue points. 1-minute preparation time followed by a 1-2 minute speech.",
      duration: "3-4 minutes",
      icon: Mic
    },
    {
      title: "Part 3: Two-way Discussion",
      description: "Engage in a deeper discussion related to the Part 2 topic, exploring abstract ideas and issues.",
      duration: "4-5 minutes",
      icon: Brain
    }
  ];

  const feedbackFeatures = [
    {
      title: "Pronunciation Analysis",
      description: "Get feedback on your pronunciation, intonation, and accent with specific examples for improvement.",
      icon: Volume
    },
    {
      title: "Grammar & Vocabulary",
      description: "Receive detailed assessment of your language use, including suggested alternatives and corrections.",
      icon: MessageCircle
    },
    {
      title: "Fluency & Coherence",
      description: "Learn how to improve your speaking flow, organization, and development of ideas.",
      icon: BarChart
    },
    {
      title: "Video Playback",
      description: "Review your speaking session with video playback to observe your body language and presentation.",
      icon: Video
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
            Speaking Practice
          </span>
          <h1 className="text-3xl md:text-4xl font-bold mb-6">Master IELTS Speaking with AI-Powered Practice</h1>
          <p className="text-lg text-gray-600">
            Practice your speaking skills with our advanced AI avatars that provide real-time feedback 
            and help you build confidence for your IELTS Speaking test.
          </p>
        </motion.div>

        <motion.div 
          className="mb-20"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold mb-6">How it works</h2>
              <p className="text-gray-600 mb-8">
                Our AI-powered speaking practice simulates a real IELTS interview experience, allowing you 
                to practice answering questions in a realistic environment. The AI provides instant feedback 
                on your performance, helping you identify areas for improvement.
              </p>
              
              <motion.div 
                className="space-y-6"
                variants={staggerContainer}
                initial="hidden"
                animate="visible"
              >
                <motion.div variants={fadeInUp} className="flex items-start gap-3">
                  <div className="bg-ielts-blue/10 p-2 rounded-full">
                    <span className="h-6 w-6 flex items-center justify-center text-ielts-blue font-bold">1</span>
                  </div>
                  <div>
                    <h3 className="font-bold">Choose your AI interviewer</h3>
                    <p className="text-gray-600">Select from a variety of AI avatars with different accents.</p>
                  </div>
                </motion.div>
                
                <motion.div variants={fadeInUp} className="flex items-start gap-3">
                  <div className="bg-ielts-blue/10 p-2 rounded-full">
                    <span className="h-6 w-6 flex items-center justify-center text-ielts-blue font-bold">2</span>
                  </div>
                  <div>
                    <h3 className="font-bold">Begin your practice session</h3>
                    <p className="text-gray-600">The AI will ask questions following the official IELTS format.</p>
                  </div>
                </motion.div>
                
                <motion.div variants={fadeInUp} className="flex items-start gap-3">
                  <div className="bg-ielts-blue/10 p-2 rounded-full">
                    <span className="h-6 w-6 flex items-center justify-center text-ielts-blue font-bold">3</span>
                  </div>
                  <div>
                    <h3 className="font-bold">Respond to questions</h3>
                    <p className="text-gray-600">Record your answers just like you would in the real test.</p>
                  </div>
                </motion.div>
                
                <motion.div variants={fadeInUp} className="flex items-start gap-3">
                  <div className="bg-ielts-blue/10 p-2 rounded-full">
                    <span className="h-6 w-6 flex items-center justify-center text-ielts-blue font-bold">4</span>
                  </div>
                  <div>
                    <h3 className="font-bold">Get detailed feedback</h3>
                    <p className="text-gray-600">Receive AI-powered assessment and suggestions for improvement.</p>
                  </div>
                </motion.div>
              </motion.div>
            </div>
            
            <motion.div
              className="relative rounded-2xl overflow-hidden shadow-lg"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <img 
                src="https://images.unsplash.com/photo-1516321497487-e288fb19713f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
                alt="IELTS Speaking Practice"
                className="w-full h-auto"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
                <div className="p-8">
                  <Button className="gap-2 bg-ielts-blue hover:bg-ielts-blue/90">
                    <PlayCircle size={18} />
                    Watch Demo
                  </Button>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>

        <motion.div 
          className="mb-20"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
        >
          <h2 className="text-2xl font-bold mb-8 text-center">Choose Your AI Speaking Partner</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {avatars.map((avatar, index) => (
              <motion.div 
                key={index}
                className="bg-white rounded-xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-md transition-shadow"
                whileHover={{ y: -5, transition: { duration: 0.2 } }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.7 + index * 0.1 }}
              >
                <img 
                  src={avatar.image} 
                  alt={avatar.name}
                  className="w-full h-48 object-cover"
                />
                <div className="p-4">
                  <h3 className="font-bold">{avatar.name}</h3>
                  <p className="text-sm text-gray-600">{avatar.role}</p>
                  <div className="flex items-center gap-2 mt-3">
                    <Volume size={16} className="text-ielts-blue" />
                    <span className="text-sm">{avatar.accent} accent</span>
                  </div>
                  <Button variant="outline" className="w-full mt-4">
                    Practice with {avatar.name}
                  </Button>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div 
          className="mb-20"
          variants={fadeIn}
          initial="hidden"
          animate="visible"
          transition={{ delay: 0.8 }}
        >
          <h2 className="text-2xl font-bold mb-8 text-center">IELTS Speaking Test Modules</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {practiceModules.map((module, index) => (
              <motion.div 
                key={index}
                className="bg-white rounded-xl p-6 shadow-sm border border-gray-100"
                whileHover={{ y: -5, transition: { duration: 0.2 } }}
              >
                <div className="flex items-center justify-center h-12 w-12 rounded-full bg-ielts-blue/10 mb-4">
                  <module.icon className="text-ielts-blue" />
                </div>
                <h3 className="font-bold mb-2">{module.title}</h3>
                <p className="text-gray-600 text-sm mb-4">{module.description}</p>
                <div className="flex items-center gap-2 text-sm">
                  <Clock size={16} className="text-ielts-orange" />
                  <span>{module.duration}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div 
          className="mb-20"
          variants={fadeIn}
          initial="hidden"
          animate="visible"
          transition={{ delay: 1.0 }}
        >
          <h2 className="text-2xl font-bold mb-3 text-center">Advanced Feedback System</h2>
          <p className="text-center text-gray-600 max-w-2xl mx-auto mb-10">
            Our AI provides detailed analysis of your speaking performance to help you improve:
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {feedbackFeatures.map((feature, index) => (
              <motion.div 
                key={index}
                className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 hover:border-ielts-blue/30 transition-all"
                whileHover={{ y: -5, transition: { duration: 0.2 } }}
              >
                <div className="flex items-center justify-center h-12 w-12 rounded-full bg-ielts-blue/10 mb-4">
                  <feature.icon className="text-ielts-blue" />
                </div>
                <h3 className="font-bold mb-2">{feature.title}</h3>
                <p className="text-gray-600 text-sm">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div
          className="bg-gradient-to-r from-ielts-blue to-blue-600 rounded-2xl p-8 md:p-12 text-white text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2 }}
        >
          <h2 className="text-2xl md:text-3xl font-bold mb-4">Ready to improve your speaking skills?</h2>
          <p className="mb-8 max-w-2xl mx-auto">
            Start practicing with our AI avatars and get personalized feedback to boost your IELTS Speaking score.
          </p>
          <div className="flex justify-center gap-4 flex-wrap">
            <Link to="/signup">
              <Button size="lg" className="bg-white text-ielts-blue hover:bg-gray-100">
                Start Free Practice
              </Button>
            </Link>
            <Link to="/pricing">
              <Button size="lg" variant="outline" className="text-white border-white hover:bg-white/20">
                View All Plans
              </Button>
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default SpeakingPractice;
