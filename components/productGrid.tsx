import React from "react";
import ProductCard from "./productCard";
import Link from "next/link";

type Product = {
  product_id: number;
  image: string;
  name: string;
  price: number;
  category: string;
  description:string;
};

type ProductGridProps = {
  products: Product[];
};

const ProductGrid = ({ products }: ProductGridProps) => {
  return (
    <div className="flex flex-col sm:flex sm:flex-col pt-8">
      <div className="grid px-5 sm:grid-cols-3 lg:grid-cols-5 gap-8 lg:px-20">
        {products.map((product, index) => (
          <ProductCard
            key={index}
            id={product.product_id}
            name={product.name}
            price={`$${product.price}`}
            description={product.description}
            imageUrl={product.image}
          />
        ))}
      </div>
      <div className="flex lg:justify-center my-5 justify-center" >
        <Link
          href="#"
          className="text-white bg-zinc-900 text-xs p-3 border rounded-md hover:bg-zinc-800"
          prefetch={false}
        > 
          Mostrar todo
        </Link>
      </div>
    </div>
  );
};

export default ProductGrid;
