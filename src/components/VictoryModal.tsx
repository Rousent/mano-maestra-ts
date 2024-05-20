import React, { useEffect } from "react";
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
	images,
	isOpen,
	onOpenChange,
	setOpen,
}: {
	images: any[];
	isOpen: boolean;
	onOpenChange: () => void;
	setOpen: any;
}) {
	const handleClose = (closeModal: () => void) => {
		setOpen(false);
		closeModal();
	};

	const { reward, isAnimating } = useReward("rewardId", "confetti");

	useEffect(() => {
		setInterval(() => {
			reward();
		}, 2000);
	}, []);

	return (
		<>
			<Modal isOpen={isOpen} onOpenChange={onOpenChange}>
				<ModalContent>
					{(onClose) => (
						<>
							<ModalHeader className="flex flex-col gap-1 text-center text-3xl">
								¡Bien hecho!
							</ModalHeader>
							<ModalBody>
								<Carousel images={images} />
								<span id="rewardId" className="mx-auto"></span>
							</ModalBody>
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
