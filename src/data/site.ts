// Edit this file to update the text on your portfolio.

import type { ImageMetadata } from 'astro';
import chooseType from '../assets/evertune/01-choose-type.png';
import generating from '../assets/evertune/02-generating.png';
import review from '../assets/evertune/03-refine.png';
import settings from '../assets/evertune/04-run.png';

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

// One step of an interactive flow hero: a screen, a short label, and a one-line caption.
export type FlowStep = { label: string; caption: string; image: ImageMetadata };

export type Project = {
	title: string;
	summary: string;
	tags: string[];
	href?: string;
	// Links the card to /case-studies/<slug>/.
	slug?: string;
	// Optional: shows a clickable step-through of the design as the project's hero.
	flow?: FlowStep[];
};

// Add, remove, or reorder projects here.
export const projects: Project[] = [
	{
		title: 'Improving how Evertune customers create prompts to analyze their AI visibility',
		summary:
			'New users struggled to choose between five tracker types before writing a single prompt. I redesigned prompt creation around a simple chat with Evertune\u2019s agent, so new customers can get started without white-glove onboarding.',
		slug: 'evertune',
		tags: ['Evertune AI', 'B2B SaaS', 'Product Design'],
		flow: [
			{
				label: 'Start',
				caption: 'Begin with a simple chat: describe what to track and Evertune\u2019s agent takes it from there.',
				image: chooseType,
			},
			{
				label: 'Generate',
				caption: 'Evertune researches the brand and drafts topics and prompts, showing its progress step by step.',
				image: generating,
			},
			{
				label: 'Refine',
				caption: 'Edit topics and prompts directly, or ask the agent to change them, before anything runs.',
				image: review,
			},
			{
				label: 'Run',
				caption: 'Adjust the settings (models, refresh cadence and credits), then run the tracker.',
				image: settings,
			},
		],
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
