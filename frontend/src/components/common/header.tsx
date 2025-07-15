
import Link from "next/link";

export default function Header() {
  return (
    <header className="w-full bg-white/80 backdrop-blur sticky top-0 z-20 shadow-sm">
      <nav className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
        {/* Logo / Site Name */}
        <Link href="/" className="text-2xl font-extrabold text-pink-600 tracking-tight">
          Amusement Hub
        </Link>

        {/* Navigation Links */}
        <div className="hidden md:flex gap-8 text-gray-700 font-medium">
          <Link href="/" className="hover:text-pink-500 transition">Home</Link>
          <Link href="/locations" className="hover:text-pink-500 transition">Locations</Link>
          <Link href="/about" className="hover:text-pink-500 transition">About</Link>
        </div>

        {/* Auth Buttons */}
        <div className="flex gap-4">
          <Link
            href="/login"
            className="px-4 py-2 rounded-lg font-semibold text-blue-600 border border-blue-200 bg-white hover:bg-blue-50 transition"
          >
            Login
          </Link>
          <Link
            href="/register"
            className="px-4 py-2 rounded-lg font-semibold text-white bg-gradient-to-r from-pink-500 to-yellow-400 hover:scale-105 transition"
          >
            Register
          </Link>
        </div>
      </nav>
    </header>
  );
}

