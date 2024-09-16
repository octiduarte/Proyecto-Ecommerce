"use client";

import { useState, useMemo } from "react";
import { Input } from "@/components/ui/input";
import ProductCard from "@/components/productCard";
import clsx from "clsx";
import { Button } from "@/components/ui/button";

export default function Page() {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [searchTerm, setSearchTerm] = useState("");

  const products = [
    { id: 1, name: "Acme Circles T-Shirt", description: "60% combed ringspun cotton/40% polyester jersey tee.", price: 99, category: "Clothing", image: "/placeholder.svg" },
    { id: 2, name: "Laser Lemonade Machine", description: "Futuristic beverage maker", price: 499.99, category: "Electronics", image: "/placeholder.svg" },
    { id: 3, name: "Hypernova Headphones", description: "Crystal clear audio", price: 129.99, category: "Electronics", image: "/placeholder.svg" },
    { id: 4, name: "AeroGlow Desk Lamp", description: "Sleek and energy-efficient", price: 39.99, category: "Home", image: "/placeholder.svg" },
    { id: 5, name: "TechTonic Energy Drink", description: "Fuel your day", price: 2.99, category: "Food & Beverage", image: "/placeholder.svg" },
    { id: 6, name: "Gamer Gear Pro Controller", description: "Precision gaming controls", price: 59.99, category: "Electronics", image: "/placeholder.svg" },
    { id: 7, name: "Luminous VR Headset", description: "Immersive virtual reality", price: 199.99, category: "Electronics", image: "/placeholder.svg" },
  ];

  const categories = ["all", "Clothing", "Electronics", "Home", "Food & Beverage"];

  const filteredProducts = useMemo(() => {
    return products.filter((product) => {
      if (selectedCategory !== "all" && product.category !== selectedCategory) return false;
      if (searchTerm.trim() !== "" && !product.name.toLowerCase().includes(searchTerm.toLowerCase())) return false;
      return true;
    });
  }, [selectedCategory, searchTerm]);

  return (
    <section className="py-6 md:py-10 lg:py-10">
      <div className="grid gap-8 px-4 md:px-6">
        <div className="grid md:grid-cols-[240px_1fr] gap-6 lg:gap-12 items-start mx-auto">
          <div className="grid gap-2">
            {categories.map((category) => (
              <Button
                key={category}
                onClick={() => setSelectedCategory(category)}
                size="md"
                className={clsx(
                  "px-4 py-2 border rounded-md transition-all",
                  selectedCategory === category
                    ? "bg-black text-white"
                    : "bg-gray-100 hover:bg-gray-200 text-black"
                )}
              >
                {category === "all" ? "Todos los productos" : category}
              </Button>
            ))}
          </div>

          <div className="grid gap-6 md:gap-8">
            <div className="flex flex-col md:flex-row items-start md:items-center gap-4 md:gap-8">
              <div>
                <h1 className="text-6xl font-bold tracking-tight">Nuestros productos</h1>
                <p className="text-muted-foreground">Explore nuestra amplia selección de productos</p>
              </div>
              <Input
                type="search"
                placeholder="Buscar productos..."
                className="ml-auto w-full md:w-[300px] bg-background shadow-none"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>

            <div className="grid sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
              {filteredProducts.map((product) => (
                <ProductCard
                  key={product.id}
                  id={product.id}
                  name={product.name}
                  price={product.price.toFixed(2)}
                  description={product.description}
                  imageUrl={product.image}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
