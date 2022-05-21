export interface Nota {
    id:number;
    nombre: string;
    parcial1:number;
    parcial2:number;
    parcial3:number;
}

export interface CreateNotaDTO extends Omit<Nota,'id'>{};