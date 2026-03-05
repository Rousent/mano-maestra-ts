import { getLeccion } from "@/app/cookiesHandler";
import Lessons, { LevelUp } from "@/components/LessonsList";
import { Leccion } from "@/types/local";
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";

export default async function Indice() {
	/* const supabase = createServerComponentClient({ cookies });
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
	} */

	const basico0 = await getLeccion("basico-0")
	const basico1 = await getLeccion("basico-1")
	const basico2 = await getLeccion("basico-2")
	const basico3 = await getLeccion("basico-3")
	const basico4 = await getLeccion("basico-4")
	const basico5 = await getLeccion("basico-5")
	const basico6 = await getLeccion("basico-6")
	const basico7 = await getLeccion("basico-7")

	const lecciones = [
		basico0, basico1, basico2, basico3, basico4, basico5, basico6, basico7
	]

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
			<span>Mi progreso: Nivel Básico</span>
			<Lessons lecciones={lecciones} nivelActual={1} />
		</div>
	);
}
