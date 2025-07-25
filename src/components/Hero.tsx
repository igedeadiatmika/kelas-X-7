import React from 'react';
import { ArrowRight, Star, Users, Trophy } from 'lucide-react';

interface HeroProps {
  isDark: boolean;
}

const Hero: React.FC<HeroProps> = ({ isDark }) => {
  return (
    <section id="home" className={`pt-24 pb-16 px-6 ${
      isDark 
        ? 'bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900' 
        : 'bg-gradient-to-br from-blue-50 via-amber-50 to-blue-100'
    }`}>
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <div className={`inline-flex items-center px-4 py-2 rounded-full border ${
                isDark 
                  ? 'bg-blue-900/30 border-blue-700 text-blue-300' 
                  : 'bg-blue-100 border-blue-200 text-blue-700'
              }`}>
                <Star className="h-4 w-4 mr-2" />
                <span className="text-sm font-medium">Est. 2020 • Academic Excellence</span>
              </div>
              
              <h1 className={`text-5xl lg:text-6xl font-bold leading-tight ${
                isDark ? 'text-white' : 'text-slate-800'
              }`}>
                Our Class
                <span className={`block ${
                  isDark ? 'text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-amber-400' 
                         : 'text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-amber-600'
                }`}>
                  Organization
                </span>
              </h1>
              
              <p className={`text-xl leading-relaxed ${
                isDark ? 'text-slate-300' : 'text-slate-600'
              }`}>
                Celebrating academic excellence, fostering lifelong friendships, and building a legacy of success. 
                Discover our journey, meet our remarkable students, and explore our achievements.
              </p>
            </div>
            
            <div className="flex flex-wrap gap-4">
              <button className="group flex items-center px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-xl font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg">
                <span>Explore Our Journey</span>
                <ArrowRight className="h-5 w-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </button>
              <button className={`px-8 py-4 border-2 rounded-xl font-semibold transition-all duration-300 hover:scale-105 ${
                isDark 
                  ? 'border-slate-600 text-slate-300 hover:bg-slate-800' 
                  : 'border-slate-300 text-slate-600 hover:bg-slate-50'
              }`}>
                View Gallery
              </button>
            </div>
            
            <div className="flex items-center space-x-8 pt-4">
              <div className="text-center">
                <div className={`text-3xl font-bold ${isDark ? 'text-white' : 'text-slate-800'}`}>150+</div>
                <div className={`text-sm ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>Students</div>
              </div>
              <div className="text-center">
                <div className={`text-3xl font-bold ${isDark ? 'text-white' : 'text-slate-800'}`}>25+</div>
                <div className={`text-sm ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>Awards</div>
              </div>
              <div className="text-center">
                <div className={`text-3xl font-bold ${isDark ? 'text-white' : 'text-slate-800'}`}>4</div>
                <div className={`text-sm ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>Years</div>
              </div>
            </div>
          </div>
          
          <div className="relative">
            <div className={`absolute inset-0 rounded-3xl blur-3xl opacity-30 ${
              isDark ? 'bg-blue-500' : 'bg-blue-400'
            }`}></div>
            <div className={`relative p-8 rounded-3xl border backdrop-blur-sm ${
              isDark 
                ? 'bg-slate-800/50 border-slate-700' 
                : 'bg-white/50 border-white/20'
            }`}>
              <div className="grid grid-cols-2 gap-6">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className={`aspect-square rounded-2xl ${
                    isDark ? 'bg-slate-700' : 'bg-slate-100'
                  } flex items-center justify-center group hover:scale-105 transition-transform duration-300 cursor-pointer`}>
                    <div className={`p-4 rounded-full ${
                      isDark ? 'bg-blue-600' : 'bg-blue-600'
                    } group-hover:scale-110 transition-transform`}>
                      {i === 1 && <Users className="h-8 w-8 text-white" />}
                      {i === 2 && <Trophy className="h-8 w-8 text-white" />}
                      {i === 3 && <Star className="h-8 w-8 text-white" />}
                      {i === 4 && <ArrowRight className="h-8 w-8 text-white" />}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;