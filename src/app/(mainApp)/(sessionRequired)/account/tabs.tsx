"use client"

import { Usuario } from "@/types/local";
import { Tabs, Tab, Divider, Button, Input } from "@nextui-org/react";
import { Card, CardHeader, CardBody, CardFooter } from "@nextui-org/react";
import { Chip } from "@nextui-org/react";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import { useRouter } from "next/navigation";
import PasswordField from "@/components/PasswordField";

import { FormEvent, useState } from "react"

export function Secciones({ 
    usuario 
}: {
    usuario: Usuario
}) {
    return (
        <Tabs>
            <Tab title="Datos">
                <Datos usuario={ usuario }/>
            </Tab>
            <Tab title="Modificar datos">
                <ModificarDatos usuario={ usuario }/>
            </Tab>
            <Tab title="Modificar contraseña">
                <ModificarContraseña/>
            </Tab>
        </Tabs>
    )
}

function Datos({ 
    usuario 
}: {
    usuario: Usuario
}) {
    return (
        <Card>
            <CardHeader className="flex flex-row justify-between">
                <h4>Datos</h4>
                <Chip>{ usuario.rol }</Chip>
            </CardHeader>
            <Divider/>
            <CardBody className="gap-2">
                <span>
                    <b>Nombre:</b> { usuario.nombres + " " + usuario.apellidoPaterno + " " + usuario.apellidoMaterno }
                </span>
                <span>
                    <b>Correo Electrónico:</b> { usuario.email }
                </span>
                <span>
                    <Chip>{ usuario.nivel }</Chip>
                </span>
            </CardBody>
        </Card>
    )
}

function ModificarDatos({ 
    usuario 
}: {
    usuario: Usuario
}) {

    const supabase = createClientComponentClient()
    const router = useRouter()

    const [nombres, setNombres] = useState(usuario.nombres)
    const [apellidoPaterno, setApellidoPaterno] = useState(usuario.apellidoPaterno)
    const [apellidoMaterno, setApellidoMaterno] = useState(usuario.apellidoMaterno)
    const [message, setMessage] = useState<React.ReactNode | null>(null)

    const onSubmit = async (e: FormEvent) => {
        e.preventDefault()
        setMessage(null)
        let cambios = {}
        if (nombres !== usuario.nombres) {
            Object.assign(cambios, {nombres})
        }
        if (apellidoPaterno !== usuario.apellidoPaterno) {
            Object.assign(cambios, {apellidoPaterno})
        }
        if (apellidoMaterno !== usuario.apellidoMaterno) {
            Object.assign(cambios, {apellidoMaterno})
        }
        if (Object.keys(cambios).length > 0) {
            const { error } = await supabase.from("perfiles").update(cambios).eq("idUsuario", usuario.id)
            if (error) {
                setMessage(<span>error.message</span>)
            } else {
                setMessage(<span>¡Datos guardados con exito!</span>)
                router.refresh()
            }
        } else {
            setMessage(<span>No hay cambios que realizar</span>)
        }
    }

    return (
        <form onSubmit={onSubmit}>
            <Card className="w-80">
                <CardHeader className="flex justify-center">
                    <h4>Modificar datos</h4>
                </CardHeader>
                <Divider/>
                <CardBody className="gap-2">
                    <Input label="Nombre(s)" isRequired
                    placeholder="Ej. Juan Carlos"
                    labelPlacement="inside" 
                    defaultValue={ usuario.nombres }
                    onChange={e => setNombres(e.target.value)}
                    />
                    <Input label="Apellido Paterno" isRequired
                    labelPlacement="inside" 
                    defaultValue={ usuario.apellidoPaterno }
                    onChange={e => setApellidoPaterno(e.target.value)}
                    />
                    <Input label="Apellido Materno" isRequired
                    labelPlacement="inside" 
                    defaultValue={ usuario.apellidoMaterno }
                    onChange={e => setApellidoMaterno(e.target.value)}
                    />
                </CardBody>
                <CardFooter className="flex flex-col justify-center">
                    { message }
                    <Button type="submit">Confirmar</Button>
                </CardFooter>
            </Card>
        </form>
    )
}

function ModificarContraseña() {

    const supabase = createClientComponentClient()
    const router = useRouter()

    const [actual, setActual] = useState("")
    const [nueva, setNueva] = useState("")
    const [confirmar, setConfirmar] = useState("")
    const [message, setMessage] = useState<React.ReactNode | null>(null)

    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault()
        setMessage(null)
        if (nueva == confirmar) {
            const { error } = await supabase.rpc(
                "change_user_password", 
                {
                    current_plain_password: actual, 
                    new_plain_password: nueva,
                }
            )
            if (error) {
                setMessage(<span>{error.message}</span>)
            } else {
                setMessage(<span>¡Contraseña modificada con exito!</span>)
                router.refresh()
            }
        } else {
            setMessage(<span>Las contraseñas no concuerdan</span>)
        }
    }

    return (
        <form onSubmit={handleSubmit}>
            <Card className="w-80">
                <CardHeader className="flex justify-center">
                    <h4>Modificar contraseña</h4>
                </CardHeader>
                <Divider/>
                <CardBody className="gap-2">
                    <PasswordField onChange={e => setActual(e.target.value)} label="Contraseña Actual"/>
                    <PasswordField onChange={e => setNueva(e.target.value)} label="Nueva Contraseña"/>
                    <PasswordField onChange={e => setConfirmar(e.target.value)} label="Confirmar contraseña"/>
                </CardBody>
                <CardFooter className="flex flex-col justify-center">
                    { message }
                    <Button type="submit">Confirmar</Button>
                </CardFooter>
            </Card>
        </form>
    )
}