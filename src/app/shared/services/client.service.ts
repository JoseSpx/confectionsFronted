import { Injectable } from '@angular/core';
import { Client } from '../models/Client';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { API_URL } from '../config/config';

const URL_CONTROLLER : string = "/clients"; 

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

  public findAllClients() : Observable<Client[]> {
    return this.http.get<Client[]>( API_URL + URL_CONTROLLER );
  }

  public findClientByID(id : number) :Observable<Client> {
    return this.http.get<Client>(API_URL + URL_CONTROLLER + "/" + id);
  }

}
