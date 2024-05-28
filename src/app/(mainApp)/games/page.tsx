"use client";
import { useEffect, useState } from "react";
import { words } from "@/components/LSMGestures";
import { Button, Input } from "@nextui-org/react";
import WebcamSpeller from "@/components/WebcamSpeller";
import Guesser from "@/components/Guesser";
import Emparejar from "@/components/Emparejar";
import Memorama from "@/components/Memorama";

export default function Games() {
	const gesture = "abcdefghilmnoprstuvwyABCDEFGHILMNOPRSTUVWY";
	const [randomWord, setRandomWord] = useState<string>("");

	const getRandomWord = () => {
		const word = words[Math.floor(Math.random() * words.length)];
		setRandomWord(word);
	};

	const filter = (e: any) => {
		const value = e.target.value;
		const filteredValue = value
			.split("")
			.filter((char: any) => gesture.includes(char))
			.join("");
		setRandomWord(filteredValue);
	};

	useEffect(() => {
		getRandomWord();
	}, []);

	useEffect(() => {
		if (randomWord.includes("jJkKñÑqQxXzZ")) {
			getRandomWord();
		}
	}, [randomWord]);

	return (
		<div className="flex flex-col gap-2 w-full h-full m-2">
			<h1>Juegos</h1>
			<p>
				En Mano Maestra, creemos que los juegos son una buena manera de
				aprender. Estos son algunos de los juegos que puedes probar.
			</p>

			<div className="mb-10">
				<h2>Deletrear</h2>

				<p>
					Escribe una palabra, o genera una al azar y deletreala
					usando la webcam.
				</p>

				<p className="text-sm">
					<i>
						Nota: El sistema no puede reconocer letras con
						movimiento, por lo que las siguientes letras no se
						encuentran disponibles:{" "}
						<strong>J, K, Ñ, Q, X, Z</strong>
					</i>
				</p>

				<div className="flex flex-col md:flex-row w-1/2 mx-auto mb-3 justify-center items-center gap-5">
					<Input
						className="border-2 rounded-xl border-slate-600"
						onChange={filter}
						value={randomWord}
					/>
					<Button
						color="secondary"
						className="w-fit flex-shrink-0"
						onPress={getRandomWord}
					>
						Usar palabra al azar
					</Button>
				</div>
				<WebcamSpeller palabra={randomWord} />
			</div>

			<div>
				<h2>Adivina la palabra</h2>
				<p>
					Al dar click en el botón, aparecera una secuencia de señas
					que deletrean una palabra. Escribe la palabra correctamente
					para continuar.
				</p>
				<p>
					Tendras <strong>60 segundos</strong> para adivinar tantas
					palabras como puedas.
				</p>

				<Guesser />
			</div>

			<div>
				<h2>Emparejar</h2>
				<p>
					Al dar click en el botón, apareceran señas y letras por
					igual. Presiona una seña y una letra para emparejarlas.
				</p>
				<p>
					Tendras <strong>60 segundos</strong> para emparejar tantas
					señas como puedas.
				</p>

				<Emparejar />
			</div>

			<div>
				<h2>Memorama</h2>

				<p>
					Al dar click en el botón, apareceran varias tarjetas con
					señas ocultas. Presiona una tarjeta para revelar la seña que
					oculta y encuentra su pareja.
				</p>
				<p>
					Tendras <strong>60 segundos</strong> para emparejar tantas
					señas como puedas.
				</p>

				<Memorama />
			</div>
		</div>
	);
}
