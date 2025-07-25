import React, { useState } from 'react';
import { Mail, MapPin, Award, ExternalLink } from 'lucide-react';

interface Student {
  id: number;
  name: string;
  role: string;
  location: string;
  email: string;
  achievements: string[];
  image: string;
  bio: string;
}

interface StudentGalleryProps {
  isDark: boolean;
}

const StudentGallery: React.FC<StudentGalleryProps> = ({ isDark }) => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [hoveredStudent, setHoveredStudent] = useState<number | null>(null);

  const students: Student[] = [
    {
      id: 1,
      name: "Sarah Chen",
      role: "Class President",
      location: "New York, NY",
      email: "sarah.chen@email.com",
      achievements: ["Valedictorian", "National Merit Scholar", "Student Council"],
      image: "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop",
      bio: "Leading our class with vision and dedication to excellence."
    },
    {
      id: 2,
      name: "Marcus Johnson",
      role: "Vice President",
      location: "Chicago, IL",
      email: "marcus.j@email.com",
      achievements: ["Honor Society", "Debate Champion", "Community Service"],
      image: "https://images.pexels.com/photos/1040881/pexels-photo-1040881.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop",
      bio: "Passionate about student advocacy and community engagement."
    },
    {
      id: 3,
      name: "Emma Rodriguez",
      role: "Secretary",
      location: "Austin, TX",
      email: "emma.r@email.com",
      achievements: ["Academic Excellence", "Art Award", "Volunteer Leadership"],
      image: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop",
      bio: "Organizing our success with creativity and attention to detail."
    },
    {
      id: 4,
      name: "Alex Thompson",
      role: "Treasurer",
      location: "Denver, CO",
      email: "alex.t@email.com",
      achievements: ["Math Olympiad", "Finance Club", "Leadership Award"],
      image: "https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop",
      bio: "Managing our resources with precision and forward thinking."
    },
    {
      id: 5,
      name: "Zara Patel",
      role: "Events Coordinator",
      location: "Seattle, WA",
      email: "zara.p@email.com",
      achievements: ["Event Planning", "Cultural Ambassador", "Innovation Award"],
      image: "https://images.pexels.com/photos/1559486/pexels-photo-1559486.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop",
      bio: "Creating memorable experiences that bring our class together."
    },
    {
      id: 6,
      name: "James Wilson",
      role: "Communications Lead",
      location: "Miami, FL",
      email: "james.w@email.com",
      achievements: ["Journalism Award", "Tech Innovation", "Public Speaking"],
      image: "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop",
      bio: "Connecting our community through effective communication."
    }
  ];

  const categories = ['all', 'leadership', 'academic', 'creative'];

  return (
    <section className={`py-20 px-6 ${
      isDark ? 'bg-slate-900' : 'bg-slate-50'
    }`}>
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className={`text-4xl lg:text-5xl font-bold mb-6 ${
            isDark ? 'text-white' : 'text-slate-800'
          }`}>
            Meet Our 
            <span className={`block ${
              isDark ? 'text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-amber-400' 
                     : 'text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-amber-600'
            }`}>
              Outstanding Students
            </span>
          </h2>
          <p className={`text-xl max-w-3xl mx-auto ${
            isDark ? 'text-slate-300' : 'text-slate-600'
          }`}>
            Discover the brilliant minds and passionate leaders who make our class exceptional. 
            Each student brings unique talents and perspectives to our community.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-300 hover:scale-105 ${
                selectedCategory === category
                  ? 'bg-blue-600 text-white shadow-lg'
                  : isDark
                    ? 'bg-slate-800 text-slate-300 hover:bg-slate-700'
                    : 'bg-white text-slate-600 hover:bg-slate-100 border border-slate-200'
              }`}
            >
              {category.charAt(0).toUpperCase() + category.slice(1)}
            </button>
          ))}
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {students.map((student) => (
            <div
              key={student.id}
              className={`group relative rounded-3xl overflow-hidden transition-all duration-500 hover:scale-105 cursor-pointer ${
                isDark 
                  ? 'bg-slate-800 border border-slate-700 hover:border-blue-500' 
                  : 'bg-white border border-slate-200 hover:border-blue-300 hover:shadow-2xl'
              }`}
              onMouseEnter={() => setHoveredStudent(student.id)}
              onMouseLeave={() => setHoveredStudent(null)}
            >
              <div className="relative overflow-hidden">
                <img
                  src={student.image}
                  alt={student.name}
                  className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute bottom-4 left-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-4 group-hover:translate-y-0">
                  <div className="flex items-center space-x-3">
                    <button className="p-2 bg-white/20 backdrop-blur-sm rounded-full hover:bg-white/30 transition-colors">
                      <Mail className="h-4 w-4 text-white" />
                    </button>
                    <button className="p-2 bg-white/20 backdrop-blur-sm rounded-full hover:bg-white/30 transition-colors">
                      <ExternalLink className="h-4 w-4 text-white" />
                    </button>
                  </div>
                </div>
              </div>
              
              <div className="p-6 space-y-4">
                <div>
                  <h3 className={`text-xl font-bold ${
                    isDark ? 'text-white' : 'text-slate-800'
                  }`}>
                    {student.name}
                  </h3>
                  <p className={`font-medium ${
                    isDark ? 'text-blue-400' : 'text-blue-600'
                  }`}>
                    {student.role}
                  </p>
                </div>
                
                <div className="flex items-center space-x-2 text-sm">
                  <MapPin className={`h-4 w-4 ${
                    isDark ? 'text-slate-400' : 'text-slate-500'
                  }`} />
                  <span className={isDark ? 'text-slate-400' : 'text-slate-500'}>
                    {student.location}
                  </span>
                </div>
                
                <p className={`text-sm leading-relaxed ${
                  isDark ? 'text-slate-300' : 'text-slate-600'
                }`}>
                  {student.bio}
                </p>
                
                <div className="flex flex-wrap gap-2">
                  {student.achievements.slice(0, 2).map((achievement, index) => (
                    <span
                      key={index}
                      className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium ${
                        isDark 
                          ? 'bg-blue-900/30 text-blue-300 border border-blue-700' 
                          : 'bg-blue-100 text-blue-700 border border-blue-200'
                      }`}
                    >
                      <Award className="h-3 w-3 mr-1" />
                      {achievement}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StudentGallery;