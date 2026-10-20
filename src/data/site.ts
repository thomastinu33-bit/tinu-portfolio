// Edit this file to update the text on your portfolio.

export const site = {
	name: 'Tinu Thomas',
	role: 'UX Designer',
	tagline: 'I design clear, human-centered digital products.',
	about:
		'Write a short paragraph about yourself here: your background, what kind of work you love, and what you are looking for next.',
	email: 'thomastinu33@gmail.com',
	// Put your resume PDF in the `public/` folder with this file name.
	resume: 'resume.pdf',
	links: [
		{ label: 'LinkedIn', href: 'https://www.linkedin.com/' },
		{ label: 'GitHub', href: 'https://github.com/thomastinu33-bit' },
	],
};

export type Project = {
	title: string;
	summary: string;
	tags: string[];
	href?: string;
};

// Add, remove, or reorder projects here.
export const projects: Project[] = [
	{
		title: 'Project One',
		summary: 'One or two sentences on the problem, your role, and the outcome.',
		tags: ['UX Research', 'Prototyping'],
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
