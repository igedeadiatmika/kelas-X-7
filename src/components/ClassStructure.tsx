import React, { useState } from 'react';
import { Users, Crown, Shield, Star, Target, Zap } from 'lucide-react';

interface StructureProps {
  isDark: boolean;
}

const ClassStructure: React.FC<StructureProps> = ({ isDark }) => {
  const [activeRole, setActiveRole] = useState<string | null>(null);

  const orgChart = [
    {
      level: 1,
      roles: [
        {
          title: "Class President",
          name: "Sarah Chen",
          icon: Crown,
          color: "from-purple-500 to-pink-500",
          responsibilities: ["Lead strategic initiatives", "Represent class interests", "Coordinate major events"],
          bgClass: isDark ? "bg-gradient-to-r from-purple-600 to-pink-600" : "bg-gradient-to-r from-purple-500 to-pink-500"
        }
      ]
    },
    {
      level: 2,
      roles: [
        {
          title: "Vice President",
          name: "Marcus Johnson",
          icon: Shield,
          color: "from-blue-500 to-cyan-500",
          responsibilities: ["Support president", "Lead committees", "Student advocacy"],
          bgClass: isDark ? "bg-gradient-to-r from-blue-600 to-cyan-600" : "bg-gradient-to-r from-blue-500 to-cyan-500"
        },
        {
          title: "Secretary",
          name: "Emma Rodriguez",
          icon: Star,
          color: "from-green-500 to-emerald-500",
          responsibilities: ["Document meetings", "Maintain records", "Communication"],
          bgClass: isDark ? "bg-gradient-to-r from-green-600 to-emerald-600" : "bg-gradient-to-r from-green-500 to-emerald-500"
        }
      ]
    },
    {
      level: 3,
      roles: [
        {
          title: "Treasurer",
          name: "Alex Thompson",
          icon: Target,
          color: "from-orange-500 to-red-500",
          responsibilities: ["Budget management", "Financial planning", "Fundraising oversight"],
          bgClass: isDark ? "bg-gradient-to-r from-orange-600 to-red-600" : "bg-gradient-to-r from-orange-500 to-red-500"
        },
        {
          title: "Events Coordinator",
          name: "Zara Patel",
          icon: Zap,
          color: "from-amber-500 to-orange-500",
          responsibilities: ["Plan social events", "Coordinate activities", "Venue management"],
          bgClass: isDark ? "bg-gradient-to-r from-amber-600 to-orange-600" : "bg-gradient-to-r from-amber-500 to-orange-500"
        },
        {
          title: "Communications Lead",
          name: "James Wilson",
          icon: Users,
          color: "from-teal-500 to-blue-500",
          responsibilities: ["Digital communications", "Social media", "Newsletter"],
          bgClass: isDark ? "bg-gradient-to-r from-teal-600 to-blue-600" : "bg-gradient-to-r from-teal-500 to-blue-500"
        }
      ]
    }
  ];

  return (
    <section id="structure" className={`py-20 px-6 ${
      isDark ? 'bg-slate-800' : 'bg-white'
    }`}>
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className={`text-4xl lg:text-5xl font-bold mb-6 ${
            isDark ? 'text-white' : 'text-slate-800'
          }`}>
            Our Class
            <span className={`block ${
              isDark ? 'text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400' 
                     : 'text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600'
            }`}>
              Organization Structure
            </span>
          </h2>
          <p className={`text-xl max-w-3xl mx-auto ${
            isDark ? 'text-slate-300' : 'text-slate-600'
          }`}>
            A well-organized leadership structure that ensures effective governance, 
            clear communication, and successful execution of our collective goals.
          </p>
        </div>

        <div className="space-y-12">
          {orgChart.map((level) => (
            <div
              key={level.level}
              className={`flex flex-wrap justify-center gap-8 ${
                level.level === 1 ? 'justify-center' : 
                level.level === 2 ? 'justify-center' : 'justify-center'
              }`}
            >
              {level.roles.map((role, index) => {
                const IconComponent = role.icon;
                const isActive = activeRole === `${level.level}-${index}`;
                
                return (
                  <div
                    key={index}
                    className="relative group"
                    onMouseEnter={() => setActiveRole(`${level.level}-${index}`)}
                    onMouseLeave={() => setActiveRole(null)}
                  >
                    {/* Connecting Lines */}
                    {level.level > 1 && (
                      <>
                        <div className={`absolute -top-12 left-1/2 w-px h-12 ${
                          isDark ? 'bg-slate-600' : 'bg-slate-300'
                        } transform -translate-x-1/2`} />
                        {level.level === 2 && index > 0 && (
                          <div className={`absolute -top-12 ${
                            index === 0 ? 'left-1/2' : 'right-1/2'
                          } w-24 h-px ${
                            isDark ? 'bg-slate-600' : 'bg-slate-300'
                          } top-[-12px]`} />
                        )}
                      </>
                    )}
                    
                    <div className={`relative p-8 rounded-3xl border-2 transition-all duration-500 cursor-pointer ${
                      isActive 
                        ? 'scale-110 shadow-2xl border-transparent' 
                        : isDark 
                          ? 'bg-slate-700 border-slate-600 hover:border-slate-500' 
                          : 'bg-white border-slate-200 hover:border-slate-300 hover:shadow-xl'
                    } ${isActive ? role.bgClass : ''} max-w-sm w-full`}>
                      
                      <div className="text-center space-y-6">
                        <div className={`mx-auto w-20 h-20 rounded-2xl flex items-center justify-center transition-all duration-300 ${
                          isActive 
                            ? 'bg-white/20 backdrop-blur-sm' 
                            : isDark 
                              ? 'bg-slate-600' 
                              : 'bg-slate-100'
                        }`}>
                          <IconComponent className={`h-10 w-10 transition-colors ${
                            isActive 
                              ? 'text-white' 
                              : isDark 
                                ? 'text-slate-300' 
                                : 'text-slate-600'
                          }`} />
                        </div>
                        
                        <div>
                          <h3 className={`text-2xl font-bold mb-2 ${
                            isActive 
                              ? 'text-white' 
                              : isDark 
                                ? 'text-white' 
                                : 'text-slate-800'
                          }`}>
                            {role.title}
                          </h3>
                          <p className={`text-lg font-medium ${
                            isActive 
                              ? 'text-white/90' 
                              : isDark 
                                ? 'text-blue-400' 
                                : 'text-blue-600'
                          }`}>
                            {role.name}
                          </p>
                        </div>
                        
                        <div className={`space-y-3 transition-all duration-300 ${
                          isActive ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'
                        }`}>
                          {role.responsibilities.map((resp, respIndex) => (
                            <div
                              key={respIndex}
                              className={`p-3 rounded-xl text-sm font-medium ${
                                isActive 
                                  ? 'bg-white/20 text-white backdrop-blur-sm' 
                                  : isDark 
                                    ? 'bg-slate-600 text-slate-300' 
                                    : 'bg-slate-50 text-slate-600'
                              }`}
                            >
                              {resp}
                            </div>
                          ))}
                        </div>
                      </div>
                      
                      {/* Glow effect */}
                      {isActive && (
                        <div className={`absolute inset-0 rounded-3xl blur-xl opacity-30 ${role.bgClass} -z-10`} />
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          ))}
        </div>

        {/* Statistics Section */}
        <div className="mt-20 grid md:grid-cols-4 gap-8">
          {[
            { number: "6", label: "Leadership Roles", icon: Users },
            { number: "15", label: "Committees", icon: Target },
            { number: "50+", label: "Active Members", icon: Star },
            { number: "100%", label: "Participation", icon: Zap }
          ].map((stat, index) => {
            const IconComponent = stat.icon;
            return (
              <div
                key={index}
                className={`text-center p-8 rounded-2xl transition-all duration-300 hover:scale-105 ${
                  isDark 
                    ? 'bg-slate-700 hover:bg-slate-600' 
                    : 'bg-slate-50 hover:bg-slate-100'
                }`}
              >
                <div className={`mx-auto w-16 h-16 rounded-full flex items-center justify-center mb-4 ${
                  isDark ? 'bg-blue-600' : 'bg-blue-100'
                }`}>
                  <IconComponent className={`h-8 w-8 ${
                    isDark ? 'text-white' : 'text-blue-600'
                  }`} />
                </div>
                <div className={`text-3xl font-bold mb-2 ${
                  isDark ? 'text-white' : 'text-slate-800'
                }`}>
                  {stat.number}
                </div>
                <div className={`font-medium ${
                  isDark ? 'text-slate-300' : 'text-slate-600'
                }`}>
                  {stat.label}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ClassStructure;