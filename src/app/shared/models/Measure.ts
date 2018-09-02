import { Client } from "./Client";
import { Clothe } from "./Clothe";

export interface Measure {

    position? : number;
    id? : number;
    title : string;
    comment : string;
    client : Client;
    clothe : Clothe;

}