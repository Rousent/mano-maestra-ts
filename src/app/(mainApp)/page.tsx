

export default function Home() {

    return (
        <div>
            <h2 className="font-bold pb-6">Potencia tu comunicacion</h2>
            <h3 className="font-bold text-xl mb-2 pb-2"> Sigue una ruta de aprendizaje en lenguaje de señas y avanza con cursos especializados de forma ágil y guiada.</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 pb-3">
                <div className="bg-gradient-to-tr from-orange-500 to-blue-500 text-white p-6 rounded-lg">
                    <h3 className="font-bold text-xl mb-2 pb-2">Nivel Básico en Lengua de Señas</h3>
                    <p className="text-justify">Inicia tu viaje en la LSM con las bases esenciales, aprende el alfabeto, vocabulario básico y estructuras fundamentales de LSM para comunicarte de manera básica.</p>
                </div>
                <div className="bg-gradient-to-tr from-orange-500 to-blue-500 text-white p-6 rounded-lg">
                    <h3 className="font-bold text-xl mb-2 pb-2">Nivel Intermedio en Lengua de Señas</h3>
                    <p className="text-justify">Perfecciona tus habilidades en la LSM. Amplía tu vocabulario y comunica de manera más fluida en situaciones cotidianas.</p>
                </div>
                <div className="bg-gradient-to-tr from-orange-500 to-blue-500 text-white p-6 rounded-lg">
                    <h3 className="font-bold text-xl mb-2 pb-2">Nivel Avanzado en Lengua de Señas</h3>
                    <p className="text-justify">Lleva tu dominio de la LSM a un nivel superior. Comunica con fluidez en conversaciones más complejas y participa activamente en la comunidad sorda.</p>
                </div>
                <div className="bg-gradient-to-tr from-orange-500 to-blue-500 text-white p-6 rounded-lg">
                    <h3 className="font-bold text-xl mb-2 pb-2">LSM Orientado a Empresas</h3>
                    <p className="text-justify">Aplica la LSM en entornos laborales. Aprende a comunicarte en el trabajo con inclusión. Además, explora los Fundamentos de Programación para adquirir habilidades tecnológicas esenciales.</p>
                </div>
            </div>
        </div>

    )
}