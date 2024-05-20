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
		if (!isAnimating) {
			reward();
		}
	}, [isAnimating, reward]);

	return (
		<>
			<Modal isOpen={isOpen} onOpenChange={onOpenChange}>
				<ModalContent>
					{(onClose) => (
						<>
							<ModalHeader className="flex flex-col gap-1">
								¡Bien hecho!
							</ModalHeader>
							<ModalBody>
								<span id="rewardId" className="mx-auto"></span>
								<Carousel images={images} />
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
