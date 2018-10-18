import { Component, OnInit } from '@angular/core';
import { AppareilService } from '../services/appareil.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-single-appareil',
  templateUrl: './single-appareil.component.html',
  styleUrls: ['./single-appareil.component.css']
})
export class SingleAppareilComponent implements OnInit {

  name:string='Appareil';
  status:string='Statut';

  //ActivatedRoute permet de recuper le param 
  //qu'on passera au router pour aller a la page souhaitez

  constructor(private appareilService:AppareilService,
              private route:ActivatedRoute) {

   }

  ngOnInit() {
    //l objet snapshot contient les params de l' URL
    //this.name=this.route.snapshot.params['id'];
    const id=this.route.snapshot.params['id'];
    //le Param des URL retourner etant un String, 
    //il faut le caster en number (+id)
    this.name=this.appareilService.getAppareilById(+id).name;
    this.status=this.appareilService.getAppareilById(+id).status;

  }

}
