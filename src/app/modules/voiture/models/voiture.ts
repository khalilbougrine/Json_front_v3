export class Voiture {
  id?: number;
  matricule: string;
  marque: string;
  modele: string;
  annee: number;
  kilometrage: number;

  constructor(matricule: string, marque: string, modele: string, annee: number, kilometrage: number) {
    this.matricule = matricule;
    this.marque = marque;
    this.modele = modele;
    this.annee = annee;
    this.kilometrage = kilometrage;
  }
}
