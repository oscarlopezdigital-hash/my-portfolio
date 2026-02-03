// src/components/common/Hero.tsx
import { PROFILE_DATA } from '@/constants/profile';
export const Hero = () => {
    console.log("Datos cargados:", PROFILE_DATA.name);
    return (
        <section className="relative w-full py-20 lg:py-32 overflow-hidden">
            <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center text-center">

                {/* Badge de disponibilidad */}
                {/* Badge de disponibilidad actualizado */}
                <div className="inline-flex items-center rounded-full px-4 py-1.5 text-sm font-semibold bg-blue-50 text-blue-700 ring-1 ring-inset ring-blue-700/10 mb-8 animate-fade-in">
                    <span className="relative flex h-2 w-2 mr-2">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
                    </span>
                    Disponible para proyectos en remoto (World-wide)
                </div>

                {/* Título Principal */}
                <h1 className="text-5xl font-extrabold tracking-tight text-gray-900 sm:text-7xl mb-8">
                    {PROFILE_DATA.role.split('&')[0]}
                    <span className="block text-blue-600 mt-2 tracking-normal text-4xl sm:text-6xl">
                        & {PROFILE_DATA.role.split('&')[1]}
                    </span>
                </h1>

                {/* Descripción */}
                <p className="max-w-2xl text-xl text-gray-600 leading-relaxed mb-12">
                    {PROFILE_DATA.description}
                </p>

                {/* Acciones (CTA) */}
                <div className="flex flex-col sm:flex-row gap-5 w-full sm:w-auto">
                    <a
                        href="#proyectos"
                        className="inline-flex justify-center items-center px-8 py-4 text-base font-bold text-white bg-gray-900 rounded-2xl hover:bg-blue-600 hover:scale-105 transition-all duration-300 shadow-xl shadow-gray-200"
                    >
                        Ver mis proyectos
                    </a>
                    <a
                        href="https://www.linkedin.com/in/oscarlopezfullstack/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex justify-center items-center px-8 py-4 text-base font-bold text-gray-900 bg-white border-2 border-gray-100 rounded-2xl hover:border-blue-100 hover:bg-blue-50/50 transition-all duration-300"
                    >
                        Contactar ahora
                    </a>
                </div>
            </div>

            {/* Decoración de fondo (Arquitectura) */}
            <div className="absolute top-0 -z-10 h-full w-full bg-white">
                <div className="absolute bottom-auto left-auto right-0 top-0 h-[500px] w-[500px] -translate-x-[30%] translate-y-[20%] rounded-full bg-[rgba(173,109,244,0.05)] opacity-50 blur-[80px]"></div>
            </div>
        </section>
    );
};