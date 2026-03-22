export type ProjectType = 'highrise' | 'villa' | 'commercial' | 'interior' | 'construction';

export interface Project {
  id: string;
  src: string;
  title: string;
  location: string;
  year: string;
  type: ProjectType;
  area?: string;
}

// ALL IMAGES: stable URLs only (no expiring lh3 Google Photos links)
// spdcl.in — Bhubaneswar/Odisha projects (user-provided link)
// Unsplash IDs — all browser-verified
// Sanity CDN — Taj Hotel official interiors
// TripAdvisor CDN — Taj aerial exterior (verified)

export const PROJECTS: Project[] = [
  // ─── HIGH-RISE ────────────────────────────────────────────────────────────
  {
    id: "hr1",
    src: "http://spdcl.in/wp-content/uploads/2023/02/MJ-ICON-at-Tomando-Bhubaneswar.jpg",
    title: "MJ Icon",
    location: "Tomando, Bhubaneswar",
    year: "2023",
    type: "highrise",
  },
  {
    id: "hr2",
    src: "http://spdcl.in/wp-content/uploads/2022/11/jmg-lifestetyle.jpg",
    title: "JMG Skypark",
    location: "Cuttack, Odisha",
    year: "2022",
    type: "highrise",
  },
  {
    id: "hr3",
    src: "https://images.unsplash.com/photo-1663985139222-6af2f8646104?auto=format&fit=crop&w=600&q=80",
    title: "Shanti Heights",
    location: "Chandrasekharpur, Bhubaneswar",
    year: "2023",
    type: "highrise",
  },

  // ─── VILLAS ───────────────────────────────────────────────────────────────
  {
    id: "vi1",
    src: "http://spdcl.in/wp-content/uploads/2023/02/EVOS-Sea-Rose-at-Puri.jpg",
    title: "EVOS Sea Rose",
    location: "Puri, Odisha",
    year: "2023",
    type: "villa",
  },
  {
    id: "vi2",
    src: "https://images.unsplash.com/photo-1744311971549-9c529b60b98a?auto=format&fit=crop&w=600&q=80",
    title: "Lakeview Villa",
    location: "Nayapalli, Bhubaneswar",
    year: "2023",
    type: "villa",
  },

  // ─── COMMERCIAL ───────────────────────────────────────────────────────────
  {
    id: "co1",
    src: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/2e/96/46/fe/taj-puri-resort-spa-offers.jpg?w=800&h=-1&s=1",
    title: "The Taj Hotel, Puri",
    location: "Swargadwar, Puri",
    year: "2024",
    type: "commercial",
    area: "4.2 Lakh Sq.Ft",
  },
  {
    id: "co2",
    src: "http://spdcl.in/wp-content/uploads/2023/02/SNM-IT-Building-at-Infocity-Bhubaneswar.jpg",
    title: "SNM IT Building",
    location: "Infocity, Bhubaneswar",
    year: "2023",
    type: "commercial",
  },
  {
    id: "co3",
    src: "http://spdcl.in/wp-content/uploads/2023/06/Site-Technology-Center-Area-58665Sqft.-Site-Location-Power-House-Square-Near-TPCODL-Store-Bhubaneswar.jpg",
    title: "Technology Center",
    location: "Power House Square, Bhubaneswar",
    year: "2023",
    type: "commercial",
  },

  // ─── INTERIORS ────────────────────────────────────────────────────────────
  {
    id: "in1",
    src: "https://cdn.sanity.io/images/ocl5w36p/prod5/6ca9892a37d63ea368fbfa6506286e37164edcf7-3840x1860.jpg?w=600&auto=format&q=80",
    title: "Taj Puri — Premium Suite",
    location: "Puri, Odisha",
    year: "2024",
    type: "interior",
  },
  {
    id: "in2",
    src: "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?auto=format&fit=crop&w=600&q=80",
    title: "Premium Suite — City View",
    location: "Bhubaneswar",
    year: "2023",
    type: "interior",
  },

  // ─── UNDER CONSTRUCTION ───────────────────────────────────────────────────
  {
    id: "uc1",
    src: "https://images.unsplash.com/photo-1719993919800-630021837af9?auto=format&fit=crop&w=600&q=80",
    title: "Phase III — Active Site",
    location: "Patia, Bhubaneswar",
    year: "2024",
    type: "construction",
  },
  {
    id: "uc2",
    src: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=600&q=80",
    title: "New Site — Nayapalli",
    location: "Nayapalli, Bhubaneswar",
    year: "2024",
    type: "construction",
  },
  {
    id: "uc3",
    src: "http://spdcl.in/wp-content/uploads/2023/06/Site-Aryavarta-Area-287396Sqft.-Site-Location-Telengapentha-Cuttack-Odisha.jpg",
    title: "Aryavarta",
    location: "Cuttack, Odisha",
    year: "2024",
    type: "construction",
  },
];
