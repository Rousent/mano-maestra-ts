"use client";
import { Button, Input, useDisclosure } from "@nextui-org/react";
import { IconKeyboard } from "@tabler/icons-react";
import { useEffect, useRef, useState } from "react";
import { unfiltered } from "./LSMGestures";
import Image from "next/image";
import VictoryModal from "./VictoryModal";
import { useReward } from "react-rewards";

export default function Guesser() {
	const [open, setOpen] = useState(false);

	if (!open) {
		return (
			<div className="flex flex-col justify-center items-center bg-blackcolor rounded-lg mx-auto self-center text-center w-[650px] h-[546px]">
				<div className="text-3xl font-bold text-white">
					Vamos a jugar
					<div className="text-yellow-200">Adivina la Palabra</div>
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

	return <InternalGuesser setOpen={setOpen} />;
}

function InternalGuesser({ setOpen }: any) {
	const gesture = "abcdefghijklmnñopqrstuvwxyzABCDEFGHIJKLMNÑOPQRSTUVWXYZ";
	const [initialCountdown, setInitialCountdown] = useState<number | null>(5);
	const [countdown, setCountdown] = useState<number | null>(null);
	const [conteo, setConteo] = useState<number>(0);
	const [palabra, setPalabra] = useState<string | null>(null);
	const [input, setInput] = useState<string>("");

	const bgmRef = useRef<HTMLAudioElement | null>(null);
	const correctRef = useRef<HTMLAudioElement | null>(null);

	const { isOpen, onOpen, onOpenChange } = useDisclosure();

	const startGame = () => {
		bgmRef.current?.play();
		setInitialCountdown(null);
		setCountdown(60);
		const word = unfiltered[Math.floor(Math.random() * unfiltered.length)];
		const wordi = word.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
		setPalabra(wordi.toUpperCase());
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

	const handleChange = (e: any) => {
		const value = e.target.value;
		const filteredValue = value
			.split("")
			.filter((char: any) => gesture.includes(char))
			.join("");
		setInput(filteredValue.toUpperCase());
	};

	useEffect(() => {
		if (input === palabra) {
			if (correctRef.current?.paused) {
				correctRef.current.play();
			} else if (correctRef.current) {
				correctRef.current.currentTime = 0;
			}
			setInput("");
			const word =
				unfiltered[Math.floor(Math.random() * unfiltered.length)];
			const wordi = word.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
			setPalabra(wordi.toUpperCase());
			setConteo(conteo + 1);
		}
	}, [input]);

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
					<div className="">
						<div className="flex flex-row justify-center mb-5">
							{palabra &&
								palabra
									.split("")
									.map((letter, index) => (
										<Image
											key={letter + index}
											src={`/img/Abecedario/man_${letter.toLowerCase()}.png`}
											width={100}
											height={100}
											alt={letter}
											className={
												"w-[100px] h-[100px] object-cover mx-1 rounded-lg border-3" +
												(input[index] === letter
													? " border-green-500"
													: "border-red-500")
											}
										></Image>
									))}
						</div>
						{palabra && (
							<Input
								className="w-1/3 mx-auto"
								onChange={handleChange}
								value={input}
							></Input>
						)}
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
						¡Completaste <strong>{conteo}</strong> palabras!
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
