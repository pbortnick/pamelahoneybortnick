import s from "./experience-page.module.css";

const ExperiencePage = () => {
	return (
		<div className={s.page}>
			<h1 className={s.title}>Pamela&apos;s Experience</h1>
			{items.length ? (
				items.map(({ company, roles, descriptionItems }, index) => (
					<div key={index} className={s.experienceItem}>
						<div className={s.header}>
							<h2 className={s.company}>{company}</h2>
							{roles.map(({ name, duration }, roleIndex) => (
								<p className={s.role} key={roleIndex}>
									{name} | <i>{duration}</i>
								</p>
							))}
						</div>
						{descriptionItems && (
							<ul className={s.descriptionList}>
								{descriptionItems.map((desc, descIndex) => (
									<li key={descIndex} className={s.descriptionItem}>
										{desc}
									</li>
								))}
							</ul>
						)}
					</div>
				))
			) : (
				<p>Coming soon</p>
			)}
		</div>
	);
};

const items: Array<{
	company: string;
	roles: { name: string; duration: string }[];
	descriptionItems?: string[];
}> = [
	{
		company: "HashiCorp",
		roles: [
			{
				name: "Sr. Web Engineer I",
				duration: "Nov 2024 - Present",
			},
			{
				name: "Web Engineer II",
				duration: "May 2023 - Nov 2024",
			},
			{
				name: "Web Engineer I",
				duration: "Aug 2021 - May 2023",
			},
		],
		descriptionItems: [
			"Built and maintained the HashiCorp website using Next.js, TypeScript, and CSS modules.",
			"Configured and managed the CMS to provide a seamless content editing experience and optimized content delivery using GraphQL.",
			"Improved developer experience and brand integration by creating and maintaining a design system using Storybook.",
			"Built a faceted search experience using Algolia to help users find relevant content quickly and easily.",
			"Implemented internationalization (i18n) to support multiple languages and improve accessibility for a global audience.",
		],
	},
	{
		company: "Self Employed",
		roles: [
			{
				name: "Freelance Software Engineer",
				duration: "Nov 2020 - Jul 2021",
			},
		],
		descriptionItems: [
			"Built iOS and Android apps using React Native for various clients. These apps supported features such as user authentication, video playback, text communications, and push notifications.",
			"Collaborated with existing teams to help enhance design and performance of their current product",
		],
	},
	{
		company: "Hana (now Industrious)",
		roles: [
			{
				name: "Software Engineer",
				duration: "Feb 2020 - Oct 2020",
			},
		],
		descriptionItems: [
			"Replaced previous marketing site with Gatsby architecture which increased page performance.",
			"Worked closely with Design team to deliver a picture-perfect website according to Figma UI.",
			"Used technologies such as Contentful CMS and Hubspot CRM to maintain site content.,",
		],
	},
	{
		company: "LG Fairmont",
		roles: [
			{
				name: "Software Engineer",
				duration: "Apr 2018 - Oct 2019",
			},
		],
		descriptionItems: [
			"Designed and developed consumer site using React/Redux",
			"Reconfigured data and developed completely new APIs using Node.js with MongoDB ",
			"Created a multifunction Content Management System and Real Estate data platform using ElasticSearch and data ,analysis/organization",
			"Made decisions based on needs of users, market research, and monitoring/analytics tools",
		],
	},
];

export default ExperiencePage;
