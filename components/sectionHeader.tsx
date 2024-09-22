'use client';
import React from "react";

type SectionHeaderProps = {
  banner: string; // Añadimos la propiedad banner
};

const SectionHeader = ({ banner }: SectionHeaderProps) => {
  return (
    <div className="z-0 relative flex h-lvh sm:h-80 xl:h-96 w-full items-center justify-center overflow-hidden">
      <img
        src={banner}
        className="absolute w-full h-full object-cover z-0" // Asegúrate de que el z-index del banner sea bajo
        alt="Banner"
      />
      <div className="relative z-10 flex flex-col justify-center gap-7 w-full h-full py-5 bg-white/40 p-6 rounded-lg text-center">
        <h1 className="md:text-8xl text-6xl font-bold text-black">
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
