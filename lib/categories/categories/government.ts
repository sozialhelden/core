import * as icons from "~/lib/categories/icons";
import { translate } from "~/lib/i18n/utils/translator";

const government = {
  government: {
    name: () => translate("Authorities"),
    icon: icons.townHall,
    synonyms: [
      "City",
      "County",
      "Country",
      "Neighborhood",
      "State",
      "Town",
      "Village",
      "550-5510-0380",
      "700-7300-0113",
      "800-8100-0318",
      "900-9100-0214",
      "Lieu institutionnel",
    ],
  },

  townhall: {
    name: () => translate("Town Hall"),
    icon: icons.townHall,
    parents: ["government"],
    synonyms: ["amenity=townhall", "Town Hall", "City Hall", "800-8100-0163"],
  },

  court: {
    name: () => translate("Courthouse"),
    icon: icons.townHall,
    parents: ["government"],
    synonyms: [
      "amenity=courthouse",
      "courthouse",
      "Courthouse",
      "courthouse",
      "800-8100-0170",
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
      "embassy",
      "Embassy / Consulate",
      "Embassy",
      "800-8100-0164",
      "embassy=*",
      "diplomatic=embassy",
      "office=diplomatic",
    ],
  },

  employment_agency: {
    name: () => translate("Employment Agency"),
    icon: icons.townHall,
    parents: ["government"],
    synonyms: [
      "office=employment_agency",
      "Recruiting Agency",
      "Human Resources & Recruiting Services",
      "Modeling Agency",
      "700-7200-0259",
      "700-7200-0267",
    ],
  },

  government_office: {
    name: () => translate("Government Office"),
    icon: icons.townHall,
    parents: ["government"],
    synonyms: [
      "office=government",
      "local_government_office",
      "government_office",
      "College Administrative Building",
      "Business Center",
      "Government Building",
      "Capitol Building",
      "Military Base",
      "Business Service",
      "Fire Station",
      "States & Municipalities",
      "Voting Booth",
      "government",
      "Public Administration",
      "Government or Community Facility",
      "Military Base",
      "County Council",
      "Government Office",
      "Border Crossing",
      "Agricultural Checkpoint",
      "Military Checkpoint",
      "Registry Office",
      "700-7400-0289",
      "800-8100-0000",
      "800-8100-0165",
      "800-8100-0168",
      "800-8100-0171",
      "800-8100-0172",
      "800-8100-0317",
      "800-8700-0298",
      "Verwaltung oder Amt",
      "Verwaltungsgebäude",
    ],
  },

  police: {
    name: () => translate("Police"),
    icon: icons.police,
    parents: ["government"],
    synonyms: [
      "amenity=police",
      "police",
      "police_department",
      "Police Station",
      "Police Station",
      "Policing & Security Services",
      "700-7300-0111",
      "700-7300-0112",
      "Polizei",
    ],
  },
} as const;

export function getGovernment() {
  return government;
}
