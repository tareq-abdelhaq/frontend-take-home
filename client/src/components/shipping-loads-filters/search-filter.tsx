interface SearchFilterProps {
    value: string;
    onChange: (value: string) => void;
}

export default function SearchFilter({ value, onChange }: SearchFilterProps) {
    return (
        <div>
            <label htmlFor="search" className="block text-sm font-medium text-gray-700 mb-2">
                Search
            </label>
            <input
                id="search"
                type="text"
                value={value}
                onChange={(e) => onChange(e.target.value)}
                placeholder="Search by Load ID, Origin, or Destination..."
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-200 focus:border-blue-200"
            />
        </div>
    );
}
