import { translate, setTranslator } from "~/lib/i18n/utils/translator";
import { describe, expect, test, vi } from "vitest";

describe("translator", () => {
  test("it returns the given string as fallback", () => {
    expect(translate("foo")).toBe("foo");
  });

  test("it can set a translator function", () => {
    const mockTranslator = vi.fn();
    mockTranslator.mockReturnValue("bar");
    setTranslator(mockTranslator);

    expect(translate("foo")).toBe("bar");
    expect(translate("baz")).toBe("bar");
    expect(mockTranslator).toHaveBeenCalledWith("foo");
  });
});
