import type { OpeningHour } from "@/lib/api";

const dayNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

function formatTime(t?: string | null) {
  if (!t) return "";
  // Expecting HH:MM:SS
  const [h, m] = t.split(":");
  const hour = Number(h);
  const ampm = hour >= 12 ? "PM" : "AM";
  const hr12 = ((hour + 11) % 12) + 1;
  return `${hr12}:${m} ${ampm}`;
}

interface OpeningHoursProps {
  hours: OpeningHour[];
}

export default function OpeningHours({ hours }: OpeningHoursProps) {
  if (!hours.length) return null;
  const sorted = [...hours].sort((a, b) => a.day_of_week - b.day_of_week);
  return (
    <section className="mt-8">
      <h2 className="text-xl font-semibold mb-3">Opening Hours</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        {sorted.map(h => (
          <div key={h.id} className="p-3 rounded-lg border bg-white/70 backdrop-blur">
            <div className="flex items-center justify-between">
              <div className="font-medium">{dayNames[h.day_of_week]}</div>
              {h.is_closed ? (
                <div className="text-red-600 font-semibold">Closed</div>
              ) : (
                <div className="text-gray-700 text-sm">
                  {formatTime(h.opening_time)} - {formatTime(h.closing_time)}
                </div>
              )}
            </div>
            {h.special_notes && (
              <div className="text-xs text-gray-500 mt-1">{h.special_notes}</div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
