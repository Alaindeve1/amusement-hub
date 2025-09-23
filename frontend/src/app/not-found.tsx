import Link from "next/link";

export default function NotFound() {
  return (
    <main className="container mx-auto px-4 py-16 text-center">
      <h1 className="text-4xl font-extrabold mb-3">Page not found</h1>
      <p className="text-gray-600 mb-6">The page you are looking for doesnt exist or has been moved.</p>
      <Link href="/" className="inline-block px-4 py-2 rounded-lg font-semibold text-white bg-gradient-to-r from-pink-500 to-yellow-400 hover:scale-105 transition">
        Go back home
      </Link>
    </main>
  );
}
