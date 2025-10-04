import React, { useState } from 'react';
import { Badge } from './ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';
import { Brain, Code2, Database, Cloud, Wrench, Palette } from 'lucide-react';
import { skills } from '../data/mock';

const Skills = () => {
  const [activeTab, setActiveTab] = useState('aiml');

  const skillCategories = [
    {
      id: 'aiml',
      label: 'AI/ML',
      icon: Brain,
      skills: skills.aiml,
      color: 'from-purple-500 to-pink-500',
      description: 'Machine Learning, Deep Learning, and AI Technologies'
    },
    {
      id: 'programming',
      label: 'Programming',
      icon: Code2,
      skills: skills.programming,
      color: 'from-blue-500 to-cyan-500',
      description: 'Core Programming Languages and Development'
    },
    {
      id: 'web',
      label: 'Web & APIs',
      icon: Palette,
      skills: skills.web,
      color: 'from-green-500 to-teal-500',
      description: 'Full-Stack Web Development and API Design'
    },
    {
      id: 'databases',
      label: 'Databases',
      icon: Database,
      skills: skills.databases,
      color: 'from-orange-500 to-red-500',
      description: 'Database Management and Data Storage Solutions'
    },
    {
      id: 'cloud',
      label: 'Cloud & DevOps',
      icon: Cloud,
      skills: skills.cloud,
      color: 'from-indigo-500 to-purple-500',
      description: 'Cloud Architecture and Development Operations'
    },
    {
      id: 'tools',
      label: 'Tools & Platforms',
      icon: Wrench,
      skills: skills.tools,
      color: 'from-cyan-500 to-blue-500',
      description: 'Development Tools and Platform Integration'
    }
  ];

  return (
    <section id="skills" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Technical <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Expertise</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive skill set spanning AI/ML, full-stack development, and cloud technologies
          </p>
        </div>

        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="grid w-full grid-cols-2 md:grid-cols-3 lg:grid-cols-6 mb-8">
            {skillCategories.map((category) => {
              const IconComponent = category.icon;
              return (
                <TabsTrigger
                  key={category.id}
                  value={category.id}
                  className="flex flex-col items-center space-y-2 py-4 data-[state=active]:bg-gradient-to-r data-[state=active]:from-blue-50 data-[state=active]:to-purple-50"
                >
                  <IconComponent className="w-5 h-5" />
                  <span className="text-xs font-medium">{category.label}</span>
                </TabsTrigger>
              );
            })}
          </TabsList>

          {skillCategories.map((category) => {
            const IconComponent = category.icon;
            return (
              <TabsContent key={category.id} value={category.id} className="mt-8">
                <Card className="border-0 shadow-xl bg-gradient-to-br from-white to-gray-50">
                  <CardHeader className="text-center pb-4">
                    <div className={`w-16 h-16 mx-auto rounded-full bg-gradient-to-r ${category.color} flex items-center justify-center mb-4`}>
                      <IconComponent className="w-8 h-8 text-white" />
                    </div>
                    <CardTitle className="text-2xl font-bold text-gray-900">{category.label}</CardTitle>
                    <p className="text-gray-600">{category.description}</p>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
                      {category.skills.map((skill, index) => (
                        <Badge
                          key={skill}
                          variant="secondary"
                          className={`px-4 py-2 text-sm font-medium bg-gradient-to-r ${category.color} text-white hover:shadow-lg transition-all duration-300 transform hover:scale-105 cursor-default`}
                          style={{
                            animationDelay: `${index * 0.1}s`
                          }}
                        >
                          {skill}
                        </Badge>
                      ))}
                    </div>
                    
                    {/* Skill Level Indicators */}
                    <div className="mt-6 p-4 bg-gray-50 rounded-lg">
                      <h4 className="font-semibold text-gray-800 mb-2">Proficiency Level</h4>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {category.skills.slice(0, 4).map((skill) => {
                          const proficiency = Math.floor(Math.random() * 20) + 80; // Mock proficiency 80-100%
                          return (
                            <div key={skill} className="flex items-center space-x-3">
                              <span className="text-sm font-medium text-gray-700 min-w-0 flex-1">{skill}</span>
                              <div className="flex-1 bg-gray-200 rounded-full h-2">
                                <div
                                  className={`h-2 rounded-full bg-gradient-to-r ${category.color}`}
                                  style={{ width: `${proficiency}%` }}
                                ></div>
                              </div>
                              <span className="text-xs text-gray-500 min-w-0">{proficiency}%</span>
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            );
          })}
        </Tabs>

        {/* Skills Summary */}
        <div className="mt-16 grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="text-center p-6 bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl">
            <div className="w-12 h-12 bg-blue-500 rounded-lg mx-auto mb-4 flex items-center justify-center">
              <Brain className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-lg font-semibold text-blue-900 mb-2">AI/ML Expert</h3>
            <p className="text-blue-700 text-sm">Advanced machine learning and deep learning implementations</p>
          </div>
          
          <div className="text-center p-6 bg-gradient-to-br from-green-50 to-green-100 rounded-xl">
            <div className="w-12 h-12 bg-green-500 rounded-lg mx-auto mb-4 flex items-center justify-center">
              <Code2 className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-lg font-semibold text-green-900 mb-2">Full-Stack Developer</h3>
            <p className="text-green-700 text-sm">End-to-end web application development and deployment</p>
          </div>
          
          <div className="text-center p-6 bg-gradient-to-br from-purple-50 to-purple-100 rounded-xl">
            <div className="w-12 h-12 bg-purple-500 rounded-lg mx-auto mb-4 flex items-center justify-center">
              <Database className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-lg font-semibold text-purple-900 mb-2">Data Engineer</h3>
            <p className="text-purple-700 text-sm">Scalable data pipelines and real-time analytics systems</p>
          </div>
          
          <div className="text-center p-6 bg-gradient-to-br from-orange-50 to-orange-100 rounded-xl">
            <div className="w-12 h-12 bg-orange-500 rounded-lg mx-auto mb-4 flex items-center justify-center">
              <Cloud className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-lg font-semibold text-orange-900 mb-2">Cloud Architect</h3>
            <p className="text-orange-700 text-sm">Google Cloud Platform and scalable infrastructure design</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;