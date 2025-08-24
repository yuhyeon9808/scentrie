import { notFound } from 'next/navigation';
import MagazineView from '@/component/magazine/MagazineView';
import { fetchMagazinesById } from '@/app/core/api/fetch/fetchMagazinesById';

export default async function Page({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  const data = await fetchMagazinesById(id);

  if (!data) notFound();

  return <MagazineView magazine={data} />;
}
