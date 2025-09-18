import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./components/ui/navbar";
import Footer from "./components/ui/footer";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Duman Marlambekov's Portfolio",
  description: "Welcome to my portfolio website! I'm Duman Marlambekov, a full-stack developer. Explore my projects, skills, and experience as you navigate through my site.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${inter.variable} antialiased`}
      >
        <Navbar />
        <div className="flex flex-col items-center justify-center p-10">
          <div className="bg-neutral-800 w-full max-w-2xl p-8 rounded-lg shadow-lg">
            {children}
          </div>
        </div>
        <Footer />
      </body>
    </html>
  );
}
