import { Component, OnDestroy, OnInit } from '@angular/core';
import { User } from '../models/User.model';
import { Subscription } from 'rxjs/Subscription';
import { UserService } from '../services/user.service';


@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  users:User[];
  userSubscription:Subscription;

  constructor(private userService:UserService) { }

  ngOnInit() {
    /*
    Ce component très simple souscrit au Subject dans  UserService  
    et le déclenche pour en récupérer les informations 
    et les rendre disponibles au template
    */
    this.userSubscription=this.userService.userSubject.subscribe(
      (users:User[])=>{
        this.users=users;
      }
    );
    //rend dispo au template
    this.userService.emitUsers();
  }

  ngOnDestroy() {
    this.userSubscription.unsubscribe();
  }

  
}
