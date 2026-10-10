
export default function HeaderSkeleton() {
  return (
    <header className="w-full border-b border-gray-200 bg-white px-4 py-3">
      <div className="mx-auto max-w-7xl animate-pulse">
        <div className="flex items-center justify-between gap-4">
          {/* Logo and Bengali date */}
          <div className="flex items-center gap-3">
            <div className="h-10 w-10 rounded-lg bg-gray-200" />
            <div className="space-y-2">
              <div className="h-5 w-28 rounded bg-gray-200" />
              <div className="h-3 w-24 rounded bg-gray-200" />
            </div>
          </div>

          {/* Sign in and sign up */}
          <div className="flex gap-2">
            <div className="h-9 w-16 rounded-lg bg-gray-200" />
            <div className="h-9 w-20 rounded-lg bg-gray-200" />
          </div>
        </div>

        {/* Category navigation */}
        <div className="mt-4 flex gap-4 overflow-hidden">
          {Array.from({ length: 5 }).map((_, i) => (
            <div
              key={i}
              className="h-8 w-20 shrink-0 rounded-lg bg-gray-200"
            />
          ))}
        </div>
      </div>
    </header>
  );
}
