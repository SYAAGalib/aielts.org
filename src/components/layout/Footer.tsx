
import { Link } from 'react-router-dom';
import { Facebook, Instagram, Twitter, Youtube } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-gray-50 pt-12 pb-6">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div>
            <Link to="/" className="flex items-center gap-2 mb-4">
              <span className="font-heading font-bold text-2xl text-gradient">AIELTS</span>
              <span className="text-xs bg-ielts-orange px-1.5 py-0.5 rounded-md text-white font-medium">.org</span>
            </Link>
            <p className="text-sm text-gray-600 mb-4">
              Train smarter. Speak confidently. Score higher.
            </p>
            <div className="flex gap-4">
              <a href="#" className="text-gray-500 hover:text-ielts-blue transition-colors">
                <Facebook size={18} />
              </a>
              <a href="#" className="text-gray-500 hover:text-ielts-blue transition-colors">
                <Twitter size={18} />
              </a>
              <a href="#" className="text-gray-500 hover:text-ielts-blue transition-colors">
                <Instagram size={18} />
              </a>
              <a href="#" className="text-gray-500 hover:text-ielts-blue transition-colors">
                <Youtube size={18} />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="font-heading font-medium text-sm mb-4">Products</h4>
            <ul className="space-y-2">
              <li><Link to="/features" className="text-sm text-gray-600 hover:text-ielts-blue transition-colors">Features</Link></li>
              <li><Link to="/pricing" className="text-sm text-gray-600 hover:text-ielts-blue transition-colors">Pricing</Link></li>
              <li><Link to="/mock-exams" className="text-sm text-gray-600 hover:text-ielts-blue transition-colors">Mock Exams</Link></li>
              <li><Link to="/speaking" className="text-sm text-gray-600 hover:text-ielts-blue transition-colors">Speaking Practice</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-heading font-medium text-sm mb-4">Company</h4>
            <ul className="space-y-2">
              <li><Link to="/about" className="text-sm text-gray-600 hover:text-ielts-blue transition-colors">About Us</Link></li>
              <li><Link to="/contact" className="text-sm text-gray-600 hover:text-ielts-blue transition-colors">Contact</Link></li>
              <li><Link to="/careers" className="text-sm text-gray-600 hover:text-ielts-blue transition-colors">Careers</Link></li>
              <li><Link to="/blog" className="text-sm text-gray-600 hover:text-ielts-blue transition-colors">Blog</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-heading font-medium text-sm mb-4">Legal</h4>
            <ul className="space-y-2">
              <li><Link to="/privacy" className="text-sm text-gray-600 hover:text-ielts-blue transition-colors">Privacy Policy</Link></li>
              <li><Link to="/terms" className="text-sm text-gray-600 hover:text-ielts-blue transition-colors">Terms of Service</Link></li>
              <li><Link to="/cookies" className="text-sm text-gray-600 hover:text-ielts-blue transition-colors">Cookie Policy</Link></li>
              <li><Link to="/gdpr" className="text-sm text-gray-600 hover:text-ielts-blue transition-colors">GDPR</Link></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-200 pt-6">
          <p className="text-xs text-gray-500 text-center">
            © {currentYear} AIELTS.org. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
