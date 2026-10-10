import Link from "next/link";

const DetailsPageSkeleton = () => {
  return (
    <main className="min-h-screen w-full animate-pulse bg-[#f0f5f0] px-4 py-6 text-[#29362c] sm:px-6 lg:px-10">
      <div className="mx-auto w-full max-w-7xl space-y-5">

        {/* Breadcrumb Skeleton */}
        <nav className="flex flex-wrap items-center gap-2">
          <div className="h-4 w-12 rounded bg-gray-200" />
          <div className="h-4 w-3 rounded bg-gray-200" />
          <div className="h-4 w-20 rounded bg-gray-200" />
          <div className="h-4 w-3 rounded bg-gray-200" />
          <div className="h-4 w-28 rounded bg-gray-200" />
        </nav>

        {/* Product Summary Skeleton */}
        <section className="flex flex-col gap-4 rounded-xl border border-[#e2eae3] bg-[#fbfdfb] p-3 sm:flex-row sm:items-center sm:justify-between sm:p-4">
          <div className="flex min-w-0 items-center gap-3">
            <div className="h-12 w-12 shrink-0 rounded-xl bg-gray-200 sm:h-14 sm:w-14" />

            <div className="min-w-0 flex-1 space-y-2">
              <div className="h-5 w-36 max-w-full rounded bg-gray-200 sm:w-48" />
              <div className="h-4 w-28 max-w-full rounded bg-gray-200" />
              <div className="h-3 w-40 max-w-full rounded bg-gray-200" />
            </div>
          </div>

          <div className="w-full rounded-lg bg-[#f0f4ef] p-3 sm:w-36 sm:shrink-0">
            <div className="mx-auto h-4 w-20 rounded bg-gray-200" />
            <div className="mx-auto mt-2 h-7 w-24 rounded bg-gray-200" />
            <div className="mx-auto mt-2 h-3 w-20 rounded bg-gray-200" />
            <div className="mx-auto mt-2 h-3 w-12 rounded bg-gray-200" />
          </div>
        </section>

        {/* Price Summary Skeleton */}
        <section className="rounded-xl border border-[#e2eae3] bg-[#fbfdfb] p-3 sm:p-4">
          <div className="mb-4 h-6 w-44 max-w-full rounded bg-gray-200" />

          <div className="grid grid-cols-1 gap-3 sm:grid-cols-3">
            {Array.from({ length: 3 }).map((_, index) => (
              <div
                key={index}
                className="rounded-xl border border-[#e2eae3] p-3"
              >
                <div className="h-4 w-28 max-w-full rounded bg-gray-200" />
                <div className="mt-3 h-5 w-24 rounded bg-gray-200" />
                <div className="mt-2 h-3 w-16 rounded bg-gray-200" />
              </div>
            ))}
          </div>
        </section>

        {/* Market Price Table Skeleton */}
        <section className="rounded-xl border border-[#e2eae3] bg-[#fbfdfb] p-3 sm:p-4">
          <div className="mb-4 h-7 w-64 max-w-full rounded bg-gray-200" />

          <div className="overflow-x-auto">
            <table className="w-full min-w-[540px] border-collapse">
              <thead>
                <tr className="border-b border-[#e2eae3]">
                  {Array.from({ length: 5 }).map((_, index) => (
                    <th key={index} className="px-2 py-3">
                      <div className="h-4 w-16 rounded bg-gray-200" />
                    </th>
                  ))}
                </tr>
              </thead>

              <tbody>
                {Array.from({ length: 5 }).map((_, rowIndex) => (
                  <tr
                    key={rowIndex}
                    className="border-b border-[#dce5dc]"
                  >
                    {Array.from({ length: 5 }).map((_, colIndex) => (
                      <td key={colIndex} className="px-2 py-4">
                        <div className="h-4 w-20 max-w-full rounded bg-gray-200" />
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

      </div>
    </main>
  );
};

export default DetailsPageSkeleton;