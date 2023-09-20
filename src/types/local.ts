import { UUID } from "crypto";

export type Usuario = {
    id: UUID,
    nombres: string,
    apellidoPaterno: string,
    apellidoMaterno: string,
    email: string,
    idRol: number,
    rol: string,
    valorNivel?: number,
    nivel?: string
}

export type Leccion = {
    idLeccion: number,
    titulo: string,
    completado: boolean
}