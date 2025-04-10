
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

// Layouts
import MainLayout from "./components/layout/MainLayout";
import DashboardLayout from "./components/layout/DashboardLayout";

// Main Pages
import Index from "./pages/Index";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import NotFound from "./pages/NotFound";
import Pricing from "./pages/Pricing";
import FAQ from "./pages/FAQ";
import About from "./pages/About";

// New Pages
import Products from "./pages/Products";
import Features from "./pages/Features";
import MockExams from "./pages/MockExams";
import SpeakingPractice from "./pages/SpeakingPractice";
import Reading from "./pages/Reading";
import Writing from "./pages/Writing";
import Listening from "./pages/Listening";
import Contact from "./pages/Contact";
import Careers from "./pages/Careers";
import Blog from "./pages/Blog";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsOfService from "./pages/TermsOfService";
import CookiePolicy from "./pages/CookiePolicy";
import GDPR from "./pages/GDPR";

// Dashboard Pages
import Dashboard from "./pages/Dashboard";
import AIELTSBuddy from "./pages/AIELTSBuddy";

// Shared Components
import ComingSoon from "./components/shared/ComingSoon";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <AnimatePresence mode="wait">
          <Routes>
            {/* Main Routes */}
            <Route element={<MainLayout />}>
              <Route path="/" element={<Index />} />
              <Route path="/signin" element={<SignIn />} />
              <Route path="/signup" element={<SignUp />} />
              <Route path="/pricing" element={<Pricing />} />
              <Route path="/faq" element={<FAQ />} />
              <Route path="/about" element={<About />} />
              
              {/* New Routes */}
              <Route path="/products" element={<Products />} />
              <Route path="/features" element={<Features />} />
              <Route path="/mock-exams" element={<MockExams />} />
              <Route path="/speaking-practice" element={<SpeakingPractice />} />
              <Route path="/reading" element={<Reading />} />
              <Route path="/writing" element={<Writing />} />
              <Route path="/listening" element={<Listening />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/careers" element={<Careers />} />
              <Route path="/blog" element={<Blog />} />
              <Route path="/privacy-policy" element={<PrivacyPolicy />} />
              <Route path="/terms-of-service" element={<TermsOfService />} />
              <Route path="/cookie-policy" element={<CookiePolicy />} />
              <Route path="/gdpr" element={<GDPR />} />
              
              {/* Routes using ComingSoon for unfinished features */}
              <Route path="/speaking" element={
                <ComingSoon 
                  title="Speaking Module Coming Soon!" 
                  message="Our interactive speaking practice module is under development. Check back soon for an immersive speaking experience."
                  returnPath="/speaking-practice"
                  returnText="View Speaking Practice"
                />
              } />
              <Route path="/profile" element={<ComingSoon title="User Profile Coming Soon!" />} />
              <Route path="/settings" element={<ComingSoon title="Settings Page Coming Soon!" />} />
            </Route>
            
            {/* Dashboard Routes */}
            <Route element={<DashboardLayout />}>
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/dashboard/buddy" element={<AIELTSBuddy />} />
              {/* Dashboard module routes */}
              <Route path="/dashboard/reading" element={<ComingSoon title="Reading Module Coming Soon!" returnPath="/dashboard" />} />
              <Route path="/dashboard/writing" element={<ComingSoon title="Writing Module Coming Soon!" returnPath="/dashboard" />} />
              <Route path="/dashboard/listening" element={<ComingSoon title="Listening Module Coming Soon!" returnPath="/dashboard" />} />
              <Route path="/dashboard/speaking" element={<ComingSoon title="Speaking Module Coming Soon!" returnPath="/dashboard" />} />
              <Route path="/dashboard/study-plan" element={<ComingSoon title="Study Plan Coming Soon!" returnPath="/dashboard" />} />
              <Route path="/dashboard/vocabulary" element={<ComingSoon title="Vocabulary Module Coming Soon!" returnPath="/dashboard" />} />
              <Route path="/dashboard/profile" element={<ComingSoon title="User Profile Coming Soon!" returnPath="/dashboard" />} />
              <Route path="/dashboard/settings" element={<ComingSoon title="Settings Page Coming Soon!" returnPath="/dashboard" />} />
            </Route>
            
            {/* 404 */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </AnimatePresence>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
