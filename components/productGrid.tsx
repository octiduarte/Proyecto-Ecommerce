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
    <div className="flex flex-col-reverse sm:flex sm:flex-col">
      <div className="flex lg:justify-end lg:mr-24 my-5 justify-center" >
        <Link
          href="#"
          className="text-white bg-black p-3 border rounded-md hover:bg-zinc-800"
          prefetch={false}
        > 
          Ver todos
        </Link>
      </div>
      <div className="grid px-5 sm:grid-cols-3 lg:grid-cols-5 gap-8 lg:px-40">
        {products.map((product, index) => (
          <ProductCard
            key={index}
            id={product.product_id}
            name={product.name}
            price={`$${product.price}`}
            description={product.description}
            imageUrl={product.image || "/placeholder.svg"}
          />
        ))}
      </div>
    </div>
  );
};

export default ProductGrid;
