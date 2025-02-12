import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import "@mantine/core/styles.css";
import "animate.css";
import { MantineProvider } from "@mantine/core";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Portfolio | Saqlain Zarjis Ansari",
  description: "Showcasing the work of Saqlain, a Software Developer with expertise in HTML, CSS, JavaScript, React, Next.js, TypeScript, Astro.js, SCSS, Tailwind, Payload CMS, Communication, JIRA, Confluence, and Github. Explore innovative projects, sleek designs, and seamless user experiences.",
  
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${geistSans.variable} ${geistMono.variable} font-sans antialiased bg-gradient-to-r from-slate-900 to-neutral-900`}
      >
        <MantineProvider>
          <Navbar />
          <main className="mt-20 lg:mt-14">{children}</main>
          <Footer />
        </MantineProvider>
      </body>
    </html>
  );
}
