import type { IProduct } from "@/types/productType";
import { Suspense } from "react";
import CategoryProductGrid from "@/components/CategoryProductGrid";

const getCategoryProducts = async (
  categorySlug: string,
): Promise<IProduct[]> => {
  const res = await fetch(
    `https://api.abcz.workers.dev/api/bazardor/products?category=${encodeURIComponent(categorySlug)}`,
  );

  if (!res.ok) {
    throw new Error("Failed to fetch category products");
  }

  const data: IProduct[] = await res.json();
  return data;
};

const CategoryProductsList = async ({
  categorySlug,
}: {
  categorySlug: string;
}) => {
  const products = await getCategoryProducts(categorySlug);
  const category = products[0];

  return (
    <div className="space-y-6">
      <div className="flex items-center gap-3 rounded-xl border border-gray-200 bg-white p-5">
        <span className="text-3xl">{category?.categoryIcon ?? "🛒"}</span>

        <div>
          <h1 className="text-xl font-bold text-gray-900">
            {category?.categoryNameBn ?? categorySlug}
          </h1>

          <p className="text-sm text-gray-500">
            {products.length}টি পণ্যের আজকের দাম ও পরিবর্তন
          </p>
        </div>
      </div>

      <CategoryProductGrid products={products} />
    </div>
  );
};

const CategoryPageContent = async ({
  params,
}: {
  params: Promise<{ categorySlug: string }>;
}) => {
  const { categorySlug } = await params;

  return <CategoryProductsList categorySlug={categorySlug} />;
};

export default function CategoryPage({
  params,
}: {
  params: Promise<{ categorySlug: string }>;
}) {
  return (
    <main className="mx-auto min-h-[60vh] max-w-6xl px-4 py-6">
      <Suspense
        fallback={
          <div className="animate-pulse rounded-xl bg-white p-8 text-gray-500">
            পণ্যের তথ্য লোড হচ্ছে...
          </div>
        }
      >
        <CategoryPageContent params={params} />
      </Suspense>
    </main>
  );
}
