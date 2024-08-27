// components/productGrid.tsx
import React from "react";
import ProductCard from "./productCard";
import Link from "next/link";

// Define la interfaz para el tipo de producto
interface Product {
  id: number;
  name: string;
  price: string;
  description: string;
  imageUrl: string;
}

interface ProductGridProps {
  products: Product[];
}

// Componente ProductGrid que recibe productos como props
const ProductGrid: React.FC<ProductGridProps> = ({ products }) => {
  return (
    <section>
      <div className="flex flex-col-reverse sm:flex sm:flex-col">
        <div className="flex lg:justify-end lg:mr-24 my-5 justify-center">
          <Link
            href="#"
            className="text-white bg-black p-3 border rounded-md hover:bg-zinc-800"
            prefetch={false}
          >
            Ver todos
          </Link>
        </div>
        <div className="grid px-5 sm:grid-cols-3 lg:grid-cols-5 gap-8 lg:px-40">
          {products.map((product) => (
            <ProductCard
              key={product.id}
              id={product.id}
              name={product.name}
              price={product.price}
              description={product.description}
              imageUrl={product.imageUrl}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductGrid;
