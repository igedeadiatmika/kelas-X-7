import React from 'react';
import { Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin, Heart } from 'lucide-react';

interface FooterProps {
  isDark: boolean;
}

const Footer: React.FC<FooterProps> = ({ isDark }) => {
  return (
    <footer className={`pt-20 pb-8 ${
      isDark ? 'bg-slate-900 border-t border-slate-800' : 'bg-slate-800'
    }`}>
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-12 mb-16">
          {/* Contact Info */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-white mb-6">Get In Touch</h3>
            <div className="space-y-4">
              <div className="flex items-center space-x-3 text-slate-300">
                <Mail className="h-5 w-5 text-blue-400" />
                <span>classorg2024@email.com</span>
              </div>
              <div className="flex items-center space-x-3 text-slate-300">
                <Phone className="h-5 w-5 text-blue-400" />
                <span>+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-3 text-slate-300">
                <MapPin className="h-5 w-5 text-blue-400" />
                <span>123 University Ave, Campus City</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-white mb-6">Quick Links</h3>
            <div className="space-y-3">
              {['About Us', 'Our History', 'Leadership', 'Events', 'Gallery', 'Contact'].map((link) => (
                <a
                  key={link}
                  href={`#${link.toLowerCase().replace(' ', '-')}`}
                  className="block text-slate-300 hover:text-blue-400 transition-colors"
                >
                  {link}
                </a>
              ))}
            </div>
          </div>

          {/* Academic Years */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-white mb-6">Academic Years</h3>
            <div className="space-y-3">
              {['2020-2021', '2021-2022', '2022-2023', '2023-2024', 'Alumni Network'].map((year) => (
                <a
                  key={year}
                  href="#"
                  className="block text-slate-300 hover:text-blue-400 transition-colors"
                >
                  {year}
                </a>
              ))}
            </div>
          </div>

          {/* Newsletter */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-white mb-6">Stay Connected</h3>
            <p className="text-slate-300 mb-4">
              Subscribe to receive updates about class events, achievements, and alumni news.
            </p>
            <div className="space-y-4">
              <div className="flex">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-3 bg-slate-700 text-white rounded-l-lg border border-slate-600 focus:border-blue-500 outline-none"
                />
                <button className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-r-lg transition-colors">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Social Links & Stats */}
        <div className="border-t border-slate-700 pt-12 mb-12">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h4 className="text-xl font-bold text-white mb-6">Follow Our Journey</h4>
              <div className="flex space-x-4">
                {[
                  { icon: Facebook, href: '#', color: 'hover:text-blue-500' },
                  { icon: Twitter, href: '#', color: 'hover:text-sky-400' },
                  { icon: Instagram, href: '#', color: 'hover:text-pink-500' },
                  { icon: Linkedin, href: '#', color: 'hover:text-blue-600' }
                ].map((social, index) => {
                  const IconComponent = social.icon;
                  return (
                    <a
                      key={index}
                      href={social.href}
                      className={`p-3 bg-slate-700 text-slate-300 rounded-lg transition-all duration-300 hover:scale-110 ${social.color}`}
                    >
                      <IconComponent className="h-6 w-6" />
                    </a>
                  );
                })}
              </div>
            </div>

            <div>
              <h4 className="text-xl font-bold text-white mb-6">Class Statistics</h4>
              <div className="grid grid-cols-2 gap-6">
                {[
                  { number: '150+', label: 'Students' },
                  { number: '25+', label: 'Awards' },
                  { number: '50+', label: 'Events' },
                  { number: '4', label: 'Years' }
                ].map((stat, index) => (
                  <div key={index} className="text-center">
                    <div className="text-2xl font-bold text-blue-400">{stat.number}</div>
                    <div className="text-slate-400 text-sm">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-slate-700 pt-8 flex flex-col md:flex-row items-center justify-between">
          <div className="flex items-center space-x-2 text-slate-400 mb-4 md:mb-0">
            <span>© 2024 ClassConnect. Made with</span>
            <Heart className="h-4 w-4 text-red-500" />
            <span>by our amazing class</span>
          </div>
          
          <div className="flex items-center space-x-6 text-slate-400 text-sm">
            <a href="#" className="hover:text-blue-400 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-blue-400 transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-blue-400 transition-colors">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;