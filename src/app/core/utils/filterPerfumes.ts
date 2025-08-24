import { Perfume } from "../types/perfume";

export function filterPerfumesByWord(
  perfumes: Perfume[],
  select: string
): Perfume[] {
  if (!select) return perfumes;

  return perfumes.filter((item) => {
    const brandMatch = item.brand?.name.includes(select);

    const noteMatch = item.PerfumeNotes?.some((note) =>
      note.name.includes(select)
    );

    const moodMatch = item.PerfumeMoods?.some((mood) =>
      mood.name.includes(select)
    );

    const searchMatch = item.name
      .replace(/\s+/g, "")
      .toLowerCase()
      .includes(select.replace(/\s+/g, "").toLowerCase());

    return brandMatch || noteMatch || moodMatch || searchMatch;
  });
}
