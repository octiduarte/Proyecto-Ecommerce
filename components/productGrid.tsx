import React from "react";
import ProductCard from "./productCard";
import Link from "next/link";
import { Button } from "./ui/button";

type Product = {
  product_id: number;
  image: string;
  name: string;
  price: number;
  category: string;
  main_description: string;
};

type ProductGridProps = {
  products: Product[];
};

const ProductGrid = ({ products }: ProductGridProps) => {
  return (
    <div className="flex flex-col sm:flex sm:flex-col pt-8">
      <h1 className="text-3xl md:text-4xl font-bold tracking-tight text-center mb-8 md:mb-12">Productos destacados</h1>
      <div className="grid px-5 sm:grid-cols-3 lg:grid-cols-5 gap-8 lg:px-20">
        {products.slice(0, 5).map((product, index) => ( // Modificación aquí para mostrar solo los primeros 5 productos
          <ProductCard
            key={index}
            id={product.product_id}
            name={product.name}
            price={`$${product.price}`}
            description={product.main_description}
            imageUrl={product.image}
          />
        ))}
      </div>
      <div className="flex lg:justify-center my-5 justify-center">
        <Link href="/products" prefetch={false} className="">
          <Button variant="outline" size="sm" className="w-full">
            Mostrar todo
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default ProductGrid;
