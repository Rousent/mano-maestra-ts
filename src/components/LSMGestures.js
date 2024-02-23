import * as fp from "fingerpose";

const letra_A = new fp.GestureDescription("Letra A");
letra_A.addCurl(fp.Finger.Thumb, fp.FingerCurl.NoCurl);
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
	letra_B.addCurl(finger, fp.FingerCurl.NoCurl);
	letra_B.addDirection(fp.Finger.Thumb, fp.FingerDirection.VerticalUp, 1.0);
}
//

const letra_C = new fp.GestureDescription("Letra C");

const letra_D = new fp.GestureDescription("Letra D");
letra_D.addCurl(fp.Finger.Index, fp.FingerCurl.NoCurl, 1.0);
letra_D.addDirection(fp.Finger.Index, fp.FingerDirection.VerticalUp, 1.0);
for (let finger of [
	fp.Finger.Thumb,
	fp.Finger.Middle,
	fp.Finger.Ring,
	fp.Finger.Pinky,
]) {
	letra_D.addCurl(finger, fp.FingerCurl.HalfCurl);
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
letra_F.addCurl(fp.Finger.Thumb, fp.FingerCurl.HalfCurl);
letra_F.addCurl(fp.Finger.Index, fp.FingerCurl.HalfCurl);
for (let finger of [fp.Finger.Middle, fp.Finger.Ring, fp.Finger.Pinky]) {
	letra_F.addCurl(finger, fp.FingerCurl.NoCurl, 1.0);
	letra_F.addDirection(finger, fp.FingerDirection.VerticalUp, 1.0);
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
}

const letra_O = new fp.GestureDescription("Letra O");
for (let finger in [
	fp.Finger.Index,
	fp.Finger.Middle,
	fp.Finger.Ring,
	fp.Finger.Pinky,
	fp.Finger.Thumb,
]) {
	letra_O.addCurl(finger, fp.FingerCurl.HalfCurl);
	//letra_O.addDirection(finger, fp.FingerDirection.HorizontalRight, 1.0)
}

const letra_U = new fp.GestureDescription("Letra U");
for (let finger in [fp.Finger.Index, fp.Finger.Middle]) {
	letra_U.addCurl(finger, fp.FingerCurl.NoCurl);
	letra_U.addDirection(finger, fp.FingerDirection.VerticalUp, 1.0);
}
for (let finger in [fp.Finger.Ring, fp.Finger.Pinky, fp.Finger.Thumb]) {
	letra_U.addCurl(finger, fp.FingerCurl.FullCurl);
	letra_U.addCurl(finger, fp.FingerCurl.HalfCurl);
}

export const gestures = [
	letra_A,
	letra_B,
	letra_D,
	letra_E,
	letra_F,
	letra_I,
	letra_O,
	letra_U,
];
