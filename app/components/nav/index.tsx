import { NavigationMenu } from "radix-ui";
import { ArrowUpRightIcon, CaretDownIcon } from "@phosphor-icons/react/ssr";
import { NavItem } from "./nav-item";
import s from "./nav.module.css";

const Nav = () => {
	return (
		<div className={s.header}>
			<NavigationMenu.Root className={s.nav}>
				<NavItem href="/">
					<i>Pamela</i> Bortnick
				</NavItem>
				<NavigationMenu.List className={s.navList}>
					<NavigationMenu.Item className={s.desktop}>
						<NavItem href="/experience">Experience</NavItem>
					</NavigationMenu.Item>
					<NavigationMenu.Item className={s.desktop}>
						<NavItem href="/illustrations">Illustrations</NavItem>
					</NavigationMenu.Item>
					<NavigationMenu.Item className={s.desktop}>
						<NavigationMenu.Link
							href="mailto:pbortnick@gmail.com"
							className={s.buttonLink}
							target="_blank"
						>
							<div className={s.buttonLinkContent}>
								Contact me
								<ArrowUpRightIcon color="var(--primary)" size={12} />
							</div>
						</NavigationMenu.Link>
					</NavigationMenu.Item>
					<NavigationMenu.Item className={s.mobile}>
						<NavigationMenu.Trigger
							className={s.mobileTrigger}
							aria-label="Menu"
						>
							Menu <CaretDownIcon aria-hidden />
						</NavigationMenu.Trigger>
						<NavigationMenu.Content className={s.mobileMenuContent}>
							<NavItem href="/experience">Experience</NavItem>
							<NavItem href="/illustrations">Illustrations</NavItem>
							<NavigationMenu.Link
								href="mailto:pbortnick@gmail.com"
								className={s.buttonLink}
							>
								<div className={s.buttonLinkContent}>
									Contact me
									<ArrowUpRightIcon color="var(--primary)" size={12} />
								</div>
							</NavigationMenu.Link>
						</NavigationMenu.Content>
					</NavigationMenu.Item>
				</NavigationMenu.List>
			</NavigationMenu.Root>
		</div>
	);
};

export { Nav };
