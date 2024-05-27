import Lessons, { LevelUp } from "@/components/LessonsList";
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";

export default async function Indice() {
	const supabase = createServerComponentClient({ cookies });
	const { data } = await supabase.rpc("get_full_user");

	let niveles: any = await supabase
		.from("niveles")
		.select("descripcion, lecciones (*)");

	niveles = niveles.data;

	let leccionesCompletadas: any = await supabase
		.from("lecciones_completadas")
		.select("id_leccion")
		.eq("id_usuario", data.id);

	leccionesCompletadas = leccionesCompletadas.data.map(
		(l: any) => l.id_leccion
	);

	for (let i = 0; i < niveles.length; i++) {
		for (let j = 0; j < niveles[i].lecciones.length; j++) {
			niveles[i].lecciones[j].completado = leccionesCompletadas.includes(
				niveles[i].lecciones[j].id_leccion
			);
		}
	}

	for (let i = 0; i < niveles.length; i++) {
		niveles[i].porcentaje =
			niveles[i].lecciones.length > 0
				? (100 / niveles[i].lecciones.length) *
				  niveles[i].lecciones.filter((l: any) => l.completado).length
				: 0;
	}

	return (
		<div className="w-full flex flex-col gap-3 items-center">
			<div className="w-full flex flex-col gap-2 text-center">
				<h2>Lecciones</h2>
				<span className="text-xl">
					Explora las lecciones, practica con el sistema de
					reconocimiento, ¡Y aprende sobre la lengua de señas
					mexicana!
				</span>
			</div>
			<span>Mi progreso: {data.nivel}</span>
			<Lessons niveles={niveles} nivelActual={data.valor_nivel} />
		</div>
	);
}
