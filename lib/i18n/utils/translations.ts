import {
  fallbackLanguageTag,
  getFuzzilyExtendedLocales,
  type LanguageTag,
  type Locale,
} from "~/lib";

export type Translations<T = string> = Record<Locale, T>;

function findSuitableTranslation<T = string>(
  translations: Translations<T>,
  languageTag: LanguageTag,
): T | undefined {
  return translations[
    getFuzzilyExtendedLocales(languageTag).find(
      (locale) => translations[locale],
    ) ?? ""
  ];
}

export function getTranslations<T = string>(
  input: Translations<T> | string | null | undefined,
  languageTag: LanguageTag,
): T | string | undefined {
  if (typeof input === "undefined" || input === null) {
    return undefined;
  }
  if (typeof input === "string") {
    return input;
  }
  if (typeof input !== "object") {
    return undefined;
  }

  return (
    findSuitableTranslation(input, languageTag) ||
    findSuitableTranslation(input, fallbackLanguageTag)
  );
}
