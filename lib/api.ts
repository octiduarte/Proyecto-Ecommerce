const API_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:8000";

export async function fetchData() {
  const res = await fetch(`${API_URL}/main/stores/1`, {
    cache: "no-store",
  });
  const data = await res.json();
  return data;
}
