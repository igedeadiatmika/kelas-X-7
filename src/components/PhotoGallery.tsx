import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, X, Calendar, MapPin, Users } from 'lucide-react';

interface PhotoGalleryProps {
  isDark: boolean;
}

interface Photo {
  id: number;
  src: string;
  title: string;
  date: string;
  location: string;
  attendees: number;
  category: string;
}

const PhotoGallery: React.FC<PhotoGalleryProps> = ({ isDark }) => {
  const [selectedPhoto, setSelectedPhoto] = useState<Photo | null>(null);
  const [filter, setFilter] = useState('all');
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const photos: Photo[] = [
    {
      id: 1,
      src: "https://images.pexels.com/photos/1595391/pexels-photo-1595391.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop",
      title: "Graduation Ceremony 2024",
      date: "June 15, 2024",
      location: "University Auditorium",
      attendees: 150,
      category: "ceremony"
    },
    {
      id: 2,
      src: "https://images.pexels.com/photos/1438072/pexels-photo-1438072.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop",
      title: "Annual Science Fair",
      date: "March 20, 2024",
      location: "Science Building",
      attendees: 80,
      category: "academic"
    },
    {
      id: 3,
      src: "https://images.pexels.com/photos/1540406/pexels-photo-1540406.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop",
      title: "Winter Formal Dance",
      date: "December 10, 2023",
      location: "Grand Ballroom",
      attendees: 120,
      category: "social"
    },
    {
      id: 4,
      src: "https://images.pexels.com/photos/1181534/pexels-photo-1181534.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop",
      title: "Community Service Day",
      date: "October 5, 2023",
      location: "Local Park",
      attendees: 60,
      category: "service"
    },
    {
      id: 5,
      src: "https://images.pexels.com/photos/1181263/pexels-photo-1181263.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop",
      title: "Academic Awards Ceremony",
      date: "May 18, 2024",
      location: "Main Hall",
      attendees: 100,
      category: "ceremony"
    },
    {
      id: 6,
      src: "https://images.pexels.com/photos/1181676/pexels-photo-1181676.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop",
      title: "Spring Campus Tour",
      date: "April 12, 2024",
      location: "Campus Grounds",
      attendees: 40,
      category: "academic"
    }
  ];

  const categories = ['all', 'ceremony', 'academic', 'social', 'service'];
  const filteredPhotos = filter === 'all' ? photos : photos.filter(photo => photo.category === filter);

  const openLightbox = (photo: Photo) => {
    setSelectedPhoto(photo);
    setCurrentImageIndex(filteredPhotos.findIndex(p => p.id === photo.id));
  };

  const closeLightbox = () => {
    setSelectedPhoto(null);
  };

  const nextImage = () => {
    const nextIndex = (currentImageIndex + 1) % filteredPhotos.length;
    setCurrentImageIndex(nextIndex);
    setSelectedPhoto(filteredPhotos[nextIndex]);
  };

  const prevImage = () => {
    const prevIndex = (currentImageIndex - 1 + filteredPhotos.length) % filteredPhotos.length;
    setCurrentImageIndex(prevIndex);
    setSelectedPhoto(filteredPhotos[prevIndex]);
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (selectedPhoto) {
        if (e.key === 'Escape') closeLightbox();
        if (e.key === 'ArrowRight') nextImage();
        if (e.key === 'ArrowLeft') prevImage();
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [selectedPhoto, currentImageIndex]);

  return (
    <section id="gallery" className={`py-20 px-6 ${
      isDark ? 'bg-slate-900' : 'bg-slate-50'
    }`}>
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className={`text-4xl lg:text-5xl font-bold mb-6 ${
            isDark ? 'text-white' : 'text-slate-800'
          }`}>
            Our Journey in
            <span className={`block ${
              isDark ? 'text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400' 
                     : 'text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600'
            }`}>
              Pictures
            </span>
          </h2>
          <p className={`text-xl max-w-3xl mx-auto ${
            isDark ? 'text-slate-300' : 'text-slate-600'
          }`}>
            Capturing the moments that define our class - from academic achievements to 
            unforgettable celebrations and community service initiatives.
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setFilter(category)}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-300 hover:scale-105 ${
                filter === category
                  ? 'bg-purple-600 text-white shadow-lg'
                  : isDark
                    ? 'bg-slate-800 text-slate-300 hover:bg-slate-700'
                    : 'bg-white text-slate-600 hover:bg-slate-100 border border-slate-200'
              }`}
            >
              {category.charAt(0).toUpperCase() + category.slice(1)}
            </button>
          ))}
        </div>

        {/* Photo Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredPhotos.map((photo) => (
            <div
              key={photo.id}
              className={`group relative overflow-hidden rounded-3xl cursor-pointer transition-all duration-500 hover:scale-105 ${
                isDark 
                  ? 'bg-slate-800 hover:shadow-2xl hover:shadow-purple-500/20' 
                  : 'bg-white hover:shadow-2xl hover:shadow-purple-500/20'
              }`}
              onClick={() => openLightbox(photo)}
            >
              <div className="relative overflow-hidden">
                <img
                  src={photo.src}
                  alt={photo.title}
                  className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                  <h3 className="text-xl font-bold mb-2">{photo.title}</h3>
                  <div className="flex items-center justify-between text-sm">
                    <div className="flex items-center space-x-4">
                      <div className="flex items-center space-x-1">
                        <Calendar className="h-4 w-4" />
                        <span>{photo.date}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Users className="h-4 w-4" />
                        <span>{photo.attendees}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className={`text-lg font-semibold mb-2 ${
                  isDark ? 'text-white' : 'text-slate-800'
                }`}>
                  {photo.title}
                </h3>
                <div className="flex items-center space-x-1 text-sm mb-3">
                  <MapPin className={`h-4 w-4 ${
                    isDark ? 'text-slate-400' : 'text-slate-500'
                  }`} />
                  <span className={isDark ? 'text-slate-400' : 'text-slate-500'}>
                    {photo.location}
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                    isDark 
                      ? 'bg-purple-900/30 text-purple-300 border border-purple-700' 
                      : 'bg-purple-100 text-purple-700 border border-purple-200'
                  }`}>
                    {photo.category}
                  </span>
                  <span className={`text-sm ${
                    isDark ? 'text-slate-400' : 'text-slate-500'
                  }`}>
                    {photo.date}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Lightbox */}
        {selectedPhoto && (
          <div className="fixed inset-0 bg-black/90 flex items-center justify-center z-50 p-4">
            <div className="relative max-w-5xl w-full max-h-full">
              <button
                onClick={closeLightbox}
                className="absolute top-4 right-4 text-white hover:text-gray-300 z-10 bg-black/50 rounded-full p-2"
              >
                <X className="h-6 w-6" />
              </button>
              
              <div className="relative">
                <img
                  src={selectedPhoto.src}
                  alt={selectedPhoto.title}
                  className="w-full h-auto max-h-[80vh] object-contain rounded-lg"
                />
                
                <button
                  onClick={prevImage}
                  className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white hover:text-gray-300 bg-black/50 rounded-full p-3"
                >
                  <ChevronLeft className="h-6 w-6" />
                </button>
                
                <button
                  onClick={nextImage}
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white hover:text-gray-300 bg-black/50 rounded-full p-3"
                >
                  <ChevronRight className="h-6 w-6" />
                </button>
              </div>
              
              <div className="mt-6 text-white">
                <h3 className="text-2xl font-bold mb-2">{selectedPhoto.title}</h3>
                <div className="flex flex-wrap items-center gap-6 text-sm text-gray-300">
                  <div className="flex items-center space-x-1">
                    <Calendar className="h-4 w-4" />
                    <span>{selectedPhoto.date}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <MapPin className="h-4 w-4" />
                    <span>{selectedPhoto.location}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Users className="h-4 w-4" />
                    <span>{selectedPhoto.attendees} attendees</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default PhotoGallery;