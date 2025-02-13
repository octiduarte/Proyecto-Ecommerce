export async function fetchData() {
    const res = await fetch('https://ecommercebd-production-6168.up.railway.app/main/stores/1', {
      cache: 'no-store' // Esto deshabilita la caché, similar a getServerSideProps.
    });
    const data = await res.json();
    return data;
  }

