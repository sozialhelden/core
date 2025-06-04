import * as icons from "~/lib/categories/icons";
import { translate } from "~/lib/i18n/utils/translator";

const entrancesAndExits = {
  entrance: {
    name: () => translate("Entrance"),
    icon: icons.entranceAlt1,
    selectors: ["entrance=yes"],
    hide: true,
  },

  emergency_exit: {
    name: () => translate("Emergency Exit"),
    icon: icons.entranceAlt1,
    selectors: ["entrance=emergency"],
    hide: true,
  },

  exit: {
    name: () => translate("Exit"),
    icon: icons.entranceAlt1,
    selectors: ["entrance=exit"],
    hide: true,
  },

  main_entrance: {
    name: () => translate("Main entrance"),
    icon: icons.entranceAlt1,
    selectors: ["entrance=main"],
    hide: true,
  },

  subway_entrance: {
    name: () => translate("Subway Entrance"),
    icon: icons.railMetro,
    parents: ["public_transfer"],
    selectors: ["railway=subway_entrance"],
  },
} as const;

export function getEntrancesAndExists() {
  return entrancesAndExits;
}
