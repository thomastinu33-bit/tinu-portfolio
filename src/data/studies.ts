// Case studies that share one layout (src/pages/case-studies/[slug].astro). Each study is a list of blocks
// shown in order. Pictures are named '<study>/<number>' and live in src/assets/studies/.
// To add one: copy a study below, add its pictures, and it appears on the home page and gets its own page.

export type Block =
	| { type: 'heading'; text: string }
	| { type: 'text'; text: string }
	| { type: 'list'; items: string[] }
	| { type: 'image'; src: string; alt: string; caption?: string }
	// Several pictures side by side
	| { type: 'row'; images: { src: string; alt: string }[]; caption?: string }
	| { type: 'logos'; images: { src: string; alt: string }[] }
	| { type: 'stats'; items: { value: string; label: string }[] }
	| { type: 'quotes'; items: string[] };

export type Study = {
	slug: string;
	title: string;
	company: string;
	tags: string[];
	summary: string;
	highlights: string[];
	cover: { src: string; alt: string; bare?: boolean };
	// Also show the cover picture at the top of the case study page.
	hero?: boolean;
	blocks: Block[];
};

export const studies: Study[] = [
	{
		slug: 'yipitdata-homepage',
		title: 'Redesigning the YipitData homepage',
		company: 'YipitData',
		tags: ['YipitData', 'B2B SaaS', 'Product Design'],
		summary:
			'Customers visited every day for the latest reports, but over 70% of the homepage was irrelevant to them. I redesigned it to make new reports easy to find.',
		highlights: ['12x increase in daily visitors', '41.5% visitor adoption', '11% weekly visitor growth'],
		hero: true,
		cover: { src: 'yd-homepage/01', alt: 'The redesigned YipitData homepage on a laptop.', bare: true },
		blocks: [
			{ type: 'heading', text: 'Context' },
			{
				type: 'text',
				text: 'The platform homepage wasn’t effectively showcasing newly published reports for relevant products, even though customers visited daily to access the latest insights. Over 70% of the homepage was dedicated to irrelevant content, making it difficult for them to quickly find what they needed.',
			},
			{
				type: 'image',
				src: 'yd-homepage/02',
				alt: 'The original YipitData homepage.',
				caption:
					'A snapshot of the original design. Customers often struggled to find the reports they cared about since they were tucked away in a small list in the right corner of the screen.',
			},
			{ type: 'heading', text: 'What I did' },
			{
				type: 'text',
				text: 'I revamped the investor platform homepage to enhance report discoverability and enable our customers to find content for companies they care about easily.',
			},
			{
				type: 'stats',
				items: [
					{ value: '12x', label: 'Increase in daily visitors' },
					{ value: '41.5%', label: 'Visitor adoption' },
					{ value: '11%', label: 'Visitor growth week over week' },
				],
			},
			{
				type: 'text',
				text: 'I designed a two-column homepage layout, prioritizing reports on the left and relocating ‘Recently Viewed’ and ‘Trending Products’ to the right.',
			},
			{ type: 'image', src: 'yd-homepage/03', alt: 'The new two-column homepage.' },
			{
				type: 'text',
				text: 'To enhance how customers find relevant reports, I added headers like ‘Today’ and ‘Last 7 days’ to help them easily scan from the latest to oldest reports. I also introduced hover-triggered watchlisting actions, simplifying the process of updating preferences directly from the homepage.',
			},
			{
				type: 'image',
				src: 'yd-homepage/04',
				alt: 'The report list with date headers and an Add to Watchlist action on hover.',
			},
			{
				type: 'image',
				src: 'yd-homepage/05',
				alt: 'The anatomy of a report row, with spacing measurements.',
				caption: 'The anatomy of a report inside the grid.',
			},
			{
				type: 'text',
				text: 'I designed a sticky header for ‘Recently Published’ to keep ‘Today’, ‘Last 7 Days’ and ‘Previously Published’ visible while scrolling, so customers are aware of the age of the reports they’re looking at.',
			},
			{ type: 'image', src: 'yd-homepage/06', alt: 'The sticky Recently Published header while scrolling.' },
			{
				type: 'text',
				text: 'I redesigned ‘Recently Viewed’ and ‘Trending Products’ as a new card layout. Each card has rows showing the latest publication dates and quick action buttons for easy navigation. This optimized space and improved usability and engagement.',
			},
			{ type: 'image', src: 'yd-homepage/07', alt: 'The old and new Recently Viewed and Trending Products cards, side by side.' },
			{ type: 'heading', text: 'Feedback from customers' },
			{
				type: 'quotes',
				items: [
					'I think I use it more actually. It’s just more inviting. It just looks better and the layout seems easily digestible. Whereas before it was a little bit archaic.',
					'Putting the timestamps of when the reports were published, that’s been really helpful. And then feels like a better use of space in the middle of the screen where I can kind of see a little more about what reports have been published recently. So overall, I’ve found it fairly helpful.',
				],
			},
		],
	},
	{
		slug: 'yipitdata-key-metrics',
		title: 'Designing the Key Metrics Screener',
		company: 'YipitData',
		tags: ['YipitData', 'B2B SaaS', 'Product Design'],
		summary:
			'Customers had no quick way to see the latest KPIs for the companies they follow. I designed one consolidated view of YipitData’s estimates next to consensus values.',
		highlights: ['62% visitor adoption', '12% average weekly visitor increase', '+18% week-over-week retention'],
		hero: true,
		cover: { src: 'yd-key-metrics/01', alt: 'The Key Metrics Screener on a laptop.', bare: true },
		blocks: [
			{ type: 'heading', text: 'Context' },
			{
				type: 'text',
				text: 'Customers faced a frustrating workflow when accessing KPIs for companies they cared about. The experience relied on static tables in reports or navigating between separate dashboards, creating friction and breaking the flow of analysis. This inefficient process caused cognitive load and disrupted their ability to quickly compare or act on data. A common question like “What are the latest figures for the metrics I care about that updated today?” was completely unanswerable with the old experience. This highlighted a clear usability gap and underscored the need for a more streamlined, user-centered solution.',
			},
			{ type: 'heading', text: 'What I did' },
			{
				type: 'text',
				text: 'I designed the Key Metrics Screener to give customers a single, consolidated view of YipitData’s latest estimates alongside consensus values. The design let users preview top-line values at a glance, eliminating the need to drill into each dashboard or report. This streamlined the workflow, reduced cognitive load, and was especially valuable for customers managing multiple companies.',
			},
			{
				type: 'stats',
				items: [
					{ value: '62%', label: 'Visitor adoption' },
					{ value: '12%', label: 'Average visitor increase week over week' },
					{ value: '+18%', label: 'Week-over-week retention' },
				],
			},
			{ type: 'image', src: 'yd-key-metrics/02', alt: 'The Key Metrics Screener grid of metrics from the watchlist.' },
			{
				type: 'text',
				text: 'Customers managing coverage for 10+ companies greatly valued the key metrics grid, as it provided an immediate, simplified view of KPIs, allowing them to quickly sort and access critical information without unnecessary navigation.',
			},
			{ type: 'heading', text: 'Feedback from customers' },
			{
				type: 'quotes',
				items: [
					'I really like the interface. Definitely more easier to work with than Nielsen data.',
					'People might have raw feeds, but value add you’re adding is aggregating it in a format that’s immediately consumable.',
				],
			},
			{ type: 'heading', text: 'Evolution to the Key Metrics Screener' },
			{
				type: 'text',
				text: 'While gathering feedback on the Screener, we learned that customers wanted additional functionality, such as filtering by sectors, switching between growth rates, and earnings indicators to assess the reliability of estimates. Based on this input, we decided to evolve the Screener to better meet these needs and provide a more dynamic, user-driven experience.',
			},
			{
				type: 'image',
				src: 'yd-key-metrics/03',
				alt: 'Key insights consolidated from customer feedback and interview sessions.',
				caption: 'A consolidation of key insights gathered from customer feedback and interview sessions.',
			},
			{
				type: 'text',
				text: 'I drew visual inspiration from Yahoo Finance and TradingView, particularly for their screener filter designs. They offer a clear, intuitive layout that lets users quickly refine and customize their view. The filters are easily accessible, with a logical grouping of options that streamline the process, reducing cognitive load.',
			},
			{
				type: 'image',
				src: 'yd-key-metrics/04',
				alt: 'A screenshot of TradingView’s screener tool.',
				caption: 'A screenshot from TradingView’s screener tool.',
			},
			{ type: 'heading', text: 'The new Key Metrics Screener' },
			{
				type: 'text',
				text: 'Customers can sort the screener by ‘Upcoming Earnings’ to see metrics for companies nearing earnings. They can also choose 2-year, 3-year or 4-year CAGR options to view the estimates they consider more reliable, for more flexibility in their analysis.',
			},
			{ type: 'image', src: 'yd-key-metrics/05', alt: 'Sorting by upcoming earnings and choosing a CAGR period.' },
			{
				type: 'text',
				text: 'They can filter by the sectors they care about, to focus on the data that matches their specific interests and needs.',
			},
			{ type: 'image', src: 'yd-key-metrics/06', alt: 'Filtering the screener by sector.' },
			{
				type: 'text',
				text: 'Margin-of-error information gives greater confidence in the estimates, so customers can better judge how reliable the data is and make more informed decisions.',
			},
			{ type: 'image', src: 'yd-key-metrics/07', alt: 'Margin of error shown beside the estimates.' },
			{
				type: 'text',
				text: 'These features make the design more intuitive and tailored to customers managing complex data across multiple companies. By evolving the Key Metrics Screener, we addressed critical usability gaps, streamlined workflows, and gave users more control over their analysis. The project shows the impact of thoughtful design grounded in user feedback.',
			},
		],
	},
	{
		slug: 'yipitdata-data-visualization',
		title: 'Building data visualization dashboards and guidelines',
		company: 'YipitData',
		tags: ['YipitData', 'B2B SaaS', 'Data Visualization', 'Research'],
		summary:
			'Customers kept asking for custom data cuts. I led the research, designed the Key Metrics dashboard and wrote guidelines so research teams could build dashboards on their own.',
		highlights: [
			'45% increase in user activity',
			'Teams build dashboards without design',
			'Visualization guidelines for research and engineering',
		],
		hero: true,
		cover: { src: 'yd-dataviz/01', alt: 'The Key Metrics dashboard on a laptop.', bare: true },
		blocks: [
			{ type: 'heading', text: 'Context' },
			{
				type: 'text',
				text: 'We observed a high volume of custom data analysis requests that weren’t covered by standard reports. While data-savvy teams downloaded raw files to create their own visualizations, less data-savvy teams relied on us for custom data cuts, often missing out on critical, time-sensitive insights. To address this, there was a clear need to develop dashboards that empowered customers to visualize data in their preferred way while also reducing the workload on our internal teams, who spent countless hours generating custom analyses.',
			},
			{ type: 'heading', text: 'What I did' },
			{
				type: 'text',
				text: 'I led user research to gain a deeper understanding of customer needs and collaborated with the product manager to visualize the data. I also developed a long-term strategy to enable teams to create dashboards independently, reducing reliance on design.',
			},
			{ type: 'heading', text: 'Understanding our customers' },
			{
				type: 'text',
				text: 'I reviewed over 100 custom analysis requests from customers and watched recordings of research analysts speaking with them to understand their questions, challenges and recurring patterns. Applying the 80-20 principle, I distilled key themes and worked closely with the product manager to define the next steps.',
			},
			{
				type: 'image',
				src: 'yd-dataviz/02',
				alt: 'An affinity diagram of themes from customer requests.',
				caption: 'One of the many affinity diagrams I created to identify key themes.',
			},
			{ type: 'heading', text: 'Building the Key Metrics dashboard' },
			{ type: 'text', text: 'We designed the visualization around three key user needs:' },
			{
				type: 'list',
				items: [
					'Key Metrics Overview: a clear, high-level snapshot of essential KPIs for quick insights.',
					'Interactive Forecasting: customers can project future trends by selecting custom growth rates.',
					'Comparative Analysis: visuals that help users interpret daily comparisons and historical trends for better decision-making.',
				],
			},
			{ type: 'heading', text: 'Establishing visualization principles' },
			{
				type: 'text',
				text: 'The Key Metrics dashboard quickly gained traction, leading to a 45% increase in user activity as more research teams adopted it to create their own dashboards. Teams saw it as a more efficient way to publish data more frequently and expand coverage across sectors and companies. However, while teams understood the questions they wanted to answer, they lacked clarity on usability best practices and on selecting the right visualizations.',
			},
			{
				type: 'text',
				text: 'Recognizing this gap, I developed the Data Visualization Guidelines, a resource to help research teams design more effective, user-friendly dashboards. The guidelines also supported engineering by introducing streamlined components, reducing the need to build dashboards from scratch and improving overall efficiency.',
			},
		],
	},
	{
		slug: 'yipitdata-preferences',
		title: 'Simplifying preference management',
		company: 'YipitData',
		tags: ['YipitData', 'B2B SaaS', 'Product Design', 'Research'],
		summary:
			'Favoriting and watchlisting a company confused customers. I replaced “Favorites” with one expanded Watchlist that personalizes the whole portal.',
		highlights: ['9x visitor adoption', '6.7x user clicks', '+21% weekly visitors managing their watchlist'],
		hero: true,
		cover: { src: 'yd-preferences/01', alt: 'The My Products page on a laptop.', bare: true },
		blocks: [
			{ type: 'heading', text: 'Context' },
			{
				type: 'text',
				text: 'Our customers faced confusion around managing their preferences. Actions like ‘favoriting’ or ‘watchlisting’ a company lacked clarity, and the ‘My Products’ grid, where preferences were managed, was buried below the fold, further complicating the experience.',
			},
			{
				type: 'image',
				src: 'yd-preferences/02',
				alt: 'The original homepage, where customers scrolled to see their preferences.',
				caption: 'A snapshot of the original design, where customers had to scroll to see their preferences.',
			},
			{
				type: 'text',
				text: 'The ability to watchlist was only available for key metrics, which were on a different page, and customers were confused by the need to both favorite a company and watchlist its metrics separately.',
			},
			{
				type: 'image',
				src: 'yd-preferences/03',
				alt: 'The page customers had to visit to watchlist key metrics.',
				caption: 'The page customers had to visit to watchlist key metrics.',
			},
			{ type: 'heading', text: 'What I did' },
			{
				type: 'text',
				text: 'I streamlined preference management by designing an experience that simplified favoriting, watchlisting and receiving email updates.',
			},
			{
				type: 'stats',
				items: [
					{ value: '9x', label: 'Visitor adoption' },
					{ value: '6.7x', label: 'User clicks' },
					{ value: '+21%', label: 'Weekly visitors managing their watchlist' },
				],
			},
			{
				type: 'text',
				text: 'Through user research, we learned that ‘Favorite’ wasn’t a commonly used term in the industry, and our customers were more familiar with ‘Watchlist’. I redesigned the system to replace ‘Favorites’ with an expanded ‘Watchlist’ feature. Adding a company to the watchlist now boosts its visibility across the portal, highlights relevant metrics, and enables email notifications. This integrated approach gives a seamless, personalized journey.',
			},
			{
				type: 'image',
				src: 'yd-preferences/04',
				alt: 'The redesigned Watchlist icons.',
				caption: 'I redesigned the Watchlist icons to clearly differentiate the new interaction from the existing one and prevent confusion.',
			},
			{
				type: 'text',
				text: 'We encouraged customers to watchlist companies they care about by creating a more personalized portal experience. On the homepage customers could switch to ‘Watchlist’ and view reports tailored to their preferences, minimizing noise. I also added calls to action across the homepage so they could quickly add companies to their watchlist.',
			},
			{ type: 'image', src: 'yd-preferences/05', alt: 'The homepage Watchlist view.' },
			{
				type: 'text',
				text: 'I moved the ‘My Products’ grid from the homepage to its own dedicated page, improving its discoverability for new customers and streamlining preference management for all users.',
			},
			{ type: 'image', src: 'yd-preferences/06', alt: 'The dedicated My Products page.' },
			{
				type: 'text',
				text: 'On the YipitData Live page, customers could monitor key metrics for the companies on their watchlist without any extra steps. This update received highly positive feedback.',
			},
			{ type: 'image', src: 'yd-preferences/07', alt: 'The YipitData Live page showing metrics for watchlisted companies.' },
			{ type: 'heading', text: 'Feedback from customers' },
			{
				type: 'quotes',
				items: [
					'Is it this button here, add to watchlist? This is good, because the next thing I’m gonna do, probably Watchlist Roblox.',
					'I like this page [referring to the My Products page] because I didn’t realize that I had access to the consumer products [subscription] until now.',
				],
			},
		],
	},
	{
		slug: 'lemoney',
		title: 'Designing the proof of concept for Lemoney, a finance platform for small businesses',
		company: 'Design Capital',
		tags: ['Design Capital', 'Product Design', 'Research', 'Information Architecture'],
		summary:
			'I designed the proof of concept for a finance management platform that helps small businesses manage invoices, expenses and taxes, from research to a first version investors and early users liked.',
		highlights: [
			'Research with bookkeepers, accountants and finance managers',
			'Information architecture from card sorting',
			'Positive feedback from investors and early users',
		],
		cover: { src: 'lemoney/01', alt: 'The Lemoney invoice screen.' },
		blocks: [
			{ type: 'heading', text: 'Context' },
			{
				type: 'text',
				text: 'The aim was to design an intuitive finance management tool tailored for small businesses. It combines streamlined features such as invoice creation, efficient expense tracking, employee reimbursement management and tax form organization into a cohesive and user-friendly solution.',
			},
			{ type: 'heading', text: 'What I did' },
			{
				type: 'text',
				text: 'I designed the proof of concept (POC) for Lemoney, a finance management platform to help small businesses manage their invoices, expenses and taxes with ease.',
			},
			{ type: 'image', src: 'lemoney/01', alt: 'The Lemoney invoice screen.' },
			{ type: 'heading', text: 'The design process' },
			{ type: 'image', src: 'lemoney/02', alt: 'The steps of the design process.' },
			{
				type: 'text',
				text: 'I conducted in-depth user research with bookkeepers, accountants, tax managers and finance managers from various organizations to better understand their workflows and pinpoint key pain points. This discovery phase gave us a clear outline of the essential modules for the product. I then shared these insights with stakeholders and collaborated closely with the product manager to define the goals for the proof of concept.',
			},
			{
				type: 'row',
				images: [
					{ src: 'lemoney/03', alt: 'Research notes from user interviews.' },
					{ src: 'lemoney/04', alt: 'Research findings.' },
					{ src: 'lemoney/05', alt: 'Research synthesis.' },
				],
			},
			{
				type: 'text',
				text: 'I facilitated a card sorting workshop with team members, our company accountant and the users I had interviewed to gather insights. While clear patterns emerged, some cards didn’t fit into specific groups. Based on these findings, I developed the initial information architecture for the product.',
			},
			{ type: 'image', src: 'lemoney/06', alt: 'The information architecture of the product.' },
			{
				type: 'text',
				text: 'To streamline the design, I identified shared elements across multiple modules and applied atomic design principles, creating reusable components for consistency and efficiency. This ensured modularity and seamless integration throughout the application. Here’s how I applied it to the Invoice module.',
			},
			{ type: 'image', src: 'lemoney/07', alt: 'Atomic design applied to the Invoice module.' },
			{
				type: 'text',
				text: 'Designing the information architecture for both the main navigation and individual modules was a highly collaborative and iterative process with stakeholders and the lead product manager. To validate the structure, I conducted multiple rounds of user research and designed low-fidelity mockups to visualize user flows and interactions. This feedback-driven approach helped refine the design so it met user needs and expectations.',
			},
			{ type: 'image', src: 'lemoney/08', alt: 'Low-fidelity mockups of user flows.' },
			{
				type: 'text',
				text: 'We began with the invoice module, using a user-centered design approach to create the prototype. After validating and finalizing the design, I handed it off to engineers for development while I focused on designing the other modules, applying the same research-driven process throughout.',
			},
			{ type: 'heading', text: 'Outcome' },
			{
				type: 'text',
				text: 'While designing the other modules, I supported engineers with QA and CSS. As this was a POC, the biggest challenge was addressing the concerns of stakeholders while also keeping users in mind. Building the information architecture with atomic design principles helped us iterate quickly. After a few months, the first version of the POC was ready, and the feedback from investors and early users was highly positive.',
			},
		],
	},
	{
		slug: 'area23',
		title: 'User-centered design for healthcare professionals at Area23',
		company: 'Area23',
		tags: ['Area23', 'Healthcare', 'UX Design', 'Interactive Experiences'],
		summary:
			'I redesigned a sales planning tool, designed virtual booth experiences and interactive visual aids, and created digital strategies to engage healthcare professionals.',
		highlights: [
			'Redesigned a COVID planning tool for sales reps',
			'Virtual booth flows with developers and animators',
			'Interactive visual aids and landing pages',
		],
		cover: { src: 'area23/23', alt: 'A rendering of the Ongentys virtual booth.', bare: true },
		blocks: [
			{ type: 'heading', text: 'Brands I collaborated with' },
			{
				type: 'logos',
				images: [
					{ src: 'area23/01', alt: 'Shingrix' },
					{ src: 'area23/02', alt: 'Ongentys' },
					{ src: 'area23/03', alt: 'Alkindi Sprinkle' },
				],
			},
			{ type: 'heading', text: 'What I did' },
			{
				type: 'text',
				text: 'I redesigned tools for improved usability, created interactive assets to align stakeholders, and empowered sales reps with UX solutions. I provided UX recommendations for virtual experiences, collaborated with third-party developers on technical requirements, and designed digital strategies to engage healthcare professionals, driving memorable experiences and customer engagement.',
			},
			{ type: 'heading', text: 'Shingrix: redesigning the COVID planning tool' },
			{
				type: 'text',
				text: 'The Shingrix sales representatives were struggling with a difficult-to-use COVID planning tool, wasting precious time as they tried to provide the right solutions to healthcare professionals. Given the time-sensitive nature of these interactions, it was crucial to streamline the tool to help sales reps work faster.',
			},
			{
				type: 'image',
				src: 'area23/04',
				alt: 'A page from the original planning tool.',
				caption: 'A page from the original planning tool.',
			},
			{ type: 'text', text: 'I redesigned the COVID planning tool to help sales representatives quickly:' },
			{
				type: 'list',
				items: [
					'Identify key account types',
					'Recognize the barriers these customers face',
					'Use the planning tool to provide them with the right resources',
				],
			},
			{
				type: 'text',
				text: 'I created low-fidelity wireframes to visualize the flow and determine the placement of content.',
			},
			{
				type: 'row',
				images: [
					{ src: 'area23/05', alt: 'Wireframe, introduction.' },
					{ src: 'area23/06', alt: 'Wireframe, step 1.' },
					{ src: 'area23/07', alt: 'Wireframe, step 2.' },
					{ src: 'area23/08', alt: 'Wireframe, step 3.' },
					{ src: 'area23/09', alt: 'Wireframe, step 4.' },
					{ src: 'area23/10', alt: 'Wireframe, step 5.' },
				],
			},
			{
				type: 'text',
				text: 'I then designed high-fidelity mockups in collaboration with the art director to ensure visual and brand consistency.',
			},
			{
				type: 'row',
				images: [
					{ src: 'area23/11', alt: 'High-fidelity mockup, introduction.' },
					{ src: 'area23/12', alt: 'High-fidelity mockup, step 1.' },
					{ src: 'area23/13', alt: 'High-fidelity mockup, step 2.' },
					{ src: 'area23/14', alt: 'High-fidelity mockup, step 3.' },
					{ src: 'area23/15', alt: 'High-fidelity mockup, step 4.' },
				],
			},
			{ type: 'heading', text: 'Designing experiences for virtual booths' },
			{
				type: 'text',
				text: 'My role involved providing UX recommendations for the placement of elements in virtual booths to ensure a seamless experience. I collaborated closely with developers and animators to create the virtual experience, which made it crucial to document the intended flow. To do that, I created user flow diagrams to visualize the interactions and align all stakeholders with the project objectives.',
			},
			{
				type: 'image',
				src: 'area23/16',
				alt: 'A user flow diagram for the Ongentys virtual booth.',
				caption: 'An example of the user flow diagrams I created for virtual booths.',
			},
			{
				type: 'text',
				text: 'I aligned with developers and animators to create early concept flow mockups, so the intended user interactions were clearly represented.',
			},
			{
				type: 'row',
				images: [
					{ src: 'area23/17', alt: 'Early concept flow mockup 1.' },
					{ src: 'area23/18', alt: 'Early concept flow mockup 2.' },
					{ src: 'area23/19', alt: 'Early concept flow mockup 3.' },
					{ src: 'area23/20', alt: 'Early concept flow mockup 4.' },
					{ src: 'area23/21', alt: 'Early concept flow mockup 5.' },
					{ src: 'area23/22', alt: 'Early concept flow mockup 6.' },
				],
			},
			{
				type: 'text',
				text: 'The animators would create versions of the renderings, which I would review and QA to ensure an optimal user experience.',
			},
			{
				type: 'row',
				images: [
					{ src: 'area23/23', alt: 'Early rendering of the Ongentys booth.' },
					{ src: 'area23/24', alt: 'Early rendering of the Ongentys booth, another view.' },
					{ src: 'area23/25', alt: 'Early rendering of the Ongentys booth, a third view.' },
				],
				caption: 'Early renderings of the Ongentys booth.',
			},
			{
				type: 'text',
				text: 'Once the final version of the rendering was ready, following extensive QA, we presented it to our client.',
			},
			{ type: 'heading', text: 'Designing experiences for interactive visual aids' },
			{
				type: 'text',
				text: 'The client typically supplies the content for the interactive visual aids (IVAs). My role is to make sure the information about the product is presented clearly and is easy to navigate. I focused on an experience that gives an intuitive, high-level overview of the product, so users can quickly understand the key details.',
			},
			{
				type: 'text',
				text: 'I begin by creating content maps for both the IVAs and landing page, which I review with clients and stakeholders to ensure alignment and clarity.',
			},
			{
				type: 'image',
				src: 'area23/26',
				alt: 'A content map for an IVA.',
				caption: 'An example of the content maps I create for IVAs, for Alkindi Sprinkle.',
			},
			{
				type: 'image',
				src: 'area23/27',
				alt: 'A content map for a landing page.',
				caption: 'An example of the content maps I create for landing pages, for Alkindi Sprinkle.',
			},
			{
				type: 'text',
				text: 'I then create wireframes to establish the layout, structure and hierarchy of the content, so the design supports both user needs and business goals.',
			},
			{ type: 'image', src: 'area23/28', alt: 'Wireframes for an IVA.', caption: 'Wireframes for IVAs.' },
			{
				type: 'image',
				src: 'area23/29',
				alt: 'Wireframes for a landing page.',
				caption: 'Wireframes for landing pages.',
			},
			{
				type: 'text',
				text: 'Once the wireframes are finalized and aligned with the stakeholders, I work closely with art directors to refine the visuals, ensuring brand consistency and aesthetic appeal. After incorporating feedback and making adjustments, the design is handed off to developers. I continue to work with the team through QA so the final product matches the intended user experience. Finally, the polished solution is presented to the client for approval and implementation.',
			},
			{
				type: 'image',
				src: 'area23/30',
				alt: 'The Alkindi Sprinkle landing page.',
				caption:
					'The landing page for Alkindi Sprinkle. While the imagery has changed since this update, the information architecture remains the same.',
			},
		],
	},
	{
		slug: 'evertune-brand-overview',
		title: 'One view of brand performance across all AI prompts',
		company: 'Evertune',
		tags: ['Evertune AI', 'B2B SaaS', 'Product Design'],
		summary:
			'The brand overview page is where customers see how their AI visibility is doing across every prompt they have run, and what to do next.',
		highlights: ['~97.5% of visitors return', '~31% of app users visit', '~8.6s median time on page'],
		cover: { src: 'evertune-brand-overview/01', alt: 'The Evertune platform.' },
		blocks: [
			{ type: 'heading', text: 'Context' },
			{
				type: 'text',
				text: 'As customers ran more prompts across more trackers, understanding their overall AI visibility meant working through each category and tracker one at a time, a burden that grew most when they wanted to benchmark against competitors. Partnering closely with Product, I dug into how customers evaluated their performance and where they needed a clearer starting point. What emerged was a need for an aggregated view of brand performance, which shaped the design of the brand overview page.',
			},
			{ type: 'heading', text: 'Impact' },
			{
				type: 'stats',
				items: [
					{ value: '~31%', label: 'Of app users visit the brand overview' },
					{ value: '~97.5%', label: 'Of visitors return' },
					{ value: '~8.6s', label: 'Median time on page' },
				],
			},
			{
				type: 'text',
				text: 'Users were able to quickly see how their brand was performing and take next step actions.',
			},
			{
				type: 'image',
				src: 'evertune-brand-overview/01',
				alt: 'The Evertune brand overview page (placeholder).',
				caption: 'Placeholder: the brand overview page.',
			},
		],
	},
];
