// Edit this file to update the text on your portfolio.

import type { ImageMetadata } from 'astro';
import { studies } from './studies';
import { studyImage } from '../lib/studyImages';
import evertuneCover from '../assets/evertune/cover.jpg';
import ydCover from '../assets/yd/cover.png';
import portrait from '../assets/about/portrait-soft.webp';


export const site = {
	name: 'Tinu Thomas',
	role: 'Product Designer',
	// Used for the page's search/share description.
	tagline: 'Product designer turning complex problems into simple, user-centered solutions.',
	// The lines that rotate under "Hi, I'm …" on the home page.
	intro: [
		"I'm a product designer",
		'I currently design at Evertune AI',
		"I've been designing for B2B SaaS platforms since 2021",
		'I turn complex problems into simple, user-centered solutions',
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
			'Then AI made all of it more efficient. I never thought I’d write a pull request, yet here I am as a product designer, gathering feedback, designing and pushing code. It’s been a fun journey.',
			'What hasn’t changed is the foundation. I design core product experiences end to end, from early exploration through launch and iteration, and I explore several directions quickly before settling on one. I start with user research to make sure I’m solving the right problem, and I work closely with PMs and engineers to turn ambiguous problems into clear, thoughtful solutions that balance user needs, technical constraints and business goals, all while keeping a high bar for craft.',
			'After launch, I keep listening. User feedback, qualitative insights and product intuition guide how I refine the product, and I help evolve its design language, systems and vision along the way.',
		],
	},
	email: 'thomastinu33@gmail.com',
	linkedin: 'https://www.linkedin.com/in/tinuthomas33/',
	location: 'New York City',
	// Put your resume PDF in the `public/` folder with this file name.
	resume: 'resume.pdf',
};

// The "what I do" strip right below the intro: a short title plus a light one-line phrase.
// A walkthrough video split into chapters: each step names a chapter, says what happens in it,
// and gives the second where it starts. Files live in `public/`.
export type FlowStep = { label: string; caption: string; at: number };
export type FlowVideo = { src: string; poster: string; steps: FlowStep[] };

// "How I work": short principles, drawn from the case studies. Edit the wording freely.
// `icon` must match one of the icons imported in src/pages/index.astro.
export const principles = [
	{
		icon: 'build',
		title: 'Design end to end',
		body: 'I design core product experiences from early exploration through launch and iteration, exploring several directions quickly through sketches, flows, prototypes and high-fidelity designs.',
	},
	{
		icon: 'team',
		title: 'Partner with the team',
		body: 'I work closely with product managers and engineers to turn strategy and ambiguous problems into clear, thoughtful solutions, balancing user needs, technical constraints and business goals while keeping a high bar for craft.',
	},
	{
		icon: 'craft',
		title: 'Sweat the details',
		body: 'I fine-tune responsive layouts, typography, spacing and interactions, and I maintain the design system in code so those details hold up as the product grows and ships.',
	},
	{
		icon: 'improve',
		title: 'Keep improving',
		body: 'I use user feedback, qualitative insights and product intuition to keep refining the product, and I help evolve its design language, systems and vision along the way.',
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
	// Case studies written in src/data/studies.ts
	...studies.map((st) => ({
		title: st.title,
		summary: st.summary,
		slug: st.slug,
		highlights: st.highlights,
		tags: st.tags,
		cover: { image: studyImage(st.cover.src), alt: st.cover.alt, bare: st.cover.bare },
	})),
];

// "Experience": the home page lists these as a timeline, newest first. `projects` names the case studies
// (by slug, from the list above) shown as cards under each company. Leave it empty for a company without one.
export type Job = {
	company: string;
	role: string;
	when: string;
	summary: string;
	projects: string[];
};

export const experience: Job[] = [
	{
		company: 'Evertune',
		role: 'Product Designer',
		when: 'Aug 2025 – Present',
		summary:
			'Designing Evertune\u2019s AI-native platform end to end across GEO and Ads, and creating unified agent experiences so customers can understand and improve how their brand shows up in AI answers.',
		projects: ['evertune', 'evertune-brand-overview'],
	},
	{
		company: 'YipitData',
		role: 'Senior Interaction Designer',
		when: 'Aug 2021 – Jan 2025',
		summary:
			'Led the design of the Investor Platform from 0 to 1, moving YipitData\u2019s research from email to the web, and built its design system and data visualization guidelines with engineers.',
		projects: [
			'yipitdata',
			'yipitdata-homepage',
			'yipitdata-key-metrics',
			'yipitdata-data-visualization',
			'yipitdata-preferences',
		],
	},
	{
		company: 'Area23, an IPG Health company',
		role: 'UX/UI Intern',
		when: 'Jun 2020 – Aug 2020',
		summary:
			'Designed user flows and interactive experiences for healthcare professionals across devices, working with art directors and engineers on brand-consistent, feasible solutions.',
		projects: ['area23'],
	},
	{
		company: 'Fincent (formerly Design Capital)',
		role: 'UX Designer',
		when: 'Jun 2018 – Jul 2019',
		summary:
			'Led information architecture and UX for Lemoney, a finance platform for small businesses, from user research to a validated proof of concept.',
		projects: ['lemoney'],
	},
];
