
export default function HeroSkeleton() {
  return (
    <section className="px-4 py-10 sm:px-6 lg:px-8">
      <div className="mx-auto grid max-w-7xl animate-pulse items-center gap-8 rounded-2xl bg-gray-100 p-6 sm:p-10 md:grid-cols-2">
        {/* Text content */}
        <div className="space-y-5">
          <div className="h-4 w-36 rounded bg-gray-200" />
          <div className="h-8 w-full max-w-md rounded bg-gray-200" />
          <div className="h-8 w-4/5 max-w-sm rounded bg-gray-200" />
          <div className="space-y-2">
            <div className="h-4 w-full max-w-md rounded bg-gray-200" />
            <div className="h-4 w-3/4 max-w-sm rounded bg-gray-200" />
          </div>
          <div className="h-11 w-36 rounded-lg bg-gray-200" />
        </div>

        {/* Hero image */}
        <div className="h-48 rounded-xl bg-gray-200 sm:h-64" />
      </div>
    </section>
  );
}
