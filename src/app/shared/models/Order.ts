import { Client } from "./Client";

export interface Order {

    position? : number ;
    id? : number;
    dateDeal : string;
    dateTrial? : string;
    dateDelivery? : string;
    timeDial? : string;
    timeTrial? : string;
    timeDelivery? : string;
    comment : string;
    client : Client;
}



