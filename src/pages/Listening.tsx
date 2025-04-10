
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Headphones, PlayCircle, Mic, Clock, FileText, Volume } from "lucide-react";

const Listening = () => {
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

  // Sample listening tests
  const listeningTests = [
    {
      title: "Section 1: Everyday Conversation",
      description: "Practice with a dialogue between two people discussing accommodation arrangements",
      level: "Band 5-6",
      questions: 10,
      time: "15 min",
      image: "https://images.unsplash.com/photo-1543269865-cbf427effbad?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
    },
    {
      title: "Section 2: Public Announcement",
      description: "Listen to a monologue about community facilities and services",
      level: "Band 6-7",
      questions: 10,
      time: "15 min",
      image: "https://images.unsplash.com/photo-1517457373958-b7bdd4587205?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
    },
    {
      title: "Section 3: Academic Discussion",
      description: "Follow a conversation between students discussing an academic project",
      level: "Band 7-8",
      questions: 10,
      time: "15 min",
      image: "https://images.unsplash.com/photo-1606761568499-6d2451b23c66?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
    },
    {
      title: "Section 4: Academic Lecture",
      description: "Listen to an academic lecture on an educational or training topic",
      level: "Band 7-9",
      questions: 10,
      time: "15 min",
      image: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
    }
  ];

  // Question types
  const questionTypes = [
    {
      type: "Multiple Choice",
      description: "Select the correct answer from given options based on what you hear",
      icon: FileText
    },
    {
      type: "Form Completion",
      description: "Fill in gaps in a form or notes using information from the audio",
      icon: Headphones
    },
    {
      type: "Matching",
      description: "Match items from a list to statements or questions based on the audio",
      icon: Volume
    },
    {
      type: "Labeling",
      description: "Label a diagram, map, or plan according to the audio information",
      icon: Mic
    }
  ];

  // Listening tips
  const listeningTips = [
    "Read the questions before the audio starts playing to know what to listen for",
    "Pay attention to signpost words that indicate transitions to new topics",
    "Focus on the speaker's tone and emphasis for clues about important information",
    "Write answers exactly as you hear them, paying attention to spelling",
    "If you miss an answer, move on quickly - don't let it distract you from the next questions",
    "Use the time at the end to check your answers for spelling and grammar"
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
          <span className="inline-block py-1 px-3 bg-green-500/10 text-green-500 rounded-full text-sm font-medium mb-4">
            IELTS Listening
          </span>
          <h1 className="text-3xl md:text-4xl font-bold mb-6">Master IELTS Listening Skills</h1>
          <p className="text-lg text-gray-600">
            Practice with authentic IELTS listening tests, learn effective strategies, 
            and improve your comprehension skills to achieve your target band score.
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
            <div className="h-12 w-12 rounded-full bg-green-500/10 flex items-center justify-center mb-4">
              <Headphones className="text-green-500" />
            </div>
            <h3 className="text-xl font-bold mb-2">Authentic Audio</h3>
            <p className="text-gray-600">
              Practice with recordings that match the accent variety and difficulty of the real test.
            </p>
          </motion.div>
          <motion.div 
            className="bg-white rounded-xl p-6 shadow-sm border border-gray-100"
            variants={fadeInUp}
          >
            <div className="h-12 w-12 rounded-full bg-green-500/10 flex items-center justify-center mb-4">
              <PlayCircle className="text-green-500" />
            </div>
            <h3 className="text-xl font-bold mb-2">Section by Section</h3>
            <p className="text-gray-600">
              Practice each part of the test individually to build skills progressively.
            </p>
          </motion.div>
          <motion.div 
            className="bg-white rounded-xl p-6 shadow-sm border border-gray-100"
            variants={fadeInUp}
          >
            <div className="h-12 w-12 rounded-full bg-green-500/10 flex items-center justify-center mb-4">
              <Clock className="text-green-500" />
            </div>
            <h3 className="text-xl font-bold mb-2">Timed Practice</h3>
            <p className="text-gray-600">
              Build your skills under the same time constraints as the actual IELTS test.
            </p>
          </motion.div>
        </motion.div>

        {/* Listening Tests */}
        <motion.div 
          className="mb-16"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          <h2 className="text-2xl font-bold mb-8 text-center">Practice Listening Tests</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {listeningTests.map((test, index) => (
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
                    src={test.image} 
                    alt={test.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-5">
                  <h3 className="font-bold text-lg mb-2">{test.title}</h3>
                  <p className="text-gray-600 text-sm mb-3">{test.description}</p>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xs bg-green-500/10 text-green-500 px-2 py-1 rounded-full">
                      {test.level}
                    </span>
                    <div className="flex items-center gap-3 text-sm text-gray-500">
                      <span className="flex items-center">
                        <FileText size={14} className="mr-1" />
                        {test.questions} questions
                      </span>
                      <span className="flex items-center">
                        <Clock size={14} className="mr-1" />
                        {test.time}
                      </span>
                    </div>
                  </div>
                  <Button className="w-full">Start Test</Button>
                </div>
              </motion.div>
            ))}
          </div>
          <div className="text-center mt-6">
            <Button variant="outline" className="mt-4">View All Listening Tests</Button>
          </div>
        </motion.div>

        {/* Question Types */}
        <motion.div 
          className="mb-16 bg-gray-50 p-8 rounded-xl"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
        >
          <h2 className="text-2xl font-bold mb-8 text-center">Question Types</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {questionTypes.map((item, index) => (
              <motion.div 
                key={index}
                className="bg-white p-5 rounded-lg shadow-sm"
                whileHover={{ y: -5, transition: { duration: 0.2 } }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.7 + index * 0.1 }}
              >
                <div className="h-10 w-10 rounded-full bg-green-500/10 flex items-center justify-center mb-3">
                  <item.icon className="text-green-500" size={18} />
                </div>
                <h3 className="font-bold mb-2">{item.type}</h3>
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
          <h2 className="text-2xl font-bold mb-6 text-center">Top Listening Tips</h2>
          <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm">
            <ul className="space-y-4">
              {listeningTips.map((tip, index) => (
                <motion.li 
                  key={index}
                  className="flex items-start gap-3"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: 0.9 + index * 0.1 }}
                >
                  <div className="bg-green-500/10 p-2 rounded-full flex-shrink-0">
                    <span className="h-5 w-5 flex items-center justify-center text-green-500 font-bold text-sm">
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
          className="bg-gradient-to-r from-green-500 to-green-600 rounded-2xl p-8 md:p-12 text-white text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.0 }}
        >
          <h2 className="text-2xl md:text-3xl font-bold mb-4">Ready to improve your listening skills?</h2>
          <p className="mb-8 max-w-2xl mx-auto">
            Start practicing with our IELTS listening tests and receive instant feedback to boost your band score.
          </p>
          <div className="flex justify-center gap-4 flex-wrap">
            <Link to="/signup">
              <Button size="lg" className="bg-white text-green-500 hover:bg-gray-100">
                Start Free Practice
              </Button>
            </Link>
            <Link to="/dashboard/listening">
              <Button size="lg" variant="outline" className="text-white border-white hover:bg-white/20">
                Go to Listening Dashboard
              </Button>
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Listening;
