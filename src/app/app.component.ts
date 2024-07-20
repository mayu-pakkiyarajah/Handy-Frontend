import { Component } from '@angular/core';
import {RouterLink, RouterLinkActive, RouterOutlet} from '@angular/router';
import {FormsModule} from "@angular/forms";
import {CloudinaryModule} from '@cloudinary/ng';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    FormsModule,
    RouterLink,
    RouterLinkActive,
    CloudinaryModule
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',

})
export class AppComponent {
  title = 'HandyHero';

  // constructor( 
  //   public signalrService: SignalrService,
  //   //public authService: AuthService //3Tutorial
  // ) 

  // ngOnInit() {
  //   this.signalrService.startConnection();
  // }

  // ngOnDestroy() {
  //   this.signalrService.hubConnection.off("askServerResponse");
  // }


}
