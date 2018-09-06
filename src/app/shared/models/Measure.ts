import { Client } from "./Client";
import { TypeMeasure } from "./TypeMeasure";

export interface Measure {

    position? : number;
    id? : number;
    model : string;
    client : Client;
    typemeasure : TypeMeasure;

}