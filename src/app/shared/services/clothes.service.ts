import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Clothe } from '../models/Clothe';
import { API_URL } from '../config/config';
import { catchError } from 'rxjs/operators';
import { of } from 'rxjs';

const URL_CONTROLLER : string = "/clothes";

const httOptions = {
  headers : new HttpHeaders({
    'Content-Type' : 'application/json'
  })
} 

@Injectable({
  providedIn: 'root'
})
export class ClothesService {

  constructor(private http : HttpClient) { }

  public saveClothes(clothes : Clothe) : Observable<Clothe> {
    return this.http.post<Clothe>(API_URL + URL_CONTROLLER, clothes, httOptions)
      .pipe(
        catchError(this.handleError<Clothe>("save clothes"))
      )

  }

  public findClothesById(id : number) : Observable<Clothe> {
    return this.http.get<Clothe>(API_URL + URL_CONTROLLER + "/" + id)
      .pipe(
        catchError(this.handleError<Clothe>("find clothes by id : " + id))
      );
  }

  public findAllClothes() : Observable<Clothe[]> {
    return this.http.get<Clothe[]>(API_URL + URL_CONTROLLER)
      .pipe(
        catchError(this.handleError<Clothe[]>("findAll clothes", []))
      )
  }

  public updateClothes(id : number, clothes : Clothe) : Observable<Clothe> {
    return this.http.patch(API_URL + URL_CONTROLLER + "/" + id, clothes, httOptions)
      .pipe(
        catchError(this.handleError<any>("update clothes"))
      )
  }

  public deleteClothesById(id : number) {
    return this.http.delete<Clothe>(API_URL + URL_CONTROLLER + "/" + id)
      .pipe(
        catchError(this.handleError<Clothe>("delete clothes id :" + id))
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
