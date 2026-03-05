

//import { createServerComponentClient } from "@supabase/auth-helpers-nextjs"
import { IconHome } from "@tabler/icons-react"
import { cookies } from "next/headers"
//import { cookies } from "next/headers"
import Link from "next/link"
import { redirect } from "next/navigation"

/**
 * FormsLayout
 * Layout de los formularios de acceso (crear cuenta y login).
 * Excluye la barra de navegación y cambia el fondo de las paginas.
 * Incluye botón para regresar a Home.
 */
export default async function FormsLayout({ 
    children 
}: { 
    children: React.ReactNode 
}) {

    // Redirigir a Home si ya hay sesión
    /* const supabase = createServerComponentClient({ cookies })
    const { data: { session } } = await supabase.auth.getSession() */
    if (cookies().has("session")) redirect("/")

    return (
        <div className="w-full h-full bg-sign-language bg-cover bg-center">
            <div className="w-full h-full backdrop-brightness-50 grid">
                <header className="mx-8 my-4 fixed">
                    <Link id="home" href="/">
                        <div className="bg-fondo inline-flex gap-3 p-4 rounded-lg items-center">
                            <IconHome className="w-6 h-6"/>
                            Pagina principal
                        </div>
                    </Link>
                </header>
                { children }
            </div>
        </div>
    )
}