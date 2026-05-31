export interface Certification {
  id: string;
  name: string;
  issuer: string;
  date: string;
  link: string;
}

export const certificationsData: Certification[] = [
  {
    id: "oci-ai",
    name: "OCI 2025 Certified AI Foundations Associate",
    issuer: "Oracle",
    date: "Sep 2025",
    link: "https://catalog-education.oracle.com/pls/certview/sharebadge?id=BA883810CE56E6C7D484309B43369AE695832553776944A1E50EE4EDCB906D8C"
  },
  {
    id: "azure-ai",
    name: "Azure AI Fundamentals",
    issuer: "Microsoft",
    date: "March 2025",
    link: "https://www.credly.com/badges/937f8eb2-249d-48c6-8614-6f32bc459df0/public_url"
  },
  {
    id: "aws",
    name: "AWS Academy Graduate- Cloud Developing (Course)",
    issuer: "Amazon Web Services",
    date: "Feb 2025",
    link: "https://www.credly.com/badges/cde5d9f7-df09-4cac-af5b-654fb67b1896/public_url"
    
  }
];