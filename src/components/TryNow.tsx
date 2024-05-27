"use client";
import { useState, useRef } from "react";
import WebcamDetector from "./WebcamDetector";
import WebcamSpeller from "./WebcamSpeller";
import { Input } from "@nextui-org/input";

export default function TryNow() {
	const [input, setInput] = useState("");
	const gesture = "abcdefghilmnoprstuvwyABCDEFGHILMNOPRSTUVWY";

	const filter = (e: any) => {
		const value = e.target.value;
		const filteredValue = value
			.split("")
			.filter((char: any) => gesture.includes(char))
			.join("");
		setInput(filteredValue);
	};

	return (
		<div className="flex flex-row gap-10">
			<div className="max-w-xl">
				<h3>
					¿Alguna vez te has preguntado cómo se deletrea tu nombre en
					Lengua de Señas Mexicana?
				</h3>
				<p className="text-sm">
					<i>(Porque yo si...)</i>
				</p>
				<p>
					Si el modelo de reconocimiento libre se te queda corto,
					¿porque no pruebas a escribir tu nombre? ¡Veamos si puedes
					deletrearlo!
				</p>

				<p className="text-sm">
					<i>
						Nota: El sistema no puede reconocer letras con
						movimiento, por lo que las siguientes letras no se
						encuentran disponibles:{" "}
						<strong>J, K, Ñ, Q, X, Z</strong>
					</i>
				</p>

				<Input
					className="border-2 rounded-xl border-slate-600"
					onChange={filter}
					value={input}
				></Input>
			</div>

			{input ? <WebcamSpeller palabra={input} /> : <WebcamDetector />}
		</div>
	);
}
