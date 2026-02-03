// src/components/layout/Navbar.tsx
import Link from 'next/link';
import { PROFILE_DATA } from '@/constants/profile';

export const Navbar = () => {
    return (
        <nav className="fixed w-full z-50 top-0 bg-white/80 backdrop-blur-md border-b border-gray-100">
            <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between h-16 items-center">
                    <div className="flex-shrink-0 flex items-center">
                        <Link href="/" className="text-xl font-bold text-gray-900">
                            {PROFILE_DATA.name.split(' ')[0]}<span className="text-blue-600">.digital</span>
                        </Link>
                    </div>
                    <div className="hidden md:block">
                        <div className="ml-10 flex items-baseline space-x-8">
                            <a href="#proyectos" className="text-gray-600 hover:text-blue-600 px-3 py-2 text-sm font-medium transition-colors">
                                Proyectos
                            </a>
                            <Link href={PROFILE_DATA.githubUrl} target="_blank" className="bg-blue-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-blue-700 transition-colors">
                                GitHub
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    );
};