import { Component, OnInit } from '@angular/core';
import {AuthService} from '../services/auth.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {

  authStatus:boolean;

  //besoin des instance AuthService 
  //et router
  constructor(private authService: AuthService, private router: Router)
   {

    }

  ngOnInit() {
    this.authStatus=this.authService.isAuth;
  }

  onSignIn() {
    //then() est une callback asynchrone 
    //permettant d'excecuter le code une fois 
    //Promise resolue
    this.authService.signIn().then(
      () => {
        console.log('Sign in successful!');
        this.authStatus = this.authService.isAuth;
        //importer le router pour naviger vers 'appareil'
        this.router.navigate(['appareils']);
      }
    );
  }

  onSignOut() {
    this.authService.signOut();
    this.authStatus = this.authService.isAuth;
  }

  
}
