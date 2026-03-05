
//import { createServerComponentClient } from "@supabase/auth-helpers-nextjs"
import { checkSession } from "@/app/cookiesHandler"
import { cookies } from "next/headers"
import { redirect } from "next/navigation"

export default async function SessionLayout({ 
    children
}: { 
    children: React.ReactNode
}) {

    //const supabase = createServerComponentClient({ cookies })
    //const { data: { session } } = await supabase.auth.getSession()

    //const { data } = await supabase.rpc("get_full_user")
    const session = await checkSession();
    if (!session) redirect("/login")

    return (
        <>
        { children }
        </>
    )
}