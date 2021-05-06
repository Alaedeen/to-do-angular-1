import { Component, OnInit } from '@angular/core';
import {Film} from '../../model/film'

@Component({
  selector: 'app-films',
  templateUrl: './films.component.html',
  styleUrls: ['./films.component.css']
})
export class FilmsComponent implements OnInit {

  constructor() { }

  listFilms: Film[] =[
    {nom:'MANDY',duree:2,categorie:'action'},
    {nom:'LOVE-AFTER-LOVE',duree:3,categorie:'drama'},
    {nom:'YOU-WERE-NEVER-REALLY-HERE',duree:2,categorie:'drama'},
    {nom:'THE-RIDER',duree:3,categorie:'drama'},
    {nom:'FIRST-REFORMED',duree:6,categorie:'action'}
  ];
  listFilmAffiches : Film[]
  film: Film = {nom:'',duree:0,categorie:''}
  nbrAction: number = 0
  showText=false
  calculeDisabled=false
  nbrFilms : number =this.listFilms.length
  err =false
  succ =false

  ngOnInit(): void {
    this.listFilmAffiches=this.listFilms
  }
  
  calculerNbrAction(){
    let count=0
    this.listFilms.forEach(film => {
      if (film.categorie == 'action') {
        count++
      }
    });
    
    this.nbrAction=count
    this.showText=true
    this.calculeDisabled=true
  }

  changerNbrFilms(){
    this.listFilmAffiches=this.listFilms.slice(0,this.nbrFilms)
  }

  ajouterFilm(){
    if (this.film.nom=='' || this.film.categorie=='' || this.film.duree==0) {
      this.err=true
      setTimeout(()=>{
        this.err=false
      }, 2000);
    }else{
      this.succ=true
      this.listFilms.push(this.film)
      console.log(this.listFilms)
      this.listFilmAffiches=this.listFilms.slice(0,this.nbrFilms)
      this.calculeDisabled=false
      setTimeout(()=>{
        this.succ=false
      }, 2000);
    }
    
     

  }


}
