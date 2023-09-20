
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs"
import { IconArrowLeft, IconArrowRight } from "@tabler/icons-react"
import { cookies } from "next/headers"
import Link from "next/link"

const titulos = {
    basico: "Nivel Basico",
    intermedio: "Nivel Intermedio",
    avanzado: "Nivel Avanzado",
    empresas: "LSM Orientado a Empresas"
}

export default async function LessonLayout({ 
    children, 
    params
}: { 
    children: React.ReactNode,
    params: { lesson: string[] }
}) {
    const supabase = createServerComponentClient({ cookies })
    const { data } = await supabase.from("lecciones").select("*").eq("idLeccion", params.lesson[0]+"/"+params.lesson[1])

    return (
        <div className="flex shrink-0 flex-col gap-3 w-full">
            <div className="bg-white self-center px-4 py-1 rounded-full w-fit shadow-md">
                <b>Lecciones / {titulos[params.lesson[0] as keyof typeof titulos]} / {data ? data[0].titulo : params.lesson[1]}</b>
            </div>
            <div className="flex gap-4 justify-between items-center mx-10">
                <Link href={"/"} 
                className="bg-white px-4 py-1 rounded-full w-fit flex gap-2 shadow-md items-center">
                    <IconArrowLeft/>Anterior
                </Link>
                <Link href={"/"} 
                className="bg-white px-4 py-1 rounded-full w-fit flex gap-2 shadow-md items-center">
                    Siguiente<IconArrowRight/>
                </Link>
            </div>
            <main className="bg-white w-full p-4 rounded-2xl shadow-md">
                { children }
            </main>
        </div>
    )
}