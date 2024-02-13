import { UUID } from "crypto";

export type Usuario = {
	id: UUID;
	nombres: string;
	apellido_paterno: string;
	apellido_materno: string;
	email: string;
	idRol: number;
	rol: string;
	valor_nivel?: number;
	nivel?: string;
};

export type Leccion = {
	id_leccion: string;
	titulo: string;
	completado: boolean;
};
