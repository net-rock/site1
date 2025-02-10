import React, { useState, useMemo } from 'react';
import Header from './components/Header';
import Filters from './components/Filters';
import ProductGrid from './components/ProductGrid';
import { mockTiles, availableFilters } from './data/mockData';
import { FilterState, Tile, User, AuthState } from './types';

function App() {
  const [filters, setFilters] = useState<FilterState>({
    sizes: [],
    colors: [],
    materials: [],
    brands: [],
    searchQuery: '',
  });

  const [auth, setAuth] = useState<AuthState>({
    user: null,
    isAuthenticated: false,
  });

  const filteredTiles = useMemo(() => {
    return mockTiles.filter((tile) => {
      const matchesSearch = tile.name.toLowerCase().includes(filters.searchQuery.toLowerCase()) ||
                          tile.brand.toLowerCase().includes(filters.searchQuery.toLowerCase());
      
      const matchesSize = filters.sizes.length === 0 || filters.sizes.includes(tile.size);
      const matchesColor = filters.colors.length === 0 || filters.colors.includes(tile.color);
      const matchesMaterial = filters.materials.length === 0 || filters.materials.includes(tile.material);
      const matchesBrand = filters.brands.length === 0 || filters.brands.includes(tile.brand);

      return matchesSearch && matchesSize && matchesColor && matchesMaterial && matchesBrand;
    });
  }, [filters]);

  const handleSearch = (query: string) => {
    setFilters((prev) => ({ ...prev, searchQuery: query }));
  };

  const handleAuth = (email: string, password: string, mobile: string | undefined, isLogin: boolean) => {
    // In a real application, this would make an API call to authenticate
    // For demo purposes, we'll simulate a successful login/signup
    const mockUser: User = {
      id: '1',
      email,
      name: email.split('@')[0], // Use part of email as name for demo
      mobile,
    };

    setAuth({
      user: mockUser,
      isAuthenticated: true,
    });

    // Show success message
    alert(isLogin ? 'Successfully logged in!' : 'Successfully signed up!');
  };

  const handleLogout = () => {
    setAuth({
      user: null,
      isAuthenticated: false,
    });
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header
        onSearch={handleSearch}
        user={auth.user}
        onLogin={handleAuth}
        onLogout={handleLogout}
      />
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col md:flex-row gap-8">
          <aside className="md:w-64 flex-shrink-0">
            <Filters
              filters={filters}
              onFilterChange={setFilters}
              availableFilters={availableFilters}
            />
          </aside>
          
          <div className="flex-1">
            <div className="mb-6 flex justify-between items-center">
              <h2 className="text-xl font-bold text-gray-900">
                {filteredTiles.length} Products
              </h2>
            </div>
            <ProductGrid tiles={filteredTiles} />
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;