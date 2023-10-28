
import { Leccion } from "@/types/local"
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs"
import { IconArrowLeft, IconArrowRight } from "@tabler/icons-react"
import { cookies } from "next/headers"
import Link from "next/link"
import { paginas } from "@/content/paginas"

const titulos = {
    basico: ["Nivel Basico", 1],
    intermedio: ["Nivel Intermedio", 2],
    avanzado: ["Nivel Avanzado", 3],
    empresas: ["LSM Orientado a Empresas", 4]
}

export default async function LessonPage({ 
    params,
}: { 
    params: { lesson: string },
}) {
    const lesson = params.lesson.split("-")
    const supabase = createServerComponentClient({ cookies })
    const lecciones = await supabase.from("lecciones").select("*").eq("idNivel", titulos[lesson[0] as keyof typeof titulos][1])
    const actual: Leccion = lecciones.data?.find((leccion: Leccion) => leccion.idLeccion == params.lesson)

    const hasPrevious = parseInt(lesson[1]) > 1
    const hasNext = lecciones.data && parseInt(lesson[1]) < lecciones.data?.length

    return (
        <div className="flex shrink-0 flex-col gap-3 w-full">
            <div className="bg-white self-center px-4 py-1 rounded-full w-fit shadow-md">
                <b>Lecciones 
                    / {titulos[lesson[0] as keyof typeof titulos][0]} 
                    / {actual.titulo}
                </b>
            </div>
            <div className="flex gap-4 justify-between items-center mx-10">
                <Link href={(hasPrevious) ? "/content/"+lesson[0]+"-"+(parseInt(lesson[1])-1) : "/content" } 
                className="bg-white px-4 py-1 rounded-full w-fit flex gap-2 shadow-md items-center">
                    <IconArrowLeft/> Anterior
                </Link>
                <Link href={(hasNext) ? "/content"+lesson[0]+"-"+(parseInt(lesson[1])+1) : "/content" } 
                className="bg-white px-4 py-1 rounded-full w-fit flex gap-2 shadow-md items-center">
                    Siguiente <IconArrowRight/>
                </Link>
            </div>
            <main className="bg-white w-full px-20 py-6 rounded-2xl shadow-md">
                { paginas[actual.idLeccion] }
            </main>
        </div>
    )
}