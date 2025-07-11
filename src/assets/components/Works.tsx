import tateti from '/tateti.png'
import movielist from '/movielist.png'
import panaderia from '/panaderia.png'

const Works = () => {
    return (
        <div className="max-w-[1200px] mx-auto p-5" id="work">
            <div className="pb-8">
                <p className="text-4xl mb-3 font-bold primary-color">Proyectos Personales</p>
                <p className="text-gray-400">Un recorrido por mis proyectos con los que empeze a afianzar mis conocimientos</p>
            </div>

            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">

                <div className="transform transition-transform duration-300 hover:scale-105 overflow-hidden shadow-lg shadow-[#040c16]
                            group container rounded-md flex justify-center items-center mx-auto content-div h-[200px] bg-cover relative">
                    <img src={panaderia} className="w-full h-full object-cover" />
                    <div className='opacity-0 group-hover:opacity-90 bg-[gray]/70 absolute inset-0 flex flex-col justify-center items-center'>
                        <span className='text-2x1 font-bold text-white tracking-wider'>Eccomerce de Prueba</span>
                        <div className='pt-8 text-center'>
                            <a href="https://github.com/GonzaTorres99/Carrito-Login-NodeJS" target='_blank'>
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                                    Ver en GitHub
                                </button>
                            </a>
                        </div>
                    </div>
                </div>

                <div className="transform transition-transform duration-300 hover:scale-105 overflow-hidden shadow-lg shadow-[#040c16]
                            group container rounded-md flex justify-center items-center mx-auto content-div h-[200px] bg-cover relative">
                    <img src={tateti} className="w-full h-full object-cover" />
                    <div className='opacity-0 group-hover:opacity-90 bg-[gray]/70 absolute inset-0 flex flex-col justify-center items-center'>
                        <span className='text-2x1 font-bold text-white tracking-wider'>Ta Te Ti</span>
                        <div className='pt-8 text-center'>
                            <a href="https://github.com/GonzaTorres99/Ta-Te-Ti---Gonzalo-Torres" target='_blank'>
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                                    Ver en GitHub
                                </button>
                            </a>
                        </div>
                    </div>
                </div>

                <div className="transform transition-transform duration-300 hover:scale-105 overflow-hidden shadow-lg shadow-[#040c16]
                            group container rounded-md flex justify-center items-center mx-auto content-div h-[200px] bg-cover relative">
                    <img src={movielist} className="w-full h-full object-cover" />
                    <div className='opacity-0 group-hover:opacity-90 bg-[gray]/70 absolute inset-0 flex flex-col justify-center items-center'>
                        <span className='text-2x1 font-bold text-white tracking-wider'>Mi Movielist</span>
                        <div className='pt-8 text-center'>
                            <a href="https://github.com/GonzaTorres99/TP-Final-con-React-Vite" target='_blank'>
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                                    Ver en GitHub
                                </button>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Works