// src/components/ui/CategoryCard.tsx

type CategoryCardProps = {
  name: string;
  icon: string;
};

export default function CategoryCard({ name, icon }: CategoryCardProps) {
  return (
    <div className="flex flex-col items-center justify-center bg-white rounded-xl shadow-md p-6 hover:shadow-xl transition group cursor-pointer border border-gray-100">
      <span className="text-4xl mb-3 group-hover:scale-110 transition">{icon}</span>
      <span className="text-lg font-semibold text-gray-800">{name}</span>
    </div>
  );
}
