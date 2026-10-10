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
          <Suspense fallback={null}>
            <FilterProducts />
          </Suspense>
        </div>

      </div>
      <Suspense fallback={null}>
        <AllProducts />
      </Suspense>
    </div>
  );
}
