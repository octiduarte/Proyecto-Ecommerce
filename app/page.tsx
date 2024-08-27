// app/page.tsx
import Image from "next/image";
import MainSection from "@/components/mainSection";
import SectionFooter from "@/components/sectionFooter";

// Define la interfaz para el tipo de producto
interface Product {
  id: number;
  name: string;
  price: string;
  description: string;
  imageUrl: string;
}

// Define las props para el componente MainSection
interface MainSectionProps {
  products: Product[];
}

// Componente principal Home que obtiene los datos en el servidor
export default async function Home() {
  // Fetch de datos directamente en el componente
  let products: Product[] = [];

  try {
    const res = await fetch('http://localhost:8000/main/stores/1?limit=5', {
      cache: 'no-store', // Opcional: Evita el caché si necesitas datos actualizados cada vez
    });

    if (!res.ok) {
      throw new Error(`Error en la solicitud: ${res.statusText}`);
    }

    products = await res.json();
  } catch (error) {
    console.error('Error al obtener productos:', error);
  }

  return (
    <>
      <MainSection products={products} />
    </>
  );
}
