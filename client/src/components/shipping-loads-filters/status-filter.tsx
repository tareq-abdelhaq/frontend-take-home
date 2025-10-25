import { useStatusesQuery } from '@services/queries';

interface StatusFilterProps {
    value: number | null;
    onChange: (value: number | null) => void;
}

export default function StatusFilter({ value, onChange }: StatusFilterProps) {
    const { data } = useStatusesQuery();

    const statusList = data || [];

    const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        if (e.target.value === '') {
            onChange(null);
            return;
        }

        onChange(Number(e.target.value));
    };

    return (
        <div>
            <label htmlFor="status" className="block text-sm font-medium text-gray-700 mb-2">
                Status
            </label>
            <select
                id="status"
                value={value || ''}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-200 focus:border-blue-200"
            >
                <option value="">All Statuses</option>
                {statusList.map((status) => (
                    <option key={status.id} value={status.id}>
                        {status.label}
                    </option>
                ))}
            </select>
        </div>
    );
}
