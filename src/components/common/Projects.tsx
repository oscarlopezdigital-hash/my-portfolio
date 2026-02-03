// src/components/common/Projects.tsx

export const Projects = () => {
    const projects = [
        {
            title: "Elyssy - Hair Management",
            desc: "Plataforma integral para negocios de peluquería. Incluye gestión de inventario, turnos y panel administrativo.",
            tech: ["Next.js 15", "Tailwind", "Supabase"],
            status: "Live Demo"
        },
        {
            title: "Architecture Cloud API",
            desc: "Microservicio desarrollado en Django para la gestión y versionado de planos arquitectónicos en la nube.",
            tech: ["Python", "Django", "PostgreSQL"],
            status: "GitHub"
        }
    ];

    return (
        <section id="proyectos" className="py-24 bg-white">
            <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="mb-16">
                    <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
                        Proyectos Destacados
                    </h2>
                    <div className="mt-2 h-1 w-20 bg-blue-600 rounded"></div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {projects.map((project, index) => (
                        <div
                            key={index}
                            className="group relative flex flex-col p-8 bg-white border border-gray-100 rounded-3xl transition-all duration-300 hover:shadow-2xl hover:shadow-blue-50 hover:border-blue-100"
                        >
                            <h3 className="text-xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors">
                                {project.title}
                            </h3>
                            <p className="mt-4 text-gray-600 leading-relaxed flex-grow">
                                {project.desc}
                            </p>
                            <div className="mt-6 flex flex-wrap gap-2">
                                {project.tech.map((t) => (
                                    <span key={t} className="px-3 py-1 text-xs font-semibold text-gray-500 bg-gray-50 rounded-lg">
                                        {t}
                                    </span>
                                ))}
                            </div>
                            <div className="mt-8">
                                <span className="text-sm font-bold text-gray-900 inline-flex items-center group-hover:translate-x-1 transition-transform">
                                    Ver detalles <span className="ml-2">→</span>
                                </span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};