import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { TypeMeasure } from '../models/TypeMeasure';
import { Observable, of } from 'rxjs';
import { API_URL } from '../config/config';
import { catchError } from 'rxjs/operators';

const URL_CONTROLLER : string = "/typemeasures";

const httpOptions = {
  headers : new HttpHeaders({
    'Content-type' : 'application/json'
  })
}

@Injectable({
  providedIn: 'root'
})
export class TypeMeasureService {

  constructor(
    private http : HttpClient
  ) { }

  public save(TypeMeasure : TypeMeasure) : Observable<TypeMeasure> {
    return this.http.post<TypeMeasure>(API_URL + URL_CONTROLLER, TypeMeasure, httpOptions)
      .pipe(
        catchError(this.handleError<TypeMeasure>("save TypeMeasure"))
      )
  }

  // public findById(id : number) : Observable<TypeMeasure> {
  //   return this.http.get<TypeMeasure>(API_URL + URL_CONTROLLER + "/" + id)
  //     .pipe(
  //       catchError(this.handleError<TypeMeasure>("find TypeMeasure by id"))
  //     )
  // }

  public update(id : number, TypeMeasure : TypeMeasure) : Observable<TypeMeasure> {
    return this.http.patch(API_URL + URL_CONTROLLER + "/" + id, TypeMeasure, httpOptions)
      .pipe(
        catchError(this.handleError<any>("update TypeMeasure"))
      )
  }

  public deleteById(id : number) {
    return this.http.delete<TypeMeasure>(API_URL + URL_CONTROLLER + "/" + id)
      .pipe(
        catchError(this.handleError<TypeMeasure>("delete TypeMeasure id :" + id))
      )
  }

  public findAllByClothesId(id : number) {
    return this.http.get<TypeMeasure[]>(API_URL + "/clothes/" + id + URL_CONTROLLER)
      .pipe(
        catchError(this.handleError<TypeMeasure[]>("findAll Typemeasure by clothe id"))
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

  private log(message: string) {
    console.log(message);
  }



}
