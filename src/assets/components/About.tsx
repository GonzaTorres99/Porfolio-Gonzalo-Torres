import aboutImg from '../publics/MartinaDiazPH-7.jpg';

const About = () => {
    return (
        <div className='text-white max-w-[1200px] mx-auto my-12 md:my-24 px-4' id='about'>
            <div className='md:grid md:grid-cols-2 gap-12 items-center'>
                {/* Contenedor de texto */}
                <div className='order-2 md:order-1'>
                    <div className='my-auto'>
                        <h2 className='text-4xl font-bold mb-6'>
                            Sobre <span className='text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-pink-500'>mí</span>
                        </h2>
                        
                        <div className='space-y-4 text-lg'>
                            <p>
                                 ¡Hola! Soy <strong>Gonzalo Torres</strong>, finalicé la Diplomatura de Full Stack Developer realizada en la Universidad Tecnologica Nacional regional de Buenos Aires en agosto de 2023.
                            </p>
                            
                            <p>
                                 Actualmente trabajo como <strong>freelancer</strong>, desarrollando proyectos web completos. Recientemente desplegué 2 proyectos en los que puse a prueba mis habilidades técnicas.
                            </p>
                            
                            <p>
                                 En la <strong>Dirección de Tecnología Educativa</strong>, adquirí experiencia diseñando aulas virtuales con <span className='bg-gray-800 px-2 py-1 rounded'>HTML</span> + <span className='bg-gray-800 px-2 py-1 rounded'>Bootstrap</span>, creando experiencias de aprendizaje efectivas.
                            </p>
                            
                            <p>
                                 Me mantengo en constante actualización para implementar soluciones innovadoras y eficientes en cada proyecto.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Contenedor de imagen */}
                <div className='order-1 md:order-2 flex justify-center mb-8 md:mb-0'>
                    <div className='relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-transparent bg-gradient-to-br from-orange-500 to-pink-500 p-1'>
                        <img 
                            src={aboutImg} 
                            alt="Gonzalo Torres" 
                            className='w-full h-full object-cover'
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About;