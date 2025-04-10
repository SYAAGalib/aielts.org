
import { useState } from 'react';
import { Outlet, Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { 
  Book, 
  MessageSquare, 
  Headphones, 
  Mic, 
  Calendar, 
  BookOpen, 
  Layers, 
  User, 
  Settings, 
  LogOut,
  Menu,
  X
} from 'lucide-react';

const DashboardLayout = () => {
  const [isMobileSidebarOpen, setIsMobileSidebarOpen] = useState(false);
  
  const sidebarLinks = [
    { icon: Layers, text: 'Dashboard', path: '/dashboard' },
    { icon: Book, text: 'Reading', path: '/dashboard/reading' },
    { icon: MessageSquare, text: 'Writing', path: '/dashboard/writing' },
    { icon: Headphones, text: 'Listening', path: '/dashboard/listening' },
    { icon: Mic, text: 'Speaking', path: '/dashboard/speaking' },
    { icon: Calendar, text: 'Study Plan', path: '/dashboard/study-plan' },
    { icon: BookOpen, text: 'Vocabulary', path: '/dashboard/vocabulary' },
  ];

  const accountLinks = [
    { icon: User, text: 'Profile', path: '/dashboard/profile' },
    { icon: Settings, text: 'Settings', path: '/dashboard/settings' },
  ];

  return (
    <div className="min-h-screen flex flex-col md:flex-row">
      {/* Mobile Sidebar Toggle */}
      <button
        className="md:hidden fixed top-4 left-4 z-50 p-2 bg-white rounded-md shadow-md"
        onClick={() => setIsMobileSidebarOpen(!isMobileSidebarOpen)}
      >
        {isMobileSidebarOpen ? <X size={20} /> : <Menu size={20} />}
      </button>

      {/* Sidebar for desktop and mobile */}
      <div 
        className={`
          bg-white border-r w-72 fixed inset-y-0 left-0 z-40
          transform transition-transform duration-200 ease-in-out
          md:translate-x-0 ${isMobileSidebarOpen ? 'translate-x-0' : '-translate-x-full'}
        `}
      >
        <div className="h-full flex flex-col">
          {/* Logo */}
          <div className="p-4 border-b">
            <Link to="/dashboard" className="flex items-center gap-2">
              <span className="font-heading font-bold text-2xl text-gradient">AIELTS</span>
              <span className="text-xs bg-ielts-orange px-1.5 py-0.5 rounded-md text-white font-medium">.org</span>
            </Link>
          </div>

          {/* Nav Links */}
          <div className="flex-1 overflow-y-auto py-4 px-3">
            <nav className="space-y-1">
              {sidebarLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className="flex items-center gap-3 px-3 py-2 text-sm font-medium rounded-md hover:bg-gray-100 transition-colors"
                >
                  <link.icon size={18} />
                  <span>{link.text}</span>
                </Link>
              ))}
              
              <div className="pt-4 mt-4 border-t">
                <div className="px-3 mb-2 text-xs font-semibold text-gray-500">Account</div>
                {accountLinks.map((link) => (
                  <Link
                    key={link.path}
                    to={link.path}
                    className="flex items-center gap-3 px-3 py-2 text-sm font-medium rounded-md hover:bg-gray-100 transition-colors"
                  >
                    <link.icon size={18} />
                    <span>{link.text}</span>
                  </Link>
                ))}
              </div>
            </nav>
          </div>

          {/* Logout */}
          <div className="p-4 border-t">
            <Link to="/">
              <Button variant="outline" className="w-full justify-start gap-2">
                <LogOut size={18} />
                <span>Logout</span>
              </Button>
            </Link>
          </div>

          {/* IELTS Buddy */}
          <div className="p-4 border-t">
            <div className="bg-gradient-to-r from-ielts-blue to-blue-400 text-white p-4 rounded-lg">
              <h4 className="font-medium mb-2 flex items-center">
                <MessageSquare size={16} className="mr-2" /> IELTS Buddy
              </h4>
              <p className="text-xs mb-3">Need help with your IELTS preparation?</p>
              <Link to="/dashboard/buddy">
                <Button variant="secondary" size="sm" className="w-full">Chat with Buddy</Button>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 md:ml-72">
        <Outlet />
      </div>

      {/* Mobile overlay */}
      {isMobileSidebarOpen && (
        <div 
          className="md:hidden fixed inset-0 bg-black/20 z-30"
          onClick={() => setIsMobileSidebarOpen(false)}
        ></div>
      )}
    </div>
  );
};

export default DashboardLayout;
