import { Nav } from "./components/nav";
import { Anonymous_Pro } from "next/font/google";
import type { Metadata } from "next";
import "./globals.css";
import { Footer } from "./components/footer";

const anonymousPro = Anonymous_Pro({
	weight: ["400", "700"],
	subsets: ["latin"],
	variable: "--font-anonymous-pro",
});

export const metadata: Metadata = {
	title: "Pamela Honey Bortnick",
	description:
		"Pamela Bortnick is a full stack software engineer with over 9 years of experience. She provides excellence in web presence. She also dabbles in design. Pamela loves to learn and pick up new hobbies and skills. She spends her free time seeing live music and playing with her adorable little beagle named Rummi",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body className={anonymousPro.variable}>
				<Nav />
				{children}
				<div className="footer">
					<Footer />
				</div>
			</body>
		</html>
	);
}
