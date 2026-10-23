// Edit this file to update the text on your portfolio.

import type { ImageMetadata } from 'astro';
import evertuneCover from '../assets/evertune/cover.jpg';
import ydCover from '../assets/yd/cover.png';
import portrait from '../assets/about/portrait.webp';


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
	about: {
		// `position` keeps the face in frame when the picture is cropped to the panel.
		photo: {
			image: portrait,
			alt: 'Portrait of Tinu Thomas, smiling at a restaurant table.',
			position: '46% 30%',
		} as { image: ImageMetadata; alt: string; position?: string } | undefined,
		lead: 'I’m a product designer based in NYC.',
		story: [
			'For more than five years, I’ve designed SaaS products, and I have a degree in Information Experience Design.',
			'What I love most about product design is how much it has changed. Early in my career, building a design system meant months of back and forth with product and engineering. Research meant recording sessions, combing through notes and making FigJams. Handoff meant sending a Figma file to developers and crossing my fingers.',
			'Then AI made all of it more powerful and much faster. I never thought I’d write a pull request, yet here I am as a product designer, gathering feedback, designing and pushing code. It’s been a fun journey.',
			'What hasn’t changed is the foundation. I start with user research to make sure I’m solving the right problem, and I work closely with PMs and engineers to ship what I design.',
		],
	},
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

// A walkthrough video split into chapters: each step names a chapter, says what happens in it,
// and gives the second where it starts. Files live in `public/`.
export type FlowStep = { label: string; caption: string; at: number };
export type FlowVideo = { src: string; poster: string; steps: FlowStep[] };

// "How I work": short principles, drawn from the case studies. Edit the wording freely.
// `icon` must match one of the icons imported in src/pages/index.astro.
export const principles = [
	{
		icon: 'listen',
		title: 'Start with customers',
		body: 'I begin by listening: customer calls, feedback and how people actually use the product. The research shapes the problem before any screen is drawn.',
	},
	{
		icon: 'prototype',
		title: 'Exploring solutions',
		body: 'I use different tools to shape ideas. Sometimes it’s Figma, and sometimes it’s building prototypes with Claude and Codex and gathering feedback.',
	},
	{
		icon: 'system',
		title: 'Build systems, not just screens',
		body: 'I build and maintain design systems in canvas and code, so what is designed and what ships stay in step as products grow.',
	},
	{
		icon: 'team',
		title: 'Work closely with the team',
		body: 'I work side by side with PMs and engineers, and I keep talking to users after launch, so each decision is grounded in what people need.',
	},
] as const;

export type Project = {
	title: string;
	summary: string;
	tags: string[];
	href?: string;
	// Up to three short lines shown beside the picture on the featured card.
	highlights?: string[];
	// The picture on the homepage card. Projects without one show a placeholder.
	// `bare: true` skips the browser frame, for images that are already a mockup.
	cover?: { image: ImageMetadata; alt: string; bare?: boolean };
	// Links the card to /case-studies/<slug>/.
	slug?: string;
	// Optional: shows a chaptered walkthrough video of the design as the project's hero.
	flow?: FlowVideo;
};

// Add, remove, or reorder projects here.
export const projects: Project[] = [
	{
		title: 'Improving how Evertune customers create prompts to analyze their AI visibility',
		summary:
			'New users struggled to choose between five tracker types before writing a single prompt. I redesigned prompt creation around a simple chat with Evertune\u2019s agent, so new customers can get started without white-glove onboarding.',
		slug: 'evertune',
		highlights: [
			'One simple chat replaces five tracker types',
			'No onboarding or white-glove service needed',
			'Chat to canvas, built for an agentic platform',
		],
		cover: {
			image: evertuneCover,
			alt: 'The Evertune tracker draft: topics and prompts on the left, the agent chat on the right.',
		},
		tags: ['Evertune AI', 'B2B SaaS', 'Product Design'],
		flow: {
			src: 'evertune/flow.mp4',
			poster: 'evertune/flow-poster.jpg',
			steps: [
				{
					label: 'Start',
					caption: 'Start by entering instructions in the chat: describe what to track in a simple sentence.',
					at: 0,
				},
				{
					label: 'Generate',
					caption: 'Evertune researches the brand and drafts topics and prompts, showing its progress step by step.',
					at: 7.9,
				},
				{
					label: 'Refine',
					caption: 'Open any topic to edit its prompts directly, or ask the agent to change them, before anything runs.',
					at: 12.4,
				},
				{
					label: 'Run',
					caption: 'Pick the models and refresh cadence and watch the monthly prompt usage update, then run the tracker.',
					at: 29.3,
				},
			],
		},
	},
	{
		title: 'Moving YipitData from email to an investor platform',
		summary:
			'YipitData delivered its research by email. I led the design of the Investor Platform from 0 to 1, with 97% user adoption, 2x engagement and 72% retention.',
		slug: 'yipitdata',
		highlights: [
			'97% user adoption of the new platform',
			'2x user engagement',
			'72% retention',
		],
		cover: {
			image: ydCover,
			alt: 'The YipitData Investor Platform homepage on a laptop and a phone.',
			bare: true,
		},
		tags: ['YipitData', 'B2B SaaS', 'Design Systems', 'Research'],
	},
];
