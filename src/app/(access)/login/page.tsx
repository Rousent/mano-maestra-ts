"use client"

import { EyeFilledIcon, EyeSlashFilledIcon } from "@nextui-org/shared-icons"
import Link from "next/link"
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs"
import { Input, Button } from "@nextui-org/react"
import { FormEvent, useState } from "react"
import { IconKey, IconMail } from "@tabler/icons-react"
import { useRouter } from "next/navigation"

export default function Login() {

    const supabase = createClientComponentClient()

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [error, setError] = useState<string | null>()
    
    const [pwVisible, setPwVisible] = useState(false)

    const router = useRouter()

    const onSubmit = async (e: FormEvent) => {
        e.preventDefault()
        setError(null)
        const { error } = await supabase.auth.signInWithPassword({ email, password })
        if (error) {
            setError(error.message)
        } else {
            router.refresh()
        }
    }

    return (
        <form onSubmit={onSubmit} 
        className="w-1/4 min-w-fit h-fit flex flex-col grow gap-6 bg-fondo rounded-lg p-10 place-self-center justify-self-center">
            <span className="text-4xl font-semibold text-center">
                Iniciar Sesión
            </span>
            <div className="flex flex-col gap-2">
                <Input type="email" label="Correo electrónico" isRequired
                placeholder="Ej. name@mail.com"
                startContent={<IconMail/>}
                labelPlacement="inside" 
                onChange={e => setEmail(e.target.value)}
                />
                <Input type={pwVisible ? "text" : "password"}
                label="Contraseña" onChange={e => setPassword(e.target.value)}
                labelPlacement="inside" isRequired
                placeholder="*********"
                startContent={<IconKey/>}
                endContent={
                    <button type="button" className="w-6 h-6"
                    onClick={() => setPwVisible(!pwVisible)}>
                        { pwVisible 
                        ? 
                        (<EyeSlashFilledIcon className="w-6 h-6"/>) 
                        : 
                        (<EyeFilledIcon className="w-6 h-6"/>) 
                        }
                    </button>
                }
                />
                <Link className="text-right decoration-azul text-sm mr-4" href="/">Olvidé mi contraseña</Link>
            </div>
            { error ? <span className="text-red-800 text-center">{error}</span> : null }
            <Button type="submit" className="w-fit self-center">
                Continuar
            </Button>
        </form>
    )
}
