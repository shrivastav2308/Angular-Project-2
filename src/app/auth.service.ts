import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { AuthResponse } from './auth-response';
import { catchError, tap } from 'rxjs/operators';
import { Subject, throwError } from 'rxjs';
import { User } from './user.model';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  user = new Subject<User>();

  constructor(private http: HttpClient,
    private router: Router) { }

  signUp(username: string, email: string, password: string, type: string) {
    return this.http.post<AuthResponse>(
      'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyD5q3uI6R7YgDbg4KydLrp_vtd4Vu7MCng', 
      {
        username: username,  
        email: email,
        password: password,
        type: type,
        returnSecureToken: true
      }
    ).pipe(catchError(errorRes => {
      let errorMsg = 'An unknown error occurred!';
      if(!errorRes.error || !errorRes.error.error) {
        return throwError(errorMsg);
      }
      switch(errorRes.error.error.message) {
        case 'EMAIL_EXISTS':
          errorMsg = 'Email already exists!'
      }
      return throwError(errorMsg);
    }), tap(resData => {
      const expirationDate = new Date(new Date().getTime() + +resData.expiresIn * 1000);
      const user = new User(resData.email, resData.localId, resData.idToken, expirationDate);
      this.user.next(user);
    }));
  }

  login(username: string, email:string, password: string, type: string) {
    return this.http.post<AuthResponse>(
      'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyD5q3uI6R7YgDbg4KydLrp_vtd4Vu7MCng',
      {
        username: username,  
        email: email,
        password: password,
        type: type,
        returnSecureToken: true
      }
    ).pipe(catchError(errorRes => {
      let errorMsg = 'Please check your credentials!';
      if(!errorRes.error || !errorRes.error.error) {
        return throwError(errorMsg);
      }
      return throwError(errorMsg);
    }), tap(resData => {
      const expirationDate = new Date(new Date().getTime() + +resData.expiresIn * 1000);
      const user = new User(resData.email, resData.localId, resData.idToken, expirationDate);
      this.user.next(user);
    }));
  }

  logout() {
    this.user.next(null!);
    this.router.navigate(['/admin-login']);
  }
}
