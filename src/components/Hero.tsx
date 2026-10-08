"use client";
import Image from "next/image";
import { useEffect, useRef } from "react";

const Hero = () => {
  const dateRef = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    if (dateRef.current) {
      dateRef.current.textContent = new Date().toLocaleDateString("bn-BD", {
        dateStyle: "full",
      });
    }
  }, []);

  return (
    <section className="w-full">
      <div className="mx-auto flex min-h-37.5 w-full items-center justify-between overflow-hidden rounded-2xl border border-gray-200 bg-[#f8faf8] px-5 py-4 sm:px-7 md:px-9 lg:px-10 mt-10">
        {/* Content */}
        <div className="max-w-162.5">
          {/* Dynamic Date */}
          <section>
            <p
              className="inline-flex items-center rounded-full bg-green-100 px-3 py-1 text-xs font-medium text-green-700"
              ref={dateRef}
            >
              তারিখ লোড হচ্ছে...
            </p>
          </section>
          {/* Heading */}
          <h1 className="mt-2 text-xl font-bold leading-tight text-[#222] sm:text-2xl md:text-3xl">
            আজকের বাজারের দাম এক নজরে
          </h1>

          {/* Description */}
          <p className="mt-2 max-w-150 text-[9px] leading-relaxed text-gray-500 sm:text-[13px] md:text-xs">
            চাল, ডাল, তেল, সবজি, মাছ, মাংস, ডিম ও অন্যান্য পণ্যের বাজারদরসহ
            বিস্তারিত তথ্য এক নজরে পান। বাজারদর আপডেট, দাম পরিবর্তন এবং সর্বশেষ
            বাজার পরিস্থিতি সম্পর্কে জানুন।
          </p>

          {/* Button */}
          <button className="btn mt-3 rounded-md bg-[#008f3c] px-4 py-2 text-[9px] font-semibold text-white shadow-sm transition hover:bg-[#007a33] sm:px-5 sm:py-2.5 sm:text-[13px]">
            সব দাম দেখুন
          </button>
        </div>

        {/* Banner Image */}
        <div className="relative ml-3 h-22.5 w-27.5 shrink-0 sm:h-27.5 sm:w-35 md:h-31.25 md:w-41.25 lg:h-33.75 lg:w-45">
          <Image
            src="/bazar-hero.png"
            alt="Vegetable basket"
            fill
            priority
            className="object-contain"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
