import { UserProfile } from "@/types";

export const PROFILE_DATA: UserProfile = {
    name: "Óscar López",
    role: "Full-Stack Developer & Software Architect",
    description: "Especialista en desarrollo robusto con Python, .NET y arquitecturas Cloud. Fusiono la precisión del diseño funcional con la eficiencia técnica para digitalizar negocios con soluciones escalables y seguras.",
    githubUrl: "https://github.com/oscarlopezdigital-hash",
    projects: [
        {
            title: "Arquitectura Cloud Personal",
            description: "Portfolio profesional desarrollado con Next.js 15, aplicando SSR y desplegado en infraestructura escalable.",
            techStack: ["Next.js", "TypeScript", "Tailwind", "AWS"],
            link: "https://github.com/oscarlopezdigital-hash"
        },
        {
            title: "Demo Elyssy Peluquería",
            description: "Propuesta de digitalización para negocio local en Valdemoro. Enfoque en performance y SEO local.",
            techStack: ["React", "Tailwind", "Next.js"],
            isDemo: true
        },
        {
            title: "Sistema Backend Pawify",
            description: "Desarrollo de funcionalidades core utilizando Django y MySQL durante periodo de prácticas.",
            techStack: ["Python", "Django", "MySQL"],
            link: "#"
        }
    ]
};