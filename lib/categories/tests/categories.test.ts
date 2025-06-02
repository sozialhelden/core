import { beforeEach, describe, expect, test, vi } from "vitest";

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
    });
  });

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
