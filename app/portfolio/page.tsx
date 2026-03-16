import s from "./portfolio-page.module.css";

const PortfolioPage = () => {
	return (
		<div className={s.page}>
			<div className={s.titleSection}>
				<h1 className={s.title}>Pamela&apos;s Portfolio</h1>
			</div>
			{projects.map(({ name, category, year, description, tech }, index) => (
				<div className={s.projectCard} key={index}>
					<div className={s.cardHeader}>
						<div className={s.meta}>
							<span className={s.category}>{category}</span>
							<span className={s.year}>{year}</span>
						</div>
						<h2 className={s.projectName}>{name}</h2>
					</div>
					<p className={s.description}>{description}</p>
					<ul className={s.techList}>
						{tech.map((t) => (
							<li className={s.techTag} key={t}>
								{t}
							</li>
						))}
					</ul>
				</div>
			))}
		</div>
	);
};

const projects: Array<{
	name: string;
	category: string;
	year: string;
	description: string;
	tech: string[];
}> = [
	{
		name: "HashiCorp.com",
		category: "Web Development",
		year: "2021 – Present",
		description:
			"Built and maintained the enterprise marketing website serving millions of monthly visitors. Delivered a faceted search experience with Algolia, internationalization for a global audience, and a Storybook design system to ensure brand consistency across products.",
		tech: ["Next.js", "TypeScript", "CSS Modules", "GraphQL", "Algolia", "Storybook", "i18n"],
	},
	{
		name: "Hana / Industrious",
		category: "Web Development",
		year: "2020",
		description:
			"Replaced a legacy marketing site with a Gatsby-powered architecture, significantly improving page performance. Worked closely with the design team to deliver a pixel-perfect implementation from Figma, integrating Contentful CMS and Hubspot CRM for content and marketing operations.",
		tech: ["Gatsby", "React", "Contentful", "Hubspot", "CSS"],
	},
	{
		name: "LG Fairmont Platform",
		category: "Full Stack",
		year: "2018 – 2019",
		description:
			"Designed and developed a consumer-facing website, rebuilt APIs from scratch using Node.js with MongoDB, and created a multifunction CMS and real estate data platform powered by ElasticSearch. Incorporated analytics and market research tools to drive data-informed product decisions.",
		tech: ["React", "Redux", "Node.js", "MongoDB", "ElasticSearch"],
	},
	{
		name: "React Native Mobile Apps",
		category: "Mobile Development",
		year: "2020 – 2021",
		description:
			"Built iOS and Android applications for multiple freelance clients. Apps featured user authentication, video playback, real-time text communications, and push notifications — developed in close collaboration with existing product teams.",
		tech: ["React Native", "iOS", "Android", "TypeScript"],
	},
	{
		name: "HashiCorp Design System",
		category: "Design Engineering",
		year: "2022 – Present",
		description:
			"Created and maintained a component library and design system at HashiCorp to improve developer experience and enforce consistent brand integration across web properties. Documented components and usage guidelines to support cross-team adoption.",
		tech: ["Storybook", "React", "TypeScript", "CSS Modules"],
	},
];

export default PortfolioPage;
