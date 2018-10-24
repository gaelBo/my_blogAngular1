import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {UserService} from '../services/user.service';
import {Router } from '@angular/router';
import { User} from '../models/User.model';

@Component({
  selector: 'app-new-user',
  templateUrl: './new-user.component.html',
  styleUrls: ['./new-user.component.css']
})
export class NewUserComponent implements OnInit {

  //Un formulaire réactif est de type  FormGroup ,
  // et il regroupe plusieurs  FormControl
  userForm:FormGroup;

  //FormBuilder() sera appelé pour la construction de NewUser
  constructor(private formBuilder:FormBuilder,
              private userService:UserService,
              private router: Router) { }

  ngOnInit() {
    //creation du formulaire reactif
    this.initForm();
  }

  //creer formGroup grace a Builder
  initForm(){
    this.userForm = this.formBuilder.group({
      firstName: '',
      lastName: '',
      email: '',
      drinkPreference: ''
    });
  }

  onSubmitForm() {
    const formValue = this.userForm.value;
    const newUser = new User(
      formValue['firstName'],
      formValue['lastName'],
      formValue['email'],
      formValue['drinkPreference']
    );
    this.userService.addUser(newUser);
    this.router.navigate(['/users']);
  }

}
