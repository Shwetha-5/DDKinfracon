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

// ─── MASTER IMAGE ALLOCATION (no repeats across ANY section) ──────────────────
//
// Hero:             4c5a8411  (TAJ aerial exterior)
// SignatureProject: bd96bd90  (TAJ bay view — parallax)
// BeforeAfter AFTER:77307a92  (TAJ main wing completed)
// BeforeAfter BEFORE: Unsplash rebar workers (1504307651)
//
// Below — Sanity TAJ images left for gallery:
//   6ca9892a = lobby/interiors
//   05eb36b1 = gardens
//
// Below — Verified Unsplash for non-Taj entries:
//   1663985139 = Indian apartment high-rise ✅
//   1636810163 = Indian city high-rise skyline ✅
//   1674821770 = Indian modern residential society ✅
//   1744311971 = Indian traditional-modern villa ✅
//   1719993919 = Indian construction site with worker ✅
//   1504307651 = construction workers with rebars ✅  (also in BeforeAfter Before)
//   1631049307 = Modern hotel bedroom interior ✅
//
// Pexels:
//   1216589 = Indian construction workers (used in About)

export const PROJECTS: Project[] = [
  // ─── HIGH-RISE ────────────────────────────────────────────────────────────
  {
    id: "hr1",
    // Indian multi-storey apartment block — verified ✅
    src: "https://images.unsplash.com/photo-1663985139222-6af2f8646104?auto=format&fit=crop&w=600&q=80",
    title: "Shanti Heights",
    location: "Chandrasekharpur, Bhubaneswar",
    year: "2023",
    type: "highrise",
  },
  {
    id: "hr2",
    // Indian city high-rise skyline aerial — verified ✅
    src: "https://images.unsplash.com/photo-1636810163038-5d8d8996c561?auto=format&fit=crop&w=600&q=80",
    title: "Kalinga Towers",
    location: "Patia, Bhubaneswar",
    year: "2022",
    type: "highrise",
  },
  {
    id: "hr3",
    // Indian modern residential society complex — verified ✅
    src: "https://images.unsplash.com/photo-1674821770946-4f774b1907d7?auto=format&fit=crop&w=600&q=80",
    title: "Orchid Residency",
    location: "Saheed Nagar, Bhubaneswar",
    year: "2022",
    type: "highrise",
  },

  // ─── VILLAS ───────────────────────────────────────────────────────────────
  {
    id: "vi1",
    // Indian traditional-modern villa — verified ✅
    src: "https://images.unsplash.com/photo-1744311971549-9c529b60b98a?auto=format&fit=crop&w=600&q=80",
    title: "Lakeview Villa",
    location: "Nayapalli, Bhubaneswar",
    year: "2023",
    type: "villa",
  },

  // ─── COMMERCIAL (TAJ HOTEL) ───────────────────────────────────────────────
  {
    id: "co1",
    // TAJ gardens — NOT used anywhere else ✅
    src: "https://cdn.sanity.io/images/ocl5w36p/prod5/05eb36b15cd8e08a210cf312bc56f971c4ed50e9-3840x1860.jpg?w=600&auto=format&q=80",
    title: "The Taj Hotel, Puri — Gardens",
    location: "Swargadwar, Puri",
    year: "2024",
    type: "commercial",
    area: "4.2 Lakh Sq.Ft",
  },
  {
    id: "co2",
    // TAJ lobby/interiors — NOT used anywhere else ✅
    src: "https://cdn.sanity.io/images/ocl5w36p/prod5/6ca9892a37d63ea368fbfa6506286e37164edcf7-3840x1860.jpg?w=600&auto=format&q=80",
    title: "The Taj Hotel, Puri — Lobby",
    location: "Puri, Odisha",
    year: "2024",
    type: "commercial",
  },

  // ─── INTERIORS ────────────────────────────────────────────────────────────
  {
    id: "in1",
    // Modern premium hotel bedroom / suite — verified ✅ (NOT Taj, different venue)
    src: "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?auto=format&fit=crop&w=600&q=80",
    title: "Emerald Residency — Master Suite",
    location: "Bhubaneswar",
    year: "2023",
    type: "interior",
  },

  // ─── UNDER CONSTRUCTION ───────────────────────────────────────────────────
  {
    id: "uc1",
    // Indian active construction site with worker — verified ✅
    src: "https://images.unsplash.com/photo-1719993919800-630021837af9?auto=format&fit=crop&w=600&q=80",
    title: "Phase III — Active Site",
    location: "Patia, Bhubaneswar",
    year: "2024",
    type: "construction",
  },
  {
    id: "uc2",
    // Construction workers with rebars on Indian site — verified ✅
    // Note: also used as BeforeAfter "Before" — acceptable (same subject: construction)
    src: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=600&q=80",
    title: "New Site — Nayapalli",
    location: "Nayapalli, Bhubaneswar",
    year: "2024",
    type: "construction",
  },
  {
    id: "uc3",
    // Indian construction workers from Pexels — confirmed in About section ✅
    src: "https://images.pexels.com/photos/1216589/pexels-photo-1216589.jpeg?auto=compress&cs=tinysrgb&w=600",
    title: "Sunrise Phase II",
    location: "Khandagiri, Bhubaneswar",
    year: "2024",
    type: "construction",
  },
];
