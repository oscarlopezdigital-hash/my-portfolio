// ... tus otros imports
import { Footer } from "@/components/layout/Footer";
import { Hero } from "../components/common/Hero";
import { Projects } from "../components/common/Projects";
import { Skills } from "../components/common/Skills";

export default function Home() {
    return (
        <main>
            <Hero />
            <Projects />
            <Skills />
            <Footer />
        </main>
    );
}