// The site's base path without a trailing slash: '' at the root (Netlify) or '/tinu-portfolio' (GitHub Pages).
// Build links as `${base}/path` so they work in both places.
export const base = import.meta.env.BASE_URL.replace(/\/$/, '');
