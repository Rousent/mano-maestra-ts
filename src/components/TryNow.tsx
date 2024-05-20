"use client";
import { useState, useRef } from "react";
import WebcamDetector from "./WebcamDetector";
import WebcamSpeller from "./WebcamSpeller";
import { Input } from "@nextui-org/input";
import { gesture } from "./LSMGestures";

export default function TryNow() {
	const [input, setInput] = useState("");

	return (
		<div className="flex flex-row gap-10">
			<div className="max-w-xl">
				<h3>
					¿Alguna vez te has preguntado como se deletrea tu nombre en
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

				<Input
					className="border-2 rounded-xl border-slate-600"
					onChange={(e) => setInput(e.target.value)}
				></Input>
			</div>

			{input ? <WebcamSpeller palabra={input} /> : <WebcamDetector />}
		</div>
	);
}
