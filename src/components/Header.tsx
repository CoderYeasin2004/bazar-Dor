
"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { IProduct } from "@/types/productType";

const Header = () => {
  const dateRef = useRef<HTMLParagraphElement>(null);
  const [isOpen, setIsOpen] = useState(false);
  const [categories, setCategories] = useState<IProduct[]>([]);

  useEffect(() => {
    if (dateRef.current) {
      dateRef.current.textContent = new Date().toLocaleDateString("bn-BD", {
        dateStyle: "full",
      });
    }
  }, []);

  useEffect(() => {
    fetch("https://api.abcz.workers.dev/api/bazardor/categories")
      .then((res) => {
        if (!res.ok) throw new Error("Failed to fetch categories");
        return res.json();
      })
      .then((data) => {
        setCategories(Array.isArray(data) ? data : data.categories ?? data.data ?? []);
      })
      .catch((err) => console.error("Category fetch failed:", err));
  }, []);

  return (
    <header className="w-full">
      <div className="relative mx-auto mt-5 flex max-w-7xl items-center justify-between px-3 sm:px-6 lg:px-8">

        {/* Hamburger: mobile only */}
        <button
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          aria-label={isOpen ? "মেনু বন্ধ করুন" : "মেনু খুলুন"}
          aria-expanded={isOpen}
          className="rounded-lg border border-gray-200 p-2 text-2xl md:hidden"
        >
          {isOpen ? "✕" : "☰"}
        </button>

        {/* Logo and date */}
        <div className="flex items-center gap-2">
          <Link href="/">
            <Image
              src="/logo-icon.png"
              alt="বাজার দর"
              width={40}
              height={40}
              className="h-9 w-9 rounded-lg bg-green-500 sm:h-10 sm:w-10"
            />
          </Link>

          <div>
            <h2 className="whitespace-nowrap text-sm font-extrabold sm:text-lg">
              বাজার দর
            </h2>
            <p
              ref={dateRef}
              className="max-w-[145px] truncate text-xs text-gray-500 sm:max-w-none sm:text-sm"
            >
              তারিখ লোড হচ্ছে...
            </p>
          </div>
        </div>

        {/* Authentication buttons */}
        <div className="flex items-center gap-1 sm:gap-2">
          <Link
            href="/signin"
            className="rounded-lg px-2 py-2 text-xs font-medium hover:bg-gray-200 sm:px-3 sm:text-sm"
          >
            সাইন ইন
          </Link>

          <Link
            href="/signup"
            className="rounded-lg bg-green-700 px-2 py-2 text-xs font-medium text-white hover:bg-green-600 sm:px-3 sm:text-sm"
          >
            সাইন আপ
          </Link>
        </div>

        {/* Single mobile menu with all categories */}
        {isOpen && (
          <nav className="absolute left-0 top-full z-50 mt-3 max-h-[70vh] w-64 overflow-y-auto rounded-xl border border-gray-200 bg-white p-3 shadow-lg md:hidden">
            <Link
              href="/"
              onClick={() => setIsOpen(false)}
              className="block rounded-lg px-3 py-3 font-medium hover:bg-green-50"
            >
              🏠 হোম
            </Link>

            <div className="my-2 border-t border-gray-100" />

            {categories.map((category) => (
              <Link
                key={category.id}
                href={`/category/${category.slug}`}
                onClick={() => setIsOpen(false)}
                className="block rounded-lg px-3 py-3 text-gray-700 hover:bg-green-50 hover:text-green-700"
              >
                {category.icon} {category.nameBn}
              </Link>
            ))}
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
