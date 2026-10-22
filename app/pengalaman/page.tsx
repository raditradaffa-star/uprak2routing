/* eslint-disable @next/next/no-img-element */
// app/pengalaman/page.tsx
import Link from "next/link";
import type { Metadata } from "next";
import { ceritaList } from "../data";

export const metadata: Metadata = {
  title: "Pengalaman Saya | Daxx High Perform",
  description: "Pengalaman Saya Dari Kelas 8 Hingga Kelas 11",
};

export default function PengalamanPage() {
  return (
    <div className="space-y-6">
      <div className="border-b border-gray-200 pb-4">
        <h1 className="text-2xl sm:text-3xl font-bold text-gray-900">
          Pengalaman Saya
        </h1>
        <p className="text-sm text-gray-500 mt-1">
          Kumpulan Pengalaman Saya Saat Ini Hingga Kelas 11
        </p>
      </div>

      {/* Grid Kartu Pengalaman */}
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {ceritaList.map((item) => (
          <article
            key={item.id}
            className="bg-white border border-gray-200 rounded-xl overflow-hidden shadow-xs hover:shadow-md transition flex flex-col justify-between"
          >
            <div>
              {/* Gambar Item */}
              <div className="aspect-video w-full overflow-hidden bg-gray-100">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>

              {/* Konten Kartu */}
              <div className="p-5 space-y-2">
                <span className="text-xs font-semibold text-green-700 bg-green-50 border border-green-200 px-2.5 py-0.5 rounded-full">
                  {item.date}
                </span>
                <h2 className="text-lg font-bold text-gray-900 leading-snug">
                  {item.title}
                </h2>
                <p className="text-sm text-gray-600 line-clamp-3 leading-relaxed">
                  {item.excerpt}
                </p>
              </div>
            </div>

            {/* Tombol Baca / Lihat Detail */}
            <div className="p-5 pt-0">
              <Link
                href={`/pengalaman/${item.slug}`}
                className="w-full inline-flex items-center justify-center gap-1.5 bg-green-600 hover:bg-green-700 text-white text-sm font-medium py-2.5 px-4 rounded-lg transition shadow-xs"
              >
                <span>Lihat Detail</span>
                <span>&rarr;</span>
              </Link>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
