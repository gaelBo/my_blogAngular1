import { Component, Input, OnInit } from '@angular/core';
import { Services } from '@angular/core/src/view';
import { AppareilService } from '../services/appareil.service';

@Component({
  selector: 'app-appareil',
  templateUrl: './appareil.component.html',
  styleUrls: ['./appareil.component.css']
})
export class AppareilComponent implements OnInit {

  @Input() index:number;
  @Input() appareilName:string;
  @Input() appareilStatus: string;


  constructor(private appareilService:AppareilService) { }

  ngOnInit() {
  }

//Fonction qui allume ou eteint en fonction du status de l appeil
onSwitch(){
  if(this.appareilStatus==='allumé'){
    this.appareilService.switchOffOne(this.index);
  } else if(this.appareilStatus==='éteint'){
    this.appareilService.switchOnOne(this.index);
  }
}

  geStatus(){
    return this.appareilStatus;
  }

  getColor(){
    if(this.appareilStatus==='allumé'){
      return 'green';
    } else return 'black'; //red
  }

}
