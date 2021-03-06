import {Subject} from 'rxjs/Subject';

export class AppareilService{

   // 
   appareilsSubject=new Subject<any[]>();

  private appareils=[
    {
      id:1,
      name:'Machine à laver',
      status: 'éteint'
    },
    {
      id:2,
      name:'Frigo',
      status: 'allumé'
    },
    {
      id:3,
      name:'Ordinateur',
      status: 'éteint'
    }
  ];

  addAppareil(name: string, status: string) {
    const appareilObject = {
      id: 0,
      name: '',
      status: ''
    };
    appareilObject.name = name;
    appareilObject.status = status;
    appareilObject.id = this.appareils[(this.appareils.length - 1)].id + 1;
    this.appareils.push(appareilObject);
    this.emitAppareilSubject();
}

  //Appareil[]etant private, 
  //on augmente le niveaud encapsulation
  emitAppareilSubject() {
    this.appareilsSubject.next(this.appareils.slice());
  }

 


  switchOnAll(){
      for(let appareil of this.appareils){
          appareil.status='allumé';
      }
      //mise a jour du array appareils
      this.emitAppareilSubject();
  }

  switchOffAll(){
    for(let appareil of this.appareils){
        appareil.status='éteint';
    }
    this.emitAppareilSubject();
}

switchOnOne(i:number){
    this.appareils[i].status='allumé';
    this.emitAppareilSubject(); //mise a jour dans le tableau
}

switchOffOne(i:number){
    this.appareils[i].status='éteint';
    this.emitAppareilSubject();
}

getAppareilById(id: number) {
  const appareil = this.appareils.find(
    (s) => {
      return s.id === id;
    }
  );
  return appareil;
}

}