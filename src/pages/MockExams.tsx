
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Clock, BarChart, Calendar, CheckSquare, AlertCircle, Award } from "lucide-react";
import { Link } from "react-router-dom";

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

const MockExams = () => {
  const upcomingExams = [
    {
      id: 1,
      name: "Complete Mock Test",
      date: "April 15, 2023",
      time: "10:00 AM - 1:00 PM",
      slots: "28/50 slots filled"
    },
    {
      id: 2,
      name: "Academic Writing Only",
      date: "April 18, 2023",
      time: "2:00 PM - 4:00 PM",
      slots: "15/30 slots filled"
    },
    {
      id: 3,
      name: "General Training Complete",
      date: "April 20, 2023",
      time: "9:00 AM - 12:00 PM",
      slots: "32/50 slots filled"
    }
  ];

  const examTypes = [
    {
      title: "Academic Module",
      description: "For those applying to study at undergraduate or postgraduate level, or seeking professional registration.",
      features: [
        "Reading - 60 minutes",
        "Writing - 60 minutes",
        "Listening - 30 minutes",
        "Speaking - 11-14 minutes"
      ]
    },
    {
      title: "General Training Module",
      description: "For those migrating to Australia, Canada, New Zealand or the UK, or applying for secondary education, training programs or work experience.",
      features: [
        "Reading - 60 minutes",
        "Writing - 60 minutes",
        "Listening - 30 minutes",
        "Speaking - 11-14 minutes"
      ]
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
            Mock Exams
          </span>
          <h1 className="text-3xl md:text-4xl font-bold mb-6">Practice under authentic test conditions</h1>
          <p className="text-lg text-gray-600">
            Our simulated IELTS mock exams replicate the real test environment to help you prepare 
            effectively and perform with confidence on exam day.
          </p>
        </motion.div>

        <motion.div 
          className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16"
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
        >
          <motion.div 
            className="bg-white p-6 rounded-xl shadow-sm border border-gray-100"
            variants={fadeInUp}
          >
            <div className="p-3 bg-ielts-blue/10 rounded-full w-12 h-12 flex items-center justify-center mb-4">
              <Clock className="text-ielts-blue" />
            </div>
            <h3 className="text-xl font-bold mb-2">Timed Conditions</h3>
            <p className="text-gray-600">
              Experience the time pressure of the real exam with our strictly timed mock tests that replicate actual IELTS timing.
            </p>
          </motion.div>

          <motion.div 
            className="bg-white p-6 rounded-xl shadow-sm border border-gray-100"
            variants={fadeInUp}
          >
            <div className="p-3 bg-ielts-blue/10 rounded-full w-12 h-12 flex items-center justify-center mb-4">
              <CheckSquare className="text-ielts-blue" />
            </div>
            <h3 className="text-xl font-bold mb-2">Authentic Format</h3>
            <p className="text-gray-600">
              Our mock tests follow the exact same format as the official IELTS exam, with questions of comparable difficulty.
            </p>
          </motion.div>

          <motion.div 
            className="bg-white p-6 rounded-xl shadow-sm border border-gray-100"
            variants={fadeInUp}
          >
            <div className="p-3 bg-ielts-blue/10 rounded-full w-12 h-12 flex items-center justify-center mb-4">
              <BarChart className="text-ielts-blue" />
            </div>
            <h3 className="text-xl font-bold mb-2">Detailed Results</h3>
            <p className="text-gray-600">
              Receive a comprehensive analysis of your performance with predicted band scores and areas for improvement.
            </p>
          </motion.div>
        </motion.div>

        <motion.div 
          className="bg-gray-50 rounded-2xl p-8 mb-16"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          <div className="mb-8">
            <h2 className="text-2xl font-bold mb-2">Available Exam Types</h2>
            <p className="text-gray-600">Choose the mock exam that matches your IELTS test requirement:</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {examTypes.map((type, index) => (
              <motion.div 
                key={index} 
                className="bg-white p-6 rounded-xl shadow-sm border border-gray-100"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 + index * 0.2 }}
              >
                <h3 className="text-xl font-bold mb-2">{type.title}</h3>
                <p className="text-gray-600 mb-4">{type.description}</p>
                
                <h4 className="font-semibold mb-2">Exam Components:</h4>
                <ul className="space-y-2 mb-6">
                  {type.features.map((feature, i) => (
                    <li key={i} className="flex items-center gap-2 text-sm">
                      <div className="h-1.5 w-1.5 rounded-full bg-ielts-blue"></div>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <Button className="w-full bg-ielts-blue hover:bg-ielts-blue/90">Take Mock Test</Button>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div 
          className="mb-16"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
        >
          <div className="mb-8">
            <h2 className="text-2xl font-bold mb-2">Upcoming Live Mock Exams</h2>
            <p className="text-gray-600">
              Join our scheduled proctored mock exams for the most realistic test experience:
            </p>
          </div>
          
          <div className="space-y-4">
            {upcomingExams.map((exam) => (
              <motion.div 
                key={exam.id}
                className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 flex flex-col md:flex-row md:items-center justify-between gap-4"
                whileHover={{ y: -5, transition: { duration: 0.2 } }}
              >
                <div>
                  <h3 className="text-xl font-bold mb-1">{exam.name}</h3>
                  <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-4 text-sm text-gray-600">
                    <div className="flex items-center gap-1">
                      <Calendar size={16} />
                      <span>{exam.date}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock size={16} />
                      <span>{exam.time}</span>
                    </div>
                    <div className="flex items-center gap-1 text-ielts-orange">
                      <AlertCircle size={16} />
                      <span>{exam.slots}</span>
                    </div>
                  </div>
                </div>
                <Button className="bg-ielts-blue hover:bg-ielts-blue/90 whitespace-nowrap">
                  Book Seat
                </Button>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div 
          className="bg-gradient-to-r from-ielts-blue to-blue-600 rounded-2xl p-8 md:p-12 text-white"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.0 }}
        >
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div>
              <div className="bg-white/20 p-4 rounded-full w-20 h-20 flex items-center justify-center mb-6 mx-auto md:mx-0">
                <Award className="w-10 h-10" />
              </div>
            </div>
            <div>
              <h2 className="text-2xl md:text-3xl font-bold mb-4 text-center md:text-left">Ready to test your IELTS skills?</h2>
              <p className="mb-6 text-white/80 text-center md:text-left">
                Take a free diagnostic test to assess your current level and get a personalized study plan.
              </p>
              <div className="flex justify-center md:justify-start gap-4">
                <Link to="/signup">
                  <Button className="bg-white text-ielts-blue hover:bg-gray-100">
                    Start Free Test
                  </Button>
                </Link>
                <Link to="/pricing">
                  <Button variant="outline" className="text-white border-white hover:bg-white/20">
                    View Plans
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default MockExams;
