import "@/app/globals.css"; //Estilos de tailwind
import { Roboto, Poppins } from "next/font/google";
import { Providers } from "./providers";
import { cookies } from "next/headers";

import type { Metadata } from "next";
import { clearLecciones } from "./cookiesHandler";

export const metadata: Metadata = {
	title: "Mano Maestra",
	description: "Proyecto Mano Maestra Anfeca 2024",
};

/**
 * Root Layout
 * El layout más profundo de todo el sistema.
 * Utilizar para providers, estilos css, etc.
 */

const poppins = Poppins({
	weight: ["100", "300", "400", "500", "700", "900"],
	style: ["normal", "italic"],
	subsets: ["latin"],
	display: "swap",
});

if (!cookies().has("session")) clearLecciones();

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html className={poppins.className}>
			<body>
				<Providers>{children}</Providers>
			</body>
		</html>
	);
}
