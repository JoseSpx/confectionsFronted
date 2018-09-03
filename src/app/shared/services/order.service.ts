import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Order } from '../models/Order';
import { Observable, of } from 'rxjs';
import { API_URL } from '../config/config';
import { catchError } from 'rxjs/operators';

const URL_CONTROLLER : string = "/orders";

const httpOptions = {
  headers : new HttpHeaders({
    'Content-type' : 'application/json'
  })
}

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  constructor(private http : HttpClient) { }

  public save(order : Order) : Observable<Order> {
    return this.http.post<Order>(API_URL + URL_CONTROLLER, order, httpOptions)
      .pipe(
        catchError(this.handleError<Order>("save Order"))
      )
  }

  public findById(id : number) : Observable<Order> {
    return this.http.get<Order>(API_URL + URL_CONTROLLER + "/" + id)
      .pipe(
        catchError(this.handleError<Order>("find Order by id"))
      )
  }

  public findAllByClientId(id : number) : Observable<Order[]> {
    return this.http.get<Order[]>(API_URL + URL_CONTROLLER + "/client/" + id)
      .pipe(
        catchError(this.handleError<Order[]>("find all Orders by client id", []))
      )
  }

  public findAll() : Observable<Order[]> {
    return this.http.get<Order[]>(API_URL + URL_CONTROLLER)
      .pipe(
        catchError(this.handleError<Order[]>("find all Orders", []))
      )
  }

  public update(id : number, Order : Order) : Observable<Order> {
    return this.http.patch(API_URL + URL_CONTROLLER + "/" + id, Order, httpOptions)
      .pipe(
        catchError(this.handleError<any>("update Order"))
      )
  }

  public deleteById(id : number) {
    return this.http.delete<Order>(API_URL + URL_CONTROLLER + "/" + id)
      .pipe(
        catchError(this.handleError<Order>("delete Order id :" + id))
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
