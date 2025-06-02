import * as icons from "~/lib/categories/icons";
import { translate } from "~/lib/i18n/utils/translator";

const moneyPost = {
  money_post: {
    name: () => translate("Money"),
    icon: icons.bank,
    synonyms: [
      "600-6900-0250",
      "700-7050-0109",
      "700-7200-0271",
      "Bank",
      "Finance & Insurance Services",
      "Money Transferring Service",
      "Pawnshop",
      "accounting",
      "finance",
      "money_post",
    ],
  },

  post_box: {
    name: () => translate("Post Box"),
    icon: icons.post,
    parents: ["money_post"],
    synonyms: ["amenity=post_box", "post_box", "Post box"],
  },

  currencyexchange: {
    name: () => translate("Currency Exchange"),
    icon: icons.bank,
    parents: ["money_post"],
    synonyms: [
      "amenity=bureau_de_change",
      "700-7050-0110",
      "Check Cashing Service",
      "Cheque Cashing & Currency Exchange",
      "Currency Exchange",
      "bureau_de_change",
    ],
  },

  parcel_locker: {
    name: () => translate("Parcel Locker"),
    icon: icons.circle, // TODO: use a better icon
    parents: ["money_post"],
    synonyms: ["amenity=parcel_locker"],
  },

  bank: {
    name: () => translate("Bank"),
    icon: icons.bank,
    parents: ["money_post"],
    synonyms: ["amenity=bank", "700-7000-0107", "Bank", "Credit Union", "bank"],
  },

  post_office: {
    name: () => translate("Post Office"),
    icon: icons.post,
    parents: ["money_post"],
    synonyms: [
      "amenity=post_office",
      "700-7450-0114",
      "700-7450-0294",
      "Post Office",
      "Post",
      "post_office",
    ],
  },

  atm: {
    name: () => translate("ATM"),
    icon: icons.bank,
    parents: ["money_post"],
    synonyms: [
      "amenity=atm",
      "700-7010-0108",
      "ATM",
      "Cash Machine",
      "Geldautomat",
      "atm",
    ],
  },
} as const;

export function getMoneyPost() {
  return moneyPost;
}
