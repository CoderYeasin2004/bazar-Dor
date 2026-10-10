
export default function MarqueeSkeleton() {
  return (
    <div className="overflow-hidden border-y border-gray-200 bg-white py-3">
      <div className="flex min-w-max animate-pulse gap-4 px-4">
        {Array.from({ length: 6 }).map((_, i) => (
          <div
            key={i}
            className="flex items-center gap-3 rounded-lg bg-gray-50 px-4 py-2"
          >
            <div className="h-7 w-7 rounded-full bg-gray-200" />
            <div className="space-y-2">
              <div className="h-3 w-20 rounded bg-gray-200" />
              <div className="h-3 w-24 rounded bg-gray-200" />
            </div>
            <div className="h-5 w-12 rounded-full bg-gray-200" />
          </div>
        ))}
      </div>
    </div>
  );
}
