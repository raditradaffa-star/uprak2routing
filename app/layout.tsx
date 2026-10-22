import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import Footer from "./components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Website Pribadi Siswa RPL",
  description: "Portofolio dan Cerita Pengalaman Siswa Rekayasa Perangkat Lunak",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="id"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-screen bg-gray-50 text-gray-800 flex flex-col">
        {/* 1. Header (Full Width di paling atas) */}
        <Header />

        {/* 2. Bagian Tengah: Sidebar di kiri dan Konten Utama di kanan */}
        <div className="flex-1 flex flex-col md:flex-row w-full">
          <Sidebar />
          <main className="flex-1 p-6 sm:p-8 lg:p-10">
            {children}
          </main>
        </div>

        {/* 3. Footer (Full Width di paling bawah) */}
        <Footer />
      </body>
    </html>
  );
}
