import Image from "next/image";
import { ArrowUpRightIcon } from "@phosphor-icons/react/ssr";
import s from "./featured.module.css";

const Featured = () => {
	return (
		<a className={s.featured} href="/illustrations">
			<div className={s.header}>
				<h2 className={s.heading}>Illustrations</h2>
				<ArrowUpRightIcon color="var(--primary)" size={24} />
			</div>
			<div className={s.featuredImage}>
				<Image src="/featured.png" width={1600} height={534} alt="" />
			</div>
		</a>
	);
};

export { Featured };
