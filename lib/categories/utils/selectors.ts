import {
  type Category,
  type CategoryProperties,
  type OsmTagValuePair,
  getCategories,
} from "~/lib/categories/categories";

export function getSelectorMap(): Map<OsmTagValuePair, Category> {
  return Object.entries(getCategories()).reduce(
    (acc, [category, { selectors }]) => {
      for (const selector of selectors ?? []) {
        acc.set(selector, category as Category);
      }
      return acc;
    },
    new Map<OsmTagValuePair, Category>(),
  );
}

/**
 * Returns category "unknown" if no match was found.
 */
export function findCategoryByOSMTags(
  osmTags: Record<string, string>,
): CategoryProperties {
  const categories = Object.entries(osmTags)
    .map(([key, value]) => {
      const selector: OsmTagValuePair = `${key}=${value}`;
      const wildCardSelector: OsmTagValuePair = `${key}=*`;
      if (getSelectorMap().has(selector)) {
        return getSelectorMap().get(selector);
      }
      if (getSelectorMap().has(wildCardSelector)) {
        return getSelectorMap().get(wildCardSelector);
      }
    })
    .filter(Boolean)
    .map((category) => {
      return {
        ...getCategories()[category as Category],
        id: category,
      } as CategoryProperties;
    });

  return (
    categories.shift() || {
      ...getCategories().unknown,
      id: "unknown",
    }
  );
}

/**
 * Returns a SQL `CASE WHEN ... END` statement that can be used to query a category from OSM tags.
 * If your OSM tags are stored in a JSON column, you can pass the column name as the second argument.
 * If not, it assumes the tags are stored as regular columns in the table. The statement falls back
 * to category "unknown" if no match was found.
 */
export function generateCategoryByOSMTagsSQLStatement(
  tableName: string,
  jsonColumnName?: string,
): string {
  const whenStatements = Array.from(getSelectorMap().entries())
    // make sure the wildcard selectors are at the very end, so more specific
    // selector are matched first
    .sort(([selectorA], [selectorB]) => {
      return selectorA.endsWith("=*") ? 1 : selectorB.endsWith("=*") ? -1 : 0;
    })
    .map(([selector, category]) => {
      const [key, value] = selector.split("=");

      if (jsonColumnName) {
        return value === "*"
          ? `WHEN ${tableName}.${jsonColumnName} ? '${key}' THEN '${category}'`
          : `WHEN ${tableName}.${jsonColumnName}->'${key}' = '${value}' THEN '${category}'`;
      }

      return value === "*"
        ? `WHEN ${tableName}.'${key}' IS NOT NULL THEN '${category}'`
        : `WHEN ${tableName}.'${key}' = '${value}' THEN '${category}'`;
    });

  return `CASE\n${whenStatements.join("\n")}\nELSE\n'unknown'\nEND`;
}
