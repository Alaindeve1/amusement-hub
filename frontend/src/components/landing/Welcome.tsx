import Link from "next/link";

export default function Welcome() {
  return (
    <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden">
      {/* Background gradient and animated blobs */}
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-pink-100 via-white to-blue-100 dark:from-[#131a2b] dark:via-[#0b1220] dark:to-[#0b1220]" />
      <div className="pointer-events-none absolute -top-24 -left-24 h-80 w-80 rounded-full bg-pink-400/30 blur-3xl animate-blob" />
      <div className="pointer-events-none absolute -bottom-24 -right-24 h-96 w-96 rounded-full bg-sky-400/30 blur-3xl animate-blob [animation-delay:1.5s]" />
      <div className="pointer-events-none absolute top-1/3 left-1/2 -translate-x-1/2 h-64 w-64 rounded-full bg-amber-300/20 blur-3xl animate-blob [animation-delay:3s]" />

      <div className="relative mx-auto w-full max-w-6xl px-4 sm:px-6">
        <div className="text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-pink-200/60 bg-white/70 px-4 py-1 text-sm font-medium text-pink-600 shadow-sm backdrop-blur">
            ✨ Welcome to Amusement Hub
          </span>
          <h1 className="mt-6 text-5xl font-extrabold tracking-tight text-slate-900 drop-shadow-sm dark:text-white sm:text-6xl">
            Find Your Next <span className="bg-gradient-to-r from-pink-500 via-amber-400 to-sky-500 bg-clip-text text-transparent">Amazing Attraction</span>
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-slate-600 dark:text-slate-300">
            Discover thrilling rides, family-friendly parks, and hidden gems. Explore curated attractions and plan unforgettable adventures.
          </p>

        </div>

        {/* CTA buttons */}
        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Link
            href="/register"
            className="group inline-flex items-center justify-center rounded-lg bg-gradient-to-r from-pink-500 to-amber-400 px-8 py-3 font-semibold text-white shadow-lg shadow-pink-500/20 transition-transform hover:scale-[1.03] focus:outline-none focus:ring-2 focus:ring-pink-400 focus:ring-offset-2"
          >
            Create an account
            <svg className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-0.5" viewBox="0 0 20 20" fill="currentColor"><path d="M10.293 3.293a1 1 0 011.414 0l5 5a1 1 0 010 1.414l-5 5a1 1 0 11-1.414-1.414L13.586 10H4a1 1 0 110-2h9.586l-3.293-3.293a1 1 0 010-1.414z"/></svg>
          </Link>
          <Link
            href="/login"
            className="inline-flex items-center justify-center rounded-lg border border-sky-200 bg-white/80 px-8 py-3 font-semibold text-sky-700 shadow-sm backdrop-blur transition hover:bg-sky-50 focus:outline-none focus:ring-2 focus:ring-sky-300 focus:ring-offset-2 dark:border-sky-800/50 dark:bg-white/10 dark:text-sky-300"
          >
            Sign in
          </Link>
        </div>

        {/* Floating cards previewing attractions */}
        <div className="relative mt-16 grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-6">
          {cards.map((card, i) => (
            <div
              key={card.title}
              className="group relative overflow-hidden rounded-xl border border-white/60 bg-white/70 p-4 shadow-md backdrop-blur transition hover:shadow-lg dark:border-white/10 dark:bg-white/10"
              style={{ animationDelay: `${i * 100}ms` }}
            >
              <div className="text-2xl">{card.emoji}</div>
              <div className="mt-3 text-sm font-semibold text-slate-800 dark:text-slate-100">{card.title}</div>
              <div className="mt-1 text-xs text-slate-500 line-clamp-2 dark:text-slate-300">{card.desc}</div>
              <div className="absolute inset-0 -z-10 opacity-0 group-hover:opacity-100">
                <div className="absolute -inset-0.5 rounded-xl bg-gradient-to-r from-pink-500/20 to-amber-400/20 blur-md" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

const cards = [
  { emoji: "🎢", title: "Roller Coasters", desc: "High-speed thrills and loops you'll never forget." },
  { emoji: "🎡", title: "Ferris Wheels", desc: "Panoramic views and skyline sunsets." },
  { emoji: "🎠", title: "Carousels", desc: "Classic charm for all ages." },
  { emoji: "🧟", title: "Haunted Houses", desc: "Spine-chilling adventures and jump scares." },
  { emoji: "💦", title: "Water Rides", desc: "Cool off with splash-tastic fun." },
  { emoji: "🍿", title: "Food Courts", desc: "Tasty bites to fuel your day." },
];
