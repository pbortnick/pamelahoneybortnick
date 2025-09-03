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
		"Pamela Bortnick is a full stack software engineer with over 9 years of experience.",
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
