// app/components/Header.tsx
import Link from "next/link";

export default function Header() {
  return (
    <header className="w-full bg-white border-b border-gray-200 shadow-xs">
      <div className="w-full px-4 sm:px-8 h-16 flex items-center justify-between">
        <Link
          href="/"
          className="text-xl font-bold text-gray-900 hover:text-green-600 transition-colors flex items-center gap-2"
        >
          <span className="w-3 h-3 rounded-full bg-green-600 inline-block"></span>
          <span>Daxx High Perform</span>
        </Link>
      </div>
    </header>
  );
}
