
import Lessons, { LevelUp } from "@/components/LessonsList"
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs"
import { cookies } from "next/headers"

export default async function Indice() {

    
    const supabase = createServerComponentClient({ cookies })
    const { data } = await supabase.rpc("get_full_user")

    const lecciones = await supabase.rpc("get_lessons")

    const basico = lecciones.data["Nivel Basico"]
    const intermedio = lecciones.data["Nivel Intermedio"]
    const avanzado = lecciones.data["Nivel Avanzado"]
    const empresas = lecciones.data["LSM Orientado a Empresas"]

    // Obtener porcentaje de completado por cada nivel
    let porcentajes = { basico: -1, intermedio: -1, avanzado: -1, empresas: -1 }
    if (data.valorNivel >= 1 && basico){
        porcentajes.basico = (basico.filter((leccion: { completado: boolean }) => leccion.completado == true).length*100) / basico.length
    }
    if (data.valorNivel >= 2 && intermedio){
        porcentajes.intermedio = (intermedio.filter((leccion: { completado: boolean }) => leccion.completado == true).length*100) / intermedio.length
    }
    if (data.valorNivel >= 3 && avanzado){
        porcentajes.avanzado = (avanzado.filter((leccion: { completado: boolean }) => leccion.completado == true).length*100) / avanzado.length
    }
    if (data.valorNivel >= 1 && empresas){
        porcentajes.empresas = (empresas.filter((leccion: { completado: boolean }) => leccion.completado == true).length*100) / empresas.length
    }

    let subir = false
    switch (data.valorNivel) {
        case 1:
            if (porcentajes.basico == 100) {
                subir = true
            }
            break;
        case 2:
            if (porcentajes.intermedio == 100) {
                subir = true
            }
            break;
    }

    return (
        <div className="w-full flex flex-col gap-3 items-center">
            <div className="w-full flex flex-col gap-2 text-center">
                <h2>Lecciones</h2>
                <span className="text-xl">
                    Aprende sobre el lenguaje de señas
                </span>
            </div>
            <span>Mi progreso: { data.nivel }</span>
            { subir && <LevelUp idUsuario={data.idUsuario} nivel={data.valorNivel}/>}
            <Lessons
                basico={basico} 
                intermedio={intermedio} 
                avanzado={avanzado} 
                empresas={empresas} 
                porcentajes={porcentajes} 
                nivelActual={data.valorNivel}
            />
        </div>
    )
}