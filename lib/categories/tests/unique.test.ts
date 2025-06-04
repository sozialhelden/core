import { describe, expect, test } from "vitest";
import { type Category, type OsmTagValuePair, getCategories } from "~/lib";

describe("selectors and synonyms are unique", () => {
  const checkedSelectors = new Map<OsmTagValuePair, Category>();
  const checkedSynonyms = new Map<string, Category>();

  for (const [category, { selectors, synonyms }] of Object.entries(
    getCategories(),
  )) {
    test(`category ${category} has unique selectors and synonyms`, () => {
      for (const selector of selectors ?? []) {
        expect(
          checkedSelectors.has(selector),
          `The selector "${selector}" is already used by the category "${checkedSelectors.get(selector)}"`,
        ).toBeFalsy();
        checkedSelectors.set(selector, category as Category);
      }
      for (const synonym of synonyms ?? []) {
        expect(
          checkedSynonyms.has(synonym),
          `The synonym "${synonym}" is already used by the category "${checkedSynonyms.get(synonym)}"`,
        ).toBeFalsy();
        checkedSynonyms.set(synonym, category as Category);
      }
    });
  }
});
