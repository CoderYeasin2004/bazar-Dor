
const FilterProductsSkeleton = () => {
  const renderSkeletonCards = () =>
    Array.from({ length: 6 }).map((_, index) => (
      <article
        key={index}
        className="animate-pulse rounded-xl border border-[#e2eae3] bg-[#fbfdfb] p-3 shadow-sm sm:p-4"
      >
        {/* Product name and icon */}
        <div className="flex items-center gap-2">
          <div className="h-9 w-9 shrink-0 rounded-lg bg-gray-200" />

          <div className="min-w-0 flex-1 space-y-2">
            <div className="h-3 w-3/4 rounded bg-gray-200" />
            <div className="h-2 w-1/2 rounded bg-gray-200" />
          </div>
        </div>

        {/* Price and percentage */}
        <div className="mt-3 flex items-end justify-between gap-2">
          <div className="min-w-0 flex-1 space-y-2">
            <div className="h-2 w-16 rounded bg-gray-200" />
            <div className="h-4 w-24 max-w-full rounded bg-gray-200" />
          </div>

          <div className="h-5 w-12 shrink-0 rounded-full bg-gray-200" />
        </div>
      </article>
    ));

  return (
    <section className="w-full px-4 py-6 sm:px-6 lg:px-8">
      <div className="mx-auto w-full max-w-7xl space-y-6">
        {/* Rising prices */}
        <div>
          <div className="mb-4 flex items-center gap-2">
            <div className="h-5 w-5 animate-pulse rounded bg-red-100" />
            <div className="h-5 w-36 animate-pulse rounded bg-gray-200" />
          </div>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {renderSkeletonCards()}
          </div>
        </div>

        {/* Falling prices */}
        <div>
          <div className="mb-4 flex items-center gap-2">
            <div className="h-5 w-5 animate-pulse rounded bg-green-100" />
            <div className="h-5 w-36 animate-pulse rounded bg-gray-200" />
          </div>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {renderSkeletonCards()}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FilterProductsSkeleton;
