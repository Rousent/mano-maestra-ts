
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import { Secciones } from "./tabs";

export default async function Account() {

    const supabase = createServerComponentClient({ cookies })
    const { data } = await supabase.rpc("get_full_user")

    return (
        <div className="w-full flex flex-col items-center">
            <Secciones usuario={data}/>
        </div>
    )
}