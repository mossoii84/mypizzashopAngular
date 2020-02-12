import { Component, OnInit } from '@angular/core';
import {Login} from './login';
import {AuthService} from '../security/service/authService';
import {Tokenstorageservice} from '../security/service/tokenstorageservice';
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private authService: AuthService, private tokenStorage: Tokenstorageservice) { }

  formLogin = new FormGroup({
    username: new FormControl('', [ Validators.required, Validators.minLength(2)]),
    password: new FormControl()
  });

  isLoggedIn = false; // перевод - удалось войти = нет(изначально так потом если защел меняется в коде)
  isLoginFailed = false; // не удалось войти = нет (изначально так, если клиент пробует и не заходит, в коде поставим true)
  errorMessage = '';
  roles: string[] = [];
  isLoggedName; // ник если зашел
  mytoken = this.tokenStorage.getToken(); // сделал чтобы выводить на экрана токен


  ngOnInit() {
    if (this.tokenStorage.getToken()) {
      this.isLoggedIn = true;
      this.isLoggedName = this.tokenStorage.getUsername();
      this.roles = this.tokenStorage.getAuthorities();
    }
  }

  // записываем в sessinStorage наши данные и полученый токен (токен получаем когда заходим на сайт через Лог и пасс)
  methodLoginOn(formLogin) {
    const postLogin: Login = new Login(formLogin.username, formLogin.password);
    this.authService.postLogin(postLogin).subscribe(data => {
      this.tokenStorage.saveToken(data.token);
      this.tokenStorage.saveUsername(data.username);
      this.tokenStorage.saveAuthorities(data.authorities);

      this.isLoginFailed = false;
      this.isLoggedIn = true;  // удалось войти
      this.roles = this.tokenStorage.getAuthorities();

      this.isLoggedName = this.tokenStorage.saveUsername(data.username);
      // место this.reloadPage(); вызова метода что ниже, делаем его сразу
      window.location.reload();
    }),
      error => {
        console.log(' если есть ошибка ' + error);
        this.errorMessage = error.error.message;
        this.isLoginFailed = true;
      };
  }

}
