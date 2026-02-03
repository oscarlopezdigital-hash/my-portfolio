// src/components/common/Skills.tsx

export const Skills = () => {
    const categories = [
        {
            title: "Cloud & Arquitectura",
            skills: ["AWS", "Azure", "Docker", "Microservicios"]
        },
        {
            title: "Backend Development",
            skills: ["Python", "Django", ".NET Core", "SQL Server"]
        },
        {
            title: "Frontend & Design",
            skills: ["React", "Next.js 15", "Tailwind CSS", "TypeScript"]
        }
    ];

    return (
        <section className="py-24 bg-gray-50/50">
            <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl font-bold text-gray-900">Especialización Técnica</h2>
                    <p className="mt-4 text-gray-600">Stack tecnológico enfocado en escalabilidad y seguridad.</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                    {categories.map((cat, i) => (
                        <div key={i} className="flex flex-col">
                            <h3 className="text-sm font-bold text-blue-600 uppercase tracking-widest mb-6">
                                {cat.title}
                            </h3>
                            <ul className="space-y-4">
                                {cat.skills.map(skill => (
                                    <li key={skill} className="flex items-center text-gray-700 font-medium group">
                                        <span className="h-1.5 w-1.5 rounded-full bg-blue-400 mr-3 group-hover:scale-150 group-hover:bg-blue-600 transition-all"></span>
                                        {skill}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};