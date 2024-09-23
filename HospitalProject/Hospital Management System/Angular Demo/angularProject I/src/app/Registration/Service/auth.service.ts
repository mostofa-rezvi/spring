import { Inject, Injectable, PLATFORM_ID } from '@angular/core';
import { Authresponse } from '../Model/authresponse';
import { Router } from '@angular/router';
import { BehaviorSubject, catchError, map, Observable, of, tap } from 'rxjs';
import { LoginModel } from '../Model/login.model';
import { HttpClient, HttpParams } from '@angular/common/http';
import { RegisterModel } from '../Model/register.model';
import { isPlatformBrowser } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private baseUrl: string = "http://localhost:3000/users";

  private currentUserSubject: BehaviorSubject<LoginModel | null>;
  public currentUser$: Observable<LoginModel | null>;

  constructor(
    private http: HttpClient,
    @Inject(PLATFORM_ID) private platformId: Object  // Injecting PLATFORM_ID to check if it's browser
  ) {
    this.currentUserSubject = new BehaviorSubject<LoginModel | null>(this.getUserProfileFromStorage());
    this.currentUser$ = this.currentUserSubject.asObservable();
  }

  private isBrowser(): boolean {
    return isPlatformBrowser(this.platformId);
  }

  registration(user: LoginModel): Observable<Authresponse> {
    return this.http.post<LoginModel>(this.baseUrl, user).pipe(
      map((newUser: LoginModel) => {
        const token = btoa(`${newUser.email}${newUser.password}`);
        return { token, user: newUser } as Authresponse;
      }),
      catchError(error => {
        console.error('Registration error:', error);
        throw error;
      })
    );
  }

  login(credentials: { email: string; password: string }): Observable<Authresponse> {
    let params = new HttpParams().append('email', credentials.email);

    return this.http.get<LoginModel[]>(`${this.baseUrl}`, { params }).pipe(
      map(users => {
        if (users.length > 0) {
          const user = users[0];
          if (user.password === credentials.password) {
            const token = btoa(`${user.email}:${user.password}`);
            this.storeToken(token);
            this.setCurrentUser(user);
            return { token, user } as Authresponse;
          } else {
            this.currentUserSubject.next(null);
            throw new Error('Invalid password');
          }
        } else {
          this.currentUserSubject.next(null);
          throw new Error('User not found');
        }
      }),
      catchError(error => {
        this.currentUserSubject.next(null);
        console.error('Login error:', error);
        throw error;
      })
    );
  }

  storeToken(token: string): void {
    if (this.isBrowser()) {
      localStorage.setItem('token', token);
    }
  }

  private setCurrentUser(user: LoginModel): void {
    if (this.isBrowser()) {
      localStorage.setItem('currentUser', JSON.stringify(user));
    }
    this.currentUserSubject.next(user);
    console.log(user);
    this.currentUser$.subscribe({
      next: res => {
        console.log(res)
      }
    })
  }

  logout(): void {
    if (this.isBrowser()) {
      localStorage.removeItem('currentUser');
      localStorage.removeItem('token');
      this.currentUserSubject.next(null);
    }
  }

  getToken(): string | null {
    return this.isBrowser() ? localStorage.getItem('token') : null;
  }

  getUserRole(): any {
    let currentUser = this.getUserProfileFromStorage();
    return currentUser == null ? null : currentUser.role;
  }

  getUserProfileFromStorage(): LoginModel | null {
    if (this.isBrowser()) {
      const userProfile = localStorage.getItem('currentUser');
      console.log('User Profile is: ', userProfile);
      return userProfile ? JSON.parse(userProfile) : null;
    }
    return null;
  }


}
