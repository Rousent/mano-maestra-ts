"use client";
import * as handPoseDetection from "@tensorflow-models/hand-pose-detection";
import { MediaPipeHandsMediaPipeModelConfig } from "@tensorflow-models/hand-pose-detection";
import { useEffect, useRef, useState, useCallback } from "react";
import Webcam from "react-webcam";
import { Button } from "@nextui-org/button";
import { IconCamera } from "@tabler/icons-react";
import * as tf from "@tensorflow/tfjs";
import { gesture } from "./LSMGestures";
import VictoryModal from "./VictoryModal";
import { useDisclosure } from "@nextui-org/react";
import Image from "next/image";

const fingerLookupIndices: any = {
	thumb: [0, 1, 2, 3, 4],
	indexFinger: [0, 5, 6, 7, 8],
	middleFinger: [0, 9, 10, 11, 12],
	ringFinger: [0, 13, 14, 15, 16],
	pinky: [0, 17, 18, 19, 20],
};

export default function WebcamSpeller({ palabra }: { palabra: string }) {
	const [open, setOpen] = useState(false);

	const deletrear = palabra.toUpperCase();

	if (!open) {
		return (
			<div className="flex flex-col justify-center items-center bg-blackcolor rounded-lg mx-auto self-center text-center w-[680px] h-[480px]">
				<div className="text-3xl font-bold text-white">
					Vamos a deletrar{" "}
					<div className="text-yellow-200">{deletrear}</div>
				</div>
				<button onClick={() => setOpen(true)} className="w-1/2 h-1/2">
					<IconCamera className="w-full h-full stroke-whitecolor" />
					<div className="text-3xl font-bold text-yellow-200">
						Empezar
					</div>
				</button>
			</div>
		);
	}

	return <WebcamSpellerInternal setOpen={setOpen} deletrear={deletrear} />;
}

export function WebcamSpellerInternal({
	deletrear,
	setOpen,
}: {
	deletrear: string;
	setOpen: any;
}) {
	const [progreso, setProgreso] = useState(0);
	const [mensaje, setMensaje] = useState<string | null>(null);
	// Fuck React
	const stateRef = useRef(progreso);
	const [images, setImages] = useState<String[]>([]);
	const [image, setImage] = useState<any>(null);
	const webcamRef = useRef<any>(null);
	const canvasRef = useRef<any>(null);
	const bgmRef = useRef<HTMLAudioElement | null>(null);
	const correctRef = useRef<HTMLAudioElement | null>(null);
	const hiddenCanvasRef = useRef<any>(null);
	const { isOpen, onOpen, onOpenChange } = useDisclosure();

	const capture = useCallback(() => {
		const imageSrc = webcamRef.current.getScreenshot();
		setImages((images) => [...images, imageSrc]);
	}, [webcamRef]);

	const detect = async (detector: any, core: any) => {
		if (
			typeof webcamRef !== "undefined" &&
			webcamRef.current !== null &&
			webcamRef.current.video.readyState === 4
		) {
			const video = webcamRef.current.video;
			const videoWidth = webcamRef.current.video.videoWidth;
			const videoHeight = webcamRef.current.video.videoHeight;

			webcamRef.current.video.width = videoWidth;
			webcamRef.current.video.height = videoHeight;

			canvasRef.current.width = videoWidth;
			canvasRef.current.height = videoHeight;

			const hands = await detector.estimateHands(video);

			const ctx = canvasRef.current.getContext("2d");

			// "It's PREDICTION TIME!!!"
			if (hands.length > 0 && hands[0]["handedness"] === "Left") {
				//Por ahora solo una mano

				//Obtener tensor
				const inputTensor = processPrediction(hands[0]["keypoints3D"]);
				//Predecir
				const prediction = core.predict(inputTensor);
				//Procesar output
				const predictionArray = prediction.arraySync();
				//Obtener clase
				const predictedClass = predictionArray[0].indexOf(
					Math.max(...predictionArray[0])
				);

				if (hands.length > 0 && hands[0]["handedness"] === "Left") {
					setImage(
						<Image
							src={
								"/img/Abecedario/man_" +
								gesture[predictedClass].toLowerCase() +
								".png"
							}
							alt={gesture[predictedClass]}
							width={100}
							height={100}
							className="absolute left-0 bottom-0 z-20"
						/>
					);
				} else {
					setImage(null);
				}

				// Comprobar que hace la seña correctamente
				if (
					gesture[predictedClass] ==
					deletrear.charAt(stateRef.current)
				) {
					if (stateRef.current === 0) {
						setMensaje(null);
						setRunning(true);
					}

					if (correctRef.current?.paused) {
						correctRef.current.play();
					} else if (correctRef.current) {
						correctRef.current.currentTime = 0;
					}
					setProgreso(stateRef.current + 1);
					capture();
				} else if (stateRef.current === deletrear.length) {
					setRunning(false);
					bgmRef.current?.pause();
					onOpen();
				}
			} else {
			}
			drawResults(ctx, hands);
		}
	};

	const onMount = async () => {
		const model = handPoseDetection.SupportedModels.MediaPipeHands;
		const detectorConfig: MediaPipeHandsMediaPipeModelConfig = {
			runtime: "mediapipe", // or 'tfjs',
			solutionPath: "https://cdn.jsdelivr.net/npm/@mediapipe/hands",
			modelType: "full",
		};
		const detector = await handPoseDetection.createDetector(
			model,
			detectorConfig
		);

		const core = await tf.loadLayersModel("/model/model.json");

		if (core) setMensaje("Coloque la mano derecha frente a la camara.");

		if (bgmRef.current) {
			bgmRef.current.play();
		}

		setInterval(() => {
			detect(detector, core);
		}, 100);
	};

	useEffect(() => {
		onMount();
	}, []);

	useEffect(() => {
		stateRef.current = progreso;
	}, [progreso]);

	// Contador

	const [time, setTime] = useState(0);
	const [running, setRunning] = useState(false);
	const intervalRef = useRef<any>(null);

	useEffect(() => {
		if (running) {
			const startTime = Date.now() - time;
			intervalRef.current = setInterval(() => {
				setTime(Date.now() - startTime);
			}, 10);
		} else {
			clearInterval(intervalRef.current);
		}

		return () => clearInterval(intervalRef.current);
	}, [running, time]);

	const resetCounter = () => {
		setRunning(false);
		setTime(0);
	};

	const formatTime = (time: any) => {
		const milliseconds = ("0" + (Math.floor(time / 10) % 100)).slice(-2);
		const seconds = ("0" + (Math.floor(time / 1000) % 60)).slice(-2);
		const minutes = ("0" + (Math.floor(time / 60000) % 60)).slice(-2);
		return `${minutes}:${seconds}.${milliseconds}`;
	};

	return (
		<div className="flex flex-col justify-center items-center rounded-lg bg-blackcolor p-[5px] mx-auto w-fit h-fit">
			<div className="relative">
				<Button
					className="absolute right-0 z-20"
					color="secondary"
					onClick={() => setOpen(false)}
				>
					Cerrar
				</Button>
				<span className="absolute top-0 left-0 bg-whitecolor p-2 rounded">
					{formatTime(time)}
				</span>
				<div className="absolute mt-5 mx-auto w-full flex justify-center">
					<span className="text-whitecolor bg-blackcolor p-3 w-fit rounded-3xl">
						{mensaje}
					</span>
				</div>
				{image}

				<Webcam
					ref={webcamRef}
					className="rounded-lg mx-auto text-center w-fit h-fit"
				/>
				<canvas
					ref={canvasRef}
					className="absolute z-10 mx-auto rounded-lg top-0 left-0 w-fit h-fit"
				/>
			</div>
			<div className="py-3 text-whitecolor font-medium text-2xl">
				<div className="inline text-green-500">
					{progreso > 0 ? deletrear.substring(0, progreso) : ""}
				</div>
				<div className="inline text-yellow-200">
					{deletrear.charAt(progreso)}
				</div>
				<div className="inline text-gray-300">
					{deletrear.slice(progreso + 1)}
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
			<canvas ref={hiddenCanvasRef} style={{ display: "none" }}></canvas>
			<VictoryModal
				isOpen={isOpen}
				onOpenChange={onOpenChange}
				setOpen={setOpen}
				images={images}
				palabra={deletrear}
				time={formatTime(time)}
			/>
		</div>
	);
}

/**
 * Convertir la predicción de la mano a arreglo plano y luego a un tensor.
 * @param hand es la mano a predecir.
 * @returns tensor de entrada para modelo tensorflowjs.
 */
function processPrediction(hand: any) {
	let keypoints: any = [];

	hand.map((keypoint: any) => {
		keypoints.push(keypoint["x"], keypoint["y"], keypoint["z"]);
	});

	const tensor = tf.tensor([keypoints], [1, 63]);

	return tensor;
}

/**
 * Draw the keypoints on the video.
 * @param hands A list of hands to render.
 */
function drawResults(ctx: any, hands: any) {
	if (hands.length > 0 && hands[0]["handedness"] === "Left") {
		drawResult(ctx, hands[0]);
	}
	/**
	for (const hand of hands) {
		drawResult(ctx, hand);
	}
	*/
}

/**
 * Draw the keypoints on the video.
 * @param hand A hand with keypoints to render.
 * @param ctxt Scatter GL context to render 3D keypoints to.
 */
function drawResult(ctx: any, hand: any) {
	if (hand.keypoints != null) {
		drawKeypoints(ctx, hand.keypoints, hand.handedness);
	}
}

/**
 * Draw the keypoints on the video.
 * @param keypoints A list of keypoints.
 * @param handedness Label of hand (either Left or Right).
 */
function drawKeypoints(ctx: any, keypoints: any, handedness: any) {
	const keypointsArray = keypoints;
	ctx.fillStyle = handedness === "Left" ? "#ff6933" : "#004e8a";
	ctx.strokeStyle = "#fbfbfe";
	ctx.lineWidth = 2;

	for (let i = 0; i < keypointsArray.length; i++) {
		const y = keypointsArray[i].x;
		const x = keypointsArray[i].y;
		drawPoint(ctx, x - 2, y - 2, 3);
	}

	const fingers = Object.keys(fingerLookupIndices);
	for (let i = 0; i < fingers.length; i++) {
		const finger = fingers[i];
		const points = fingerLookupIndices[finger].map(
			(idx: any) => keypoints[idx]
		);
		drawPath(ctx, points, false);
	}
}

function drawPath(ctx: any, points: any, closePath: any) {
	const region = new Path2D();
	region.moveTo(points[0].x, points[0].y);
	for (let i = 1; i < points.length; i++) {
		const point = points[i];
		region.lineTo(point.x, point.y);
	}

	if (closePath) {
		region.closePath();
	}
	ctx.stroke(region);
}

function drawPoint(ctx: any, y: any, x: any, r: any) {
	ctx.beginPath();
	ctx.arc(x, y, r, 0, 2 * Math.PI);
	ctx.fill();
}
