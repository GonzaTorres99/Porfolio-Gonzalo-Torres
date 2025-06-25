import react from '../publics/react.png'
import python from '../publics/python.png'
import html from '../publics/html.png'
import css from '../publics/css.png'
import js from '../publics/javascript.png'
import tailwind from '../publics/tailwind.png'
import typescript from '../publics/typescript.png'


const Skills = () => {
    return (
        <div className='bg-black text-gray-400 md:h-[150px] max-w-[1200px] mx-auto grid grid-cols-3
                        place-items-center md:flex md:justify-between md:items-center'>

            <h2 className='text-white text-2x1 md:text-4x1 font-bold m-4'>
                My <br /> Techs <br /> Stack
            </h2>

            <div className="flex flex-col items-center m-4 sm:my-0 w-[80px] md:w-[100px]">
                <img src={html} alt="html" />
                <p className='mt-2'>HTML</p>
            </div>

            <div className="flex flex-col items-center m-4 sm:my-0 w-[80px] md:w-[100px]">
                <img src={css} alt="css" />
                <p className='mt-2'>CSS</p>
            </div>

            <div className="flex flex-col items-center m-4 sm:my-0 w-[80px] md:w-[100px]">
                <img src={js} alt="js" />
                <p className='mt-2'>JavaScript</p>
            </div>

            <div className="flex flex-col items-center m-4 sm:my-0 w-[80px] md:w-[100px]">
                <img src={react} alt="react" />
                <p className='mt-2'>React</p>
            </div>

            <div className="flex flex-col items-center m-4 sm:my-0 w-[80px] md:w-[100px]">
                <img src={typescript} alt="typescript" />
                <p className='mt-2'>TypeScript</p>
            </div>

            <div className="flex flex-col items-center m-4 sm:my-0 w-[80px] md:w-[100px]">
                <img src={python} alt="python" />
                <p className='mt-2'>Python</p>
            </div>

            <div className="flex flex-col items-center m-4 sm:my-0 w-[80px] md:w-[100px]">
                <img src={tailwind} alt="tailwind" />
                <p className='mt-2'>Tailwind</p>
            </div>
        </div>
    )
}

export default Skills