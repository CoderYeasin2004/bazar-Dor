const CategoryProductSkeleton = () => {
  return (
    <div className="space-y-6 animate-pulse">
      {/* Category heading */}
      <div className="flex items-center gap-3 rounded-xl border border-gray-200 bg-white p-4 sm:p-5">
        <div className="h-12 w-12 shrink-0 rounded-xl bg-gray-200" />

        <div className="flex-1 space-y-2">
          <div className="h-6 w-40 max-w-full rounded bg-gray-200" />
          <div className="h-4 w-56 max-w-full rounded bg-gray-200" />
        </div>
      </div>

      {/* Product card skeletons */}
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {Array.from({ length: 6 }).map((_, index) => (
          <div
            key={index}
            className="rounded-xl border border-gray-200 bg-white p-4"
          >
            <div className="flex items-center gap-3">
              <div className="h-12 w-12 shrink-0 rounded-xl bg-gray-200" />
              <div className="flex-1 space-y-2">
                <div className="h-5 w-3/4 rounded bg-gray-200" />
                <div className="h-3 w-1/2 rounded bg-gray-200" />
              </div>
            </div>

            <div className="mt-5 rounded-lg bg-[#f0f5f0] p-3">
              <div className="h-4 w-20 rounded bg-gray-200" />
              <div className="mt-3 h-7 w-28 rounded bg-gray-200" />
              <div className="mt-2 h-4 w-20 rounded bg-gray-200" />
            </div>

            <div className="mt-4 space-y-3">
              <div className="h-4 w-full rounded bg-gray-200" />
              <div className="h-4 w-4/5 rounded bg-gray-200" />
            </div>

            <div className="mt-4 h-10 w-full rounded-lg bg-gray-200" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default CategoryProductSkeleton;