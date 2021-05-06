export class Film {
    nom : string; 
    duree : number; 
    categorie : string;
    constructor(nom ="",duree=0,categorie="") {
        this.nom=nom;
        this.duree= duree;
        this.categorie=categorie;
    }
}