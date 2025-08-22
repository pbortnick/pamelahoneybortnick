import { ArrowSquareOutIcon } from "@phosphor-icons/react/ssr";
import s from "./contact.module.css";

const Contact = () => {
	return (
		<div className={s.contact}>
			<a className={s.email} href="mailto:pbortnick@gmail.com">
				<div className={s.header}>
					<h2 className={s.heading}>Contact Me</h2>
					<ArrowSquareOutIcon color="var(--primary)" size={24} />
				</div>
				<p>
					If you have any questions or would like to get in touch, feel free to
					reach out!
				</p>
			</a>
			<div className={s.socials}>
				<a
					href="https://github.com/pbortnick"
					target="__blank"
					rel="noopener noreferrer"
				>
					GitHub
				</a>
				<a
					href="https://www.linkedin.com/in/pamelahoneybortnick/"
					target="__blank"
					rel="noopener noreferrer"
				>
					LinkedIn
				</a>
			</div>
		</div>
	);
};

export { Contact };
