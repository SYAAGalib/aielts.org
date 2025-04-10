
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Book, BookOpen, Search, Clock, ArrowRight } from "lucide-react";

const Reading = () => {
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

  // Sample reading passages
  const samplePassages = [
    {
      title: "Academic Reading - Science & Technology",
      description: "Practice with academic texts about scientific research and technological innovations",
      level: "Band 6-7",
      questions: 13,
      time: "20 min",
      image: "https://images.unsplash.com/photo-1507413245164-6160d8298b31?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
    },
    {
      title: "Academic Reading - Social Sciences",
      description: "Engage with passages about sociology, psychology, and human behavior",
      level: "Band 5-6",
      questions: 14,
      time: "20 min",
      image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
    },
    {
      title: "Academic Reading - Environment & Nature",
      description: "Read texts about environmental issues, wildlife conservation, and natural phenomena",
      level: "Band 7-8",
      questions: 13,
      time: "20 min",
      image: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
    },
    {
      title: "General Training Reading - Workplace",
      description: "Practice with texts about workplace communications and job-related documents",
      level: "Band 5-6",
      questions: 12,
      time: "15 min",
      image: "https://images.unsplash.com/photo-1497032628192-86f99bcd76bc?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
    }
  ];

  // Reading question types
  const questionTypes = [
    {
      type: "Multiple Choice",
      description: "Select the correct answer from a set of options",
      icon: Book
    },
    {
      type: "Matching Headings",
      description: "Match headings to paragraphs or sections",
      icon: BookOpen
    },
    {
      type: "True/False/Not Given",
      description: "Decide if statements are true, false, or not mentioned in the text",
      icon: Search
    },
    {
      type: "Gap Filling",
      description: "Complete sentences with words from the text",
      icon: ArrowRight
    }
  ];

  // Reading tips
  const readingTips = [
    "Skim the text quickly before answering questions to get a general idea",
    "Read the questions carefully and identify key words before searching for answers",
    "Pay attention to time management - allocate about 20 minutes per passage",
    "Watch out for synonyms and paraphrasing in both questions and text",
    "For True/False/Not Given, ensure your answer is based only on what's in the text"
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
            IELTS Reading
          </span>
          <h1 className="text-3xl md:text-4xl font-bold mb-6">Master IELTS Reading Skills</h1>
          <p className="text-lg text-gray-600">
            Practice with authentic IELTS reading passages, learn effective strategies, 
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
            <div className="h-12 w-12 rounded-full bg-ielts-blue/10 flex items-center justify-center mb-4">
              <Clock className="text-ielts-blue" />
            </div>
            <h3 className="text-xl font-bold mb-2">Timed Practice</h3>
            <p className="text-gray-600">
              Complete reading exercises under timed conditions to build speed and accuracy.
            </p>
          </motion.div>
          <motion.div 
            className="bg-white rounded-xl p-6 shadow-sm border border-gray-100"
            variants={fadeInUp}
          >
            <div className="h-12 w-12 rounded-full bg-ielts-blue/10 flex items-center justify-center mb-4">
              <Book className="text-ielts-blue" />
            </div>
            <h3 className="text-xl font-bold mb-2">Authentic Materials</h3>
            <p className="text-gray-600">
              Practice with passages that mirror the style and difficulty of the real IELTS test.
            </p>
          </motion.div>
          <motion.div 
            className="bg-white rounded-xl p-6 shadow-sm border border-gray-100"
            variants={fadeInUp}
          >
            <div className="h-12 w-12 rounded-full bg-ielts-blue/10 flex items-center justify-center mb-4">
              <Search className="text-ielts-blue" />
            </div>
            <h3 className="text-xl font-bold mb-2">Detailed Analysis</h3>
            <p className="text-gray-600">
              Get AI-powered feedback on your performance with strategies for improvement.
            </p>
          </motion.div>
        </motion.div>

        {/* Practice Passages */}
        <motion.div 
          className="mb-16"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          <h2 className="text-2xl font-bold mb-8 text-center">Practice Reading Passages</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {samplePassages.map((passage, index) => (
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
                    src={passage.image} 
                    alt={passage.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-5">
                  <h3 className="font-bold text-lg mb-2">{passage.title}</h3>
                  <p className="text-gray-600 text-sm mb-3">{passage.description}</p>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xs bg-ielts-blue/10 text-ielts-blue px-2 py-1 rounded-full">
                      {passage.level}
                    </span>
                    <div className="flex items-center gap-3 text-sm text-gray-500">
                      <span className="flex items-center">
                        <Book size={14} className="mr-1" />
                        {passage.questions} questions
                      </span>
                      <span className="flex items-center">
                        <Clock size={14} className="mr-1" />
                        {passage.time}
                      </span>
                    </div>
                  </div>
                  <Button className="w-full">Start Practice</Button>
                </div>
              </motion.div>
            ))}
          </div>
          <div className="text-center mt-6">
            <Button variant="outline" className="mt-4">View All Reading Tests</Button>
          </div>
        </motion.div>

        {/* Question Types */}
        <motion.div 
          className="mb-16 bg-gray-50 p-8 rounded-xl"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
        >
          <h2 className="text-2xl font-bold mb-8 text-center">Reading Question Types</h2>
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
                <div className="h-10 w-10 rounded-full bg-ielts-blue/10 flex items-center justify-center mb-3">
                  <item.icon className="text-ielts-blue" size={18} />
                </div>
                <h3 className="font-bold mb-2">{item.type}</h3>
                <p className="text-sm text-gray-600">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Reading Tips */}
        <motion.div 
          className="mb-16"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
        >
          <h2 className="text-2xl font-bold mb-6 text-center">Top Reading Tips</h2>
          <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm">
            <ul className="space-y-4">
              {readingTips.map((tip, index) => (
                <motion.li 
                  key={index}
                  className="flex items-start gap-3"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: 0.9 + index * 0.1 }}
                >
                  <div className="bg-ielts-blue/10 p-2 rounded-full flex-shrink-0">
                    <span className="h-5 w-5 flex items-center justify-center text-ielts-blue font-bold text-sm">
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
          className="bg-gradient-to-r from-ielts-blue to-blue-600 rounded-2xl p-8 md:p-12 text-white text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.0 }}
        >
          <h2 className="text-2xl md:text-3xl font-bold mb-4">Ready to improve your reading skills?</h2>
          <p className="mb-8 max-w-2xl mx-auto">
            Start practicing with our IELTS reading exercises and receive personalized feedback to boost your band score.
          </p>
          <div className="flex justify-center gap-4 flex-wrap">
            <Link to="/signup">
              <Button size="lg" className="bg-white text-ielts-blue hover:bg-gray-100">
                Start Free Practice
              </Button>
            </Link>
            <Link to="/dashboard/reading">
              <Button size="lg" variant="outline" className="text-white border-white hover:bg-white/20">
                Go to Reading Dashboard
              </Button>
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Reading;
