import { TypeAnimation } from 'react-type-animation';
import heroImage from '../publics/fotito.jpeg'
import { saveAs } from 'file-saver';
import { useEffect, useState } from 'react';

const Hero = () => {
  // Estado para manejar la descarga
  const [isDownloading, setIsDownloading] = useState(false);
  
  // URL del CV - puedes guardarlo en public o en un servicio de almacenamiento
  const cvUrl = '/CV-Torres_Gonzalo.pdf'; 
  
  // Función para manejar la descarga
  const handleDownloadCV = async () => {
    setIsDownloading(true);
    try {
      // Verificamos si el archivo existe
      const response = await fetch(cvUrl);
      
      if (!response.ok) {
        throw new Error('El archivo CV no se encontró');
      }
      
      // Descargamos el archivo
      saveAs(cvUrl, 'CV_Gonzalo_Torres.pdf');
      
      // Simulamos un pequeño retraso para mejor UX
      setTimeout(() => {
        setIsDownloading(false);
      }, 1000);
    } catch (error) {
      console.error('Error al descargar el CV:', error);
      setIsDownloading(false);
      alert('Hubo un error al descargar el CV. Por favor intenta nuevamente.');
    }
  };

  // Efecto para limpiar el estado al desmontar
  useEffect(() => {
    return () => setIsDownloading(false);
  }, []);

  return (
    <div className='flex flex-col md:flex-row items-center justify-between gap-8 max-w-[1200px] w-full mx-auto py-8 px-4 md:px-8 bg-black min-h-[70vh]'>

      {/* Contenedor de imagen */}
      <div className='md:w-[40%] w-full flex justify-center'>
        <div className='relative w-full max-w-[350px] md:max-w-[500px] aspect-square rounded-full overflow-hidden border-4 border-transparent bg-gradient-to-br from-orange-500 to-pink-500 p-1'>
          <img
            src={heroImage}
            alt="Gonzalo Torres - FullStack Developer"
            className='w-full h-full object-cover rounded-full'
          />
        </div>
      </div>

      {/* Contenedor de texto */}
      <div className='md:w-[60%] w-full text-center md:text-left'>
        <h1 className='text-white text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-extrabold'>
          <span className='text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-pink-500'>
            Yo soy
          </span> <br />
          <TypeAnimation
            sequence={[
              "Frontend Dev",
              1000,
              "Backend Dev",
              1000,
              "FullStack Dev",
              1000,
            ]}
            wrapper='span'
            speed={50}
            repeat={Infinity}
            className='block mt-2'
          />
        </h1>

        <p className='text-white sm:text-lg my-6 lg:text-xl max-w-[600px] md:mx-0 mx-auto'>
          Desarrollador Fullstack freelance con recientes despliegues de proyectos innovadores. 
          Experiencia adicional diseñando aulas virtuales para instituciones educativas.
        </p>

        <div className='flex flex-col sm:flex-row gap-4 my-8'>
          {/* Botón de Descargar CV */}
          <button
            onClick={handleDownloadCV}
            disabled={isDownloading}
            className={`px-6 py-3 rounded-xl text-white text-center font-medium transition-all ${
              isDownloading 
                ? 'bg-gray-500 cursor-not-allowed' 
                : 'bg-gradient-to-br from-orange-500 to-pink-500 hover:opacity-90'
            } flex items-center justify-center`}
          >
            {isDownloading ? (
              <>
                <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                Descargando...
              </>
            ) : (
              <>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                </svg>
                Descargar CV
              </>
            )}
          </button>
          
          {/* Botón de LinkedIn */}
          <a 
            href="https://www.linkedin.com/in/gonzalo-torres-67160327b/" 
            target='_blank' 
            rel="noopener noreferrer"
            className='px-6 py-3 rounded-xl border border-gray-400 text-white text-center font-medium hover:bg-gradient-to-br hover:from-orange-500 hover:to-pink-500 hover:border-none transition-all flex items-center justify-center'
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 24 24" fill="currentColor">
              <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
            </svg>
            LinkedIn
          </a>
        </div>
      </div>
    </div>
  )
}

export default Hero;