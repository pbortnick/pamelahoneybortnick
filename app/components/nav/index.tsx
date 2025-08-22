import Link from "next/link";
import s from "./nav.module.css";

const Nav = () => {
	return (
		<header className={s.header}>
			<nav className={s.nav}>
				<Link href="/" className={s.link}>
					<i>Pamela Bortnick</i>
				</Link>
			</nav>
		</header>
	);
};

export { Nav };
