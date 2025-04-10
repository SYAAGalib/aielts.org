
import { Star } from 'lucide-react';

type TestimonialProps = {
  name: string;
  location: string;
  image: string;
  rating: number;
  text: string;
  bandScore: string;
};

const TestimonialCard = ({ name, location, image, rating, text, bandScore }: TestimonialProps) => {
  return (
    <div className="bg-white p-6 rounded-xl shadow-sm border hover:shadow-md transition-shadow">
      <div className="flex items-center mb-4">
        <img 
          src={image} 
          alt={name} 
          className="w-12 h-12 rounded-full object-cover mr-4" 
        />
        <div>
          <h4 className="font-medium">{name}</h4>
          <p className="text-sm text-gray-500">{location}</p>
        </div>
      </div>
      
      <div className="flex items-center mb-4">
        {[...Array(5)].map((_, i) => (
          <Star 
            key={i} 
            size={16} 
            className={i < rating ? "text-yellow-400 fill-yellow-400" : "text-gray-300"}
          />
        ))}
      </div>
      
      <p className="text-gray-600 mb-4">{text}</p>
      
      <div className="flex items-center">
        <span className="text-xs font-medium bg-ielts-green/10 text-ielts-green py-1 px-2 rounded-md">
          Achieved: Band {bandScore}
        </span>
      </div>
    </div>
  );
};

const Testimonials = () => {
  const testimonials = [
    {
      name: "Sarah Johnson",
      location: "UK",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330",
      rating: 5,
      text: "AIELTS transformed my preparation. The AI feedback helped me identify patterns in my errors that I couldn't see before. I improved from 6.5 to 8.0 in just 8 weeks!",
      bandScore: "8.0"
    },
    {
      name: "Ahmed Hassan",
      location: "UAE",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d",
      rating: 5,
      text: "The speaking practice with AI avatars was a game-changer for me. I used to be very nervous speaking English, but after regular practice, my confidence improved dramatically.",
      bandScore: "7.5"
    },
    {
      name: "Mei Zhang",
      location: "China",
      image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2",
      rating: 4,
      text: "The personalized study plan helped me focus on my weak areas. The writing feedback was especially helpful as it pointed out issues with my coherence and cohesion.",
      bandScore: "7.0"
    },
    {
      name: "Carlos Rodriguez",
      location: "Spain",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e",
      rating: 5,
      text: "I had tried several IELTS prep courses before, but AIELTS was by far the most effective. The AI buddy answered all my questions instantly, day or night.",
      bandScore: "8.5"
    }
  ];

  return (
    <section className="py-16 md:py-24 bg-gray-50">
      <div className="container">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block py-1 px-3 bg-ielts-blue/10 text-ielts-blue rounded-full text-sm font-medium mb-4">
            Success Stories
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">From our students</h2>
          <p className="text-lg text-gray-600">
            Join thousands of students who have achieved their target IELTS scores with our platform.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard 
              key={index}
              name={testimonial.name}
              location={testimonial.location}
              image={testimonial.image}
              rating={testimonial.rating}
              text={testimonial.text}
              bandScore={testimonial.bandScore}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
