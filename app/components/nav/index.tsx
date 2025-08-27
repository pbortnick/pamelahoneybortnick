import Link from "next/link";
import s from "./nav.module.css";
import { ButtonLink } from "../button";

const Nav = () => {
	return (
		<div className={s.header}>
			<nav className={s.nav}>
				<Link href="/" className={s.link}>
					<i>Pamela</i> Bortnick
				</Link>
				<ButtonLink
					href="mailto:pbortnick@gmail.com"
					text="Contact me"
					opensNewTab
				/>
			</nav>
		</div>
	);
};

export { Nav };
