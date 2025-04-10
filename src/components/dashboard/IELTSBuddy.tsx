
import { useState, useRef, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Send, Bot, User } from 'lucide-react';

type Message = {
  role: 'user' | 'assistant';
  content: string;
};

const IELTSBuddy = () => {
  const [messages, setMessages] = useState<Message[]>([
    { 
      role: 'assistant', 
      content: 'Hello! I\'m your IELTS Buddy. I can help with your IELTS preparation. What would you like to know about the IELTS exam today?' 
    }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSend = async () => {
    if (!input.trim()) return;
    
    const userMessage = input.trim();
    setInput('');
    
    // Add user message to chat
    setMessages(prev => [...prev, { role: 'user', content: userMessage }]);
    
    // Show typing indicator
    setIsLoading(true);
    
    // In a real app, you would send the message to your AI backend here
    // Simulate API delay
    setTimeout(() => {
      // Sample responses based on common IELTS questions
      let response = '';
      const userMessageLower = userMessage.toLowerCase();
      
      if (userMessageLower.includes('speaking') || userMessageLower.includes('speak')) {
        response = "For the IELTS Speaking test, practice is key. Try to speak English daily, record yourself, and review your recordings. Focus on fluency, vocabulary, grammar, and pronunciation. I recommend practicing with topics from all three parts of the speaking test. Would you like some sample speaking questions to practice with?";
      } else if (userMessageLower.includes('writing')) {
        response = "The IELTS Writing task requires good planning. For Task 1 (graph/chart description), practice analyzing data and describing trends. For Task 2 (essay), work on your essay structure: introduction, body paragraphs with clear topic sentences, and conclusion. Would you like me to review one of your practice essays?";
      } else if (userMessageLower.includes('reading')) {
        response = "To improve your IELTS Reading score, work on your skimming and scanning techniques. Practice reading academic texts quickly while still understanding the main points. Time management is crucial - you have only 60 minutes for 40 questions. Would you like some reading strategies to help manage your time better?";
      } else if (userMessageLower.includes('listening')) {
        response = "The IELTS Listening test requires concentration and note-taking skills. Practice with sample recordings and focus on identifying key information. Pay attention to signpost words that indicate important details are coming. Would you like to know more about the different sections of the listening test?";
      } else if (userMessageLower.includes('score') || userMessageLower.includes('band')) {
        response = "IELTS uses a 9-band scoring system. Each module (Reading, Writing, Listening, Speaking) gets a score, and your overall band is the average of these. Most universities require scores between 6.0-7.5 depending on the program. Would you like to know what you need to demonstrate for a particular band score?";
      } else if (userMessageLower.includes('nervous') || userMessageLower.includes('anxiety')) {
        response = "It's normal to feel nervous before the IELTS test. To manage anxiety, prepare thoroughly, familiarize yourself with the test format, practice under timed conditions, and take care of yourself physically (sleep well, eat well). On test day, use deep breathing techniques if you feel anxious. Remember, you can always retake the test if needed.";
      } else if (userMessageLower.includes('vocabulary') || userMessageLower.includes('words')) {
        response = "Building vocabulary is important for IELTS success. Focus on academic words and topic-specific vocabulary for common IELTS themes (environment, education, technology, etc.). Learn words in context rather than isolated lists. Try reading newspapers, academic articles, or listening to podcasts on various topics to expose yourself to new words naturally.";
      } else {
        response = "That's a good question about IELTS preparation. To improve your performance, regular practice with authentic materials is key. Focus on understanding the test format and requirements for each section. Would you like specific advice for the Reading, Writing, Speaking, or Listening modules?";
      }
      
      // Add AI response to chat
      setMessages(prev => [...prev, { role: 'assistant', content: response }]);
      setIsLoading(false);
    }, 1000);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <div className="flex flex-col h-[calc(100vh-140px)] p-6">
      <h1 className="text-2xl font-bold mb-6">IELTS Buddy AI Assistant</h1>
      
      <Card className="flex-1 flex flex-col overflow-hidden border mb-4">
        <div className="flex-1 overflow-y-auto p-4">
          <div className="space-y-4">
            {messages.map((message, index) => (
              <div 
                key={index}
                className={`flex ${message.role === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div 
                  className={`
                    flex max-w-[80%] md:max-w-[70%] items-start gap-3 rounded-lg p-3
                    ${message.role === 'user' ? 'bg-ielts-blue/10 ml-4' : 'bg-gray-100 mr-4'}
                  `}
                >
                  {message.role === 'assistant' && (
                    <div className="w-8 h-8 rounded-full bg-ielts-blue flex items-center justify-center shrink-0 mt-1">
                      <Bot size={16} className="text-white" />
                    </div>
                  )}
                  <div className="text-sm">
                    {message.content}
                  </div>
                  {message.role === 'user' && (
                    <div className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center shrink-0 mt-1">
                      <User size={16} />
                    </div>
                  )}
                </div>
              </div>
            ))}
            
            {isLoading && (
              <div className="flex justify-start">
                <div className="flex max-w-[70%] items-center gap-3 rounded-lg p-3 bg-gray-100">
                  <div className="w-8 h-8 rounded-full bg-ielts-blue flex items-center justify-center">
                    <Bot size={16} className="text-white" />
                  </div>
                  <div className="flex space-x-1">
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></div>
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></div>
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></div>
                  </div>
                </div>
              </div>
            )}
            
            <div ref={messagesEndRef} />
          </div>
        </div>
        
        <div className="p-4 border-t bg-white">
          <div className="flex items-center gap-2">
            <Input
              placeholder="Ask your IELTS-related questions..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleKeyDown}
              disabled={isLoading}
              className="flex-1"
            />
            <Button 
              onClick={handleSend} 
              disabled={isLoading || !input.trim()}
              size="icon"
            >
              <Send size={18} />
            </Button>
          </div>
          <div className="text-xs text-gray-500 mt-2">
            Ask about speaking, writing, reading, listening tips, vocabulary, or test strategies
          </div>
        </div>
      </Card>
    </div>
  );
};

export default IELTSBuddy;
