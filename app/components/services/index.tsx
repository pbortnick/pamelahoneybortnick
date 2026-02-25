import { ArrowRightIcon } from "@phosphor-icons/react/ssr";
import s from "./services.module.css";

const Services = () => {
	return (
		<div className={s.services}>
			<div className={s.content}>
				<h2 className={s.heading}>Services</h2>
				<p>
					I am available for freelance work in the following areas. Visit the{" "}
					<a href="/services">services page</a> to learn more about each item.
				</p>
				<ul className={s.list}>
					<li>Website building</li>
					<li>Website enhancement</li>
					<li>SEO optimization</li>
				</ul>
			</div>
			<div className={s.footer}>
				<a href="/services">Learn more</a>
				<ArrowRightIcon size={16} />
			</div>
		</div>
	);
};

export { Services };
