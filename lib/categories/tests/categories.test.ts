import { beforeEach, describe, expect, test, vi } from "vitest";
import type { Category } from "~/lib";

vi.mock("~/lib/categories/categories/culture");
vi.mock("~/lib/categories/categories/education");
vi.mock("~/lib/categories/categories/food");
vi.mock("~/lib/categories/categories/government");
vi.mock("~/lib/categories/categories/health");
vi.mock("~/lib/categories/categories/leisure");
vi.mock("~/lib/categories/categories/money-post");
vi.mock("~/lib/categories/categories/other");
vi.mock("~/lib/categories/categories/public-transfer");
vi.mock("~/lib/categories/categories/shopping");
vi.mock("~/lib/categories/categories/sport");
vi.mock("~/lib/categories/categories/toilets");
vi.mock("~/lib/categories/categories/tourism");
vi.mock("~/lib/categories/categories/entrances-and-exits");

const accommodationMock = vi.fn();

vi.doMock("~/lib/categories/categories/accommodation", () => ({
  getAccommodation: accommodationMock,
}));

beforeEach(() => {
  vi.clearAllMocks();
  vi.resetModules();
});

function mapToObject<K extends string | number | symbol, T>(
  map: Map<K, T>,
): { [k: string]: T } {
  return Object.fromEntries(map.entries());
}

describe("categories", () => {
  test("it returns configured categories", async () => {
    const mock = {
      accommodation: {
        name: () => "",
      },
    };
    accommodationMock.mockReturnValue(mock);

    const { getCategories } = await import("~/lib/categories/categories");
    expect(getCategories()).toMatchObject(mock);
  });

  test("it returns all top level categories that don't have parents", async () => {
    const translatorMock = () => "";
    const mock = {
      accommodation: {
        name: translatorMock,
      },
      hotel: {
        name: translatorMock,
        parents: ["accommodation"],
      },
      culture: {
        name: translatorMock,
      },
      bar: {
        name: translatorMock,
        parents: ["culture"],
      },
      food: {
        name: translatorMock,
        hide: true,
      },
    };
    accommodationMock.mockReturnValue(mock);
    const { getTopLevelCategories } = await import(
      "~/lib/categories/categories"
    );

    expect(getTopLevelCategories()).toMatchObject({
      accommodation: {
        name: translatorMock,
      },
      culture: {
        name: translatorMock,
      },
      food: {
        name: translatorMock,
      },
    });
  });

  test("it returns all children categories of a given parent", async () => {
    const translatorMock = () => "";
    const mock = {
      accommodation: {
        name: translatorMock,
      },
      hotel: {
        name: translatorMock,
        parents: ["accommodation"],
      },
      bar: {
        name: translatorMock,
        parents: ["accommodation"],
      },
      hotel_room: {
        name: translatorMock,
        parents: ["hotel"],
      },
      hotel_room_shower: {
        name: translatorMock,
        parents: ["hotel_room"],
      },
      food: {
        name: translatorMock,
        hide: true,
      },
      culture: {
        name: translatorMock,
        parents: ["food"],
      },
    };
    accommodationMock.mockReturnValue(mock);
    const { getChildCategories } = await import("~/lib/categories/categories");

    expect(getChildCategories("accommodation")).toMatchObject({
      hotel: {
        name: translatorMock,
      },
      bar: {
        name: translatorMock,
      },
      hotel_room: {
        name: translatorMock,
      },
      hotel_room_shower: {
        name: translatorMock,
      },
    });
  });
});

describe("synonyms", () => {
  test("it returns a map of configured synonyms", async () => {
    const mock = {
      accommodation: {
        name: () => "",
        synonyms: ["Unterkunft", "Übernachtung", "amenity=accommodation"],
      },
      culture: {
        name: () => "",
        synonyms: ["Kultur", "amenity=culture"],
      },
    };
    accommodationMock.mockReturnValue(mock);

    const { getSynonymMap } = await import("~/lib/categories/utils/synonyms");
    expect(mapToObject(getSynonymMap())).toMatchObject({
      Übernachtung: "accommodation",
      Unterkunft: "accommodation",
      "amenity=accommodation": "accommodation",
      Kultur: "culture",
      "amenity=culture": "culture",
    });
  });

  test("it finds a category by its synonym", async () => {
    const accommodation = {
      name: () => "",
      synonyms: ["Unterkunft", "Übernachtung", "amenity=accommodation"],
    };
    const culture = {
      name: () => "",
      synonyms: ["Kultur", "amenity=culture"],
    };
    accommodationMock.mockReturnValue({
      accommodation,
      culture,
    });

    const { findCategoryBySynonym } = await import(
      "~/lib/categories/utils/synonyms"
    );
    expect(findCategoryBySynonym("Unterkunft")).toMatchObject({
      id: "accommodation",
      ...accommodation,
    });
    expect(findCategoryBySynonym("amenity=accommodation")).toMatchObject({
      id: "accommodation",
      ...accommodation,
    });
    expect(findCategoryBySynonym("Kultur")).toMatchObject({
      id: "culture",
      ...culture,
    });
  });
});

describe("selectors", () => {
  const mock = {
    unknown: {
      name: () => "",
    },
    accommodation: {
      name: () => "",
      selectors: ["amenity=accommodation", "amenity=hotel"],
    },
    culture: {
      name: () => "",
      selectors: ["amenity=culture"],
    },
    food: {
      name: () => "",
      selectors: ["food=*"],
    },
    restaurant: {
      name: () => "",
      selectors: ["food=restaurant"],
    },
  };

  test("it returns a map of configured selectors", async () => {
    accommodationMock.mockReturnValue(mock);
    const { getSelectorMap } = await import("~/lib/categories/utils/selectors");
    expect(mapToObject(getSelectorMap())).toMatchObject({
      "amenity=accommodation": "accommodation",
      "amenity=culture": "culture",
      "amenity=hotel": "accommodation",
      "food=*": "food",
      "food=restaurant": "restaurant",
    });
  });

  describe("it finds a category by OSM tags", () => {
    for (const { osmTags, expectedCategory } of [
      { osmTags: { amenity: "hotel" }, expectedCategory: "accommodation" },
      { osmTags: { amenity: "culture" }, expectedCategory: "culture" },
      {
        osmTags: { iDoNoExists: "foo", amenity: "hotel" },
        expectedCategory: "accommodation",
      },
      { osmTags: { iDoNoExists: "foo" }, expectedCategory: "unknown" },
      { osmTags: { food: "restaurant" }, expectedCategory: "restaurant" },
      { osmTags: { food: "something" }, expectedCategory: "food" },
    ]) {
      test(`${JSON.stringify(osmTags)} -> "${expectedCategory}"`, async () => {
        accommodationMock.mockReturnValue(mock);
        const { getCategories } = await import("~/lib/categories/categories");
        const { findCategoryByOSMTags } = await import(
          "~/lib/categories/utils/selectors"
        );
        expect(findCategoryByOSMTags(osmTags)).toMatchObject({
          ...getCategories()[expectedCategory as Category],
          id: expectedCategory,
        });
      });
    }
  });

  test("it generates a SQL statement to query a category by OSM tags", async () => {
    accommodationMock.mockReturnValue(mock);
    const { generateCategoryByOSMTagsSQLStatement } = await import(
      "~/lib/categories/utils/selectors"
    );
    expect(generateCategoryByOSMTagsSQLStatement("a")).toBe(
      `CASE
WHEN a.'amenity' = 'accommodation' THEN 'accommodation'
WHEN a.'amenity' = 'hotel' THEN 'accommodation'
WHEN a.'amenity' = 'culture' THEN 'culture'
WHEN a.'food' = 'restaurant' THEN 'restaurant'
WHEN a.'food' IS NOT NULL THEN 'food'
ELSE
'unknown'
END`,
    );
  });

  test("it can also query OSM tags in a json column", async () => {
    accommodationMock.mockReturnValue(mock);
    const { generateCategoryByOSMTagsSQLStatement } = await import(
      "~/lib/categories/utils/selectors"
    );
    expect(generateCategoryByOSMTagsSQLStatement("a", "tags")).toBe(
      `CASE
WHEN a.tags->'amenity' = 'accommodation' THEN 'accommodation'
WHEN a.tags->'amenity' = 'hotel' THEN 'accommodation'
WHEN a.tags->'amenity' = 'culture' THEN 'culture'
WHEN a.tags->'food' = 'restaurant' THEN 'restaurant'
WHEN a.tags ? 'food' THEN 'food'
ELSE
'unknown'
END`,
    );
  });
});
