import AllProducts from "@/components/AllProducts";
import FilterProducts from "@/components/FilterProducts";
import Hero from "@/components/Hero";
import { Suspense } from "react";

export default function Home() {
  return (
    <div>
      <Hero />
      <div>
        <div>
          <Suspense fallback={<p>লোড হচ্ছে...</p>}>
            <FilterProducts />
          </Suspense>
        </div>

      </div>
      <Suspense fallback={<p>সব পণ্য লোড হচ্ছে...</p>}>
        <AllProducts />
      </Suspense>
    </div>
  );
}
