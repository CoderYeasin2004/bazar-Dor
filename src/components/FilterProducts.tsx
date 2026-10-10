
import { IProduct } from "@/types/productType";

const FilterProducts = async () => {
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

  const upProducts = products
    .filter((product) => product.change.dir === "up")
    .slice(0, 6);

  const downProducts = products
    .filter((product) => product.change.dir === "down")
    .slice(0, 6);

  const ProductCard = ({ product }: { product: IProduct }) => {
    const direction = product.change.dir;
    const price = product.today;
    const change = product.change.pct;

    return (
      <article className="min-w-0 rounded-xl border border-[#e2eae3] bg-[#fbfdfb] p-3 shadow-sm transition-shadow duration-200 hover:shadow-md sm:p-4">
        <div className="flex min-w-0 items-center gap-2">
          <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-[#f0f4ef]">
            <span className="text-lg">
              {product.image || product.categoryIcon || "🛒"}
            </span>
          </div>

          <div className="min-w-0">
            <h3 className="truncate text-xs font-bold text-[#26362b] sm:text-sm">
              {product.nameBn}
            </h3>
            <p className="mt-0.5 text-[10px] text-gray-500">
              {product.unit === "kg" ? "প্রতি কেজি" : product.unit}
            </p>
          </div>
        </div>

        <div className="mt-2 flex items-end justify-between gap-1">
          <div className="min-w-0">
            <p className="text-[10px] text-gray-500">
              আজকের দাম
            </p>
            <p className="mt-0.5 text-xs font-bold text-[#26362b] sm:text-sm">
              {price.toLocaleString("bn-BD")} টাকা
            </p>
          </div>

          <span
            className={`shrink-0 rounded-full px-1.5 py-1 text-[9px] font-semibold sm:text-[10px] ${
              direction === "up"
                ? "bg-red-50 text-red-600"
                : "bg-green-50 text-green-600"
            }`}
          >
            {direction === "up" ? "▲" : "▼"}{" "}
            {change.toLocaleString("bn-BD")}%
          </span>
        </div>
      </article>
    );
  };

  return (
  <section className="w-full px-4 py-6 sm:px-6 lg:px-8">
    <div className="mx-auto w-full max-w-7xl space-y-6">

      {/* Rising prices */}
      <div>
        <h2 className="mb-4 flex items-center gap-1 font-bold">
          <span className="text-red-600">▲</span>
          আজ দাম বেড়েছে
        </h2>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {upProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>

      {/* Falling prices */}
      <div>
        <h2 className="mb-4 flex items-center gap-1 font-bold">
          <span className="text-green-600">▼</span>
          আজ দাম কমেছে
        </h2>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {downProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>

    </div>
  </section>
);

};

export default FilterProducts;