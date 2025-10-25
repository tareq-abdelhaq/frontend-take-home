interface PaginationProps {
    currentPage: number;
    totalPages: number;
    onPrevious: () => void;
    onNext: () => void;
    hasPrevious: boolean;
    hasNext: boolean;
}

export default function Pagination(props: PaginationProps) {
    const { currentPage, totalPages, onPrevious, onNext, hasPrevious, hasNext } = props;

    return (
        <div className="flex items-center justify-between px-6 py-3 bg-white border border-gray-200 rounded-lg shadow-sm">
            <div className="flex items-center gap-2">
                <button
                    onClick={onPrevious}
                    disabled={!hasPrevious}
                    className="cursor-pointer inline-flex items-center justify-center w-10 h-10 text-sm font-medium text-gray-500 border border-gray-300 rounded-md hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
                    aria-label="Previous page"
                >
                    &#8249;
                </button>
                <button
                    onClick={onNext}
                    disabled={!hasNext}
                    className="cursor-pointer inline-flex items-center justify-center w-10 h-10 text-sm font-medium text-gray-500 border border-gray-300 rounded-md hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
                    aria-label="Next page"
                >
                    &#8250;
                </button>
            </div>
            <div className="text-sm text-gray-700">
                Page {currentPage} of {totalPages}
            </div>
        </div>
    );
}
