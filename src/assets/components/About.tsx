import aboutImg from '../publics/MartinaDiazPH-7.jpg'

const About = () => {
    return (
        <div className='text-white max-w-[1200px] mx-auto my-12' id='about'>

            <div className='md:grid md:grid-cols-2 sm:py-16'>

                <div className='mt-4 md:mt-0 text-left flex'>
                    <div className='my-auto mx-16'>
                        <h2 className='text-4xl font-bold mb-4 primary-color'>Sobre mi</h2>
                        <p className='text-base lg:text-lg'>
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Enim natus quia fugiat optio a illum perspiciatis illo, quam deserunt cupiditate! Mollitia et natus reiciendis consequuntur saepe perspiciatis architecto voluptatum est.
                        </p>
                    </div>
                </div>

                <img src={aboutImg} alt="about" className='mx-auto rounded-3x1 py-8 md:py-0' width={300} height={300}/>

            </div>

        </div>
    )
}

export default About