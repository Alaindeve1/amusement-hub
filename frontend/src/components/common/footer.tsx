import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t bg-white/60 dark:bg-transparent backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 md:px-6 py-8 text-sm text-gray-600 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <p className="order-2 md:order-1">© {new Date().getFullYear()} Amusement Hub. All rights reserved.</p>
        <nav className="order-1 md:order-2 flex gap-6">
          <Link href="/about" className="hover:text-pink-600 transition-colors">About</Link>
          <Link href="/locations" className="hover:text-pink-600 transition-colors">Locations</Link>
          <Link href="/privacy" className="hover:text-pink-600 transition-colors">Privacy</Link>
          <Link href="/terms" className="hover:text-pink-600 transition-colors">Terms</Link>
        </nav>
      </div>
    </footer>
  );
}
