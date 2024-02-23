import { Link } from "@nextui-org/link";
import { NavOptions, OptionsButton } from "./NavbarActions";
import {
	Session,
	createServerComponentClient,
} from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import { Usuario } from "@/types/local";
import { links } from "@/types/links";

/**
 * Navigation Bar
 * No hace faltan muchas más explicaciones.
 *
 * AccessButtons son los enlaces a login y signup. Disponibles solo sin sesión.
 * Options son el enlace a account y el boton de logout. Disponibles solo con sesión.
 */

export default async function Navbar({ session }: { session: Session | null }) {
	let usuario: Usuario | null = null;
	const supabase = createServerComponentClient({ cookies });

	if (session) {
		const { data } = await supabase.rpc("get_full_user");
		usuario = data;
	}

	return (
		<nav className="bg-fondo w-full flex justify-center mb-4 shadow-md">
			<div className="flex grow max-w-7xl justify-between mx-8 items-center">
				<div className="left-0 flex gap-10 items-center">
					<Link
						href="/"
						id="home"
						title="Pagina principal"
						isBlock
						color="foreground"
						className="w-40 h-20 bg-logo bg-contain bg-no-repeat bg-center"
					/>
					<div className="hidden md:flex md:gap-10">
						<Link
							href={links.about}
							id="about"
							isBlock
							color="foreground"
						>
							Sobre nosotros
						</Link>
						<Link
							href={links.enterprise}
							id="enterprise"
							isBlock
							color="foreground"
						>
							Para empresas
						</Link>
						{session && (
							<Link
								href={links.lessons}
								id="content"
								className="decoration-azul"
								isBlock
								color="foreground"
							>
								Lecciones
							</Link>
						)}
						{session && (
							<Link
								href={links.practice}
								id="practice"
								className="decoration-naranja"
								isBlock
								color="foreground"
							>
								Practica
							</Link>
						)}
					</div>
				</div>
				<div className="right-0">
					{!session && <AccessButtons />}
					{session ? (
						<OptionsButton usuario={usuario} />
					) : (
						<NavOptions />
					)}
				</div>
			</div>
		</nav>
	);
}

export function AccessButtons() {
	return (
		<div className="hidden md:flex gap-6 items-center">
			<Link href={links.signup} id="signup" isBlock color="foreground">
				Crear cuenta
			</Link>
			<Link href={links.login} id="login" isBlock color="foreground">
				Iniciar sesión
			</Link>
		</div>
	);
}
