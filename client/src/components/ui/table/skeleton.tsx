export default function Skeleton() {
    return (
        <>
            {Array.from({ length: 10 }).map((_, index) => (
                <tr key={`shimmer-${index}`} className="animate-pulse">
                    <td className="px-6 py-4">
                        <div className="h-4 bg-gray-200 rounded w-16"></div>
                    </td>
                    <td className="px-6 py-4">
                        <div className="h-4 bg-gray-200 rounded w-32"></div>
                    </td>
                    <td className="px-6 py-4">
                        <div className="h-4 bg-gray-200 rounded w-32"></div>
                    </td>
                    <td className="px-6 py-4">
                        <div className="h-4 bg-gray-200 rounded w-20"></div>
                    </td>
                    <td className="px-6 py-4">
                        <div className="h-4 bg-gray-200 rounded w-24"></div>
                    </td>
                    <td className="px-6 py-4">
                        <div className="h-4 bg-gray-200 rounded w-20"></div>
                    </td>
                    <td className="px-6 py-4">
                        <div className="h-4 bg-gray-200 rounded w-24"></div>
                    </td>
                    <td className="px-6 py-4">
                        <div className="h-4 bg-gray-200 rounded w-20"></div>
                    </td>
                </tr>
            ))}
        </>
    );
}
