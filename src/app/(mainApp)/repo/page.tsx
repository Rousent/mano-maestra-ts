import { Card, CardHeader, CardBody, CardFooter } from "@nextui-org/card";
import { Link } from "@nextui-org/link";
import { IconBooks, IconWorldWww } from "@tabler/icons-react";

export default function Repo() {
	return (
		<div className="flex flex-col gap-2 w-full h-full m-2">
			<h1>Repositorio</h1>

			<p className="text-xl text-center">
				Encuentra libros, referentes y otros recursos para expandir tu
				conocimiento en la lengua de señas mexicana.
			</p>

			<div className="flex flex-col gap-4">
				<Card>
					<CardBody className="flex flex-col">
						<div className="flex flex-row gap-2 items-center">
							<IconBooks className="w-20 h-20" />
							<span className="text-3xl font-semibold">
								&quot;Diccionario de Lengua de Señas Mexicana
								Ciudad de México&quot;
							</span>
						</div>
						<p>
							Una muestra de estas acciones que buscan romper
							barreras y crear lazos, es el Diccionario de Lengua
							de Señas Mexicana en la Ciudad de México, que
							recopila más de mil señas recogidas por informantes
							sordos de distintos grupos sociales, generaciones y
							regiones de la CDMX.
						</p>
						<p>
							{" "}
							Este diccionario es el primero en su tipo; fue
							elaborado desde la perspectiva de la Comunidad Sorda
							para adentrar a las personas oyentes a su cultura,
							historia y educación; además, este material es una
							invaluable herramienta de consulta que permitirá que
							personas oyentes y sordas puedan comunicarse a
							través de la Lengua de Señas Mexicana.
						</p>
						<p>
							Encuentalo en:{" "}
							<Link
								color="success"
								href="https://pdh.cdmx.gob.mx/storage/app/media/banner/Dic_LSM%202.pdf"
							>
								https://pdh.cdmx.gob.mx/storage/app/media/banner/Dic_LSM%202.pdf
							</Link>
						</p>
					</CardBody>
				</Card>
				<Card>
					<CardBody className="flex flex-col">
						<div className="flex flex-row gap-2 items-center">
							<IconBooks className="w-20 h-20" />
							<span className="text-3xl font-semibold">
								&quot;Manos con voz: Diccionario de lengua de
								señas mexicana&quot;
							</span>
						</div>
						<span className="text-xl">
							Por: María Esther Serafín de Fleischmann y Raúl
							Gonzaléz Pérez
						</span>
						<p>
							Con la convicción de que la comunicación es puerta y
							camino para la inclusión y la igualdad, el Consejo
							Nacio- nal para Prevenir la Discriminación celebra
							el esfuerzo de Libre Acceso, A.C., en particular de
							María Esther Serafín de Fleischmann y Raúl González
							Pérez, de crear y compartir este diccionario de
							lengua de señas mexicana Manos con voz, con el cual
							se fortalece la posibilidad de romper barreras que
							artificialmente nos alejan y nos hacen personas
							ajenas sumidas en sus propios silencios y en sus
							propios ruidos.
						</p>
						<p>
							Con esta publicación se fomenta la protección del
							derecho a la no discriminación porque el respeto a
							la dig- nidad humana requiere de reconocimiento
							mutuo y éste, a su vez, tiene su base más
							igualitaria y más humana en el acceso y el uso de
							formas diversas de comunicación que representan
							manifestaciones de distintas, pero también iguales
							realidades.
						</p>
						<p>
							Encuentalo en:{" "}
							<Link
								color="success"
								href="https://educacionespecial.sep.gob.mx/storage/recursos/2023/05/xzrfl019nV-4Diccionario_lengua_%20Senas.pdf"
							>
								https://educacionespecial.sep.gob.mx/storage/recursos/2023/05/xzrfl019nV-4Diccionario_lengua_%20Senas.pdf
							</Link>
						</p>
					</CardBody>
				</Card>
				<Card>
					<CardBody className="flex flex-col">
						<div className="flex flex-row gap-2 items-center">
							<IconWorldWww className="w-20 h-20" />
							<span className="text-3xl font-semibold">
								Biblioteca Virtual LSM
							</span>
						</div>
						<p>
							La Biblioteca Virtual LSM, abre su modulo a la
							comunidad Académica de la lengua de señas mexicana
							de la ciudad de México con la finalidad de publicar
							las lecturas pertenecientes a los 5 niveles dentro
							de la Academia LSM.
						</p>
						<p>
							Este módulo esta creado para que puedas consultar
							todas las señas aprendidas dentro del curso; lo
							encontraras en orden alfabético, y cada vez que
							avanzas de nivel podrás ir visualizando más señas,
							sin perder las anteriores.
						</p>
						<p>
							Encuentalo en:{" "}
							<Link
								color="success"
								href="https://www.lsm.cdmx.gob.mx/"
							>
								https://www.lsm.cdmx.gob.mx/
							</Link>
						</p>
					</CardBody>
				</Card>
			</div>
		</div>
	);
}
