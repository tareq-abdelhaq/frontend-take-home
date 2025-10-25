import { useMemo } from 'react';

import type { Load } from '@services/types';
import type { TableColumn } from '@components/ui/table';

export const useColumns = () => {
    const columns: Array<TableColumn & { accessor: keyof Load }> =
        useMemo(() => {
            return [
                {
                    key: 'id',
                    label: 'Load ID',
                    accessor: 'id',
                },
                {
                    key: 'origin',
                    label: 'Origin',
                    accessor: 'origin',
                },
                {
                    key: 'destination',
                    label: 'Destination',
                    accessor: 'destination',
                },
                {
                    key: 'status',
                    label: 'Status',
                    accessor: 'status',
                },
                {
                    key: 'date',
                    label: 'Date',
                    accessor: 'date',
                },
                {
                    key: 'weight',
                    label: 'Weight',
                    accessor: 'weight',
                },
                {
                    key: 'carrier',
                    label: 'Carrier',
                    accessor: 'carrier',
                },
                {
                    key: 'price',
                    label: 'Price',
                    accessor: 'price',
                },
            ];
        }, []);

    return columns;
};
