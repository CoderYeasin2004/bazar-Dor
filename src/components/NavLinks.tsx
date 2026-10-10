"use client";

import { IProduct } from "@/types/productType";
import Link from "next/link";
import { useEffect, useState } from "react";

const NavLinks = () => {
  const [categories, setCategories] = useState<IProduct[]>([]);

  useEffect(() => {
    fetch("https://openapi.programming-hero.com/api/bazardor/categories")
      .then((res) => {
        if (!res.ok) throw new Error("Failed to fetch categories");
        return res.json();
      })
      .then((data) => {
        setCategories(
          Array.isArray(data) ? data : (data.categories ?? data.data ?? []),
        );
      })
      .catch((err) => console.error("Category fetch failed:", err));
  }, []);

  return (
    <nav className="mt-5 w-full border-y border-gray-200">
      <div className="mx-auto hidden w-full max-w-7xl items-center gap-5 px-4 py-3 sm:px-6 md:flex lg:px-8">
        {categories.map((category) => (
          <Link
            key={category.id}
            href={`/category/${category.slug}`}
            className="whitespace-nowrap rounded-lg px-3 py-2 text-sm text-gray-700 transition hover:bg-green-50 hover:text-green-700"
          >
            {category.icon} {category.nameBn}
          </Link>
        ))}
      </div>
    </nav>
  );
};

export default NavLinks;
