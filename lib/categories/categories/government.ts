import * as icons from "~/lib/categories/icons";
import { translate } from "~/lib/i18n/utils/translator";

const government = {
  government: {
    name: () => translate("Authorities"),
    icon: icons.townHall,
    synonyms: [
      "550-5510-0380",
      "700-7300-0113",
      "800-8100-0318",
      "900-9100-0214",
      "City",
      "Country",
      "County",
      "Lieu institutionnel",
      "Neighborhood",
      "State",
      "Town",
      "Village",
    ],
  },

  townhall: {
    name: () => translate("Town Hall"),
    icon: icons.townHall,
    parents: ["government"],
    synonyms: ["amenity=townhall", "800-8100-0163", "City Hall", "Town Hall"],
  },

  court: {
    name: () => translate("Courthouse"),
    icon: icons.townHall,
    parents: ["government"],
    synonyms: [
      "amenity=courthouse",
      "800-8100-0170",
      "Courthouse",
      "courthouse",
    ],
  },

  political_party: {
    name: () => translate("Political Party"),
    icon: icons.embassy,
    parents: ["government"],
    synonyms: ["office=political party", "Campaign Office"],
  },

  embassy: {
    name: () => translate("Embassy"),
    icon: icons.embassy,
    parents: ["government"],
    synonyms: [
      "amenity=embassy",
      "800-8100-0164",
      "Embassy / Consulate",
      "Embassy",
      "diplomatic=embassy",
      "embassy",
      "embassy=*",
      "office=diplomatic",
    ],
  },

  employment_agency: {
    name: () => translate("Employment Agency"),
    icon: icons.townHall,
    parents: ["government"],
    synonyms: [
      "office=employment_agency",
      "700-7200-0259",
      "700-7200-0267",
      "Human Resources & Recruiting Services",
      "Modeling Agency",
      "Recruiting Agency",
    ],
  },

  government_office: {
    name: () => translate("Government Office"),
    icon: icons.townHall,
    parents: ["government"],
    synonyms: [
      "office=government",
      "700-7400-0289",
      "800-8100-0000",
      "800-8100-0165",
      "800-8100-0168",
      "800-8100-0171",
      "800-8100-0172",
      "800-8100-0317",
      "800-8700-0298",
      "Agricultural Checkpoint",
      "Border Crossing",
      "Business Center",
      "Business Service",
      "Capitol Building",
      "College Administrative Building",
      "County Council",
      "Fire Station",
      "Government Building",
      "Government Office",
      "Government or Community Facility",
      "Military Base",
      "Military Checkpoint",
      "Public Administration",
      "Registry Office",
      "States & Municipalities",
      "Verwaltung oder Amt",
      "Verwaltungsgebäude",
      "Voting Booth",
      "government",
      "government_office",
      "local_government_office",
    ],
  },

  police: {
    name: () => translate("Police"),
    icon: icons.police,
    parents: ["government"],
    synonyms: [
      "amenity=police",
      "700-7300-0111",
      "700-7300-0112",
      "Police Station",
      "Policing & Security Services",
      "Polizei",
      "police",
      "police_department",
    ],
  },
} as const;

export function getGovernment() {
  return government;
}
