"use client";
import React from "react";
import Link from "next/link";
import { Button } from "./ui/button";

type SectionHeaderProps = {
  banner: string; // Añadimos la propiedad banner
};

const SectionHeader = ({ banner }: SectionHeaderProps) => {
  return (
    <section className="relative w-full h-screen md:h-screen overflow-hidden">
      <img
        src={banner}
        alt="Hero Product"
        width={1920}
        height={1080}
        className="w-full h-full object-cover object-center"
        style={{ aspectRatio: "1920/1080", objectFit: "cover" }}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center text-primary-foreground px-4 w-full max-w-screen-md">
        <h1 className="text-foreground text-6xl md:text-7xl font-bold tracking-tight">
          Elevate Your Style
        </h1>
        <p className="mt-4 text-background text-lg md:text-xl">
          Discover our curated collection of high-quality, sustainable fashion
          that will transform your wardrobe.
        </p>
        <div className="mt-8 flex justify-center gap-4">
          <Link href="/products" prefetch={false}>
            <Button variant="destructive" size="sm" className="w-full">
              Comprar
            </Button>
          </Link>
          <Link href="#" prefetch={false}>
            <Button variant="outline" size="sm" className="text-foreground">
              Ver mas
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default SectionHeader;
