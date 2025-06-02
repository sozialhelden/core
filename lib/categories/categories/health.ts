import * as icons from "~/lib/categories/icons";
import { translate } from "~/lib/i18n/utils/translator";

const health = {
  health: {
    name: () => translate("Health"),
    icon: icons.hospital,
    synonyms: [
      "700-7200-0272",
      "Healthcare & Support Services",
      "Medical School",
      "Santé",
      "health",
    ],
  },

  nursing_home: {
    name: () => translate("Nursing Home"),
    icon: icons.hospital,
    parents: ["health"],
    synonyms: [
      "amenity=nursing_home",
      "healthcare=nursing_home",
      "healthcare=nursing",
      "nursing",
      "nursing_agency",
    ],
  },

  retirement_home: {
    name: () => translate("Retirement Home"),
    icon: icons.hospital,
    parents: ["health"],
    synonyms: ["amenity=retirement_home", "healthcare=retirement_home"],
  },

  audiologist: {
    name: () => translate("Audiologist"),
    icon: icons.doctor,
    parents: ["health"],
    synonyms: ["healthcare=audiologist"],
  },

  birthing_centre: {
    name: () => translate("Birthing Center"),
    icon: icons.hospital,
    parents: ["health"],
    synonyms: ["healthcare=birthing_centre"],
  },

  blood_bank: {
    name: () => translate("Blood Bank"),
    icon: icons.bloodBank,
    parents: ["health"],
    synonyms: ["healthcare=blood_bank"],
  },

  blood_donation: {
    name: () => translate("Blood Donation"),
    icon: icons.bloodBank,
    parents: ["health"],
    synonyms: ["healthcare=blood_donation"],
  },

  centre: {
    name: () => translate("Health Center"),
    icon: icons.hospital,
    parents: ["health"],
    synonyms: ["healthcare=centre"],
  },

  clinic: {
    name: () => translate("Clinic"),
    icon: icons.hospital,
    parents: ["health"],
    synonyms: ["healthcare=clinic"],
  },

  counselling: {
    name: () => translate("Counselling"),
    icon: icons.doctor,
    parents: ["health"],
    synonyms: ["healthcare=counselling"],
  },

  dialysis: {
    name: () => translate("Dialysis"),
    icon: icons.hospital,
    parents: ["health"],
    synonyms: ["healthcare=dialysis"],
  },

  hospice: {
    name: () => translate("Hospice"),
    icon: icons.hospital,
    parents: ["health"],
    synonyms: ["healthcare=hospice"],
  },

  laboratory: {
    name: () => translate("Laboratory"),
    icon: icons.commercial,
    parents: ["health"],
    synonyms: ["healthcare=laboratory"],
  },

  midwife: {
    name: () => translate("Midwife"),
    icon: icons.doctor,
    parents: ["health"],
    synonyms: ["healthcare=midwife"],
  },

  rehabilitation: {
    name: () => translate("Rehabilitation"),
    icon: icons.hospital,
    parents: ["health"],
    synonyms: ["healthcare=rehabilitation"],
  },

  yes: {
    name: () => translate("General Healthcare Facility"),
    icon: icons.hospital,
    parents: ["health"],
    synonyms: ["healthcare=yes", "healthcare:specialty=general"],
  },

  ergotherapist: {
    name: () => translate("Ergotherapist"),
    icon: icons.hospital,
    parents: ["health"],
    synonyms: ["healthcare=ergotherapist"],
  },

  nutrition_counselling: {
    name: () => translate("Nutrition Counselling"),
    icon: icons.hospital,
    parents: ["health"],
    synonyms: ["healthcare=nutrition_counselling"],
  },

  podiatrist: {
    name: () => translate("Podiatrist"),
    icon: icons.doctor,
    parents: ["health"],
    synonyms: ["healthcare=podiatrist"],
  },

  sample_collection: {
    name: () => translate("Sample Collection"),
    icon: icons.hospital,
    parents: ["health"],
    synonyms: ["healthcare=sample_collection"],
  },

  vaccination_centre: {
    name: () => translate("Vaccination Center"),
    icon: icons.doctor,
    parents: ["health"],
    synonyms: ["healthcare=vaccination_centre"],
  },

  therapist: {
    name: () => translate("Therapist"),
    icon: icons.doctor,
    parents: ["health"],
    synonyms: ["healthcare=therapist"],
  },

  allergology: {
    name: () => translate("Allergology"),
    icon: icons.doctor,
    parents: ["health"],
    synonyms: ["healthcare:specialty=allergology"],
  },

  anaesthetics: {
    name: () => translate("Anaesthetics"),
    icon: icons.doctor,
    parents: ["health"],
    synonyms: ["healthcare:specialty=anaesthetics"],
  },

  cardiology: {
    name: () => translate("Cardiology"),
    icon: icons.doctor,
    parents: ["health"],
    synonyms: ["healthcare:specialty=cardiology"],
  },

  cardiothoracic_surgery: {
    name: () => translate("Cardiothoracic Surgery"),
    icon: icons.doctor,
    parents: ["health"],
    synonyms: ["healthcare:specialty=cardiothoracic_surgery"],
  },

  child_psychiatry: {
    name: () => translate("Child Psychiatry"),
    icon: icons.doctor,
    parents: ["health"],
    synonyms: ["healthcare:specialty=child_psychiatry"],
  },

  community: {
    name: () => translate("Community Medicine"),
    icon: icons.hospital,
    parents: ["health"],
    synonyms: ["healthcare:specialty=community"],
  },

  dermatology: {
    name: () => translate("Dermatology"),
    icon: icons.doctor,
    parents: ["health"],
    synonyms: ["healthcare:specialty=dermatology"],
  },

  dermatovenereology: {
    name: () => translate("Dermatovenereology"),
    icon: icons.doctor,
    parents: ["health"],
    synonyms: ["healthcare:specialty=dermatovenereology"],
  },

  diagnostic_radiology: {
    name: () => translate("Diagnostic Radiology"),
    icon: icons.doctor,
    parents: ["health"],
    synonyms: ["healthcare:specialty=diagnostic_radiology"],
  },

  emergency: {
    name: () => translate("Emergency"),
    icon: icons.hospital,
    parents: ["health"],
    synonyms: ["healthcare:specialty=emergency"],
  },

  endocrinology: {
    name: () => translate("Endocrinology"),
    icon: icons.doctor,
    parents: ["health"],
    synonyms: ["healthcare:specialty=endocrinology"],
  },

  gastroenterology: {
    name: () => translate("Gastroenterology"),
    icon: icons.doctor,
    parents: ["health"],
    synonyms: ["healthcare:specialty=gastroenterology"],
  },

  geriatrics: {
    name: () => translate("Geriatrics"),
    icon: icons.doctor,
    parents: ["health"],
    synonyms: ["healthcare:specialty=geriatrics"],
  },

  gynaecology: {
    name: () => translate("Gynaecology"),
    icon: icons.doctor,
    parents: ["health"],
    synonyms: ["healthcare:specialty=gynaecology"],
  },

  haematology: {
    name: () => translate("Haematology"),
    icon: icons.doctor,
    parents: ["health"],
    synonyms: ["healthcare:specialty=haematology"],
  },

  hepatology: {
    name: () => translate("Hepatology"),
    icon: icons.doctor,
    parents: ["health"],
    synonyms: ["healthcare:specialty=hepatology"],
  },

  infectious_diseases: {
    name: () => translate("Infectious Diseases"),
    icon: icons.hospital,
    parents: ["health"],
    synonyms: ["healthcare:specialty=infectious_diseases"],
  },

  intensive: {
    name: () => translate("Intensive Care"),
    icon: icons.hospital,
    parents: ["health"],
    synonyms: ["healthcare:specialty=intensive"],
  },

  internal: {
    name: () => translate("Internal Medicine"),
    icon: icons.doctor,
    parents: ["health"],
    synonyms: ["healthcare:specialty=internal"],
  },

  dental_oral_maxillo_facial_surgery: {
    name: () => translate("Dental Oral Maxillo Facial Surgery"),
    icon: icons.dentist,
    parents: ["health"],
    synonyms: ["healthcare:specialty=dental_oral_maxillo_facial_surgery"],
  },

  neonatology: {
    name: () => translate("Neonatology"),
    icon: icons.doctor,
    parents: ["health"],
    synonyms: ["healthcare:specialty=neonatology"],
  },

  nephrology: {
    name: () => translate("Nephrology"),
    icon: icons.doctor,
    parents: ["health"],
    synonyms: ["healthcare:specialty=nephrology"],
  },

  neurology: {
    name: () => translate("Neurology"),
    icon: icons.doctor,
    parents: ["health"],
    synonyms: ["healthcare:specialty=neurology"],
  },

  neuropsychiatry: {
    name: () => translate("Neuropsychiatry"),
    icon: icons.doctor,
    parents: ["health"],
    synonyms: ["healthcare:specialty=neuropsychiatry"],
  },

  neurosurgery: {
    name: () => translate("Neurosurgery"),
    icon: icons.doctor,
    parents: ["health"],
    synonyms: ["healthcare:specialty=neurosurgery"],
  },

  nuclear: {
    name: () => translate("Nuclear Medicine"),
    icon: icons.doctor,
    parents: ["health"],
    synonyms: ["healthcare:specialty=nuclear"],
  },

  occupational: {
    name: () => translate("Occupational Medicine"),
    icon: icons.doctor,
    parents: ["health"],
    synonyms: ["healthcare:specialty=occupational"],
  },

  oncology: {
    name: () => translate("Oncology"),
    icon: icons.doctor,
    parents: ["health"],
    synonyms: ["healthcare:specialty=oncology"],
  },

  ophthalmology: {
    name: () => translate("Ophthalmology"),
    icon: icons.doctor,
    parents: ["health"],
    synonyms: ["healthcare:specialty=ophthalmology"],
  },

  orthodontics: {
    name: () => translate("Orthodontics"),
    icon: icons.doctor,
    parents: ["health"],
    synonyms: ["healthcare:specialty=orthodontics"],
  },

  orthopaedics: {
    name: () => translate("Orthopaedics"),
    icon: icons.doctor,
    parents: ["health"],
    synonyms: ["healthcare:specialty=orthopaedics"],
  },

  otolaryngology: {
    name: () => translate("Otolaryngology"),
    icon: icons.doctor,
    parents: ["health"],
    synonyms: ["healthcare:specialty=otolaryngology"],
  },

  paediatric_surgery: {
    name: () => translate("Paediatric surgery"),
    icon: icons.doctor,
    parents: ["health"],
    synonyms: ["healthcare:specialty=paediatric_surgery"],
  },

  paediatrics: {
    name: () => translate("Paediatrics"),
    icon: icons.doctor,
    parents: ["health"],
    synonyms: ["healthcare:specialty=paediatrics"],
  },

  palliative: {
    name: () => translate("Palliative health"),
    icon: icons.doctor,
    parents: ["health"],
    synonyms: ["healthcare:specialty=palliative"],
  },

  pathology: {
    name: () => translate("Pathology"),
    icon: icons.doctor,
    parents: ["health"],
    synonyms: ["healthcare:specialty=pathology"],
  },

  physiatry: {
    name: () => translate("Physiatry"),
    icon: icons.doctor,
    parents: ["health"],
    synonyms: ["healthcare:specialty=physiatry"],
  },

  plastic_surgery: {
    name: () => translate("Plastic Surgery"),
    icon: icons.doctor,
    parents: ["health"],
    synonyms: ["healthcare:specialty=plastic_surgery"],
  },

  podiatry: {
    name: () => translate("Podiatry"),
    icon: icons.doctor,
    parents: ["health"],
    synonyms: ["healthcare:specialty=podiatry"],
  },

  proctology: {
    name: () => translate("Proctology"),
    icon: icons.doctor,
    parents: ["health"],
    synonyms: ["healthcare:specialty=proctology"],
  },

  psychiatry: {
    name: () => translate("Psychiatry"),
    icon: icons.doctor,
    parents: ["health"],
    synonyms: ["healthcare:specialty=psychiatry"],
  },

  pulmonology: {
    name: () => translate("Pulmonology"),
    icon: icons.doctor,
    parents: ["health"],
    synonyms: ["healthcare:specialty=pulmonology"],
  },

  radiology: {
    name: () => translate("Radiology"),
    icon: icons.doctor,
    parents: ["health"],
    synonyms: ["healthcare:specialty=radiology"],
  },

  radiotherapy: {
    name: () => translate("Radiotherapy"),
    icon: icons.doctor,
    parents: ["health"],
    synonyms: ["healthcare:specialty=radiotherapy"],
  },

  rheumatology: {
    name: () => translate("Rheumatology"),
    icon: icons.doctor,
    parents: ["health"],
    synonyms: ["healthcare:specialty=rheumatology"],
  },

  stomatology: {
    name: () => translate("Stomatology"),
    icon: icons.doctor,
    parents: ["health"],
    synonyms: ["healthcare:specialty=stomatology"],
  },

  surgery: {
    name: () => translate("Surgery"),
    icon: icons.doctor,
    parents: ["health"],
    synonyms: ["healthcare:specialty=surgery"],
  },

  transplant: {
    name: () => translate("Transplants"),
    icon: icons.doctor,
    parents: ["health"],
    synonyms: ["healthcare:specialty=transplant"],
  },

  trauma: {
    name: () => translate("Trauma Medicine"),
    icon: icons.doctor,
    parents: ["health"],
    synonyms: ["healthcare:specialty=trauma"],
  },

  tropical: {
    name: () => translate("Tropical Medicine"),
    icon: icons.doctor,
    parents: ["health"],
    synonyms: ["healthcare:specialty=tropical"],
  },

  urology: {
    name: () => translate("Urology"),
    icon: icons.doctor,
    parents: ["health"],
    synonyms: ["healthcare:specialty=urology"],
  },

  vascular_surgery: {
    name: () => translate("Vascular Surgery"),
    icon: icons.doctor,
    parents: ["health"],
    synonyms: ["healthcare:specialty=vascular_surgery"],
  },

  venereology: {
    name: () => translate("Venereology"),
    icon: icons.doctor,
    parents: ["health"],
    synonyms: ["healthcare:specialty=venereology"],
  },

  abortion: {
    name: () => translate("Abortion"),
    icon: icons.doctor,
    parents: ["health"],
    synonyms: ["healthcare:specialty=abortion"],
  },

  fertility: {
    name: () => translate("Fertility"),
    icon: icons.doctor,
    parents: ["health"],
    synonyms: ["healthcare:specialty=fertility"],
  },

  vaccination: {
    name: () => translate("Vaccination"),
    icon: icons.doctor,
    parents: ["health"],
    synonyms: ["healthcare:specialty=vaccination"],
  },

  physiotherapist: {
    name: () => translate("Physiotherapist"),
    icon: icons.doctor,
    parents: ["health"],
    synonyms: [
      "healthcare=physiotherapist",
      "Physical Therapist",
      "physiotherapist",
      "physiotherapy_center",
    ],
  },

  hospital: {
    name: () => translate("Hospital"),
    icon: icons.hospital,
    parents: ["health"],
    synonyms: [
      "amenity=hospital",
      "healthcare=hospital",
      "700-7300-0280",
      "800-8000-0000",
      "800-8000-0157",
      "800-8000-0158",
      "800-8000-0159",
      "800-8000-0325",
      "800-8000-0367",
      "Accident & Emergency",
      "Ambulance Services",
      "Blood Bank",
      "Care Home",
      "Emergency Room",
      "Hospital or Health Care Facility",
      "Hospital",
      "Maternity Clinic",
      "Medical Center",
      "Medical Lab",
      "Medical Services or Clinic",
      "Rehab Center",
      "Spital oder Heim",
      "Urgent Care Center",
      "Ward",
      "hospital",
      "medical_lab",
    ],
  },

  dentist: {
    name: () => translate("Dentist"),
    icon: icons.dentist,
    parents: ["health"],
    synonyms: [
      "amenity=dentist",
      "healthcare=dentist",
      "800-8000-0154",
      "Arzt- oder Zahnarztpraxis",
      "Dental Practice",
      "Dentist's Office",
      "dentist",
    ],
  },

  speech_therapist: {
    name: () => translate("Speech Therapist"),
    icon: icons.doctor,
    parents: ["health"],
    synonyms: ["healthcare=speech_therapist"],
  },

  pharmacy: {
    name: () => translate("Pharmacy"),
    icon: icons.pharmacy,
    parents: ["health"],
    synonyms: [
      "amenity=pharmacy",
      "600-6400-0000",
      "600-6400-0070",
      "Apotheke oder Drogerie",
      "Pharmacy",
      "Pharmacy/Drugs",
      "healthcare=pharmacy",
      "pharmacy",
    ],
  },

  psychotherapist: {
    name: () => translate("Psychotherapist"),
    icon: icons.doctor,
    parents: ["health"],
    synonyms: [
      "healthcare=psychotherapist",
      "healthcare=psychotherapy",
      "800-8000-0156",
      "800-8000-0340",
      "Mental Health Office",
      "Psychiatric Institute",
      "Psychotherapy & Counseling",
    ],
  },

  hearing_aids: {
    name: () => translate("Hearing Aids"),
    icon: icons.doctor,
    parents: ["health"],
    synonyms: ["shop=hearing_aids", "healthcare=hearing_aids"],
  },

  alternative_medicine: {
    name: () => translate("Alternative Medicine"),
    icon: icons.doctor,
    parents: ["health"],
    synonyms: [
      "healthcare=alternative",
      "healthcare=alternative_medicine",
      "800-8000-0341",
      "Acupuncturist",
      "Alternative Healer",
      "Chiropractic",
      "Nutritionist",
      "alternative",
    ],
  },

  medical_store: {
    name: () => translate("Medical Store"),
    icon: icons.pharmacy,
    parents: ["health"],
    synonyms: [
      "shop=medical_supply",
      "healthcare=medical_store",
      "Medical Supply Store",
      "Mobility Store",
      "medical_supply",
      "orthesist",
      "wheelchair_store",
    ],
  },

  social_facility: {
    name: () => translate("Social Facility"),
    icon: icons.hospital,
    parents: ["health"],
    synonyms: [
      "amenity=social_facility",
      "amenity=social_centre",
      "healthcare=social_facility",
      "healthcare=social_centre",
      "700-7400-0147",
      "Assisted Living",
      "Home Service",
      "Social Services",
      "function_room_facility",
      "social_services_organization",
      "Soziokulturelles Zentrum",
    ],
  },

  occupational_therapist: {
    name: () => translate("Occupational Therapist"),
    icon: icons.doctor,
    parents: ["health"],
    synonyms: ["healthcare=occupational_therapist"],
  },

  ophthalmologist: {
    name: () => translate("Ophthalmologist"),
    icon: icons.grocery,
    parents: ["health"],
    synonyms: [
      "shop=optician",
      "healthcare=optometrist",
      "800-8000-0161",
      "Optical Shop",
      "Opticians",
      "optician",
    ],
  },

  doctor: {
    name: () => translate("Doctor's Office"),
    icon: icons.doctor,
    parents: ["health"],
    synonyms: [
      "amenity=doctors",
      "healthcare=doctors",
      "healthcare=doctor",
      "800-8000-0155",
      "800-8000-0162",
      "Doctor's Office",
      "Eye Doctor",
      "General Practicioners",
      "doctor",
      "doctors",
    ],
  },
} as const;

export function getHealth() {
  return health;
}
