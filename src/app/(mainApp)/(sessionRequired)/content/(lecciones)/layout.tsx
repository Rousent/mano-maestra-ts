export default async function LeccionesLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<div className="flex shrink-0 flex-col gap-3 w-full">
			<div className="flex gap-4 justify-between items-center mx-10"></div>
			<main className="bg-white w-full px-20 py-6 rounded-2xl shadow-md">
				{children}
			</main>
		</div>
	);
}
