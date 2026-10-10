import { IProduct } from "@/types/productType";
import MarqueeText from "react-marquee-text";
import "react-marquee-text/dist/styles.css";

const Marquee = async () => {
  const res = await fetch(
    "https://openapi.programming-hero.com/api/bazardor/products"
  );

  const products: IProduct[] = await res.json();

  return (
    <div className="w-full border-y border-gray-200 bg-white">
     <div className="w-full overflow-hidden  border-gray-100 bg-white">
  <MarqueeText direction="right" duration={20}>
    {products.map((product) => (
      <div
        key={product.id}
        className="inline-flex items-center border-r border-gray-100 px-5 py-1.5"
      >
        <span className="text-xs font-medium ">
          {product.nameBn}
        </span>

        <span className="mx-2 text-xs ">
          {product.today} টাকা/{product.unit}
        </span>

        <span
          className={`text-xs font-medium ${
            product.change.dir === "up"
              ? "text-red-500"
              : "text-green-500"
          }`}
        >
          {product.change.dir === "up" ? "▲" : "▼"}{" "}
          {product.change.pct}%
        </span>
      </div>
    ))}
  </MarqueeText>
</div>
    </div>
  );
};

export default Marquee;