"use client";

import { useState, useEffect, useMemo } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Slider } from "@/components/ui/slider";
import { Label } from "@/components/ui/label";
import { SearchIcon, FilterIcon, XIcon } from "lucide-react";
import { Separator } from "@/components/ui/separator";
import ProductCard from "@/components/productCard";
import { fetchData } from "@/lib/api"; // Reutilizamos la función fetchData

export default function ProductsPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [priceRange, setPriceRange] = useState([0, 1000]);
  const [showFilters, setShowFilters] = useState(false);
  const [products, setProducts] = useState([]); // Productos dinámicos
  const [categories, setCategories] = useState<string[]>([]); // Categorías dinámicas

  useEffect(() => {
    async function loadProducts() {
      const data = await fetchData(); // Llamamos a la función fetchData
      setProducts(data.products); // Actualizamos los productos
      setCategories(data.categories); // Actualizamos las categorías
    }
    loadProducts();
  }, []);

  const filteredProducts = useMemo(() => {
    return products.filter((product: any) => {
      const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesCategory = selectedCategories.length === 0 || selectedCategories.includes(product.category);
      const matchesPrice = product.price >= priceRange[0] && product.price <= priceRange[1];
      return matchesSearch && matchesCategory && matchesPrice;
    });
  }, [searchTerm, selectedCategories, priceRange, products]);

  const toggleCategory = (category: string) => {
    setSelectedCategories((prev) =>
      prev.includes(category)
        ? prev.filter((c) => c !== category)
        : [...prev, category]
    );
  };

  const clearFilters = () => {
    setSelectedCategories([]);
    setPriceRange([0, 1000]);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-5xl font-bold mb-8">Nuestros productos</h1>
      <div className="flex flex-col lg:flex-row gap-8">
        {/* Sidebar con filtros */}
        <aside className="w-full lg:w-1/4">
          <Card className="sticky top-4">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Filtros</CardTitle>
              <Button
                variant="ghost"
                size="sm"
                className="lg:hidden"
                onClick={() => setShowFilters(!showFilters)}
              >
                {showFilters ? <XIcon className="h-4 w-4" /> : <FilterIcon className="h-4 w-4" />}
              </Button>
            </CardHeader>
            <CardContent className={`space-y-6 ${showFilters ? 'block' : 'hidden lg:block'}`}>
              <div>
                <h3 className="font-medium mb-3">Categorías</h3>
                <div className="space-y-2">
                  {categories.map((category) => (
                    <div key={category} className="flex items-center space-x-2">
                      <Checkbox
                        id={category}
                        checked={selectedCategories.includes(category)}
                        onCheckedChange={() => toggleCategory(category)}
                      />
                      <Label htmlFor={category} className="text-sm font-normal cursor-pointer">
                        {category}
                      </Label>
                    </div>
                  ))}
                </div>
              </div>
              <Separator />
              <div>
                <h3 className="font-medium mb-3">Rango de precios</h3>
                <Slider
                  min={0}
                  max={1000}
                  step={10}
                  value={priceRange}
                  onValueChange={setPriceRange}
                  className="mb-2"
                />
                <div className="flex justify-between mt-2 text-sm text-muted-foreground">
                  <span>${priceRange[0]}</span>
                  <span>${priceRange[1]}</span>
                </div>
              </div>
              <Separator />
              <Button onClick={clearFilters} variant="outline" size="sm" className="w-full">
                Limpiar filtros
              </Button>
            </CardContent>
          </Card>
        </aside>
        {/* Contenido principal */}
        <main className="w-full lg:w-3/4">
          <div className="mb-6">
            <div className="relative">
              <SearchIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground" />
              <Input
                type="search"
                placeholder="Buscar productos..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 w-full"
              />
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProducts.map((product: any) => (
              <ProductCard
                key={product.product_id}
                id={product.product_id}
                name={product.name}
                price={product.price.toFixed(2)}
                description={product.main_description}
                imageUrl={product.image}
              />
            ))}
          </div>
          {filteredProducts.length === 0 && (
            <p className="text-center text-muted-foreground mt-8">Cargando...</p>
          )}
        </main>
      </div>
    </div>
  );
}
