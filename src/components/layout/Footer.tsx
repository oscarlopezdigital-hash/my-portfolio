export const Footer = () => {
    return (
        <footer className="py-12 border-t border-gray-100 bg-white">
            <div className="max-w-5xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-6">
                <p className="text-gray-500 text-sm">
                    © {new Date().getFullYear()} Óscar López. Desarrollado con Next.js 15.
                </p>
                <div className="flex space-x-6">
                    <a href="#proyectos" className="text-sm text-gray-400 hover:text-blue-600 transition-colors">Proyectos</a>
                    <a
                        href="https://www.linkedin.com/in/oscarlopezfullstack/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm text-gray-400 hover:text-blue-600 transition-colors"
                    >
                        LinkedIn
                    </a>
                </div>
            </div>
        </footer>
    );
};