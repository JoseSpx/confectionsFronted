import { Client } from "./Client";
import { TypeMerasure } from "./TypeMeasure";

export interface Measure {

    position? : number;
    id? : number;
    model : string;
    client : Client;
    typemeasure : TypeMerasure;

}