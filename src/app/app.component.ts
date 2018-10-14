import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'EventHelper_app';
  isAuth=false;
  
  eventName1='Geburstag ';
  eventName2='Football';
  eventName3='HochZeit';

  
  constructor(){
    setTimeout(
      ()=>{
        this.isAuth=true
      },4000

    );
  }

  onbesteatigung(){
    console.log('Sie haben bestätigen, dass Sie an der Event teilnehmen, Cool!!!');
  }
}
