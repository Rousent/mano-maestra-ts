"use client";
import { Button, Input, useDisclosure } from "@nextui-org/react";
import { IconKeyboard } from "@tabler/icons-react";
import { useEffect, useRef, useState } from "react";
import { gesture } from "./LSMGestures";
import Image from "next/image";
import VictoryModal from "./VictoryModal";
import { useReward } from "react-rewards";

export default function Emparejar() {
	const [open, setOpen] = useState(false);

	if (!open) {
		return (
			<div className="flex flex-col justify-center items-center bg-blackcolor rounded-lg mx-auto self-center text-center w-[650px] h-[546px]">
				<div className="text-3xl font-bold text-white">
					Vamos a jugar
					<div className="text-yellow-200">Emparejar</div>
				</div>
				<button onClick={() => setOpen(true)} className="w-1/2 h-1/2">
					<IconKeyboard className="w-full h-full stroke-whitecolor" />
					<div className="text-3xl font-bold text-yellow-200">
						Empezar
					</div>
				</button>
			</div>
		);
	}

	return <InternalEmparejar setOpen={setOpen} />;
}

function InternalEmparejar({ setOpen }: any) {
	const [initialCountdown, setInitialCountdown] = useState<number | null>(5);
	const [countdown, setCountdown] = useState<number | null>(null);
	const [conteo, setConteo] = useState<number>(0);
	const [hands, setHands] = useState<string[]>([]);
	const [chars, setChars] = useState<string[]>([]);
	const [input1, setInput1] = useState<string>("");
	const [input2, setInput2] = useState<string>("");

	const bgmRef = useRef<HTMLAudioElement | null>(null);
	const correctRef = useRef<HTMLAudioElement | null>(null);

	const { isOpen, onOpen, onOpenChange } = useDisclosure();

	const startGame = () => {
		bgmRef.current?.play();
		setInitialCountdown(null);
		setCountdown(60);

		let chars: string[] = [];
		for (let i = 0; chars.length < 5; i++) {
			const letter = gesture[Math.floor(Math.random() * gesture.length)];
			if (!chars.includes(letter)) chars.push(letter);
		}
		const hands = chars.toSorted();
		setChars(chars);
		setHands(hands);
	};

	const endGame = () => {
		bgmRef.current?.pause();
		onOpen();
	};

	useEffect(() => {
		if (initialCountdown && initialCountdown > 0) {
			const timer = setInterval(() => {
				setInitialCountdown((prevSeconds: any) => prevSeconds - 1);
			}, 1000);

			// Limpia el intervalo cuando el componente se desmonta o cuando seconds cambia
			return () => clearInterval(timer);
		} else {
			startGame();
		}
	}, [initialCountdown]);

	useEffect(() => {
		if (countdown && countdown > 0) {
			const timer = setInterval(() => {
				setCountdown((prevSeconds: any) => prevSeconds - 1);
			}, 1000);

			// Limpia el intervalo cuando el componente se desmonta o cuando seconds cambia
			return () => clearInterval(timer);
		} else if (countdown === 0) {
			endGame();
		}
	}, [countdown]);

	useEffect(() => {
		if (input1 && input2 && input1 === input2) {
			if (correctRef.current?.paused) {
				correctRef.current.play();
			} else if (correctRef.current) {
				correctRef.current.currentTime = 0;
			}

			let chars: string[] = [];
			for (let i = 0; chars.length < 5; i++) {
				const letter =
					gesture[Math.floor(Math.random() * gesture.length)];
				if (!chars.includes(letter)) chars.push(letter);
			}
			const hands = chars.toSorted();
			setChars(chars);
			setHands(hands);
			setInput1("");
			setInput2("");

			setConteo(conteo + 1);
		}
	}, [input1, input2]);

	const win = useRef<HTMLAudioElement>(null);
	const { reward, isAnimating } = useReward("winning2", "confetti");

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
			<div className="flex flex-col justify-center items-center rounded-lg bg-blackcolor p-[5px] mx-auto w-5/6 h-[546px]">
				<div className="relative flex flex-row justify-center w-full">
					<Button
						className="absolute right-0 z-20"
						color="secondary"
						onClick={() => setOpen(false)}
					>
						Cerrar
					</Button>
					{countdown && (
						<span className="absolute top-0 left-0 bg-whitecolor p-2 rounded text-xl">
							{countdown}s
						</span>
					)}

					{countdown && (
						<span className="absolute top-0 bg-whitecolor p-2 rounded text-xl">
							Puntaje: {conteo}
						</span>
					)}
				</div>
				<div className="relative flex flex-col w-full h-full justify-center">
					<div className="absolute mt-5 mx-auto w-full flex justify-center">
						{initialCountdown && (
							<span className="text-3xl font-bold text-yellow-200">
								Inicia en {initialCountdown}s
							</span>
						)}
					</div>
					<div className="flex flex-col w-full gap-5 justify-center items-center">
						<div className="grid grid-cols-5">
							{hands.map((hand, index) => (
								<Button
									color={
										input1 === hand ? "primary" : "default"
									}
									key={hand + index}
									onClick={() => setInput1(hand)}
									className="w-[100px] h-[120px] object-cover mx-1 rounded-lg border-3"
								>
									<Image
										key={hand + index}
										src={`/img/Abecedario/man_${hand.toLowerCase()}.png`}
										width={100}
										height={100}
										alt={hand}
										className="w-[140px] h-[140px] object-cover mx-1 rounded-lg border-3"
									/>
								</Button>
							))}
						</div>
						<div className="grid grid-cols-5">
							{chars.map((char, index) => (
								<Button
									color={
										input2 === char ? "primary" : "default"
									}
									key={index + char}
									onClick={() => setInput2(char)}
									className="w-[100px] h-[100px] object-cover mx-1 rounded-lg border-3"
								>
									{char}
								</Button>
							))}
						</div>
					</div>
				</div>
				<audio
					id="bgmAudio"
					ref={bgmRef}
					src="/sound/bgm.mp3"
					itemType="audio/mpeg"
					loop
				></audio>
				<audio
					id="correctAudio"
					ref={correctRef}
					src="/sound/correct.mp3"
					itemType="audio/mpeg"
				></audio>
				<VictoryModal
					isOpen={isOpen}
					onOpenChange={onOpenChange}
					setOpen={setOpen}
				>
					<span className="text-xl text-center">
						¡Completaste <strong>{conteo}</strong> pares!
					</span>
					<span id="winning2" className="mx-auto"></span>
					<audio
						ref={win}
						src="/sound/applause.mp3"
						itemType="audio/mpeg"
					></audio>
				</VictoryModal>
			</div>
		</>
	);
}
