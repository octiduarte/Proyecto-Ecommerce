import React from "react";
import SectionHeader from "./sectionHeader";
import ProductGrid from "./productGrid";
import SectionFooter from "./sectionFooter";

type Product = {
  product_id: number;
  image: string;
  name: string;
  price: number;
  category: string;
  description:string;
};

type MainSectionProps = {
  products: Product[];
};

const MainSection = ({ products }: MainSectionProps) => {
  return (
    <main>
      <SectionHeader />
      <ProductGrid products={products} />
    </main>
  );
};

export default MainSection;
