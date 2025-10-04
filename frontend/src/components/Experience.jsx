import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { Calendar, MapPin, Building2, ChevronRight, Award, TrendingUp } from 'lucide-react';
import { experience } from '../data/mock';

const Experience = () => {
  return (
    <section id="experience" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Professional <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Experience</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Building scalable solutions and gaining hands-on experience at leading technology companies
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* Timeline */}
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-blue-500 to-purple-500 rounded-full hidden md:block"></div>
            
            {experience.map((exp, index) => (
              <div key={exp.id} className={`relative mb-16 ${index % 2 === 0 ? 'md:pr-1/2 md:text-right' : 'md:pl-1/2'}`}>
                {/* Timeline dot */}
                <div className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full border-4 border-white shadow-lg z-10 hidden md:block"></div>
                
                {/* Experience card */}
                <Card className={`shadow-xl border-0 transition-all duration-500 hover:shadow-2xl transform hover:-translate-y-1 bg-gradient-to-br from-white to-gray-50 ${index % 2 === 0 ? 'md:mr-8' : 'md:ml-8'}`}>
                  <CardHeader className="pb-4">
                    <div className="flex items-start justify-between mb-3">
                      <div className={`w-12 h-12 rounded-lg bg-gradient-to-r ${index % 2 === 0 ? 'from-blue-500 to-purple-500' : 'from-purple-500 to-pink-500'} flex items-center justify-center`}>
                        <Building2 className="w-6 h-6 text-white" />
                      </div>
                      <Badge variant="secondary" className="bg-blue-50 text-blue-700">
                        {exp.type}
                      </Badge>
                    </div>
                    
                    <CardTitle className="text-2xl font-bold text-gray-900 mb-2">
                      {exp.role}
                    </CardTitle>
                    
                    <div className="space-y-2">
                      <div className="flex items-center text-blue-600 font-semibold text-lg">
                        <Building2 className="w-5 h-5 mr-2" />
                        {exp.company}
                      </div>
                      <div className="flex items-center text-gray-500">
                        <Calendar className="w-4 h-4 mr-2" />
                        {exp.duration}
                      </div>
                    </div>
                  </CardHeader>

                  <CardContent>
                    <p className="text-gray-600 mb-6 leading-relaxed text-lg">
                      {exp.description}
                    </p>

                    {/* Key Achievements */}
                    <div className="mb-6">
                      <h4 className="flex items-center text-lg font-semibold text-gray-800 mb-4">
                        <Award className="w-5 h-5 mr-2 text-yellow-500" />
                        Key Achievements
                      </h4>
                      <div className="space-y-3">
                        {exp.achievements.map((achievement, idx) => (
                          <div key={idx} className="flex items-start group">
                            <ChevronRight className="w-4 h-4 text-blue-500 mr-3 mt-1 group-hover:transform group-hover:translate-x-1 transition-transform" />
                            <span className="text-gray-700 leading-relaxed">{achievement}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Technologies */}
                    <div>
                      <h4 className="text-sm font-semibold text-gray-800 mb-3">Technologies Used:</h4>
                      <div className="flex flex-wrap gap-2">
                        {exp.technologies.map((tech) => (
                          <Badge
                            key={tech}
                            variant="outline"
                            className="text-xs px-3 py-1 bg-gradient-to-r from-gray-50 to-blue-50 border-blue-200 text-blue-700 hover:from-blue-50 hover:to-blue-100 transition-all duration-200 cursor-default"
                          >
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>

        {/* Experience Stats */}
        <div className="mt-20 grid md:grid-cols-3 gap-8">
          <div className="text-center p-8 bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl">
            <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mx-auto mb-4 flex items-center justify-center">
              <Building2 className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-blue-900 mb-2">2</h3>
            <p className="text-blue-700">Professional Internships</p>
          </div>
          
          <div className="text-center p-8 bg-gradient-to-br from-green-50 to-green-100 rounded-xl">
            <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-teal-500 rounded-full mx-auto mb-4 flex items-center justify-center">
              <TrendingUp className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-green-900 mb-2">6+</h3>
            <p className="text-green-700">Months Experience</p>
          </div>
          
          <div className="text-center p-8 bg-gradient-to-br from-purple-50 to-purple-100 rounded-xl">
            <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full mx-auto mb-4 flex items-center justify-center">
              <Award className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-purple-900 mb-2">100%</h3>
            <p className="text-purple-700">Success Rate</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;