import React from "react";
import ProductCard from "./productCard";

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
  );
};

export default ProductGrid;
