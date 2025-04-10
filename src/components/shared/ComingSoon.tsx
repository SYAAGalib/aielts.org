
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Construction } from "lucide-react";

interface ComingSoonProps {
  title?: string;
  message?: string;
  returnPath?: string;
  returnText?: string;
}

const ComingSoon = ({
  title = "Coming Soon!",
  message = "We're working hard to bring you this feature. Please check back later for updates!",
  returnPath = "/",
  returnText = "Return to Home"
}: ComingSoonProps) => {
  return (
    <div className="min-h-[70vh] flex items-center justify-center bg-gray-50">
      <motion.div 
        className="text-center max-w-lg px-6"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="flex justify-center mb-6">
          <div className="bg-ielts-blue/10 p-4 rounded-full">
            <Construction className="h-12 w-12 text-ielts-blue" />
          </div>
        </div>
        <h1 className="text-3xl md:text-4xl font-bold mb-4">{title}</h1>
        <p className="text-lg text-gray-600 mb-6">
          {message}
        </p>
        <Link to={returnPath}>
          <Button size="lg">
            {returnText}
          </Button>
        </Link>
      </motion.div>
    </div>
  );
};

export default ComingSoon;
