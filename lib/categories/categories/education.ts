import * as icons from "~/lib/categories/icons";
import { translate } from "~/lib/i18n/utils/translator";

const education = {
  education: {
    name: () => translate("Education"),
    icon: icons.college,
    synonyms: [
      "training_center",
      "800-8200-0000",
      "Education Facility",
      "Grund- oder Mittel- oder Berufs- oder Fach- oder Hochschule",
      "education",
    ],
  },

  music_school: {
    name: () => translate("Music School"),
    icon: icons.music,
    parents: ["education"],
    selectors: ["amenity=music_school"],
    synonyms: ["Music School"],
  },

  driving_school: {
    name: () => translate("Driving School"),
    icon: icons.car,
    parents: ["education"],
    selectors: ["amenity=driving_school"],
    synonyms: ["driving_school", "Driving School"],
  },

  school: {
    name: () => translate("School"),
    icon: icons.school,
    parents: ["education"],
    selectors: ["amenity=school"],
    synonyms: [
      "800-8200-0174",
      "800-8200-0295",
      "800-8200-0360",
      "800-8200-0361",
      "800-8200-0362",
      "Coaching Centre",
      "Elementary School",
      "Fine Arts Training",
      "Language Education",
      "Preschool",
      "School",
      "Schulen",
      "Trade School",
      "Training & Development",
      "elementary_school",
      "school",
    ],
  },

  kindergarten: {
    name: () => translate("Daycare"),
    icon: icons.school,
    parents: ["education"],
    selectors: ["amenity=childcare", "amenity=kindergarten"],
    synonyms: [
      "700-7400-0286",
      "Child Care Service",
      "Daycare",
      "Kinderbetreuung",
      "Kindergärten",
      "Nursery & Childcare",
      "child_care_agency",
    ],
  },

  // TODO: does it make sense to separate college and university?
  university: {
    name: () => translate("University"),
    icon: icons.college,
    parents: ["education"],
    selectors: ["amenity=university"],
    synonyms: [
      "800-8200-0173",
      "General College & University",
      "Higher Education",
      "University",
    ],
  },

  college: {
    name: () => translate("College/University"),
    icon: icons.college,
    parents: ["education"],
    selectors: ["amenity=college"],
    synonyms: [
      "Adult Education Center",
      "Auditorium",
      "College & University",
      "College Academic Building",
      "College Arts Building",
      "College Auditorium",
      "College Classroom",
      "College Communications Building",
      "College Engineering Building",
      "College History Building",
      "College Lab",
      "College Math Building",
      "College Quad",
      "College Science Building",
      "College Technology Building",
      "Cooking School",
      "Flight School",
      "High School",
      "Language School",
      "Middle School",
      "Nursery School",
      "Private School",
      "Student Center",
      "college",
      "high_school",
      "middle_school",
    ],
  },
} as const;

export function getEducation() {
  return education;
}
