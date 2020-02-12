import { Component, OnInit } from '@angular/core';
import {AuthService} from '../security/service/authService';
import {FormControl, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {


  constructor( private authService: AuthService) { }
  FormRegistration;

  ngOnInit() {
    this.FormRegistration = new FormGroup({
      username: new FormControl(),
      password : new FormControl()
    });
  }



  newRegistration(formRegistration) {
    console.log(formRegistration.username);
    this.authService.postReg(formRegistration).subscribe(data => console.log('регистрация прошла успещно' + data));
  }
}
