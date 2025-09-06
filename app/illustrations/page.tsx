import { Fragment } from "react";
import Image from "next/image";
import s from "./illustrations-page.module.css";

const IllustrationsPage = () => {
	return (
		<div className={s.page}>
			<div className={s.header}>
				<h1 className={s.headerTitle}>Pamela&apos;s Illustrations</h1>
			</div>
			{illustrations.map(({ collection, images }, idx) => (
				<Fragment key={idx}>
					<div className={s.illustrationHeader}>
						<h2 className={s.collection}>Collection</h2>
						<h3>{collection}</h3>
					</div>
					{images.map(({ caption, ...image }) => (
						<figure className={s.figure} key={caption}>
							<Image
								{...image}
								className={s.image}
								alt={`${caption} illustration`}
							/>
							<figcaption className={s.caption}>{caption}</figcaption>
						</figure>
					))}
				</Fragment>
			))}
		</div>
	);
};

const illustrations: Array<{
	collection: string;
	description?: string;
	images: Array<{
		src: string;
		alt: string;
		caption: string;
		width: number;
		height: number;
	}>;
}> = [
	{
		collection: "Frank Lloyd Wright Works",
		images: [
			{
				src: "/illustrations/flw/robie.png",
				alt: "Frederick C. Robie House",
				caption: "Frederick C. Robie House",
				width: 600,
				height: 353,
			},
			{
				src: "/illustrations/flw/kentuck_knob.png",
				alt: "Kentuck Knob",
				caption: "Kentuck Knob",
				width: 600,
				height: 289,
			},
			{
				src: "/illustrations/flw/hollyhock.png",
				alt: "Hollyhock House",
				caption: "Hollyhock House",
				width: 600,
				height: 201,
			},
			{
				src: "/illustrations/flw/penfield.png",
				alt: "The Louis Penfield House",
				caption: "The Louis Penfield House",
				width: 600,
				height: 200,
			},
			{
				src: "/illustrations/flw/rosenbaum.png",
				alt: "Rosenbaum House",
				caption: "Rosenbaum House",
				width: 600,
				height: 172,
			},
			{
				src: "/illustrations/flw/taliesin.png",
				alt: "Taliesin West",
				caption: "Taliesin West",
				width: 600,
				height: 169,
			},
			{
				src: "/illustrations/flw/wright.png",
				alt: "David & Gladys Wright House",
				caption: "David & Gladys Wright House",
				width: 904,
				height: 257,
			},
			{
				src: "/illustrations/flw/thomas.png",
				alt: "Dana-Thomas House",
				caption: "Dana-Thomas House",
				width: 904,
				height: 257,
			},
		],
	},
];

export default IllustrationsPage;
