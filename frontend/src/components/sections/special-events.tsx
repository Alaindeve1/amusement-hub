import type { SpecialEvent } from "@/lib/api";

function formatDate(d: string) {
  const dt = new Date(d);
  if (Number.isNaN(dt.getTime())) return d;
  return dt.toLocaleDateString();
}

interface SpecialEventsProps {
  events: SpecialEvent[];
}

export default function SpecialEvents({ events }: SpecialEventsProps) {
  if (!events.length) return null;
  const active = events.filter(e => e.is_active !== false);
  if (!active.length) return null;

  return (
    <section className="mt-8">
      <h2 className="text-xl font-semibold mb-3">Special Events</h2>
      <ul className="space-y-3">
        {active.map(ev => (
          <li key={ev.id} className="p-4 rounded-lg border bg-white/70 backdrop-blur">
            <div className="flex items-center justify-between">
              <div className="font-semibold">{ev.event_name}</div>
              <div className="text-sm text-gray-600">
                {formatDate(ev.start_date)} - {formatDate(ev.end_date)}
              </div>
            </div>
            {ev.description && (
              <p className="text-gray-700 mt-1">{ev.description}</p>
            )}
            <div className="text-xs text-gray-600 mt-2 flex items-center gap-4">
              {ev.event_type && <span>Type: {ev.event_type}</span>}
              {ev.additional_cost != null && <span>Additional cost: {String(ev.additional_cost)}</span>}
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}
