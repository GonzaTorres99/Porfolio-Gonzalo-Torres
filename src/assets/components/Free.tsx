import { useState } from 'react';
import bpa from '/bpa.png';
import tablerobpa from '/tablerobpa.png';
import { FaExternalLinkAlt, FaInfoCircle, FaChevronDown, FaChevronUp } from 'react-icons/fa';

const Free = () => {
  const [showDescription, setShowDescription] = useState(true);

  const projects = [
    {
      id: 1,
      title: "Basquet para Adultos",
      image: bpa,
      url: "https://www.basquetparaadultos.com/",
      description: "Plataforma integral para escuela de básquet con sistema de gestión completa",
      features: [
        "Sistema de registro y login para usuarios",
        "Pago de cuotas en línea",
        "Formulario de información personal",
        "Registro de asistencia a clases",
        "Panel de administración para profesores",
        "Gestión de inscripciones y suscripciones"
      ],
      technologies: ["React", "Node.js", "MongoDB", "Cron", "Tailwind CSS", "Render", "Vercel"]
    },
    {
      id: 2,
      title: "Tablero BPA",
      image: tablerobpa,
      url: "https://tablero-bpa.vercel.app/",
      description: "Sistema de marcador para torneos de básquet en tiempo real",
      features: [
        "Visualización en tiempo real del marcador",
        "Diseño optimizado para pantallas grandes",
        "Control remoto del marcador",
        "Cronómetro integrado",
        "Sistema de periodos y tiempos muertos",
        "Personalización para diferentes torneos"
      ],
      technologies: ["React", "JavaScript", "Tailwind CSS", "Vercel"]
    }
  ];

  return (
    <div className="max-w-[1200px] mx-auto py-16 px-4 md:px-8" id="work">
      <div className="pb-8 text-center">
        <h2 className="text-4xl font-bold mb-3 text-white">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-pink-500">
            Proyectos
          </span>{" "}
          de Freelancer
        </h2>
        
        <div className="bg-gray-800/50 rounded-xl p-6 mb-8 max-w-3xl mx-auto">
          <div 
            className="flex justify-between items-center cursor-pointer mb-4"
            onClick={() => setShowDescription(!showDescription)}
          >
            <p className="text-xl font-medium text-white">Descripción General</p>
            {showDescription ? <FaChevronUp /> : <FaChevronDown />}
          </div>
          
          {showDescription && (
            <div className="space-y-4 text-gray-300">
              <p>
                Estos proyectos representan soluciones completas que he desarrollado como freelancer, 
                abarcando desde sistemas de gestión hasta herramientas especializadas para eventos deportivos.
              </p>
              <p>
                <span className="font-semibold text-orange-400">Basquet para Adultos</span> es una plataforma integral 
                que permite a los usuarios registrarse, pagar cuotas, completar su información personal y registrar asistencia. 
                Los administradores pueden gestionar inscripciones y verificar suscripciones.
              </p>
              <p>
                <span className="font-semibold text-pink-400">Tablero BPA</span> es un sistema de marcador diseñado 
                específicamente para torneos de básquet. Se transmite en televisores durante los partidos 
                y permite un control centralizado del marcador y tiempo de juego.
              </p>
            </div>
          )}
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {projects.map((project) => (
          <div 
            key={project.id}
            className="bg-gray-900 rounded-xl overflow-hidden shadow-2xl transform transition-all duration-300 hover:scale-[1.02]"
          >
            <div className="relative">
              <img 
                src={project.image} 
                alt={project.title}
                className="w-full h-64 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end p-6">
                <h3 className="text-2xl font-bold text-white">{project.title}</h3>
              </div>
            </div>
            
            <div className="p-6">
              <p className="text-gray-300 mb-4 flex items-center">
                <FaInfoCircle className="mr-2 text-orange-400" />
                {project.description}
              </p>
              
              <div className="mb-6">
                <h4 className="font-semibold text-lg mb-2 text-gray-200">Características principales:</h4>
                <ul className="grid grid-cols-2 gap-2">
                  {project.features.map((feature, index) => (
                    <li key={index} className="flex items-start text-gray-400 text-sm">
                      <span className="inline-block w-2 h-2 rounded-full bg-pink-500 mt-1.5 mr-2"></span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="mb-6">
                <h4 className="font-semibold text-lg mb-2 text-gray-200">Tecnologías utilizadas:</h4>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, index) => (
                    <span 
                      key={index} 
                      className="px-3 py-1 bg-gray-800 rounded-full text-sm text-gray-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              
              <a 
                href={project.url} 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center px-5 py-3 bg-gradient-to-r from-orange-500 to-pink-500 rounded-lg font-medium hover:opacity-90 transition-opacity"
              >
                Ver proyecto
                <FaExternalLinkAlt className="ml-2" />
              </a>
            </div>
          </div>
        ))}
      </div>
      
      <div className="mt-16 text-center">
        <p className="text-gray-500 max-w-2xl mx-auto">
          Estos proyectos demuestran mi capacidad para desarrollar soluciones completas que 
          resuelven necesidades específicas, con interfaces intuitivas y funcionalidades robustas.
        </p>
      </div>
    </div>
  )
}

export default Free;