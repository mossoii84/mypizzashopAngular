import { Component, OnInit } from '@angular/core';
import * as Stomp from 'stompjs';
import * as SockJS from 'sockjs-client';
@Component({
  selector: 'app-websocketchat',
  templateUrl: './websocketchat.component.html',
  styleUrls: ['./websocketchat.component.css']
})
export class WebsocketchatComponent implements OnInit {

  username;
  isConnected;
  messages: string [] = [];
  data;
  message;
  private stompClient = null;

  ngOnInit(): void {}
  constructor() {
    this.connect();
  }
  connect() {
    const socket = new SockJS('http://localhost:8080/ws');
    this.stompClient = Stomp.over(socket);
    this.stompClient.connect({}, () => {
      this.onConnected();
    }, this.onError());
  }


  onConnected() {
    this.isConnected = true;
    this.stompClient.subscribe('/topic/public', data => this.onMessageReceived(data));
  }

  onMessageReceived(data) {
    const message = JSON.parse(data.body);
    const username = message.username;
    // тут отоброжение на сайте
    if (message.type === 'JOIN') {
      this.showMessage(username + ' Join to the Chat');
    } else if (message.type === 'LEAVE') {
      this.showMessage(username + 'Leave the Chat');
    } else { // тут идут проверки и вывод на экран
      this.showMessage( message.body);
    }
  }
  onError() {
    console.log('WebSocket connection error');
  }
  showMessage(msg) {
    this.messages.push(msg);
  }
  disconnect() {
    if (this.stompClient != null) {
      this.stompClient.disconnect();
    }
    this.isConnected = false;
    console.log('User disconnected!');
  }

  sendName(data) {
    this.username = data.username;
    this.stompClient.send('/app/chat.addUser', {} , JSON.stringify({ username: this.username, type: 'JOIN' })
    );
  }

  sendMessage(data) {
    const message = {
      username: this.username,
      body: data.message,
      type: 'CHAT'
    };
    this.stompClient.send('/app/chat.sendMessage', {}, JSON.stringify(message));
  }



}
