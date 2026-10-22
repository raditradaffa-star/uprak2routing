"use client";

// app/components/Sidebar.tsx
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Sidebar() {
  const pathname = usePathname();

  // Logika penentuan menu aktif
  const isHomeActive = pathname === "/";
  const isPengalamanActive =
    pathname === "/pengalaman" || pathname.startsWith("/pengalaman/");

  return (
    <aside className="w-full md:w-64 bg-white border-b md:border-b-0 md:border-r border-gray-200 p-4 sm:p-6 shrink-0">
      <nav className="space-y-2">
        {/* Menu 1: Home */}
        <Link
          href="/"
          className={`flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-medium transition ${
            isHomeActive
              ? "bg-green-600 text-white shadow-xs font-semibold"
              : "text-gray-700 hover:bg-gray-100 hover:text-gray-900"
          }`}
        >
          <svg
            className="w-5 h-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
            />
          </svg>
          <span>Home</span>
        </Link>

        {/* Menu 2: Pengalaman Saya */}
        <Link
          href="/pengalaman"
          className={`flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-medium transition ${
            isPengalamanActive
              ? "bg-green-600 text-white shadow-xs font-semibold"
              : "text-gray-700 hover:bg-gray-100 hover:text-gray-900"
          }`}
        >
          <svg
            className="w-5 h-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z"
            />
          </svg>
          <span>Pengalaman Saya</span>
        </Link>
      </nav>
    </aside>
  );
}
