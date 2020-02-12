import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/internal/Observable';
import {JwtResponse} from '../jwtresponse/JwtResponse';
import {Login} from '../../login/login';
import {Registration} from '../../registration/registration';

// добавляем в заголовок что отправляем 'application/json'
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })};

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private loginUrl = 'http://localhost:8080/auth/login';
  private regUrl = 'http://localhost:8080/auth/reg';
  constructor(private http: HttpClient) {}

  postLogin(postLogin: Login): Observable<JwtResponse> {
    return this.http.post<JwtResponse>(this.loginUrl, postLogin, httpOptions);
  }

  postReg(formRegistration: Registration) {
    return this.http.post(this.regUrl, formRegistration, httpOptions);
  }




}
