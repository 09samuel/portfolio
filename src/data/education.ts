export interface Education {
  id: string;
  degree: string;
  institution: string;
  location: string;
  startDate: string;
  endDate: string;
  cgpa: string;
}

export const educationData: Education[] = [
  {
    id: "mca-kristu",
    degree: "Master of Computer Applications",
    institution: "Kristu Jayanti (Deemed to be) University",
    location: "Bengaluru, India",
    startDate: "Aug. 2024",
    endDate: "June 2026",
    cgpa: "8.5"
  },
  {
    id: "bca-agnel",
    degree: "Bachelors of Computer Applications",
    institution: "Fr. Agnel College of Arts & Commerce",
    location: "Goa, India",
    startDate: "June 2021",
    endDate: "May 2024",
    cgpa: "9.9"
  }
];