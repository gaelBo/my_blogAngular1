import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-event-erstellen',
  templateUrl: './event-erstellen.component.html',
  styleUrls: ['./event-erstellen.component.css']
})
export class EventErstellenComponent implements OnInit {

  @Input() eventId: string;
  @Input() eventName: string;
  @Input() eventAdresse: string;
  @Input() eventUhrZeit: Date;
  @Input() eventSonstige: string;


  constructor() { 
     this.eventId='01';
     this.eventName='GeburstagParty';
     this.eventAdresse='In der Kleinen Au 2, Germersheim'
      this.eventSonstige = 'KLasse rote Kleidung anziehen';
      //Creer un Promise pour les taches async
      this.eventUhrZeit=new Date();
    
  }

  ngOnInit() {
  }
  
  //Promise
  lastUpdate = new Promise((resolve, reject) => {

    const date = new Date();

    setTimeout(

      () => {

        resolve(date);

      }, 2000

    );

  });

}
