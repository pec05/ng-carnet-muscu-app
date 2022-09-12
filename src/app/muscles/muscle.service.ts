import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import HttpErrorHandler, { HandleError } from '../error.service';
import { Muscle } from './muscle';

@Injectable({
  providedIn: 'root'
})
export class MuscleService {

  entityUrl = environment.REST_API_URL + 'muscle';

  private readonly handlerError: HandleError;

  constructor(private http: HttpClient, private httpErrorHandler: HttpErrorHandler) {
    this.handlerError = this.httpErrorHandler.createHandleError('MuscleService')
   }

  getMuscles() : Observable<Muscle[]> {
    return this.http.get<Muscle[]>(this.entityUrl + 's')
    .pipe(
      catchError(this.handlerError('getMuscles', []))
    );
  }

  getMuscleByID(muscleID: String): Observable<Muscle> {
    return this.http.get<Muscle>((this.entityUrl + '/' + muscleID))
    .pipe(
      catchError(this.handlerError('getMuscleID', {} as Muscle))
    );
  }

  addAndUpdateMuscle(muscle: Muscle): Observable<Muscle> {
    return this.http.post<Muscle>(this.entityUrl, muscle)
    .pipe(
      catchError(this.handlerError('addMuscle', muscle))
    );
  }

  deleteMuscle(muscleID: string): Observable<number> {
    return this.http.delete<number>(this.entityUrl + '/' + muscleID)
    .pipe(
      catchError(this.handlerError('deleteMuscle', 0))
    );
  }
}
