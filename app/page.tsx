import { Bio } from "./components/bio";
import { Contact } from "./components/contact";
import { Featured } from "./components/featured";
import { Header } from "./components/header";
import { Profile } from "./components/profile";
import s from "./page.module.css";

export default function Home() {
	return (
		<div className={s.page}>
			<div className={s.header}>
				<Header />
			</div>
			<div className={s.profile}>
				<Profile />
			</div>
			<div className={s.contact}>
				<Contact />
			</div>
			<div className={s.bio}>
				<Bio />
			</div>
			<div className={s.featured}>
				<Featured />
			</div>
		</div>
	);
}
