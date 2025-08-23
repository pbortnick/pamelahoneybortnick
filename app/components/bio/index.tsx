import s from "./bio.module.css";

const Bio = () => {
	return (
		<div className={s.bio}>
			<p className={s.bioText}>
				Pamela Bortnick is a full stack software engineer with over 9 years of
				experience. She’s passionate about delivering exceptional digital experiences and brings a sharp eye for detail, both in code and design.
			</p>
			<p className={s.bioText}>
				Pamela loves to learn and pick up new hobbies and skills. She spends her
				free time seeing live music and playing with her adorable little beagle
				named Rummi.
			</p>
		</div>
	);
};

export { Bio };
