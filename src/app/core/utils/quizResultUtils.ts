import { Category } from '../types/fragranceFinder';

export function quizResultUtils(pick: Record<number, Category>) {
  const values = Object.values(pick);

  const counter = values.reduce<Record<Category, number>>((acc, v) => {
    acc[v] = (acc[v] ?? 0) + 1;
    return acc;
  }, {} as Record<Category, number>);

  const entries = Object.entries(counter) as [Category, number][];
  if (!entries.length) return;

  const top = entries.sort((a, b) => b[1] - a[1])[0][0];
  return top;
}
