import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Measure } from '../models/Measure';
import { Observable } from 'rxjs';
import { API_URL } from '../config/config';
import { catchError } from 'rxjs/operators';
import { of } from 'rxjs';

const URL_CONTROLLER : string = "/measures";

const httpOptions = {
  headers : new HttpHeaders({
    'Content-type' : 'application/json'
  })
}

@Injectable({
  providedIn: 'root'
})
export class MeasureService {

  constructor(private http : HttpClient) { }

  public save(measure : Measure) : Observable<Measure> {
    return this.http.post<Measure>(API_URL + URL_CONTROLLER, measure, httpOptions)
      .pipe(
        catchError(this.handleError<Measure>("save measure"))
      )
  }

  public findById(id : number) : Observable<Measure> {
    return this.http.get<Measure>(API_URL + URL_CONTROLLER + "/" + id)
      .pipe(
        catchError(this.handleError<Measure>("find measure by id"))
      )
  }

  public findAllByClientId(id : number) : Observable<Measure[]> {
    return this.http.get<Measure[]>(API_URL + URL_CONTROLLER + "/client/" + id)
      .pipe(
        catchError(this.handleError<Measure[]>("find all measures by client id", []))
      )
  }

  public findAll() : Observable<Measure[]> {
    return this.http.get<Measure[]>(API_URL + URL_CONTROLLER)
      .pipe(
        catchError(this.handleError<Measure[]>("find all measures", []))
      )
  }

  public update(id : number, measure : Measure) : Observable<Measure> {
    return this.http.patch(API_URL + URL_CONTROLLER + "/" + id, measure, httpOptions)
      .pipe(
        catchError(this.handleError<any>("update measure"))
      )
  }

  public deleteById(id : number) {
    return this.http.delete<Measure>(API_URL + URL_CONTROLLER + "/" + id)
      .pipe(
        catchError(this.handleError<Measure>("delete measure id :" + id))
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
