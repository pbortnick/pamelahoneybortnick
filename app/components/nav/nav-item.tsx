"use client";

import { usePathname } from "next/navigation";
import { NavigationMenu } from "radix-ui";
import type { ReactNode } from "react";
import s from "./nav.module.css";
import classNames from "classnames";

const NavItem = ({ href, children }: { href: string; children: ReactNode }) => {
	const pathname = usePathname();
	const isActive = pathname === href;

	return (
		<NavigationMenu.Link
			href={href}
			className={classNames(s.link, isActive && s.active)}
		>
			{children}
		</NavigationMenu.Link>
	);
};

export { NavItem };
