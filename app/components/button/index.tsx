import { ArrowUpRightIcon } from "@phosphor-icons/react/ssr";
import s from "./button.module.css";

interface ButtonLinkProps {
	text: string;
	href: string;
	opensNewTab?: boolean;
}

const ButtonLink = ({ text, href, opensNewTab }: ButtonLinkProps) => (
	<a
		href={href}
		className={s.buttonLink}
		target={opensNewTab ? "_blank" : undefined}
	>
		{text}
		{opensNewTab && <ArrowUpRightIcon color="var(--primary)" size={12} />}
	</a>
);

export { ButtonLink };
