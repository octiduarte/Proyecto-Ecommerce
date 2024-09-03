import React from "react";
import SectionHeader from "./sectionHeader";
import ProductGrid from "./productGrid";

type Product = {
  product_id: number;
  image: string;
  name: string;
  price: number;
  category: string;
  description: string;
};

type MainSectionProps = {
  products: Product[];
  banner: string;
};

const MainSection = ({ products, banner }: MainSectionProps) => {
  return (
    <main>
      <SectionHeader banner={banner} />
      <ProductGrid products={products} />
    </main>
  );
};

export default MainSection; // Aquí es donde se realiza la exportación por defecto.
