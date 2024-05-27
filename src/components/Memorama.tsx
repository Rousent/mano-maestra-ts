"use client";
import { Button, useDisclosure } from "@nextui-org/react";
import { IconKeyboard, IconQuestionMark } from "@tabler/icons-react";
import { useEffect, useRef, useState } from "react";
import { gesture } from "./LSMGestures";
import Image from "next/image";
import VictoryModal from "./VictoryModal";
import { useReward } from "react-rewards";

export default function Memorama() {
	const [open, setOpen] = useState(false);

	if (!open) {
		return (
			<div className="flex flex-col justify-center items-center bg-blackcolor rounded-lg mx-auto self-center text-center w-[650px] h-[546px]">
				<div className="text-3xl font-bold text-white">
					Vamos a jugar
					<div className="text-yellow-200">Memorama</div>
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

	return <InternalMemorama setOpen={setOpen} />;
}

function InternalMemorama({ setOpen }: any) {
	const [initialCountdown, setInitialCountdown] = useState<number | null>(5);
	const [countdown, setCountdown] = useState<number | null>(null);
	const [conteo, setConteo] = useState<number>(0);
	const [hands, setHands] = useState<string[]>([]);
	const [input, setInput] = useState<string[]>([]);
	const [done, setDone] = useState<string[]>([]);

	const bgmRef = useRef<HTMLAudioElement | null>(null);
	const correctRef = useRef<HTMLAudioElement | null>(null);

	const { isOpen, onOpen, onOpenChange } = useDisclosure();

	const shuffle = (array: string[]) => {
		for (let i = array.length - 1; i > 0; i--) {
			const j = Math.floor(Math.random() * (i + 1));
			[array[i], array[j]] = [array[j], array[i]];
		}
		return array;
	};

	const startGame = () => {
		bgmRef.current?.play();
		setInitialCountdown(null);
		setCountdown(60);

		let chars: string[] = [];
		for (let i = 0; chars.length < 18; i++) {
			const letter = gesture[Math.floor(Math.random() * gesture.length)];
			if (!chars.includes(letter)) {
				chars.push(letter);
				chars.push(letter);
			}
		}
		setHands(shuffle(chars));
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
		if (input.length === 2) {
			if (input[0].charAt(0) === input[1].charAt(0)) {
				if (correctRef.current?.paused) {
					correctRef.current.play();
				} else if (correctRef.current) {
					correctRef.current.currentTime = 0;
				}
				setConteo(conteo + 1);
				setDone([...done, input[0], input[1]]);
			}
			setTimeout(() => {
				setInput([]);
			}, 500);
		}
	}, [input]);

	useEffect(() => {
		if (done.length === 18) {
			let chars: string[] = [];
			for (let i = 0; chars.length < 18; i++) {
				const letter =
					gesture[Math.floor(Math.random() * gesture.length)];
				if (!chars.includes(letter)) {
					chars.push(letter);
					chars.push(letter);
				}
			}
			setHands(shuffle(chars));
			setDone([]);
			setInput([]);
		}
	}, [done]);

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
						<div className="grid grid-cols-6 gap-5">
							{hands.map((hand, index) =>
								input.includes(hand + index) ? (
									<Button
										color={
											(input &&
												input[0] === hand + index) ||
											(input && input[1] === hand + index)
												? "primary"
												: "default"
										}
										key={hand + index}
										isDisabled={done.includes(hand + index)}
										onClick={() => {
											if (input && input.length === 2) {
												setInput([
													input[1],
													hand + index,
												]);
											} else {
												setInput([
													...input,
													hand + index,
												]);
											}
										}}
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
								) : (
									<Button
										color={
											(input &&
												input[0] === hand + index) ||
											(input && input[1] === hand + index)
												? "primary"
												: "default"
										}
										key={hand + index}
										isDisabled={done.includes(hand + index)}
										onClick={() => {
											if (input && input.length === 2) {
												setInput([
													input[1],
													hand + index,
												]);
											} else {
												setInput([
													...input,
													hand + index,
												]);
											}
										}}
										className="w-[100px] h-[120px] object-cover mx-1 rounded-lg border-3"
									>
										<IconQuestionMark className="w-full h-full" />
									</Button>
								)
							)}
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
