/**
 * Centralized image URL constants.
 * Single source of truth — change an image URL once, updates everywhere.
 * All URLs are browser-verified and stable (no expiring links).
 */

// ─── UNSPLASH ────────────────────────────────────────────────────────────────
export const IMG = {
  // Hero background — Indian city skyline
  heroBackground:
    "https://images.unsplash.com/photo-1636810163038-5d8d8996c561",

  // Indian apartment high-rise
  apartment:
    "https://images.unsplash.com/photo-1663985139222-6af2f8646104",

  // Indian traditional-modern villa
  villa:
    "https://images.unsplash.com/photo-1744311971549-9c529b60b98a",

  // Indian residential society
  residential:
    "https://images.unsplash.com/photo-1674821770946-4f774b1907d7",

  // Indian active construction site
  constructionSite:
    "https://images.unsplash.com/photo-1719993919800-630021837af9",

  // Construction workers with steel rebars
  steelRebars:
    "https://images.unsplash.com/photo-1504307651254-35680f356dfd",

  // Architect drawing blueprint
  architectBlueprint:
    "https://images.unsplash.com/photo-1503387762-592deb58ef4e",

  // Premium Hotel Room
  hotelRoom:
    "https://images.unsplash.com/photo-1631049307264-da0ec9d70304",

  // High-rise with blue sky
  highRiseBlue:
    "https://images.unsplash.com/photo-1663985139222-6af2f8646104",

  // About section — construction team at work (Pexels)
  aboutTeam:
    "https://images.pexels.com/photos/1216589/pexels-photo-1216589.jpeg",
} as const;

// ─── TAJ HOTEL (SANITY CDN & TRIPADVISOR) ────────────────────────────────────
export const TAJ = {
  interiors:
    "https://cdn.sanity.io/images/ocl5w36p/prod5/6ca9892a37d63ea368fbfa6506286e37164edcf7-3840x1860.jpg",
  gardens:
    "https://cdn.sanity.io/images/ocl5w36p/prod5/05eb36b15cd8e08a210cf312bc56f971c4ed50e9-3840x1860.jpg",
  bayView:
    "https://cdn.sanity.io/images/ocl5w36p/prod5/bd96bd900ce414ebefe839adfe1400109a408d2e-3840x1860.jpg",
  exteriorAerial:
    "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/2e/96/46/fe/taj-puri-resort-spa-offers.jpg",
} as const;

// ─── SPDCL (Odisha projects) ─────────────────────────────────────────────────
export const SPDCL = {
  mjIcon:
    "http://spdcl.in/wp-content/uploads/2023/02/MJ-ICON-at-Tomando-Bhubaneswar.jpg",
  jmgLifestyle:
    "http://spdcl.in/wp-content/uploads/2022/11/jmg-lifestetyle.jpg",
  evosSeaRose:
    "http://spdcl.in/wp-content/uploads/2023/02/EVOS-Sea-Rose-at-Puri.jpg",
  snmItBuilding:
    "http://spdcl.in/wp-content/uploads/2023/02/SNM-IT-Building-at-Infocity-Bhubaneswar.jpg",
  techCenter:
    "http://spdcl.in/wp-content/uploads/2023/06/Site-Technology-Center-Area-58665Sqft.-Site-Location-Power-House-Square-Near-TPCODL-Store-Bhubaneswar.jpg",
  aryavarta:
    "http://spdcl.in/wp-content/uploads/2023/06/Site-Aryavarta-Area-287396Sqft.-Site-Location-Telengapentha-Cuttack-Odisha.jpg",
} as const;

/**
 * Helper to append Unsplash/Sanity image params.
 * Generates optimized URLs with width, format, and quality params.
 */
export function unsplashUrl(
  base: string,
  opts: { w?: number; q?: number } = {}
): string {
  const { w = 800, q = 80 } = opts;
  return `${base}?auto=format&fit=crop&w=${w}&q=${q}`;
}

export function sanityUrl(
  base: string,
  opts: { w?: number; q?: number } = {}
): string {
  const { w = 800, q = 80 } = opts;
  return `${base}?w=${w}&auto=format&q=${q}`;
}

export function tripAdvisorUrl(
  base: string,
  opts: { w?: number } = {}
): string {
  const { w = 800 } = opts;
  return `${base}?w=${w}&h=-1&s=1`;
}
