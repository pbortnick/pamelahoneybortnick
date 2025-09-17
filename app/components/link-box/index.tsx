import classNames from "classnames";
import { ArrowUpRightIcon } from "@phosphor-icons/react/ssr";
import type { ReactNode } from "react";
import s from "./link-box.module.css";
interface LinkBoxProps {
	title: string;
	url: string;
	theme?: Theme;
	graphic?: ReactNode;
}

const LinkBox = ({ title, url, graphic, theme = "primary" }: LinkBoxProps) => {
	return (
		<a className={classNames(s.linkBox, theme)} href={url}>
			{graphic && <div className={s.graphic}>{graphic}</div>}
			<div className={s.content}>
				<h2 className={s.heading}>{title}</h2>
				<ArrowUpRightIcon size={24} />
			</div>
		</a>
	);
};

export { LinkBox };
