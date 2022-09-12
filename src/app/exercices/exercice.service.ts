import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError , Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import HttpErrorHandler, { HandleError } from '../error.service';
import { Exercice } from './exercice';

@Injectable({
  providedIn: 'root'
})
export class ExerciceService {

  entityUrl = environment.REST_API_URL + 'exercice';

  private readonly handlerError: HandleError;

  constructor(private http: HttpClient, private httpErrorHandler: HttpErrorHandler) {
    this.handlerError = this.httpErrorHandler.createHandleError('exerciceService')
   }

   getExercices(): Observable<Exercice[]> {
    return this.http.get<Exercice[]>(this.entityUrl + 's')
    .pipe(
      catchError(this.handlerError('getExercices', []))
    );
   }

   getExerciceByID(exerciceID: String): Observable<Exercice> {
    return this.http.get<Exercice>((this.entityUrl + '/' + exerciceID))
    .pipe(
      catchError(this.handlerError('getExerciceByID', {} as Exercice))
    );
  }

  addAndUpdateExercice(exercice: Exercice): Observable<Exercice> {
    return this.http.post<Exercice>(this.entityUrl, exercice)
    .pipe(
      catchError(this.handlerError('addExercice', exercice))
    );
  }

  deleteExercice(exerciceID: string): Observable<number> {
    return this.http.delete<number>(this.entityUrl + '/' + exerciceID)
    .pipe(
      catchError(this.handlerError('deleteExercice', 0))
    );
  }
}
