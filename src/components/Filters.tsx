import React from 'react';
import { FilterState } from '../types';

interface FiltersProps {
  filters: FilterState;
  onFilterChange: (newFilters: FilterState) => void;
  availableFilters: {
    sizes: string[];
    colors: string[];
    materials: string[];
    brands: string[];
  };
}

export default function Filters({ filters, onFilterChange, availableFilters }: FiltersProps) {
  const handleCheckboxChange = (
    filterType: keyof Omit<FilterState, 'searchQuery'>,
    value: string
  ) => {
    const currentFilters = filters[filterType];
    const newFilters = currentFilters.includes(value)
      ? currentFilters.filter((item) => item !== value)
      : [...currentFilters, value];

    onFilterChange({
      ...filters,
      [filterType]: newFilters,
    });
  };

  const FilterSection = ({
    title,
    items,
    filterType,
  }: {
    title: string;
    items: string[];
    filterType: keyof Omit<FilterState, 'searchQuery'>;
  }) => (
    <div className="mb-6">
      <h3 className="text-lg font-semibold mb-2">{title}</h3>
      <div className="space-y-2">
        {items.map((item) => (
          <label key={item} className="flex items-center space-x-2">
            <input
              type="checkbox"
              checked={filters[filterType].includes(item)}
              onChange={() => handleCheckboxChange(filterType, item)}
              className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
            />
            <span className="text-sm text-gray-600">{item}</span>
          </label>
        ))}
      </div>
    </div>
  );

  return (
    <div className="bg-white p-4 rounded-lg shadow-sm">
      <h2 className="text-xl font-bold mb-4">Filters</h2>
      
      <FilterSection title="Size" items={availableFilters.sizes} filterType="sizes" />
      <FilterSection title="Color" items={availableFilters.colors} filterType="colors" />
      <FilterSection title="Material" items={availableFilters.materials} filterType="materials" />
      <FilterSection title="Brand" items={availableFilters.brands} filterType="brands" />
    </div>
  );
}