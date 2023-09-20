
import "@/app/globals.css" //Estilos de tailwind
import { Roboto } from "next/font/google"
import { Providers } from "./providers";
import { cookies } from "next/headers";

/**
 * Root Layout
 * El layout más profundo de todo el sistema.
 * Utilizar para providers, estilos css, etc.
 */

const roboto = Roboto({
    weight: ['100', '300', '400', '500', '700', '900'],
    style: ['normal', 'italic'],
    subsets: ['latin'],
    display: 'swap',
  })

export default function RootLayout({ 
    children 
}: { 
    children: React.ReactNode 
}) {
    return (
        <html className={ roboto.className }>
            <body>
                <Providers>
                    { children }
                </Providers>
            </body>
        </html>
    )
}