import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-post-list-item-component',
  templateUrl: './post-list-item-component.component.html',
  styleUrls: ['./post-list-item-component.component.css']
})
export class PostListItemComponentComponent implements OnInit {

  postId: string;
  postTitle: string;
  postContent: string;
  postLoveIts=0;
  postCreated_at: Date;
  //nombre de postes
  postCompteur=3;
 // let decimal: postCompteurF=2;

  
  constructor(){
    this.postId="1";
    this.postTitle="Proverbe Africain";
    this.postContent="Lorsque tu ne sais pas où tu vas, regarde d'où tu viens.";
    this.postLoveIts=0;
    this.postCreated_at= new Date("10/10/2017");
   
    //ensemble de Post
    this.postCompteur++;
  }
 
  incrementLoveIts(index){
   // this.postLoveIts++;
   this.blogs[index].postLoveIts++;

  }

  decrementLoveIts(index){
    this.blogs[index].postLoveIts--;

  }
  getColorBlog(index){
    if(this.blogs[index].postLoveIts<0)
    return "red";
    else if(this.blogs[index].postLoveIts==0)
      return ; //retourne couleur par defaut
    else return "green";
  
    }

  blogs = [

    {

    postId:"1",
    postTitle:"Proverbe Africain",
    postContent:"Lorsque tu ne sais pas où tu vas, regarde d'où tu viens.",
    postLoveIts:0,
    postCreated_at: new Date()

    },

    {

      postId:"2",
      postTitle:"Proverbe Africain",
      postContent:"Si tu veux aller vite, marche seul mais si tu veux aller loin, marchons ensemble.",
      postLoveIts:7,
      postCreated_at: new Date("02/01/2018")

    },

    {

 
      postId:"3",
      postTitle:"Proverbe Africain",
      postContent:"L'erreur n'annule pas la valeur de l'effort accompli.",
      postLoveIts:-8,
      postCreated_at: new Date("11/09/2016")

    },
    
    {

 
      postId:"4",
      postTitle:"Proverbe Allemand",
      postContent:"Le travail du matin vaut de l'or.",
      postLoveIts:3,
      postCreated_at: new Date("01/11/2014")

    }

  ];


  ngOnInit() {
  }

}
