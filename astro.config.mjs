// @ts-check
import { defineConfig } from 'astro/config';

// Two homes for this site:
//  - Netlify (NETLIFY is set while building there): served from the root of its own address.
//  - GitHub Pages (everywhere else): served from https://thomastinu33-bit.github.io/tinu-portfolio/
// If you add a custom domain later, set `site` to it and use base '/'.
const onNetlify = Boolean(process.env.NETLIFY);

// https://astro.build/config
export default defineConfig({
	site: onNetlify ? (process.env.URL ?? 'https://example.netlify.app') : 'https://thomastinu33-bit.github.io',
	base: onNetlify ? '/' : '/tinu-portfolio',
});
