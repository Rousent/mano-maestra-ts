"use client";

import { Leccion } from "@/types/local";
import { Accordion, AccordionItem, Button, Progress } from "@nextui-org/react";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import {
	IconPlayerPlayFilled,
	IconCircleCheckFilled,
	IconChevronRight,
} from "@tabler/icons-react";
import { UUID } from "crypto";
import { Link } from "@nextui-org/link";
import { useRouter } from "next/navigation";

export default function Lessons({
	niveles,
	nivelActual,
}: {
	niveles: any;
	nivelActual: number;
}) {
	let disabledLevels: any = {
		1: ["2", "3"],
		2: ["3"],
		3: [],
	};

	return (
		<Accordion
			className="md:w-[768px] w-full"
			defaultExpandedKeys={[nivelActual.toString()]}
			disabledKeys={disabledLevels[nivelActual] ?? []}
		>
			<AccordionItem key="1" title="Nivel Basico">
				<Progress
					label="Progreso"
					className="mb-3"
					value={niveles[0].porcentaje}
					showValueLabel
					isStriped
				/>
				<p>
					En este nivel aprenderás los fundamentos de la lengua de
					señas, incluyendo el alfabeto, los números básicos y otras
					señas comunes.
				</p>
				<p>
					<b>
						Este nivel es perfecto para personas que no tienen
						experiencia previa con la lengua de señas.
					</b>
				</p>
				<ul>
					{niveles[0].lecciones.length > 0 ? (
						niveles[0].lecciones.map((leccion: any) => {
							return (
								<LessonLink
									key={leccion.id_leccion}
									leccion={leccion}
								/>
							);
						})
					) : (
						<li key="none1" className="text-center">
							Ups, no hay nada que ver aqui...
						</li>
					)}
				</ul>
			</AccordionItem>
			<AccordionItem key="2" title="Nivel Intermedio">
				<Progress
					label="Progreso"
					className="mb-3"
					value={niveles[1].porcentaje}
					showValueLabel
					isStriped
				/>
				<p>
					En este nivel ampliarás tus conocimientos de la lengua de
					señas y podrás mantener conversaciones más complejas sobre
					una variedad de temas. Aprenderás a usar la gramática de la
					lengua de señas y a expresarte de manera más fluida y
					natural.
				</p>
				<p>
					<b>
						Este nivel es recomendado para personas que tienen un
						conocimiento básico en lengua de señas.
					</b>
				</p>
				<ul>
					{niveles[1].lecciones.length > 0 ? (
						niveles[1].lecciones.map((leccion: any) => {
							return (
								<LessonLink
									key={leccion.id_leccion}
									leccion={leccion}
								/>
							);
						})
					) : (
						<li key="none2" className="text-center">
							Ups, no hay nada que ver aqui...
						</li>
					)}
				</ul>
			</AccordionItem>
			<AccordionItem key="3" title="Nivel Avanzado">
				<Progress
					label="Progreso"
					className="mb-3"
					value={niveles[2].porcentaje}
					showValueLabel
					isStriped
				/>
				<p>
					En este nivel perfeccionarás tus habilidades en la lengua de
					señas y podrás participar en conversaciones con personas
					sordas de manera fluida y segura. Aprenderás sobre la
					cultura sorda y cómo interactuar con personas sordas en
					diferentes contextos.
				</p>
				<p>
					<b>
						Este nivel es recomendado para personas que tienen un
						dominio intermedio en la lengua de señas.
					</b>
				</p>
				<ul>
					{niveles[2].lecciones.length > 0 ? (
						niveles[2].lecciones.map((leccion: any) => {
							return (
								<LessonLink
									key={leccion.id_leccion}
									leccion={leccion}
								/>
							);
						})
					) : (
						<li key="none3" className="text-center">
							Ups, no hay nada que ver aqui...
						</li>
					)}
				</ul>
			</AccordionItem>
			<AccordionItem key="4" title="LSM Orientado a Empresas">
				<Progress
					label="Progreso"
					className="mb-3"
					value={niveles[3].porcentaje}
					showValueLabel
					isStriped
				/>
				<p>
					En este nivel aprenderás la lengua de señas específica que
					se utiliza en el entorno empresarial. Podrás atender a
					clientes sordos, dar presentaciones en lengua de señas y
					participar en reuniones con colegas sordos.
				</p>
				<p>
					<b>
						Este nivel es recomendado para profesionales que
						trabajan con personas sordas o que desean mejorar sus
						habilidades de comunicación con la comunidad sorda.
					</b>
				</p>
				<ul>
					{niveles[3].lecciones.length > 0 ? (
						niveles[3].lecciones.map((leccion: any) => {
							return (
								<LessonLink
									key={leccion.id_leccion}
									leccion={leccion}
								/>
							);
						})
					) : (
						<li key="none4" className="text-center">
							Ups, no hay nada que ver aqui...
						</li>
					)}
				</ul>
			</AccordionItem>
		</Accordion>
	);
}

function LessonLink({ key, leccion }: { key: string; leccion: Leccion }) {
	return (
		<li key={key}>
			<hr />
			<Link
				href={"/content/" + leccion.id_leccion}
				isBlock
				color="foreground"
				className="grid-flow-col justify-between items-center px-3 w-full"
			>
				<IconChevronRight />
				<div className="w-full">{leccion.titulo}</div>
				{leccion.completado ? (
					<IconCircleCheckFilled className="w-8 h-auto" />
				) : (
					<IconPlayerPlayFilled className="w-8 h-auto" />
				)}
			</Link>
		</li>
	);
}

export function LevelUp({
	idUsuario,
	nivel,
}: {
	idUsuario: UUID;
	nivel: number;
}) {
	const supabase = createClientComponentClient();
	const router = useRouter();

	const handleClick = async () => {
		const { error } = await supabase
			.from("perfiles")
			.update({ idNivel: nivel + 1 })
			.eq("idUsuario", idUsuario);
		if (!error) {
			router.refresh();
		}
	};

	return <Button onClick={handleClick}>Subir de nivel</Button>;
}
