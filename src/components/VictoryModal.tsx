import React, { useEffect, useRef } from "react";
import {
	Modal,
	ModalContent,
	ModalHeader,
	ModalBody,
	ModalFooter,
	Button,
} from "@nextui-org/react";
import Carousel from "./Carrusel";
import { useReward } from "react-rewards";

export default function VictoryModal({
	isOpen,
	onOpenChange,
	setOpen,
	children,
}: {
	isOpen: boolean;
	onOpenChange: () => void;
	setOpen: any;
	children: any;
}) {
	const handleClose = (closeModal: () => void) => {
		setOpen(false);
		closeModal();
	};

	return (
		<>
			<Modal
				isOpen={isOpen}
				onOpenChange={onOpenChange}
				hideCloseButton
				isDismissable={false}
			>
				<ModalContent>
					{(onClose) => (
						<>
							<ModalHeader className="flex flex-col gap-1 text-center text-3xl">
								¡Bien hecho!
							</ModalHeader>
							<ModalBody>{children}</ModalBody>
							<ModalFooter>
								<Button
									color="danger"
									variant="light"
									onPress={() => handleClose(onClose)}
								>
									Terminar
								</Button>
							</ModalFooter>
						</>
					)}
				</ModalContent>
			</Modal>
		</>
	);
}
