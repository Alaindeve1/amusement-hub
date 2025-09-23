import { API_BASE_URL } from "./config";

export interface Category {
  id: number;
  name: string;
  slug: string;
  description?: string | null;
  image_url?: string | null;
}

export interface Location {
  id: number;
  category_id: number;
  name: string;
  slug: string;
  description?: string | null;
  address?: string | null;
  city?: string | null;
  state?: string | null;
  country?: string | null;
  postal_code?: string | null;
  latitude?: number | null;
  longitude?: number | null;
  phone?: string | null;
  website?: string | null;
  email?: string | null;
  average_rating?: number | null;
  total_reviews?: number | null;
  total_visitors?: number | null;
  is_featured?: boolean;
  is_active?: boolean;
}

async function apiGet<T>(path: string, init?: RequestInit): Promise<T> {
  const res = await fetch(`${API_BASE_URL}${path}`, {
    ...init,
    // Ensure fresh data on server components
    cache: "no-store",
    headers: {
      ...(init?.headers || {}),
      "Content-Type": "application/json",
    },
  });
  if (!res.ok) {
    const text = await res.text().catch(() => "");
    throw new Error(`API error ${res.status} ${res.statusText}: ${text}`);
  }
  return res.json();
}

export const api = {
  listCategories: () => apiGet<Category[]>("/categories"),
  getCategory: (id: number) => apiGet<Category>(`/categories/${id}`),
  listLocations: () => apiGet<Location[]>("/locations"),
  getLocation: (id: number) => apiGet<Location>(`/locations/${id}`),
};
