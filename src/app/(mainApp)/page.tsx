import CameraAccess from "@/components/CameraAccess";
import WebcamDetector from "@/components/WebcamDetector";
import Link from "next/link";

export default function Home() {
	return (
		<div className="flex flex-col gap-2 w-full h-full m-2">
			<Link
				href="/content"
				className="relative group flex w-full h-[30rem]"
			>
				<div className="flex w-full h-full bg-learn bg-cover text-fondo">
					<div className="flex flex-col gap-4 w-full h-full justify-center items-center backdrop-brightness-50 p-4">
						<h2>Aprender</h2>
						<p className="text-2xl font-semibold text-fondo text-center transition-all duration-300">
							Revisa nuestras lecciones y prueba el sistema de
							reconocimiento de señas.
						</p>
						<p className="text-xl underline text-fondo text-center transition-all duration-300">
							Click para ver las lecciones.
						</p>
					</div>
				</div>
			</Link>
			<div className="group relative flex w-full h-[30rem] bg-practice bg-cover text-fondo">
				<div className="flex flex-col gap-4 w-full h-full justify-center items-center backdrop-brightness-50 p-4">
					<h2>Practicar</h2>
					<p className="text-2xl font-semibold text-fondo text-center transition-all duration-300">
						[PROXIMAMENTE]: Unete a sesiones publicas o privadas, o
						crea un lobby y practica con otras personas en linea.
					</p>
				</div>
			</div>
			<div className="group relative flex flex-col gap-3 w-full h-fit bg-cover text-black">
				<h2>¡Trabajando en un nuevo modelo de reconocimiento!</h2>
				<p className="w-full text-center text-2xl">
					<b>Modelo antiguo:</b> Reconocimiento basico de una mano.
				</p>
				<CameraAccess />
				<p className="w-full text-center text-2xl">
					<b>Nuevo modelo:</b> Reconocimiento 3D de ambas manos.
				</p>
				<WebcamDetector />
			</div>
		</div>
	);
}
