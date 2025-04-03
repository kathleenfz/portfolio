import { Link, useLocation } from 'react-router-dom';
import { Mail, FileText, Menu, Linkedin, X } from 'lucide-react';
import { useIsMobile } from '@/hooks/use-mobile';
import React, { useState, useEffect } from 'react';

const Navigation = () => {
  const location = useLocation();
  const isMobile = useIsMobile();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showNotification, setShowNotification] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  const handleEmailClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    navigator.clipboard.writeText('kathleenfz142@gmail.com');
    setShowNotification(true);
    setTimeout(() => setShowNotification(false), 2000);
  };

  const links = [
    { path: '/', label: 'Home' },
    { path: '/articles', label: 'Articles' },
    { path: '/copywriting', label: 'Copywriting' },
  ];

  const socialButtons = [
    { 
      icon: <Mail className="w-5 h-5 text-black" />, 
      href: 'mailto:kathleenfz142@gmail.com ',
      label: 'Email',
      onClick: handleEmailClick
    },
    { 
      icon: <FileText className="w-5 h-5 text-black" />, 
      href: '/KF Resume.pdf',
      label: 'CV'
    },
    { 
      icon: <Linkedin className="w-5 h-5 text-black" />,
      href: 'https://www.linkedin.com/in/kathleenfz142/',
      label: 'LinkedIn'
    },
  ];

  return (
    <div className="relative">
      <nav className="fixed top-0 left-0 right-0 backdrop-blur-sm z-50" style={{ backgroundColor: `hsla(var(--navbar-background) / 0.95)` }}>
        <div className="max-w-4xl mx-auto px-8">
          <div className="flex flex-col items-center py-4">
            {/* Social buttons and hamburger menu in one row */}
            <div className={`flex items-center w-full mt-2 mb-4 ${isMobile ? 'justify-between mt-4' : 'justify-center'}`}>
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
                    onClick={button.onClick}
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
                  onClick={() => {
                    isMobile && setIsMenuOpen(false);
                    window.scrollTo(0, 0);
                  }}
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </nav>
      
      <div
        className={`fixed top-4 right-4 bg-teal-600 text-white px-4 py-2 rounded-md transition-all duration-300 z-50 ${
          showNotification ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-2'
        }`}
      >
        Email address copied to clipboard
      </div>
    </div>
  );
};

export default Navigation;
