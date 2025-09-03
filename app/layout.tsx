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
		"Pamela Bortnick is a full stack software engineer with over 9 years of experience. Using her skills in JavaScript, TypeScript, Next.js, CSS, GraphQL, and more, she builds performant, accessible, and user-friendly web applications.",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<meta
				name="description"
				content="Pamela Bortnick is a full stack software engineer with over 9 years of experience. Using her skills in JavaScript, TypeScript, Next.js, CSS, GraphQL, and more, she builds performant, accessible, and user-friendly web applications."
			/>
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
