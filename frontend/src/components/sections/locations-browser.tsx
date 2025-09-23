"use client";

import { useMemo, useState } from "react";
import type { Category, Location } from "@/lib/api";
import LocationsGrid from "@/components/ui/LocationGrid";

interface LocationsBrowserProps {
  categories: Category[];
  locations: Location[];
}

export default function LocationsBrowser({ categories, locations }: LocationsBrowserProps) {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState<number | "all">("all");
  const [minRating, setMinRating] = useState<number>(0);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return locations
      .filter(l => (category === "all" ? true : Number(l.category_id) === Number(category)))
      .filter(l => Number(l.average_rating || 0) >= minRating)
      .filter(l =>
        q.length === 0
          ? true
          : [l.name, l.description, l.city, l.state, l.country]
              .filter(Boolean)
              .some(v => String(v).toLowerCase().includes(q))
      )
      .map(l => ({
        id: l.id,
        name: l.name,
        description: l.description || "",
        image: "/globe.svg",
        rating: Number(l.average_rating || 0),
      }));
  }, [locations, category, minRating, query]);

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-3">
        <div className="md:col-span-2">
          <input
            value={query}
            onChange={e => setQuery(e.target.value)}
            placeholder="Search locations, cities, keywords..."
            className="w-full border rounded-lg px-4 py-2 bg-white/80 backdrop-blur focus:outline-none focus:ring-2 focus:ring-pink-500"
          />
        </div>
        <div>
          <select
            value={category === "all" ? "all" : String(category)}
            onChange={e => setCategory(e.target.value === "all" ? "all" : Number(e.target.value))}
            className="w-full border rounded-lg px-4 py-2 bg-white/80 backdrop-blur focus:outline-none focus:ring-2 focus:ring-pink-500"
          >
            <option value="all">All Categories</option>
            {categories.map(c => (
              <option key={c.id} value={c.id}>{c.name}</option>
            ))}
          </select>
        </div>
        <div>
          <select
            value={String(minRating)}
            onChange={e => setMinRating(Number(e.target.value))}
            className="w-full border rounded-lg px-4 py-2 bg-white/80 backdrop-blur focus:outline-none focus:ring-2 focus:ring-pink-500"
          >
            <option value={0}>Any rating</option>
            <option value={4}>4.0+ stars</option>
            <option value={4.5}>4.5+ stars</option>
          </select>
        </div>
      </div>

      <div className="text-sm text-gray-600">{filtered.length} results</div>

      <LocationsGrid locations={filtered} />
    </div>
  );
}
