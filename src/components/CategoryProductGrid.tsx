
"use client";

import Link from "next/link";
import { useState } from "react";
import type { IProduct } from "@/types/productType";

type CategoryProductGridProps = {
  products: IProduct[];
};

export default function CategoryProductGrid({
  products,
}: CategoryProductGridProps) {
  const [sort, setSort] = useState("default");

  const sortedProducts = [...products].sort((a, b) => {
    if (sort === "low") return a.today - b.today;
    if (sort === "high") return b.today - a.today;
    return 0;
  });

  return (
    <div className="space-y-4">
      {/* Sorting dropdown */}
      <div className="flex items-center justify-between rounded-xl border border-gray-200 bg-white p-4">
        <p className="text-sm text-gray-500">
          মোট {products.length.toLocaleString("bn-BD")} টি পণ্য পাওয়া গেছে
        </p>

        <div className="flex items-center gap-2">
          <p className="text-sm text-gray-500">সাজান</p>

          <select
            value={sort}
            onChange={(e) => setSort(e.target.value)}
            className="rounded-md border border-gray-300 bg-white px-3 py-2 text-[15px] outline-none btn"
            aria-label="পণ্যের দাম অনুযায়ী সাজান"
          >
            <option value="default">ডিফল্ট</option>
            <option value="low">দাম: কম থেকে বেশি</option>
            <option value="high">দাম: বেশি থেকে কম</option>
          </select>
        </div>
      </div>

      {/* Products grid */}
      {sortedProducts.length > 0 ? (
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {sortedProducts.map((product) => (
            <Link
              key={product.id}
              href={`/details/${product.slug}`}
              className="block min-w-0"
            >
              <article className="h-full rounded-xl border border-gray-200 bg-white p-4 transition hover:shadow-md">
                <div className="mb-4 flex items-center gap-3">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-gray-100 text-xl">
                    {product.image || product.categoryIcon || "🛒"}
                  </div>

                  <div className="min-w-0">
                    <h2 className="truncate font-semibold text-gray-900">
                      {product.nameBn}
                    </h2>

                    <p className="text-xs text-gray-500">
                      প্রতি {product.unit === "kg" ? "কেজি" : product.unit}
                    </p>
                  </div>
                </div>

                <p className="text-xs text-gray-500">বর্তমান দাম</p>

                <div className="mt-1 flex items-center justify-between gap-2">
                  <p className="text-lg font-bold text-gray-900">
                    {product.today.toLocaleString("bn-BD")} টাকা
                  </p>

                  <span
                    className={`shrink-0 rounded-full px-2 py-1 text-xs font-medium ${
                      product.change.dir === "up"
                        ? "bg-red-50 text-red-600"
                        : product.change.dir === "down"
                          ? "bg-green-50 text-green-600"
                          : "bg-gray-100 text-gray-600"
                    }`}
                  >
                    {product.change.dir === "up"
                      ? "▲"
                      : product.change.dir === "down"
                        ? "▼"
                        : "—"}{" "}
                    {product.change.pct.toLocaleString("bn-BD")}%
                  </span>
                </div>
              </article>
            </Link>
          ))}
        </div>
      ) : (
        <div className="rounded-xl border border-gray-200 bg-white p-10 text-center">
          <p className="text-gray-600">
            এই ক্যাটাগরিতে কোনো পণ্য পাওয়া যায়নি।
          </p>
        </div>
      )}
    </div>
  );
}