import React from "react";
import ProductCard from "./productCard";
import Link from "next/link";
const products = [
  {
    id:1,
    name: "Cozy Blanket",
    price: "$29.99",
    description: "Warm and Soft for Chilly Nights",
    imageUrl: "/placeholder.svg",
  },
  {
    id:2,
    name: "Autumn Mug",
    price: "$12.99",
    description: "Enjoy Your Hot Beverages in Style",
    imageUrl: "/placeholder.svg",
  },
  {
    id:3,
    name: "Autumn Mug",
    price: "$12.99",
    description: "Enjoy Your Hot Beverages in Style",
    imageUrl: "/placeholder.svg",
  },
  {
    id:4,
    name: "Autumn Mug",
    price: "$12.99",
    description: "Enjoy Your Hot Beverages in Style",
    imageUrl: "/placeholder.svg",
  },
  {
    id:5,
    name: "Autumn Mug",
    price: "$12.99",
    description: "Enjoy Your Hot Beverages in Style",
    imageUrl: "/placeholder.svg",
  },
  {
    id:6,
    name: "Autumn Mug",
    price: "$12.99",
    description: "Enjoy Your Hot Beverages in Style",
    imageUrl: "/placeholder.svg",
  },
  {
    id:7,
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
    <div className="flex flex-col-reverse sm:flex sm:flex-col">
      <div className="flex lg:justify-end lg:mr-24 my-5 justify-center" >
      <Link
          href="#"
          className=" text-white  bg-black p-3 border rounded-md hover:bg-zinc-800"
          prefetch={false}
        > 
        Ver todos
        </Link>
      </div>
      <div className="grid px-5 sm:grid-cols-3 lg:grid-cols-5  gap-8  lg:px-40">
        {displayedProducts.map((product, index) => (
          <ProductCard
            key={index}
            id={product.id}
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

// Función para obtener datos del servidor antes de renderizar la página
export async function getServerSideProps() {
  // Realiza la solicitud HTTP al endpoint del backend para obtener los productos
  const res = await fetch("https://api.example.com/products"); // Reemplaza con la URL correcta de tu endpoint
  const products = await res.json();

  return {
    props: {
      products,
    },
  };
}
export default ProductGrid;
