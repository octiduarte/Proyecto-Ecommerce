// components/mainSection.tsx
import React from "react";
import SectionHeader from "./sectionHeader";
import ProductGrid from "./productGrid";
import SectionFooter from "./sectionFooter";

// Define la interfaz para el tipo de producto
interface Product {
  id: number;
  name: string;
  price: string;
  description: string;
  imageUrl: string;
}

interface MainSectionProps {
  products: Product[];
}

// Componente MainSection que recibe productos como props
const MainSection: React.FC<MainSectionProps> = ({ products }) => {
  return (
    <main>
      <SectionHeader />
      <ProductGrid products={products} />
    </main>
  );
};

export default MainSection;
