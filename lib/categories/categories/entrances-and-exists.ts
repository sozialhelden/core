import * as icons from "~/lib/categories/icons";
import { translate } from "~/lib/i18n/utils/translator";

const entrancesAndExists = {
  entrance: {
    name: () => translate("Entrance"),
    icon: icons.entrance,
    synonyms: ["entrance=yes"],
    hide: true,
  },

  emergency_exit: {
    name: () => translate("Emergency Exit"),
    icon: icons.entrance,
    synonyms: ["entrance=emergency"],
    hide: true,
  },

  exit: {
    name: () => translate("Exit"),
    icon: icons.entrance,
    synonyms: ["entrance=exit"],
    hide: true,
  },

  main_entrance: {
    name: () => translate("Main entrance"),
    icon: icons.entrance,
    synonyms: ["entrance=main"],
    hide: true,
  },

  subway_entrance: {
    name: () => translate("Subway Entrance"),
    icon: icons.railMetro,
    parents: ["public_transfer"],
    synonyms: ["railway=subway_entrance"],
  },
  station_entrance: {
    name: () => translate("Station Entrance"),
    icon: icons.rail,
    parents: ["public_transfer"],
    synonyms: [],
  },
} as const;

export function getEntrancesAndExists() {
  return entrancesAndExists;
}
