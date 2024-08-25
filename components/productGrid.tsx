import React from "react";
import ProductCard from "./productCard";
import Link from "next/link";
const products = [
  {
    name: "Cozy Blanket",
    price: "$29.99",
    description: "Warm and Soft for Chilly Nights",
    imageUrl: "/placeholder.svg",
  },
  {
    name: "Autumn Mug",
    price: "$12.99",
    description: "Enjoy Your Hot Beverages in Style",
    imageUrl: "/placeholder.svg",
  },
  {
    name: "Autumn Mug",
    price: "$12.99",
    description: "Enjoy Your Hot Beverages in Style",
    imageUrl: "/placeholder.svg",
  },
  {
    name: "Autumn Mug",
    price: "$12.99",
    description: "Enjoy Your Hot Beverages in Style",
    imageUrl: "/placeholder.svg",
  },
  {
    name: "Autumn Mug",
    price: "$12.99",
    description: "Enjoy Your Hot Beverages in Style",
    imageUrl: "/placeholder.svg",
  },
  {
    name: "Autumn Mug",
    price: "$12.99",
    description: "Enjoy Your Hot Beverages in Style",
    imageUrl: "/placeholder.svg",
  },
  {
    name: "Autumn Mug",
    price: "$12.99",
    description: "Enjoy Your Hot Beverages in Style",
    imageUrl: "/placeholder.svg",
  },
  // Agrega más productos aquí...
];

const ProductGrid = () => {
  const displayedProducts = products.slice(0, 5);
  return (
    <div className="flex flex-col-reverse xl:flex xl:flex-col">
      <div className="flex justify-end mr-24 my-10" >
      <Link
          href="#"
          className=" text-white  bg-black p-3 border rounded-md hover:bg-zinc-800"
          prefetch={false}
        > 
        Ver todos
        </Link>
      </div>
      <div className="grid px-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-8  md:px-40">
        {displayedProducts.map((product, index) => (
          <ProductCard
            key={index}
            name={product.name}
            price={product.price}
            description={product.description}
            imageUrl={product.imageUrl}
          />
        ))}
      </div>
    </div>
  );
};

export default ProductGrid;
