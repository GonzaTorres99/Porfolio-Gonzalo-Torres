import { TypeAnimation } from 'react-type-animation';
import heroImage from '../publics/fotito.jpeg'

const Hero = () => {
    return (
        <div className='flex flex-col md:flex-row items-center justify-between gap-8 max-w-[1200px] w-full mx-auto py-8 px-4 md:px-8 bg-black min-h-[70vh]'>

            {/* Contenedor de imagen - Más grande y mejor alineado */}
            <div className='md:w-[40%] w-full flex justify-center'>
                <div className='relative w-full max-w-[350px] md:max-w-[500px] aspect-square rounded-full overflow-hidden border-4 border-transparent bg-gradient-to-br from-orange-500 to-pink-500 p-1'>
                    <img
                        src={heroImage}
                        alt="hero image"
                        className='w-full h-full object-cover rounded-full'
                    />
                </div>
            </div>

            {/* Contenedor de texto - Ocupa más espacio en móvil, menos en desktop */}
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
                    soy gonzalo torres y tengo muchos años de experiencia
                </p>

                <div className='flex flex-col sm:flex-row gap-4 my-8'>
                    <a href="" className='px-6 py-3 rounded-xl bg-gradient-to-br from-orange-500 to-pink-500 text-white text-center font-medium hover:opacity-90 transition-opacity'>
                        Descargar CV
                    </a>
                    <a href="" className='px-6 py-3 rounded-xl border border-gray-400 text-white text-center font-medium hover:bg-gradient-to-br hover:from-orange-500 hover:to-pink-500 hover:border-none transition-all'>
                        Contacto
                    </a>
                </div>
            </div>


        </div>
    )
}

export default Hero