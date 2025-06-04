import * as icons from "~/lib/categories/icons";
import { translate } from "~/lib/i18n/utils/translator";

const accommodation = {
  accommodation: {
    name: () => translate("Hotels"),
    icon: icons.lodging,
    synonyms: [
      "500-5000-0000",
      "900-9300-0221",
      "Hotel or Motel",
      "Hébergement",
      "Residential Building (Apartment / Condo)",
      "Residential Building",
      "accommodation",
    ],
    priority: 50,
  },

  bed_breakfast: {
    name: () => translate("Bed'n'Breakfast"),
    icon: icons.lodging,
    parents: ["accommodation"],
    selectors: ["tourism=bed_and_breakfast"],
    synonyms: ["500-5100-0058", "Bed & Breakfast", "bed_and_breakfast"],
  },

  dormitory: {
    name: () => translate("Dormitory"),
    icon: icons.lodging,
    parents: ["accommodation"],
    selectors: ["building=dormitory"],
    synonyms: [
      "Boarding House",
      "College Residence Hall",
      "Fraternity House",
      "Residence",
      "Sorority House",
      "vacation_appartment",
    ],
  },

  motel: {
    name: () => translate("Motel"),
    icon: icons.lodging,
    parents: ["accommodation"],
    selectors: ["tourism=motel"],
    synonyms: ["500-5000-0054", "Motel"],
  },

  chalet: {
    name: () => translate("Chalet"),
    icon: icons.lodging,
    parents: ["accommodation"],
    selectors: ["tourism=chalet"],
    synonyms: [
      "500-5100-0354",
      "Hütte",
      "Mountain Huts",
      "Ski Chalet",
      "Trekking Hut",
      "gite",
    ],
  },

  caravan_site: {
    name: () => translate("Caravan Site"),
    icon: icons.car,
    parents: ["accommodation"],
    selectors: ["tourism=caravan_site"],
    synonyms: ["rv_park", "RV Park", "Trailer Park"],
  },

  hotel: {
    name: () => translate("Hotel"),
    icon: icons.lodging,
    parents: ["accommodation"],
    selectors: ["tourism=hotel"],
    synonyms: [
      "500-5000-0053",
      "500-5100-0000",
      "500-5100-0060",
      "550-5520-0212",
      "Hotel oder Pension oder Bed & Breakfast",
      "Hotel",
      "Lodging",
      "Short-time Hotel",
      "Ski Resort",
      "hotel",
      "lodging",
      "luxury_hotel",
    ],
  },

  camping: {
    name: () => translate("Camp Site"),
    icon: icons.campsite,
    parents: ["accommodation"],
    selectors: ["tourism=camp_site"],
    synonyms: [
      "500-5100-0056",
      "500-5100-0059",
      "550-5510-0378",
      "Campground",
      "Campingplatz",
      "Campsite",
      "Holiday Camp",
      "camp_site",
      "campground",
    ],
  },

  guest_house: {
    name: () => translate("Guest House"),
    icon: icons.lodging,
    parents: ["accommodation"],
    selectors: ["tourism=guest_house"],
    synonyms: [
      "500-5100-0057",
      "Ferienhaus oder Ferienwohnung",
      "Gruppenunterkünfte",
      "Guest House",
      "Vacation Rental",
      "indoor_lodging",
    ],
  },

  hostel: {
    name: () => translate("Hostel"),
    icon: icons.lodging,
    parents: ["accommodation"],
    selectors: ["tourism=hostel"],
    synonyms: ["500-5100-0055", "Hostel", "hostel"],
  },
} as const;

export function getAccommodation() {
  return accommodation;
}
