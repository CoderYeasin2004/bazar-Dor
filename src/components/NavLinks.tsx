import { ICategory } from "@/types/categoryType";
import Link from "next/link";

const NavLinks = async () => {
  const res = await fetch(
    "https://api.api-store.workers.dev/api/bazardor/categories"
  );

  const categories: ICategory[] = await res.json();

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-5 flex gap-5">
      {categories.map((category) => (
        <Link key={category.id} href={`/${category.slug}`}>
          {category.icon} {category.nameBn}
        </Link>
      ))}
    </div>
  );
};

export default NavLinks;