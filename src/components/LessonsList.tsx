"use client";

import { Leccion } from "@/types/local";
import { Accordion, AccordionItem, Button, Progress } from "@nextui-org/react";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import {
	IconPlayerPlayFilled,
	IconCircleCheckFilled,
} from "@tabler/icons-react";
import { UUID } from "crypto";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function Lessons({
	niveles,
	nivelActual,
}: {
	niveles: any;
	nivelActual: number;
}) {
	return (
		<Accordion
			className="md:w-[768px] w-full"
			defaultExpandedKeys={[nivelActual.toString()]}
		>
			<AccordionItem key="1" title="Nivel Basico">
				<Progress
					label="Progreso"
					className="mb-3"
					value={niveles[0].porcentaje}
					showValueLabel
					isStriped
				/>
				<ul>
					{niveles[0].lecciones.length > 0 ? (
						niveles[0].lecciones.map((leccion: any) => {
							return <LessonLink leccion={leccion} />;
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
				<ul>
					{niveles[1].lecciones.length > 0 ? (
						niveles[1].lecciones.map((leccion: any) => {
							return <LessonLink leccion={leccion} />;
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
				<ul>
					{niveles[2].lecciones.length > 0 ? (
						niveles[2].lecciones.map((leccion: any) => {
							return <LessonLink leccion={leccion} />;
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
				<ul>
					{niveles[3].lecciones.length > 0 ? (
						niveles[3].lecciones.map((leccion: any) => {
							return <LessonLink leccion={leccion} />;
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

function LessonLink({ leccion }: { leccion: Leccion }) {
	return (
		<li
			key={leccion.id_leccion}
			className="rounded-full bg-naranja pl-4 pr-1 py-1"
		>
			<Link
				href={"/content/" + leccion.id_leccion}
				className="flex flex-row justify-between items-center"
			>
				{leccion.titulo}
				{leccion.completado ? (
					<IconCircleCheckFilled className="w-8 h-auto" />
				) : (
					<IconPlayerPlayFilled className="w-5 h-auto" />
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
