
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Search,
  Calendar,
  User,
  ChevronRight,
  ArrowRight
} from "lucide-react";
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

const BlogPage = () => {
  const featuredPost = {
    id: 1,
    title: "10 Essential Tips to Boost Your IELTS Speaking Score",
    excerpt: "Discover key strategies to improve your fluency, pronunciation, and confidence during the IELTS speaking test.",
    image: "https://images.unsplash.com/photo-1543269865-cbf427effbad?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    date: "April 10, 2023",
    author: "Sarah Johnson",
    category: "Speaking",
    readTime: "8 min read"
  };
  
  const recentPosts = [
    {
      id: 2,
      title: "How to Master IELTS Task 2 Essay Writing",
      excerpt: "Learn the structure, vocabulary and techniques to write high-scoring IELTS essays.",
      image: "https://images.unsplash.com/photo-1455390582262-044cdead277a?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
      date: "April 5, 2023",
      author: "Michael Chen",
      category: "Writing",
      readTime: "6 min read"
    },
    {
      id: 3,
      title: "Understanding IELTS Listening: Section by Section",
      excerpt: "A comprehensive breakdown of the four listening sections and strategies for each.",
      image: "https://images.unsplash.com/photo-1557672172-298e090bd0f1?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
      date: "March 28, 2023",
      author: "Priya Patel",
      category: "Listening",
      readTime: "7 min read"
    },
    {
      id: 4,
      title: "IELTS Reading: Skimming and Scanning Techniques",
      excerpt: "Master the art of efficient reading to maximize your score in the limited time available.",
      image: "https://images.unsplash.com/photo-1506784365847-bbad939e9335?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
      date: "March 22, 2023",
      author: "David Wilson",
      category: "Reading",
      readTime: "5 min read"
    }
  ];
  
  const categories = [
    "Speaking", "Writing", "Reading", "Listening", 
    "Vocabulary", "Grammar", "Exam Preparation", "Success Stories"
  ];
  
  const popularTags = [
    "IELTS Tips", "Band 7+", "Academic", "General Training", 
    "Time Management", "Practice Tests", "Error Correction", "Pronunciation"
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
            IELTS Blog
          </span>
          <h1 className="text-3xl md:text-4xl font-bold mb-6">Tips, Strategies & Success Stories</h1>
          <p className="text-lg text-gray-600">
            Expert advice, practical strategies, and the latest insights to help you excel in your IELTS exam.
          </p>
        </motion.div>

        <div className="flex flex-col lg:flex-row gap-8">
          <div className="lg:w-3/4">
            <motion.div 
              className="mb-12"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8 }}
            >
              <div className="bg-white rounded-2xl overflow-hidden shadow-md">
                <div className="relative h-80">
                  <img 
                    src={featuredPost.image} 
                    alt={featuredPost.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-4 left-4 bg-ielts-blue/90 text-white px-3 py-1 text-sm font-medium rounded-full">
                    Featured Post
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex flex-wrap gap-4 mb-3 text-sm text-gray-600">
                    <div className="flex items-center gap-1">
                      <Calendar size={14} />
                      <span>{featuredPost.date}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <User size={14} />
                      <span>{featuredPost.author}</span>
                    </div>
                    <span className="text-ielts-blue font-medium">{featuredPost.category}</span>
                    <span>{featuredPost.readTime}</span>
                  </div>
                  <h2 className="text-2xl font-bold mb-3">
                    <Link to="#" className="hover:text-ielts-blue">
                      {featuredPost.title}
                    </Link>
                  </h2>
                  <p className="text-gray-600 mb-6">{featuredPost.excerpt}</p>
                  <Button className="gap-2 bg-ielts-blue hover:bg-ielts-blue/90">
                    Read Full Article <ArrowRight size={16} />
                  </Button>
                </div>
              </div>
            </motion.div>

            <motion.div
              className="mb-12"
              variants={staggerContainer}
              initial="hidden"
              animate="visible"
            >
              <h2 className="text-2xl font-bold mb-6">Recent Articles</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {recentPosts.map((post, index) => (
                  <motion.div 
                    key={post.id}
                    className="bg-white rounded-xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-md transition-shadow"
                    variants={fadeInUp}
                  >
                    <Link to="#" className="block group">
                      <div className="h-48 overflow-hidden">
                        <img 
                          src={post.image} 
                          alt={post.title}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                      </div>
                      <div className="p-5">
                        <div className="flex justify-between items-center mb-3">
                          <span className="text-ielts-blue text-sm font-medium">{post.category}</span>
                          <span className="text-gray-500 text-xs">{post.readTime}</span>
                        </div>
                        <h3 className="font-bold mb-2 group-hover:text-ielts-blue transition-colors">
                          {post.title}
                        </h3>
                        <p className="text-gray-600 text-sm line-clamp-3 mb-4">{post.excerpt}</p>
                        <div className="flex items-center gap-2 text-xs text-gray-500">
                          <Calendar size={12} />
                          <span>{post.date}</span>
                        </div>
                      </div>
                    </Link>
                  </motion.div>
                ))}
              </div>
              <div className="mt-8 text-center">
                <Button variant="outline" className="gap-2">
                  View All Articles <ChevronRight size={16} />
                </Button>
              </div>
            </motion.div>

            <motion.div 
              className="bg-gradient-to-r from-ielts-blue to-blue-600 rounded-xl p-6 md:p-8 text-white"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.0 }}
            >
              <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                <div>
                  <h2 className="text-xl md:text-2xl font-bold mb-2">Subscribe to our Newsletter</h2>
                  <p className="text-white/80">Get the latest IELTS tips, strategies, and updates delivered to your inbox.</p>
                </div>
                <div className="w-full md:w-auto flex gap-2">
                  <Input 
                    placeholder="Enter your email" 
                    className="bg-white/20 border-white/40 text-white placeholder:text-white/60 focus:border-white"
                  />
                  <Button className="bg-white text-ielts-blue hover:bg-gray-100 whitespace-nowrap">
                    Subscribe
                  </Button>
                </div>
              </div>
            </motion.div>
          </div>
          
          <motion.div 
            className="lg:w-1/4"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 mb-8">
              <div className="relative mb-6">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
                <Input
                  placeholder="Search articles..."
                  className="pl-10"
                />
              </div>
              
              <div className="mb-8">
                <h3 className="font-bold mb-4">Categories</h3>
                <div className="space-y-2">
                  {categories.map((category, index) => (
                    <Link 
                      key={index} 
                      to="#"
                      className="flex items-center justify-between py-2 px-3 rounded-lg hover:bg-gray-50 group"
                    >
                      <span className="group-hover:text-ielts-blue">{category}</span>
                      <ChevronRight size={16} className="text-gray-400 group-hover:text-ielts-blue" />
                    </Link>
                  ))}
                </div>
              </div>
              
              <div className="mb-8">
                <h3 className="font-bold mb-4">Popular Tags</h3>
                <div className="flex flex-wrap gap-2">
                  {popularTags.map((tag, index) => (
                    <Link 
                      key={index} 
                      to="#" 
                      className="px-3 py-1 bg-gray-100 text-gray-800 rounded-full text-sm hover:bg-ielts-blue/10 hover:text-ielts-blue"
                    >
                      {tag}
                    </Link>
                  ))}
                </div>
              </div>
              
              <div>
                <h3 className="font-bold mb-4">Need Help?</h3>
                <div className="bg-ielts-blue/10 rounded-lg p-4">
                  <p className="text-gray-600 mb-4">
                    Have questions about IELTS preparation or our platform?
                  </p>
                  <Button className="w-full bg-ielts-blue hover:bg-ielts-blue/90">
                    Contact Support
                  </Button>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default BlogPage;
