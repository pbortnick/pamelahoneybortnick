import Image from "next/image";
import s from "./profile.module.css";

const Profile = () => {
	return (
		<div className={s.profile}>
			<Image
				src="/profile.png"
				alt="Profile Picture"
				width={1397}
				height={1422}
				className={s.profileImage}
				priority
			/>
		</div>
	);
};

export { Profile };
