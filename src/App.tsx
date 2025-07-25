import React, { useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import StudentGallery from './components/StudentGallery';
import ClassStructure from './components/ClassStructure';
import PhotoGallery from './components/PhotoGallery';
import Footer from './components/Footer';
import { useTheme } from './hooks/useTheme';

function App() {
  const { isDark, toggleTheme } = useTheme();

  useEffect(() => {
    // Smooth scroll behavior
    document.documentElement.style.scrollBehavior = 'smooth';
    
    // Intersection Observer for scroll animations
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-fade-in');
        }
      });
    }, observerOptions);

    // Observe all sections
    const sections = document.querySelectorAll('section');
    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  return (
    <div className={`min-h-screen transition-colors duration-300 ${
      isDark ? 'bg-slate-900 text-white' : 'bg-white text-slate-900'
    }`}>
      <Header isDark={isDark} toggleTheme={toggleTheme} />
      <main>
        <Hero isDark={isDark} />
        <StudentGallery isDark={isDark} />
        <ClassStructure isDark={isDark} />
        <PhotoGallery isDark={isDark} />
      </main>
      <Footer isDark={isDark} />
    </div>
  );
}

export default App;