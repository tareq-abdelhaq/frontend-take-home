interface EmptyStateProps {
    colSpan: number;
    message?: string;
    subMessage?: string;
}

export default function EmptyState({
    colSpan,
    message = 'No data found',
    subMessage = 'Try adjusting your filters or check back later',
}: EmptyStateProps) {
    return (
        <tr>
            <td colSpan={colSpan} className="px-4 py-8 text-center text-gray-500">
                <div className="flex flex-col items-center justify-center gap-2">
                    <svg className="h-12 w-12 text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={1.5}
                            d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                        />
                    </svg>
                    <p className="text-sm font-medium">{message}</p>
                    <p className="text-xs text-gray-400">{subMessage}</p>
                </div>
            </td>
        </tr>
    );
}
