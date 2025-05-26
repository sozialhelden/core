import * as icons from "~/lib/categories/icons";
import { translate } from "~/lib/i18n/utils/translator";

const toilets = {
  toilets: {
    name: () => translate("Toilets"),
    icon: icons.toilet,
    synonyms: [
      "amenity=toilets",
      "public_bathroom",
      "Public Bathroom",
      "Public Toilet",
      "800-8700-0198",
      "Eurokey-Anlage",
      "Öffentliche WC-Anlage",
    ],
  },
} as const;

export function getToilets() {
  return toilets;
}
