import { ArrowUpRightIcon } from "@phosphor-icons/react/ssr";
import s from "./link-box.module.css";

interface LinkBoxProps {
	title: string;
	url: string;
}

const LinkBox = ({ title, url }: LinkBoxProps) => {
	return (
		<a className={s.linkBox} href={url}>
			<h2 className={s.heading}>{title}</h2>
			<ArrowUpRightIcon color="var(--primary)" size={24} />
		</a>
	);
};

export { LinkBox };
