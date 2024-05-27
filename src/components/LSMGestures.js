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

export const words = [
	"casa",
	"silla",
	"mesa",
	"perro",
	"gato",
	"piano",
	"arbol",
	"sol",
	"luna",
	"vino",
	"sopa",
	"nieve",
	"fruta",
	"pluma",
	"flor",
	"sal",
	"miel",
	"pan",
	"copa",
	"vela",
	"limon",
	"mango",
	"rosa",
	"uva",
	"alma",
	"tapa",
	"palma",
	"sombrero",
	"verde",
	"lavar",
	"amor",
	"nido",
	"vaso",
	"bote",
	"radio",
	"noche",
	"mundo",
	"roca",
	"playa",
	"lago",
	"mano",
	"cielo",
	"valor",
	"sabor",
	"piel",
	"salida",
	"parque",
	"campo",
	"arco",
	"comida",
	"banco",
	"puerta",
	"ventana",
	"abrazo",
	"beso",
	"hielo",
	"pastel",
	"luz",
	"nube",
	"volar",
	"sombra",
	"marea",
	"piedra",
	"freno",
	"pulsera",
	"cadena",
	"libro",
	"cuento",
	"historia",
	"paz",
	"cama",
	"nave",
	"motor",
	"coche",
	"camion",
	"rumbo",
	"suerte",
	"plata",
	"dulce",
	"sonrisa",
	"mapa",
	"ropa",
	"camino",
	"viaje",
	"recuerdo",
	"reloj",
	"faro",
	"letra",
	"verso",
	"sueño",
	"verano",
	"invierno",
	"otoño",
	"brisa",
	"lluvia",
	"ladrillo",
	"puente",
	"ruta",
	"torre",
	"banda",
	"pais",
	"ciudad",
	"barrio",
	"mar",
	"cima",
	"piso",
	"suelo",
	"techo",
	"cortina",
	"cuadro",
	"trigo",
	"papa",
	"flora",
	"fauna",
	"viento",
	"agua",
	"canal",
	"duna",
	"grano",
	"hierba",
	"bosque",
	"arboleda",
	"sendero",
	"calle",
	"avenida",
	"plaza",
	"patio",
	"terraza",
	"rio",
	"arroyo",
	"laguna",
	"costa",
	"bahia",
	"isla",
	"colina",
	"monte",
	"valle",
	"cueva",
	"gruta",
	"dia",
	"hora",
	"minuto",
	"segundo",
	"instante",
	"momento",
	"eterno",
	"pasado",
	"futuro",
	"destello",
	"claror",
	"brillo",
	"albo",
	"albor",
	"amanecer",
	"aurora",
];

export const unfiltered = [
	"perro",
	"gato",
	"piano",
	"casa",
	"silla",
	"mesa",
	"vaca",
	"arbol",
	"sol",
	"luna",
	"vino",
	"sopa",
	"nieve",
	"fruta",
	"pluma",
	"flor",
	"sal",
	"miel",
	"pan",
	"copa",
	"vela",
	"limon",
	"lapiz",
	"mango",
	"rosa",
	"uva",
	"alga",
	"tapa",
	"palma",
	"sombrero",
	"sopa",
	"naranja",
	"verde",
	"lavar",
	"amor",
	"nido",
	"sillon",
	"vaso",
	"bote",
	"radio",
	"sierra",
	"noche",
	"alma",
	"vela",
	"fiesta",
	"mundo",
	"pueblo",
	"roca",
	"playa",
	"lago",
	"sol",
	"mano",
	"cielo",
	"valor",
	"sabor",
	"piel",
	"salida",
	"entrada",
	"parque",
	"campo",
	"arco",
	"dardo",
	"comida",
	"sal",
	"limonada",
	"vino",
	"banco",
	"puerta",
	"ventana",
	"abrazo",
	"beso",
	"nieve",
	"barco",
	"hielo",
	"pastel",
	"luz",
	"nube",
	"volar",
	"sombra",
	"miel",
	"sombrero",
	"marea",
	"piedra",
	"lima",
	"valor",
	"freno",
	"pulsera",
	"cadena",
	"libro",
	"cuento",
	"historia",
	"paz",
	"cama",
	"nave",
	"motor",
	"coche",
	"camion",
	"rumbo",
	"suerte",
	"plata",
	"dulce",
	"sonrisa",
	"mapa",
	"ropa",
	"camino",
	"viaje",
	"recuerdo",
	"reloj",
	"faro",
	"campo",
	"letra",
	"verso",
	"sueño",
	"mañana",
	"verano",
	"invierno",
	"otoño",
	"brisa",
	"cielo",
	"lluvia",
	"ladrillo",
	"puente",
	"ruta",
	"torre",
	"banda",
	"país",
	"ciudad",
	"pueblo",
	"faro",
	"lago",
	"montaña",
	"barrio",
	"mar",
	"cima",
	"piso",
	"suelo",
	"techo",
	"cortina",
	"cuadro",
	"flor",
	"mundo",
	"trigo",
	"soja",
	"papa",
	"rosa",
	"flora",
	"fauna",
	"viento",
	"agua",
	"canal",
	"duna",
	"grano",
	"hierba",
	"pastizal",
	"bosque",
	"arboleda",
	"campo",
	"piedra",
	"roca",
	"camino",
	"sendero",
	"ruta",
	"carretera",
	"calle",
	"avenida",
	"plaza",
	"parque",
	"jardin",
	"patio",
	"terraza",
	"piscina",
	"rio",
	"arroyo",
	"pantano",
	"laguna",
	"mar",
	"oceano",
	"playa",
	"costa",
	"bahia",
	"golfo",
	"peninsula",
	"isla",
	"archipielago",
	"colina",
	"monte",
	"cordillera",
	"valle",
	"depresion",
	"caverna",
	"cueva",
	"gruta",
	"acantilado",
	"desfiladero",
	"cañon",
	"meseta",
	"planicie",
	"llanura",
	"pradera",
	"estepa",
	"tundra",
	"glaciar",
	"volcan",
	"crater",
	"geiser",
	"fuente",
	"manantial",
	"cenote",
	"pozo",
	"aguasubterranea",
	"nacimiento",
	"delta",
	"albufera",
	"ria",
	"riachuelo",
	"cascada",
	"catarata",
	"salto",
	"rapido",
	"torrente",
	"remolino",
	"corriente",
	"oleaje",
	"marea",
	"resaca",
	"ola",
	"brisa",
	"vendaval",
	"tormenta",
	"ciclón",
	"huracán",
	"tifón",
	"tempestad",
	"granizo",
	"nieve",
	"nevada",
	"ventisca",
	"tormentanevada",
	"avalacha",
	"ventolera",
	"rafaga",
	"bruma",
	"niebla",
	"neblina",
	"rocío",
	"escarcha",
	"cencellada",
	"nubarrón",
	"nublina",
	"claridad",
	"oscurecer",
	"crepusculo",
	"anochecer",
	"aurora",
	"alborada",
	"amanecer",
	"salida",
	"puesta",
	"orto",
	"ocaso",
	"mediodía",
	"medianoche",
	"noche",
	"día",
	"mañana",
	"tarde",
	"madrugada",
	"hora",
	"minuto",
	"segundo",
	"instante",
	"momento",
	"eterno",
	"perpetuo",
	"transitorio",
	"pasajero",
	"efímero",
	"temporal",
	"permanente",
	"duradero",
	"inmortal",
	"fugaz",
	"imperdurable",
	"momentáneo",
	"provisional",
	"breve",
	"corto",
	"largo",
	"continuo",
	"discontinuo",
	"reiterado",
	"repetido",
	"alterno",
	"sucesivo",
	"concatenado",
	"encadenado",
	"secuencial",
	"lineal",
	"paralelo",
	"coincidente",
	"concomitante",
	"simultaneo",
	"sincronico",
	"diacrónico",
	"sincrónico",
	"simultáneo",
	"sucesivo",
	"consecutivo",
	"interrumpido",
	"intermitente",
	"esporádico",
	"ocasional",
	"habitual",
	"frecuente",
	"asiduo",
	"recurrente",
	"reiterativo",
	"periódico",
	"constante",
	"regular",
	"irregular",
	"cíclico",
	"circular",
	"enebrado",
	"encadenado",
	"hilo",
	"cadena",
	"rosario",
	"serie",
	"secuencia",
	"sucesión",
	"procesión",
	"continuidad",
	"interminable",
	"infinito",
	"eterno",
	"perpetuo",
	"intemporal",
	"anacrónico",
	"intemporal",
	"atemporal",
	"ulterior",
	"posterior",
	"precedente",
	"precedido",
	"anteriore",
	"pasado",
	"futuro",
	"venidero",
	"prospectivo",
	"presentido",
	"previsible",
	"inesperado",
	"sorpresivo",
	"imprevisto",
	"inopinado",
	"inesperado",
	"fortuito",
	"azaroso",
	"contingente",
	"eventual",
	"subito",
	"repentino",
	"inminente",
	"próximo",
	"inmediato",
	"relámpago",
	"destello",
	"fulgor",
	"chispazo",
	"luz",
	"claror",
	"resplandor",
	"luminosidad",
	"brillo",
	"esplendor",
	"luminaria",
	"fluorescencia",
	"fosforescencia",
	"fulgor",
	"resplandor",
	"candor",
	"claridad",
	"albo",
	"albor",
	"amanecer",
];
