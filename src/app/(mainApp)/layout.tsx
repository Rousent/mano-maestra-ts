import Navbar from "@/components/Navbar";
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
/**
 * Layout de las paginas principales.
 * Incluye el header con la barra de navegación
 * y el footer de todas las paginas que aparecen en el sistema.
 */

export default async function MainAppLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	const supabase = createServerComponentClient({ cookies });
	const {
		data: { session },
	} = await supabase.auth.getSession();

	return (
		<>
			<header className="sticky top-0 z-50 bg-fondo">
				<Navbar session={session} />
			</header>
			<div className="w-full flex justify-center">
				<div className="flex grow max-w-7xl justify-between mx-8">
					{children}
				</div>
			</div>
			<footer className="mt-6 w-full">
				<div className="bg-blackcolor flex flex-col justify-center items-center">
					<p className="text-whitecolor text-center">
						© 2024 Mano Maestra. Todos los derechos reservados.
					</p>
				</div>
			</footer>
		</>
	);
}
