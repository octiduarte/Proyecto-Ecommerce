'use client'
import MainSection from "@/components/mainSection";
import useData  from "@/context/DataContext";

export default function Home() {
  const data = useData();

  return (
    <>
      <MainSection products={data.products} banner={data.store.banner} />

    </>
  );
}
