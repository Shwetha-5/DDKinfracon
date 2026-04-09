import { IMG, TAJ, SPDCL, unsplashUrl, sanityUrl, tripAdvisorUrl } from "./images";

export type ProjectType = "highrise" | "villa" | "commercial" | "interior" | "construction";

export interface Project {
  id: string;
  src: string;
  title: string;
  location: string;
  year: string;
  type: ProjectType;
  area?: string;
}

export const PROJECTS: Project[] = [
  // ─── HIGH-RISE ────────────────────────────────────────────────────────────
  {
    id: "hr1",
    src: SPDCL.mjIcon,
    title: "MJ Icon",
    location: "Tomando, Bhubaneswar",
    year: "2023",
    type: "highrise",
  },
  {
    id: "hr2",
    src: SPDCL.jmgLifestyle,
    title: "JMG Skypark",
    location: "Cuttack, Odisha",
    year: "2022",
    type: "highrise",
  },
  {
    id: "hr3",
    src: unsplashUrl(IMG.apartment, { w: 600 }),
    title: "Shanti Heights",
    location: "Chandrasekharpur, Bhubaneswar",
    year: "2023",
    type: "highrise",
  },

  // ─── VILLAS ───────────────────────────────────────────────────────────────
  {
    id: "vi1",
    src: SPDCL.evosSeaRose,
    title: "EVOS Sea Rose",
    location: "Puri, Odisha",
    year: "2023",
    type: "villa",
  },
  {
    id: "vi2",
    src: unsplashUrl(IMG.villa, { w: 600 }),
    title: "Lakeview Villa",
    location: "Nayapalli, Bhubaneswar",
    year: "2023",
    type: "villa",
  },

  // ─── COMMERCIAL ───────────────────────────────────────────────────────────
  {
    id: "co1",
    src: tripAdvisorUrl(TAJ.exteriorAerial),
    title: "Taj Hotel, Puri",
    location: "Swargadwar, Puri",
    year: "2024",
    type: "commercial",
    area: "4.2 Lakh Sq.Ft",
  },
  {
    id: "co2",
    src: SPDCL.snmItBuilding,
    title: "SNM IT Building",
    location: "Infocity, Bhubaneswar",
    year: "2023",
    type: "commercial",
  },
  {
    id: "co3",
    src: SPDCL.techCenter,
    title: "Technology Center",
    location: "Power House Square, Bhubaneswar",
    year: "2023",
    type: "commercial",
  },

  // ─── INTERIORS ────────────────────────────────────────────────────────────
  {
    id: "in1",
    src: sanityUrl(TAJ.interiors, { w: 600 }),
    title: "Taj Puri — Premium Suite",
    location: "Puri, Odisha",
    year: "2024",
    type: "interior",
  },
  {
    id: "in2",
    src: unsplashUrl(IMG.hotelRoom, { w: 600 }),
    title: "Premium Suite — City View",
    location: "Bhubaneswar",
    year: "2023",
    type: "interior",
  },

  // ─── UNDER CONSTRUCTION ───────────────────────────────────────────────────
  {
    id: "uc1",
    src: unsplashUrl(IMG.constructionSite, { w: 600 }),
    title: "Phase III — Active Site",
    location: "Patia, Bhubaneswar",
    year: "2024",
    type: "construction",
  },
  {
    id: "uc2",
    src: unsplashUrl(IMG.steelRebars, { w: 600 }),
    title: "New Site — Nayapalli",
    location: "Nayapalli, Bhubaneswar",
    year: "2024",
    type: "construction",
  },
  {
    id: "uc3",
    src: SPDCL.aryavarta,
    title: "Aryavarta",
    location: "Cuttack, Odisha",
    year: "2024",
    type: "construction",
  },
];
