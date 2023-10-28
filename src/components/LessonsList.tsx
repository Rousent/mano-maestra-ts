"use client"

import { Leccion } from "@/types/local";
import { Accordion, AccordionItem, Button, Progress } from "@nextui-org/react";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import { IconPlayerPlayFilled, IconCircleCheckFilled } from "@tabler/icons-react"
import { UUID } from "crypto";
import Link from "next/link";
import { useRouter } from "next/navigation";

type Porcentajes = {
    basico: number, 
    intermedio: number, 
    avanzado: number, 
    empresas: number
}

export default function Lessons({ 
    basico,
    intermedio,
    avanzado,
    empresas,
    porcentajes,
    nivelActual
}: {
    basico: Leccion[] | null,
    intermedio: Leccion[] | null,
    avanzado: Leccion[] | null,
    empresas: Leccion[] | null,
    porcentajes: Porcentajes,
    nivelActual: number
}) {
    return (
        <Accordion className="md:w-[768px] w-full" defaultExpandedKeys={[nivelActual.toString()]}>
            <AccordionItem key="1" title="Nivel Basico">
                <Progress label="Progreso" className="mb-3" value={porcentajes.basico} showValueLabel isStriped/>
                <ul>
                    { (basico) 
                    ? basico.map(leccion => {
                        return <LessonLink leccion={leccion}/>
                    }) 
                    : <li key="none1" className="text-center">Ups, no hay nada que ver aqui...</li>
                    }
                </ul>
            </AccordionItem>
            <AccordionItem key="2" title="Nivel Intermedio">
                <Progress label="Progreso" className="mb-3" value={porcentajes.intermedio} showValueLabel isStriped/>
                <ul>
                    { (intermedio) 
                    ? intermedio.map(leccion => {
                        return <LessonLink leccion={leccion}/>
                    }) 
                    : <li key="none2" className="text-center">Ups, no hay nada que ver aqui...</li>
                    }
                </ul>
            </AccordionItem>
            <AccordionItem key="3" title="Nivel Avanzado">
                <Progress label="Progreso" className="mb-3" value={porcentajes.avanzado} showValueLabel isStriped/>
                <ul>
                    { (avanzado) 
                    ? avanzado.map(leccion => {
                        return <LessonLink leccion={leccion}/>
                    }) 
                    : <li key="none3" className="text-center">Ups, no hay nada que ver aqui...</li>
                    }
                </ul>
            </AccordionItem>
            <AccordionItem key="4" title="LSM Orientado a Empresas">
                <Progress label="Progreso" className="mb-3" value={porcentajes.empresas} showValueLabel isStriped/>
                <ul>
                    { (empresas) 
                        ? empresas.map(leccion => {
                            return <LessonLink leccion={leccion}/>
                        }) 
                        : <li key="none4" className="text-center">Ups, no hay nada que ver aqui...</li>
                    }
                </ul>
            </AccordionItem>
        </Accordion>
    )
}

function LessonLink({ leccion }: { leccion: Leccion }) {
    return (
        <li key={leccion.idLeccion} className="rounded-full bg-naranja pl-4 pr-1 py-1">
            <Link href={"/content/"+leccion.idLeccion} className="flex flex-row justify-between items-center">
                { leccion.titulo }
                { leccion.completado 
                    ? <IconCircleCheckFilled className="w-8 h-auto"/> 
                    : <IconPlayerPlayFilled className="w-5 h-auto"/> 
                }
            </Link>
        </li>
    )
}

export function LevelUp({ 
    idUsuario,
    nivel
}: { 
    idUsuario: UUID,
    nivel: number
}) {
    const supabase = createClientComponentClient()
    const router = useRouter()

    const handleClick = async () => {
        const { error } = await supabase.from("perfiles").update({ idNivel: (nivel + 1) }).eq("idUsuario", idUsuario)
        if (!error) {
            router.refresh()
        }
    }

    return <Button onClick={handleClick}>Subir de nivel</Button>
}