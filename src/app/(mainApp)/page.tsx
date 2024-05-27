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

export default function Home() {
	return (
		<div className="flex flex-col gap-2 w-full h-full m-2">
			<div className="grid grid-cols-2 gap-12">
				<div className="self-center">
					<h1>¡Bienvenid@ a Mano Maestra!</h1>
					<p>
						¿Quieres aprender lengua de señas mexicana? ¿Buscas la
						mejor forma de aprender en línea de forma práctica y
						cómoda? <strong>¡Somos tu mejor opción!</strong>
						mejor forma de aprender en línea de forma práctica y
						cómoda? <strong>¡Somos tu mejor opción!</strong>
					</p>
					<div className="flex flex-col gap-3 w-fit mx-auto mt-6">
						<Button
							size="lg"
							color="primary"
							as={Link}
							href={links.signup}
							className="text-2xl"
						>
							<b>
								<i>Empezar ahora</i>
							</b>
						</Button>
						<Button
							size="lg"
							color="success"
							variant="light"
							as={Link}
							href={links.login}
						>
							<i>Ya tengo una cuenta</i>
						</Button>
					</div>
				</div>

				<div>
					<Image
						isBlurred
						isZoomed
						src="img/sign_language.jpg"
						alt="Mano Maestra"
					/>
				</div>
			</div>

			<div className="mt-10">
				<h2>¿Porque Mano Maestra?</h2>
				<p className="text-center">¿Qué encontraras con nosotros?</p>
				<div className="grid grid-cols-3 gap-4">
					<Card>
						<CardBody>
							<Image
								isZoomed
								src="img/practice.jpg"
								alt="Mano Maestra"
							/>
						</CardBody>
						<CardFooter className="flex flex-col gap-1">
							<span className="text-center text-lg font-bold">
								Lecciones en línea Lecciones en línea
							</span>
							<p>
								Explora nuestras lecciones en sus 3 niveles:
								básico, intermedio y avanzado. básico,
								intermedio y avanzado.
							</p>
						</CardFooter>
					</Card>
					<Card>
						<CardBody>
							<Image
								isZoomed
								src="img/learn.jpg"
								alt="Mano Maestra"
							/>
						</CardBody>
						<CardFooter className="flex flex-col gap-1">
							<span className="text-center text-lg font-bold">
								¿Particular o Empresa?
							</span>
							<p>
								Ya sea que estudies por tu cuenta, o tu empresa
								busque capacitar a sus empleados, Mano Maestra
								tiene algo para ti.
							</p>
						</CardFooter>
					</Card>
					<Card>
						<CardBody>
							<Image
								isZoomed
								src="img/videocall.jpg"
								alt="Mano Maestra"
							/>
						</CardBody>
						<CardFooter className="flex flex-col gap-1">
							<span className="text-center text-lg font-bold">
								¡Práctica!
							</span>
							<p>
								No te conformes con la teoría. ¡Aplica el
								estudio practico con nuestro{" "}
								<strong>
									sistema de reconocimiento de señas
								</strong>
								!
							</p>
						</CardFooter>
					</Card>
				</div>
			</div>

			<div className="mt-10">
				<h2>¡Aprende de forma práctica!</h2>

				<div className="grid grid-cols-2 gap-10">
					<Image
						src="img/heart_sign.jpg"
						isBlurred
						isZoomed
						alt="Mano Maestra"
					/>

					<div>
						<h3>
							Prueba nuestro sistema de reconocimiento de señas:
						</h3>
						<ul className="list-inside list-decimal">
							<li>Enciende tu cámara web.</li>
							<li>Coloca tu mano frente a la camara.</li>
							<li>¡Práctica la forma de la seña!</li>
						</ul>
					</div>
				</div>
			</div>

			<div className="mt-10">
				<h2>Nuestros planes de precios</h2>
				<div className="grid grid-cols-3 gap-4">
					<Card className="p-7">
						<CardBody>
							<span className="text-center text-3xl font-bold">
								Gratuito
							</span>
							<span className="text-center mt-2">
								0.00$ / mes
							</span>
							<ul className="mt-6 flex flex-col gap-3">
								<li className="flex gap-6 items-center text-base">
									<IconCheck className="shrink-0 w-10 h-10 stroke-naranja" />
									Acceso libre a las primeras lecciones del
									nivel Básico. nivel Básico.
								</li>
								<li className="flex gap-6 items-center text-base">
									<IconCheck className="shrink-0 w-10 h-10 stroke-naranja" />
									Prueba el sistema de reconocimiento de señas
									básico. básico.
								</li>
							</ul>
						</CardBody>
						<CardFooter className="flex flex-col gap-1">
							<Button
								color="default"
								variant="light"
								as={Link}
								href={links.signup}
							>
								Empezar ahora
							</Button>
						</CardFooter>
					</Card>
					<Card className="p-7">
						<CardBody>
							<span className="text-center text-3xl font-bold">
								Premium
							</span>
							<span className="text-center mt-2">
								400.00$ / mes
							</span>
							<ul className="mt-6 flex flex-col gap-3">
								<li className="flex gap-6 items-center text-base">
									<IconCheck className="shrink-0 w-10 h-10 stroke-naranja" />
									Acceso total a todas las lecciones de los
									niveles Básico, Intermedio y Avanzado.
									niveles Básico, Intermedio y Avanzado.
								</li>
								<li className="flex gap-6 items-center text-base">
									<IconCheck className="shrink-0 w-10 h-10 stroke-naranja" />
									Práctica con el sistema de reconocimiento de
									Práctica con el sistema de reconocimiento de
									señas avanzado.
								</li>
							</ul>
						</CardBody>
						<CardFooter className="flex flex-col gap-1">
							<Button
								color="primary"
								variant="ghost"
								as={Link}
								href={links.signup}
							>
								Detalles
							</Button>
						</CardFooter>
					</Card>
					<Card className="p-7">
						<CardBody>
							<span className="text-center text-3xl font-bold">
								Empresarial
							</span>
							<span className="text-center mt-2">
								Personalizado
							</span>
							<ul className="mt-6 flex flex-col gap-3">
								<li className="flex gap-6 items-center text-base">
									<IconCheck className="shrink-0 w-10 h-10 stroke-accent" />
									Acceso total a todas las lecciones de los
									niveles Básico, Intermedio y Avanzado.
									niveles Básico, Intermedio y Avanzado.
								</li>
								<li className="flex gap-6 items-center text-base">
									<IconCheck className="shrink-0 w-10 h-10 stroke-accent" />
									Acceso total a todas las lecciones de LSM
									Orientado a Empresas.
								</li>
								<li className="flex gap-6 items-center text-base">
									<IconCheck className="shrink-0 w-10 h-10 stroke-accent" />
									Práctica con el sistema de reconocimiento de
									Práctica con el sistema de reconocimiento de
									señas avanzado.
								</li>
							</ul>
						</CardBody>
						<CardFooter className="flex flex-col gap-1">
							<Button
								color="success"
								variant="ghost"
								as={Link}
								href={links.signup}
							>
								Contáctanos
							</Button>
						</CardFooter>
					</Card>
				</div>
			</div>

			<div className="mt-10">
				<h2>¡Inténtalo ahora mismo!</h2>
				<TryNow />
			</div>
		</div>
	);
}
