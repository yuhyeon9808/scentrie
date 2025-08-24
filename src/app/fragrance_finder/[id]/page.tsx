import { QUIZ } from '@/app/core/constants/fragranceFinder';
import FragranceFinderTest from '@/component/fragranceFinder/FragranceFinderTest';
import { notFound } from 'next/navigation';

export default async function TestPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const quizId = Number(id);

  const quizObj = QUIZ.find((q) => q.id === quizId);
  if (!quizObj) notFound();

  return <FragranceFinderTest quiz={quizObj} />;
}
