import Image from "next/image";
import { Button } from "@nextui-org/button";
import Link from "next/link";

export default function Home() {
	return (
		<div className="flex flex-col gap-2 w-full h-full m-2">
			<div className="relative group flex w-full h-[30rem]">
				<div className="flex w-full h-full bg-learn bg-cover text-fondo">
					<div className="flex flex-col gap-4 w-full h-full justify-center items-center backdrop-brightness-50 p-4">
						<h2>Aprender</h2>
						<p className="text-2xl font-semibold text-fondo text-center transition-all duration-300">
							Revisa nuestras lecciones y prueba el sistema de
							reconocimiento de señas.
						</p>
						<p className="text-xl underline text-fondo text-center transition-all duration-300">
							Click para iniciar sesión
						</p>
					</div>
				</div>
			</div>
			<div className="group relative flex w-full h-[30rem] bg-practice bg-cover text-fondo">
				<div className="flex flex-col gap-4 w-full h-full justify-center items-center backdrop-brightness-50 p-4">
					<h2>Practicar</h2>
					<p className="text-2xl font-semibold text-fondo text-center transition-all duration-300">
						[PROXIMAMENTE]: Unete a sesiones publicas o privadas, o
						crea un lobby y practica con otras personas en linea.
					</p>
					<p className="text-xl underline text-fondo text-center transition-all duration-300">
						Click para iniciar sesión.
					</p>
				</div>
			</div>
		</div>
	);
}
