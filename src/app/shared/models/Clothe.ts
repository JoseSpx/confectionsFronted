import { TypeMeasure } from './TypeMeasure';

export interface Clothe {

    position? : number;
    id? : number;
    name: string;
    eliminated? : string;
    typeMeasureSet? : TypeMeasure[];

}