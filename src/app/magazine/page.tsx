import MagazineBoard from '@/component/magazine/MagazineBoard';

export default async function MagazineBoardPage({
  params,
}: {
  params: Promise<{ page: string }>;
}) {
  const { page } = await params;

  return <MagazineBoard page={page} />;
}
