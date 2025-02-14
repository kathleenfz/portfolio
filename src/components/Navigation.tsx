import { Link, useLocation } from 'react-router-dom';
import { Mail, FileText, LinkedinIcon, Menu, X, Instagram } from 'lucide-react';
import { useIsMobile } from '@/hooks/use-mobile';
import React, { useState } from 'react';

const Navigation = () => {
  const location = useLocation();
  const isMobile = useIsMobile();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const links = [
    { path: '/', label: 'Home' },
    { path: '/film-documentary', label: 'Film & Documentary' },
    { path: '/writing', label: 'Writing' },
    { path: '/webdev', label: 'Web Development' },
  ];

  const socialButtons = [
    { 
      icon: <Mail className="w-5 h-5 text-black" />, 
      href: 'mailto:satpalkaler.sk@gmail.com',
      label: 'Email'
    },
    { 
      icon: <LinkedinIcon className="w-5 h-5 text-black" />,
      href: 'https://linkedin.com/in/satpalkaler',
      label: 'LinkedIn'
    },
    { 
      icon: <Instagram className="w-5 h-5 text-black" />,
      href: 'https://instagram.com/satpal.kaler',
      label: 'Instagram'
    },
    { 
      icon: <FileText className="w-5 h-5 text-black" />, 
      href: '/001 Satpal Kaler Resume.pdf',
      label: 'CV'
    },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 backdrop-blur-sm z-50" style={{ backgroundColor: `hsla(var(--navbar-background) / 0.95)` }}>
      <div className="max-w-4xl mx-auto px-8">
        <div className="flex flex-col items-center py-4">
          {/* Social buttons and hamburger menu in one row */}
          <div className={`flex items-center w-full mb-4 ${isMobile ? 'justify-between' : 'justify-center'}`}>
            <div className="flex gap-2">
              {socialButtons.map((button, index) => (
                <a
                  key={index}
                  href={button.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-full hover:bg-black/20 transition-colors"
                  style={{ backgroundColor: `hsla(var(--navbar-background) / 0.1)` }}
                  aria-label={button.label}
                >
                  {React.cloneElement(button.icon, {
                    className: "w-5 h-5",
                    style: { color: `hsl(var(--navbar-icon))` }
                  })}
                </a>
              ))}
            </div>
            
            {/* Mobile Menu Button */}
            {isMobile && (
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="p-2 rounded-md hover:bg-black/20 transition-colors"
                aria-label="Toggle menu"
              >
                {isMenuOpen ? (
                  <X style={{ color: `hsl(var(--navbar-icon))` }} />
                ) : (
                  <Menu style={{ color: `hsl(var(--navbar-icon))` }} />
                )}
              </button>
            )}
          </div>

          {/* Name - only show if not on home page */}
          {location.pathname !== '/' && (
            <h1 className="text-5xl font-bold mb-4" style={{ color: `hsl(var(--navbar-foreground))` }}>
              Satpal Kaler
            </h1>
          )}

          {/* Navigation links */}
          <div className={`${isMobile ? 'flex flex-col items-center space-y-4' : 'flex items-center justify-center space-x-8'} ${
            isMobile && !isMenuOpen ? 'hidden' : ''
          }`}>
            {links.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`navigation-link text-center ${
                  location.pathname === link.path ? 'text-black underline underline-offset-4' : ''
                }`}
                onClick={() => isMobile && setIsMenuOpen(false)}
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
