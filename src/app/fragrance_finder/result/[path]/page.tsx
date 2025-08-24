import { notFound } from 'next/navigation';
import FragranceFinderResult from '@/component/fragranceFinder/FragranceFinderResult';
import { RecItem, Result } from '@/app/core/types/fragranceFinder';
import { RECOMMEND, RESULT } from '@/app/core/constants/fragranceFinder';

export default async function ResultPage({
  params,
}: {
  params: Promise<{ path: string }>;
}) {
  const { path } = await params;

  const item = Object.values(RESULT).find((r) => r.path === path) as
    | Result
    | undefined;
  const rec = Object.values(RECOMMEND).find((_, idx) => {
    const resultItem = Object.values(RESULT)[idx];
    return resultItem.path === path;
  }) as RecItem[] | undefined;

  if (!item || !rec) {
    notFound();
  }

  return <FragranceFinderResult item={item} rec={rec} />;
}
