"use client";
import * as handPoseDetection from "@tensorflow-models/hand-pose-detection";
import { MediaPipeHandsMediaPipeModelConfig } from "@tensorflow-models/hand-pose-detection";
import { useEffect, useRef } from "react";
import Webcam from "react-webcam";

const fingerLookupIndices = {
	thumb: [0, 1, 2, 3, 4],
	indexFinger: [0, 5, 6, 7, 8],
	middleFinger: [0, 9, 10, 11, 12],
	ringFinger: [0, 13, 14, 15, 16],
	pinky: [0, 17, 18, 19, 20],
};

export default function WebcamDetector() {
	const webcamRef = useRef<any>(null);
	const canvasRef = useRef<any>(null);

	const detect = async (detector: any) => {
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

		setInterval(() => {
			detect(detector);
		}, 100);
	};

	useEffect(() => {
		onMount();
	}, []);

	return (
		<div className="bg-gray-800 rounded-lg text-center self-center border-[5px] border-gray-800 w-fit h-fit">
			<div className="relative">
				<Webcam
					ref={webcamRef}
					className="rounded-lg mx-auto text-center w-fit h-fit"
				/>
				<canvas
					ref={canvasRef}
					className="absolute z-10 mx-auto rounded-lg top-0 left-0 w-fit h-fit"
				/>
			</div>
			<div className="py-3 text-white font-medium text-lg">Texto</div>
		</div>
	);
}

function drawCtx(ctx: any, video: any) {
	ctx.drawImage(video, 0, 0, video.videoWidth, video.videoHeight);
}

function clearCtx(ctx: any, video: any) {
	ctx.clearRect(0, 0, video.videoWidth, video.videoHeight);
}

/**
 * Draw the keypoints on the video.
 * @param hands A list of hands to render.
 */
function drawResults(ctx: any, hands: any) {
	for (const hand of hands) {
		drawResult(ctx, hand);
	}
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
	ctx.fillStyle = handedness === "Left" ? "Red" : "Blue";
	ctx.strokeStyle = "White";
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
