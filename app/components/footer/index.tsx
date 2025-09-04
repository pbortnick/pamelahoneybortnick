import Image from "next/image";
import s from "./footer.module.css";

const Footer = () => {
	return (
		<div className={s.footer}>
			<Image
				src="/footer/rummi-1.png"
				width={1913}
				height={2629}
				alt=""
				// className={s.mobileHide}
			/>
			<Image
				src="/footer/rummi-2.png"
				width={1913}
				height={2629}
				alt=""
				className={s.mobileHide}
			/>
			<Image
				src="/footer/rummi-3.png"
				width={666}
				height={826}
				alt=""
				className={s.mobileHide}
			/>
			<Image
				src="/footer/rummi-4.png"
				width={2434}
				height={2513}
				alt=""
				className={s.mobileHide}
			/>
			<Image src="/footer/rummi-5.png" width={3024} height={4032} alt="" />
			<Image src="/footer/rummi-6.png" width={1097} height={2274} alt="" />
			<Image src="/footer/rummi-7.png" width={339} height={732} alt="" />
		</div>
	);
};

export { Footer };
