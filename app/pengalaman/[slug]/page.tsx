/* eslint-disable @next/next/no-img-element */
// app/pengalaman/[slug]/page.tsx
import Link from "next/link";
import type { Metadata } from "next";
import { ceritaList } from "../../data";

interface PageProps {
  params: Promise<{ slug: string }>;
}

// 1. Static Site Generation untuk seluruh slug pengalaman dari data.ts
export function generateStaticParams() {
  return ceritaList.map((item) => ({
    slug: item.slug,
  }));
}

// 2. Dynamic Metadata berdasarkan konten pengalaman
export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const item = ceritaList.find((c) => c.slug === slug);

  if (!item) {
    return {
      title: "Pengalaman Tidak Ditemukan | Website Pribadi Siswa RPL",
    };
  }

  return {
    title: `${item.title} | Website Pribadi Siswa RPL`,
    description: item.excerpt,
  };
}

export default async function DetailPengalamanPage({ params }: PageProps) {
  // Mengambil slug secara asynchronous sesuai Next.js App Router
  const { slug } = await params;

  // Mencari data pengalaman sesuai slug
  const item = ceritaList.find((c) => c.slug === slug);

  return (
    <div className="max-w-3xl space-y-6">
      {/* Tombol Kembali ke Pengalaman Saya */}
      <div>
        <Link
          href="/pengalaman"
          className="inline-flex items-center gap-1.5 text-sm font-medium text-green-700 hover:text-green-800 transition"
        >
          <span>&larr;</span> Kembali ke Pengalaman Saya
        </Link>
      </div>

      {/* Kondisi jika data dengan slug tersebut tidak ditemukan */}
      {!item ? (
        <div className="bg-white border border-red-200 rounded-xl p-8 text-center space-y-4 shadow-xs">
          <h2 className="text-xl font-bold text-red-600">
            Pengalaman Tidak Ditemukan!
          </h2>
          <p className="text-sm text-gray-600">
            Pengalaman dengan slug{" "}
            <code className="bg-gray-100 text-red-500 font-mono px-2 py-0.5 rounded">
              {slug}
            </code>{" "}
            tidak tersedia di database `data.ts`.
          </p>
          <div>
            <Link
              href="/pengalaman"
              className="inline-block bg-green-600 hover:bg-green-700 text-white text-sm font-medium px-4 py-2 rounded-lg transition"
            >
              Kembali ke Pengalaman Saya
            </Link>
          </div>
        </div>
      ) : (
        /* Tampilan Detail Pengalaman Lengkap */
        <article className="bg-white border border-gray-200 rounded-xl overflow-hidden shadow-xs">
          {/* Gambar Besar di Bagian Atas */}
          <div className="w-full h-64 sm:h-80 md:h-96 overflow-hidden bg-gray-100">
            <img
              src={item.image}
              alt={item.title}
              className="w-full h-full object-cover"
            />
          </div>

          <div className="p-6 sm:p-8 space-y-6">
            {/* Header Artikel */}
            <div className="border-b border-gray-100 pb-4 space-y-3">
              <span className="inline-block text-xs font-semibold text-green-700 bg-green-50 border border-green-200 px-3 py-1 rounded-full">
                {item.date}
              </span>
              <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 leading-tight">
                {item.title}
              </h1>
            </div>

            {/* Konten Lengkap */}
            <div className="text-gray-700 text-base leading-relaxed space-y-4">
              <p>{item.content}</p>
            </div>

            {/* Footer Artikel */}
            <div className="pt-6 border-t border-gray-100 flex items-center justify-between">
              <Link
                href="/pengalaman"
                className="text-sm font-medium text-green-700 hover:underline inline-flex items-center gap-1"
              >
                &larr; Lihat Pengalaman Lainnya
              </Link>
            </div>
          </div>
        </article>
      )}
    </div>
  );
}
