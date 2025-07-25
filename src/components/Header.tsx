import React from 'react';
import { Moon, Sun, Users, BookOpen, Camera, Award } from 'lucide-react';

interface HeaderProps {
  isDark: boolean;
  toggleTheme: () => void;
}

const Header: React.FC<HeaderProps> = ({ isDark, toggleTheme }) => {
  return (
    <header className={`fixed top-0 w-full z-50 transition-all duration-300 backdrop-blur-md ${
      isDark ? 'bg-slate-900/90 border-slate-700' : 'bg-white/90 border-amber-200'
    } border-b`}>
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className={`p-2 rounded-lg ${
              isDark ? 'bg-blue-600' : 'bg-blue-700'
            }`}>
              <BookOpen className="h-6 w-6 text-white" />
            </div>
            <div>
              <h1 className={`text-xl font-bold ${
                isDark ? 'text-white' : 'text-slate-800'
              }`}>ClassConnect</h1>
              <p className={`text-sm ${
                isDark ? 'text-slate-300' : 'text-slate-600'
              }`}>Academic Excellence • Class of 2024</p>
            </div>
          </div>
          
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#home" className={`flex items-center space-x-2 hover:text-blue-600 transition-colors ${
              isDark ? 'text-slate-300' : 'text-slate-600'
            }`}>
              <Users className="h-4 w-4" />
              <span>Students</span>
            </a>
            <a href="#structure" className={`flex items-center space-x-2 hover:text-blue-600 transition-colors ${
              isDark ? 'text-slate-300' : 'text-slate-600'
            }`}>
              <Award className="h-4 w-4" />
              <span>Structure</span>
            </a>
            <a href="#gallery" className={`flex items-center space-x-2 hover:text-blue-600 transition-colors ${
              isDark ? 'text-slate-300' : 'text-slate-600'
            }`}>
              <Camera className="h-4 w-4" />
              <span>Gallery</span>
            </a>
          </nav>
          
          <button
            onClick={toggleTheme}
            className={`p-3 rounded-full transition-all duration-300 hover:scale-110 ${
              isDark 
                ? 'bg-slate-700 hover:bg-slate-600 text-yellow-400' 
                : 'bg-slate-100 hover:bg-slate-200 text-slate-600'
            }`}
          >
            {isDark ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;