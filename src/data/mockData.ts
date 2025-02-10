import { Tile } from '../types';

// Generate 200+ products
const generateMockTiles = (): Tile[] => {
  const brands = ['Ceramica Elite', 'TileMax', 'ArtisanTile', 'LuxuryFloor', 'ModernSpace'];
  const materials = ['Porcelain', 'Ceramic', 'Natural Stone', 'Glass', 'Marble'];
  const colors = ['White', 'Beige', 'Gray', 'Black', 'Brown', 'Blue'];
  const sizes = ['30x30cm', '60x60cm', '45x45cm', '30x60cm', '80x80cm'];

  return Array.from({ length: 220 }, (_, i) => ({
    id: `tile-${i + 1}`,
    name: `${brands[i % brands.length]} ${materials[i % materials.length]} Tile`,
    brand: brands[i % brands.length],
    size: sizes[i % sizes.length],
    color: colors[i % colors.length],
    material: materials[i % materials.length],
    imageUrl: `https://source.unsplash.com/800x600/?tile,ceramic&sig=${i}`,
    description: 'Premium quality ceramic tile for modern spaces.',
    price: Math.floor(Math.random() * (200 - 20 + 1) + 20),
  }));
};

export const mockTiles = generateMockTiles();

export const availableFilters = {
  sizes: ['30x30cm', '60x60cm', '45x45cm', '30x60cm', '80x80cm'],
  colors: ['White', 'Beige', 'Gray', 'Black', 'Brown', 'Blue'],
  materials: ['Porcelain', 'Ceramic', 'Natural Stone', 'Glass', 'Marble'],
  brands: ['Ceramica Elite', 'TileMax', 'ArtisanTile', 'LuxuryFloor', 'ModernSpace'],
};