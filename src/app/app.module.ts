// app.module.ts
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
//import { ChatComponent } from './chat/chat.component';

@NgModule({
  declarations: [
    //AppComponent,
    //ChatComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppComponent
  ],
  providers: [],
  bootstrap: []
})
export class AppModule { }
