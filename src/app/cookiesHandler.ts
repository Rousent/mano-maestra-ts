"use server"
import { cookies } from "next/headers"

const lecciones = [
        "basico-0",
        "basico-1",
        "basico-2",
        "basico-3",
        "basico-4",
        "basico-5",
        "basico-6",
        "basico-7",
    ]

export async function checkSession() {
    return cookies().has("session");
}

export async function setSession() {
    cookies().set("session", "true");
}

export async function deleteSession() {
    cookies().delete("session")
}

export async function getLeccion(leccion: string) {
    return cookies().get(leccion)
}

export async function setLeccionCompletada(leccion: string) {
    cookies().set(leccion, "true");
}

export async function clearLecciones() {
    lecciones.forEach(leccion => {
        cookies().set(leccion, "false");
    })
}