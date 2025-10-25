import { useState, useMemo, useEffect } from 'react';
import toast from 'react-hot-toast';

import Table from '@components/ui/table';
import Pagination from '@components/ui/pagination';

import { useLoadsQuery } from '@services/queries';
import { useColumns } from './hooks/use-columns';

import type { GetLoadsReqParams } from '@services/types';
import type { FilterState } from '@components/shipping-loads-filters';

// Todo: Fix flickering when loading data
// Todo: Fix pagination resetting when filters change "currently works but it fires 2 requests"

interface ShippingLoadsTableProps {
    filters?: FilterState;
}

export default function ShippingLoadsTable({ filters }: ShippingLoadsTableProps) {
    const [currentPage, setCurrentPage] = useState(1);

    const queryParams: GetLoadsReqParams = useMemo(
        () => ({
            page: currentPage,
            limit: 10,
            search: filters?.search || undefined,
            status: filters?.status || undefined,
            carrier: filters?.carrier || undefined,
        }),
        [currentPage, filters]
    );

    const { data, isLoading, error } = useLoadsQuery(queryParams);
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

    // Reset pagination when filters change
    useEffect(() => {
        setCurrentPage(1);
    }, [filters?.search, filters?.status, filters?.carrier]);

    // Show error toast when API fails
    useEffect(() => {
        if (error) {
            toast.error(`Failed to load shipping loads: ${error}`);
        }
    }, [error]);

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
