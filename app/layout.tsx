import React from "react";

import { ClerkProvider } from "@clerk/nextjs";

// eslint-disable-next-line camelcase
import { Inter, Space_Grotesk } from "next/font/google";

import type { Metadata } from "next";

import "./globals.css";
import Navbar from "@/components/shared/Navbar";
import Footer from "@/components/shared/Footer";

const inter = Inter({
	subsets: ["latin"],
	weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
	variable: "--font-inter",
});

const spaceGrotesk = Space_Grotesk({
	subsets: ["latin"],
	weight: ["300", "400", "500", "600", "700"],
	variable: "--font-spaceGrotesk",
});

export const metadata: Metadata = {
	title: "ImageEditor",
	description: "Image Editing Tool",
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en">
			<body className={`${inter.variable} ${spaceGrotesk.variable} `}>
				<ClerkProvider
					appearance={{
						elements: {
							formButtonPrimary: "primary-gradient",
							footerActionLink: "primary-text-gradient hover:text-primary-500",
						},
					}}
				>
					<Navbar />
					<main className="bg-black w-full min-h-screen">{children}</main>
					<Footer />
				</ClerkProvider>
			</body>
		</html>
	);
}
