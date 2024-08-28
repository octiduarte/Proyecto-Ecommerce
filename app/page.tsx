import MainSection from "@/components/mainSection";

async function fetchData() {
  const res = await fetch('http://localhost:8000/main/stores/1?limit=5', {
    cache: 'no-store' // Esto deshabilita la caché, similar a getServerSideProps.
  });
  const data = await res.json();
  return data;
}

export default async function Home() {
  const data = await fetchData();

  return (
    <>
      <MainSection products={data.products} />
    </>
  );
}
