import { useCarriersQuery } from '@services/queries';

interface CarrierFilterProps {
    value: number | null;
    onChange: (value: number | null) => void;
}

export default function CarrierFilter({ value, onChange }: CarrierFilterProps) {
    const { data } = useCarriersQuery();
    const carrierList = data || [];

    const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        if (e.target.value === '') {
            onChange(null);
            return;
        }

        onChange(Number(e.target.value));
    };

    return (
        <div>
            <label htmlFor="carrier" className="block text-sm font-medium text-gray-700 mb-2">
                Carrier
            </label>
            <select
                id="carrier"
                value={value || ''}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-200 focus:border-blue-200"
            >
                <option value="">All Carriers</option>
                {carrierList.map((carrier) => (
                    <option key={carrier.id} value={carrier.id}>
                        {carrier.label}
                    </option>
                ))}
            </select>
        </div>
    );
}
