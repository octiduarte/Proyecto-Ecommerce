"use client";

import { useState, useMemo } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Slider } from "@/components/ui/slider";
import { Label } from "@/components/ui/label";
import { SearchIcon, FilterIcon, XIcon } from "lucide-react";
import { Separator } from "@/components/ui/separator";
import ProductCard from "@/components/productCard";

// Mock product data
const products = [
  { id: 1, name: "T-Shirt", category: "Clothing", price: 19.99, image: "/placeholder.svg" },
  { id: 2, name: "Jeans", category: "Clothing", price: 49.99, image: "/placeholder.svg" },
  { id: 3, name: "Sneakers", category: "Footwear", price: 79.99, image: "/placeholder.svg" },
  { id: 4, name: "Watch", category: "Accessories", price: 129.99, image: "/placeholder.svg" },
  { id: 5, name: "Backpack", category: "Accessories", price: 59.99, image: "/placeholder.svg" },
  { id: 6, name: "Headphones", category: "Electronics", price: 89.99, image: "/placeholder.svg" },
  { id: 7, name: "Smartphone", category: "Electronics", price: 599.99, image: "/placeholder.svg" },
  { id: 8, name: "Laptop", category: "Electronics", price: 999.99, image: "/placeholder.svg" },
];

const categories = ["Clothing", "Footwear", "Accessories", "Electronics"];

export default function ProductsPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [priceRange, setPriceRange] = useState([0, 1000]);
  const [showFilters, setShowFilters] = useState(false);

  const filteredProducts = useMemo(() => {
    return products.filter((product) => {
      const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesCategory = selectedCategories.length === 0 || selectedCategories.includes(product.category);
      const matchesPrice = product.price >= priceRange[0] && product.price <= priceRange[1];
      return matchesSearch && matchesCategory && matchesPrice;
    });
  }, [searchTerm, selectedCategories, priceRange]);

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
        {/* Sidebar with filters */}
        <aside className="w-full lg:w-1/4">
          <Card className="sticky top-4">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Filters</CardTitle>
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
                <h3 className="font-medium mb-3">Categories</h3>
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
                <h3 className="font-medium mb-3">Price Range</h3>
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
                Clear Filters
              </Button>
            </CardContent>
          </Card>
        </aside>
        {/* Main content */}
        <main className="w-full lg:w-3/4">
          <div className="mb-6">
            <div className="relative">
              <SearchIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground" />
              <Input
                type="search"
                placeholder="Search products..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 w-full"
              />
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProducts.map((product) => (
              <ProductCard
                key={product.id}
                id={product.id}
                name={product.name}
                price={product.price.toFixed(2)}
                description={product.category}
                imageUrl={product.image}
              />
            ))}
          </div>
          {filteredProducts.length === 0 && (
            <p className="text-center text-muted-foreground mt-8">No products found.</p>
          )}
        </main>
      </div>
    </div>
  );
}
