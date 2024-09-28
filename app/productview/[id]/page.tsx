"use client";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";
import React, { useState, useEffect } from "react";
import { useParams } from "next/navigation";
import { AddToCart } from "@/components/ui/buttons";

type Product = {
  product_id: number;
  name: string;
  main_description: string;
  long_description: string;
  price: number;
  category_name: string;
  discount_type: string;
  discount_amount: number;
  stock_count: number;
  sizes: string[];
  colors: string[];
  images: string[];
};

export default function Page() {
  const params = useParams();
  const { id } = params;

  const [product, setProduct] = useState<Product | null>(null);
  const [selectedColor, setSelectedColor] = useState<string>("");
  const [selectedSize, setSelectedSize] = useState<string>("");

  useEffect(() => {
    async function loadProduct() {
      try {
        const res = await fetch(`http://localhost:8000/products/${id}`, {
          cache: "no-store", // Esto deshabilita la caché, similar a getServerSideProps.
        });
        if (!res.ok) {
          throw new Error("Failed to fetch product");
        }
        const data = await res.json();
        setProduct(data);

        if (data.colors && data.colors.length > 0) {
          setSelectedColor(data.colors[0]);
        }
        if (data.sizes && data.sizes.length > 0) {
          setSelectedSize(data.sizes[0]);
        }
      } catch (error) {
        console.error("Error loading product:", error);
      }
    }

    if (id) {
      loadProduct();
    }
  }, [id]);

  if (!product) {
    return <div>Cargando producto...</div>; // Aquí muestras un texto mientras se carga el producto
  }

  const handleColorChange = (color: string) => {
    setSelectedColor(color);
  };

  const handleSizeChange = (size: string) => {
    setSelectedSize(size);
  };
  return (
    <section className="py-12 md:py-16">
      <div className="grid gap-8 px-4 md:px-6">
        <div className="grid md:grid-cols-2 gap-6 lg:gap-12 items-start max-w-6xl mx-auto">
          <div className="grid gap-4 md:gap-10 items-start">
            <div className="grid gap-4">
              <img
                src={product.images[0] || "/placeholder.svg"}
                alt="Product Image"
                width={600}
                height={600}
                className="object-cover border w-full rounded-lg overflow-hidden"
              />
            </div>
          </div>
          <div className="grid gap-4 md:gap-10 items-start">
            <div className="hidden md:flex items-start">
              <div className="grid gap-4">
                <h1 className="font-bold text-3xl lg:text-4xl">
                  {product.name}
                </h1>
                <div>
                  <p>{product.main_description}</p>
                </div>
                <div className="text-4xl font-bold ">${product.price}</div>
              </div>
            </div>
            <form className="grid gap-4 md:gap-4">
              <div className="grid gap-2">
                <Label htmlFor="color" className="text-base">
                  Color
                </Label>
                <RadioGroup
                  id="color"
                  value={selectedColor}
                  defaultValue={selectedColor}
                  onValueChange={handleColorChange}
                  className="flex items-center gap-2"
                >
                  {product.colors.map((color, index) => (
                    <Label
                      key={index}
                      htmlFor={`color-${color}`}
                      className="border cursor-pointer rounded-md p-2 flex items-center gap-2 [&:has(:checked)]:bg-muted"
                    >
                      <RadioGroupItem
                        id={`color-${color}`}
                        value={color}
                        checked={selectedColor === color}
                      />
                      {color}
                    </Label>
                  ))}
                </RadioGroup>
                <p>Color seleccionado: {selectedColor}</p>{" "}
                {/* Muestra el color seleccionado */}
              </div>
              <div className="grid gap-2">
                <Label htmlFor="size" className="text-base">
                  Talle
                </Label>
                <RadioGroup
                  id="size"
                  value={selectedSize}
                  defaultValue={selectedSize}
                  onValueChange={handleSizeChange}
                  className="flex items-center gap-2"
                >
                  {product.sizes.map((size, index) => (
                    <Label
                      key={index}
                      htmlFor={`size-${size}`}
                      className="border cursor-pointer rounded-md p-2 flex items-center gap-2 [&:has(:checked)]:bg-muted"
                    >
                      <RadioGroupItem
                        id={`size-${size}`}
                        value={size}
                        checked={selectedSize === size}
                      />
                      {size}
                    </Label>
                  ))}
                </RadioGroup>
                <p>Talle seleccionado: {selectedSize}</p>{" "}
              </div>
              <div className="grid gap-2">
                <Label htmlFor="quantity" className="text-base">
                  Cantidad
                </Label>
                <Select defaultValue="1">
                  <SelectTrigger className="w-24">
                    <SelectValue placeholder="Select" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="1">1</SelectItem>
                    <SelectItem value="2">2</SelectItem>
                    <SelectItem value="3">3</SelectItem>
                    <SelectItem value="4">4</SelectItem>
                    <SelectItem value="5">5</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="flex items-center gap-4">
                <Button variant="destructive" size="lg">
                  Agregar a carrito
                </Button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
