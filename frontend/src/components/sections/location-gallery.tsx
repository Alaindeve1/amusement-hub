import type { LocationImage } from "@/lib/api";

interface LocationGalleryProps {
  images: LocationImage[];
}

export default function LocationGallery({ images }: LocationGalleryProps) {
  if (!images.length) return null;
  const primary = images.find(i => i.is_primary) || images[0];
  const others = images.filter(i => i.id !== primary.id);

  return (
    <section className="mt-8">
      <h2 className="text-xl font-semibold mb-3">Gallery</h2>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
        <div className="sm:col-span-2 rounded-lg overflow-hidden border bg-white/70">
          <img src={primary.image_url} alt={primary.alt_text || "Location image"} className="w-full h-64 md:h-80 object-cover" />
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-1 gap-3">
          {others.slice(0, 4).map(img => (
            <div key={img.id} className="rounded-lg overflow-hidden border bg-white/70">
              <img src={img.image_url} alt={img.alt_text || "Location image"} className="w-full h-32 object-cover" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
