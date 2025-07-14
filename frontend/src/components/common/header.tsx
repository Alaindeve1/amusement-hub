
import Link from "next/link";

export default function Header() {
  return (
    <header className="w-full bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 shadow-lg">
      <div className="max-w-7xl mx-auto flex items-center justify-between py-4 px-6">
        {/* Logo/Brand */}
        <Link href="/" className="text-3xl font-extrabold text-white tracking-tight drop-shadow-lg">
          🎡 Amusement Hub
        </Link>
        {/* Navigation */}
        <nav className="flex items-center gap-6">
          <Link href="/locations" className="text-white text-lg font-medium hover:underline">
            Locations
          </Link>
          <Link href="/about" className="text-white text-lg font-medium hover:underline">
            About
          </Link>
        </nav>
        {/* Auth Buttons */}
        <div className="flex items-center gap-4">
          <Link
            href="/login"
            className="bg-white text-blue-600 font-semibold px-4 py-2 rounded-lg shadow hover:bg-blue-100 transition"
          >
            Login
          </Link>
          <Link
            href="/register"
            className="bg-yellow-400 text-white font-semibold px-4 py-2 rounded-lg shadow hover:bg-yellow-300 transition"
          >
            Sign Up
          </Link>
        </div>
      </div>
    </header>
  );
}

