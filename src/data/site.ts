// Edit this file to update the text on your portfolio.

export const site = {
	name: 'Tinu Thomas',
	role: 'Product Designer',
	// Used for the page's search/share description.
	tagline: 'Product designer turning complex problems into simple, user-centered designs.',
	// The lines that rotate under "Hi, I'm …" on the home page.
	intro: [
		"I'm a product designer",
		'I currently design at Evertune AI',
		"I've been designing for B2B SaaS platforms since 2021",
		'I turn complex problems into simple, user-centered designs',
	],
	about:
		'Write a short paragraph about yourself here: your background, what kind of work you love, and what you are looking for next.',
	email: 'thomastinu33@gmail.com',
	linkedin: 'https://www.linkedin.com/in/tinuthomas33/',
	location: 'New York City',
	// Put your resume PDF in the `public/` folder with this file name.
	resume: 'resume.pdf',
};

// The "what I do" strip right below the intro: a short title plus a light one-line phrase.
// `icon` must match one of the icons imported in src/pages/index.astro.
export const strengths = [
	{ icon: 'research', title: 'User research', note: 'from early discovery to shipped features' },
	{ icon: 'prototype', title: 'Prototypes', note: 'shaped in Figma, brought to life with Claude & Codex' },
	{ icon: 'component', title: 'Design systems', note: 'built and maintained in canvas and code' },
] as const;

export type Project = {
	title: string;
	summary: string;
	tags: string[];
	href?: string;
};

// Add, remove, or reorder projects here.
export const projects: Project[] = [
	{
		title: 'Improving how Evertune customers create prompts to analyze their AI visibility',
		summary: 'Redesigning the prompt creation experience so customers can set up the right prompts to understand how their brand shows up in AI answers.',
		tags: ['Evertune AI', 'B2B SaaS', 'Product Design'],
	},
	{
		title: 'Project Two',
		summary: 'One or two sentences on the problem, your role, and the outcome.',
		tags: ['UI Design', 'Design Systems'],
	},
	{
		title: 'Project Three',
		summary: 'One or two sentences on the problem, your role, and the outcome.',
		tags: ['Usability Testing'],
	},
];
