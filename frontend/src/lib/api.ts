import { API_BASE_URL } from "./config";

export interface Category {
  id: number;
  name: string;
  slug: string;
  description?: string | null;
  image_url?: string | null;
}

async function apiPost<T>(path: string, body: any, token?: string): Promise<T> {
  const res = await fetch(`${API_BASE_URL}${path}`, {
    method: 'POST',
    cache: 'no-store',
    headers: {
      'Content-Type': 'application/json',
      ...(token ? { Authorization: `Bearer ${token}` } : {}),
    },
    body: JSON.stringify(body),
  });
  if (!res.ok) {
    const text = await res.text().catch(() => '');
    throw new Error(`API error ${res.status} ${res.statusText}: ${text}`);
  }
  return res.json();
}

export interface OpeningHour {
  id: number;
  location_id: number;
  day_of_week: number; // 0-6
  opening_time?: string | null; // HH:MM:SS
  closing_time?: string | null; // HH:MM:SS
  is_closed?: boolean | null;
  special_notes?: string | null;
}

export interface SpecialEvent {
  id: number;
  location_id: number;
  event_name: string;
  description?: string | null;
  start_date: string; // YYYY-MM-DD
  end_date: string;   // YYYY-MM-DD
  start_time?: string | null; // HH:MM:SS
  end_time?: string | null;   // HH:MM:SS
  event_type?: string | null;
  additional_cost?: number | null;
  is_active?: boolean | null;
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

export interface LocationImage {
  id: number;
  location_id: number;
  image_url: string;
  alt_text?: string | null;
  display_order?: number | null;
  is_primary?: boolean | null;
}

export interface Review {
  id: number;
  user_id: number;
  location_id: number;
  rating: number;
  review_text?: string | null;
  is_verified_visit?: boolean | null;
  is_helpful?: boolean | null;
  helpful_count?: number | null;
  is_approved?: boolean | null;
  createdAt?: string;
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
  listLocationImages: () => apiGet<LocationImage[]>("/location-images"),
  listReviews: () => apiGet<Review[]>("/reviews"),
  listOpeningHours: () => apiGet<OpeningHour[]>("/opening-hours"),
  listSpecialEvents: () => apiGet<SpecialEvent[]>("/special-events"),
  // Auth
  register: (payload: { email: string; username: string; password_hash: string; first_name?: string; last_name?: string; }) => apiPost<{ token: string; user: any }>("/auth/register", payload),
  login: (payload: { email: string; password_hash: string; }) => apiPost<{ token: string; user: any }>("/auth/login", payload),
  // Reviews
  createReview: (payload: { user_id: number; location_id: number; rating: number; review_text?: string; is_verified_visit?: boolean; }, token: string) => apiPost("/reviews", payload, token),
};
