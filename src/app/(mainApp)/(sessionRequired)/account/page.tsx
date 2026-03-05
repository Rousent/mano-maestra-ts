
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import { Secciones } from "./tabs";
import { Usuario } from "@/types/local";

export default async function Account() {

    /* const supabase = createServerComponentClient({ cookies })
    const { data } = await supabase.rpc("get_full_user") */
    const defaultUser: Usuario = {
        id: 1,
        nombres: "John",
        apellido_paterno: "Doe",
        apellido_materno: "Dum",
        email: "name@mail.com",
        idRol: 2,
        rol: "Estudiante",
        nivel: "Basico",
        valor_nivel: 1,
    }

    return (
        <div className="w-full flex flex-col items-center">
            <Secciones usuario={defaultUser}/>
        </div>
    )
}