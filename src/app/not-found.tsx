import Link from "next/link";

export default function NotFound() {
  return (
    <html lang="hu">
      <body className="bg-black text-white font-sans antialiased">
        <div className="min-h-screen flex flex-col items-center justify-center p-8">
          <h1 className="text-6xl font-bold mb-4 bg-gradient-to-r from-[#4D94FF] to-[#CC00FF] bg-clip-text text-transparent">
            404
          </h1>
          <p className="text-xl text-gray-400 mb-8 text-center max-w-md">
            Sajnáljuk, de a keresett oldal nem létezik vagy el lett
            távolítva.
          </p>
          <Link
            href="/hu/"
            className="px-6 py-3 bg-gradient-to-r from-[#4D94FF] to-[#CC00FF] rounded-full text-white font-medium hover:opacity-90 transition-opacity"
          >
            Vissza a főoldalra
          </Link>
        </div>
      </body>
    </html>
  );
}
