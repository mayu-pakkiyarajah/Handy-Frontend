import { Injectable } from '@angular/core';
import { HubConnection, HubConnectionBuilder } from '@microsoft/signalr';
import { fromEvent } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ChatService {
  private hubConnection!: HubConnection;

  constructor() {
    this.createConnection();
    this.startConnection();
  }

  createConnection() {
    this.hubConnection = new HubConnectionBuilder()
      .withUrl('wss://localhost:7279/ChatHub')
      .build();
  }

  startConnection() {
    this.hubConnection
      .start()
      .then(() => console.log('Connection started'))
      .catch(err => console.log('Error while establishing connection: ' + err));
  }

  sendMessage(message: string) {
    this.hubConnection.invoke('SendMessage', message);
  }

  receiveMessage() {
    return fromEvent(this.hubConnection, 'ReceiveMessage');
  }
}