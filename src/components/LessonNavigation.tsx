import { Link } from "@nextui-org/link";
import {
	IconChevronLeft,
	IconChevronRight,
	IconList,
} from "@tabler/icons-react";

export default function LessonNavigation({
	anterior,
	siguiente,
}: {
	anterior: string | null;
	siguiente: string | null;
}) {
	return (
		<div className="flex w-full justify-between">
			<Link
				id={anterior || "regresar"}
				color="foreground"
				isBlock
				href={anterior || "/content"}
				className="flex gap-2 items-center"
			>
				{anterior ? <IconChevronLeft /> : <IconList />}
				{anterior ? "Anterior" : "Regresar"}
			</Link>
			<Link
				id={siguiente || "regresar"}
				color="foreground"
				isBlock
				href={siguiente || "/content"}
				className="flex gap-2 items-center"
			>
				{" "}
				{siguiente ? "Siguiente" : "Finalizar"}
				{siguiente ? <IconChevronRight /> : <IconList />}
			</Link>
		</div>
	);
}
