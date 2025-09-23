
"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { useAuth } from "@/context/AuthContext";

export default function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const { user, logout } = useAuth();

  const isActive = (href: string) => (pathname === href ? "text-pink-600" : "text-gray-700");

  return (
    <header className="w-full bg-white/80 backdrop-blur sticky top-0 z-20 shadow-sm">
      <nav className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
        {/* Logo / Site Name */}
        <Link href="/" className="text-2xl font-extrabold text-pink-600 tracking-tight">
          Amusement Hub
        </Link>

        {/* Desktop Navigation Links */}
        <div className="hidden md:flex gap-8 font-medium">
          <Link href="/" className={`hover:text-pink-500 transition ${isActive("/")}`}>Home</Link>
          <Link href="/locations" className={`hover:text-pink-500 transition ${isActive("/locations")}`}>Locations</Link>
          <Link href="/about" className={`hover:text-pink-500 transition ${isActive("/about")}`}>About</Link>
        </div>

        {/* Mobile menu button */}
        <button
          className="md:hidden p-2 rounded-lg border bg-white/70"
          aria-label="Toggle menu"
          onClick={() => setOpen(v => !v)}
        >
          <span className="block w-5 h-0.5 bg-gray-700 mb-1" />
          <span className="block w-5 h-0.5 bg-gray-700 mb-1" />
          <span className="block w-5 h-0.5 bg-gray-700" />
        </button>

        {/* Auth Buttons or User Menu */}
        <div className="flex items-center gap-4">
          {!user ? (
            <>
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
            </>
          ) : (
            <div className="relative group">
              <div className="flex items-center gap-2 cursor-pointer select-none">
                <div className="w-8 h-8 rounded-full bg-gradient-to-r from-pink-500 to-yellow-400" />
                <div className="text-sm font-medium">{user.username || user.email}</div>
              </div>
              <div className="absolute right-0 mt-2 hidden group-hover:block bg-white border rounded-lg shadow-md min-w-40 py-2">
                <Link href="/profile" className="block px-4 py-2 hover:bg-gray-50">Profile</Link>
                <button onClick={logout} className="block w-full text-left px-4 py-2 hover:bg-gray-50">Logout</button>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Mobile menu panel */}
      {open && (
        <div className="md:hidden px-6 pb-4 pt-2 bg-white/90 backdrop-blur border-t">
          <div className="flex flex-col gap-3 text-base font-medium">
            <Link href="/" className={`hover:text-pink-500 transition ${isActive("/")}`} onClick={() => setOpen(false)}>Home</Link>
            <Link href="/locations" className={`hover:text-pink-500 transition ${isActive("/locations")}`} onClick={() => setOpen(false)}>Locations</Link>
            <Link href="/about" className={`hover:text-pink-500 transition ${isActive("/about")}`} onClick={() => setOpen(false)}>About</Link>
          </div>
        </div>
      )}
    </header>
  );
}

