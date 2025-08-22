import Detached from "./detached.svg";
import s from "./header.module.css";

const Header = () => {
	return (
		<div className={s.header}>
			<Detached className={s.graphic} />
			<h1 className={s.headerText}>
				Professional <br />
				Software <br />
				Engineer
			</h1>
		</div>
	);
};

export { Header };
