import SearchFilter from './search-filter';
import StatusFilter from './status-filter';
import CarrierFilter from './carrier-filter';

export interface FilterState {
    search: string;
    status: number | null;
    carrier: number | null;
}

interface ShippingLoadsFiltersProps {
    filters: FilterState;
    onFiltersChange: (filters: FilterState) => void;
}

export default function ShippingLoadsFilters({ filters, onFiltersChange }: ShippingLoadsFiltersProps) {
    const handleFilterChange = (key: keyof FilterState, value: string | number | null) => {
        const newFilters = { ...filters, [key]: value };
        onFiltersChange(newFilters);
    };

    return (
        <div className="rounded-lg bg-white p-6 shadow-sm border border-gray-200">
            <h2 className="text-lg font-medium text-gray-900 mb-4">Filters</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <SearchFilter value={filters.search} onChange={(value) => handleFilterChange('search', value)} />
                <StatusFilter
                    value={filters.status}
                    onChange={(value: number | null) => handleFilterChange('status', value)}
                />
                <CarrierFilter
                    value={filters.carrier}
                    onChange={(value: number | null) => handleFilterChange('carrier', value)}
                />
            </div>
        </div>
    );
}
