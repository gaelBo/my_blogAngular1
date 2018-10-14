import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { EventErstellenComponent } from './event-erstellen/event-erstellen.component';
import { FormsModule } from '@angular/forms';
import { AufgabenComponent } from './aufgaben/aufgaben.component';

@NgModule({
  declarations: [
    AppComponent,
    EventErstellenComponent,
    AufgabenComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
