import ShippingLoadsTable from '@components/shipping-loads-table';

function App() {
    return (
        <div className="min-h-screen bg-gray-50 py-8">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="mb-8">
                    <h1 className="text-3xl font-bold text-gray-900">
                        Shipping Loads
                    </h1>
                    <p className="mt-2 text-sm text-gray-600">
                        Manage and track your shipping loads
                    </p>
                </div>

                <div className="space-y-6">
                    {/* Filters Section */}
                    <div className="rounded-lg bg-white p-6 shadow-sm border border-gray-200">
                        <h2 className="text-lg font-medium text-gray-900 mb-4">
                            Filters
                        </h2>
                        <div className="text-sm text-gray-500">
                            Filter controls will be implemented here
                        </div>
                    </div>

                    {/* Table Section */}
                    <ShippingLoadsTable />
                </div>
            </div>
        </div>
    );
}

export default App;
