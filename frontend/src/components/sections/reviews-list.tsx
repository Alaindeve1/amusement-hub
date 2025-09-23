import type { Review } from "@/lib/api";
import EmptyState from "@/components/ui/EmptyState";

interface ReviewsListProps {
  reviews: Review[];
}

function Stars({ rating }: { rating: number }) {
  const full = Math.round(rating);
  return (
    <div className="inline-flex items-center text-amber-500" aria-label={`Rating ${rating.toFixed(1)} out of 5`}>
      {Array.from({ length: 5 }).map((_, i) => (
        <span key={i}>{i < full ? "★" : "☆"}</span>
      ))}
      <span className="ml-2 text-gray-600 text-sm">{rating.toFixed(1)}</span>
    </div>
  );
}

export default function ReviewsList({ reviews }: ReviewsListProps) {
  if (!reviews.length) {
    return (
      <EmptyState
        title="No reviews yet"
        message="Be the first to share your experience at this location."
      />
    );
  }

  return (
    <section className="mt-10">
      <h2 className="text-xl font-semibold mb-4">Reviews</h2>
      <ul className="space-y-4">
        {reviews.map(r => (
          <li key={r.id} className="p-4 rounded-lg border bg-white/70 backdrop-blur">
            <div className="flex items-center justify-between mb-2">
              <Stars rating={Number(r.rating)} />
              {r.createdAt && (
                <span className="text-xs text-gray-500">{new Date(r.createdAt).toLocaleDateString()}</span>
              )}
            </div>
            {r.review_text && (
              <p className="text-gray-700 whitespace-pre-wrap">{r.review_text}</p>
            )}
          </li>
        ))}
      </ul>
    </section>
  );
}
