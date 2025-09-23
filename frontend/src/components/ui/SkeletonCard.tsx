export default function SkeletonCard() {
  return (
    <div className="animate-pulse border rounded-lg p-4 bg-white/60">
      <div className="w-full h-40 bg-gray-200 rounded mb-4" />
      <div className="h-4 bg-gray-200 rounded w-2/3 mb-2" />
      <div className="h-3 bg-gray-200 rounded w-1/2" />
    </div>
  );
}
