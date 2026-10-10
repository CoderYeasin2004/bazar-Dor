import AllProducts from "@/components/AllProducts";
import FilterProducts from "@/components/FilterProducts";
import Hero from "@/components/Hero";
import { Suspense } from "react";
import FilterProductsSkeleton from "@/components/skeletons/FilterProductsSkeleton";
import ProductsSkeleton from "@/components/skeletons/ProductsSkeleton";
import HeroSkeleton from "@/components/skeletons/HeroSkeleton";

export default function Home() {
  return (
    <div>
      <Suspense fallback={<HeroSkeleton/>}>
        <Hero />
      </Suspense>
      <div>
        <div>
          <Suspense fallback={<FilterProductsSkeleton />}>
            <FilterProducts />
          </Suspense>
        </div>
      </div>
      <Suspense fallback={<ProductsSkeleton />}>
        <AllProducts />
      </Suspense>
    </div>
  );
}
