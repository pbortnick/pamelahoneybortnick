import Link from "next/link";
import s from "./nav.module.css";

const Nav = () => {
	return (
		<div className={s.header}>
			<nav className={s.nav}>
				<Link href="/" className={s.link}>
					<i>Pamela Bortnick</i>
				</Link>
			</nav>
		</div>
	);
};

export { Nav };
