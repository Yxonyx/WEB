"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function NotFound() {
  const pathname = usePathname();
  const isEn = pathname?.startsWith("/en");

  return (
    <div className="min-h-screen bg-[#040812] flex items-center justify-center text-white px-4">
      <div className="max-w-xl text-center">
        <h1 className="text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#4F8AFF] to-[#9B72FF] mb-6">
          404
        </h1>
        <h2 className="text-3xl font-semibold mb-6">
          {isEn ? "Page Not Found" : "Az oldal nem található"}
        </h2>
        <p className="text-gray-400 mb-8 text-lg">
          {isEn
            ? "Sorry, but the page you are looking for has been moved or doesn't exist anymore."
            : "Sajnáljuk, de a keresett oldal valószínűleg megszűnt vagy áthelyezésre került."}
        </p>
        <Link
          href={isEn ? "/en/" : "/hu/"}
          className="inline-flex items-center justify-center px-8 py-4 rounded-full bg-[#4F8AFF] text-white font-medium hover:bg-opacity-90 transition-colors"
        >
          {isEn ? "Return to Homepage" : "Vissza a főoldalra"}
        </Link>
      </div>
    </div>
  );
}
