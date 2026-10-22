// app/page.tsx
import Link from "next/link";

export default function Home() {
  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 py-16 sm:py-24">
      {/* Section Hero: Perkenalan Singkat */}
      <section id="hero" className="text-center py-8 space-y-4">
        <h1 className="text-3xl sm:text-4xl font-bold text-gray-900">
          Halo, Dapzzz
        </h1>
        <p className="text-gray-600 max-w-2xl mx-auto text-sm sm:text-base leading-relaxed">
          Selamat datang di website pengalaman saya. Saya mempelajari pengembangan
          web modern menggunakan Next.js dan Tailwind CSS. Berikut
          adalah beberapa proyek yang telah saya selesaikan.
        </p>
        <div className="flex justify-center pt-2">
          <Link
            href="/pengalaman"
            className="bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium px-5 py-2.5 rounded-lg transition"
          >
            Lihat Pengalaman
          </Link>
        </div>
      </section>
    </div>
  );
}
