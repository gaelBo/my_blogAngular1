import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { PostListItemComponentComponent } from './post-list-item-component/post-list-item-component.component';
import { AppareilComponent } from './appareil/appareil.component';
import {AppareilService} from './services/appareil.service';
import {AuthService} from './services/auth.service';
import {AuthGuard} from './services/auth-guard.service';


import { AuthComponent } from './auth/auth.component';
import { AppareilViewComponent } from './appareil-view/appareil-view.component';
import {Routes, RouterModule} from '@angular/router';
import { SingleAppareilComponent } from './single-appareil/single-appareil.component';
import { FourOhFourComponent } from './four-oh-four/four-oh-four.component';
import { EditAppareilComponent } from './edit-appareil/edit-appareil.component';

/**
 * canActivate permmettra donc de proteger la page appareil 
 * par une auth au préalable
 */
const appRoutes: Routes = [
  { path: 'appareils', canActivate:[AuthGuard], component: AppareilViewComponent },
   //le : avant un fragment de route declare ce fragment comme étant un param
  { path: 'appareils/:id',canActivate:[AuthGuard], component: SingleAppareilComponent },
  {path: 'edit', canActivate:[AuthGuard], component:EditAppareilComponent},
  { path: 'auth', component: AuthComponent },
  { path: 'posts', component: PostListItemComponentComponent },
  { path: '', component: AppareilViewComponent },
  { path: 'not-found', component:FourOhFourComponent },
  { path: '**', redirectTo: 'not-found' }

];

@NgModule({
  declarations: [
    AppComponent,
    PostListItemComponentComponent,
    AppareilComponent,
    AuthComponent,
    AppareilViewComponent,
    SingleAppareilComponent,
    FourOhFourComponent,
    EditAppareilComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [
    AppareilService,
    AuthService,
    AuthGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
