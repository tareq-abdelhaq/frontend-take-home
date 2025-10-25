import { useState, useMemo } from 'react';

import Table from '@components/ui/table';
import Pagination from '@components/ui/pagination';

import { useLoadsQuery } from '@services/queries';
import { useColumns } from './hooks/use-columns';

// Todo: Add toast error if something goes wrong while fetching loads
// Todo: Fix flickering when loading data

export default function ShippingLoadsTable() {
    const [currentPage, setCurrentPage] = useState(1);

    const queryParams = useMemo(
        () => ({
            page: currentPage,
            limit: 10,
        }),
        [currentPage]
    );

    const { data, isLoading } = useLoadsQuery(queryParams);
    const columns = useColumns();

    const tableData = data?.data || [];
    const pagination = data?.pagination;

    const handlePrevious = () => {
        if (pagination?.hasPreviousPage) {
            setCurrentPage(currentPage - 1);
        }
    };

    const handleNext = () => {
        if (pagination?.hasNextPage) {
            setCurrentPage(currentPage + 1);
        }
    };

    return (
        <div className="flex flex-col gap-4">
            <Table
                data={tableData}
                columns={columns}
                isLoading={isLoading}
                empty={{
                    message: 'No shipping loads found',
                    subMessage: 'Try adjusting your filters or check back later',
                }}
            />
            {pagination && (
                <Pagination
                    currentPage={pagination.page}
                    totalPages={pagination.totalPages}
                    onPrevious={handlePrevious}
                    onNext={handleNext}
                    hasPrevious={pagination.hasPreviousPage}
                    hasNext={pagination.hasNextPage}
                />
            )}
        </div>
    );
}
