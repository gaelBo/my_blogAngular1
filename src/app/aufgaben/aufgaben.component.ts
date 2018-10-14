import { Component,Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-aufgaben',
  templateUrl: './aufgaben.component.html',
  styleUrls: ['./aufgaben.component.css']
})
export class AufgabenComponent implements OnInit {

  @Input() aufgabeName: string= "5 Paletten Mineralwasser ohne Kohlensäure kaufen";
  @Input() aufgabeStatus: string = 'Erledigt';
  @Input() aufgabe2Status: string = 'Nicht erledigt';
  constructor() { }

  //list von Aufgaben, später daten werden von DB geruft
  
 public aufgabens = [
    {
      name: '5 Palettes MineralWasser einkaufen',
      status: 'Nicht erledigt'
    },
    {
      name: 'Partyraum dekorieren',
      status: 'Erledigt'
    },
    {
      name: 'Kuchen backen',
      status: 'Erledigt'
    }
  ];
  ngOnInit() {
  }

  geAufgabeStatus(){
    return this.aufgabeStatus;
     }

     getColorAufgabe(i){
       if(this.aufgabens[i].status==='Erledigt')
          return 'green';
         else  return 'red';
     }

}
