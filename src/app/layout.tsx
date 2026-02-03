// src/app/layout.tsx
import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";

const geist = Geist({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "Óscar López | Full-Stack Developer",
    description: "Desarrollo robusto y arquitectura Cloud en Valdemoro.",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="es" className="scroll-smooth">
            <body className={`${geist.className} antialiased bg-white text-gray-900`}>
                <Navbar />
                <main className="pt-20"> {/* Padding superior para no quedar bajo el Navbar fixed */}
                    {children}
                </main>
            </body>
        </html>
    );
}