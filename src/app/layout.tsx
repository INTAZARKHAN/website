// app/layout.tsx
import "./globals.css";
import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "My Website",
  description: "Next.js + Tailwind Global Layout",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="min-h-screen bg-white text-gray-900 flex flex-col">
        {/* Header appears on all pages */}
        <Header />

        {/* Main content of the page */}
        <main className="flex-1">
          {children}
        </main>

        {/* Footer appears on all pages */}
        <Footer />
      </body>
    </html>
  );
}
