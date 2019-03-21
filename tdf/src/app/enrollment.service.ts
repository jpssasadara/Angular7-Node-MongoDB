import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { User } from './user';
import { catchError } from 'rxjs/operators';
import { throwError, Observable } from 'rxjs';
import { IStudent } from './IStudent';

@Injectable({
  providedIn: 'root'
})
export class EnrollmentService {

  _url = 'http://localhost:3000/enroll';
  
  constructor(private _http: HttpClient) { }

  enroll (user: User) {
    return this._http.post<any>(this._url, user)
      .pipe(catchError(this.errorHandler))
  }
  getStudents():Observable<IStudent[]>{
    return this._http.get<IStudent[]>(this._url);
    
  }

  errorHandler(error: HttpErrorResponse) {
    return throwError(error)
  }
}
