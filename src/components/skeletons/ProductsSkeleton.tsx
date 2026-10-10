
export default function ProductsSkeleton() {
  return (
    <section
      id="all-products"
      className="scroll-mt-24 px-4 py-6 sm:px-6 lg:px-8"
    >
      <div className="mx-auto max-w-7xl">
        <div className="mb-2 h-6 w-28 animate-pulse rounded bg-gray-200" />
        <div className="mb-4 h-4 w-52 animate-pulse rounded bg-gray-200" />

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {Array.from({ length: 6 }).map((_, i) => (
            <article
              key={i}
              className="animate-pulse rounded-xl border border-[#e2eae3] bg-[#fbfdfb] p-4"
            >
              <div className="flex items-center gap-3">
                <div className="h-11 w-11 shrink-0 rounded-lg bg-gray-200" />
                <div className="flex-1 space-y-2">
                  <div className="h-4 w-3/4 rounded bg-gray-200" />
                  <div className="h-3 w-1/2 rounded bg-gray-200" />
                </div>
              </div>

              <div className="mt-4 flex items-end justify-between gap-2">
                <div className="space-y-2">
                  <div className="h-3 w-20 rounded bg-gray-200" />
                  <div className="h-6 w-28 rounded bg-gray-200" />
                </div>
                <div className="h-6 w-16 rounded-full bg-gray-200" />
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
