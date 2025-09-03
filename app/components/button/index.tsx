import Link from "next/link";
import { ArrowUpRightIcon } from "@phosphor-icons/react/ssr";
import s from "./button.module.css";

interface ButtonLinkProps {
	text: string;
	href: string;
	opensNewTab?: boolean;
}

const ButtonLink = ({ text, href, opensNewTab }: ButtonLinkProps) => (
	<Link
		href={href}
		className={s.buttonLink}
		target={opensNewTab ? "_blank" : undefined}
	>
		<div className={s.content}>
			{text}
			{opensNewTab && <ArrowUpRightIcon color="var(--primary)" size={12} />}
		</div>
	</Link>
);

export { ButtonLink };
