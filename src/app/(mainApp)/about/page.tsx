import { IconBackhoe } from "@tabler/icons-react";
import { Image } from "@nextui-org/image";
import { Button } from "@nextui-org/button";
import { Link } from "@nextui-org/link";
import { links } from "@/types/links";
import { Card, CardHeader, CardBody, CardFooter } from "@nextui-org/card";
import WebcamSpeller from "@/components/WebcamSpeller";
import WebcamDetector from "@/components/WebcamDetector";
import { IconCheck } from "@tabler/icons-react";
import { gesture } from "@/components/LSMGestures";
import TryNow from "@/components/TryNow";
export default function About() {
	return (
		<>
			<div className="flex flex-col gap-2 w-full h-full m-2">
				<h1>Sobre Nosotros</h1>
				<div className="mt-10">
					<h2>Misión</h2>

					<div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
						<Image
							src="img/heart_sign.jpg"
							isBlurred
							isZoomed
							alt="Mano Maestra"
						/>

						<div>
							<h3>
								Facilitando la Inclusión a través del
								Aprendizaje de la Lengua de Señas Mexicana
							</h3>

							<p>
								En Mano Maestra, nuestra misión es facilitar a
								la comunidad el aprendizaje de la Lengua de
								Señas Mexicana, guiando a las personas en su
								proceso mediante una serie de cursos didácticos.
								Nos comprometemos a ayudar a nuestros clientes a
								través de un enfoque práctico y accesible,
								promoviendo una comunicación inclusiva y
								efectiva.
							</p>
						</div>
					</div>
				</div>

				<div className="mt-10">
					<h2>Visión</h2>

					<div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
						<div>
							<h3>
								Liderando el Aprendizaje de la Lengua de Señas
								en Veracruz
							</h3>
							<ul className="list-inside list-decimal">
								<p>
									En Mano Maestra, nuestra visión es
									posicionarnos como una de las principales
									plataformas de aprendizaje en la zona sur
									del estado de Veracruz dentro de los
									próximos cinco años. Nos esforzamos por
									mantener nuestra calidad y confiabilidad,
									asegurando que cada estudiante reciba una
									educación de excelencia en la Lengua de
									Señas Mexicana.
								</p>
							</ul>
						</div>

						<Image
							src="img/learn.jpg"
							isBlurred
							isZoomed
							alt="Mano Maestra"
						/>
					</div>
				</div>

				<div className="mt-10">
					<h2>Valores</h2>

					<div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
						<Image
							src="img/practice.jpg"
							isBlurred
							isZoomed
							alt="Mano Maestra"
						/>

						<div>
							<h3>
								En Mano Maestra, nuestros valores fundamentales
								son:
							</h3>
							<ul className="list-inside list-decimal">
								<li>
									<strong>Responsabilidad:</strong> Nos
									dedicamos al progreso continuo de nuestra
									plataforma para ofrecer un servicio al
									cliente cada vez mejor.
								</li>
								<li>
									<strong>Tolerancia:</strong> Nos
									comprometemos a guiar a nuestros clientes en
									la comprensión y uso eficiente de nuestra
									página web, desde el inicio hasta el final
									de su aprendizaje.
								</li>
								<li>
									<strong>Calidad:</strong> Contamos con
									maestros especializados que aseguran una
									mejora continua en el aprendizaje del
									lenguaje de señas, respaldados por una
									plataforma eficiente.
								</li>
								<li>
									<strong>Creatividad:</strong> Ofrecemos a
									nuestros clientes la oportunidad de avanzar
									a través de niveles de aprendizaje
									estructurados y obtener una certificación al
									finalizar el curso.
								</li>
							</ul>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}
