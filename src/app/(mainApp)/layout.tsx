
import Navbar from "@/components/Navbar"
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs"
import { cookies } from "next/headers"
/**
 * Layout de las paginas principales.
 * Incluye el header con la barra de navegación 
 * y el footer de todas las paginas que aparecen en el sistema.
 */

export default async function MainAppLayout({ children }: { 
    children: React.ReactNode 
}) {

    const supabase = createServerComponentClient({ cookies })
    const { data: { session } } = await supabase.auth.getSession()

    return (
        <>
        <header>
            <Navbar session={session}/>
        </header>
        <div className="w-full flex justify-center">
            <div className="flex grow max-w-7xl justify-between mx-8">
                { children }
            </div>
        </div>
        </>
    )
}