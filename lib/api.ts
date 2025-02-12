export async function fetchData() {
    const res = await fetch('http://localhost:8000/main/stores/1', {
      cache: 'no-store' // Esto deshabilita la caché, similar a getServerSideProps.
    });
    const data = await res.json();
    return data;
  }

