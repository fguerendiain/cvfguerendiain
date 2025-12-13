import type { Metadata } from "next";
import "./globals.css";
import Providers from "@/providers/providers";
import { Header } from "@/components/Header";

export const metadata: Metadata = {
  title: "Franco Guerendiain - CV",
  description: "Currículum Web de Franco Guerendiain, Frontend Developer",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" className="scroll-pt-24">
      <body className="min-h-screen antialiased bg-gray-300 dark:bg-neutral-950 text-neutral-800 dark:text-neutral-200">
        <Providers>
          <Header />
          <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-12">
            {children}
          </main>
        </Providers>
      </body>
    </html>
  );
}
