import { useMemo } from 'react';

import type { Load } from '@services/types';
import type { TableColumn } from '@components/ui/table';

import { useStatusesQuery, useCarriersQuery } from '@services/queries';

export const useColumns = () => {
    const { data: statuses } = useStatusesQuery();
    const { data: carriers } = useCarriersQuery();

    const columns: Array<TableColumn & { accessor: keyof Load }> = useMemo(() => {
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
                render: (value: number) => {
                    const status = statuses?.find((s) => s.id === value);
                    return status?.label || value;
                },
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
                render: (value: number) => {
                    const carrier = carriers?.find((c) => c.id === value);
                    return carrier?.label || value;
                },
            },
            {
                key: 'price',
                label: 'Price',
                accessor: 'price',
            },
        ];
    }, [statuses, carriers]);

    return columns;
};
