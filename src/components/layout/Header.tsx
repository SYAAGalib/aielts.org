
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="w-full py-4 bg-white/80 backdrop-blur-md fixed top-0 left-0 right-0 z-50 border-b">
      <div className="container flex justify-between items-center">
        <Link to="/" className="flex items-center gap-2">
          <span className="font-heading font-bold text-2xl text-gradient">AIELTS</span>
          <span className="text-xs bg-ielts-orange px-1.5 py-0.5 rounded-md text-white font-medium">.org</span>
        </Link>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          <Link to="/features" className="text-sm font-medium hover:text-ielts-blue transition-colors">Features</Link>
          <Link to="/pricing" className="text-sm font-medium hover:text-ielts-blue transition-colors">Pricing</Link>
          
          {/* IELTS Skills Links */}
          <div className="relative group">
            <span className="text-sm font-medium hover:text-ielts-blue transition-colors cursor-pointer flex items-center">
              IELTS Skills
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="ml-1">
                <path d="m6 9 6 6 6-6"/>
              </svg>
            </span>
            <div className="absolute top-full -left-4 pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
              <div className="bg-white rounded-lg shadow-lg p-2 border w-48">
                <Link to="/reading" className="block px-3 py-2 rounded-md text-sm hover:bg-gray-100 transition-colors">Reading</Link>
                <Link to="/writing" className="block px-3 py-2 rounded-md text-sm hover:bg-gray-100 transition-colors">Writing</Link>
                <Link to="/listening" className="block px-3 py-2 rounded-md text-sm hover:bg-gray-100 transition-colors">Listening</Link>
                <Link to="/speaking-practice" className="block px-3 py-2 rounded-md text-sm hover:bg-gray-100 transition-colors">Speaking</Link>
                <Link to="/mock-exams" className="block px-3 py-2 rounded-md text-sm hover:bg-gray-100 transition-colors">Mock Exams</Link>
              </div>
            </div>
          </div>
          
          <Link to="/about" className="text-sm font-medium hover:text-ielts-blue transition-colors">About</Link>
          <Link to="/contact" className="text-sm font-medium hover:text-ielts-blue transition-colors">Contact</Link>
        </nav>
        
        <div className="hidden md:flex items-center gap-4">
          <Link to="/signin">
            <Button variant="ghost" size="sm">Sign In</Button>
          </Link>
          <Link to="/signup">
            <Button size="sm">Get Started</Button>
          </Link>
        </div>
        
        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-gray-700"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      
      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-[72px] left-0 right-0 bg-white border-b shadow-lg">
          <div className="container flex flex-col py-4">
            <Link 
              to="/features" 
              className="py-3 text-sm font-medium hover:text-ielts-blue transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Features
            </Link>
            <Link 
              to="/pricing" 
              className="py-3 text-sm font-medium hover:text-ielts-blue transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Pricing
            </Link>
            
            {/* IELTS Skills Section */}
            <div className="py-3">
              <p className="text-sm font-medium mb-2">IELTS Skills</p>
              <div className="pl-4 space-y-2">
                <Link 
                  to="/reading" 
                  className="block py-2 text-sm hover:text-ielts-blue transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Reading
                </Link>
                <Link 
                  to="/writing" 
                  className="block py-2 text-sm hover:text-ielts-blue transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Writing
                </Link>
                <Link 
                  to="/listening" 
                  className="block py-2 text-sm hover:text-ielts-blue transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Listening
                </Link>
                <Link 
                  to="/speaking-practice" 
                  className="block py-2 text-sm hover:text-ielts-blue transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Speaking
                </Link>
                <Link 
                  to="/mock-exams" 
                  className="block py-2 text-sm hover:text-ielts-blue transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Mock Exams
                </Link>
              </div>
            </div>
            
            <Link 
              to="/about"
              className="py-3 text-sm font-medium hover:text-ielts-blue transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </Link>
            <Link 
              to="/contact"
              className="py-3 text-sm font-medium hover:text-ielts-blue transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </Link>
            <hr className="my-3" />
            <div className="flex gap-4">
              <Link to="/signin" onClick={() => setIsMenuOpen(false)}>
                <Button variant="ghost" size="sm">Sign In</Button>
              </Link>
              <Link to="/signup" onClick={() => setIsMenuOpen(false)}>
                <Button size="sm">Get Started</Button>
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
