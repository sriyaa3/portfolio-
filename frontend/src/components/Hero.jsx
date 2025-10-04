import React, { useEffect, useState } from 'react';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { ChevronDown, Download, Mail, Phone, MapPin, Github, Linkedin, Code2, Database, Brain, Cloud } from 'lucide-react';
import { personalInfo } from '../data/mock';

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [currentSkill, setCurrentSkill] = useState(0);
  
  const skillIcons = [
    { icon: Brain, label: "AI/ML" },
    { icon: Code2, label: "Full-Stack" },
    { icon: Database, label: "Data Engineering" },
    { icon: Cloud, label: "Cloud Architecture" }
  ];

  useEffect(() => {
    setIsVisible(true);
    const interval = setInterval(() => {
      setCurrentSkill((prev) => (prev + 1) % skillIcons.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  const scrollToProjects = () => {
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-cyan-500/5 rounded-full blur-3xl animate-pulse delay-500"></div>
      </div>

      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHZpZXdCb3g9IjAgMCA0MCA0MCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGRlZnM+CjxwYXR0ZXJuIGlkPSJncmlkIiB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHBhdHRlcm5Vbml0cz0idXNlclNwYWNlT25Vc2UiPgo8cGF0aCBkPSJNIDQwIDAgTCAwIDAgMCA0MCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjMzMzIiBzdHJva2Utd2lkdGg9IjEiLz4KPC9wYXR0ZXJuPgo8L2RlZnM+CjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz4KPHN2Zz4K')] opacity-20"></div>

      <div className="relative z-10 container mx-auto px-6 py-20 flex items-center min-h-screen">
        <div className="grid lg:grid-cols-2 gap-12 items-center w-full">
          {/* Left Content */}
          <div className={`space-y-8 transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            {/* Greeting */}
            <div className="flex items-center space-x-3">
              <div className="w-2 h-2 bg-green-400 rounded-full animate-ping"></div>
              <span className="text-green-400 font-mono text-sm tracking-wider">AVAILABLE FOR OPPORTUNITIES</span>
            </div>

            {/* Main Heading */}
            <div className="space-y-4">
              <h1 className="text-5xl lg:text-7xl font-bold bg-gradient-to-r from-white via-blue-100 to-blue-300 bg-clip-text text-transparent leading-tight">
                {personalInfo.name}
              </h1>
              <div className="flex items-center space-x-4">
                <div className={`transition-all duration-500 ${skillIcons[currentSkill]}`}>
                  {React.createElement(skillIcons[currentSkill].icon, { 
                    className: "w-8 h-8 text-blue-400"
                  })}
                </div>
                <h2 className="text-2xl lg:text-3xl font-semibold text-blue-300">
                  {skillIcons[currentSkill].label} Expert
                </h2>
              </div>
              <p className="text-xl text-gray-300 font-mono">{personalInfo.subtitle}</p>
            </div>

            {/* Bio */}
            <p className="text-lg text-gray-400 leading-relaxed max-w-2xl">
              {personalInfo.bio}
            </p>

            {/* Quick Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="text-center p-4 bg-white/5 backdrop-blur-sm rounded-lg border border-white/10">
                <div className="text-2xl font-bold text-blue-400">8.67</div>
                <div className="text-sm text-gray-400">GPA</div>
              </div>
              <div className="text-center p-4 bg-white/5 backdrop-blur-sm rounded-lg border border-white/10">
                <div className="text-2xl font-bold text-green-400">3+</div>
                <div className="text-sm text-gray-400">Projects</div>
              </div>
              <div className="text-center p-4 bg-white/5 backdrop-blur-sm rounded-lg border border-white/10">
                <div className="text-2xl font-bold text-purple-400">2</div>
                <div className="text-sm text-gray-400">Internships</div>
              </div>
              <div className="text-center p-4 bg-white/5 backdrop-blur-sm rounded-lg border border-white/10">
                <div className="text-2xl font-bold text-orange-400">4+</div>
                <div className="text-sm text-gray-400">Leadership</div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap gap-4">
              <Button 
                onClick={scrollToProjects}
                className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
              >
                View Projects
                <ChevronDown className="ml-2 w-4 h-4" />
              </Button>
              
              <Button 
                variant="outline" 
                className="border-2 border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-slate-900 px-8 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105"
              >
                <Download className="mr-2 w-4 h-4" />
                Download Resume
              </Button>
            </div>

            {/* Contact Info */}
            <div className="flex flex-wrap gap-6 text-sm text-gray-400">
              <div className="flex items-center space-x-2">
                <Mail className="w-4 h-4" />
                <span>{personalInfo.email}</span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="w-4 h-4" />
                <span>{personalInfo.phone}</span>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin className="w-4 h-4" />
                <span>{personalInfo.location}</span>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex space-x-4">
              <a 
                href={personalInfo.github}
                className="w-12 h-12 bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg flex items-center justify-center hover:bg-white/20 transition-all duration-300 hover:scale-110"
              >
                <Github className="w-5 h-5" />
              </a>
              <a 
                href={personalInfo.linkedin}
                className="w-12 h-12 bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg flex items-center justify-center hover:bg-white/20 transition-all duration-300 hover:scale-110"
              >
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Right Side - Code Terminal Animation */}
          <div className={`transition-all duration-1000 delay-300 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-lg p-6 font-mono text-sm shadow-2xl">
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                <span className="text-gray-400 ml-4">sriyaa@portfolio:~$</span>
              </div>
              <div className="space-y-2 text-gray-300">
                <div><span className="text-blue-400">class</span> <span className="text-yellow-400">SriyaaProfile</span>:</div>
                <div className="ml-4"><span className="text-purple-400">def</span> <span className="text-green-400">__init__</span>(self):</div>
                <div className="ml-8">self.name = <span className="text-orange-400">"Sriyaa S"</span></div>
                <div className="ml-8">self.role = <span className="text-orange-400">"AI/ML Engineer"</span></div>
                <div className="ml-8">self.skills = [</div>
                <div className="ml-12 text-orange-400">"TensorFlow", "PyTorch", "React",</div>
                <div className="ml-12 text-orange-400">"GCP", "FastAPI", "MongoDB"</div>
                <div className="ml-8">]</div>
                <div className="ml-8">self.passion = <span className="text-orange-400">"Building AI Solutions"</span></div>
                <div className="ml-8">self.status = <span className="text-green-400">"Available for Hire"</span></div>
                <div className="mt-4">
                  <span className="text-gray-500"># Ready to innovate and create impact</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ChevronDown className="w-6 h-6 text-gray-400" />
      </div>
    </section>
  );
};

export default Hero;