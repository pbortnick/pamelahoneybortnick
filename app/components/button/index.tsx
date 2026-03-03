import Link from "next/link";
import { ArrowUpRightIcon } from "@phosphor-icons/react/ssr";
import s from "./button.module.css";

interface ButtonLinkProps {
	text: string;
	href: string;
	opensNewTab?: boolean;
	theme?: "primary" | "light";
}

const ButtonLink = ({
	text,
	href,
	opensNewTab,
	theme = "primary",
}: ButtonLinkProps) => (
	<Link
		href={href}
		className={s.buttonLink}
		target={opensNewTab ? "_blank" : undefined}
		style={{
			["--color" as string]:
				theme === "primary" ? "var(--secondary)" : "var(--primary)",
			["--background" as string]:
				theme === "primary" ? "var(--primary)" : "var(--secondary-light)",
		}}
	>
		<div className={s.content}>
			{text}
			{opensNewTab && <ArrowUpRightIcon color="var(--primary)" size={12} />}
		</div>
	</Link>
);

export { ButtonLink };
