"use client";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import { useState, useRef, useEffect } from "react";
import { IconCheck } from "@tabler/icons-react";
import { setLeccionCompletada } from "@/app/cookiesHandler";

export default function LessonCheckpoint({ leccion }: { leccion: string }) {
	//const supabase = createClientComponentClient();

	const [visible, setVisible] = useState(false);
	const ref = useRef(null);

	useEffect(() => {
		const observer = new IntersectionObserver(
			(entries) => {
				setVisible(entries[0].isIntersecting);
			},
			{ rootMargin: "0px" }
		);
		if (ref.current) observer.observe(ref.current);
		return () => {
			if (ref.current) observer.unobserve(ref.current);
		};
	}, [ref]);

	useEffect(() => {
		if (visible) {
			onActivate();
		}
	}, [visible]);

	const onActivate = async () => {
		/* const { data } = await supabase.auth.getUser();

		const lecciones = await supabase
			.from("lecciones_completadas")
			.select("*")
			.eq("id_leccion", leccion)
			.eq("id_usuario", data.user?.id);

		if (lecciones.data?.length === 0) {
			await supabase.from("lecciones_completadas").insert({
				id_usuario: data.user?.id,
				id_leccion: leccion,
			});
		} */
		setLeccionCompletada(leccion)
	};

	return (
		<div
			ref={ref}
			className="w-full flex flex-col gap-1 justify-center items-center mt-4 text-lg"
		>
			<IconCheck className="w-10 h-10" />
			Fin de la lección. Se ha registrado como completada.
		</div>
	);
}
