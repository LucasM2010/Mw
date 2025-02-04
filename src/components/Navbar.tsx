import { useState, useEffect } from 'react';
import { Link } from 'react-scroll';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed w-full z-50 transition-all duration-100 ease-in-out ${
      isScrolled ? 'bg-white/95 backdrop-blur-sm shadow-md' : 'bg-white'
    } py-4`}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-center relative">
          <div className="absolute left-4 w-16 h-16">
            
          </div>
          <div className="flex items-center justify-center space-x-12">
            <Link to="home" className="nav-link text-black hover:text-gray-700 border-b-2 border-transparent hover:border-black">
              HOME
            </Link>
            <Link to="about" className="nav-link text-black hover:text-gray-700 border-b-2 border-transparent hover:border-black">
              SOBRE O CASAL
            </Link>
            <Link to="ceremony-photos" className="nav-link text-black hover:text-gray-700 border-b-2 border-transparent hover:border-black">
              CERIMÔNIA
            </Link>
            <Link to="gifts" className="nav-link text-black hover:text-gray-700 border-b-2 border-transparent hover:border-black">
              LISTA DE PRESENTES
            </Link>
            <Link to="confirmation" className="nav-link text-black hover:text-gray-700 border-b-2 border-transparent hover:border-black">
              CONFIRMAÇÃO DE PRESENÇA
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
