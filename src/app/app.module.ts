import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { PostListItemComponentComponent } from './post-list-item-component/post-list-item-component.component';
import { AppareilComponent } from './appareil/appareil.component';
import {AppareilServices} from './services/appareil.service';

@NgModule({
  declarations: [
    AppComponent,
    PostListItemComponentComponent,
    AppareilComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [AppareilServices],
  bootstrap: [AppComponent]
})
export class AppModule { }
