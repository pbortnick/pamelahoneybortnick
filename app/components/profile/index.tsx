import Image from "next/image";
import s from "./profile.module.css";

const Profile = () => {
	return (
		<div className={s.profile}>
			<Image
				src={require("./profile.png")}
				alt="Profile Picture"
				width={325}
				height={305}
				className={s.profileImage}
			/>
		</div>
	);
};

export { Profile };
