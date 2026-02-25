import { Bio } from "./components/bio";
import { Contact } from "./components/contact";
import { LinkBox } from "./components/link-box";
import { Header } from "./components/header";
import { Profile } from "./components/profile";
import { Services } from "./components/services";
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
				<Services />
			</div>
			<div className={s.links}>
				<LinkBox title="Experience" url="/experience" theme="secondary-light" />
				<Contact />
			</div>
			<div className={s.bio}>
				<Bio />
			</div>
		</div>
	);
}
