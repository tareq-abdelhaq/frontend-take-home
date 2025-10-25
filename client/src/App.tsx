import { useState, useEffect } from 'react';
import { Toaster } from 'react-hot-toast';

import ShippingLoadsTable from '@components/shipping-loads-table';
import ShippingLoadsFilters, { type FilterState } from '@components/shipping-loads-filters';

function App() {
    // Initialize filters from URL or fallback to defaults
    const getInitialFilters = (): FilterState => {
        const params = new URLSearchParams(window.location.search);
        return {
            search: params.get('search') || '',
            status: params.get('status') ? Number(params.get('status')) : null,
            carrier: params.get('carrier') ? Number(params.get('carrier')) : null,
        };
    };

    const [filters, setFilters] = useState<FilterState>(getInitialFilters);

    // Update URL when filters change to persist the filters in the URL
    useEffect(() => {
        const params = new URLSearchParams();

        if (filters.search) params.set('search', filters.search);
        if (filters.status) params.set('status', filters.status.toString());
        if (filters.carrier) params.set('carrier', filters.carrier.toString());

        const newUrl = params.toString() ? `?${params.toString()}` : window.location.pathname;
        window.history.replaceState({}, '', newUrl);
    }, [filters]);

    const handleFiltersChange = (newFilters: FilterState) => {
        setFilters(newFilters);
    };

    return (
        <div className="min-h-screen bg-gray-50 py-8">
            <Toaster
                position="top-right"
                toastOptions={{
                    duration: 4000,
                    style: {
                        background: '#363636',
                        color: '#fff',
                    },
                    success: {
                        duration: 3000,
                        iconTheme: {
                            primary: '#10B981',
                            secondary: '#fff',
                        },
                    },
                    error: {
                        duration: 5000,
                        iconTheme: {
                            primary: '#EF4444',
                            secondary: '#fff',
                        },
                    },
                }}
            />
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="mb-8">
                    <h1 className="text-3xl font-bold text-gray-900">Shipping Loads</h1>
                    <p className="mt-2 text-sm text-gray-600">Manage and track your shipping loads</p>
                </div>

                <div className="space-y-6">
                    <ShippingLoadsFilters filters={filters} onFiltersChange={handleFiltersChange} />
                    <ShippingLoadsTable filters={filters} />
                </div>
            </div>
        </div>
    );
}

export default App;
