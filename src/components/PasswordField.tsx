"use client"

import { Input } from "@nextui-org/react"
import { EyeFilledIcon, EyeSlashFilledIcon } from "@nextui-org/shared-icons"
import { IconKey } from "@tabler/icons-react"
import { useState } from "react"

export default function PasswordField({ 
    onChange,
    label
}: { 
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void,
    label: string
}) {
    const [pwVisible, setPwVisible] = useState(false)

    return (
        <Input type={pwVisible ? "text" : "password"} label={label} onChange={onChange} labelPlacement="inside" isRequired
            placeholder="********" startContent={<IconKey/>}
            endContent={
                <button type="button" className="w-6 h-6" onClick={() => setPwVisible(!pwVisible)}>
                    { pwVisible ? <EyeSlashFilledIcon className="w-6 h-6"/> : <EyeFilledIcon className="w-6 h-6"/> }
                </button>
            }
        />
    )
}