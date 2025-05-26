import * as icons from "~/lib/categories/icons";
import { translate } from "~/lib/i18n/utils/translator";

const health = {
  health: {
    name: () => translate("Health"),
    icon: icons.hospital,
    synonyms: [
      "Medical School",
      "health",
      "Healthcare & Support Services",
      "700-7200-0272",
      "Santé",
    ],
  },

  nursing_home: {
    name: () => translate("Nursing Home"),
    icon: icons.hospital,
    parents: ["health"],
    synonyms: [
      "nursing_agency",
      "nursing",
      "amenity=nursing_home",
      "healthcare=nursing_home",
      "healthcare=nursing",
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
      "physiotherapist",
      "physiotherapist",
      "physiotherapy_center",
      "Physical Therapist",
      "Arzt- oder Zahnarztpraxis",
    ],
  },

  hospital: {
    name: () => translate("Hospital"),
    icon: icons.hospital,
    parents: ["health"],
    synonyms: [
      "amenity=hospital",
      "healthcare=hospital",
      "hospital",
      "hospital",
      "medical_lab",
      "Medical Center",
      "Emergency Room",
      "Hospital",
      "Ward",
      "Maternity Clinic",
      "Medical Lab",
      "Rehab Center",
      "Urgent Care Center",
      "Ambulance Services",
      "Hospital or Health Care Facility",
      "Care Home",
      "Medical Services or Clinic",
      "Accident & Emergency",
      "Blood Bank",
      "700-7300-0280",
      "800-8000-0000",
      "800-8000-0157",
      "800-8000-0158",
      "800-8000-0325",
      "800-8000-0367",
      "800-8000-0159",
      "Spital oder Heim",
    ],
  },

  dentist: {
    name: () => translate("Dentist"),
    icon: icons.dentist,
    parents: ["health"],
    synonyms: [
      "amenity=dentist",
      "healthcare=dentist",
      "dentist",
      "dentist",
      "Dentist's Office",
      "Dental Practice",
      "800-8000-0154",
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
      "pharmacy",
      "pharmacy",
      "Pharmacy",
      "Pharmacy/Drugs",
      "Pharmacy",
      "600-6400-0000",
      "600-6400-0070",
      "Apotheke oder Drogerie",
      "healthcare=pharmacy",
    ],
  },

  psychotherapist: {
    name: () => translate("Psychotherapist"),
    icon: icons.doctor,
    parents: ["health"],
    synonyms: [
      "Mental Health Office",
      "Psychiatric Institute",
      "Psychotherapy & Counseling",
      "800-8000-0156",
      "800-8000-0340",
      "healthcare=psychotherapist",
      "healthcare=psychotherapy",
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
      "Acupuncturist",
      "Alternative Healer",
      "Chiropractor",
      "Nutritionist",
      "alternative",
      "Chiropractic",
      "800-8000-0341",
    ],
  },

  medical_store: {
    name: () => translate("Medical Store"),
    icon: icons.pharmacy,
    parents: ["health"],
    synonyms: [
      "shop=medical_supply",
      "wheelchair_store",
      "orthesist",
      "Medical Supply Store",
      "Mobility Store",
      "medical_supply",
      "healthcare=medical_store",
    ],
  },

  social_facility: {
    name: () => translate("Social Facility"),
    icon: icons.hospital,
    parents: ["health"],
    synonyms: [
      "amenity=social_facility",
      "amenity=social_centre",
      "social_services_organization",
      "function_room_facility",
      "Assisted Living",
      "Home Service",
      "Social Services",
      "700-7400-0147",
      "Soziokulturelles Zentrum",
      "healthcare=social_facility",
      "healthcare=social_centre",
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
      "optician",
      "Optical Shop",
      "Opticians",
      "800-8000-0161",
      "healthcare=optometrist",
    ],
  },

  doctor: {
    name: () => translate("Doctor's Office"),
    icon: icons.doctor,
    parents: ["health"],
    synonyms: [
      "amenity=doctors",
      "doctor",
      "doctor",
      "Doctor's Office",
      "Eye Doctor",
      "doctors",
      "General Practicioners",
      "800-8000-0155",
      "800-8000-0162",
      "healthcare=doctors",
      "healthcare=doctor",
    ],
  },
} as const;

export function getHealth() {
  return health;
}
