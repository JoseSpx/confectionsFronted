import { Injectable } from '@angular/core';
import { Client } from '../models/Client';
import { clients } from '../mocks/clients';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { API_URL } from '../config/config';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json',
    'Authorization': 'my-auth-token'
  })
};

@Injectable({
  providedIn: 'root'
})
export class ClientService {

  constructor(private http : HttpClient) { }

  getClients() : Observable<Client[]> {
    console.log("BEFORE");
    return this.http.get<Client[]>("http://localhost:8080/api/clients", httpOptions);
    //console.log("DATA ",this.http.get<Client[]>("http://localhost:8080/api/clients"))
    //return of(clients);
  }


}
