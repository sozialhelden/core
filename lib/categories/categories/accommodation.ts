import * as icons from "~/lib/categories/icons";
import { translate } from "~/lib/i18n/utils/translator";

const accommodation = {
  accommodation: {
    name: () => translate("Hotels"),
    icon: icons.lodging,
    synonyms: [
      "Residential Building (Apartment / Condo)",
      "accommodation",
      "Hotel or Motel",
      "Residential Building",
      "500-5000-0000",
      "900-9300-0221",
      "Hébergement",
    ],
    priority: 50,
  },

  bed_breakfast: {
    name: () => translate("Bed'n'Breakfast"),
    icon: icons.lodging,
    parents: ["accommodation"],
    synonyms: [
      "tourism=bed_and_breakfast",
      "bed_and_breakfast",
      "Bed & Breakfast",
      "Bed & Breakfast",
      "500-5100-0058",
    ],
  },

  dormitory: {
    name: () => translate("Dormitory"),
    icon: icons.lodging,
    parents: ["accommodation"],
    synonyms: [
      "building=dormitory",
      "vacation_appartment",
      "College Residence Hall",
      "Fraternity House",
      "Sorority House",
      "Boarding House",
      "Residence",
    ],
  },

  motel: {
    name: () => translate("Motel"),
    icon: icons.lodging,
    parents: ["accommodation"],
    synonyms: ["tourism=motel", "Motel", "500-5000-0054"],
  },

  chalet: {
    name: () => translate("Chalet"),
    icon: icons.lodging,
    parents: ["accommodation"],
    synonyms: [
      "tourism=chalet",
      "gite",
      "Ski Chalet",
      "Mountain Huts",
      "Trekking Hut",
      "500-5100-0354",
      "Hütte",
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
      "lodging",
      "hotel",
      "luxury_hotel",
      "Hotel",
      "Lodging",
      "Short-time Hotel",
      "Ski Resort",
      "500-5100-0000",
      "500-5100-0060",
      "550-5520-0212",
      "500-5000-0053",
      "Hotel oder Pension oder Bed & Breakfast",
    ],
  },

  camping: {
    name: () => translate("Camp Site"),
    icon: icons.campsite,
    parents: ["accommodation"],
    synonyms: [
      "tourism=camp_site",
      "campground",
      "campground",
      "Campground",
      "camp_site",
      "Campground",
      "Holiday Camp",
      "Campsite",
      "500-5100-0056",
      "500-5100-0059",
      "550-5510-0378",
      "Campingplatz",
    ],
  },

  guest_house: {
    name: () => translate("Guest House"),
    icon: icons.lodging,
    parents: ["accommodation"],
    synonyms: [
      "tourism=guest_house",
      "indoor_lodging",
      "Vacation Rental",
      "Guest House",
      "500-5100-0057",
      "Ferienhaus oder Ferienwohnung",
      "Gruppenunterkünfte",
    ],
  },

  hostel: {
    name: () => translate("Hostel"),
    icon: icons.lodging,
    parents: ["accommodation"],
    synonyms: [
      "tourism=hostel",
      "hostel",
      "hostel",
      "Hostel",
      "Hostel",
      "500-5100-0055",
    ],
  },
} as const;

export function getAccommodation() {
  return accommodation;
}
