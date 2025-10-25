import Skeleton from './skeleton';
import EmptyState from './empty-state';

export interface TableColumn {
    key: string;
    label: string;
    accessor: string;
}

interface TableProps {
    data: Array<Record<string, any>>;
    columns: Array<TableColumn>;
    isLoading: boolean;
    empty?: {
        message?: string;
        subMessage?: string;
    };
}

// Todo: use a proper key for table rows specially if there are actions like edit, delete, etc.
// Todo: add a tooltip to the table cells if the text is too long and truncate it

export default function Table(props: TableProps) {
    const { data, columns, isLoading, empty } = props;

    return (
        <div className="overflow-x-auto rounded-lg border border-gray-200 bg-white shadow-sm">
            <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                    <tr>
                        {columns.map((column) => (
                            <th
                                key={column.key}
                                className="px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase tracking-wider"
                            >
                                {column.label}
                            </th>
                        ))}
                    </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                    {isLoading ? (
                        <Skeleton />
                    ) : data.length === 0 ? (
                        <EmptyState colSpan={columns.length} message={empty?.message} subMessage={empty?.subMessage} />
                    ) : (
                        data.map((item, index) => (
                            <tr key={index} className="hover:bg-gray-50 transition-colors duration-150">
                                {columns.map((column) => (
                                    <td key={column.key} className="px-6 py-4 text-sm text-gray-900">
                                        {item[column.accessor]}
                                    </td>
                                ))}
                            </tr>
                        ))
                    )}
                </tbody>
            </table>
        </div>
    );
}
