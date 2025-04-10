import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { 
  Briefcase, 
  Globe, 
  Heart, 
  Zap, 
  Award,
  DollarSign,
  Book,
  Coffee,
  Users,
  Clock,
  Send,
  MapPin
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
      staggerChildren: 0.2
    }
  }
};

const CareersPage = () => {
  const coreValues = [
    {
      icon: Heart,
      title: "Passion for Education",
      description: "We believe in the transformative power of education and are committed to helping students achieve their goals."
    },
    {
      icon: Globe,
      title: "Global Mindset",
      description: "We embrace diversity and build solutions that work for students from all cultural backgrounds."
    },
    {
      icon: Zap,
      title: "Innovation",
      description: "We continuously explore new technologies and approaches to improve language learning."
    },
    {
      icon: Users,
      title: "Collaboration",
      description: "We work together across disciplines to create the best solutions for our users."
    }
  ];

  const benefits = [
    {
      icon: DollarSign,
      title: "Competitive Salary",
      description: "We offer market-leading compensation packages based on your skills and experience."
    },
    {
      icon: Book,
      title: "Learning Budget",
      description: "$1,500 annual budget for courses, books, and conferences to support your professional growth."
    },
    {
      icon: Coffee,
      title: "Flexible Work",
      description: "Remote-first workplace with flexible hours and 4-day work weeks in summer."
    },
    {
      icon: Award,
      title: "Career Growth",
      description: "Clear career progression paths and regular performance reviews and promotions."
    },
    {
      icon: Clock,
      title: "Time Off",
      description: "Unlimited PTO policy, generous parental leave, and paid company holidays."
    },
    {
      icon: Heart,
      title: "Health & Wellness",
      description: "Comprehensive health insurance, mental health support, and wellness programs."
    }
  ];

  const openPositions = [
    {
      title: "AI Engineer",
      department: "Engineering",
      location: "Remote",
      type: "Full-time"
    },
    {
      title: "IELTS Content Developer",
      department: "Education",
      location: "Cambridge, MA (Hybrid)",
      type: "Full-time"
    },
    {
      title: "UX/UI Designer",
      department: "Product",
      location: "Remote",
      type: "Full-time"
    },
    {
      title: "Front-end Developer",
      department: "Engineering",
      location: "Remote",
      type: "Full-time"
    },
    {
      title: "Customer Success Manager",
      department: "Operations",
      location: "Remote",
      type: "Full-time"
    },
    {
      title: "Digital Marketing Specialist",
      department: "Marketing",
      location: "Remote",
      type: "Full-time"
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
            Join Our Team
          </span>
          <h1 className="text-3xl md:text-4xl font-bold mb-6">Work with us to transform IELTS preparation</h1>
          <p className="text-lg text-gray-600">
            We're building the future of language assessment preparation at AIELTS. 
            Join our team of educators, technologists, and innovators making a global impact.
          </p>
        </motion.div>

        <motion.div
          className="relative rounded-2xl overflow-hidden mb-20 h-[400px]"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <img 
            src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
            alt="AIELTS Team"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-ielts-blue/80 to-transparent flex items-center">
            <div className="p-8 md:p-12 lg:p-16 max-w-2xl">
              <h2 className="text-3xl font-bold text-white mb-4">Join a mission-driven team</h2>
              <p className="text-white/90 mb-8 text-lg">
                We're helping millions of students around the world achieve their dreams through successful IELTS preparation. 
                Our culture values impact, innovation, and work-life balance.
              </p>
              <Button size="lg" className="bg-white text-ielts-blue hover:bg-gray-100">
                View Open Positions
              </Button>
            </div>
          </div>
        </motion.div>

        <motion.div 
          className="mb-20"
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
        >
          <h2 className="text-2xl font-bold mb-10 text-center">Our Core Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {coreValues.map((value, index) => (
              <motion.div 
                key={index} 
                className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 hover:border-ielts-blue/30 transition-all hover:shadow-md"
                variants={fadeInUp}
              >
                <div className="bg-ielts-blue/10 p-3 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                  <value.icon className="text-ielts-blue" size={20} />
                </div>
                <h3 className="text-xl font-bold mb-2">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div 
          className="mb-20"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          <div className="text-center max-w-3xl mx-auto mb-10">
            <h2 className="text-2xl font-bold mb-4">Benefits & Perks</h2>
            <p className="text-gray-600">
              We take care of our team with competitive compensation and benefits that support your career growth and wellbeing.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div 
                key={index} 
                className="bg-white rounded-xl p-6 shadow-sm border border-gray-100"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 + index * 0.1 }}
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="bg-ielts-blue/10 p-2 rounded-full">
                    <benefit.icon className="text-ielts-blue" size={18} />
                  </div>
                  <h3 className="font-bold">{benefit.title}</h3>
                </div>
                <p className="text-gray-600">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div 
          className="mb-20"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
        >
          <h2 className="text-2xl font-bold mb-10 text-center">Open Positions</h2>
          <div className="space-y-4">
            {openPositions.map((position, index) => (
              <motion.div 
                key={index} 
                className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 hover:border-ielts-blue/30 transition-all hover:shadow-md flex flex-col sm:flex-row justify-between gap-6 items-center"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.0 + index * 0.1 }}
                whileHover={{ y: -5, transition: { duration: 0.2 } }}
              >
                <div>
                  <h3 className="font-bold text-lg">{position.title}</h3>
                  <div className="flex flex-wrap gap-4 mt-2">
                    <div className="flex items-center gap-1 text-sm">
                      <Briefcase size={14} className="text-ielts-blue" />
                      <span>{position.department}</span>
                    </div>
                    <div className="flex items-center gap-1 text-sm">
                      <MapPin size={14} className="text-ielts-blue" />
                      <span>{position.location}</span>
                    </div>
                    <div className="flex items-center gap-1 text-sm">
                      <Clock size={14} className="text-ielts-blue" />
                      <span>{position.type}</span>
                    </div>
                  </div>
                </div>
                <Button className="whitespace-nowrap bg-ielts-blue hover:bg-ielts-blue/90">
                  View & Apply
                </Button>
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
          <h2 className="text-2xl md:text-3xl font-bold mb-4">Don't see the right position?</h2>
          <p className="mb-8 max-w-2xl mx-auto">
            We're always looking for talented individuals who are passionate about education and technology. 
            Send us your resume and we'll keep you in mind for future opportunities.
          </p>
          <Button size="lg" className="gap-2 bg-white text-ielts-blue hover:bg-gray-100">
            <Send size={18} />
            Submit Your Resume
          </Button>
        </motion.div>
      </div>
    </div>
  );
};

export default CareersPage;
