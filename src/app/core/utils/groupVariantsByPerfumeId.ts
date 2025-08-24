import { PerfumeVariant } from "../types/perfume";

export function groupAndSortVariants(variants: PerfumeVariant[]) {
  const list = variants ?? [];

  const grouped = list.reduce<Record<number, PerfumeVariant[]>>((acc, item) => {
    if (!acc[item.perfume_id]) {
      acc[item.perfume_id] = [];
    }
    acc[item.perfume_id].push(item);
    return acc;
  }, {});

  for (const id in grouped) {
    grouped[id].sort((a, b) => {
      const numA = parseInt(String(a.volume), 10);
      const numB = parseInt(String(b.volume), 10);
      return numA - numB;
    });
  }

  return Object.values(grouped).flat();
}
