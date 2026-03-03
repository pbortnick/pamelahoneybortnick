import s from "./services-page.module.css";

const ServicesPage = () => {
	return (
		<div className={s.page}>
			<div className={s.titleSection}>
				<h1 className={s.title}>Pamela&apos;s Services</h1>
			</div>
			{services.map(({ heading, description }, index) => (
				<div className={s.serviceSection} key={index}>
					<h2 className={s.heading}>{heading}</h2>
					<p className={s.description}>{description}</p>
				</div>
			))}
		</div>
	);
};

const services = [
	{
		heading: "Custom Website Development",
		description:
			"Get a tailor-made website built with modern technologies for speed, responsiveness, and a unique visual identity that reflects your brand.",
	},
	{
		heading: "Website Optimization & Enhancement",
		description:
			"Boost your existing site with new features, improved performance, SEO best practices, and a refreshed design to maximize engagement and results.",
	},
	{
		heading: "Mobile App Solutions",
		description:
			"Receive expertly crafted mobile apps for iOS and Android, focused on seamless user experience and reliability to help your business grow.",
	},
	{
		heading: "E-Commerce Solutions",
		description:
			"Transform your online store with a complete e-commerce solution, including product management, payment processing, and user-friendly design.",
	},
	{
		heading: "Graphic Design",
		description:
			"Let me turn your images into stunning visuals that captivate your audience and elevate your brand, whether for web, print, or social media.",
	},
];

export default ServicesPage;
