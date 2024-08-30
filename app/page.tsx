import MainSection from "@/components/mainSection";
import { fetchData } from "@/lib/api";

export default async function Home() {
  const data = await fetchData();

  return (
    <>
      <MainSection products={data.products} banner={data.store.banner} />
    </>
  );
}
