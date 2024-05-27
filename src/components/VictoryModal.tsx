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
	images,
	isOpen,
	onOpenChange,
	setOpen,
	palabra,
	time,
}: {
	images: any[];
	isOpen: boolean;
	onOpenChange: () => void;
	setOpen: any;
	palabra: string;
	time: string;
}) {
	const handleClose = (closeModal: () => void) => {
		setOpen(false);
		closeModal();
	};

	const win = useRef<HTMLAudioElement>(null);
	const { reward, isAnimating } = useReward("rewardId", "confetti");

	useEffect(() => {
		if (win.current) {
			win.current.play();
			reward();
		}
	}, [win.current]);

	useEffect(() => {
		if (!isAnimating) {
			reward();
		}
	}, [isAnimating]);

	return (
		<>
			<Modal isOpen={isOpen} onOpenChange={onOpenChange} hideCloseButton>
				<ModalContent>
					{(onClose) => (
						<>
							<ModalHeader className="flex flex-col gap-1 text-center text-3xl">
								¡Bien hecho!
							</ModalHeader>
							<ModalBody>
								<span className="text-xl text-center">
									¡Deletraste <strong>{palabra}</strong> en{" "}
									{time} segundos!
								</span>
								<Carousel images={images} />
								<span id="rewardId" className="mx-auto"></span>
								<audio
									ref={win}
									src="/sound/applause.mp3"
									itemType="audio/mpeg"
								></audio>
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
