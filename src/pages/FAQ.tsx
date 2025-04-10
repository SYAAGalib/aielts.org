
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQPage = () => {
  const faqs = [
    {
      question: "What is AIELTS.org?",
      answer: "AIELTS.org is an AI-powered platform designed specifically for IELTS exam preparation. We offer personalized study plans, AI feedback on writing and speaking tasks, full practice tests, and a range of tools to help you achieve your target band score."
    },
    {
      question: "How does the AI feedback work?",
      answer: "Our AI system analyzes your writing and speaking responses according to the official IELTS scoring criteria. It provides detailed feedback on areas like task achievement, coherence, vocabulary, grammar, and pronunciation to help you improve your performance."
    },
    {
      question: "Can I practice speaking with the platform?",
      answer: "Yes! Our speaking module features AI avatars that ask you questions and provide feedback on your responses. The avatars use natural-sounding voices through ElevenLabs TTS integration, creating a realistic speaking practice experience."
    },
    {
      question: "How accurate is the band score prediction?",
      answer: "Our AI scoring system is trained on thousands of real IELTS responses and closely follows the official IELTS marking criteria. While no prediction can be 100% accurate, our system provides a reliable estimate to help you gauge your current performance level."
    },
    {
      question: "What's included in the subscription plans?",
      answer: "All our subscription plans include access to the full IELTS test suite (Reading, Writing, Listening, and Speaking), AI feedback, personalized study plans, and progress tracking. Higher-tier plans include additional features like unlimited mock tests, priority feedback, and advanced analytics."
    },
    {
      question: "Can I cancel my subscription?",
      answer: "Yes, you can cancel your subscription at any time from your account settings. Access will continue until the end of the current billing period."
    },
    {
      question: "Is there a free trial available?",
      answer: "Yes, we offer a 7-day free trial that gives you full access to the platform's features. No credit card is required to start the trial."
    },
    {
      question: "How do I get started?",
      answer: "Simply sign up for an account, take our diagnostic test to assess your current level, and our AI will generate a personalized study plan for you. You can then start practicing with our comprehensive test modules and tracking your progress."
    }
  ];

  return (
    <div className="container py-16 md:py-24">
      <div className="text-center max-w-3xl mx-auto mb-16">
        <span className="inline-block py-1 px-3 bg-ielts-blue/10 text-ielts-blue rounded-full text-sm font-medium mb-4">
          Frequently Asked Questions
        </span>
        <h1 className="text-3xl md:text-4xl font-bold mb-6">Everything you need to know</h1>
        <p className="text-lg text-gray-600">
          Have questions about AIELTS.org? Find answers to commonly asked questions below.
        </p>
      </div>

      <div className="max-w-3xl mx-auto">
        <Accordion type="single" collapsible className="w-full">
          {faqs.map((faq, index) => (
            <AccordionItem key={index} value={`item-${index}`}>
              <AccordionTrigger className="text-left">{faq.question}</AccordionTrigger>
              <AccordionContent className="text-gray-600">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </div>
  );
};

export default FAQPage;
