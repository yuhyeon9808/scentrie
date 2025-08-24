import Link from 'next/link';

interface PaginationProps {
  basePath: string;
  currentPage: number;
  startPage: number;
  endPage: number;
  allPage: number;
}

export function PageNavigator({
  basePath,
  currentPage,
  startPage,
  endPage,
  allPage,
}: PaginationProps) {
  return (
    <div className="flex gap-3 sm:mt-14">
      {allPage > 5 && startPage > 1 && (
        <Link href={`${basePath}/${startPage - 1}`} className="px-2">
          이전
        </Link>
      )}

      {Array.from({ length: endPage - startPage + 1 }, (_, i) => {
        const page = startPage + i;
        return (
          <Link
            key={page}
            href={`${basePath}/${page}`}
            className={`px-2 ${
              currentPage === page
                ? 'text-primary-w font-semibold'
                : 'text-primary-w opacity-70'
            }`}
          >
            {page}
          </Link>
        );
      })}

      {allPage > 5 && endPage < allPage && (
        <Link href={`${basePath}/${endPage + 1}`} className="px-2">
          다음
        </Link>
      )}
    </div>
  );
}
