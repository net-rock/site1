import React from 'react';
import { Tile } from '../types';

interface ProductGridProps {
  tiles: Tile[];
}

export default function ProductGrid({ tiles }: ProductGridProps) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
      {tiles.map((tile) => (
        <div
          key={tile.id}
          className="bg-white rounded-lg shadow-sm overflow-hidden hover:shadow-md transition-shadow duration-300"
        >
          <div className="aspect-w-4 aspect-h-3">
            <img
              src={tile.imageUrl}
              alt={tile.name}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="p-4">
            <h3 className="text-lg font-semibold text-gray-900 mb-1">{tile.name}</h3>
            <p className="text-sm text-gray-600 mb-2">{tile.brand}</p>
            <div className="flex justify-between items-center">
              <span className="text-lg font-bold text-gray-900">${tile.price}</span>
              <div className="text-sm text-gray-500">
                {tile.size} • {tile.material}
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}