import {  IProduct } from "@/types/productType";
import Link from "next/link";

const NavLinks = async () => {
  const res = await fetch(
    "https://api.abcz.workers.dev/api/bazardor/categories"
  );

  const categories: IProduct[] = await res.json();

  return (
    <div className="w-full border border-gray-200 mt-5">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-start gap-5 p-3">
          {categories.map((category) => (
            <Link key={category?.id} href={`/category/${category.slug}`}>
              {category.icon} {category.nameBn}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default NavLinks;