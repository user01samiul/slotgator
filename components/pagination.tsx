// components/pagination.tsx
import Link from 'next/link';

interface PaginationProps {
  totalPages: number;
  currentPage: number;
}

export function Pagination({ totalPages, currentPage }: PaginationProps) {
  const prevPage = currentPage > 1 ? currentPage - 1 : null;
  const nextPage = currentPage < totalPages ? currentPage + 1 : null;

  return (
    <nav className="flex items-center gap-2">
      {prevPage ? (
        <Link
          href={`/game-providers?page=${prevPage}`}
          className="px-4 py-2 rounded-md border border-gray-300 hover:bg-gray-100"
        >
          Previous
        </Link>
      ) : (
        <button
          disabled
          className="px-4 py-2 rounded-md border border-gray-300 text-gray-400 cursor-not-allowed"
        >
          Previous
        </button>
      )}

      <div className="flex items-center gap-1">
        {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
          <Link
            key={page}
            href={`/game-providers?page=${page}`}
            className={`px-4 py-2 rounded-md border ${
              currentPage === page
                ? 'bg-red-600 border-red-600 text-white'
                : 'border-gray-300 hover:bg-gray-100'
            }`}
          >
            {page}
          </Link>
        ))}
      </div>

      {nextPage ? (
        <Link
          href={`/game-providers?page=${nextPage}`}
          className="px-4 py-2 rounded-md border border-gray-300 hover:bg-gray-100"
        >
          Next
        </Link>
      ) : (
        <button
          disabled
          className="px-4 py-2 rounded-md border border-gray-300 text-gray-400 cursor-not-allowed"
        >
          Next
        </button>
      )}
    </nav>
  );
}