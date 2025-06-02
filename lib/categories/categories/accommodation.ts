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
    synonyms: [
      "tourism=bed_and_breakfast",
      "500-5100-0058",
      "Bed & Breakfast",
      "Bed & Breakfast",
      "bed_and_breakfast",
    ],
  },

  dormitory: {
    name: () => translate("Dormitory"),
    icon: icons.lodging,
    parents: ["accommodation"],
    synonyms: [
      "building=dormitory",
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
    synonyms: ["tourism=motel", "500-5000-0054", "Motel"],
  },

  chalet: {
    name: () => translate("Chalet"),
    icon: icons.lodging,
    parents: ["accommodation"],
    synonyms: [
      "tourism=chalet",
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
    synonyms: ["tourism=caravan_site", "rv_park", "RV Park", "Trailer Park"],
  },

  hotel: {
    name: () => translate("Hotel"),
    icon: icons.lodging,
    parents: ["accommodation"],
    synonyms: [
      "tourism=hotel",
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
    synonyms: [
      "tourism=camp_site",
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
    synonyms: [
      "tourism=guest_house",
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
    synonyms: ["tourism=hostel", "500-5100-0055", "Hostel", "hostel"],
  },
} as const;

export function getAccommodation() {
  return accommodation;
}
