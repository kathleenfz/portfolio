
import { Link, useLocation } from 'react-router-dom';
import { Menu, Mail, FileText, Linkedin } from 'lucide-react';
import { useState } from 'react';
import { useIsMobile } from '@/hooks/use-mobile';
import { useQuery } from '@tanstack/react-query';
import { fetchContent } from '@/utils/content';

const Navigation = () => {
  const location = useLocation();
  const isMobile = useIsMobile();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  const { data: bioData } = useQuery({
    queryKey: ['bio'],
    queryFn: () => fetchContent('bio'),
  });

  const links = [
    { path: '/', label: 'Bio' },
    { path: '/writing', label: 'Writing' },
    { path: '/filmmaking', label: 'Filmmaking' },
    { path: '/development', label: 'Development' },
  ];

  const socialButtons = [
    { 
      icon: <Mail className="w-5 h-5" />, 
      href: `mailto:${bioData?.email || ''}`,
      label: 'Email'
    },
    { 
      icon: <Linkedin className="w-5 h-5" />, 
      href: bioData?.linkedin || '#',
      label: 'LinkedIn'
    },
    { 
      icon: <FileText className="w-5 h-5" />, 
      href: bioData?.cvUrl || '#',
      label: 'CV'
    },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 bg-[#00C18C]/95 backdrop-blur-sm z-50">
      <div className="max-w-4xl mx-auto px-8">
        <div className="flex flex-col items-center py-4">
          {/* Social buttons */}
          <div className="flex gap-4 mb-4">
            {socialButtons.map((button, index) => (
              <a
                key={index}
                href={button.href}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-black/10 hover:bg-black/20 transition-colors"
                aria-label={button.label}
              >
                {button.icon}
              </a>
            ))}
          </div>

          {/* Name */}
          <h1 className="text-2xl font-bold text-white mb-4">{bioData?.name || 'Loading...'}</h1>

          {/* Mobile menu button */}
          {isMobile && (
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="absolute right-4 top-4 p-2 text-white"
              aria-label="Toggle menu"
            >
              <Menu className="w-6 h-6" />
            </button>
          )}

          {/* Navigation links */}
          <div
            className={`${
              isMobile
                ? `${
                    isMenuOpen ? 'flex' : 'hidden'
                  } flex-col items-center space-y-4 w-full`
                : 'flex items-center space-x-8'
            }`}
          >
            {links.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`navigation-link ${
                  location.pathname === link.path ? 'text-white' : ''
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
