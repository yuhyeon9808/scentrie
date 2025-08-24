export interface PageResult<T> {
  paginated: T[];
  startPage: number;
  endPage: number;
  allPage: number;
  currentPage: number;
}

export function groupPage<T>({
  page,
  data,
}: {
  page: string;
  data: T[];
}): PageResult<T> {
  const currentPage = Number(page) || 1;
  const allPage = Math.ceil(data.length / 8);

  const paginated = data.slice((currentPage - 1) * 8, currentPage * 8);

  const pageGroup = Math.ceil(currentPage / 5);
  const startPage = (pageGroup - 1) * 5 + 1;
  let endPage = pageGroup * 5;
  if (endPage > allPage) endPage = allPage;

  return { paginated, startPage, endPage, allPage, currentPage };
}
