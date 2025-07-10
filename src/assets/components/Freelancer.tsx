import { useState } from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

// Definimos tipo para las props si fueran necesarias
interface FreelancerProps {
  // Puedes añadir props aquí si necesitas
}

const Freelancer: React.FC<FreelancerProps> = () => {
  const [currentSlide, setCurrentSlide] = useState<number>(0);
  
  // Lista de imágenes del carrusel - con rutas correctas
  const images: string[] = [
    'bpa.png',
    'adminbpa.png',
    'perfilbpa.png',
    'cuotabpa.png',
    'tablerobpa.png',
  ];
  
  const nextSlide = (): void => {
    setCurrentSlide((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };
  
  const prevSlide = (): void => {
    setCurrentSlide((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };
  
  return (
    <div className='text-white max-w-[1200px] mx-auto my-24 px-4' id='freelancer'>
      <div className='md:grid md:grid-cols-2 gap-12 items-center'>
        {/* Carrusel de imágenes a la izquierda */}
        <div className='mb-12 md:mb-0 relative'>
          <div className='rounded-2xl overflow-hidden shadow-xl bg-gray-800 p-2'>
            <img 
              src={`/${images[currentSlide]}`} 
              alt={`Proyecto freelance ${currentSlide + 1}`} 
              className='w-full h-auto object-contain max-h-[400px] mx-auto rounded-lg'
            />
          </div>
          
          {/* Controles del carrusel */}
          <div className='flex justify-center mt-6 space-x-4'>
            <button 
              onClick={prevSlide}
              className='bg-gray-800 hover:bg-gradient-to-br hover:from-orange-500 hover:to-pink-500 p-3 rounded-full transition-all'
              aria-label='Anterior'
            >
              <FaChevronLeft className='text-xl' />
            </button>
            
            <div className='flex items-center'>
              {images.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-3 h-3 mx-1 rounded-full ${
                    index === currentSlide 
                      ? 'bg-gradient-to-br from-orange-500 to-pink-500' 
                      : 'bg-gray-600'
                  }`}
                  aria-label={`Ir a slide ${index + 1}`}
                  aria-current={index === currentSlide ? 'true' : 'false'}
                />
              ))}
            </div>
            
            <button 
              onClick={nextSlide}
              className='bg-gray-800 hover:bg-gradient-to-br hover:from-orange-500 hover:to-pink-500 p-3 rounded-full transition-all'
              aria-label='Siguiente'
            >
              <FaChevronRight className='text-xl' />
            </button>
          </div>
        </div>
        
        {/* Contenido de texto a la derecha */}
        <div>
          <h2 className='text-4xl font-bold mb-6'>
            <span className='text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-pink-500'>Trabajos</span> como Freelancer
          </h2>
          
          <div className='space-y-4 text-lg'>
            <p>
               Como desarrollador freelance, he tenido la oportunidad de trabajar en proyectos diversos 
              que me han permitido aplicar mis habilidades técnicas en contextos reales y desafiantes.
            </p>
            
            <p>
               Recientemente desplegué 2 proyectos completos que incluyen tanto el desarrollo 
              frontend como backend, implementando funcionalidades avanzadas y asegurando una 
              experiencia de usuario óptima.
            </p>
            
            <p>
               Estos proyectos abarcan desde aplicaciones web responsivas hasta sistemas 
              administrativos, utilizando tecnologías modernas como <span className='bg-gray-800 px-2 py-1 rounded'>React</span>, 
              <span className='bg-gray-800 px-2 py-1 rounded'> Node.js</span>, y <span className='bg-gray-800 px-2 py-1 rounded'>MongoDB</span>.
            </p>
            
            <p>
               Cada solución fue diseñada meticulosamente para satisfacer las necesidades 
              específicas de los clientes, priorizando la escalabilidad y el rendimiento.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Freelancer;