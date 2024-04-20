"use client";

import { Link } from "@nextui-org/link";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import { Input, Button } from "@nextui-org/react";
import PasswordField from "@/components/PasswordField";
import { FormEvent, useState } from "react";
import { IconMail } from "@tabler/icons-react";
import { useRouter } from "next/navigation";

export default function Login() {
	const supabase = createClientComponentClient();
	const router = useRouter();

	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [error, setError] = useState<string | null>();

	const onSubmit = async (e: FormEvent) => {
		e.preventDefault();
		setError(null);
		const { error } = await supabase.auth.signInWithPassword({
			email,
			password,
		});
		if (error) {
			setError(error.message);
		} else {
			router.refresh();
		}
	};

	return (
		<form
			onSubmit={onSubmit}
			className="w-1/4 min-w-fit h-fit flex flex-col grow gap-6 bg-fondo rounded-lg p-10 place-self-center justify-self-center"
		>
			<span className="text-4xl font-semibold text-center">
				Iniciar Sesión
			</span>
			<div className="flex flex-col gap-2">
				<Input
					type="email"
					label="Correo electrónico"
					isRequired
					placeholder="Ej. name@mail.com"
					startContent={<IconMail />}
					labelPlacement="inside"
					onChange={(e) => setEmail(e.target.value)}
				/>
				<PasswordField
					onChange={(e) => setPassword(e.target.value)}
					label="Contraseña"
				/>
				<Link href="/" color="foreground" isBlock className="self-end">
					Olvidé mi contraseña
				</Link>
			</div>
			{error ? (
				<span className="text-red-800 text-center">{error}</span>
			) : null}

			<Button
				type="submit"
				className="w-fit self-center text-whitecolor"
				color="success"
			>
				Continuar
			</Button>

			<div className="flex flex-row gap-2 justify-center items-center">
				<div>¿Aún no tienes una cuenta?</div>
				<Link href={"/signup"} isBlock color="primary">
					¡Registrate!
				</Link>
			</div>
		</form>
	);
}
