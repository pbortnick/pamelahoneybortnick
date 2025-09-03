import Link from "next/link";
import { NavigationMenu } from "radix-ui";
import { ArrowUpRightIcon, CaretDownIcon } from "@phosphor-icons/react/ssr";
import s from "./nav.module.css";

const Nav = () => {
	return (
		<div className={s.header}>
			<NavigationMenu.Root className={s.nav}>
				<Link href="/" className={s.link}>
					<i>Pamela</i> Bortnick
				</Link>
				<NavigationMenu.List className={s.navList}>
					<NavigationMenu.Item className={s.desktop}>
						<NavigationMenu.Link href="/resume" className={s.link}>
							Resume
						</NavigationMenu.Link>
					</NavigationMenu.Item>
					<NavigationMenu.Item className={s.desktop}>
						<NavigationMenu.Link href="/illustrations" className={s.link}>
							Illustrations
						</NavigationMenu.Link>
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
							<NavigationMenu.Link href="/resume" className={s.link}>
								Resume
							</NavigationMenu.Link>
							<NavigationMenu.Link href="/illustrations" className={s.link}>
								Illustrations
							</NavigationMenu.Link>
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
						</NavigationMenu.Content>
					</NavigationMenu.Item>
				</NavigationMenu.List>
			</NavigationMenu.Root>
		</div>
	);
};

export { Nav };
