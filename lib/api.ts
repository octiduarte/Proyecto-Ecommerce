export async function fetchData() {
  const res = await fetch('https://ecommercebd-production.up.railway.app/main/stores/1', {
    cache: 'no-store'
  });
  const data = await res.json();
  return data;
}
