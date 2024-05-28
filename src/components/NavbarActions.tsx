"use client";

import { links } from "@/types/links";
import { Usuario } from "@/types/local";
import { Button, Divider, Tooltip } from "@nextui-org/react";
import {
	Dropdown,
	DropdownTrigger,
	DropdownMenu,
	DropdownSection,
	DropdownItem,
} from "@nextui-org/react";
import {
	Modal,
	ModalContent,
	ModalHeader,
	ModalBody,
	ModalFooter,
	useDisclosure,
} from "@nextui-org/react";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import { IconMenu2, IconChevronDown, IconLink } from "@tabler/icons-react";
import { IconUserSquareRounded } from "@tabler/icons-react";
import { IconStarFilled } from "@tabler/icons-react";
import { IconLogout } from "@tabler/icons-react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";

/**
 * Options
 * Ir a mi cuenta, hacerse premium y cerrar sesión.
 */
export function OptionsButton({ usuario }: { usuario: Usuario | null }) {
	const { isOpen, onOpen, onOpenChange } = useDisclosure();
	const router = useRouter();
	const pathname = usePathname().replace("/", "");

	return (
		<>
			<Dropdown className="right-0 flex gap-6 items-center">
				<DropdownTrigger>
					<Button isIconOnly className="w-12 h-12 bg-transparent">
						<IconMenu2 className="w-8 h-8" />
					</Button>
				</DropdownTrigger>
				<DropdownMenu disabledKeys={[pathname]}>
					<DropdownSection showDivider>
						<DropdownItem
							className={!usuario ? "hidden" : ""}
							isReadOnly
							textValue={"Sesión iniciada como " + usuario?.email}
						>
							Sesión iniciada como<br></br>
							<b>{usuario?.email}</b>
						</DropdownItem>
					</DropdownSection>
					<DropdownSection className="lg:hidden" showDivider>
						<DropdownItem
							key={links.about.replace("/", "")}
							startContent={<IconLink />}
							href={links.about}
						>
							Sobre nosotros
						</DropdownItem>
						<DropdownItem
							key={links.enterprise.replace("/", "")}
							startContent={<IconLink />}
							onPress={() => router.push(links.enterprise)}
							href={links.enterprise}
						>
							Para empresas
						</DropdownItem>
						<DropdownItem
							key={links.repo.replace("/", "")}
							startContent={<IconLink />}
							onPress={() => router.push(links.repo)}
							href={links.repo}
						>
							Repositorio
						</DropdownItem>
						<DropdownItem
							key={links.lessons.replace("/", "")}
							startContent={<IconLink />}
							href={links.lessons}
						>
							Lecciones
						</DropdownItem>
						{/*
						<DropdownItem
							key={links.practice.replace("/", "")}
							startContent={<IconLink />}
							href={links.practice}
						>
							Practica
						</DropdownItem>
						*/}
						<DropdownItem
							key={links.games.replace("/", "")}
							startContent={<IconLink />}
							href={links.games}
						>
							Juegos
						</DropdownItem>
					</DropdownSection>
					<DropdownSection>
						<DropdownItem
							key={links.account.replace("/", "")}
							href={links.account}
							startContent={<IconUserSquareRounded />}
						>
							Mi cuenta
						</DropdownItem>
						<DropdownItem
							className="hidden"
							startContent={<IconStarFilled />}
							href={links.premium}
						>
							Hacerme Premium
						</DropdownItem>
						<DropdownItem
							startContent={<IconLogout />}
							onPress={onOpen}
						>
							Cerrar sesión
						</DropdownItem>
					</DropdownSection>
				</DropdownMenu>
			</Dropdown>
			<LogoutModal isOpen={isOpen} onOpenChange={onOpenChange} />
		</>
	);
}

/**
 * Ventana de confirmación de cerrar sesión.
 */
function LogoutModal({
	isOpen,
	onOpenChange,
}: {
	isOpen: boolean;
	onOpenChange: () => void;
}) {
	const supabase = createClientComponentClient();
	const router = useRouter();

	const handleLogout = async () => {
		await supabase.auth.signOut();
		router.refresh();
	};

	return (
		<Modal isOpen={isOpen} onOpenChange={onOpenChange}>
			<ModalContent>
				{(onClose) => (
					<>
						<ModalHeader>Cerrar sesión</ModalHeader>
						<ModalBody>
							<span>¿Seguro que quieres cerrar sesión?</span>
						</ModalBody>
						<ModalFooter>
							<Button variant="light" onPress={onClose}>
								Cancelar
							</Button>
							<Button color="primary" onPress={handleLogout}>
								Cerrar sesión
							</Button>
						</ModalFooter>
					</>
				)}
			</ModalContent>
		</Modal>
	);
}

/**
 *
 * @param param0
 * @returns
 */
export function NavOptions() {
	const router = useRouter();
	const pathname = usePathname().replace("/", "");

	return (
		<Dropdown className="flex gap-6 right-0 items-center">
			<DropdownTrigger>
				<Button
					isIconOnly
					className="md:hidden w-12 h-12 bg-transparent"
				>
					<IconMenu2 className="w-8 h-8" />
				</Button>
			</DropdownTrigger>
			<DropdownMenu>
				<DropdownItem
					key={links.about.replace("/", "")}
					startContent={<IconLink />}
					href={links.about}
				>
					Sobre nosotros
				</DropdownItem>
				<DropdownItem
					key={links.enterprise.replace("/", "")}
					startContent={<IconLink />}
					href={links.enterprise}
				>
					Para empresas
				</DropdownItem>
				<DropdownItem
					key={links.games.replace("/", "")}
					startContent={<IconLink />}
					href={links.games}
				>
					Juegos
				</DropdownItem>
				<DropdownItem startContent={<IconLink />} href={links.signup}>
					Crear cuenta
				</DropdownItem>
				<DropdownItem startContent={<IconLink />} href={links.login}>
					Iniciar sesión
				</DropdownItem>
			</DropdownMenu>
		</Dropdown>
	);
}
