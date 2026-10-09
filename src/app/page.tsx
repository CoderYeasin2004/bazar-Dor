import AllProducts from "@/components/AllProducts";
import FilterProducts from "@/components/FilterProducts";
import Hero from "@/components/Hero"

export default function Home() {
  return (
    <div> 

      <Hero/>
     <div>
      <div>
        <FilterProducts/>
      </div>
     </div>

      
      
      <AllProducts/>
    </div>
  );
}
