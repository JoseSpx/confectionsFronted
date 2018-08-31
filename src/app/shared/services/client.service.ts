import { Injectable } from '@angular/core';
import { Client } from '../models/Client';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { API_URL } from '../config/config';
import { catchError, map, tap } from 'rxjs/operators';

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
    return this.http.get<Client[]>( API_URL + URL_CONTROLLER )
      .pipe(
        catchError(this.handleError('findAllClients', [] ))
      );
  }

  public findClientByID(id : number) :Observable<Client> {
    return this.http.get<Client>(API_URL + URL_CONTROLLER + "/" + id)
      .pipe(
        catchError(this.handleError<Client>("find Client By ID : " + id))
      );
  }

  public saveClient(client : Client) : Observable<Client> {
    return this.http.post<Client>(API_URL + URL_CONTROLLER, client, httpOptions)
      .pipe(
        catchError(this.handleError<Client>("save client"))
      );
  }

  public updateClient(id : number, client : Client) : Observable<any> {
    return this.http.patch(API_URL + URL_CONTROLLER + "/" + id, client, httpOptions)
      .pipe(
        catchError(this.handleError<any>("update Client"))
      );
  }

  public deleteClient(id : number) : Observable<Client> {
    return this.http.delete<Client>(API_URL + URL_CONTROLLER + "/" + id)
      .pipe(
        catchError(this.handleError<Client>("delete client"))
      );
  }

  public searchByLastNameClient(lastName : string) {
    return this.http.get<Client[]>(API_URL + URL_CONTROLLER + "?lastname=" + lastName)
      .pipe(
        catchError(this.handleError<Client[]>("searchByLastNameClient", []))
      );
  }

  public searchByDniClient(dni : string) {
    return this.http.get<Client[]>(API_URL + URL_CONTROLLER + "?dni=" + dni)
      .pipe(
        catchError(this.handleError<Client[]>("searchByDniClient", []))
      )
  }

  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
 
      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead
 
      // TODO: better job of transforming error for user consumption
      this.log(`${operation} failed: ${error.message}`);
 
      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

    /** Log a HeroService message with the MessageService */
    private log(message: string) {
      console.log(message);
    }

}
