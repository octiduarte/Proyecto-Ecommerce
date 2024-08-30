'use client';
import React from "react";

type SectionHeaderProps = {
  banner: string; // Añadimos la propiedad banner
};

const SectionHeader = ({ banner }: SectionHeaderProps) => {
  return (
    <div className="relative flex h-lvh sm:h-80 xl:h-96 w-full items-center justify-center overflow-hidden">
      <img
        src={banner} // Usamos la propiedad banner
        className="absolute w-full object-cover"
        alt="Banner" // Añadimos texto alternativo para accesibilidad
      />
      <div className="relative z-10 flex flex-col gap-3 py-5 bg-white/60 p-6 rounded-lg text-center">
        <h1 className="md:text-5xl text-3xl font-bold text-black">
          Bienvenidos a nuestro Ecommerce
        </h1>
        <p className="text-black">
          Hot Picks from the Summer Collection: Embrace the Season in Style!
        </p>
      </div>
    </div>
  );
};

export default SectionHeader;
