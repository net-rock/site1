export interface Tile {
  id: string;
  name: string;
  brand: string;
  size: string;
  color: string;
  material: string;
  imageUrl: string;
  description: string;
  price: number;
}

export type SortOption = 'name' | 'price-asc' | 'price-desc' | 'brand';

export interface FilterState {
  sizes: string[];
  colors: string[];
  materials: string[];
  brands: string[];
  searchQuery: string;
}

export interface User {
  id: string;
  email: string;
  name: string;
  mobile?: string;
}

export interface AuthState {
  user: User | null;
  isAuthenticated: boolean;
}