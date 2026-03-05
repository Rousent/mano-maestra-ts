"use client"
import { Link } from "@nextui-org/link";
//import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import { Input, Button } from "@nextui-org/react";
import PasswordField from "@/components/PasswordField";
import { FormEvent, useState } from "react";
import { IconMail } from "@tabler/icons-react";
import { useRouter } from "next/navigation";
import { Spinner } from "@nextui-org/spinner";
import { setSession } from "@/app/cookiesHandler";

export default function Login() {
	//const supabase = createClientComponentClient();
	const router = useRouter();

	const [boton, setBoton] = useState(
		<Button type="submit" className="w-fit self-center " color="primary">
			Continuar
		</Button>
	);
	const [nombres, setNombres] = useState("");
	const [paterno, setPaterno] = useState("");
	const [materno, setMaterno] = useState("");
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [confirmar, setConfirmar] = useState("");
	//const [error, setError] = useState<string | null>();

	const signUpData = {
		email: email,
		password: password,
	};

	const profileData = {
		_email: email,
		_nombres: nombres,
		_paterno: paterno,
		_materno: materno,
		_rol: 2,
	};

	const onSubmit = async (e: FormEvent) => {
		e.preventDefault();
		/* setError(null);
		if (nombres && paterno && materno && email && password && confirmar) {
			if (password == confirmar) {
				const { error } = await supabase.auth.signUp(signUpData);
				const res = await supabase.rpc(
					"create_user_profile",
					profileData
				);
				if (!error && !res.error) {
					setBoton(<Spinner />);
					router.push("/signup/standby");
				} else if (error) {
					setError(error.message);
				} else if (res.error) {
					setError(res.error.message);
				}
			} else {
				setError("Las contraseñas no concuerdan");
			}
		} else {
			setError("Debes rellenar todos los campos");
		} */
		setBoton(<Spinner/>);
		setSession();
		router.refresh();
	};

	return (
		<form
			onSubmit={onSubmit}
			className="w-1/4 min-w-fit h-fit flex flex-col grow gap-6 bg-fondo rounded-lg p-10 place-self-center justify-self-center"
		>
			<span className="text-4xl font-semibold text-center">
				Registrate
			</span>
			<div className="flex flex-col gap-2">
				<Input
					type="text"
					label="Nombres"
					placeholder="Ej. Juan"
					//isRequired
					onChange={(e) => setNombres(e.target.value)}
				></Input>
				<Input
					type="text"
					label="Apellido Paterno"
					//isRequired
					onChange={(e) => setPaterno(e.target.value)}
				></Input>
				<Input
					type="text"
					label="Apellido Materno"
					//isRequired
					onChange={(e) => setMaterno(e.target.value)}
				></Input>
				<Input
					type="email"
					label="Correo Electrónico"
					//isRequired
					placeholder="Ej. name@mail.com"
					startContent={<IconMail />}
					labelPlacement="inside"
					onChange={(e) => setEmail(e.target.value)}
				/>
				<PasswordField
					onChange={(e) => setPassword(e.target.value)}
					label="Contraseña"
				/>
				<PasswordField
					onChange={(e) => setConfirmar(e.target.value)}
					label="Confirmar contraseña"
				></PasswordField>
			</div>
			{/* {error ? (
				<span className="text-red-800 text-center">{error}</span>
			) : null} */}
			{boton}
			<div className="flex flex-row gap-2 justify-center items-center">
				<div>¿Ya tienes una cuenta?</div>
				<Link href={"/login"} isBlock color="success">
					¡Inicia Sesión!
				</Link>
			</div>
		</form>
	);
}
