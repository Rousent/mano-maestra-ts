import { Spinner } from "@nextui-org/spinner";

export default function Loading() {
	return (
		<div className="w-full flex flex-col items-center">
			<Spinner size="lg" />
		</div>
	);
}
