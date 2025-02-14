import { Link, useLocation } from 'react-router-dom';
import { Mail, FileText, LinkedinIcon } from 'lucide-react';
import { useIsMobile } from '@/hooks/use-mobile';

const Navigation = () => {
  const location = useLocation();
  const isMobile = useIsMobile();

  const links = [
    { path: '/', label: 'Home' },
    { path: '/writing', label: 'Writing' },
    { path: '/film-documentary', label: 'Film & Documentary' },
    { path: '/development', label: 'Web Development' },
  ];

  const socialButtons = [
    { 
      icon: <Mail className="w-5 h-5 text-white" />, 
      href: 'mailto:satpalkaler.sk@gmail.com',
      label: 'Email'
    },
    { 
      icon: <LinkedinIcon className="w-5 h-5 text-white" />,
      href: 'https://linkedin.com/in/satpalkaler',
      label: 'LinkedIn'
    },
    { 
      icon: <FileText className="w-5 h-5 text-white" />, 
      href: '/001 Satpal Kaler Resume.pdf',
      label: 'CV'
    },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 bg-[#00C18C]/95 backdrop-blur-sm z-50">
      <div className="max-w-4xl mx-auto px-8">
        <div className="flex flex-col items-center py-4">
          {/* Social buttons */}
          <div className="flex gap-2 mb-4">
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

          {/* Name - only show if not on home page */}
          {location.pathname !== '/' && (
            <h1 className="text-5xl font-bold text-white mb-4">Satpal Kaler</h1>
          )}

          {/* Navigation links */}
          <div className="flex items-center space-x-8">
            {links.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`navigation-link ${
                  location.pathname === link.path ? 'text-white underline underline-offset-4' : ''
                }`}
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
