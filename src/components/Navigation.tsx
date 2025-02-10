
import { Link, useLocation } from 'react-router-dom';

const Navigation = () => {
  const location = useLocation();

  const links = [
    { path: '/', label: 'Bio' },
    { path: '/writing', label: 'Writing' },
    { path: '/filmmaking', label: 'Filmmaking' },
    { path: '/development', label: 'Development' },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 bg-[#00C18C]/95 backdrop-blur-sm z-50 border-b border-white/10">
      <div className="max-w-4xl mx-auto px-8 py-4">
        <div className="flex justify-center items-center space-x-8">
          {links.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`navigation-link ${
                location.pathname === link.path ? 'text-white' : ''
              }`}
            >
              {link.label}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
