import * as fp from "fingerpose";

const letra_A = new fp.GestureDescription("Letra A");
letra_A.addCurl(fp.Finger.Thumb, fp.FingerCurl.NoCurl, 1.0);
letra_A.addDirection(fp.Finger.Thumb, fp.FingerDirection.VerticalUp, 1.0);
letra_A.addDirection(fp.Finger.Thumb, fp.FingerDirection.DiagonalUpRight, 0.7);
// do this for all other fingers
for (let finger of [
	fp.Finger.Index,
	fp.Finger.Middle,
	fp.Finger.Ring,
	fp.Finger.Pinky,
]) {
	letra_A.addCurl(finger, fp.FingerCurl.FullCurl, 1.0);
	//letra_A.addCurl(finger, fp.FingerCurl.HalfCurl, 0.5);
	//letra_A.addDirection(finger, fp.FingerDirection.VerticalDown)
}
//

const letra_B = new fp.GestureDescription("Letra B");
letra_B.addCurl(fp.Finger.Thumb, fp.FingerCurl.FullCurl, 1.0);
for (let finger of [
	fp.Finger.Index,
	fp.Finger.Middle,
	fp.Finger.Ring,
	fp.Finger.Pinky,
]) {
	letra_B.addCurl(finger, fp.FingerCurl.NoCurl, 1.0);
	letra_B.addDirection(finger, fp.FingerDirection.VerticalUp, 1.0);
}
//

const letra_C = new fp.GestureDescription("Letra C");
for (let finger in [
	fp.Finger.Index,
	fp.Finger.Middle,
	fp.Finger.Ring,
	fp.Finger.Pinky,
	fp.Finger.Thumb,
]) {
	letra_C.addCurl(finger, fp.FingerCurl.HalfCurl);
	letra_C.addDirection(finger, fp.FingerDirection.HorizontalRight, 1.0);
}

const letra_D = new fp.GestureDescription("Letra D");
letra_D.addCurl(fp.Finger.Index, fp.FingerCurl.NoCurl, 1.0);
letra_D.addDirection(fp.Finger.Index, fp.FingerDirection.VerticalUp, 1.0);
for (let finger of [
	fp.Finger.Thumb,
	fp.Finger.Middle,
	fp.Finger.Ring,
	fp.Finger.Pinky,
]) {
	letra_D.addCurl(finger, fp.FingerCurl.HalfCurl, 1.0);
	letra_D.addDirection(finger, fp.FingerDirection.HorizontalRight, 1.0);
}

const letra_E = new fp.GestureDescription("Letra E");
letra_E.addCurl(fp.Finger.Thumb, fp.FingerCurl.FullCurl);
letra_E.addCurl(fp.Finger.Thumb, fp.FingerCurl.HalfCurl);
//letra_E.addDirection(fp.Finger.Thumb, fp.FingerDirection.HorizontalLeft, 1.0)
// do this for all other fingers
for (let finger of [
	fp.Finger.Index,
	fp.Finger.Middle,
	fp.Finger.Ring,
	fp.Finger.Pinky,
]) {
	letra_E.addCurl(finger, fp.FingerCurl.FullCurl, 1.0);
	//letra_E.addCurl(finger, fp.FingerCurl.HalfCurl, 1.0);
	//letra_E.addDirection(finger, fp.FingerDirection.VerticalDown)
}
//

const letra_F = new fp.GestureDescription("Letra F");
letra_F.addCurl(fp.Finger.Thumb, fp.FingerCurl.HalfCurl, 1.0);
letra_F.addCurl(fp.Finger.Index, fp.FingerCurl.HalfCurl, 1.0);
for (let finger of [fp.Finger.Middle, fp.Finger.Ring, fp.Finger.Pinky]) {
	letra_F.addCurl(finger, fp.FingerCurl.NoCurl, 1.0);
	letra_F.addDirection(finger, fp.FingerDirection.VerticalUp, 1.0);
}

const letra_G = new fp.GestureDescription("Letra G");
letra_G.addCurl(fp.Finger.Thumb, fp.FingerCurl.NoCurl, 1.0);
letra_G.addCurl(fp.Finger.Index, fp.FingerCurl.NoCurl, 1.0);
letra_G.addDirection(fp.Finger.Index, fp.FingerDirection.HorizontalRight, 1.0);
for (let finger of [fp.Finger.Middle, fp.Finger.Ring, fp.Finger.Pinky]) {
	letra_G.addCurl(finger, fp.FingerCurl.FullCurl, 1.0);
}

const letra_H = new fp.GestureDescription("Letra H");
letra_H.addCurl(fp.Finger.Thumb, fp.FingerCurl.NoCurl, 1.0);
for (let finger of [fp.Finger.Index, fp.Finger.Middle]) {
	letra_H.addCurl(finger, fp.FingerCurl.NoCurl, 1.0);
	letra_H.addDirection(finger, fp.FingerDirection.HorizontalRight, 1.0);
}
for (let finger of [fp.Finger.Ring, fp.Finger.Pinky]) {
	letra_H.addCurl(finger, fp.FingerCurl.FullCurl, 1.0);
}

const letra_I = new fp.GestureDescription("Letra I");
letra_I.addCurl(fp.Finger.Pinky, fp.FingerCurl.NoCurl);
letra_I.addDirection(fp.Finger.Pinky, fp.FingerDirection.VerticalUp);
for (let finger of [
	fp.Finger.Index,
	fp.Finger.Middle,
	fp.Finger.Ring,
	fp.Finger.Thumb,
]) {
	letra_I.addCurl(finger, fp.FingerCurl.FullCurl, 1.0);
	letra_I.addCurl(finger, fp.FingerCurl.HalfCurl, 1.0);
}

/** Letra L */
const letra_L = new fp.GestureDescription("Letra L");
letra_L.addDirection(fp.Finger.Index, fp.FingerDirection.VerticalUp, 1.0);
letra_L.addCurl(fp.Finger.Index, fp.FingerCurl.NoCurl, 1.0);
letra_L.addCurl(fp.Finger.Thumb, fp.FingerCurl.NoCurl, 1.0);
for (let finger of [fp.Finger.Middle, fp.Finger.Ring, fp.Finger.Pinky]) {
	letra_L.addCurl(finger, fp.FingerCurl.FullCurl, 1.0);
}

/** Letra M */
const letra_M = new fp.GestureDescription("Letra M");
letra_M.addCurl(fp.Finger.Pinky, fp.FingerCurl.HalfCurl, 1.0);
letra_M.addCurl(fp.Finger.Thumb, fp.FingerCurl.HalfCurl, 1.0);
for (let finger of [fp.Finger.Middle, fp.Finger.Ring, fp.Finger.Index]) {
	letra_M.addCurl(finger, fp.FingerCurl.NoCurl, 1.0);
	letra_M.addDirection(finger, fp.FingerDirection.VerticalDown, 1.0);
}

/** Letra N */
const letra_N = new fp.GestureDescription("Letra N");
for (let finger of [fp.Finger.Thumb, fp.Finger.Pinky, fp.Finger.Ring]) {
	letra_N.addCurl(finger, fp.FingerCurl.HalfCurl, 1.0);
	letra_N.addCurl(finger, fp.FingerCurl.FullCurl, 1.0);
}
for (let finger of [fp.Finger.Middle, fp.Finger.Index]) {
	letra_N.addCurl(finger, fp.FingerCurl.NoCurl, 1.0);
	letra_N.addDirection(finger, fp.FingerDirection.VerticalDown, 1.0);
}

const letra_O = new fp.GestureDescription("Letra O");
for (let finger in [
	fp.Finger.Index,
	fp.Finger.Middle,
	fp.Finger.Ring,
	fp.Finger.Pinky,
	fp.Finger.Thumb,
]) {
	letra_O.addCurl(finger, fp.FingerCurl.FullCurl, 1);
	letra_O.addCurl(finger, fp.FingerCurl.HalfCurl, 1);
}

const letra_U = new fp.GestureDescription("Letra U");
for (let finger in [fp.Finger.Index, fp.Finger.Middle]) {
	letra_U.addCurl(finger, fp.FingerCurl.NoCurl, 1.0);
	letra_U.addDirection(finger, fp.FingerDirection.VerticalUp, 1.0);
}
for (let finger in [fp.Finger.Ring, fp.Finger.Pinky, fp.Finger.Thumb]) {
	letra_U.addCurl(finger, fp.FingerCurl.HalfCurl, 1.0);
}

/** Letra W */
const letra_W = new fp.GestureDescription("Letra W");
letra_W.addDirection(fp.Finger.Middle, fp.FingerDirection.DiagonalUpLeft, 1.0);
letra_W.addDirection(fp.Finger.Ring, fp.FingerDirection.DiagonalUpRight, 1.0);
for (let finger in [fp.Finger.Ring, fp.Finger.Index, fp.Finger.Middle]) {
	letra_W.addCurl(finger, fp.FingerCurl.NoCurl, 1.0);
}
for (let finger in [fp.Finger.Pinky, fp.Finger.Thumb]) {
	letra_W.addCurl(finger, fp.FingerCurl.HalfCurl, 1.0);
}

/** Letra Y */
const letra_Y = new fp.GestureDescription("Letra Y");
letra_Y.addCurl(fp.Finger.Thumb, fp.FingerCurl.NoCurl, 1.0);
letra_Y.addCurl(fp.Finger.Pinky, fp.FingerCurl.NoCurl, 1.0);
letra_Y.addDirection(fp.Finger.Pinky, fp.FingerDirection.HorizontalRight, 1.0);
for (let finger in [fp.Finger.Index, fp.Finger.Middle, fp.Finger.Ring]) {
	letra_Y.addCurl(finger, fp.FingerCurl.HalfCurl, 1.0);
}

export const gesture = [
	"A",
	"B",
	"C",
	"D",
	"E",
	"F",
	"G",
	"H",
	"I",
	"L",
	"M",
	"N",
	"O",
	"P",
	"R",
	"S",
	"T",
	"U",
	"V",
	"W",
	"Y",
];
