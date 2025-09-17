import s from "./bio.module.css";

const Bio = () => {
	return (
		<div className={s.bio}>
			<p className={s.bioText}>
				Pamela Bortnick is a full stack software engineer with over 9 years of
				experience. Using her skills in JavaScript, TypeScript, Next.js, CSS,
				GraphQL, and more, she builds performant, accessible, and user-friendly
				web applications.
			</p>
			<p className={s.bioText}>
				Pamela loves to learn and pick up new hobbies and skills. She spends her
				free time reading, playing NYT games, seeing live music, and
				hanging out with her 1 year old beagle named Rummi.
			</p>
		</div>
	);
};

export { Bio };
