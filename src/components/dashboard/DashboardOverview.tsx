
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { Button } from '@/components/ui/button';
import { ArrowRight, BarChart3, Book, Calendar, Headphones, MessageSquare, Mic, Sparkle } from 'lucide-react';
import { Link } from 'react-router-dom';

// Skill progress data
const skillProgress = [
  { name: 'Reading', progress: 72, color: 'bg-ielts-blue' },
  { name: 'Writing', progress: 58, color: 'bg-ielts-orange' },
  { name: 'Listening', progress: 85, color: 'bg-green-500' },
  { name: 'Speaking', progress: 64, color: 'bg-purple-500' },
];

// Practice modules
const modules = [
  { 
    name: 'Reading',
    description: 'Academic passages with questions',
    icon: Book,
    color: 'text-ielts-blue',
    bg: 'bg-ielts-blue/10',
    link: '/dashboard/reading'
  },
  { 
    name: 'Writing',
    description: 'Essays and reports with AI feedback',
    icon: MessageSquare,
    color: 'text-ielts-orange',
    bg: 'bg-ielts-orange/10',
    link: '/dashboard/writing'
  },
  { 
    name: 'Listening',
    description: 'Audio tests with comprehension questions',
    icon: Headphones,
    color: 'text-green-500',
    bg: 'bg-green-500/10',
    link: '/dashboard/listening'
  },
  { 
    name: 'Speaking',
    description: 'Practice with AI avatars',
    icon: Mic,
    color: 'text-purple-500',
    bg: 'bg-purple-500/10',
    link: '/dashboard/speaking'
  },
];

const DashboardOverview = () => {
  return (
    <div className="p-6">
      <header className="mb-8">
        <h1 className="text-3xl font-bold mb-2">Welcome back, Alex</h1>
        <p className="text-gray-500">Your current band score prediction: <span className="font-bold text-ielts-blue">6.5</span></p>
      </header>
      
      {/* Study Plan Banner */}
      <div className="bg-gradient-to-r from-ielts-blue to-blue-400 text-white p-6 rounded-xl mb-8">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <Calendar size={18} />
              <h3 className="font-medium">Today's Study Plan</h3>
            </div>
            <p className="text-white/90 mb-3">You have 3 tasks scheduled for today</p>
            <div className="flex gap-2">
              <span className="bg-white/20 text-xs py-1 px-2 rounded">Writing Task 2 Practice</span>
              <span className="bg-white/20 text-xs py-1 px-2 rounded">Listening Section 3</span>
              <span className="bg-white/20 text-xs py-1 px-2 rounded">Vocabulary</span>
            </div>
          </div>
          <Link to="/dashboard/study-plan">
            <Button variant="secondary" size="sm" className="whitespace-nowrap">
              View Plan
            </Button>
          </Link>
        </div>
      </div>
      
      {/* Stats Overview */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-lg flex items-center gap-2">
              <Sparkle size={18} className="text-ielts-blue" /> Progress
            </CardTitle>
            <CardDescription>Your skill development</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {skillProgress.map((skill) => (
                <div key={skill.name} className="space-y-1">
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium">{skill.name}</span>
                    <span className="text-sm text-gray-500">{skill.progress}%</span>
                  </div>
                  <Progress value={skill.progress} className={skill.color} />
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-lg flex items-center gap-2">
              <Calendar size={18} className="text-ielts-orange" /> Upcoming Test
            </CardTitle>
            <CardDescription>Your next practice test</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="p-3 rounded-lg bg-gray-50 border">
                <div className="flex justify-between items-center mb-2">
                  <h4 className="font-medium">Full Mock Test</h4>
                  <span className="text-xs bg-ielts-blue/10 text-ielts-blue px-2 py-0.5 rounded-full">
                    3h 15m
                  </span>
                </div>
                <p className="text-sm text-gray-500 mb-3">
                  Complete all sections under exam conditions
                </p>
                <div className="flex gap-2">
                  <Link to="/dashboard/exams">
                    <Button size="sm">Take Test</Button>
                  </Link>
                  <Button variant="outline" size="sm">Reschedule</Button>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-lg flex items-center gap-2">
              <BarChart3 size={18} className="text-green-500" /> Activity
            </CardTitle>
            <CardDescription>Your recent performance</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-sm">Practice Sessions</span>
                <span className="font-medium">12 this week</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm">Hours Studied</span>
                <span className="font-medium">8.5 hours</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm">Completed Tasks</span>
                <span className="font-medium">24 / 30</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm">Streak</span>
                <span className="font-medium">7 days</span>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
      
      {/* Practice Modules */}
      <h2 className="text-xl font-bold mb-4">Practice Modules</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {modules.map((module) => (
          <Link key={module.name} to={module.link}>
            <div className="bg-white rounded-xl p-6 border hover:shadow-md transition-shadow h-full">
              <div className={`${module.bg} w-12 h-12 rounded-lg flex items-center justify-center mb-4`}>
                <module.icon className={module.color} size={24} />
              </div>
              <h3 className="font-medium text-lg mb-2">{module.name}</h3>
              <p className="text-gray-500 text-sm mb-4">{module.description}</p>
              <div className="flex items-center text-ielts-blue font-medium text-sm">
                Practice Now <ArrowRight size={16} className="ml-2" />
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default DashboardOverview;
