
import { IProduct } from "@/types/productType";
import { notFound } from "next/navigation";




const API_URL =
  "https://api.abcz.workers.dev/api/bazardor/products";

const DetailsPage = async ({
  params,
}: {
  params: Promise<{ detailsSlug: string }>;
}) => {
  const { detailsSlug } = await params;

  const listRes = await fetch(API_URL);

  if (!listRes.ok) {
    throw new Error("Failed to fetch products");
  }

  const listResponse = await listRes.json();

  const products: IProduct[] = Array.isArray(listResponse)
    ? listResponse
    : listResponse.data ?? [];

  const matchedProduct = products.find(
    (item) => item.slug === detailsSlug
  );

  if (!matchedProduct) notFound();

  const detailRes = await fetch(
    `${API_URL}/${matchedProduct.id}`
  );

  if (!detailRes.ok) {
    throw new Error("Failed to fetch product details");
  }

  const detailResponse = await detailRes.json();

  const product: IProduct =
    detailResponse.data ?? detailResponse;

  const formatPrice = (price: number) =>
    price.toLocaleString("bn-BD");

  return (
    <main className="min-h-screen w-full bg-[#f0f5f0] px-4 py-6 text-[#29362c] sm:px-6 lg:px-10">
  <div className="mx-auto w-full max-w-7xl space-y-5">

        {/* Breadcrumb */}
        <nav className="text-[10px] text-gray-600">
          {/* <a href="/" className="hover:text-green-700">
            হোম
          </a> */}
          <span className="mx-2">›</span>
          <span>{product.categoryNameBn}</span>
          <span className="mx-2">›</span>
          <span className="text-gray-800">
            {product.nameBn}
          </span>
        </nav>

        {/* Product summary */}
        <section className="flex items-center justify-between gap-3 rounded-xl border border-[#e2eae3] bg-[#fbfdfb] p-3 sm:p-4">
          <div className="flex min-w-0 items-center gap-3">
            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#f0f4ef] text-xl">
              {product.image || product.categoryIcon || "🛒"}
            </div>

            <div className="min-w-0">
              <h1 className="text-sm font-bold sm:text-[20px]">
                {product.nameBn}
              </h1>

              <p className="mt-0.5 text-[14px] text-gray-500">
                প্রতি {product.unit === "kg" ? "কেজি" : product.unit}
                {" · "}
                {product.categoryNameBn}
              </p>

              <p className="mt-1 text-[14px]">
                সর্বশেষ বাজারদরের তথ্য
              </p>
            </div>
          </div>

          <div className="shrink-0 rounded-lg bg-[#f0f4ef] px-3 py-2 text-center">
            <p className="text-[15px] text-gray-500">
              আজকের দাম
            </p>

            <p className="text-lg font-bold">
              {formatPrice(product.today)}
            </p>

            <p className="text-[12px] text-gray-500">
              টাকা / {product.unit}
            </p>

            <p
              className={`mt-0.5 text-[12px] font-bold ${
                product.change.dir === "up"
                  ? "text-red-600"
                  : "text-green-600"
              }`}
            >
              {product.change.dir === "up" ? "▲" : "▼"}{" "}
              {formatPrice(Math.abs(product.change.pct))}%
            </p>
          </div>
        </section>

        {/* Price history */}
        <section className="rounded-xl border border-[#e2eae3] bg-[#fbfdfb] p-3">
          <h2 className="mb-3 text-[20] font-bold">
            দামের সারসংক্ষেপ
          </h2>

          <div className="grid grid-cols-3 gap-2">
            {[
              {
                label: "গতকালের দাম",
                price: product.yesterday,
              },
              {
                label: "গত সপ্তাহের দাম",
                price: product.lastWeek,
              },
              {
                label: "গত মাসের দাম",
                price: product.lastMonth,
              },
            ].map((item) => (
              <div
                key={item.label}
                className="rounded-xl border border-[#e2eae3] p-2 sm:p-3"
              >
                <p className="text-[18px] text-gray-600">
                  {item.label}
                </p>

                <p className="mt-1 text-[15] font-bold text-green-700">
                  {formatPrice(item.price)} টাকা
                </p>

                <p className="mt-1 text-[12px] text-gray-500">
                  প্রতি {product.unit}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Market price table */}
        <section className="rounded-xl border border-[#e2eae3] bg-[#fbfdfb] p-3">
          <h2 className="mb-3 text-[25px] font-bold">
            বাজারভিত্তিক আজকের দাম
          </h2>

          <div className="overflow-x-auto">
            <table className="w-full min-w-[540px] border-collapse text-left text-[15px]">
              <thead>
                <tr className="border-b border-[#e2eae3] text-gray-600">
                  <th className="px-2 py-2 font-medium">বাজার</th>
                  <th className="px-2 py-2 font-medium">বিভাগ</th>
                  <th className="px-2 py-2 text-right font-medium">
                    সর্বনিম্ন
                  </th>
                  <th className="px-2 py-2 text-right font-medium">
                    সর্বোচ্চ
                  </th>
                  <th className="px-2 py-2 text-right font-medium">
                    গড়
                  </th>
                </tr>
              </thead>

              <tbody>
                {product.markets.map((market, index) => {
                  const average = (market.min + market.max) / 2;

                  return (
                    <tr
                      key={`${market.market}-${index}`}
                      className={`border-b border-[#dce5dc] ${
                        index % 2 === 0
                          ? "bg-[#f0f5f0]"
                          : "bg-[#fbfdfb]"
                      }`}
                    >
                      <td className="px-2 py-2">
                        {market.market}
                      </td>

                      <td className="px-2 py-2">
                        {market.division}
                      </td>

                      <td className="px-2 py-2 text-right">
                        {formatPrice(market.min)} টাকা
                      </td>

                      <td className="px-2 py-2 text-right">
                        {formatPrice(market.max)} টাকা
                      </td>

                      <td className="px-2 py-2 text-right">
                        {formatPrice(average)} টাকা
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </section>

      </div>
    </main>
  );
};

export default DetailsPage;