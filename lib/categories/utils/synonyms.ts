import {
  type Category,
  type CategoryProperties,
  getCategories,
} from "~/lib/categories/categories";

export function getSynonymMap(): Map<string, Category> {
  return Object.entries(getCategories()).reduce(
    (acc, [category, { synonyms }]) => {
      for (const synonym of synonyms ?? []) {
        acc.set(synonym, category as Category);
      }
      return acc;
    },
    new Map<string, Category>(),
  );
}

export function findCategoryBySynonym(synonym?: string): CategoryProperties {
  const id = getSynonymMap().get(synonym ?? "") || "unknown";
  return { id, ...getCategories()[id] };
}
