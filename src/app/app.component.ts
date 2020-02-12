import {Component, OnInit} from '@angular/core';
import {Tokenstorageservice} from './security/service/tokenstorageservice';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'mypizzashopAngular';
  info: any;

  constructor(private token: Tokenstorageservice) {}

  ngOnInit() {
    this.info = {
      token: this.token.getToken(),
      username: this.token.getUsername(),
      authorities: this.token.getAuthorities()
    };
  }

  logout() {
    this.token.signOut();
    window.location.reload();
  }



}
