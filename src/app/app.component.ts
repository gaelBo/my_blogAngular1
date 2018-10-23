import { Component, OnInit} from '@angular/core';
import { Observable } from 'rxjs/Observable';
import  'rxjs/add/Observable/interval'; //besoin de la methode interval()
import { Subscription } from 'rxjs';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Angular Learning';

  //L OBSERVEUR 
  secondes:number;
  //eviter les pb de plantage avec les Observables personalisés
  counterSubscription:Subscription;

  constructor(){

  }

  ngOnInit(){ 
    //counter est notre Observable
    //qui compte le temps que le visiteur a fait 
    //sur notre site
    const counter=Observable.interval(1000);
    //declencher a chaque emission de donnee
    // par lObservable
   this.counterSubscription= counter.subscribe(
      (value)=>{
        this.secondes=value;

      },
      //genere tout erreur eventuelle
      (error)=>{
        console.log('Uh-OH, an error occurred:' +error);
      },
      //3ieme, declenchera si l Observable s achève
      ()=>{
        console.log('Observable complete');
        confirm('Observable complete');
      }
    );
   }
 
   
   ngOnDestroy() {
    /*
     détruit la souscription et empêche les comportements inattendus
      liés aux Observables infinis, donc n'oubliez pas de unsubscribe !
    */
    this.counterSubscription.unsubscribe();
  }
}
