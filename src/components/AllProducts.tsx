
import { IProduct } from "@/types/productType";
import Link from "next/link";
const AllProducts = async () => {
  const res = await fetch(
    "https://api.abcz.workers.dev/api/bazardor/products"
  );

  if (!res.ok) {
    throw new Error("Failed to fetch products");
  }

  const response = await res.json();

  const products: IProduct[] = Array.isArray(response)
    ? response
    : response.data ?? [];

  return (
    <section className="w-full px-4 py-6 sm:px-6 lg:px-8 scroll-mt-24"  id="all-products" >
      <div className="mx-auto w-full max-w-7xl">
        {/* Product Count */}
        <h2 className="font-bold">সব পণ্য</h2>
        <p className="mb-4 text-xs text-gray-500 sm:text-sm">
          {products.length.toLocaleString("bn-BD")}টি পণ্যের দাম দেখানো হচ্ছে
        </p>

        {/* Product Grid */}
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
       {products.map((product) => {
  const price = product.today;
  const change = product.change.pct;
  const direction = product.change.dir;

  return (
    <Link
      key={product.id}
      href={`/details/${product.slug}`}
      className="block min-w-0"
    >
      <article className="min-w-0 rounded-xl border border-[#e2eae3] bg-[#fbfdfb] p-3 shadow-sm transition-shadow duration-200 hover:shadow-md sm:p-4">
        {/* Product Information */}
        <div className="flex min-w-0 items-center gap-3">
          <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-gray-100">
            <span className="text-2xl">
              {product.image || product.categoryIcon || "🛒"}
            </span>
          </div>

          <div className="min-w-0 flex-1">
            <h3 className="truncate text-sm font-semibold text-[#26362b] sm:text-base">
              {product.nameBn}
            </h3>

            <p className="mt-1 text-xs text-gray-500">
              {product.unit === "kg" ? "প্রতি কেজি" : product.unit}
            </p>
          </div>
        </div>

        {/* Price Information */}
        <div className="mt-4 flex items-end justify-between gap-2">
          <div className="min-w-0">
            <p className="text-xs text-gray-500">বাজারদর আজ</p>

            <p className="mt-1 text-base font-bold text-[#26362b] sm:text-lg">
              {price.toLocaleString("bn-BD")} টাকা
            </p>
          </div>

          <span
            className={`shrink-0 rounded-full px-2 py-1 text-xs font-semibold ${
              direction === "up"
                ? "bg-red-50 text-red-600"
                : direction === "down"
                  ? "bg-green-50 text-green-600"
                  : "bg-gray-100 text-gray-500"
            }`}
          >
            {direction === "up" ? "▲" : direction === "down" ? "▼" : "—"}{" "}
            {change.toLocaleString("bn-BD")}%
          </span>
        </div>
      </article>
    </Link>
  );
})}
        </div>
      </div>
    </section>
  );
};

export default AllProducts;
