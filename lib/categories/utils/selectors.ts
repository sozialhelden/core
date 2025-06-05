import {
  type Category,
  type CategoryProperties,
  type OsmTagValuePair,
  getCategories,
} from "~/lib/categories/categories";

function getHierarchyLevel(category: Category): number {
  const { parents } = getCategories()[category];
  if (!parents?.length) {
    return 1;
  }
  return Math.max(...parents.map(getHierarchyLevel)) + 1;
}

function calculateSpecificity(
  selector: OsmTagValuePair,
  category: Category,
): number {
  return (
    10 * (getHierarchyLevel(category) - (selector.endsWith("=*") ? 0.5 : 0))
  );
}

type SelectorList = [
  OsmTagValuePair,
  { category: Category; specificity: number },
][];

export function getPrioritizedSelectorList(): SelectorList {
  return Object.entries(getCategories())
    .reduce((acc, [category, { selectors }]) => {
      for (const selector of selectors ?? []) {
        acc.push([
          selector,
          {
            category: category as Category,
            specificity: calculateSpecificity(selector, category as Category),
          },
        ]);
      }
      return acc;
    }, [] as SelectorList)
    .sort((a, b) => {
      return b[1].specificity - a[1].specificity;
    });
}

export function getSelectorMap(): Map<
  OsmTagValuePair,
  { category: Category; specificity: number }
> {
  return getPrioritizedSelectorList().reduce((acc, [selector, properties]) => {
    acc.set(selector, properties);
    return acc;
  }, new Map<OsmTagValuePair, { category: Category; specificity: number }>());
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
    .filter((item) => !!item)
    .sort((a, b) => {
      return b.specificity - a.specificity;
    })
    .map(({ category }) => {
      return {
        ...getCategories()[category as Category],
        id: category,
      } as CategoryProperties;
    });

  const unknownCategory: CategoryProperties = {
    ...getCategories().unknown,
    id: "unknown",
  };

  return categories.shift() || unknownCategory;
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
  const whenStatements = getPrioritizedSelectorList().map(
    ([selector, { category }]) => {
      const [key, value] = selector.split("=");

      if (jsonColumnName) {
        return value === "*"
          ? `WHEN ${tableName}.${jsonColumnName} ? '${key}' THEN '${category}'`
          : `WHEN ${tableName}.${jsonColumnName}->'${key}' = '${value}' THEN '${category}'`;
      }

      return value === "*"
        ? `WHEN ${tableName}.'${key}' IS NOT NULL THEN '${category}'`
        : `WHEN ${tableName}.'${key}' = '${value}' THEN '${category}'`;
    },
  );

  return `CASE\n${whenStatements.join("\n")}\nELSE\n'unknown'\nEND`;
}
