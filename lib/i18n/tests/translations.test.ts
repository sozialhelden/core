import { describe, expect, test } from "vitest";
import type { LanguageTag } from "~/lib";
import { getTranslations } from "~/lib/i18n/utils/translations";

describe("translations", () => {
  test("it returns undefined or null if passed", () => {
    expect(getTranslations(undefined, "de")).toBe(undefined);
    expect(getTranslations(null, "de")).toBe(undefined);
  });
  test("it returns the string if a string is passed", () => {
    expect(getTranslations("lorem ipsum", "de")).toBe("lorem ipsum");
  });
  test("it returns direct matches", () => {
    const translations = {
      "de-DE": "de-DE",
      de: "de",
      en: "en",
    };
    expect(getTranslations(translations, "de-DE" as LanguageTag)).toBe("de-DE");
    expect(getTranslations(translations, "de")).toBe("de");
    expect(getTranslations(translations, "en" as LanguageTag)).toBe("en");
  });
  test("it returns language matches", () => {
    const translations = {
      de: "de",
      en: "en",
    };
    expect(getTranslations(translations, "de-DE" as LanguageTag)).toBe("de");
    expect(getTranslations(translations, "en-EN" as LanguageTag)).toBe("en");
  });
  test("it returns locale matches", () => {
    const translations = {
      de_DE: "de_DE",
      en_EN: "en_EN",
    };
    expect(getTranslations(translations, "de-DE" as LanguageTag)).toBe("de_DE");
    expect(getTranslations(translations, "en-EN" as LanguageTag)).toBe("en_EN");
  });
  test("it includes fuzzily extended locales", () => {
    const translations = {
      "de-DE": "de-DE",
      en_US: "en_US",
    };
    expect(getTranslations(translations, "de" as LanguageTag)).toBe("de-DE");
    expect(getTranslations(translations, "en" as LanguageTag)).toBe("en_US");
    expect(getTranslations(translations, "en-EN" as LanguageTag)).toBe("en_US");
    expect(getTranslations(translations, "en-CA" as LanguageTag)).toBe("en_US");
  });
});
