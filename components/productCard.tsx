import React from 'react';
import { Button } from "@/components/ui/button";
import Link from 'next/link';
import { AddToCart } from './ui/buttons';

interface ProductCardProps {
  id: number;
  name: string;
  price: string;
  description: string;
  imageUrl: string;
}

const ProductCard: React.FC<ProductCardProps> = ({ id, name, price, description, imageUrl }) => {
  return (
    <div className="flex flex-col justify-between h-full p-4 border rounded-lg transition-transform transform hover:scale-105 hover:shadow-lg">
      <Link href={`/productview/${id}`} prefetch={false} className="flex-grow ">
        <div>
          <div className="relative group ">
            <img
              src={imageUrl}
              alt={name}
              width={200}
              height={200}
              className="rounded-lg object-cover w-full aspect-square "
            />
          </div>
          <div className="mt-4">
            <h3 className="font-semibold">{name}</h3>
            <h4 className="font-semibold mt-1">{price}</h4>
            <p className="text-sm leading-none mt-2">{description}</p>
          </div>
        </div>
      </Link>
      <div className="mt-4">
        <AddToCart id={id}></AddToCart>
      </div>
    </div>
  );
};

export default ProductCard;
