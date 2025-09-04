import s from "./experience-page.module.css";

const ExperiencePage = () => {
	return (
		<div className={s.page}>
			<div className={s.experience}>
				<h1 className={s.title}>Pamela Bortnick&apos;s Experience</h1>
				<ul>
					{items.length ? (
						items.map(
							({ company, role, duration, descriptionItems }, index) => (
								<li key={index} className={s.experienceItem}>
									<div className={s.header}>
										<h2 className={s.company}>{company}</h2>
										<h3 className={s.role}>{role}</h3>
										<h4 className={s.duration}>{duration}</h4>
									</div>
									<ul className={s.descriptionList}>
										{descriptionItems.map((desc, descIndex) => (
											<li key={descIndex} className={s.descriptionItem}>
												{desc}
											</li>
										))}
									</ul>
								</li>
							)
						)
					) : (
						<p>Coming soon</p>
					)}
				</ul>
			</div>
		</div>
	);
};

const items: Array<{
	company: string;
	role: string;
	duration: string;
	descriptionItems: string[];
}> = [];

export default ExperiencePage;
