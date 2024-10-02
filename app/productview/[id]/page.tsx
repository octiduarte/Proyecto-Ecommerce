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
  import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselPrevious,
    CarouselNext,
  } from "@/components/ui/carousel";
  
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
    const id = Number(params.id);
  
    const [product, setProduct] = useState<Product | null>(null);
    const [selectedColor, setSelectedColor] = useState<string>("");
    const [selectedSize, setSelectedSize] = useState<string>("");
  
    useEffect(() => {
      async function loadProduct() {
        try {
          const res = await fetch(`http://localhost:8000/products/${id}`, {
            cache: "no-store",
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
      return <div>Cargando producto...</div>;
    }
  
    const handleColorChange = (color: string) => {
      setSelectedColor(color);
    };
  
    const handleSizeChange = (size: string) => {
      setSelectedSize(size);
    };
  
    // Función para formatear el descuento dependiendo del tipo
    const formatDiscount = (discountType: string, discountAmount: number): string => {
      switch (discountType) {
        case "percent":
          return `${discountAmount}% de descuento`;
        case "fixed":
          return `$${discountAmount} de descuento`;
        case "installments":
          return `${discountAmount} cuotas sin interés`;
        default:
          return ""; // Si no hay descuento válido, retorna vacío
      }
    };
  
    // Función para calcular el precio con descuento
    const calculateDiscountedPrice = (price: number, discountType: string, discountAmount: number): number => {
      if (discountType === "percent") {
        return price - (price * discountAmount) / 100;
      }
      if (discountType === "fixed") {
        return price - discountAmount;
      }
      return price;
    };
  
    return (
      <section className="py-12 md:py-16">
        <div className="grid gap-8 px-4 md:px-6">
          <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-8  px-4 md:px-6">
            <div className="flex items-center justify-center mx-6">
              <Carousel className="w-full max-w-[500px] rounded-lg shadow-lg">
                <CarouselContent>
                  {product.images.length >= 1 ? (
                    product.images.map((image, index) => (
                      <CarouselItem key={index}>
                        <img
                          src={image}
                          alt={`Product Image ${index + 1}`}
                          width={600}
                          height={600}
                          className="w-full object-cover"
                          style={{ aspectRatio: "600/600", objectFit: "cover" }}
                        />
                      </CarouselItem>
                    ))
                  ) : (
                    <CarouselItem>
                      <img
                        src="/placeholder.svg"
                        alt="Placeholder Image"
                        width={600}
                        height={600}
                        className="w-full object-cover"
                        style={{ aspectRatio: "600/600", objectFit: "cover" }}
                      />
                    </CarouselItem>
                  )}
                </CarouselContent>
                <CarouselPrevious />
                <CarouselNext />
              </Carousel>
            </div>
  
            <div className="grid gap-4 md:gap-10 items-start">
              <div className=" md:flex items-start">
                <div className="grid gap-4">
                  <h1 className="font-bold text-3xl lg:text-4xl">
                    {product.name}
                  </h1>
                  <div>
                    <p>{product.main_description}</p>
                  </div>
  
                  {/* Mostrar el precio con descuento si hay uno */}
                  <div className="text-4xl font-bold">
                    {product.discount_type !== "No Discount" &&
                    product.discount_amount > 0 ? (
                      <><div className="flex items-center gap-2">
                          {/* Precio anterior tachado */}
                          <span className="text-gray-500 line-through">
                            ${product.price.toFixed(2)}
                          </span>
                          {/* Precio con descuento */}
                          <span className="text-red-600 font-bold">
                            ${calculateDiscountedPrice(
                              product.price,
                              product.discount_type,
                              product.discount_amount
                            ).toFixed(2)}
                          </span>
                        </div><span className="text-b text-gray text-2xl">
                            {formatDiscount(
                              product.discount_type,
                              product.discount_amount
                            )}
                          </span></>
                    ) : (
                      // Si no hay descuento, mostrar el precio normal
                      <span>${product.price.toFixed(2)}</span>
                    )}
                  </div>
  
                  <div>
                    <p>{product.long_description}</p>
                  </div>
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
                  <p>Color seleccionado: {selectedColor}</p>
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
                  <p>Talle seleccionado: {selectedSize}</p>
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
                      {Array.from(
                        { length: product.stock_count },
                        (_, i) => i + 1
                      ).map((quantity) => (
                        <SelectItem key={quantity} value={String(quantity)}>
                          {quantity}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </form>
              <div className="flex">
                <AddToCart id={id}></AddToCart>
                <Button variant="outline" size="sm" className="ml-2">
                  Comprar
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
  