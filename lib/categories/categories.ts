import type { FC } from "react";

import { getEntrancesAndExists } from "~/lib/categories/categories/entrances-and-exists";
import { getAccommodation } from "./categories/accommodation";
import { getCulture } from "./categories/culture";
import { getEducation } from "./categories/education";
import { getFood } from "./categories/food";
import { getGovernment } from "./categories/government";
import { getHealth } from "./categories/health";
import { getLeisure } from "./categories/leisure";
import { getMoneyPost } from "./categories/money-post";
import { getOther } from "./categories/other";
import { getPublicTransfer } from "./categories/public-transfer";
import { getShopping } from "./categories/shopping";
import { getSport } from "./categories/sport";
import { getToilets } from "./categories/toilets";
import { getTourism } from "./categories/tourism";

const categories = {
  ...getAccommodation(),
  ...getCulture(),
  ...getEducation(),
  ...getFood(),
  ...getGovernment(),
  ...getHealth(),
  ...getLeisure(),
  ...getMoneyPost(),
  ...getOther(),
  ...getPublicTransfer(),
  ...getShopping(),
  ...getSport(),
  ...getToilets(),
  ...getTourism(),
  ...getEntrancesAndExists(),
} as const;

export type OsmTagValuePair = `${string}=${string}`;

export type Category = keyof typeof categories;

export type CategoryBaseProperties = {
  // Translated name of the category.
  name: () => string;
  // Icon component to be used for this category.
  icon?: FC;
  // If true, this category will not be shown in the UI.
  hide?: boolean;
  // Categories get ordered in the UI by their priority.
  priority?: number;
  // A list of synonyms for this category, can be OSM tag
  // value pairs or plain strings. This will be used to
  // match a place to a category.
  synonyms?: Readonly<Array<string | OsmTagValuePair>>;
  // A list of parent categories
  parents?: Readonly<Category[]>;
};

export type CategoryProperties = CategoryBaseProperties & { id: Category };

// we're using const assertions in order to automatically generate types
// from the categories. but in order to make sure the categories above are
// also typesafe, we type this exported variable with the expected type.
// if something is off with the configured categories above, typescript will
// show an error on this categories variable instead. this is not ideal, but
// it ensures type-safety and allows for auto-type magic.
export function getCategories(): Record<Category, CategoryBaseProperties> {
  return categories;
}

function categoryFilter(
  filterFunction: (
    category: Category,
    properties: CategoryBaseProperties,
  ) => boolean,
): Partial<Record<Category, CategoryBaseProperties>> {
  return Object.entries(getCategories()).reduce(
    (acc, [category, properties]) => {
      if (filterFunction(category as Category, properties)) {
        acc[category as Category] = properties;
      }
      return acc;
    },
    {} as Partial<Record<Category, CategoryBaseProperties>>,
  );
}

export function getTopLevelCategories(): Partial<
  Record<Category, CategoryBaseProperties>
> {
  return categoryFilter((_, { parents }) => !parents?.length);
}
export function getChildCategories(
  parent: Category,
): Partial<Record<Category, CategoryBaseProperties>> {
  return categoryFilter((_, { parents }) => Boolean(parents?.includes(parent)));
}
