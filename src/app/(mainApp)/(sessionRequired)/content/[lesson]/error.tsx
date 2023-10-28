"use client"

import { IconMoodSadDizzy } from "@tabler/icons-react"
import { usePathname } from "next/navigation"

export default function Error() {
    const pathname = usePathname()
    return (
        <div className="flex flex-col sm:flex-row justify-center md:gap-8 sm:gap-4 w-full items-center">
            <IconMoodSadDizzy className="md:w-40 md:h-40 w-20 h-20"/>
            <span className="md:text-3xl text-xl text-center">
                Ups... La pagina que buscas no existe:<br></br>
                <b>{pathname}</b>
            </span>
        </div>
    )
}