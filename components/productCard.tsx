import React from 'react';
import { Button } from "@/components/ui/button";
import Link from 'next/link';
import { AddToCart } from './ui/buttons';

interface ProductCardProps {
  id:number;
  name: string;
  price: string;
  description: string;
  imageUrl: string;
}

const ProductCard: React.FC<ProductCardProps> = ({ id ,name, price, description, imageUrl }) => {
  return (
    <div className="grid gap-4 ">
      <div className="grid gap-2.5 relative group">
        <Link href="#" className="absolute inset-0 z-10" prefetch={false}>
          <span className="sr-only">View</span>
        </Link>
        <img
          src={imageUrl}
          alt={name}
          width={200}
          height={200}
          className="rounded-lg object-cover w-full aspect-square group-hover:opacity-50 transition-opacity"
        />
        <div className="grid gap-1">
          <div className="flex items-center gap-4">
            <h3 className="font-semibold">{name}</h3>
            <h4 className="font-semibold ml-auto">{price}</h4>
          </div>
          <p className="text-sm leading-none">{description}</p>
        </div>
      </div>
      <AddToCart id={id} ></AddToCart>
    </div>
  );
};

export default ProductCard;
