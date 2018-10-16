import { Component, OnInit} from '@angular/core';
import { resolve } from 'dns';
import { reject } from 'q';
import {AppareilServices} from './services/appareil.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Angular Project';
  isAuth=false;

  appareils:any[];

  constructor(private appareilService:AppareilServices){
   
    //nach 4s wird der Nutzer authentifiziert
    setTimeout(
      ()=>{
        this.isAuth=true;
      },4000
    );
  }

  ngOnInit(){
    this.appareils=this.appareilService.appareils;
  }
  // le Site se mettra à jour apres 2s, par exple
  lastUpdate =new  Promise((resolve, reject)=> {
    const date=new Date();
    setTimeout(
      ()=>{
        resolve(date);
      },4000
    );
  
  });
 
  onAllumer(){
    //confirm("Wollen Sie wirklich alle Geräte anschalten ?");
    this.appareilService.switchOnAll();
  }
 
  onEteindre(){
    if(confirm('Etes-vous sur de vouloir éteindre tous vos Appareils ?')){
      this.appareilService.switchOffAll();
    } else return null;
  }
}
