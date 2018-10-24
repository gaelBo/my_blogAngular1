import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators, FormArray} from '@angular/forms';
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
      //Validators.required verifie que le chqmp
      //n est pas  libre avant l envoi...
      firstName: ['',Validators.required],
      lastName: ['',Validators.required],
      email: ['',[Validators.required, Validators.email]],
      drinkPreference: ['',Validators.required],
      //ajout d un form dynamique
      hobbies:this.formBuilder.array([])
    });
  }

  onSubmitForm() {
    const formValue = this.userForm.value;
    const newUser = new User(
      formValue['firstName'],
      formValue['lastName'],
      formValue['email'],
      formValue['drinkPreference'],
      //recuperation du form dynamique
      formValue['hobbies']? formValue['hobbies']:[]
    );
    this.userService.addUser(newUser);
    this.router.navigate(['/users']);
  }

  //pour resoudre le pb typage 
  //et recuperer les donnees dans ce form dynamique
  getHobbies():FormArray{
    return this.userForm.get('hobbies')as FormArray;
  }

  onAddHobby() {
    const newHobbyControl = this.formBuilder.control(null, Validators.required);
    this.getHobbies().push(newHobbyControl);
}

}
