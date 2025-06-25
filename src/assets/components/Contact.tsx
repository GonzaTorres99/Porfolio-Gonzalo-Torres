import { useState } from "react"
import emailjs from "emailjs-com"

const Contact: React.FC = () => {
    const [formData, setFormData] = useState({
        // Estado del formulario
        name: '',
        email: '',
        message: ''
    })

    const [isSubmit, setIsSubmit] = useState(false)
    const [error, setError] = useState<string | null>(null)
    const [success, setSucces] = useState<string | null>(null)

    //Cambios en los imputs
    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target
        setFormData((prevData) => ({
            ...prevData,
            [name]: value
        }))
    }

    // Envio del formulario
    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        setError(null)
        setSucces(null)



        // Validación 
        if (!formData.name || !formData.email || !formData.message) {
            setError("Todos los campos son obligatorios")
            return
        }

        try {
            setIsSubmit(true)
            // Enviar el formulario a través de EmailJS
      await emailjs.send(
        "service_pv84nsc", 
        "template_uxbx6en", 
        {
          name: formData.name,
          email: formData.email,
          message: formData.message,
        },
        "jyKOV-8lkq40hfnkl" 
      );
            setSucces("Mensaje enviado exitosamente!!")
        } catch {
            setError("Hubo un error al enviar el mensaje. Intentelo de Nuevo")
        } finally {
            setIsSubmit(false)
        }
    }
    return (
        <div className="max-w-[1200px] mx-auto bg-black sm:py-20 p-5" id="contact">

            <div className="text-center">
                <h2 className="text-4xl font-bold leading-tigh primary-color">Contáctame</h2>
            </div>

            <div className="max-w-[800px] mx-auto">

                <div className="mt-6 bg-[#161616] rounded-xl">
                    <div className="p-10">

                        <form onSubmit={handleSubmit}>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-5 gap-y-4">
                                <div>
                                    <div className="mt-2.5 relative">
                                        <input
                                            type="text"
                                            name="name"
                                            placeholder="Ingrese su nombre"
                                            value={formData.name}
                                            onChange={handleChange}
                                            className="bg-[#161616] w-full px-4 py-4 text-gray-400 placeholder-gray-400 border
                                                    border-gray-700 rounded-md focus:outline-none focus:border-pink-600" />
                                    </div>
                                </div>

                                <div>
                                    <div className="mt-2.5 relative">
                                        <input type="email"
                                            name="email"
                                            placeholder="Ingrese su email"
                                            value={formData.email}
                                            onChange={handleChange}
                                            className="bg-[#161616] w-full px-4 py-4 text-gray-400 placeholder-gray-400 border
                                                    border-gray-700 rounded-md focus:outline-none focus:border-pink-600" />
                                    </div>
                                </div>

                                <div className="sm:col-span-2">
                                    <div className="mt-2.5 relative">
                                        <textarea name="message"
                                            id=""
                                            placeholder="Deje un mensaje"
                                            value={formData.message}
                                            onChange={handleChange}
                                            className="bg-[#161616] w-full px-4 py-4 text-gray-400 placeholder-gray-400 border
                                                    border-gray-700 rounded-md focus:outline-none focus:border-pink-600"
                                            rows={4}>

                                        </textarea>
                                    </div>
                                </div>

                                <div className="sm:col-span-2">
                                    <button type="submit"
                                        className="text-xl w-full p-4 mt-2 font-semibold text-white bg-primary-color rounded-md"
                                        disabled={isSubmit}>
                                        {isSubmit ? "Enviando..." : "Enviar"}
                                    </button>
                                </div>
                            </div>
                            {error && <p className="text-red-500 mt-4">{error}</p>}
                            {success && <p className="text-green-500 mt-4">{success}</p>}
                        </form>

                    </div>
                </div>
            </div>

        </div>
    )
}

export default Contact