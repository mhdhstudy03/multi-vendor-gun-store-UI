const API_URL = process.env.NEXT_PUBLIC_API_URL ?? "http://localhost:4000";

export interface Product {
  id: number;
  name: string;
  vendor: string;
  price: number;
  category: string;
}

export interface Vendor {
  id: number;
  name: string;
  rating: number;
  fulfillment: string;
}

export async function fetchProducts(): Promise<Product[]> {
  try {
    const res = await fetch(`${API_URL}/products`, {
      next: { revalidate: 0 },
      cache: "no-store",
    });
    if (!res.ok) {
      throw new Error(`Failed to load products: ${res.statusText}`);
    }
    return res.json();
  } catch (error) {
    console.error("fetchProducts error", error);
    return [];
  }
}

export async function fetchVendors(): Promise<Vendor[]> {
  try {
    const res = await fetch(`${API_URL}/vendors`, {
      next: { revalidate: 0 },
      cache: "no-store",
    });
    if (!res.ok) {
      throw new Error(`Failed to load vendors: ${res.statusText}`);
    }
    return res.json();
  } catch (error) {
    console.error("fetchVendors error", error);
    return [];
  }
}


