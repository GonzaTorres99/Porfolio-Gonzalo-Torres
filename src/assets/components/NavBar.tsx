import { useState, useEffect, useRef } from 'react';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';

const NavBar = () => {
  const [nav, setNav] = useState(false);
  const navbarRef = useRef<HTMLDivElement>(null);
  
  // Manejar clics en el navbar
  const handleNav = () => {
    setNav(!nav);
  };

  // Cerrar el menú móvil cuando se hace clic en un enlace
  const closeMobileMenu = () => {
    setNav(false);
  };

  // Función para scroll suave a una sección
  const scrollToSection = (id: string) => {
    closeMobileMenu();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  // Agregar sombra al navbar al hacer scroll
  useEffect(() => {
    const handleScroll = () => {
      if (navbarRef.current) {
        if (window.scrollY > 10) {
          navbarRef.current.classList.add('shadow-md');
          navbarRef.current.classList.add('bg-black/90');
          navbarRef.current.classList.remove('bg-black');
        } else {
          navbarRef.current.classList.remove('shadow-md');
          navbarRef.current.classList.remove('bg-black/90');
          navbarRef.current.classList.add('bg-black');
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div 
      ref={navbarRef}
      className='fixed w-full z-50 bg-black text-gray-400 h-[100px] flex justify-between items-center px-4 transition-all duration-300'
    >
      <h1 className='text-3xl font-bold primary-color'>
        Gonzalo Torres
      </h1>
      
      {/* Menú Desktop */}
      <ul className='hidden md:flex space-x-2'>
        <li className="p-5 hover:text-white transition-colors">
          <button 
            onClick={() => scrollToSection('about')}
            className="hover:bg-gradient-to-r hover:from-orange-500 hover:to-pink-500 hover:text-transparent hover:bg-clip-text"
          >
            Sobre mí
          </button>
        </li>
        <li className="p-5 hover:text-white transition-colors">
          <button 
            onClick={() => scrollToSection('freelancer')}
            className="hover:bg-gradient-to-r hover:from-orange-500 hover:to-pink-500 hover:text-transparent hover:bg-clip-text"
          >
            Freelancer
          </button>
        </li>
        <li className="p-5 hover:text-white transition-colors">
          <button 
            onClick={() => scrollToSection('contact')}
            className="hover:bg-gradient-to-r hover:from-orange-500 hover:to-pink-500 hover:text-transparent hover:bg-clip-text"
          >
            Contacto
          </button>
        </li>
      </ul>

      {/* Botón Menú Móvil */}
      <button 
        onClick={handleNav}
        className='block md:hidden p-3 rounded-lg hover:bg-gray-800 transition-colors'
        aria-label={nav ? "Cerrar menú" : "Abrir menú"}
      >
        {nav ? <AiOutlineClose size={24} /> : <AiOutlineMenu size={24} />}
      </button>

      {/* Menú Móvil */}
      <div 
        className={
          nav 
            ? 'fixed h-full left-0 top-0 w-[70%] bg-[#0f0f0f] ease-in-out duration-500 md:hidden z-50'
            : 'fixed left-[-100%] top-0 h-full w-[70%] ease-in-out duration-500 z-50'
        }
      >
        <div className='p-6 border-b border-gray-800'>
          <h1 className='text-3xl primary-color'>Gonzalo Torres</h1>
        </div>
        
        <ul className='p-6 space-y-6 text-xl'>
          <li>
            <button 
              onClick={() => scrollToSection('about')}
              className="w-full text-left py-3 hover:text-white transition-colors flex items-center"
            >
              <span className="bg-gradient-to-r from-orange-500 to-pink-500 w-2 h-2 rounded-full mr-3"></span>
              Sobre mí
            </button>
          </li>
          <li>
            <button 
              onClick={() => scrollToSection('freelancer')}
              className="w-full text-left py-3 hover:text-white transition-colors flex items-center"
            >
              <span className="bg-gradient-to-r from-orange-500 to-pink-500 w-2 h-2 rounded-full mr-3"></span>
              Freelancer
            </button>
          </li>
          <li>
            <button 
              onClick={() => scrollToSection('contact')}
              className="w-full text-left py-3 hover:text-white transition-colors flex items-center"
            >
              <span className="bg-gradient-to-r from-orange-500 to-pink-500 w-2 h-2 rounded-full mr-3"></span>
              Contacto
            </button>
          </li>
        </ul>
        
        <div className='absolute bottom-0 w-full p-6 border-t border-gray-800'>
          <p className='text-gray-500 text-sm'>© {new Date().getFullYear()} Gonzalo Torres</p>
        </div>
      </div>
      
      {/* Overlay para menú móvil */}
      {nav && (
        <div 
          className="fixed inset-0 bg-black/70 z-40 md:hidden"
          onClick={closeMobileMenu}
        />
      )}
    </div>
  )
}

export default NavBar;