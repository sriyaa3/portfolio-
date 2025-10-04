import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { Users, Target, Trophy, Heart, Lightbulb, Zap } from 'lucide-react';
import { leadership } from '../data/mock';

const Leadership = () => {
  const getIcon = (index) => {
    const icons = [Lightbulb, Heart, Users, Trophy];
    return icons[index % icons.length];
  };

  const getGradient = (index) => {
    const gradients = [
      'from-purple-500 to-pink-500',
      'from-blue-500 to-cyan-500',
      'from-green-500 to-teal-500',
      'from-orange-500 to-red-500'
    ];
    return gradients[index % gradients.length];
  };

  return (
    <section id="leadership" className="py-20 bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Leadership & <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Community</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Building communities, leading initiatives, and making a positive impact beyond technical contributions
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {leadership.map((item, index) => {
            const IconComponent = getIcon(index);
            const gradient = getGradient(index);
            
            return (
              <Card
                key={item.id}
                className="group cursor-pointer border-0 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 bg-white overflow-hidden"
                style={{
                  animationDelay: `${index * 0.1}s`
                }}
              >
                <CardHeader className="pb-4">
                  <div className="flex items-start justify-between mb-4">
                    <div className={`w-14 h-14 rounded-xl bg-gradient-to-r ${gradient} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                      <IconComponent className="w-7 h-7 text-white" />
                    </div>
                    <Badge variant="secondary" className="bg-blue-50 text-blue-700">
                      Leadership
                    </Badge>
                  </div>
                  
                  <CardTitle className="text-xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors duration-300 mb-2">
                    {item.role}
                  </CardTitle>
                  
                  <div className="text-lg font-semibold text-blue-600 mb-3">
                    {item.organization}
                  </div>
                  
                  <p className="text-gray-600 leading-relaxed">
                    {item.description}
                  </p>
                </CardHeader>

                <CardContent>
                  {/* Key Responsibilities */}
                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-gray-800 mb-3 flex items-center">
                      <Target className="w-4 h-4 mr-2 text-blue-500" />
                      Key Responsibilities
                    </h4>
                    <ul className="space-y-2">
                      {item.responsibilities.map((responsibility, idx) => (
                        <li key={idx} className="text-sm text-gray-600 flex items-start">
                          <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                          {responsibility}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Impact */}
                  <div className={`p-4 bg-gradient-to-r ${gradient} bg-opacity-10 rounded-lg`}>
                    <h4 className="text-sm font-semibold text-gray-800 mb-2 flex items-center">
                      <Zap className="w-4 h-4 mr-2 text-orange-500" />
                      Impact Achieved
                    </h4>
                    <p className="text-sm text-gray-700 font-medium">{item.impact}</p>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Leadership Stats */}
        <div className="grid md:grid-cols-4 gap-6">
          <div className="text-center p-6 bg-white rounded-xl shadow-lg">
            <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg mx-auto mb-4 flex items-center justify-center">
              <Users className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-2">4+</h3>
            <p className="text-gray-600 text-sm">Leadership Roles</p>
          </div>
          
          <div className="text-center p-6 bg-white rounded-xl shadow-lg">
            <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg mx-auto mb-4 flex items-center justify-center">
              <Target className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-2">150%</h3>
            <p className="text-gray-600 text-sm">Engagement Growth</p>
          </div>
          
          <div className="text-center p-6 bg-white rounded-xl shadow-lg">
            <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-teal-500 rounded-lg mx-auto mb-4 flex items-center justify-center">
              <Heart className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-2">50+</h3>
            <p className="text-gray-600 text-sm">Lives Impacted</p>
          </div>
          
          <div className="text-center p-6 bg-white rounded-xl shadow-lg">
            <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-red-500 rounded-lg mx-auto mb-4 flex items-center justify-center">
              <Trophy className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-2">3+</h3>
            <p className="text-gray-600 text-sm">Organizations</p>
          </div>
        </div>

        {/* Leadership Philosophy */}
        <div className="mt-16 max-w-4xl mx-auto">
          <Card className="border-0 shadow-xl bg-gradient-to-br from-white to-gray-50">
            <CardContent className="p-8 text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mx-auto mb-6 flex items-center justify-center">
                <Lightbulb className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Leadership Philosophy</h3>
              <p className="text-lg text-gray-600 leading-relaxed">
                "Leadership is not about being in charge, but about taking care of those in your charge. 
                Through community engagement, design thinking, and collaborative problem-solving, 
                I strive to create positive impact while building inclusive environments where everyone can thrive."
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Leadership;