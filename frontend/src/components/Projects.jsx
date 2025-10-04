import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { Button } from './ui/button';
import { ExternalLink, Github, Star, Calendar, Code, Zap, Database, Brain } from 'lucide-react';
import { projects } from '../data/mock';

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [filter, setFilter] = useState('all');

  const categories = ['all', 'AI/ML', 'Web App', 'Data Engineering'];

  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(project => project.category === filter);

  const getCategoryIcon = (category) => {
    switch (category) {
      case 'AI/ML': return Brain;
      case 'Web App': return Code;
      case 'Data Engineering': return Database;
      default: return Zap;
    }
  };

  return (
    <section id="projects" className="py-20 bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Featured <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Projects</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Innovative AI/ML solutions and full-stack applications that demonstrate technical expertise and real-world impact
          </p>
          
          {/* Category Filter */}
          <div className="flex justify-center space-x-4 mb-8">
            {categories.map((category) => (
              <Button
                key={category}
                onClick={() => setFilter(category)}
                variant={filter === category ? "default" : "outline"}
                className={`px-6 py-2 rounded-full transition-all duration-300 ${
                  filter === category
                    ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg'
                    : 'text-gray-600 hover:text-blue-600 hover:border-blue-600'
                }`}
              >
                {category === 'all' ? 'All Projects' : category}
              </Button>
            ))}
          </div>
        </div>

        <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => {
            const IconComponent = getCategoryIcon(project.category);
            return (
              <Card
                key={project.id}
                className={`group cursor-pointer border-0 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 bg-white overflow-hidden ${
                  project.featured ? 'ring-2 ring-blue-500 ring-opacity-50' : ''
                }`}
                onClick={() => setSelectedProject(project)}
                style={{
                  animationDelay: `${index * 0.1}s`
                }}
              >
                {project.featured && (
                  <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 py-2 text-sm font-semibold flex items-center">
                    <Star className="w-4 h-4 mr-2" />
                    Featured Project
                  </div>
                )}
                
                <div className="p-6">
                  {/* Project Header */}
                  <CardHeader className="p-0 mb-4">
                    <div className="flex items-start justify-between mb-3">
                      <div className={`w-12 h-12 rounded-lg bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-center`}>
                        <IconComponent className="w-6 h-6 text-white" />
                      </div>
                      <Badge variant="secondary" className="bg-blue-50 text-blue-700 hover:bg-blue-100">
                        {project.category}
                      </Badge>
                    </div>
                    <CardTitle className="text-xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors duration-300">
                      {project.title}
                    </CardTitle>
                  </CardHeader>

                  <CardContent className="p-0">
                    {/* Description */}
                    <p className="text-gray-600 mb-6 leading-relaxed">
                      {project.description}
                    </p>

                    {/* Key Highlights */}
                    <div className="mb-6">
                      <h4 className="text-sm font-semibold text-gray-800 mb-2">Key Features:</h4>
                      <ul className="space-y-1">
                        {project.highlights?.slice(0, 3).map((highlight, idx) => (
                          <li key={idx} className="text-sm text-gray-600 flex items-start">
                            <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-2 mr-2 flex-shrink-0"></div>
                            {highlight}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Technologies */}
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.technologies.slice(0, 4).map((tech) => (
                        <Badge
                          key={tech}
                          variant="outline"
                          className="text-xs px-3 py-1 bg-gradient-to-r from-gray-50 to-blue-50 border-blue-200 text-blue-700 hover:from-blue-50 hover:to-blue-100 transition-all duration-200"
                        >
                          {tech}
                        </Badge>
                      ))}
                      {project.technologies.length > 4 && (
                        <Badge variant="outline" className="text-xs px-3 py-1 text-gray-500">
                          +{project.technologies.length - 4} more
                        </Badge>
                      )}
                    </div>

                    {/* Action Buttons */}
                    <div className="flex space-x-3">
                      {project.githubUrl && (
                        <Button
                          variant="outline"
                          size="sm"
                          className="flex-1 text-gray-600 border-gray-300 hover:text-blue-600 hover:border-blue-600 transition-all duration-300"
                          onClick={(e) => {
                            e.stopPropagation();
                            window.open(project.githubUrl, '_blank');
                          }}
                        >
                          <Github className="w-4 h-4 mr-2" />
                          Code
                        </Button>
                      )}
                      {project.liveUrl && (
                        <Button
                          size="sm"
                          className="flex-1 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white transition-all duration-300"
                          onClick={(e) => {
                            e.stopPropagation();
                            window.open(project.liveUrl, '_blank');
                          }}
                        >
                          <ExternalLink className="w-4 h-4 mr-2" />
                          Demo
                        </Button>
                      )}
                    </div>

                    {/* Date */}
                    {project.date && (
                      <div className="flex items-center mt-4 text-xs text-gray-500">
                        <Calendar className="w-3 h-3 mr-1" />
                        {project.date}
                      </div>
                    )}
                  </CardContent>
                </div>
              </Card>
            );
          })}
        </div>

        {/* Project Stats */}
        <div className="mt-16 grid md:grid-cols-3 gap-8">
          <div className="text-center p-8 bg-white rounded-xl shadow-lg">
            <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mx-auto mb-4 flex items-center justify-center">
              <Code className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-2">{projects.length}+</h3>
            <p className="text-gray-600">Projects Completed</p>
          </div>
          
          <div className="text-center p-8 bg-white rounded-xl shadow-lg">
            <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-teal-500 rounded-full mx-auto mb-4 flex items-center justify-center">
              <Brain className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-2">15+</h3>
            <p className="text-gray-600">Technologies Used</p>
          </div>
          
          <div className="text-center p-8 bg-white rounded-xl shadow-lg">
            <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-red-500 rounded-full mx-auto mb-4 flex items-center justify-center">
              <Zap className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-2">100%</h3>
            <p className="text-gray-600">Success Rate</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;