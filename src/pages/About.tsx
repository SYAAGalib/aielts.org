
import { CheckCircle } from 'lucide-react';

const AboutPage = () => {
  const teamMembers = [
    {
      name: "Sarah Johnson",
      role: "Founder & CEO",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330",
      bio: "Former IELTS examiner with 15+ years of experience in language education."
    },
    {
      name: "Michael Chen",
      role: "Chief Technology Officer",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d",
      bio: "AI specialist with expertise in educational technology and natural language processing."
    },
    {
      name: "Priya Patel",
      role: "Head of Content",
      image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e",
      bio: "IELTS trainer and curriculum developer with over 10 years in test preparation."
    },
    {
      name: "David Wilson",
      role: "Product Manager",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e",
      bio: "EdTech product expert focused on creating personalized learning experiences."
    }
  ];

  return (
    <div className="py-16 md:py-24">
      <div className="container">
        {/* About Section */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block py-1 px-3 bg-ielts-blue/10 text-ielts-blue rounded-full text-sm font-medium mb-4">
            About Us
          </span>
          <h1 className="text-3xl md:text-4xl font-bold mb-6">Our mission is to revolutionize IELTS preparation</h1>
          <p className="text-lg text-gray-600 mb-8">
            At AIELTS.org, we're combining cutting-edge AI technology with expert knowledge of the IELTS exam 
            to create the most effective preparation platform available.
          </p>
        </div>

        {/* Our Story */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-24">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold mb-6">Our Story</h2>
            <p className="text-gray-600 mb-4">
              AIELTS.org was founded in 2023 by a team of experienced IELTS examiners and AI specialists who 
              recognized the limitations of traditional test preparation methods.
            </p>
            <p className="text-gray-600 mb-4">
              Having worked with thousands of students, we understood the challenges they faced: generic feedback, 
              lack of personalization, and limited speaking practice opportunities.
            </p>
            <p className="text-gray-600 mb-6">
              We set out to build a platform that uses the latest advancements in artificial intelligence to 
              provide personalized, detailed feedback and create an immersive learning experience that helps 
              students achieve their target band scores more efficiently.
            </p>
            
            <div className="space-y-3">
              <div className="flex items-start gap-2">
                <CheckCircle size={20} className="text-ielts-green mt-1 shrink-0" />
                <p className="text-gray-600">Founded by IELTS experts with examiner experience</p>
              </div>
              <div className="flex items-start gap-2">
                <CheckCircle size={20} className="text-ielts-green mt-1 shrink-0" />
                <p className="text-gray-600">Developed with input from thousands of IELTS test-takers</p>
              </div>
              <div className="flex items-start gap-2">
                <CheckCircle size={20} className="text-ielts-green mt-1 shrink-0" />
                <p className="text-gray-600">Continuously improved based on student results and feedback</p>
              </div>
            </div>
          </div>
          
          <div className="bg-gradient-to-br from-ielts-blue to-blue-400 rounded-xl p-8 text-white">
            <h3 className="text-xl font-semibold mb-4">Our Values</h3>
            
            <div className="space-y-6">
              <div>
                <h4 className="font-medium mb-2">Innovation in Education</h4>
                <p className="text-white/90">We leverage the latest AI advancements to create effective learning experiences.</p>
              </div>
              
              <div>
                <h4 className="font-medium mb-2">Personalization</h4>
                <p className="text-white/90">We believe every student deserves a learning path tailored to their specific needs.</p>
              </div>
              
              <div>
                <h4 className="font-medium mb-2">Accessibility</h4>
                <p className="text-white/90">We strive to make high-quality IELTS preparation accessible to students worldwide.</p>
              </div>
              
              <div>
                <h4 className="font-medium mb-2">Continuous Improvement</h4>
                <p className="text-white/90">We're committed to constantly enhancing our platform based on user feedback and results.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Team Section */}
        <div className="mb-24">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="inline-block py-1 px-3 bg-ielts-blue/10 text-ielts-blue rounded-full text-sm font-medium mb-4">
              Our Team
            </span>
            <h2 className="text-2xl md:text-3xl font-bold mb-6">Meet the experts behind AIELTS</h2>
            <p className="text-gray-600">
              Our team combines expertise in IELTS examination, AI technology, and educational content development.
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <div key={index} className="bg-white rounded-xl overflow-hidden shadow-sm border hover:shadow-md transition-shadow">
                <img 
                  src={member.image} 
                  alt={member.name} 
                  className="w-full h-48 object-cover" 
                />
                <div className="p-4">
                  <h3 className="font-semibold text-lg">{member.name}</h3>
                  <p className="text-ielts-blue font-medium text-sm mb-2">{member.role}</p>
                  <p className="text-gray-600 text-sm">{member.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
