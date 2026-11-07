import type { ImageMetadata } from 'astro';

// Pictures for the case studies in src/data/studies.ts. Name one as '<study>/<number>', e.g. 'lemoney/03'.
const files = import.meta.glob<{ default: ImageMetadata }>('../assets/studies/**/*.{webp,svg,png,jpg}', {
	eager: true,
});

export function studyImage(key: string): ImageMetadata {
	const hit = Object.entries(files).find(([path]) => path.replace(/\.\w+$/, '').endsWith(`/studies/${key}`));
	if (!hit) throw new Error(`No case study image for "${key}"`);
	return hit[1].default;
}
