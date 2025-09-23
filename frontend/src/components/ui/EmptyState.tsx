interface EmptyStateProps {
  title: string;
  message?: string;
  action?: React.ReactNode;
}

export default function EmptyState({ title, message, action }: EmptyStateProps) {
  return (
    <div className="text-center py-16 border rounded-lg bg-white/60 backdrop-blur">
      <h2 className="text-xl font-semibold mb-2">{title}</h2>
      {message && <p className="text-gray-600 mb-4 max-w-md mx-auto">{message}</p>}
      {action}
    </div>
  );
}
